package com.vlcooking.vlcookwebsite.dto;

public class UserDTO {
    private Long userId;
    private String username;
    private String email;
    
    private String roleName;

    public UserDTO(Long userId, String username, String email,  String roleName) {
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.roleName = roleName;
    }
    
    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getRoleName() {
        return roleName;
    }
    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    
}
