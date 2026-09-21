package interview.guide.modules.llmprovider.repository;

import interview.guide.modules.llmprovider.model.VoicePlatformConfigEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoicePlatformConfigRepository extends JpaRepository<VoicePlatformConfigEntity, String> {
}