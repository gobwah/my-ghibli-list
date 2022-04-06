package com.gobwah.myghiblilist;

import java.util.ArrayList;

import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.exception.UserNotFoundException;
import com.gobwah.myghiblilist.service.UserService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class MyGhibliListApplication {

	private static final String SA_PASSWORD = "kPMOjdoP$q$a9JG$%Y9+j.W'=63^$o";
	private static final String SA_LOGIN = "vincent.dellalaibera@gmail.com";

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
			User sa;
			try {
				sa = userService.getUserByLogin(SA_LOGIN);
				return;
			} catch (UserNotFoundException e) {
				sa = new User(null, "Super", "Admin", SA_LOGIN,
						SA_PASSWORD, new ArrayList<>());
			}

			userService.saveRole(new Role(null, Role.ROLE_USER));
			userService.saveRole(new Role(null, Role.ROLE_MANAGER));
			userService.saveRole(new Role(null, Role.ROLE_ADMIN));
			userService.saveRole(new Role(null, Role.ROLE_SUPER_ADMIN));

			sa = userService.saveUser(sa);

			userService.addRoleToUser(sa.getId(), Role.ROLE_USER);
			userService.addRoleToUser(sa.getId(), Role.ROLE_MANAGER);
			userService.addRoleToUser(sa.getId(), Role.ROLE_ADMIN);
			userService.addRoleToUser(sa.getId(), Role.ROLE_SUPER_ADMIN);
		};
	}

}
