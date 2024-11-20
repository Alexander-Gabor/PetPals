package salt.alexander.petpals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import salt.alexander.petpals.model.Cat;
import salt.alexander.petpals.service.CatService;

import java.util.List;

@RestController
@RequestMapping("/api/cats")
public class CatController {

    @Autowired
    private CatService catService;

    @GetMapping
    public List<Cat> getAllCats() {
        return catService.getAllCats(); // Return all cats
    }
}
