package interview.guide.modules.llmprovider.service;

import interview.guide.modules.llmprovider.model.LlmGlobalSettingEntity;
import interview.guide.modules.llmprovider.repository.LlmGlobalSettingRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * 初始化全局模型设置单例行。
 * 不再预置任何系统 Provider：模型服务完全由用户在设置页新增并指定默认。
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class LlmProviderBootstrapService {

  private final LlmGlobalSettingRepository globalSettingRepository;

  @PostConstruct
  @Transactional
  public void initGlobalSettingIfNecessary() {
    if (globalSettingRepository.existsById(LlmGlobalSettingEntity.SINGLETON_ID)) {
      return;
    }
    globalSettingRepository.save(LlmGlobalSettingEntity.builder()
        .id(LlmGlobalSettingEntity.SINGLETON_ID)
        // 列 NOT NULL，空串表示"尚未指定默认"，运行期按未配置处理并引导用户去设置页
        .defaultChatProviderId("")
        .defaultEmbeddingProviderId("")
        .build());
    log.info("Initialized empty LLM global setting; configure providers in the settings page");
  }
}
