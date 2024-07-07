package com.vlcooking.vlcookwebsite.domain;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "categories")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    
    @OneToMany(mappedBy = "category")
    private List<CategoryRecipe> categoryRecipes;

    public Category() {

    }

    public Category(long categoryId, String name, String description, 
            List<CategoryRecipe> categoryRecipes) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
        
        this.categoryRecipes = categoryRecipes;
    }

    public long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(long categoryId) {
        this.categoryId = categoryId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    

    public List<CategoryRecipe> getCategoryRecipes() {
        return categoryRecipes;
    }

    public void setCategoryRecipes(List<CategoryRecipe> categoryRecipes) {
        this.categoryRecipes = categoryRecipes;
    }

}
