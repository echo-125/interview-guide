const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/syntax-highlighter-CeD-urYA.js","assets/react-vendor-BA2qNj4G.js"])))=>i.map(i=>d[i]);
import { j as e, z as Se, E as Ce, m, P as ze, G as se, H as Pe, r as Te, f as Me, A as q, t as Re, h as oe } from "./ui-vendor-CqaAdWtE.js";
import { r as g, u as $e, L as Ee, g as Ae, __tla as __tla_0 } from "./index-CxLe-kJW.js";
import { r as o, __tla as __tla_1 } from "./react-vendor-BA2qNj4G.js";
import { Y as Be } from "./index-fZ9W5ZcE.js";
import { s as De, k as ae } from "./knowledgebase-CIu6U8Sw.js";
import { f as Le } from "./date-DBJmXC5z.js";
import { D as Fe } from "./DeleteConfirmDialog-DZTO-Ja9.js";
import { _ as He } from "./syntax-highlighter-CeD-urYA.js";
import { M as Ke, r as Oe } from "./markdown-vendor-C9Bg1Ifk.js";
import "./ConfirmDialog-Cn876c6T.js";
let tt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const b = {
    async createSession(a, d, h) {
      return g.post("/api/rag-chat/sessions", {
        knowledgeBaseIds: a,
        title: d,
        llmProvider: h || void 0
      });
    },
    async listSessions() {
      return g.get("/api/rag-chat/sessions");
    },
    async getSessionDetail(a) {
      return g.get(`/api/rag-chat/sessions/${a}`);
    },
    async updateSessionTitle(a, d) {
      return g.put(`/api/rag-chat/sessions/${a}/title`, {
        title: d
      });
    },
    async updateKnowledgeBases(a, d) {
      return g.put(`/api/rag-chat/sessions/${a}/knowledge-bases`, {
        knowledgeBaseIds: d
      });
    },
    async togglePin(a) {
      return g.put(`/api/rag-chat/sessions/${a}/pin`);
    },
    async deleteSession(a) {
      return g.delete(`/api/rag-chat/sessions/${a}`);
    },
    async sendMessageStream(a, d, h, p, i, u) {
      return De({
        url: `/api/rag-chat/sessions/${a}/messages/stream`,
        init: {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            question: d
          })
        },
        onMessage: h,
        onComplete: p,
        onError: i,
        parseMode: "event",
        trimDataPrefixSpace: false,
        unescapeEscapedNewlines: true,
        dataJoiner: "",
        signal: u
      });
    }
  }, Ie = {
    'code[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none"
    },
    'pre[class*="language-"]': {
      background: "hsl(220, 13%, 18%)",
      color: "hsl(220, 14%, 71%)",
      textShadow: "0 1px rgba(0, 0, 0, 0.3)",
      fontFamily: '"Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono", monospace',
      direction: "ltr",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      lineHeight: "1.5",
      MozTabSize: "2",
      OTabSize: "2",
      tabSize: "2",
      WebkitHyphens: "none",
      MozHyphens: "none",
      msHyphens: "none",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em"
    },
    'code[class*="language-"]::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::-moz-selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"]::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'code[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    'pre[class*="language-"] *::selection': {
      background: "hsl(220, 13%, 28%)",
      color: "inherit",
      textShadow: "none"
    },
    ':not(pre) > code[class*="language-"]': {
      padding: "0.2em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal"
    },
    comment: {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    prolog: {
      color: "hsl(220, 10%, 40%)"
    },
    cdata: {
      color: "hsl(220, 10%, 40%)"
    },
    doctype: {
      color: "hsl(220, 14%, 71%)"
    },
    punctuation: {
      color: "hsl(220, 14%, 71%)"
    },
    entity: {
      color: "hsl(220, 14%, 71%)",
      cursor: "help"
    },
    "attr-name": {
      color: "hsl(29, 54%, 61%)"
    },
    "class-name": {
      color: "hsl(29, 54%, 61%)"
    },
    boolean: {
      color: "hsl(29, 54%, 61%)"
    },
    constant: {
      color: "hsl(29, 54%, 61%)"
    },
    number: {
      color: "hsl(29, 54%, 61%)"
    },
    atrule: {
      color: "hsl(29, 54%, 61%)"
    },
    keyword: {
      color: "hsl(286, 60%, 67%)"
    },
    property: {
      color: "hsl(355, 65%, 65%)"
    },
    tag: {
      color: "hsl(355, 65%, 65%)"
    },
    symbol: {
      color: "hsl(355, 65%, 65%)"
    },
    deleted: {
      color: "hsl(355, 65%, 65%)"
    },
    important: {
      color: "hsl(355, 65%, 65%)"
    },
    selector: {
      color: "hsl(95, 38%, 62%)"
    },
    string: {
      color: "hsl(95, 38%, 62%)"
    },
    char: {
      color: "hsl(95, 38%, 62%)"
    },
    builtin: {
      color: "hsl(95, 38%, 62%)"
    },
    inserted: {
      color: "hsl(95, 38%, 62%)"
    },
    regex: {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value": {
      color: "hsl(95, 38%, 62%)"
    },
    "attr-value > .token.punctuation": {
      color: "hsl(95, 38%, 62%)"
    },
    variable: {
      color: "hsl(207, 82%, 66%)"
    },
    operator: {
      color: "hsl(207, 82%, 66%)"
    },
    function: {
      color: "hsl(207, 82%, 66%)"
    },
    url: {
      color: "hsl(187, 47%, 55%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
      color: "hsl(220, 14%, 71%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.selector": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-css .token.property": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-css .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.function": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.string.url": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-css .token.important": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-css .token.atrule .token.rule": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.operator": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
      color: "hsl(5, 48%, 51%)"
    },
    ".language-json .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-json .token.null.keyword": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.url": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.operator": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url-reference.url > .token.string": {
      color: "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.content": {
      color: "hsl(207, 82%, 66%)"
    },
    ".language-markdown .token.url > .token.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.url-reference.url": {
      color: "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.blockquote.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.hr.punctuation": {
      color: "hsl(220, 10%, 40%)",
      fontStyle: "italic"
    },
    ".language-markdown .token.code-snippet": {
      color: "hsl(95, 38%, 62%)"
    },
    ".language-markdown .token.bold .token.content": {
      color: "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.italic .token.content": {
      color: "hsl(286, 60%, 67%)"
    },
    ".language-markdown .token.strike .token.content": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.strike .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.list.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.title.important > .token.punctuation": {
      color: "hsl(355, 65%, 65%)"
    },
    bold: {
      fontWeight: "bold"
    },
    italic: {
      fontStyle: "italic"
    },
    namespace: {
      Opacity: "0.8"
    },
    "token.tab:not(:empty):before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.cr:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.lf:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "token.space:before": {
      color: "hsla(220, 14%, 71%, 0.15)",
      textShadow: "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
      marginRight: "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 9%, 55%)",
      padding: "0.1em 0.4em",
      borderRadius: "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
      background: "hsl(220, 13%, 28%)",
      color: "hsl(220, 14%, 71%)"
    },
    ".line-highlight.line-highlight": {
      background: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-highlight.line-highlight:before": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
      background: "hsl(220, 13%, 26%)",
      color: "hsl(220, 14%, 71%)",
      padding: "0.1em 0.6em",
      borderRadius: "0.3em",
      boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
      backgroundColor: "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".command-line .command-line-prompt": {
      borderRightColor: "hsla(220, 14%, 71%, 0.15)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".command-line .command-line-prompt > span:before": {
      color: "hsl(220, 14%, 45%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
      color: "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
      color: "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
      color: "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
      color: "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
      color: "hsl(286, 60%, 67%)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
      backgroundColor: "hsla(353, 100%, 66%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
      backgroundColor: "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
      backgroundColor: "hsla(137, 100%, 55%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
      backgroundColor: "hsla(135, 73%, 55%, 0.25)"
    },
    ".prism-previewer.prism-previewer:before": {
      borderColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
      borderColor: "hsl(224, 13%, 17%)",
      borderRadius: "0.3em"
    },
    ".prism-previewer-color.prism-previewer-color:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
      borderRadius: "0.3em"
    },
    ".prism-previewer.prism-previewer:after": {
      borderTopColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
      borderBottomColor: "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-time.prism-previewer-time:before": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-easing.prism-previewer-easing": {
      background: "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-time.prism-previewer-time circle": {
      stroke: "hsl(220, 14%, 71%)",
      strokeOpacity: "1"
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
      stroke: "hsl(220, 14%, 71%)",
      fill: "transparent"
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
      stroke: "hsl(220, 14%, 71%)"
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
      stroke: "hsl(220, 14%, 71%)"
    }
  }, qe = o.lazy(() => He(() => import("./syntax-highlighter-CeD-urYA.js").then((a) => a.w), __vite__mapDeps([0,1])).then((a) => ({
    default: a.default
  })));
  function _e({ language: a, children: d }) {
    const [h, p] = o.useState(false), i = async () => {
      try {
        await navigator.clipboard.writeText(d), p(true), setTimeout(() => p(false), 2e3);
      } catch (H) {
        console.error("\u590D\u5236\u5931\u8D25:", H);
      }
    }, u = (d == null ? void 0 : d.trim()) || "";
    return e.jsxs("div", {
      className: "relative group my-3",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between px-4 py-2 bg-slate-700 rounded-t-xl border-b border-slate-600",
          children: [
            e.jsx("span", {
              className: "text-xs text-slate-400 font-mono",
              children: a || "code"
            }),
            e.jsx("button", {
              onClick: i,
              className: "flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white hover:bg-slate-600 rounded transition-colors",
              title: "\u590D\u5236\u4EE3\u7801",
              children: h ? e.jsxs(e.Fragment, {
                children: [
                  e.jsx(Se, {
                    className: "w-3.5 h-3.5 text-green-400"
                  }),
                  e.jsx("span", {
                    className: "text-green-400",
                    children: "\u5DF2\u590D\u5236"
                  })
                ]
              }) : e.jsxs(e.Fragment, {
                children: [
                  e.jsx(Ce, {
                    className: "w-3.5 h-3.5"
                  }),
                  e.jsx("span", {
                    children: "\u590D\u5236"
                  })
                ]
              })
            })
          ]
        }),
        e.jsx("div", {
          className: "bg-[#282c34] rounded-b-xl text-sm leading-6",
          children: e.jsx(o.Suspense, {
            fallback: e.jsx("div", {
              className: "p-4 text-slate-400 font-mono text-xs",
              children: "Loading code..."
            }),
            children: e.jsx(qe, {
              language: a || "text",
              style: Ie,
              customStyle: {
                margin: 0,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                borderBottomLeftRadius: "0.75rem",
                borderBottomRightRadius: "0.75rem",
                fontSize: "0.875rem",
                lineHeight: "1.5"
              },
              showLineNumbers: u.split(`
`).length > 3,
              wrapLines: true,
              children: u
            })
          })
        })
      ]
    });
  }
  tt = function({ onBack: a, onUpload: d }) {
    var _a;
    const [h, p] = o.useState([]), [i, u] = o.useState(/* @__PURE__ */ new Set()), [H, R] = o.useState(true), [f, _] = o.useState(""), [K, le] = o.useState("time"), [V, ne] = o.useState(/* @__PURE__ */ new Set([
      "\u672A\u5206\u7C7B"
    ])), [Q, W] = o.useState(true), [G, ie] = o.useState([]), [k, $] = o.useState(null), [ce, N] = o.useState(""), [de, J] = o.useState(false), [w, O] = o.useState(null), [E, A] = o.useState(null), [S, C] = o.useState(""), [B, Y] = o.useState(""), [D, y] = o.useState([]), [v, z] = o.useState(false), [Z, he] = o.useState(""), me = $e(), pe = o.useRef(null), P = o.useRef(), L = o.useRef(null), [, ue] = o.useTransition();
    o.useEffect(() => {
      I(), T();
    }, []), o.useEffect(() => () => {
      var _a2;
      (_a2 = L.current) == null ? void 0 : _a2.abort(), L.current = null, P.current && cancelAnimationFrame(P.current);
    }, []), o.useEffect(() => {
      f || I();
    }, [
      K
    ]);
    const I = async () => {
      R(true);
      try {
        const t = await ae.getAllKnowledgeBases(K, "COMPLETED");
        p(t);
      } catch (t) {
        console.error("\u52A0\u8F7D\u77E5\u8BC6\u5E93\u5217\u8868\u5931\u8D25", t);
      } finally {
        R(false);
      }
    }, X = async () => {
      if (!f.trim()) {
        I();
        return;
      }
      R(true);
      try {
        const t = await ae.search(f.trim());
        p(t);
      } catch (t) {
        console.error("\u641C\u7D22\u77E5\u8BC6\u5E93\u5931\u8D25", t);
      } finally {
        R(false);
      }
    }, xe = o.useMemo(() => {
      const t = /* @__PURE__ */ new Map();
      h.forEach((l) => {
        const c = l.category || "\u672A\u5206\u7C7B";
        t.has(c) || t.set(c, []), t.get(c).push(l);
      });
      const r = [];
      return Array.from(t.keys()).sort((l, c) => l === "\u672A\u5206\u7C7B" ? 1 : c === "\u672A\u5206\u7C7B" ? -1 : l.localeCompare(c)).forEach((l) => {
        r.push({
          name: l,
          items: t.get(l),
          isExpanded: V.has(l)
        });
      }), r;
    }, [
      h,
      V
    ]), ge = (t) => {
      ne((r) => {
        const s = new Set(r);
        return s.has(t) ? s.delete(t) : s.add(t), s;
      });
    }, T = async () => {
      J(true);
      try {
        const t = await b.listSessions();
        ie(t);
      } catch (t) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5217\u8868\u5931\u8D25", t);
      } finally {
        J(false);
      }
    }, U = (t) => {
      u((r) => {
        const s = new Set(r);
        return s.has(t) ? s.delete(t) : s.add(t), s.size !== r.size && k && ($(null), N(""), y([])), s;
      });
    }, ee = () => {
      $(null), N(""), y([]);
    }, be = async (t) => {
      try {
        const r = await b.getSessionDetail(t);
        $(r.id), N(r.title), u(new Set(r.knowledgeBases.map((s) => s.id))), y(r.messages.map((s) => ({
          id: s.id,
          type: s.type,
          content: s.content,
          timestamp: new Date(s.createdAt)
        })));
      } catch (r) {
        console.error("\u52A0\u8F7D\u4F1A\u8BDD\u5931\u8D25", r);
      }
    }, fe = async () => {
      if (w) try {
        await b.deleteSession(w.id), await T(), k === w.id && ee(), O(null);
      } catch (t) {
        console.error("\u5220\u9664\u4F1A\u8BDD\u5931\u8D25", t);
      }
    }, ke = (t, r) => {
      A({
        id: t,
        title: r
      }), C(r);
    }, te = async () => {
      if (!(!E || !S.trim())) try {
        await b.updateSessionTitle(E.id, S.trim()), await T(), k === E.id && N(S.trim()), A(null), C("");
      } catch (t) {
        console.error("\u66F4\u65B0\u4F1A\u8BDD\u6807\u9898\u5931\u8D25", t);
      }
    }, we = async (t, r) => {
      r.stopPropagation();
      try {
        await b.togglePin(t), await T();
      } catch (s) {
        console.error("\u5207\u6362\u7F6E\u9876\u72B6\u6001\u5931\u8D25", s);
      }
    }, ye = (t) => t ? t.replace(/\\n/g, `
`).replace(/^(#{1,6})([^\s#\n])/gm, "$1 $2").replace(/^(\s*)(\d+)\.([^\s\n])/gm, "$1$2. $3").replace(/^(\s*[-*])([^\s\n-])/gm, "$1 $2").replace(/\n{3,}/g, `

`) : "", re = async () => {
      var _a2;
      if (!B.trim() || i.size === 0 || v) return;
      const t = B.trim();
      Y(""), z(true), (_a2 = L.current) == null ? void 0 : _a2.abort();
      const r = new AbortController();
      L.current = r;
      let s = k;
      if (!s) try {
        const n = await b.createSession(Array.from(i), void 0, Z || void 0);
        s = n.id, $(s), N(n.title);
      } catch (n) {
        console.error("\u521B\u5EFA\u4F1A\u8BDD\u5931\u8D25", n), z(false);
        return;
      }
      const l = {
        type: "user",
        content: t,
        timestamp: /* @__PURE__ */ new Date()
      };
      y((n) => [
        ...n,
        l
      ]);
      const c = {
        type: "assistant",
        content: "",
        timestamp: /* @__PURE__ */ new Date()
      };
      y((n) => [
        ...n,
        c
      ]);
      let x = "";
      const j = (n) => {
        y((Ne) => {
          const M = [
            ...Ne
          ], F = M.length - 1;
          return F >= 0 && M[F].type === "assistant" && (M[F] = {
            ...M[F],
            content: n
          }), M;
        });
      };
      try {
        await b.sendMessageStream(s, t, (n) => {
          x += n, P.current && cancelAnimationFrame(P.current), P.current = requestAnimationFrame(() => {
            ue(() => {
              j(x);
            });
          });
        }, () => {
          z(false), T();
        }, (n) => {
          console.error("\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", n), j(x || n.message || "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"), z(false);
        }, r.signal);
      } catch (n) {
        console.error("\u53D1\u8D77\u6D41\u5F0F\u67E5\u8BE2\u5931\u8D25:", n), j(Ae(n, "\u56DE\u7B54\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")), z(false);
      }
    }, ve = (t) => t < 1024 ? t + " B" : t < 1024 * 1024 ? (t / 1024).toFixed(1) + " KB" : (t / (1024 * 1024)).toFixed(1) + " MB", je = (t) => {
      const r = new Date(t), l = (/* @__PURE__ */ new Date()).getTime() - r.getTime(), c = Math.floor(l / 6e4), x = Math.floor(l / 36e5), j = Math.floor(l / 864e5);
      return c < 1 ? "\u521A\u521A" : c < 60 ? `${c} \u5206\u949F\u524D` : x < 24 ? `${x} \u5C0F\u65F6\u524D` : j < 7 ? `${j} \u5929\u524D` : Le(t);
    };
    return e.jsxs("div", {
      className: "max-w-7xl mx-auto pt-8 pb-10 px-4",
      children: [
        e.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className: "text-2xl font-bold text-slate-900 dark:text-white mb-1",
                  children: "\u95EE\u7B54\u52A9\u624B"
                }),
                e.jsx("p", {
                  className: "text-slate-500 dark:text-slate-400 text-sm",
                  children: "\u9009\u62E9\u77E5\u8BC6\u5E93\uFF0C\u5411 AI \u63D0\u95EE"
                })
              ]
            }),
            e.jsxs("div", {
              className: "flex gap-3",
              children: [
                e.jsx(m.button, {
                  onClick: d,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u4E0A\u4F20\u77E5\u8BC6\u5E93"
                }),
                e.jsx(m.button, {
                  onClick: a,
                  className: "px-4 py-2 border border-slate-200 dark:border-slate-600 rounded-xl text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-all text-sm",
                  whileHover: {
                    scale: 1.02
                  },
                  whileTap: {
                    scale: 0.98
                  },
                  children: "\u8FD4\u56DE"
                })
              ]
            })
          ]
        }),
        e.jsxs("div", {
          className: "flex gap-4 h-[calc(100vh-10rem)]",
          children: [
            e.jsx("div", {
              className: "w-64 flex-shrink-0",
              children: e.jsxs("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col border border-slate-100 dark:border-slate-700",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      e.jsx("h2", {
                        className: "text-base font-semibold text-slate-800 dark:text-white",
                        children: "\u5BF9\u8BDD\u5386\u53F2"
                      }),
                      e.jsx(m.button, {
                        onClick: ee,
                        disabled: i.size === 0,
                        className: "p-1.5 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        whileHover: {
                          scale: 1.05
                        },
                        whileTap: {
                          scale: 0.95
                        },
                        title: "\u65B0\u5EFA\u5BF9\u8BDD",
                        children: e.jsx(ze, {
                          className: "w-5 h-5"
                        })
                      })
                    ]
                  }),
                  e.jsx("div", {
                    className: "flex-1 overflow-y-auto",
                    children: de ? e.jsx("div", {
                      className: "text-center py-6",
                      children: e.jsx(m.div, {
                        className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                        animate: {
                          rotate: 360
                        },
                        transition: {
                          duration: 1,
                          repeat: 1 / 0,
                          ease: "linear"
                        }
                      })
                    }) : G.length === 0 ? e.jsx("div", {
                      className: "text-center py-6 text-slate-400 dark:text-slate-500 text-sm",
                      children: "\u6682\u65E0\u5BF9\u8BDD\u5386\u53F2"
                    }) : e.jsx("div", {
                      className: "space-y-2",
                      children: G.map((t) => e.jsx("div", {
                        onClick: () => be(t.id),
                        className: `p-3 rounded-lg cursor-pointer transition-all group ${k === t.id ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 border border-transparent"} ${t.isPinned ? "border-l-4 border-l-primary-500" : ""}`,
                        children: e.jsxs("div", {
                          className: "flex items-start justify-between gap-2",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1 min-w-0",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-1.5",
                                  children: [
                                    t.isPinned && e.jsx(se, {
                                      className: "w-3.5 h-3.5 text-primary-500 fill-primary-500 flex-shrink-0"
                                    }),
                                    e.jsx("p", {
                                      className: "font-medium text-slate-800 dark:text-white text-sm truncate",
                                      children: t.title
                                    })
                                  ]
                                }),
                                e.jsxs("p", {
                                  className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                  children: [
                                    t.messageCount,
                                    " \u6761\u6D88\u606F \xB7 ",
                                    je(t.updatedAt)
                                  ]
                                })
                              ]
                            }),
                            e.jsxs("div", {
                              className: "flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all",
                              children: [
                                e.jsx("button", {
                                  onClick: (r) => we(t.id, r),
                                  className: `p-1 rounded transition-colors ${t.isPinned ? "text-primary-500 hover:text-primary-600" : "text-slate-400 hover:text-primary-500"}`,
                                  title: t.isPinned ? "\u53D6\u6D88\u7F6E\u9876" : "\u7F6E\u9876",
                                  children: e.jsx(se, {
                                    className: `w-4 h-4 ${t.isPinned ? "fill-primary-500" : ""}`
                                  })
                                }),
                                e.jsx("button", {
                                  onClick: (r) => {
                                    r.stopPropagation(), ke(t.id, t.title);
                                  },
                                  className: "p-1 text-slate-400 hover:text-primary-500 rounded transition-colors",
                                  title: "\u7F16\u8F91\u6807\u9898",
                                  children: e.jsx(Pe, {
                                    className: "w-4 h-4"
                                  })
                                }),
                                e.jsx("button", {
                                  onClick: (r) => {
                                    r.stopPropagation(), O({
                                      id: t.id,
                                      title: t.title
                                    });
                                  },
                                  className: "p-1 text-slate-400 hover:text-red-500 rounded transition-colors",
                                  title: "\u5220\u9664",
                                  children: e.jsx(Te, {
                                    className: "w-4 h-4"
                                  })
                                })
                              ]
                            })
                          ]
                        })
                      }, t.id))
                    })
                  })
                ]
              })
            }),
            e.jsx("div", {
              className: "flex-1 min-w-0",
              children: e.jsx("div", {
                className: "bg-white dark:bg-slate-800 rounded-2xl shadow-sm flex flex-col h-full border border-slate-100 dark:border-slate-700",
                children: i.size > 0 ? e.jsxs(e.Fragment, {
                  children: [
                    e.jsxs("div", {
                      className: "p-4 border-b border-slate-200 dark:border-slate-600",
                      children: [
                        e.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: ce || (i.size === 1 ? ((_a = h.find((t) => t.id === Array.from(i)[0])) == null ? void 0 : _a.name) || "\u65B0\u5BF9\u8BDD" : `${i.size} \u4E2A\u77E5\u8BC6\u5E93 - \u65B0\u5BF9\u8BDD`)
                        }),
                        e.jsx("div", {
                          className: "flex flex-wrap gap-1.5 mt-2",
                          children: Array.from(i).map((t) => {
                            const r = h.find((s) => s.id === t);
                            return r ? e.jsx("span", {
                              className: "px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full",
                              children: r.name
                            }, t) : null;
                          })
                        })
                      ]
                    }),
                    e.jsx("div", {
                      className: "flex-1 min-h-0 relative dark:bg-slate-800",
                      children: D.length === 0 ? e.jsxs("div", {
                        className: "absolute inset-0 flex flex-col items-center justify-center text-slate-400 dark:text-slate-500",
                        children: [
                          e.jsx(Me, {
                            className: "w-12 h-12 mx-auto mb-3 opacity-50"
                          }),
                          e.jsx("p", {
                            className: "text-sm",
                            children: "\u5F00\u59CB\u63D0\u95EE\u5427\uFF01"
                          })
                        ]
                      }) : e.jsx(Be, {
                        ref: pe,
                        data: D,
                        initialTopMostItemIndex: D.length - 1,
                        followOutput: "smooth",
                        className: "h-full w-full",
                        itemContent: (t, r) => e.jsx("div", {
                          className: "pb-4 px-4 first:pt-4 dark:bg-slate-800",
                          children: e.jsx(m.div, {
                            initial: {
                              opacity: 0,
                              y: 10
                            },
                            animate: {
                              opacity: 1,
                              y: 0
                            },
                            className: `flex ${r.type === "user" ? "justify-end" : "justify-start"}`,
                            children: e.jsx("div", {
                              className: `max-w-[85%] rounded-2xl p-4 shadow-sm ${r.type === "user" ? "bg-primary-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-600 text-slate-800 dark:text-slate-100"}`,
                              children: r.type === "user" ? e.jsx("p", {
                                className: "whitespace-pre-wrap leading-relaxed text-sm",
                                children: r.content
                              }) : e.jsxs("div", {
                                className: "prose prose-slate dark:prose-invert prose-sm max-w-none",
                                children: [
                                  e.jsx(Ke, {
                                    remarkPlugins: [
                                      Oe
                                    ],
                                    components: {
                                      code: ({ className: s, children: l }) => {
                                        const c = /language-(\w+)/.exec(s || "");
                                        return c ? e.jsx(_e, {
                                          language: c[1],
                                          children: String(l).replace(/\n$/, "")
                                        }) : e.jsx("code", {
                                          className: "bg-slate-100 dark:bg-slate-600 text-primary-600 dark:text-primary-400 px-1.5 py-0.5 rounded-md text-sm font-normal",
                                          children: l
                                        });
                                      },
                                      pre: ({ children: s }) => e.jsx(e.Fragment, {
                                        children: s
                                      })
                                    },
                                    children: ye(r.content)
                                  }),
                                  v && t === D.length - 1 && e.jsx("span", {
                                    className: "inline-block w-0.5 h-5 bg-primary-500 ml-1 animate-pulse"
                                  })
                                ]
                              })
                            })
                          })
                        })
                      })
                    }),
                    e.jsxs("div", {
                      className: "p-4 border-t border-slate-200 dark:border-slate-600",
                      children: [
                        !k && e.jsxs("div", {
                          className: "mb-2 flex items-center gap-2",
                          children: [
                            e.jsx("span", {
                              className: "shrink-0 text-xs text-slate-400 dark:text-slate-500",
                              children: "\u95EE\u7B54\u6A21\u578B"
                            }),
                            e.jsx("div", {
                              className: "max-w-xs flex-1",
                              children: e.jsx(Ee, {
                                providers: me,
                                value: Z,
                                onChange: he
                              })
                            }),
                            e.jsx("span", {
                              className: "text-xs text-slate-400 dark:text-slate-500",
                              children: "\u65B0\u4F1A\u8BDD\u5F00\u59CB\u540E\u56FA\u5B9A"
                            })
                          ]
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            e.jsx("input", {
                              type: "text",
                              value: B,
                              onChange: (t) => Y(t.target.value),
                              onKeyPress: (t) => t.key === "Enter" && !t.shiftKey && re(),
                              placeholder: "\u8F93\u5165\u60A8\u7684\u95EE\u9898...",
                              className: "flex-1 px-4 py-2.5 border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                              disabled: v
                            }),
                            e.jsx(m.button, {
                              onClick: re,
                              disabled: !B.trim() || i.size === 0 || v,
                              className: "px-5 py-2.5 bg-primary-500 text-white rounded-xl font-medium hover:bg-primary-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                              whileHover: {
                                scale: v ? 1 : 1.02
                              },
                              whileTap: {
                                scale: v ? 1 : 0.98
                              },
                              children: "\u53D1\u9001"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }) : e.jsx("div", {
                  className: "flex-1 flex items-center justify-center text-slate-400 dark:text-slate-500",
                  children: e.jsxs("div", {
                    className: "text-center",
                    children: [
                      e.jsx("svg", {
                        className: "w-12 h-12 mx-auto mb-3 opacity-50",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: e.jsx("path", {
                          d: "M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        })
                      }),
                      e.jsx("p", {
                        className: "text-sm",
                        children: "\u8BF7\u5148\u5728\u53F3\u4FA7\u9009\u62E9\u77E5\u8BC6\u5E93"
                      })
                    ]
                  })
                })
              })
            }),
            e.jsx(q, {
              children: Q && e.jsx(m.div, {
                initial: {
                  width: 0,
                  opacity: 0
                },
                animate: {
                  width: 280,
                  opacity: 1
                },
                exit: {
                  width: 0,
                  opacity: 0
                },
                transition: {
                  duration: 0.2
                },
                className: "flex-shrink-0 overflow-hidden",
                children: e.jsxs("div", {
                  className: "bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-sm h-full flex flex-col w-[280px] border border-slate-100 dark:border-slate-700",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-4",
                      children: [
                        e.jsx("h2", {
                          className: "text-base font-semibold text-slate-800 dark:text-white",
                          children: "\u9009\u62E9\u77E5\u8BC6\u5E93"
                        }),
                        e.jsx("button", {
                          onClick: () => W(false),
                          className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded",
                          children: e.jsx(Re, {
                            className: "w-5 h-5"
                          })
                        })
                      ]
                    }),
                    e.jsxs("div", {
                      className: "flex gap-2 mb-3",
                      children: [
                        e.jsx("input", {
                          type: "text",
                          value: f,
                          onChange: (t) => _(t.target.value),
                          onKeyPress: (t) => t.key === "Enter" && X(),
                          placeholder: "\u641C\u7D22...",
                          className: "flex-1 px-3 py-1.5 text-sm border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400"
                        }),
                        e.jsx("button", {
                          onClick: X,
                          className: "px-3 py-1.5 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600",
                          children: "\u641C\u7D22"
                        })
                      ]
                    }),
                    e.jsx("div", {
                      className: "mb-3",
                      children: e.jsxs("select", {
                        value: K,
                        onChange: (t) => {
                          le(t.target.value), _("");
                        },
                        className: "w-full px-2 py-1 text-xs border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-500 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300",
                        children: [
                          e.jsx("option", {
                            value: "time",
                            children: "\u65F6\u95F4\u6392\u5E8F"
                          }),
                          e.jsx("option", {
                            value: "size",
                            children: "\u5927\u5C0F\u6392\u5E8F"
                          }),
                          e.jsx("option", {
                            value: "access",
                            children: "\u8BBF\u95EE\u6392\u5E8F"
                          }),
                          e.jsx("option", {
                            value: "question",
                            children: "\u63D0\u95EE\u6392\u5E8F"
                          })
                        ]
                      })
                    }),
                    e.jsx("div", {
                      className: "flex-1 overflow-y-auto",
                      children: H ? e.jsx("div", {
                        className: "text-center py-6",
                        children: e.jsx(m.div, {
                          className: "w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full mx-auto",
                          animate: {
                            rotate: 360
                          },
                          transition: {
                            duration: 1,
                            repeat: 1 / 0,
                            ease: "linear"
                          }
                        })
                      }) : h.length === 0 ? e.jsxs("div", {
                        className: "text-center py-6 text-slate-500 dark:text-slate-400",
                        children: [
                          e.jsx("p", {
                            className: "mb-2 text-sm",
                            children: f ? "\u672A\u627E\u5230" : "\u6682\u65E0\u77E5\u8BC6\u5E93"
                          }),
                          !f && e.jsx("button", {
                            onClick: d,
                            className: "text-primary-500 hover:text-primary-600 font-medium text-sm",
                            children: "\u7ACB\u5373\u4E0A\u4F20"
                          })
                        ]
                      }) : e.jsx("div", {
                        className: "space-y-2",
                        children: xe.map((t) => e.jsxs("div", {
                          className: "border border-slate-100 dark:border-slate-700 rounded-lg overflow-hidden",
                          children: [
                            e.jsxs("button", {
                              onClick: () => ge(t.name),
                              className: "w-full flex items-center justify-between px-3 py-2 bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
                              children: [
                                e.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    e.jsx(oe, {
                                      className: `w-3.5 h-3.5 text-slate-400 transition-transform ${t.isExpanded ? "rotate-90" : ""}`
                                    }),
                                    e.jsx("span", {
                                      className: "font-medium text-slate-700 dark:text-slate-300 text-sm",
                                      children: t.name
                                    })
                                  ]
                                }),
                                e.jsx("span", {
                                  className: "text-xs text-slate-400",
                                  children: t.items.length
                                })
                              ]
                            }),
                            e.jsx(q, {
                              children: t.isExpanded && e.jsx(m.div, {
                                initial: {
                                  height: 0,
                                  opacity: 0
                                },
                                animate: {
                                  height: "auto",
                                  opacity: 1
                                },
                                exit: {
                                  height: 0,
                                  opacity: 0
                                },
                                transition: {
                                  duration: 0.2
                                },
                                className: "overflow-hidden",
                                children: e.jsx("div", {
                                  className: "p-2 space-y-1",
                                  children: t.items.map((r) => e.jsxs("div", {
                                    onClick: () => U(r.id),
                                    className: `p-2 rounded-lg cursor-pointer transition-all ${i.has(r.id) ? "bg-primary-50 dark:bg-primary-900/30 border border-primary-500" : "bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 border border-transparent"}`,
                                    children: [
                                      e.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                          e.jsx("input", {
                                            type: "checkbox",
                                            checked: i.has(r.id),
                                            onChange: () => U(r.id),
                                            onClick: (s) => s.stopPropagation(),
                                            className: "w-3.5 h-3.5 text-primary-500 rounded focus:ring-primary-500"
                                          }),
                                          e.jsx("span", {
                                            className: "font-medium text-slate-800 dark:text-white text-xs truncate flex-1",
                                            children: r.name
                                          })
                                        ]
                                      }),
                                      e.jsx("p", {
                                        className: "text-xs text-slate-400 dark:text-slate-500 mt-0.5 ml-5",
                                        children: ve(r.fileSize)
                                      })
                                    ]
                                  }, r.id))
                                })
                              })
                            })
                          ]
                        }, t.name))
                      })
                    })
                  ]
                })
              })
            }),
            !Q && e.jsx("button", {
              onClick: () => W(true),
              className: "flex-shrink-0 w-10 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors",
              title: "\u5C55\u5F00\u77E5\u8BC6\u5E93\u9762\u677F",
              children: e.jsx(oe, {
                className: "w-5 h-5 text-slate-400"
              })
            })
          ]
        }),
        e.jsx(Fe, {
          open: !!w,
          item: w ? {
            id: 0,
            title: w.title
          } : null,
          itemType: "\u5BF9\u8BDD",
          onConfirm: fe,
          onCancel: () => O(null)
        }),
        e.jsx(q, {
          children: E && e.jsxs(e.Fragment, {
            children: [
              e.jsx(m.div, {
                initial: {
                  opacity: 0
                },
                animate: {
                  opacity: 1
                },
                exit: {
                  opacity: 0
                },
                onClick: () => {
                  A(null), C("");
                },
                className: "fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              }),
              e.jsx("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                children: e.jsxs(m.div, {
                  initial: {
                    opacity: 0,
                    scale: 0.95,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    scale: 1,
                    y: 0
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.95,
                    y: 20
                  },
                  onClick: (t) => t.stopPropagation(),
                  className: "bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-100 dark:border-slate-700",
                  children: [
                    e.jsx("h3", {
                      className: "text-xl font-bold text-slate-900 dark:text-white mb-4",
                      children: "\u7F16\u8F91\u6807\u9898"
                    }),
                    e.jsx("input", {
                      type: "text",
                      value: S,
                      onChange: (t) => C(t.target.value),
                      onKeyPress: (t) => t.key === "Enter" && te(),
                      placeholder: "\u8BF7\u8F93\u5165\u65B0\u6807\u9898",
                      className: "w-full px-4 py-3 text-sm border border-slate-200 dark:border-slate-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-400",
                      autoFocus: true
                    }),
                    e.jsxs("div", {
                      className: "flex justify-end gap-3",
                      children: [
                        e.jsx("button", {
                          onClick: () => {
                            A(null), C("");
                          },
                          className: "px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white",
                          children: "\u53D6\u6D88"
                        }),
                        e.jsx("button", {
                          onClick: te,
                          disabled: !S.trim(),
                          className: "px-4 py-2 text-sm bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50",
                          children: "\u4FDD\u5B58"
                        })
                      ]
                    })
                  ]
                })
              })
            ]
          })
        })
      ]
    });
  };
});
export {
  __tla,
  tt as default
};
