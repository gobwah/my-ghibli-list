package com.gobwah.myghiblilist;

import java.util.ArrayList;

import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.service.UserService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MyGhibliListApplication {

	public static void main(final String[] args) {
		SpringApplication.run(MyGhibliListApplication.class, args);
	}

	@Bean
	PasswordEncoder getPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner run(final UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, Role.ROLE_USER));
			userService.saveRole(new Role(null, Role.ROLE_MANAGER));
			userService.saveRole(new Role(null, Role.ROLE_ADMIN));
			userService.saveRole(new Role(null, Role.ROLE_SUPER_ADMIN));

			userService.saveUser(new User(null, "John", "Travolta", "john", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Will", "Smith", "will", "1234", new ArrayList<>()));
			userService.saveUser(new User(null, "Jim", "Carry", "jim", "1234", new ArrayList<>()));

			userService.addRoleToUser("john", Role.ROLE_USER);
			userService.addRoleToUser("john", Role.ROLE_MANAGER);
			userService.addRoleToUser("will", Role.ROLE_MANAGER);
			userService.addRoleToUser("jim", Role.ROLE_ADMIN);
		};
	}

}
