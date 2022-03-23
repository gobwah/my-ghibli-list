package com.gobwah.myghiblilist.repo;

import com.gobwah.myghiblilist.domain.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role, Long> {

    public Role findByName(final String name);

}
