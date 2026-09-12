import { j as e } from "./ui-vendor-CqaAdWtE.js";
import { r } from "./react-vendor-BA2qNj4G.js";
import { r as u } from "./resume-DJXL9zzr.js";
import { u as x, L as f, g } from "./index-CxLe-kJW.js";
import { F as h } from "./FileUploadCard-DpM_HtGs.js";
import "./syntax-highlighter-CeD-urYA.js";
function U({ onUploadComplete: l }) {
  const [d, s] = r.useState(false), [i, a] = r.useState(""), [o, n] = r.useState(""), m = x(), c = async (p) => {
    s(true), a("");
    try {
      const t = await u.uploadAndAnalyze(p, o || void 0);
      if (!t.storage || !t.storage.resumeId) throw new Error("\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
      l(t.storage.resumeId);
    } catch (t) {
      a(g(t)), s(false);
    }
  };
  return e.jsxs("div", { className: "space-y-4", children: [e.jsx(h, { title: "\u5F00\u59CB\u60A8\u7684 AI \u6A21\u62DF\u9762\u8BD5", subtitle: "\u4E0A\u4F20 PDF \u6216 Word \u7B80\u5386\uFF0CAI \u5C06\u4E3A\u60A8\u5B9A\u5236\u4E13\u5C5E\u9762\u8BD5\u65B9\u6848", accept: ".pdf,.doc,.docx,.txt", formatHint: "\u652F\u6301 PDF, DOCX, TXT", maxSizeHint: "\u6700\u5927 10MB", uploading: d, uploadButtonText: "\u5F00\u59CB\u4E0A\u4F20", selectButtonText: "\u9009\u62E9\u7B80\u5386\u6587\u4EF6", error: i, onUpload: c }), e.jsxs("div", { className: "max-w-xl mx-auto", children: [e.jsxs("label", { className: "mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300", children: ["\u5206\u6790\u6A21\u578B ", e.jsx("span", { className: "text-slate-400 font-normal", children: "(\u9009\u586B\uFF0C\u9ED8\u8BA4\u8DDF\u968F\u7CFB\u7EDF\u8BBE\u7F6E)" })] }), e.jsx(f, { providers: m, value: o, onChange: n })] })] });
}
export {
  U as default
};
