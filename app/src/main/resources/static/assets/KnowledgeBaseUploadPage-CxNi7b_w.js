import { j as c } from "./ui-vendor-CqaAdWtE.js";
import { g as u } from "./index-CxLe-kJW.js";
import { r as a } from "./react-vendor-BA2qNj4G.js";
import { k as f } from "./knowledgebase-CIu6U8Sw.js";
import { F as g } from "./FileUploadCard-DpM_HtGs.js";
import "./syntax-highlighter-CeD-urYA.js";
function E({ onUploadComplete: r, onBack: s }) {
  const [n, e] = a.useState(false), [l, o] = a.useState(""), p = async (d, i) => {
    e(true), o("");
    try {
      const t = await f.uploadKnowledgeBase(d, i);
      r(t);
    } catch (t) {
      const m = u(t, "\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");
      o(m), e(false);
    }
  };
  return c.jsx(g, { title: "\u4E0A\u4F20\u77E5\u8BC6\u5E93", subtitle: "\u4E0A\u4F20\u6587\u6863\uFF0CAI \u5C06\u57FA\u4E8E\u77E5\u8BC6\u5E93\u5185\u5BB9\u56DE\u7B54\u60A8\u7684\u95EE\u9898", accept: ".pdf,.doc,.docx,.txt,.md", formatHint: "\u652F\u6301 PDF\u3001DOCX\u3001DOC\u3001TXT\u3001MD", maxSizeHint: "\u6700\u5927 50MB", uploading: n, uploadButtonText: "\u5F00\u59CB\u4E0A\u4F20", selectButtonText: "\u9009\u62E9\u6587\u4EF6", showNameInput: true, nameLabel: "\u77E5\u8BC6\u5E93\u540D\u79F0\uFF08\u53EF\u9009\uFF09", namePlaceholder: "\u7559\u7A7A\u5219\u4F7F\u7528\u6587\u4EF6\u540D", error: l, onUpload: p, onBack: s });
}
export {
  E as default
};
