import { useEffect, useState } from 'react';
import { request } from '../api/request';

interface AuthedBlobUrlState {
  /** blob: URL，未就绪时为 null */
  blobUrl: string | null;
  loading: boolean;
  error: string | null;
}

/**
 * 把「需要登录鉴权」的后端资源取回为 blob: URL。
 *
 * 背景：iframe、a[href]、PDF.js 按 url 加载等场景由**浏览器直接发起请求**，
 * 无法携带 satoken 请求头，会被后端拦截并返回 401
 * （表现为 PDF.js 报 "Invalid PDF structure"、iframe 白屏等）。
 *
 * 这里统一先经 axios 下载为 Blob（请求拦截器会自动注入 token），
 * 再转成 blob: URL 交给上述场景使用，从而绕开「无法自定义请求头」的限制。
 *
 * @param url 需要鉴权的资源地址；传 null 表示当前不需要，不会发起请求
 */
export function useAuthedBlobUrl(url: string | null): AuthedBlobUrlState {
  const [state, setState] = useState<AuthedBlobUrlState>({
    blobUrl: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!url) {
      setState({ blobUrl: null, loading: false, error: null });
      return;
    }

    let cancelled = false;
    let objectUrl: string | null = null;
    setState({ blobUrl: null, loading: true, error: null });

    request
      .download(url)
      .then((blob) => {
        if (cancelled) {
          return;
        }
        objectUrl = URL.createObjectURL(blob);
        setState({ blobUrl: objectUrl, loading: false, error: null });
      })
      .catch((err: unknown) => {
        if (cancelled) {
          return;
        }
        setState({
          blobUrl: null,
          loading: false,
          error: err instanceof Error ? err.message : '文件加载失败',
        });
      });

    return () => {
      cancelled = true;
      if (objectUrl) {
        // 释放上一轮创建的 blob URL，避免内存泄漏
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [url]);

  return state;
}
