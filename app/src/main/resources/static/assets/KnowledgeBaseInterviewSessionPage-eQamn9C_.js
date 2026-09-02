import { j as t, k as b, L as h } from "./ui-vendor-D79l2AJO.js";
import { e as k, b as j, u as E, r as o, N as I } from "./react-vendor-ek4qDQiW.js";
import { h as y } from "./index-ahWF3Ci-.js";
import { i as N } from "./interview-BsOMBsdV.js";
import T from "./InterviewPage-DMV-vcJo.js";
import "./syntax-highlighter-BG_RSeav.js";
import "./ConfirmDialog-DJIdcjoY.js";
import "./index-qDlAe4C1.js";
import "./InterviewPageHeader-WHjtOE0h.js";
function C(e, r, u) {
  return e === "COMPLETED" ? { kind: "completed", path: `/knowledgebase-interview/${r}/interviews/${u}` } : e === "FAILED" ? { kind: "failed" } : { kind: "waiting" };
}
function q() {
  var _a;
  const { sessionId: e } = k(), r = j(), l = (_a = E().state) == null ? void 0 : _a.knowledgeBaseId, [a, m] = o.useState(l), [d, v] = o.useState(false), [n, x] = o.useState("");
  if (o.useEffect(() => {
    if (l !== void 0) {
      m(l);
      return;
    }
    if (!e) return;
    let s = false;
    return N.getSession(e).then((i) => {
      !s && i.knowledgeBaseId && m(i.knowledgeBaseId);
    }).catch(() => {
    }), () => {
      s = true;
    };
  }, [e, l]), o.useEffect(() => {
    if (!d || !e || a === void 0) return;
    let s = false, i;
    const p = async () => {
      try {
        const w = await y.getInterviewDetail(e);
        if (s) return;
        const c = C(w.evaluateStatus, a, e);
        if (c.kind === "completed") {
          r(c.path, { replace: true });
          return;
        }
        if (c.kind === "failed") {
          x(w.evaluateError || "\u9762\u8BD5\u8BC4\u4F30\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80\u9762\u8BD5\u8BB0\u5F55\u67E5\u770B");
          return;
        }
      } catch {
        s || x("\u6682\u65F6\u65E0\u6CD5\u83B7\u53D6\u8BC4\u4F30\u8FDB\u5EA6\uFF0C\u7CFB\u7EDF\u5C06\u7EE7\u7EED\u91CD\u8BD5");
      }
      s || (i = setTimeout(p, 3e3));
    };
    return p(), () => {
      s = true, i && clearTimeout(i);
    };
  }, [d, a, r, e]), !e) return t.jsx(I, { to: "/knowledgebase-interview", replace: true });
  const f = a ? `/knowledgebase-interview/${a}/questions` : "/knowledgebase-interview", g = a ? `/knowledgebase-interview/${a}/interviews` : "/interviews";
  return d ? t.jsx("div", { className: "max-w-xl mx-auto min-h-[55vh] flex items-center justify-center", children: t.jsxs("div", { className: "w-full rounded-2xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800 p-8 text-center shadow-sm", children: [n && !n.includes("\u7EE7\u7EED\u91CD\u8BD5") ? t.jsx(b, { className: "w-12 h-12 mx-auto mb-4 text-red-500" }) : t.jsx(h, { className: "w-12 h-12 mx-auto mb-4 text-primary-500 animate-spin" }), t.jsx("h1", { className: "text-xl font-bold text-slate-900 dark:text-white", children: n && !n.includes("\u7EE7\u7EED\u91CD\u8BD5") ? "\u9762\u8BD5\u8BC4\u4F30\u5931\u8D25" : "\u6B63\u5728\u751F\u6210\u9762\u8BD5\u8BC4\u4F30" }), t.jsx("p", { className: "mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400", children: n || "\u7B54\u6848\u5DF2\u5168\u90E8\u4FDD\u5B58\uFF0C\u901A\u5E38\u9700\u8981\u51E0\u5341\u79D2\u3002\u8BC4\u4F30\u5B8C\u6210\u540E\u5C06\u81EA\u52A8\u6253\u5F00\u672C\u6B21\u9762\u8BD5\u7ED3\u679C\u3002" }), t.jsxs("div", { className: "mt-6 flex justify-center gap-3", children: [t.jsx("button", { type: "button", onClick: () => r(g), className: "px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700", children: "\u67E5\u770B\u9762\u8BD5\u8BB0\u5F55" }), t.jsx("button", { type: "button", onClick: () => r(f), className: "px-4 py-2 rounded-lg bg-primary-500 text-white text-sm font-medium hover:bg-primary-600", children: "\u8FD4\u56DE\u9898\u5E93" })] })] }) }) : t.jsx(T, { resumeText: "", sessionIdToResume: e, title: "\u77E5\u8BC6\u5E93\u9762\u8BD5", subtitle: "\u4ECE\u5DF2\u542F\u7528\u9898\u5E93\u62BD\u9898\uFF0C\u6309\u9898\u76EE\u8BC4\u5206\u89C4\u5219\u8BC4\u4F30", loadingText: "\u6B63\u5728\u52A0\u8F7D\u77E5\u8BC6\u5E93\u9762\u8BD5...", onBack: () => r(f), onInterviewComplete: () => v(true) });
}
export {
  q as default
};
