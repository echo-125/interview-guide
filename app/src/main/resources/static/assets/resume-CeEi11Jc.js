import { r } from "./index-ahWF3Ci-.js";
const t = { async uploadAndAnalyze(e, a) {
  const s = new FormData();
  return s.append("file", e), a && s.append("llmProvider", a), r.upload("/api/resumes/upload", s);
}, async reanalyze(e, a) {
  const s = a ? `?llmProvider=${encodeURIComponent(a)}` : "";
  return r.post(`/api/resumes/${e}/reanalyze${s}`);
}, async startJdAnalysis(e, a, s) {
  return r.post(`/api/resumes/${e}/jd-analysis`, { jdText: a, llmProvider: s || null });
}, async listJdAnalyses(e) {
  return r.get(`/api/resumes/${e}/jd-analyses`);
}, async healthCheck() {
  return r.get("/api/resumes/health");
} };
export {
  t as r
};
