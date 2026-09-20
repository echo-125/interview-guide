package interview.guide.modules.resume.service;

import interview.guide.modules.resume.model.ResumeEntity;
import interview.guide.modules.resume.model.ResumeWorkingDocumentEntity;
import interview.guide.modules.resume.model.WorkingDocumentSnapshotDTO;
import interview.guide.modules.resume.repository.ResumeWorkingDocumentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

/** ResumeWorkingDocumentService 的单元测试（Mockito，不依赖真实 DB / Redis） */
@ExtendWith(MockitoExtension.class)
@DisplayName("简历工作区持久化服务")
class ResumeWorkingDocumentServiceTest {

    @Mock
    private ResumeWorkingDocumentRepository repository;

    @Mock
    private ResumePersistenceService resumePersistenceService;

    private ResumeWorkingDocumentService service;

    @BeforeEach
    void setUp() {
        // 手动构造：ObjectMapper 由 service 内部自建（不依赖容器）
        service = new ResumeWorkingDocumentService(repository, resumePersistenceService);
    }

    private ResumeWorkingDocumentEntity entity() {
        ResumeWorkingDocumentEntity e = new ResumeWorkingDocumentEntity();
        e.setId(1L);
        e.setResumeId(1L);
        e.setParser("llm");
        e.setSourceTextHash("abc123");
        e.setOriginalDocumentJson("{\"version\":1}");
        e.setDocumentJson("{\"version\":1}");
        e.setRevisionIndex(0);
        e.setRevisionSeq(1);
        e.setRevisionsJson("[{\"id\":\"rev-1\"}]");
        return e;
    }

    @Test
    @DisplayName("load：有记录 → 返回快照")
    void loadHit() {
        when(repository.findByResumeId(1L)).thenReturn(Optional.of(entity()));
        var dto = service.load(1L).orElseThrow();
        assertThat(dto.sourceTextHash()).isEqualTo("abc123");
        assertThat(dto.originalDocument()).isEqualTo("{\"version\":1}");
        assertThat(dto.revisionIndex()).isEqualTo(0);
        assertThat(dto.revisionSeq()).isEqualTo(1);
        assertThat(dto.revisions()).isEqualTo("[{\"id\":\"rev-1\"}]");
    }

    @Test
    @DisplayName("load：无记录 → empty（前端据此走重新解析）")
    void loadMiss() {
        when(repository.findByResumeId(1L)).thenReturn(Optional.empty());
        assertThat(service.load(1L)).isEmpty();
    }

    @Test
    @DisplayName("upsert：简历存在且 document 合法 → 保存并返回落库快照")
    void upsertCreate() {
        when(resumePersistenceService.findById(1L)).thenReturn(Optional.of(new ResumeEntity()));
        when(repository.findByResumeId(1L)).thenReturn(Optional.empty());
        when(repository.save(any())).thenAnswer(inv -> inv.getArgument(0));

        WorkingDocumentSnapshotDTO dto = new WorkingDocumentSnapshotDTO(
            "llm", "hash1", "{\"version\":1}", "{\"version\":1}", 1, 2, "[{\"id\":\"rev-1\"}]");

        var saved = service.upsert(1L, dto);
        assertThat(saved.sourceTextHash()).isEqualTo("hash1");
        assertThat(saved.revisionIndex()).isEqualTo(1);
        assertThat(saved.revisionSeq()).isEqualTo(2);
        assertThat(saved.revisions()).isEqualTo("[{\"id\":\"rev-1\"}]");
        verify(repository).save(any(ResumeWorkingDocumentEntity.class));
    }

    @Test
    @DisplayName("upsert：简历不存在 → 拒绝保存")
    void upsertResumeMissing() {
        when(resumePersistenceService.findById(1L)).thenReturn(Optional.empty());
        WorkingDocumentSnapshotDTO dto = new WorkingDocumentSnapshotDTO("llm", "h", "{\"version\":1}", "{\"version\":1}", -1, 0, "[]");
        org.assertj.core.api.Assertions.assertThatThrownBy(() -> service.upsert(1L, dto))
            .isInstanceOf(interview.guide.common.exception.BusinessException.class);
        verify(repository, never()).save(any());
    }
}
