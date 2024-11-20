package salt.alexander.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import salt.alexander.petpals.model.Cat;

public interface CatRepository extends JpaRepository<Cat, Long> {
}