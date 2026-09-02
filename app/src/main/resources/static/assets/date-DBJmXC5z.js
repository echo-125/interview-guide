function e(t, n) {
  if (!t) return "-";
  const i = new Date(t);
  if (isNaN(i.getTime())) return "-";
  const a = { year: "numeric", month: "2-digit", day: "2-digit", ...n };
  return i.toLocaleDateString("zh-CN", a);
}
function r(t) {
  return e(t, { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}
function o(t) {
  return e(t, { year: "numeric", month: "2-digit", day: "2-digit" });
}
export {
  r as a,
  e as b,
  o as f
};
