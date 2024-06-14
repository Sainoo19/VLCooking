package com.vlcooking.vlcookwebsite.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "recipeingredients")
public class RecipeIngredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long recipeIngredientId;

    @ManyToOne
    @JoinColumn(name = "recipeId")
    private Recipe recipe;

    @ManyToOne
    @JoinColumn(name = "ingredientId")
    private Ingredient ingredient;

    private float quantity;
    private String unit;

    public RecipeIngredient() {
    }

    public RecipeIngredient(long recipeIngredientId, Recipe recipe, Ingredient ingredient, float quantity,
            String unit) {
        this.recipeIngredientId = recipeIngredientId;
        this.recipe = recipe;
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.unit = unit;
    }

    public long getRecipeIngredientId() {
        return recipeIngredientId;
    }

    public void setRecipeIngredientId(long recipeIngredientId) {
        this.recipeIngredientId = recipeIngredientId;
    }

    public Recipe getRecipe() {
        return recipe;
    }

    public void setRecipe(Recipe recipe) {
        this.recipe = recipe;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public float getQuantity() {
        return quantity;
    }

    public void setQuantity(float quantity) {
        this.quantity = quantity;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

}
