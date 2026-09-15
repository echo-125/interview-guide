/**
 * VAD / ONNX 运行时按需加载器
 *
 * 为什么不在 index.html 里静态引入：
 * @ricky0123/vad-web@0.0.29 的 bundle.min.js 内联了一份 web-vitals 做性能遥测，
 * 它在脚本加载时无条件运行并上报。该版本的实现会在页面尚未产生
 * navigation entry 时读取 undefined.startTime，抛出
 * 「Cannot read properties of undefined (reading 'startTime')」。
 * 这个崩溃发生在第三方脚本内部，与业务链路无关（上传等功能不受影响），
 * 但会污染控制台、干扰真实问题的排查。
 *
 * 该 bundle 只在语音面试录音时才需要，因此改为首次使用时动态注入：
 * 不进入语音面试就完全不加载，既消除报错噪音，也省掉首屏的两个 CDN 请求。
 *
 * 版本须与 AudioRecorder 中的 onnxWASMBasePath / baseAssetPath 保持一致。
 */

const ORT_WASM_URL = 'https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/ort.wasm.min.js';
const VAD_BUNDLE_URL = 'https://cdn.jsdelivr.net/npm/@ricky0123/vad-web@0.0.29/dist/bundle.min.js';

let pending: Promise<void> | null = null;

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) {
      // 已存在则等待其加载完成，避免重复注入
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error(`脚本加载失败: ${src}`)), {
        once: true,
      });
      return;
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
    script.addEventListener('error', () => reject(new Error(`脚本加载失败: ${src}`)), { once: true });
    document.head.appendChild(script);
  });
}

/**
 * 加载 VAD 运行时（幂等，并发调用共享同一个 Promise）
 *
 * @throws 脚本加载失败时抛错，由调用方转换为用户可见提示
 */
export function loadVadRuntime(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('VAD 只能在浏览器环境加载'));
  }
  if (pending) {
    return pending;
  }

  pending = loadScript(ORT_WASM_URL)
    .then(() => loadScript(VAD_BUNDLE_URL))
    .catch(err => {
      // 失败后允许重试，不缓存被 reject 的 Promise
      pending = null;
      throw err;
    });

  return pending;
}
