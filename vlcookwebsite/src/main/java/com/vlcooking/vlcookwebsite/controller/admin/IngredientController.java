package com.vlcooking.vlcookwebsite.controller.admin;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vlcooking.vlcookwebsite.domain.Ingredient;
import com.vlcooking.vlcookwebsite.service.IngredientService;



@RestController
public class IngredientController {
    private final IngredientService ingredientService;

    public IngredientController(IngredientService ingredientService) {
        this.ingredientService = ingredientService;
    }
    
    @GetMapping("/api/ingredients")
    public List<Ingredient> FetchAllIngredient() {
        return this.ingredientService.GetAllIngredient();
    }
    
}
