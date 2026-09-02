import { useEffect, useState } from 'react';
import { llmProviderApi } from '../api/llmProvider';
import type { ProviderItem } from '../types/llmProvider';

/**
 * 模块级 promise 缓存：多个页面/组件共享同一次 GET /api/llm-provider/list，
 * 避免每个组件挂载都重复请求（该接口有限流）。
 * 10 秒 TTL，超时后重新拉取。
 */
let cachedPromise: Promise<ProviderItem[]> | null = null;
let cacheTimestamp = 0;
const CACHE_TTL_MS = 10_000;

function fetchChatProviders(): Promise<ProviderItem[]> {
  const now = Date.now();
  if (cachedPromise && now - cacheTimestamp < CACHE_TTL_MS) {
    return cachedPromise;
  }
  cachedPromise = llmProviderApi.list()
    .then((list) => list.filter((p) => !!p.model))
    .finally(() => {
      cacheTimestamp = Date.now();
    });
  return cachedPromise;
}

/**
 * 拉取支持聊天能力的 Provider 列表（用于业务页面切换模型）。
 * 只返回配置了聊天模型的 Provider；空值语义为"跟随系统默认"。
 */
export function useChatProviders() {
  const [chatProviders, setChatProviders] = useState<ProviderItem[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetchChatProviders()
      .then((list) => {
        if (!cancelled) {
          setChatProviders(list);
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
