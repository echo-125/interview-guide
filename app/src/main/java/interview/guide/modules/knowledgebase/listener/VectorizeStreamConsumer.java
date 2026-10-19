package interview.guide.modules.knowledgebase.listener;

import interview.guide.common.async.AbstractStreamConsumer;
import interview.guide.common.constant.AsyncTaskStreamConstants;
import interview.guide.common.exception.BusinessException;
import interview.guide.common.exception.ErrorCode;
import interview.guide.infrastructure.redis.RedisService;
import interview.guide.modules.knowledgebase.model.KnowledgeBaseEntity;
import interview.guide.modules.knowledgebase.model.VectorStatus;
import interview.guide.modules.knowledgebase.repository.KnowledgeBaseRepository;
import interview.guide.modules.knowledgebase.service.KnowledgeBaseParseService;
import interview.guide.modules.knowledgebase.service.KnowledgeBaseVectorService;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.stream.StreamMessageId;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * 知识库向量化 Stream 消费者
 * 负责从 Redis Stream 消费消息并执行向量化
 */
@Slf4j
@Component
public class VectorizeStreamConsumer extends AbstractStreamConsumer<VectorizeStreamConsumer.VectorizePayload> {

    private final KnowledgeBaseVectorService vectorService;
    private final KnowledgeBaseRepository knowledgeBaseRepository;
    private final KnowledgeBaseParseService parseService;

    public VectorizeStreamConsumer(
        RedisService redisService,
        KnowledgeBaseVectorService vectorService,
        KnowledgeBaseRepository knowledgeBaseRepository,
        KnowledgeBaseParseService parseService
    ) {
        super(redisService);
        this.vectorService = vectorService;
        this.knowledgeBaseRepository = knowledgeBaseRepository;
        this.parseService = parseService;
    }

    /**
     * 向量化载荷。chunkCount 由 processBusiness 在向量化成功后填入，
     * 供 markCompleted 落库使用；每个消息各持一个实例，无需额外同步。
     */
    static final class VectorizePayload {
        private final Long kbId;
        private Integer chunkCount;

        VectorizePayload(Long kbId) {
            this.kbId = kbId;
        }

        Long kbId() {
            return kbId;
        }

        Integer chunkCount() {
            return chunkCount;
        }

        void chunkCount(Integer chunkCount) {
            this.chunkCount = chunkCount;
        }
    }

    @Override
    protected String taskDisplayName() {
        return "向量化";
    }

    @Override
    protected String streamKey() {
        return AsyncTaskStreamConstants.KB_VECTORIZE_STREAM_KEY;
    }

    @Override
    protected String groupName() {
        return AsyncTaskStreamConstants.KB_VECTORIZE_GROUP_NAME;
    }

    @Override
    protected String consumerPrefix() {
        return AsyncTaskStreamConstants.KB_VECTORIZE_CONSUMER_PREFIX;
    }

    @Override
    protected String threadName() {
        return "vectorize-consumer";
    }

    @Override
    protected VectorizePayload parsePayload(StreamMessageId messageId, Map<String, String> data) {
        String kbIdStr = data.get(AsyncTaskStreamConstants.FIELD_KB_ID);
        if (kbIdStr == null) {
            log.warn("消息格式错误，跳过: messageId={}", messageId);
            return null;
        }
        return new VectorizePayload(Long.parseLong(kbIdStr));
    }

    @Override
    protected String payloadIdentifier(VectorizePayload payload) {
        return "kbId=" + payload.kbId();
    }

    @Override
    protected boolean shouldSkip(VectorizePayload payload) {
        return knowledgeBaseRepository.findById(payload.kbId())
            .map(kb -> kb.getVectorStatus() == VectorStatus.COMPLETED)
            .orElse(true);
    }

    @Override
    protected void markProcessing(VectorizePayload payload) {
        updateVectorStatus(payload.kbId(), VectorStatus.PROCESSING, null);
    }

    @Override
    protected void processBusiness(VectorizePayload payload) {
        Long kbId = payload.kbId();
        KnowledgeBaseEntity kb = knowledgeBaseRepository.findById(kbId).orElse(null);
        if (kb == null) {
            log.warn("知识库已被删除，跳过向量化任务: kbId={}", kbId);
            return;
        }
        // 消息只携带 kbId，内容从存储重新解析，避免大文本进 Stream
        String content = parseService.downloadAndParseContent(kb.getStorageKey(), kb.getOriginalFilename());
        if (content == null || content.trim().isEmpty()) {
            throw new BusinessException(ErrorCode.INTERNAL_ERROR, "无法从文件中提取文本内容: kbId=" + kbId);
        }
        payload.chunkCount(vectorService.vectorizeAndStore(kbId, content));
    }

    @Override
    protected void markCompleted(VectorizePayload payload) {
        updateVectorStatus(payload.kbId(), VectorStatus.COMPLETED, null, payload.chunkCount());
    }

    @Override
    protected void markFailed(VectorizePayload payload, String error) {
        updateVectorStatus(payload.kbId(), VectorStatus.FAILED, error);
    }

    @Override
    protected void retryMessage(VectorizePayload payload, int retryCount) {
        Long kbId = payload.kbId();
        try {
            Map<String, String> message = Map.of(
                AsyncTaskStreamConstants.FIELD_KB_ID, kbId.toString(),
                AsyncTaskStreamConstants.FIELD_RETRY_COUNT, String.valueOf(retryCount)
            );

            redisService().streamAdd(
                AsyncTaskStreamConstants.KB_VECTORIZE_STREAM_KEY,
                message,
                AsyncTaskStreamConstants.STREAM_MAX_LEN
            );
            log.info("向量化任务已重新入队: kbId={}, retryCount={}", kbId, retryCount);

        } catch (Exception e) {
            log.error("重试入队失败: kbId={}, error={}", kbId, e.getMessage(), e);
            updateVectorStatus(kbId, VectorStatus.FAILED, truncateError("重试入队失败: " + e.getMessage()));
            // 重抛给模板：保留原消息 pending 由回收机制重投，避免任务静默丢失
            throw e;
        }
    }

    /**
     * 更新向量化状态，不涉及分块数统计。
     */
    private void updateVectorStatus(Long kbId, VectorStatus status, String error) {
        updateVectorStatus(kbId, status, error, null);
    }

    /**
     * 更新向量化状态；chunkCount 非空时一并回写分块数。
     *
     * @param chunkCount 本次向量化写入的分块数量，仅成功路径传入；
     *                   为 null 时保留原有统计值，避免处理中/失败状态覆盖已展示的数字
     */
    private void updateVectorStatus(Long kbId, VectorStatus status, String error, Integer chunkCount) {
        try {
            knowledgeBaseRepository.findById(kbId).ifPresent(kb -> {
                kb.setVectorStatus(status);
                kb.setVectorError(error);
                if (chunkCount != null) {
                    kb.setChunkCount(chunkCount);
                }
                knowledgeBaseRepository.save(kb);
                log.debug("向量化状态已更新: kbId={}, status={}, chunkCount={}", kbId, status, chunkCount);
            });
        } catch (Exception e) {
            log.error("更新向量化状态失败: kbId={}, status={}, error={}", kbId, status, e.getMessage(), e);
        }
    }

}
