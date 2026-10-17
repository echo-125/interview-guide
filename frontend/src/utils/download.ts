/**
 * 触发浏览器下载指定 URL。
 *
 * 同时支持普通 URL 与 blob: URL —— 需要登录鉴权的资源应先经
 * `hooks/useAuthedBlobUrl` 或 `request.download` 取回 Blob 再生成 blob: URL，
 * 不要直接把 /api/** 地址塞进 a[href]，那样不会携带 satoken 请求头。
 */
export function downloadUrl(url: string, filename: string): void {
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}
