package com.vlcooking.vlcookwebsite.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.vlcooking.vlcookwebsite.domain.Recipe;
import com.vlcooking.vlcookwebsite.repository.RecipeRepository;

@Service
public class RecipeService {
    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }
    
    public List<Recipe> GetAllRecipe(){
        return this.recipeRepository.findAll();
    }
}
