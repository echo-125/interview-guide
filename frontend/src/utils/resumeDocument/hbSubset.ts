/**
 * HarfBuzz 字形子集化（Phase 5D-2 PDF 字体体积优化的核心）
 *
 * @react-pdf/renderer 使用的 fontkit 无法子集 CJK/CFF（CID）字体，导致每个 PDF
 * 全量嵌入约 8-13MB/字重的中文字形（实测导出约 27MB）。HarfBuzz 的 hb-subset
 * 具备完整的 CFF/CID 子集能力，本项目将其 wasm 构建接入浏览器：
 *
 * - 输入：完整 sfnt 字体（ws-off2 解压产物，见 scripts/generate-pdf-font-assets.mjs）
 * - 输出：只含文档实际字符的 sfnt 子集（通常几十至数百 KB）
 * - wasm 加载器由调用方注入（浏览器 fetch 资产 / Node 测试读文件），保持本模块环境无关
 *
 * 移植自 subset-font（MIT）的 hb 调用序列，做最小化裁剪（无 variation/nameId 等选项）。
 */

/** hb 内存模式：可写（blob 数据由 JS 侧填充） */
const HB_MEMORY_MODE_WRITABLE = 2;
/** hb_subset_input_set 的 layout-feature 集合编号 */
const HB_SUBSET_SETS_LAYOUT_FEATURE_TAG = 6;

export interface HbSubsetter {
  /** 对 sfnt 字体做字符子集化，返回新的 sfnt 字节 */
  subset(fontBytes: Uint8Array, text: string): Uint8Array;
}

/** wasm 模块实例必要的导出面（避免依赖 harfbuzzjs 的类型定义） */
interface HbExports {
  memory: WebAssembly.Memory;
  _initialize(): void;
  malloc(size: number): number;
  free(ptr: number): void;
  hb_subset_input_create_or_fail(): number;
  hb_subset_input_destroy(input: number): void;
  hb_subset_input_set(input: number, setType: number): number;
  hb_set_clear(set: number): void;
  hb_set_invert(set: number): void;
  hb_set_add(set: number, value: number): void;
  hb_subset_input_unicode_set(input: number): number;
  hb_blob_create(data: number, length: number, mode: number, userData1: number, userData2: number): number;
  hb_blob_destroy(blob: number): void;
  hb_blob_get_data(blob: number, lengthPtr: number): number;
  hb_blob_get_length(blob: number): number;
  hb_face_create(blob: number, index: number): number;
  hb_face_destroy(face: number): void;
  hb_face_reference_blob(face: number): number;
  hb_subset_or_fail(face: number, input: number): number;
}

/**
 * 创建子集器。loadModule 返回编译好的 wasm 模块：
 * - 浏览器：WebAssembly.compile(await (await fetch(wasmUrl)).arrayBuffer())
 * - Node 测试：WebAssembly.compile(readFileSync(wasmPath))
 */
export async function createHbSubsetter(loadModule: () => Promise<WebAssembly.Module>): Promise<HbSubsetter> {
  // instantiate(编译后的 Module) 直接返回 Instance；instantiate(bytes) 返回 { module, instance }
  // 兼容两种返回形态（Node 与浏览器的行为一致但 TS lib 标注不同）
  const instantiated = (await WebAssembly.instantiate(await loadModule(), {})) as
    | WebAssembly.Instance
    | { instance: WebAssembly.Instance };
  const instance = 'exports' in instantiated ? instantiated : instantiated.instance;
  const hb = instance.exports as unknown as HbExports;
  hb._initialize();

  // wasm 内存可能增长（子集化大字体时），每次使用取新视图
  const getHeap = () => new Uint8Array(hb.memory.buffer);

  return {
    subset(fontBytes: Uint8Array, text: string): Uint8Array {
      const input = hb.hb_subset_input_create_or_fail();
      if (input === 0) {
        throw new Error('hb_subset_input_create_or_fail 返回 0（harfbuzz 初始化失败）');
      }
      const fontBuffer = hb.malloc(fontBytes.byteLength);
      if (fontBuffer === 0) {
        hb.hb_subset_input_destroy(input);
        throw new Error('wasm malloc 失败');
      }
      getHeap().set(new Uint8Array(fontBytes), fontBuffer);

      let face = 0;
      try {
        const blob = hb.hb_blob_create(fontBuffer, fontBytes.byteLength, HB_MEMORY_MODE_WRITABLE, 0, 0);
        face = hb.hb_face_create(blob, 0);
        hb.hb_blob_destroy(blob);
        if (face === 0) {
          throw new Error('hb_face_create 返回 0（字体解析失败）');
        }

        // 保留全部 layout features（默认等价 --layout-features=*）
        const layoutFeatures = hb.hb_subset_input_set(input, HB_SUBSET_SETS_LAYOUT_FEATURE_TAG);
        hb.hb_set_clear(layoutFeatures);
        hb.hb_set_invert(layoutFeatures);

        // 按 text 的 unicode 集合子集化
        const unicodes = hb.hb_subset_input_unicode_set(input);
        for (const c of text) {
          hb.hb_set_add(unicodes, c.codePointAt(0) as number);
        }

        const subsetFace = hb.hb_subset_or_fail(face, input);
        if (subsetFace === 0) {
          throw new Error('hb_subset_or_fail 返回 0（子集化失败，字体可能损坏）');
        }

        try {
          const result = hb.hb_face_reference_blob(subsetFace);
          try {
            const offset = hb.hb_blob_get_data(result, 0);
            const length = hb.hb_blob_get_length(result);
            if (length === 0) {
              throw new Error('子集化结果为空');
            }
            return getHeap().slice(offset, offset + length);
          } finally {
            hb.hb_blob_destroy(result);
          }
        } finally {
          hb.hb_face_destroy(subsetFace);
        }
      } finally {
        if (face !== 0) hb.hb_face_destroy(face);
        hb.free(fontBuffer);
        hb.hb_subset_input_destroy(input);
      }
    },
  };
}