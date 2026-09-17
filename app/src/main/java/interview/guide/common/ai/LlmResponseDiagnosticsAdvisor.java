package interview.guide.common.ai;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClientRequest;
import org.springframework.ai.chat.client.ChatClientResponse;
import org.springframework.ai.chat.client.advisor.api.CallAdvisor;
import org.springframework.ai.chat.client.advisor.api.CallAdvisorChain;
import org.springframework.ai.chat.metadata.ChatGenerationMetadata;
import org.springframework.ai.chat.metadata.ChatResponseMetadata;
import org.springframework.ai.chat.metadata.Usage;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.model.Generation;

import java.util.List;

/**
 * LLM 原始响应诊断 Advisor。
 *
 * 存在的理由：结构化输出失败时，业务日志只有一句
 * "Empty JSON output for validation."，看不到模型到底返回了什么，
 * 无法判断失败原因是「输出被截断」「模型回了空 body」还是「输出非 JSON」。
 *
 * 本 Advisor 紧贴模型调用（order 小于调用 Advisor），负责记录：
 * - finishReason：length 表示被输出上限截断，stop 表示正常结束，content_filter 表示被内容过滤
 * - 输出字符数 + 尾部片段：区分「完全空」与「有内容但被截断」
 * - token 用量：确认是否真的触达 max_tokens
 *
 * 只记录元数据与片段，不打印完整简历内容，避免日志体积与隐私问题。
 */
public class LlmResponseDiagnosticsAdvisor implements CallAdvisor {

    private static final Logger DIAG_LOG = LoggerFactory.getLogger(LlmResponseDiagnosticsAdvisor.class);

    /** 尾部片段保留长度：够看出是否停在半个 JSON 字符串里 */
    private static final int TAIL_LENGTH = 160;

    /** 头部片段保留长度：够看出模型是否加了 Markdown 代码块或解释文字 */
    private static final int HEAD_LENGTH = 80;

    /** 原始用量明细的日志长度上限，避免 nativeUsage 结构过深撑爆日志 */
    private static final int NATIVE_USAGE_MAX_LENGTH = 400;

    private final int order;

    public LlmResponseDiagnosticsAdvisor(int order) {
        this.order = order;
    }

    @Override
    public ChatClientResponse adviseCall(ChatClientRequest request, CallAdvisorChain chain) {
        ChatClientResponse response = chain.nextCall(request);
        try {
            logDiagnostics(response);
        } catch (Exception e) {
            // 诊断日志绝不能影响主流程：失败只降级为一条告警
            DIAG_LOG.warn("[LLM诊断] 记录响应诊断信息失败，已忽略", e);
        }
        return response;
    }

    private void logDiagnostics(ChatClientResponse response) {
        if (response == null) {
            DIAG_LOG.warn("[LLM诊断] 响应对象为 null");
            return;
        }
        ChatResponse chatResponse = response.chatResponse();
        if (chatResponse == null) {
            DIAG_LOG.warn("[LLM诊断] chatResponse 为 null（可能是上游未返回任何内容）");
            return;
        }

        List<Generation> results = chatResponse.getResults();
        if (results == null || results.isEmpty()) {
            DIAG_LOG.warn("[LLM诊断] results 为空：模型未产出任何候选结果；metadata={}",
                chatResponse.getMetadata());
            return;
        }

        Generation generation = results.getFirst();
        String text = generation.getOutput() == null ? null : generation.getOutput().getText();
        int length = text == null ? -1 : text.length();

        ChatGenerationMetadata genMeta = generation.getMetadata();
        String finishReason = genMeta == null ? null : genMeta.getFinishReason();

        ChatResponseMetadata responseMeta = chatResponse.getMetadata();
        String usage = describeUsage(responseMeta);

        DIAG_LOG.info("[LLM诊断] finishReason={}, textLength={}, usage=[{}], head=[{}], tail=[{}]",
            finishReason == null ? "未知" : finishReason,
            length,
            usage,
            preview(text, HEAD_LENGTH, true),
            preview(text, TAIL_LENGTH, false));

        // 明确点出可疑形态，便于直接检索日志
        if (length <= 0) {
            DIAG_LOG.warn("[LLM诊断] 输出为空：finishReason={}（若为 length 说明被截断；若为 stop 说明模型主动返回空）",
                finishReason);
        } else if (finishReason != null && !"stop".equalsIgnoreCase(finishReason)) {
            DIAG_LOG.warn("[LLM诊断] 输出以非 stop 结束：finishReason={}，textLength={}",
                finishReason, length);
        }
    }

    private String describeUsage(ChatResponseMetadata metadata) {
        if (metadata == null) {
            return "无元数据";
        }
        Usage usage = metadata.getUsage();
        if (usage == null) {
            return "无用量信息";
        }
        return "promptTokens=" + usage.getPromptTokens()
            + ", completionTokens=" + usage.getCompletionTokens()
            + ", totalTokens=" + usage.getTotalTokens()
            + ", nativeUsage=" + describeNativeUsage(usage);
    }

    /**
     * 打印原始用量明细。
     *
     * 存在的理由：出现「visible 输出为空但 completionTokens 被耗尽」时，
     * 需要确认 token 是否消耗在不可见内容（推理/思考 token）上。
     * OpenAI 兼容接口通常在 usage.completion_tokens_details.reasoning_tokens 暴露该拆分，
     * 而 Spring AI 的 Usage 只暴露总量，因此这里直接打印原始对象。
     *
     * 为避免日志过长，这里做长度截断。
     */
    private String describeNativeUsage(Usage usage) {
        Object nativeUsage = usage.getNativeUsage();
        if (nativeUsage == null) {
            return "无";
        }
        String text = String.valueOf(nativeUsage).replace("\r", " ").replace("\n", " ");
        return text.length() <= NATIVE_USAGE_MAX_LENGTH
            ? text
            : text.substring(0, NATIVE_USAGE_MAX_LENGTH) + "...(已截断)";
    }

    /**
     * 截取片段用于日志。同时把换行压成可见转义，避免污染日志格式。
     */
    private String preview(String text, int limit, boolean fromHead) {
        if (text == null) {
            return "null";
        }
        if (text.isEmpty()) {
            return "空字符串";
        }
        String slice = text.length() <= limit
            ? text
            : (fromHead ? text.substring(0, limit) : text.substring(text.length() - limit));
        return slice.replace("\r", "\\r").replace("\n", "\\n");
    }

    @Override
    public String getName() {
        return "LlmResponseDiagnosticsAdvisor";
    }

    @Override
    public int getOrder() {
        return order;
    }
}
