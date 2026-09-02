package interview.guide.modules.resume.repository;

import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.modules.resume.model.ResumeJdAnalysisEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 简历 vs JD 匹配诊断 Repository
 */
@Repository
public interface ResumeJdAnalysisRepository extends JpaRepository<ResumeJdAnalysisEntity, Long> {

    /**
     * 根据简历ID查找所有诊断记录（最新在前）
     */
    List<ResumeJdAnalysisEntity> findByResumeIdOrderByCreatedAtDescIdDesc(Long resumeId);

    /**
     * 根据简历ID查找最新一条已完成诊断
     */
    Optional<ResumeJdAnalysisEntity> findFirstByResumeIdAndAnalysisStatusOrderByIdDesc(
        Long resumeId, AsyncTaskStatus analysisStatus);
}
