package com.vlcooking.vlcookwebsite.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vlcooking.vlcookwebsite.domain.Role;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{
      Role findByName(String name);
}
