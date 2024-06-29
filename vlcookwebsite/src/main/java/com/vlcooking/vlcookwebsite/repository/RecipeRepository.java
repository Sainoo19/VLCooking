package com.vlcooking.vlcookwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vlcooking.vlcookwebsite.domain.Recipe;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long>{
    
}
