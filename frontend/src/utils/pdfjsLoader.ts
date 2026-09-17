/**
 * PDF.js 运行时动态按需加载器
 *
 * 资源加载策略：
 * 1. 优先尝试本地静态资源 (/vendor/pdfjs/pdf.min.js 与 /vendor/pdfjs/pdf.worker.min.js)；
 * 2. 本地不存在时优雅回退到 jsdelivr CDN；
 * 3. 若均不可用，抛出明确错误并无缝触发 UI 上的原生 iframe 预览回退。
 */

const LOCAL_PDFJS_SCRIPT = '/vendor/pdfjs/pdf.min.js';
const LOCAL_PDFJS_WORKER = '/vendor/pdfjs/pdf.worker.min.js';

const CDN_PDFJS_VERSION = '3.11.174';
const CDN_PDFJS_SCRIPT = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${CDN_PDFJS_VERSION}/build/pdf.min.js`;
const CDN_PDFJS_WORKER = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${CDN_PDFJS_VERSION}/build/pdf.worker.min.js`;

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

let pendingLoad: Promise<any> | null = null;

function loadSingleScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      if (existing.dataset.failed === 'true') {
        existing.remove();
      } else {
        existing.addEventListener('load', () => resolve(), { once: true });
        existing.addEventListener('error', () => reject(new Error(`加载失败: ${src}`)), {
          once: true,
        });
        return;
      }
    }

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.addEventListener(
      'load',
      () => {
        script.dataset.loaded = 'true';
        resolve();
      },
      { once: true }
    );
    script.addEventListener(
      'error',
      () => {
        script.dataset.failed = 'true';
        script.remove();
        reject(new Error(`加载失败: ${src}`));
      },
      { once: true }
    );
    document.head.appendChild(script);
  });
}

/**
 * 加载 PDF.js 脚本（本地静态优先 -> CDN 回退）
 */
async function loadScriptWithFallback(): Promise<{ workerSrc: string }> {
  // 1. 尝试本地静态资源
  try {
    const checkRes = await fetch(LOCAL_PDFJS_SCRIPT, { method: 'HEAD' });
    if (checkRes.ok) {
      await loadSingleScript(LOCAL_PDFJS_SCRIPT);
      if (window.pdfjsLib) {
        return { workerSrc: LOCAL_PDFJS_WORKER };
      }
    }
  } catch {
    // 本地静态资源不可用，忽略并尝试 CDN
  }

  // 2. 回退到 CDN 官方源
  await loadSingleScript(CDN_PDFJS_SCRIPT);
  if (!window.pdfjsLib) {
    throw new Error('PDF.js 脚本加载成功但未能挂载 window.pdfjsLib');
  }
  return { workerSrc: CDN_PDFJS_WORKER };
}

/**
 * 导出单例加载函数
 */
export function loadPdfJs(): Promise<any> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('PDF.js 只能在浏览器环境中运行'));
  }

  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }

  if (pendingLoad) {
    return pendingLoad;
  }

  pendingLoad = loadScriptWithFallback()
    .then(({ workerSrc }) => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;
      return window.pdfjsLib;
    })
    .catch(err => {
      pendingLoad = null; // 允许失败后再次尝试重试
      throw err;
    });

  return pendingLoad;
}
