package com.gobwah.myghiblilist.service;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.EntityNotFoundException;

import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.exception.RoleNotFoundException;
import com.gobwah.myghiblilist.exception.UserNotFoundException;
import com.gobwah.myghiblilist.repo.RoleRepo;
import com.gobwah.myghiblilist.repo.UserRepo;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Data
@RequiredArgsConstructor
@Transactional
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private final UserRepo userRepo;
    @Autowired
    private final RoleRepo roleRepo;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        if (StringUtils.isBlank(username)) {
            throw new UsernameNotFoundException("Can not load a user from blank username");
        }

        final User user = userRepo.findByUsername(username);
        if (user == null) {
            final String message = "User " + username + " not found";
            log.error(message);
            throw new UsernameNotFoundException(message);
        } else {
            log.info("User '{}' found", username);
        }

        final Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));
        return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(),
                authorities);
    }

    @Override
    public Role saveRole(final Role role) {
        log.info("Saving new role {}", role.getName());
        return roleRepo.save(role);
    }

    @Override
    public User saveUser(final User user) {
        log.info("Saving new user {}", user.getLogin());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public void addRoleToUser(final String username, final String roleName)
            throws UserNotFoundException, RoleNotFoundException {
        final User user = userRepo.findByUsername(username);
        if (user == null) {
            throw new UserNotFoundException(String.format("User '%s' not found", username));
        }

        final Role role = roleRepo.findByName(roleName);
        if (role == null) {
            throw new RoleNotFoundException(String.format("Role '%s' not found", roleName));
        }

        log.info("Adding role {} to user {}", roleName, username);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(final String username) throws UserNotFoundException {
        log.info("Fetching user '{}'", username);
        final User user = userRepo.findByUsername(username);
        if (user == null) {
            throw new UserNotFoundException(String.format("User '%s' not found", username));
        }
        return user;
    }

    @Override
    public Collection<User> getUsers() {
        log.info("Fetching all users");
        return userRepo.findAll();
    }

    @Override
    public User getUser(final Long id) throws UserNotFoundException {
        log.info("Fetching user '{}'", id);
        try {
            return userRepo.getById(id);
        } catch (EntityNotFoundException e) {
            throw new UserNotFoundException(String.format("User '%l' not found", id));
        }
    }

}
