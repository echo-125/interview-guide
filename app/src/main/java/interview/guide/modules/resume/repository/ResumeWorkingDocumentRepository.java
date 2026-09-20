package interview.guide.modules.resume.repository;

import interview.guide.modules.resume.model.ResumeWorkingDocumentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/** 简历工作区持久化仓库（一简历一行） */
public interface ResumeWorkingDocumentRepository extends JpaRepository<ResumeWorkingDocumentEntity, Long> {

    Optional<ResumeWorkingDocumentEntity> findByResumeId(Long resumeId);
}
