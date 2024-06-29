package com.vlcooking.vlcookwebsite.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vlcooking.vlcookwebsite.domain.Ingredient;
import com.vlcooking.vlcookwebsite.repository.IngredientRepository;

@Service
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }
    public List<Ingredient> GetAllIngredient(){
        return this.ingredientRepository.findAll();
    }
}
