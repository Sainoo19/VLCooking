package com.vlcooking.vlcookwebsite.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vlcooking.vlcookwebsite.domain.User;
import com.vlcooking.vlcookwebsite.dto.UserDTO;
import com.vlcooking.vlcookwebsite.mapper.UserMapper;
import com.vlcooking.vlcookwebsite.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;

    
    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                    .map(userMapper::toUserDTO) // Gọi phương thức không tĩnh
                    .collect(Collectors.toList());
    }
    
}
