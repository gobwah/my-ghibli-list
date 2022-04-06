package com.gobwah.myghiblilist.api.dto;

import com.gobwah.myghiblilist.domain.User;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserForm {

    private String firstname;
    private String lastname;
    private String login;
    private String password;

    public User toUser(PasswordEncoder passwordEncoder) {
        final User user = new User();
        user.setFirstname(firstname);
        user.setLastname(lastname);
        user.setLogin(login);
        user.setPassword(passwordEncoder.encode(password));
        return user;
    }

}
