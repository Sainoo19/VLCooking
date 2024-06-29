package com.vlcooking.vlcookwebsite.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vlcooking.vlcookwebsite.domain.User;

@Repository
public interface UserRepository  extends JpaRepository<User, Long>{
    
}
