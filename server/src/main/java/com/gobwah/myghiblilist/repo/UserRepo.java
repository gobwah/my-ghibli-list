package com.gobwah.myghiblilist.repo;

import com.gobwah.myghiblilist.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    public User findByLogin(final String login);

}
