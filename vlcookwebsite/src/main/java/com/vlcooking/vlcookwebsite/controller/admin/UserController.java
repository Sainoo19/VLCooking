package com.vlcooking.vlcookwebsite.controller.admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vlcooking.vlcookwebsite.dto.UserDTO;
import com.vlcooking.vlcookwebsite.service.UserService;


@RestController
public class UserController {
    
     @Autowired
    private UserService userService;




    @GetMapping("/api/users")
       public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> userDTOs = userService.getAllUsers();
        return ResponseEntity.ok(userDTOs);
    }

    
}
