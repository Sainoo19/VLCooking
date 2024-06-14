package com.vlcooking.vlcookwebsite.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "categoryRecipes")
public class CategoryRecipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryRecipeId;
    @ManyToOne
    @JoinColumn(name = "recipeId")
    private Recipe recipe;
    @ManyToOne
    @JoinColumn(name = "categoryId")
    private Category category;

    public CategoryRecipe() {
    }

    public CategoryRecipe(long categoryRecipeId, Recipe recipe, Category category) {
        this.categoryRecipeId = categoryRecipeId;
        this.recipe = recipe;
        this.category = category;
    }

    public long getCategoryRecipeId() {
        return categoryRecipeId;
    }

    public void setCategoryRecipeId(long categoryRecipeId) {
        this.categoryRecipeId = categoryRecipeId;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
