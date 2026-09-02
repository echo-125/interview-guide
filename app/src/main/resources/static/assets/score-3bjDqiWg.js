function u(r, e) {
  return e === 0 ? 0 : Math.round(r / e * 100);
}
function a(r, e, t) {
  return e === 0 ? 0 : r / e * t;
}
function n() {
  return typeof window < "u" && document.documentElement.classList.contains("dark");
}
function i(r, e = [80, 70]) {
  return n() ? r >= e[0] ? "bg-emerald-500/20 text-emerald-400" : r >= e[1] ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400" : r >= e[0] ? "bg-emerald-100 text-emerald-600" : r >= e[1] ? "bg-amber-100 text-amber-600" : "bg-red-100 text-red-600";
}
function f(r, e = [80, 70]) {
  return r >= e[0] ? "bg-emerald-500" : r >= e[1] ? "bg-amber-500" : "bg-red-500";
}
function d(r, e = [80, 70]) {
  return r >= e[0] ? "text-emerald-500" : r >= e[1] ? "text-amber-500" : "text-red-500";
}
export {
  i as a,
  d as b,
  u as c,
  f as g,
  a as n
};
