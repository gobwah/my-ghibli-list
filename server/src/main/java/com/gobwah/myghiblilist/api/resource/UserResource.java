package com.gobwah.myghiblilist.api.resource;

import java.net.URI;
import java.util.Collection;

import com.gobwah.myghiblilist.api.dto.UserDto;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.exception.UserNotFoundException;
import com.gobwah.myghiblilist.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(UserResource.BASE_ROUTE)
@RequiredArgsConstructor
public class UserResource {

    public static final String BASE_ROUTE = "/users";

    @Autowired
    private final UserService userService;

    @GetMapping
    public ResponseEntity<Collection<User>> getUsers() {
        return ResponseEntity.ok().body(userService.getUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") final Long id) {
        try {
            return ResponseEntity.ok().body(userService.getUserById(id));
        } catch (final UserNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<User> saveUser(@RequestBody final UserDto userDto) {
        final URI uri = URI.create(ServletUriComponentsBuilder.fromCurrentContextPath().path(BASE_ROUTE).toUriString());
        return ResponseEntity.created(uri).body(userService.saveUser(userDto.toUser()));
    }

}
