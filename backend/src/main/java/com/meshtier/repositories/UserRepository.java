package com.meshtier.repositories;

import com.meshtier.models.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {
    Optional<Users> findByName(String name);

    boolean existsByName(String name);

}
