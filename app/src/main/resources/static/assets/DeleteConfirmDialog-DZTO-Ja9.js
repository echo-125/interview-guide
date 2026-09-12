import { j as i } from "./ui-vendor-CqaAdWtE.js";
import { C as l } from "./ConfirmDialog-Cn876c6T.js";
function u({ open: r, item: e, itemType: n, loading: a = false, onConfirm: o, onCancel: s, customMessage: t }) {
  const f = e ? `\u786E\u5B9A\u8981\u5220\u9664${n}"${e ? e.name || e.title || e.filename || e.sessionId || (e.id ? `ID: ${e.id}` : "") : ""}"\u5417\uFF1F\u5220\u9664\u540E\u65E0\u6CD5\u6062\u590D\u3002` : "";
  return i.jsx(l, { open: r, title: `\u5220\u9664${n}`, message: t || f, confirmText: "\u786E\u5B9A\u5220\u9664", cancelText: "\u53D6\u6D88", confirmVariant: "danger", loading: a, onConfirm: o, onCancel: s });
}
export {
  u as D
};
