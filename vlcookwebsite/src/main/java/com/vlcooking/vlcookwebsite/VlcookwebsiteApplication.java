package com.vlcooking.vlcookwebsite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

//@SpringBootApplication
@SpringBootApplication(exclude = org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class)
@ComponentScan(basePackages = {"com.vlcooking.vlcookwebsite"}) 
public class VlcookwebsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(VlcookwebsiteApplication.class, args);
	}

}
