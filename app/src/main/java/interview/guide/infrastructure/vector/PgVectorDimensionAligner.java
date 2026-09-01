package interview.guide.infrastructure.vector;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.core.env.Environment;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 启动时对齐 pgvector 向量列维度与配置（spring.ai.vectorstore.pgvector.dimensions）。
 *
 * <p>表为空时自动 ALTER 列类型；表中已有数据时拒绝启动并给出处理指引，
 * 避免运行期插入/检索因维度不匹配而失败。
 */
@Component
@Slf4j
@RequiredArgsConstructor
public class PgVectorDimensionAligner implements ApplicationRunner {

  private static final Pattern VECTOR_TYPE_PATTERN = Pattern.compile("vector\\((\\d+)\\)");
  private static final String DIMENSION_PROPERTY = "spring.ai.vectorstore.pgvector.dimensions";

  private final JdbcTemplate jdbcTemplate;
  private final Environment environment;

  @Override
  public void run(ApplicationArguments args) {
    Integer configured = environment.getProperty(DIMENSION_PROPERTY, Integer.class);
    if (configured == null || configured <= 0) {
      log.warn("{} 未配置或非法（当前值: {}），跳过向量维度对齐", DIMENSION_PROPERTY, configured);
      return;
    }
    try {
      align(configured);
    } catch (IllegalStateException e) {
      throw e;
    } catch (DataAccessException e) {
      log.warn("向量维度对齐检查失败（不阻塞启动）: {}", e.getMessage(), e);
    }
  }

  private void align(int configured) {
    String actualType = jdbcTemplate.queryForObject(
        "SELECT format_type(a.atttypid, a.atttypmod) "
            + "FROM pg_attribute a "
            + "WHERE a.attrelid = to_regclass('public.vector_store') "
            + "AND a.attname = 'embedding' AND NOT a.attisdropped",
        String.class);
    if (actualType == null) {
      log.info("vector_store 表或 embedding 列不存在，跳过向量维度对齐（由 Flyway 初始化）");
      return;
    }
    Integer actualDimension = parseVectorDimension(actualType);
    if (actualDimension == null) {
      log.warn("vector_store.embedding 列类型无法识别（{}），跳过向量维度对齐", actualType);
      return;
    }
    if (actualDimension == configured) {
      log.debug("vector_store.embedding 维度已一致: {} 维", configured);
      return;
    }

    Long rowCount = jdbcTemplate.queryForObject("SELECT count(*) FROM vector_store", Long.class);
    if (rowCount != null && rowCount > 0) {
      throw new IllegalStateException(String.format(
          "向量维度不匹配：配置为 %d 维，但 vector_store.embedding 当前为 %d 维且表中已有 %d 行数据。"
              + "请二选一：%n① 将 %s（环境变量 APP_VECTOR_DIMENSIONS）改回 %d；"
              + "%n② 若可丢弃向量数据，先执行 TRUNCATE vector_store 再重启应用（文档内容重新向量化后即可恢复）。",
          configured, actualDimension, rowCount, DIMENSION_PROPERTY, actualDimension));
    }

    log.info("vector_store 为空，执行向量维度对齐: {} 维 -> {} 维", actualDimension, configured);
    jdbcTemplate.execute(
        "ALTER TABLE vector_store ALTER COLUMN embedding TYPE public.vector(" + configured + ")");
  }

  Integer parseVectorDimension(String typeName) {
    Matcher matcher = VECTOR_TYPE_PATTERN.matcher(typeName == null ? "" : typeName);
    if (!matcher.find()) {
      return null;
    }
    try {
      return Integer.parseInt(matcher.group(1));
    } catch (NumberFormatException e) {
      return null;
    }
  }
}
