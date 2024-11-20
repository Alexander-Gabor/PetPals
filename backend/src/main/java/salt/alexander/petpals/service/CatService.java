// CatService.java
package salt.alexander.petpals.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import salt.alexander.petpals.model.Cat;
import salt.alexander.petpals.repository.CatRepository;

import java.util.List;

@Service
public class CatService {

    @Autowired
    private CatRepository catRepository;

    public List<Cat> getAllCats() {
        return catRepository.findAll();
    }
}
