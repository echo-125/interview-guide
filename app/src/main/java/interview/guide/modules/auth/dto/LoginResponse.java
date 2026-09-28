package interview.guide.modules.auth.dto;

/**
 * 登录成功响应。
 *
 * @param tokenName  token 提交时的 Header 名（取自 application.yml 的 sa-token.token-name），
 *                   由服务端下发可以让前端跟随配置，避免两端各自写死后不一致
 * @param tokenValue token 值，前端保存后在后续请求的 Header 中回传
 * @param username   当前登录的管理员用户名
 */
public record LoginResponse(String tokenName, String tokenValue, String username) {
}
