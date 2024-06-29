package com.vlcooking.vlcookwebsite.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.vlcooking.vlcookwebsite.domain.Role;
import com.vlcooking.vlcookwebsite.repository.RoleRepository;

@Service
public class RoleService {

    private final RoleRepository roleRepository;
    

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }


    public Role findByName(String name) {
        return this.roleRepository.findByName(name);
                
    }

    public List<Role> GetAllRole(){
        return this.roleRepository.findAll();
    }
}
