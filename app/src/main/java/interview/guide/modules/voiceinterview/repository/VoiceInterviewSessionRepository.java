package interview.guide.modules.voiceinterview.repository;

import interview.guide.common.model.AsyncTaskStatus;
import interview.guide.modules.voiceinterview.model.VoiceInterviewSessionEntity;
import interview.guide.modules.voiceinterview.model.VoiceInterviewSessionEntity.InterviewPhase;
import interview.guide.modules.voiceinterview.model.VoiceInterviewSessionStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.persistence.LockModeType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

/**
 * 语音面试会话Repository
 */
@Repository
public interface VoiceInterviewSessionRepository extends JpaRepository<VoiceInterviewSessionEntity, Long> {

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT s FROM VoiceInterviewSessionEntity s WHERE s.id = :sessionId")
    Optional<VoiceInterviewSessionEntity> findByIdForUpdate(@Param("sessionId") Long sessionId);

    /**
     * 根据用户ID查找所有会话，按开始时间倒序
     */
    List<VoiceInterviewSessionEntity> findByUserIdOrderByStartTimeDesc(String userId);

    /**
     * 查找指定状态且结束时间早于给定时间的会话
     * Note: Queries the AsyncTaskStatus field, not InterviewPhase
     */
    Optional<VoiceInterviewSessionEntity> findByStatusAndEndTimeBefore(
        interview.guide.common.model.AsyncTaskStatus status,
        LocalDateTime time
    );

    /**
     * Find all sessions for a user, ordered by update time
     */
    List<VoiceInterviewSessionEntity> findByUserIdOrderByUpdatedAtDesc(String userId);

    /**
     * Find sessions by user and status, ordered by update time
     */
    List<VoiceInterviewSessionEntity> findByUserIdAndStatusOrderByUpdatedAtDesc(
        String userId,
        VoiceInterviewSessionStatus status
    );

    List<VoiceInterviewSessionEntity> findByStatusAndStartTimeBefore(
        VoiceInterviewSessionStatus status,
        LocalDateTime time
    );

    List<VoiceInterviewSessionEntity> findByEvaluateStatusAndUpdatedAtBefore(
        interview.guide.common.model.AsyncTaskStatus evaluateStatus,
        LocalDateTime time
    );

    /**
     * 原子领取语音评估任务：仅当状态为 PENDING 或 FAILED 时才置为 PROCESSING。
     * 返回 0 表示领取冲突（已被其他消费者处理），用于超时重投/手动重试与正常消费的重复去重。
     */
    @Modifying
    @Query("UPDATE VoiceInterviewSessionEntity s SET s.evaluateStatus = :processing "
        + "WHERE s.id = :sessionId AND s.evaluateStatus IN :allowedStatuses")
    int claimEvaluation(
        @Param("sessionId") Long sessionId,
        @Param("processing") AsyncTaskStatus processing,
        @Param("allowedStatuses") List<AsyncTaskStatus> allowedStatuses);
}
