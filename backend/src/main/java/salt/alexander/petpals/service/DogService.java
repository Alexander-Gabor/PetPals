package salt.alexander.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import salt.alexander.petpals.model.Dog;
import salt.alexander.petpals.repository.DogRepository;

import java.util.List;

@Service
public class DogService {

    @Autowired
    private DogRepository dogRepository;

    public List<Dog> getAllDogs() {
        return dogRepository.findAll();
    }
}
