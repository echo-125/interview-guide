package interview.guide.modules.resume.service;

import interview.guide.modules.interview.model.ResumeAnalysisResponse.TermIssue;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 简历技术名词规范性检查器
 * 基于 Java 词表做确定性扫描，零 LLM 成本、零遗漏，产出逐条（写法 -> 规范写法 -> 行号）清单。
 * 只做「大小写/连写变体」纠错，不做技术选型评判。
 */
@Component
public class ResumeTermChecker {

    /** 规范写法上限，防止极端简历刷爆结果列表 */
    private static final int MAX_ISSUES = 60;

    /**
     * 词表：key 为小写待检形式（含常见连写变体），value 为规范写法。
     * 命中时若原文写法与规范写法完全一致则不算问题。
     */
    private static final Map<String, String> TERM_DICT = buildTermDict();

    private final List<Pattern> patterns;

    public ResumeTermChecker() {
        List<Pattern> list = new ArrayList<>();
        // 按长度降序编译，重叠命中时优先保留更长的匹配（如 "spring boot" 优先于 "spring"）
        TERM_DICT.keySet().stream()
            .sorted(Comparator.comparingInt(String::length).reversed())
            .forEach(term -> list.add(
                Pattern.compile("\\b" + Pattern.quote(term) + "\\b", Pattern.CASE_INSENSITIVE)));
        this.patterns = List.copyOf(list);
    }

    /**
     * 扫描简历文本，返回名词规范问题列表
     *
     * @param resumeText 简历纯文本
     * @return 问题列表（按出现位置排序，超长文本截断到 MAX_ISSUES）
     */
    public List<TermIssue> check(String resumeText) {
        if (resumeText == null || resumeText.isBlank()) {
            return List.of();
        }

        List<int[]> acceptedSpans = new ArrayList<>();
        Map<String, TermIssue> uniqueIssues = new LinkedHashMap<>();

        for (Pattern pattern : patterns) {
            Matcher matcher = pattern.matcher(resumeText);
            while (matcher.find()) {
                int start = matcher.start();
                int end = matcher.end();
                if (overlaps(acceptedSpans, start, end)) {
                    continue;
                }

                String found = matcher.group();
                String correct = TERM_DICT.get(found.toLowerCase());
                acceptedSpans.add(new int[]{start, end});

                // 写法已完全规范则跳过
                if (found.equals(correct)) {
                    continue;
                }

                int line = 1 + countLinesBefore(resumeText, start);
                uniqueIssues.putIfAbsent(found + "@" + line, new TermIssue(found, correct, line));
                if (uniqueIssues.size() >= MAX_ISSUES) {
                    return List.copyOf(uniqueIssues.values());
                }
            }
        }

        return List.copyOf(uniqueIssues.values());
    }

    private boolean overlaps(List<int[]> spans, int start, int end) {
        for (int[] span : spans) {
            if (start < span[1] && end > span[0]) {
                return true;
            }
        }
        return false;
    }

    private int countLinesBefore(String text, int index) {
        int lines = 0;
        for (int i = 0; i < index; i++) {
            if (text.charAt(i) == '\n') {
                lines++;
            }
        }
        return lines;
    }

    private static Map<String, String> buildTermDict() {
        Map<String, String> dict = new LinkedHashMap<>();
        put(dict, "spring boot", "Spring Boot", "springboot");
        put(dict, "spring cloud", "Spring Cloud", "springcloud");
        put(dict, "spring mvc", "Spring MVC", "springmvc");
        put(dict, "spring security", "Spring Security");
        put(dict, "spring", "Spring");
        put(dict, "java", "Java");
        put(dict, "mysql", "MySQL");
        put(dict, "redis", "Redis");
        put(dict, "rabbitmq", "RabbitMQ");
        put(dict, "rocketmq", "RocketMQ");
        put(dict, "kafka", "Kafka");
        put(dict, "elasticsearch", "Elasticsearch");
        put(dict, "mybatis", "MyBatis");
        put(dict, "netty", "Netty");
        put(dict, "docker", "Docker");
        put(dict, "kubernetes", "Kubernetes");
        put(dict, "nginx", "Nginx");
        put(dict, "maven", "Maven");
        put(dict, "gradle", "Gradle");
        put(dict, "github", "GitHub");
        put(dict, "git", "Git");
        put(dict, "linux", "Linux");
        put(dict, "lombok", "Lombok");
        put(dict, "mapstruct", "MapStruct");
        put(dict, "junit", "JUnit");
        put(dict, "caffeine", "Caffeine");
        put(dict, "guava", "Guava");
        put(dict, "sentinel", "Sentinel");
        put(dict, "skywalking", "SkyWalking");
        put(dict, "shardingsphere", "ShardingSphere");
        put(dict, "zookeeper", "ZooKeeper");
        put(dict, "dubbo", "Dubbo");
        put(dict, "python", "Python");
        put(dict, "golang", "Golang");
        put(dict, "rust", "Rust");
        put(dict, "javascript", "JavaScript");
        put(dict, "typescript", "TypeScript");
        put(dict, "node.js", "Node.js", "nodejs");
        put(dict, "vue.js", "Vue.js", "vuejs");
        put(dict, "vue", "Vue");
        put(dict, "react", "React");
        put(dict, "html", "HTML");
        put(dict, "css", "CSS");
        put(dict, "sql", "SQL");
        put(dict, "nosql", "NoSQL");
        put(dict, "http", "HTTP");
        put(dict, "https", "HTTPS");
        put(dict, "tcp", "TCP");
        put(dict, "udp", "UDP");
        put(dict, "jvm", "JVM");
        put(dict, "jwt", "JWT");
        put(dict, "oauth2", "OAuth2");
        put(dict, "rpc", "RPC");
        put(dict, "api", "API");
        put(dict, "qps", "QPS");
        put(dict, "tps", "TPS");
        put(dict, "postman", "Postman");
        put(dict, "easyexcel", "EasyExcel");
        put(dict, "flink", "Flink");
        put(dict, "spark", "Spark");
        put(dict, "hadoop", "Hadoop");
        put(dict, "mongodb", "MongoDB");
        put(dict, "postgresql", "PostgreSQL");
        put(dict, "websocket", "WebSocket");
        return Map.copyOf(dict);
    }

    private static void put(Map<String, String> dict, String canonicalKey, String correctForm, String... variants) {
        dict.put(canonicalKey, correctForm);
        for (String variant : variants) {
            dict.put(variant, correctForm);
        }
    }
}
