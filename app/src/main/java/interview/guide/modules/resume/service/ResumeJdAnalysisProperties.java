package interview.guide.modules.resume.service;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "app.resume.jd-analysis")
public class ResumeJdAnalysisProperties {

    private String systemPromptPath = "classpath:prompts/resume-jd-analysis-system.st";
    private String userPromptPath = "classpath:prompts/resume-jd-analysis-user.st";
}
