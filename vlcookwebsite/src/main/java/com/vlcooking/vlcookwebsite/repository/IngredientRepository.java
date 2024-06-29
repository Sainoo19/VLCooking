package com.vlcooking.vlcookwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vlcooking.vlcookwebsite.domain.Ingredient;


@Repository
public interface IngredientRepository  extends JpaRepository<Ingredient, Long>{
    
}
