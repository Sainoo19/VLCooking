package com.vlcooking.vlcookwebsite.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vlcooking.vlcookwebsite.domain.Role;
import com.vlcooking.vlcookwebsite.domain.User;
import com.vlcooking.vlcookwebsite.dto.UserDTO;
import com.vlcooking.vlcookwebsite.mapper.UserMapper;
import com.vlcooking.vlcookwebsite.repository.RoleRepository;
import com.vlcooking.vlcookwebsite.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private RoleRepository roleRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }
    
    public Role getRoleById(Long id) {
        return roleRepository.findById(id).orElseThrow(() -> new RuntimeException("Role not found"));
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                    .map(userMapper::toUserDTO) // Gọi phương thức không tĩnh
                    .collect(Collectors.toList());
    }

   public User GetUserByID(long id) {
        Optional<User> userOptional = this.userRepository.findById(id);
        if (userOptional.isPresent()) {
            return userOptional.get();
        }
        return null;
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
    
}
