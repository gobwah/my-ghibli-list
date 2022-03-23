package com.gobwah.myghiblilist.service;

import java.util.Collection;

import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.exception.RoleNotFoundException;
import com.gobwah.myghiblilist.exception.UserNotFoundException;

import lombok.NonNull;

public interface UserService {

    public User saveUser(@NonNull final User user);

    public void addRoleToUser(final String username, final String roleName)
            throws UserNotFoundException, RoleNotFoundException;

    public User getUser(final String username) throws UserNotFoundException;

    public Collection<User> getUsers();

    public Role saveRole(@NonNull final Role role);

    public User getUser(final Long id) throws UserNotFoundException;

}
