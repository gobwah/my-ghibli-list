package com.gobwah.myghiblilist.api.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gobwah.myghiblilist.domain.Role;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class RoleDto {

    enum RoleName {
        ROLE_USER,
        ROLE_MANAGER,
        ROLE_ADMIN,
        ROLE_SUPER_ADMIN
    }

    private Long id;
    private RoleName name;

    @JsonIgnore
    public Role toRole() {
        final Role role = new Role();
        role.setId(id);
        role.setName(name.toString());
        return role;
    }

}
