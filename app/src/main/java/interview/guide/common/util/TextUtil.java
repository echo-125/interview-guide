package interview.guide.common.util;

import interview.guide.common.constant.CommonConstants.InterviewDefaults;

/**
 * 文本入参规整工具：收敛各业务模块重复的 trimToNull/hasText/normalizeDifficulty 私有拷贝。
 */
public final class TextUtil {

    private TextUtil() {}

    /**
     * trim 后为空白返回 null，否则返回 trim 结果
     */
    public static String trimToNull(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        return value.trim();
    }

    /**
     * 非空且含非空白字符
     */
    public static boolean hasText(String value) {
        return value != null && !value.isBlank();
    }

    /**
     * 难度入参规整：空值回退到系统默认难度
     */
    public static String normalizeDifficulty(String difficulty) {
        if (difficulty == null || difficulty.isBlank()) {
            return InterviewDefaults.DIFFICULTY;
        }
        return difficulty.trim();
    }
}
