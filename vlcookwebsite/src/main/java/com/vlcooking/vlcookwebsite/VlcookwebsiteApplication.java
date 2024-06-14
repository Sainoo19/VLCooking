package com.vlcooking.vlcookwebsite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@SpringBootApplication
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
public class VlcookwebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(VlcookwebsiteApplication.class, args);
	}

}
