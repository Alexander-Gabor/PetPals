package salt.alexander.petpals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import salt.alexander.petpals.model.Dog;

public interface DogRepository extends JpaRepository<Dog, Long> {
}