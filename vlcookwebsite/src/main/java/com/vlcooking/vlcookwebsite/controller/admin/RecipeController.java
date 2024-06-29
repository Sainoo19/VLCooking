package com.vlcooking.vlcookwebsite.controller.admin;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vlcooking.vlcookwebsite.domain.Recipe;
import com.vlcooking.vlcookwebsite.service.RecipeService;



@RestController
public class RecipeController {

    private RecipeService recipeService;
    

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }


    @GetMapping("/api/recipes")
    public List<Recipe> fetchAllRecipes() {
        return this.recipeService.GetAllRecipe();
    }
    
}
