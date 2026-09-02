package interview.guide.modules.resume.listener;

import interview.guide.common.async.AbstractStreamConsumer;
import interview.guide.common.constant.AsyncTaskStreamConstants;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeJdAnalysisEntity;
import interview.guide.modules.resume.repository.ResumeJdAnalysisRepository;
import interview.guide.modules.resume.repository.ResumeRepository;
import interview.guide.modules.resume.service.ResumeJdAnalysisService;
import interview.guide.modules.resume.model.ResumeJdAnalysisResponse;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.stream.StreamMessageId;
import org.springframework.stereotype.Component;
import tools.jackson.core.JacksonException;
import tools.jackson.databind.ObjectMapper;

import java.util.Map;

/**
 * 简历 JD 匹配分析 Stream 消费者
 * 负责从 Redis Stream 消费消息并执行 AI 匹配分析
 */
@Slf4j
@Component
public class ResumeJdAnalysisStreamConsumer
        extends AbstractStreamConsumer<ResumeJdAnalysisStreamConsumer.JdAnalyzePayload> {

    private final ResumeJdAnalysisService jdAnalysisService;
    private final ResumeJdAnalysisRepository jdAnalysisRepository;
    private final ResumeRepository resumeRepository;
    private final ObjectMapper objectMapper;

    public ResumeJdAnalysisStreamConsumer(
        RedisService redisService,
        ResumeJdAnalysisService jdAnalysisService,
        ResumeJdAnalysisRepository jdAnalysisRepository,
        ResumeRepository resumeRepository,
        ObjectMapper objectMapper
    ) {
        super(redisService);
        this.jdAnalysisService = jdAnalysisService;
        this.jdAnalysisRepository = jdAnalysisRepository;
        this.resumeRepository = resumeRepository;
        this.objectMapper = objectMapper;
    }

    record JdAnalyzePayload(Long analysisId, String llmProvider) {}

    @Override
    protected String taskDisplayName() {
        return "JD 匹配分析";
    }

    @Override
    protected String streamKey() {
        return AsyncTaskStreamConstants.RESUME_JD_ANALYZE_STREAM_KEY;
    }

    @Override
    protected String groupName() {
        return AsyncTaskStreamConstants.RESUME_JD_ANALYZE_GROUP_NAME;
    }

    @Override
    protected String consumerPrefix() {
        return AsyncTaskStreamConstants.RESUME_JD_ANALYZE_CONSUMER_PREFIX;
    }

    @Override
    protected String threadName() {
        return "jd-analyze-consumer";
    }

    @Override
    protected JdAnalyzePayload parsePayload(StreamMessageId messageId, Map<String, String> data) {
        String analysisIdStr = data.get(AsyncTaskStreamConstants.FIELD_ANALYSIS_ID);
        if (analysisIdStr == null) {
            log.warn("消息格式错误，跳过: messageId={}", messageId);
            return null;
        }
        return new JdAnalyzePayload(Long.parseLong(analysisIdStr),
            data.get(AsyncTaskStreamConstants.FIELD_LLM_PROVIDER));
    }

    @Override
    protected String payloadIdentifier(JdAnalyzePayload payload) {
        return "analysisId=" + payload.analysisId();
    }

    @Override
    protected boolean shouldSkip(JdAnalyzePayload payload) {
        return jdAnalysisRepository.findById(payload.analysisId())
            .map(entity -> entity.getAnalysisStatus() == AsyncTaskStatus.COMPLETED)
            .orElse(true);
    }

    @Override
    protected void markProcessing(JdAnalyzePayload payload) {
        updateAnalysisStatus(payload.analysisId(), AsyncTaskStatus.PROCESSING, null);
    }

    @Override
    protected void processBusiness(JdAnalyzePayload payload) {
        ResumeJdAnalysisEntity analysis = jdAnalysisRepository.findById(payload.analysisId()).orElse(null);
        if (analysis == null) {
            log.warn("JD 匹配分析记录已被删除，跳过任务: analysisId={}", payload.analysisId());
            return;
        }

        // analysis.getResume() 是 LAZY 代理，消费者线程无 Hibernate Session，直接取会抛
        // LazyInitializationException；这里通过 resumeId 独立加载非代理的 ResumeEntity
        Long resumeId = analysis.getResume() != null ? analysis.getResume().getId() : null;
        if (resumeId == null) {
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED,
                "诊断记录缺少简历关联: analysisId=" + payload.analysisId());
        }
        ResumeEntity resume = resumeRepository.findById(resumeId).orElse(null);
        if (resume == null) {
            // 简历已被删除：抛异常让模板走 markFailed 而非 markCompleted，避免误标完成
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED,
                "简历已被删除: analysisId=" + payload.analysisId());
        }

        String jdText = analysis.getJdText();
        if (jdText == null || jdText.trim().isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED,
                "JD 内容为空: analysisId=" + payload.analysisId());
        }
        String resumeText = resume.getResumeText();
        if (resumeText == null || resumeText.trim().isEmpty()) {
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED,
                "简历文本为空: analysisId=" + payload.analysisId());
        }

        String llmProvider = payload.llmProvider() != null ? payload.llmProvider() : analysis.getLlmProvider();
        ResumeJdAnalysisResponse result = jdAnalysisService.analyze(resumeText, jdText, llmProvider);

        try {
            analysis.setMatchScore(result.matchScore());
            analysis.setSummary(result.summary());
            analysis.setSkillGapsJson(objectMapper.writeValueAsString(result.skillGaps()));
            analysis.setWeaknessesJson(objectMapper.writeValueAsString(result.weaknesses()));
            analysis.setRecommendationsJson(objectMapper.writeValueAsString(result.recommendations()));
            jdAnalysisRepository.save(analysis);
            log.info("JD 匹配分析结果已保存: analysisId={}, resumeId={}, matchScore={}",
                analysis.getId(), resume.getId(), result.matchScore());
        } catch (JacksonException e) {
            log.error("序列化 JD 匹配分析结果失败: analysisId={}", payload.analysisId(), e);
            throw new BusinessException(ErrorCode.RESUME_JD_ANALYSIS_FAILED, "保存 JD 匹配分析结果失败");
        }
    }

    @Override
    protected void markCompleted(JdAnalyzePayload payload) {
        updateAnalysisStatus(payload.analysisId(), AsyncTaskStatus.COMPLETED, null);
    }

    @Override
    protected void markFailed(JdAnalyzePayload payload, String error) {
        updateAnalysisStatus(payload.analysisId(), AsyncTaskStatus.FAILED, error);
    }

    @Override
    protected void retryMessage(JdAnalyzePayload payload, int retryCount) {
        Long analysisId = payload.analysisId();
        try {
            Map<String, String> message = new java.util.LinkedHashMap<>();
            message.put(AsyncTaskStreamConstants.FIELD_ANALYSIS_ID, analysisId.toString());
            if (payload.llmProvider() != null && !payload.llmProvider().isBlank()) {
                message.put(AsyncTaskStreamConstants.FIELD_LLM_PROVIDER, payload.llmProvider());
            }
            message.put(AsyncTaskStreamConstants.FIELD_RETRY_COUNT, String.valueOf(retryCount));

            redisService().streamAdd(
                AsyncTaskStreamConstants.RESUME_JD_ANALYZE_STREAM_KEY,
                message,
                AsyncTaskStreamConstants.STREAM_MAX_LEN
            );
            log.info("JD 匹配分析任务已重新入队: analysisId={}, retryCount={}", analysisId, retryCount);

        } catch (Exception e) {
            log.error("重试入队失败: analysisId={}, error={}", analysisId, e.getMessage(), e);
            updateAnalysisStatus(analysisId, AsyncTaskStatus.FAILED, truncateError("重试入队失败: " + e.getMessage()));
            // 重抛给模板：保留原消息 pending 由回收机制重投，避免任务静默丢失
            throw e;
        }
    }

    /**
     * 更新分析状态
     */
    private void updateAnalysisStatus(Long analysisId, AsyncTaskStatus status, String error) {
        try {
            jdAnalysisRepository.findById(analysisId).ifPresent(entity -> {
                entity.setAnalysisStatus(status);
                entity.setAnalysisError(error);
                jdAnalysisRepository.save(entity);
                log.debug("JD 匹配分析状态已更新: analysisId={}, status={}", analysisId, status);
            });
        } catch (Exception e) {
            log.error("更新 JD 匹配分析状态失败: analysisId={}, status={}, error={}",
                analysisId, status, e.getMessage(), e);
        }
    }
}
