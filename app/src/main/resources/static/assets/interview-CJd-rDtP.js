import { r as s } from "./index-CxLe-kJW.js";
const i = { async listSessions() {
  return s.get("/api/interview/sessions");
}, async createSession(e) {
  return s.post("/api/interview/sessions", e, { timeout: 18e4 });
}, async getSession(e) {
  return s.get(`/api/interview/sessions/${e}`);
}, async getCurrentQuestion(e) {
  return s.get(`/api/interview/sessions/${e}/question`);
}, async submitAnswer(e) {
  return s.post(`/api/interview/sessions/${e.sessionId}/answers`, { questionIndex: e.questionIndex, answer: e.answer }, { timeout: 18e4 });
}, async getReport(e) {
  return s.get(`/api/interview/sessions/${e}/report`, { timeout: 18e4 });
}, async findUnfinishedSession(e) {
  try {
    return await s.get(`/api/interview/sessions/unfinished/${e}`);
  } catch {
    return null;
  }
}, async saveAnswer(e) {
  return s.put(`/api/interview/sessions/${e.sessionId}/answers`, { questionIndex: e.questionIndex, answer: e.answer });
}, async completeInterview(e) {
  return s.post(`/api/interview/sessions/${e}/complete`);
} };
export {
  i
};
