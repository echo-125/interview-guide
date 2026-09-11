package interview.guide.modules.interview.repository;

import interview.guide.modules.interview.model.InterviewSessionEntity;
import interview.guide.modules.interview.model.InterviewSessionEntity.SessionStatus;
import interview.guide.modules.interview.model.SessionListItemDTO;
import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.modules.resume.model.ResumeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * 面试会话Repository
 */
@Repository
public interface InterviewSessionRepository extends JpaRepository<InterviewSessionEntity, Long> {

    /**
     * 根据会话ID查找
     */
    Optional<InterviewSessionEntity> findBySessionId(String sessionId);

    Optional<InterviewSessionEntity> findByRequestId(String requestId);

    /**
     * 根据会话ID查找（同时加载关联的简历）
     */
    @Query("SELECT s FROM InterviewSessionEntity s LEFT JOIN FETCH s.resume WHERE s.sessionId = :sessionId")
    Optional<InterviewSessionEntity> findBySessionIdWithResume(@Param("sessionId") String sessionId);

    /**
     * 原子领取评估任务：仅当状态为 PENDING 或 FAILED 时才置为 PROCESSING。
     * 返回 0 表示领取冲突（已被其他消费者处理），用于重复任务去重。
     */
    @Modifying
    @Query("UPDATE InterviewSessionEntity s SET s.evaluateStatus = :processing "
        + "WHERE s.sessionId = :sessionId AND s.evaluateStatus IN :allowedStatuses")
    int claimEvaluation(
        @Param("sessionId") String sessionId,
        @Param("processing") AsyncTaskStatus processing,
        @Param("allowedStatuses") List<AsyncTaskStatus> allowedStatuses);

    /**
     * 根据简历查找所有面试记录
     */
    List<InterviewSessionEntity> findByResumeOrderByCreatedAtDesc(ResumeEntity resume);
    
    /**
     * 根据简历ID查找所有面试记录
     */
    List<InterviewSessionEntity> findByResumeIdOrderByCreatedAtDesc(Long resumeId);

    /**
     * 根据简历ID查找最近的面试记录（用于历史题去重）
     */
    List<InterviewSessionEntity> findTop10ByResumeIdOrderByCreatedAtDesc(Long resumeId);

    /**
     * 按简历ID统计面试次数（避免 N+1）
     */
    long countByResumeId(Long resumeId);

    /**
     * 单条 GROUP BY 批量统计多个简历的面试次数，替代逐条 countByResumeId
     */
    @Query("SELECT s.resumeId, COUNT(s) FROM InterviewSessionEntity s "
        + "WHERE s.resumeId IN :resumeIds GROUP BY s.resumeId")
    List<Object[]> countByResumeIdIn(@Param("resumeIds") List<Long> resumeIds);
    
    /**
     * 查找简历的未完成面试（CREATED或IN_PROGRESS状态）
     */
    Optional<InterviewSessionEntity> findFirstByResumeIdAndStatusInOrderByCreatedAtDesc(
        Long resumeId, 
        List<SessionStatus> statuses
    );
    
    /**
     * 根据简历ID和状态查找会话
     */
    Optional<InterviewSessionEntity> findByResumeIdAndStatusIn(
        Long resumeId,
        List<SessionStatus> statuses
    );

    /**
     * 查找所有面试会话（按创建时间倒序）
     */
    List<InterviewSessionEntity> findAllByOrderByCreatedAtDesc();

    /**
     * 会话列表投影：只取列表所需标量列（构造器表达式），
     * 避免把 questionsJson 等四个 TEXT 大字段整表拉回内存
     */
    @Query("""
        SELECT new interview.guide.modules.interview.model.SessionListItemDTO(
            s.sessionId, s.skillId, s.difficulty, s.resumeId,
            COALESCE(s.totalQuestions, 0), s.status, s.evaluateStatus, s.evaluateError,
            s.overallScore, s.sourceType, s.knowledgeBaseId, s.interviewCategory, s.createdAt, s.completedAt)
        FROM InterviewSessionEntity s
        ORDER BY s.createdAt DESC
        """)
    List<SessionListItemDTO> findAllSessionListItems();

    /**
     * 根据 skillId 查找最近的面试记录（用于通用模式历史题去重）
     */
    List<InterviewSessionEntity> findTop10BySkillIdOrderByCreatedAtDesc(String skillId);

    /**
     * 根据 resumeId + skillId 查找最近的面试记录（精确匹配）
     */
    List<InterviewSessionEntity> findTop10ByResumeIdAndSkillIdOrderByCreatedAtDesc(Long resumeId, String skillId);
}
