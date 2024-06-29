package com.vlcooking.vlcookwebsite.mapper;

import org.springframework.stereotype.Component;

import com.vlcooking.vlcookwebsite.domain.Role;
import com.vlcooking.vlcookwebsite.domain.User;
import com.vlcooking.vlcookwebsite.dto.UserDTO;
import com.vlcooking.vlcookwebsite.service.RoleService;
@Component
public class UserMapper {

    private final RoleService roleService;

    
    public UserMapper(RoleService roleService) {
        this.roleService = roleService;
    }

    public UserDTO toUserDTO(User user) {
        return new UserDTO(
            user.getUserId(),
            user.getUsername(),
            user.getEmail(),
            user.getRole() != null ? user.getRole().getName() : null
        );
    }

    public User toUser(UserDTO userDTO) {
        User user = new User();
        user.setUserId(userDTO.getUserId());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        
        if (userDTO.getRoleName() != null) {
            Role role = roleService.findByName(userDTO.getRoleName());
            user.setRole(role);
        }

        return user;
    }
}
