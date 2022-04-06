package com.gobwah.myghiblilist.service;

import java.util.Collection;

import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.exception.RoleNotFoundException;
import com.gobwah.myghiblilist.exception.UserNotFoundException;

import lombok.NonNull;

public interface UserService {

    public User saveUser(@NonNull final User user);

    public Role saveRole(@NonNull final Role role);

    public void addRoleToUser(final long id, final String roleName)
            throws UserNotFoundException, RoleNotFoundException;

    public User getUserById(final Long id) throws UserNotFoundException;

    public User getUserByLogin(final String login) throws UserNotFoundException;

    public Collection<User> getUsers();

}
