package com.gobwah.myghiblilist.api.dto;

import java.util.ArrayList;
import java.util.Collection;

import com.gobwah.myghiblilist.domain.User;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UserDto {

    private Long id;
    private String firstname;
    private String lastname;
    private String login;
    private String password;
    private Collection<RoleDto> roles = new ArrayList<>();

    public User toUser() {
        final User user = new User();
        user.setId(id);
        user.setFirstname(firstname);
        user.setLastname(lastname);
        user.setLogin(login);
        user.setPassword(password);
        roles.stream().map(RoleDto::toRole).forEach(role -> user.getRoles().add(role));
        return user;
    }

}
