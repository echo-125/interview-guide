package interview.guide.common.config;

import cn.dev33.satoken.dao.SaTokenDao;
import cn.dev33.satoken.dao.SaTokenDaoForRedisson;
import cn.dev33.satoken.interceptor.SaInterceptor;
import cn.dev33.satoken.stp.StpUtil;
import lombok.extern.slf4j.Slf4j;
import org.redisson.api.RedissonClient;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Sa-Token 登录认证接入配置。
 *
 * <p>开关由配置项 {@code app.auth.enabled} 控制（见 application.yml，也可用环境变量
 * APP_AUTH_ENABLED 覆盖）：
 * <ul>
 *   <li>true：注册登录拦截器与 Redis 会话存储，{@code /api/**} 必须登录后访问；</li>
 *   <li>false（默认）：本配置类整体不生效，拦截器与 Redis 会话存储都不再注册，接口匿名可访问。</li>
 * </ul>
 *
 * <p>认证范围只覆盖 {@code /api/**}，这样设计是为了避免误伤前端静态资源：
 * <ul>
 *   <li>SPA 静态资源（{@code /}、{@code /index.html}、{@code /assets/**}）不在拦截范围内，
 *       未登录时也能正常把登录页加载出来，不会白屏；</li>
 *   <li>{@code /ws/**}（语音面试 WebSocket 握手）、{@code /actuator/**}（健康检查）、
 *       {@code /v3/api-docs} 与 {@code /swagger-ui}（接口文档）同属非 /api 路径，不受本拦截器影响；</li>
 *   <li>/api 下仅放行登录与登录态探测两个接口，见 {@link #PUBLIC_API_PATHS}。</li>
 * </ul>
 *
 * <p>类名刻意区别于框架自带的 {@code cn.dev33.satoken.config.SaTokenConfig}，
 * 本类只负责把 Sa-Token 接入本项目。
 */
@Slf4j
@Configuration
@ConditionalOnProperty(name = "app.auth.enabled", havingValue = "true", matchIfMissing = false)
public class SaTokenAuthConfig implements WebMvcConfigurer {

  /**
   * 免登录即可访问的接口。
   *
   * <p>login：登录入口本身；status：登录页需要先探测"是否已登录/是否开启了认证"，
   * 因此也必须匿名可访问。
   */
  private static final String[] PUBLIC_API_PATHS = {
      "/api/auth/login",
      "/api/auth/status",
  };

  /**
   * 会话数据存储接入 Redis（复用业务侧同一个 RedissonClient）。
   *
   * <p>SaTokenDaoForRedisson 内部固定按 String 读写，与业务缓存的全局 codec 相互隔离，
   * 不会影响业务数据的序列化方式。
   */
  @Bean
  public SaTokenDao saTokenDao(RedissonClient redissonClient) {
    return new SaTokenDaoForRedisson(redissonClient);
  }

  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(new SaInterceptor(handle -> StpUtil.checkLogin()))
        .addPathPatterns("/api/**")
        .excludePathPatterns(PUBLIC_API_PATHS);
  }
}
