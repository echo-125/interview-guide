package interview.guide.modules.resume.listener;

import interview.guide.common.async.AbstractStreamProducer;
import interview.guide.common.constant.AsyncTaskStreamConstants;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.common.transaction.TransactionalExecutor;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.resume.repository.ResumeJdAnalysisRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * 简历 JD 匹配分析任务生产者
 * 负责发送诊断任务到 Redis Stream
 */
@Slf4j
@Component
public class ResumeJdAnalysisStreamProducer
        extends AbstractStreamProducer<ResumeJdAnalysisStreamProducer.JdAnalyzeTaskPayload> {

    private final ResumeJdAnalysisRepository jdAnalysisRepository;
    private final TransactionalExecutor transactionalExecutor;

    record JdAnalyzeTaskPayload(Long analysisId, String llmProvider) {}

    public ResumeJdAnalysisStreamProducer(
        RedisService redisService,
        ResumeJdAnalysisRepository jdAnalysisRepository,
        TransactionalExecutor transactionalExecutor
    ) {
        super(redisService);
        this.jdAnalysisRepository = jdAnalysisRepository;
        this.transactionalExecutor = transactionalExecutor;
    }

    /**
     * 发送 JD 匹配分析任务到 Redis Stream
     * 消息只携带 analysisId，JD 文本与简历文本由消费者从数据库重新读取，
     * 避免大文本进 Stream。
     *
     * @param analysisId 诊断记录ID
     * @param llmProvider 分析使用的 Provider（空 = 跟随系统默认）
     */
    public void sendJdAnalyzeTask(Long analysisId, String llmProvider) {
        sendTask(new JdAnalyzeTaskPayload(analysisId, llmProvider));
    }

    @Override
    protected String taskDisplayName() {
        return "JD 匹配分析";
    }

    @Override
    protected String streamKey() {
        return AsyncTaskStreamConstants.RESUME_JD_ANALYZE_STREAM_KEY;
    }

    @Override
    protected Map<String, String> buildMessage(JdAnalyzeTaskPayload payload) {
        Map<String, String> message = new java.util.LinkedHashMap<>();
        message.put(AsyncTaskStreamConstants.FIELD_ANALYSIS_ID, payload.analysisId().toString());
        if (payload.llmProvider() != null && !payload.llmProvider().isBlank()) {
            message.put(AsyncTaskStreamConstants.FIELD_LLM_PROVIDER, payload.llmProvider());
        }
        message.put(AsyncTaskStreamConstants.FIELD_RETRY_COUNT, "0");
        return message;
    }

    @Override
    protected String payloadIdentifier(JdAnalyzeTaskPayload payload) {
        return "analysisId=" + payload.analysisId();
    }

    @Override
    protected void onSendFailed(JdAnalyzeTaskPayload payload, String error) {
        transactionalExecutor.runRequiresNew(() ->
            jdAnalysisRepository.findById(payload.analysisId()).ifPresent(entity -> {
                entity.setAnalysisStatus(AsyncTaskStatus.FAILED);
                entity.setAnalysisError(truncateError(error));
                jdAnalysisRepository.save(entity);
            }));
    }
}
