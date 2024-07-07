package com.vlcooking.vlcookwebsite.controller.admin;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vlcooking.vlcookwebsite.domain.Role;
import com.vlcooking.vlcookwebsite.service.RoleService;


@RestController

public class RoleController {
      private final RoleService roleService;
      

     public RoleController(RoleService roleService) {
        this.roleService = roleService;
    }


    @GetMapping("/api/roles")
       public ResponseEntity<List<Role>> FetchAllRole() {     
        return ResponseEntity.ok(this.roleService.GetAllRole());
    }
}
