package interview.guide.infrastructure.vector;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.env.Environment;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.contains;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@DisplayName("PgVectorDimensionAligner 测试")
class PgVectorDimensionAlignerTest {

    private static final String PROP = "spring.ai.vectorstore.pgvector.dimensions";

    @Mock
    private JdbcTemplate jdbcTemplate;

    @Mock
    private Environment environment;

    @InjectMocks
    private PgVectorDimensionAligner aligner;

    @Nested
    @DisplayName("维度类型解析")
    class ParseVectorDimension {

        @Test
        @DisplayName("解析 vector(1024) 为 1024")
        void parsesVectorType() {
            assertEquals(1024, aligner.parseVectorDimension("vector(1024)"));
        }

        @Test
        @DisplayName("非 vector 类型返回 null")
        void returnsNullForOtherTypes() {
            assertNull(aligner.parseVectorDimension("integer"));
            assertNull(aligner.parseVectorDimension(""));
            assertNull(aligner.parseVectorDimension(null));
        }
    }

    @Nested
    @DisplayName("启动对齐")
    class AlignOnStartup {

        @Test
        @DisplayName("维度一致时不执行 ALTER")
        void skipsWhenSame() {
            when(environment.getProperty(PROP, Integer.class)).thenReturn(1024);
            when(jdbcTemplate.queryForObject(anyString(), eq(String.class))).thenReturn("vector(1024)");

            aligner.run(null);

            verify(jdbcTemplate, never()).execute(anyString());
        }

        @Test
        @DisplayName("维度不一致且表为空时自动对齐")
        void altersWhenEmpty() {
            when(environment.getProperty(PROP, Integer.class)).thenReturn(1536);
            when(jdbcTemplate.queryForObject(anyString(), eq(String.class))).thenReturn("vector(1024)");
            when(jdbcTemplate.queryForObject(anyString(), eq(Long.class))).thenReturn(0L);

            aligner.run(null);

            verify(jdbcTemplate).execute(contains("vector(1536)"));
        }

        @Test
        @DisplayName("维度不一致且有数据时拒绝启动")
        void failsWhenDataExists() {
            when(environment.getProperty(PROP, Integer.class)).thenReturn(1536);
            when(jdbcTemplate.queryForObject(anyString(), eq(String.class))).thenReturn("vector(1024)");
            when(jdbcTemplate.queryForObject(anyString(), eq(Long.class))).thenReturn(5L);

            assertThrows(IllegalStateException.class, () -> aligner.run(null));
            verify(jdbcTemplate, never()).execute(anyString());
        }

        @Test
        @DisplayName("列不存在时跳过对齐")
        void skipsWhenColumnMissing() {
            when(environment.getProperty(PROP, Integer.class)).thenReturn(1024);
            when(jdbcTemplate.queryForObject(anyString(), eq(String.class)))
                .thenThrow(new EmptyResultDataAccessException(1));

            aligner.run(null);

            verify(jdbcTemplate, never()).execute(anyString());
        }

        @Test
        @DisplayName("维度配置缺失时跳过对齐")
        void skipsWhenPropertyMissing() {
            when(environment.getProperty(PROP, Integer.class)).thenReturn(null);

            aligner.run(null);

            verify(jdbcTemplate, never()).execute(anyString());
        }
    }
}
