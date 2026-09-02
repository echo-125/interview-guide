function n(e) {
  return e === "PENDING" || e === "PROCESSING";
}
function r(e, l) {
  if (!e) return false;
  const t = new Date(e).getTime();
  return Number.isFinite(t) && l - t >= 12e4;
}
function o({ status: e, statusUpdatedAt: l, now: t = Date.now() }) {
  return e === "FAILED" ? { tone: "error", label: "\u751F\u6210\u5931\u8D25", title: "\u8BC4\u4F30\u62A5\u544A\u751F\u6210\u5931\u8D25", description: "\u672C\u6B21\u9762\u8BD5\u8BB0\u5F55\u5DF2\u4FDD\u5B58\uFF0C\u4F60\u53EF\u4EE5\u91CD\u65B0\u751F\u6210\u8BC4\u4F30\u62A5\u544A\u3002", retryable: true, shouldPoll: false } : e === "COMPLETED" ? { tone: "success", label: "\u5DF2\u5B8C\u6210", title: "\u8BC4\u4F30\u62A5\u544A\u5DF2\u751F\u6210", description: "\u672C\u6B21\u9762\u8BD5\u7684\u5206\u6790\u7ED3\u679C\u5DF2\u7ECF\u51C6\u5907\u597D\u3002", retryable: false, shouldPoll: false } : e === "PROCESSING" ? { tone: "loading", label: "\u8BC4\u4F30\u4E2D", title: "AI \u6B63\u5728\u5206\u6790\u672C\u6B21\u9762\u8BD5", description: "\u6B63\u5728\u6574\u7406\u56DE\u7B54\u8868\u73B0\u548C\u6539\u8FDB\u5EFA\u8BAE\uFF0C\u4F60\u53EF\u4EE5\u5148\u79BB\u5F00\u6B64\u9875\u9762\u3002", retryable: false, shouldPoll: true } : e === "PENDING" && r(l, t) ? { tone: "warning", label: "\u8BC4\u4F30\u5EF6\u8FDF", title: "\u8BC4\u4F30\u7B49\u5F85\u65F6\u95F4\u8F83\u957F", description: "\u4EFB\u52A1\u53EF\u80FD\u6CA1\u6709\u6210\u529F\u8FDB\u5165\u961F\u5217\uFF0C\u4F60\u53EF\u4EE5\u91CD\u65B0\u751F\u6210\uFF0C\u5DF2\u4FDD\u5B58\u7684\u9762\u8BD5\u8BB0\u5F55\u4E0D\u4F1A\u4E22\u5931\u3002", retryable: true, shouldPoll: true } : { tone: "loading", label: "\u7B49\u5F85\u8BC4\u4F30", title: "\u6B63\u5728\u6392\u961F\u751F\u6210\u8BC4\u4F30\u62A5\u544A", description: "\u901A\u5E38\u4F1A\u5728 10\u201330 \u79D2\u5185\u5F00\u59CB\u5206\u6790\uFF0C\u4F60\u53EF\u4EE5\u5148\u79BB\u5F00\u6B64\u9875\u9762\u3002", retryable: false, shouldPoll: true };
}
export {
  o as g,
  n as s
};
