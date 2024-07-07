package com.vlcooking.vlcookwebsite.controller.admin;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.vlcooking.vlcookwebsite.domain.Role;
import com.vlcooking.vlcookwebsite.domain.User;
import com.vlcooking.vlcookwebsite.dto.UserDTO;
import com.vlcooking.vlcookwebsite.service.UserService;



@RestController

public class UserController {
    
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;



    public UserController(UserService userService, PasswordEncoder passwordEncoder) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }


    @PostMapping("/api/users")
    public ResponseEntity<User> CreateUser(@RequestBody User userJSON) {
        String encodedPassword = passwordEncoder.encode(userJSON.getPassword());
        userJSON.setPassword(encodedPassword);
        Role role = userService.getRoleById(userJSON.getRole().getRoleId());
        userJSON.setRole(role);
        User newUser = userService.saveUser(userJSON);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }
    

    @GetMapping("/api/users")
       public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> userDTOs = userService.getAllUsers();
        return ResponseEntity.ok(userDTOs);
    }

    @GetMapping("/api/users/{id}")
    public ResponseEntity<User> GetUserByID(@PathVariable("id") long id) {
        return ResponseEntity.ok(this.userService.GetUserByID(id));
    }

     @PutMapping("/api/users/{id}")
    public ResponseEntity<User> UpdateUser(@PathVariable("id") long id, @RequestBody User updateUser) {
        User user = this.userService.GetUserByID(id);
        
        user.setEmail(updateUser.getEmail());
        user.setUsername(updateUser.getUsername());
        
        userService.saveUser(user);
        return ResponseEntity.status(HttpStatus.OK).body(user);
    }
    
    @DeleteMapping("/api/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

}
