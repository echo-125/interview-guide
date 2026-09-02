package interview.guide.common.config;

import java.io.IOException;
import java.util.Set;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

/**
 * SPA 静态托管与前端路由兜底。
 *
 * <p>React 前端打包产物放在 classpath:/static/ 下后，/history、/interview 等
 * React Router 子路由在浏览器刷新时服务器上并不存在对应文件，会 404。
 * 这里接管 "/" 的静态资源解析：命中的资源正常返回；未命中且是"无后缀的页面路径"
 * 则回退到 /index.html，交由前端路由渲染。
 *
 * <p>以下路径不参与兜底，保持 404 / JSON 错误语义：
 * <ul>
 *   <li>/api/**：后端业务接口（JSON 404 由全局异常处理返回）</li>
 *   <li>/v3、/swagger-ui、/webjars、/actuator、/ws：OpenAPI 文档、运维端点与 WebSocket</li>
 *   <li>任何带文件后缀的路径：缺失的 js/css/图片应报 404，而不是返回 index.html</li>
 * </ul>
 */
@Configuration
public class SpaWebConfig implements WebMvcConfigurer {

  /**
   * 首段路径命中即跳过兜底的前缀。webjars 需显式排除：
   * swagger 依赖的静态资源位于 classpath:/META-INF/resources/webjars/ 下。
   */
  private static final Set<String> NON_SPA_TOP_LEVEL_PATHS =
      Set.of("api", "v3", "swagger-ui", "webjars", "actuator", "ws");

  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    // 手动接管 "/**" 后 Boot 自动配置的默认 handler 会自动退避；
    // locations 与 Boot 默认保持一致，确保 META-INF/resources（Swagger UI）仍然可用。
    registry.addResourceHandler("/**")
        .addResourceLocations(
            "classpath:/META-INF/resources/",
            "classpath:/resources/",
            "classpath:/static/",
            "classpath:/public/")
        .resourceChain(true)
        .addResolver(new SpaPathResourceResolver());
  }

  static class SpaPathResourceResolver extends PathResourceResolver {

    @Override
    protected Resource getResource(String resourcePath, Resource location) throws IOException {
      Resource requested = location.createRelative(resourcePath);
      if (requested.exists() && requested.isReadable()) {
        return requested;
      }
      if (isSpaRoute(resourcePath)) {
        Resource index = location.createRelative("index.html");
        // 只有当前 location 下确实存在 index.html 才兜底，否则返回 null 让链尝试下一个 location
        if (index.exists() && index.isReadable()) {
          return index;
        }
      }
      return null;
    }

    private boolean isSpaRoute(String resourcePath) {
      if (resourcePath == null || resourcePath.isBlank()) {
        return true;
      }
      String firstSegment = resourcePath.split("/", 2)[0];
      if (NON_SPA_TOP_LEVEL_PATHS.contains(firstSegment)) {
        return false;
      }
      // 最后一段带 "." 视为静态资源请求（如 /assets/app.js、/favicon.ico），缺失时保持 404
      String lastSegment = resourcePath.substring(resourcePath.lastIndexOf('/') + 1);
      return !lastSegment.contains(".");
    }
  }
}
