package interview.guide.modules.llmprovider.repository;

import interview.guide.modules.llmprovider.model.OcrPlatformConfigEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OcrPlatformConfigRepository extends JpaRepository<OcrPlatformConfigEntity, Long> {
}