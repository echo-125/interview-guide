import { useEffect, useState } from 'react';
import { llmProviderApi } from '../api/llmProvider';
import type { ProviderItem } from '../types/llmProvider';

/**
 * 拉取支持聊天能力的 Provider 列表（用于业务页面切换模型）。
 * 只返回配置了聊天模型的 Provider；空值语义为"跟随系统默认"。
 */
export function useChatProviders() {
  const [chatProviders, setChatProviders] = useState<ProviderItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    llmProviderApi.list()
      .then((list) => {
        if (!cancelled) {
          setChatProviders(list.filter((p) => !!p.model));
        }
      })
      .catch((err) => {
        console.error('Failed to load chat providers:', err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return chatProviders;
}
