package com.vlcooking.vlcookwebsite.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    private String username;
    private String password;
    private String email;
    private String avatar;

    @ManyToOne
    @JoinColumn(name = "roleId")
    private Role role;

    @OneToMany(mappedBy = "user")
    private List<Order> orders;

    @JsonIgnore
    @OneToMany(mappedBy = "author")
    private List<Recipe> recipes;

    @OneToMany(mappedBy = "user")
    private List<Review> reviews;

    public User() {
    }

    public User(long userId, String username, String password, String email, String avatar, Role role,
            List<Order> orders, List<Recipe> recipes, List<Review> reviews) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
        this.avatar = avatar;
        this.role = role;
        this.orders = orders;
        this.recipes = recipes;
        this.reviews = reviews;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }

    public void setRecipes(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

}
