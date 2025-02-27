package com.meshtier.controller;

import com.meshtier.config.JwtConfig;
import com.meshtier.dto.auth.AuthResponseDTO;
import com.meshtier.dto.auth.LoginDTO;
import com.meshtier.dto.auth.RegisterDTO;
import com.meshtier.models.Role;
import com.meshtier.models.Users;
import com.meshtier.repositories.RoleRepository;
import com.meshtier.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;

@RestController
@RequestMapping("/api/auth/")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtConfig jwtConfig;

    public AuthController(AuthenticationManager authenticationManager, UserRepository userRepository,
            RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("register")
    public ResponseEntity<AuthResponseDTO> register(@RequestBody RegisterDTO registerDTO) {
        if (userRepository.existsByName(registerDTO.getUserName())) {
            return ResponseEntity.badRequest().body(new AuthResponseDTO(null));
        }

        // Create new user
        Users user = new Users();
        user.setName(registerDTO.getUserName());
        user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
//        user.setMotDePasse(registerDto.getPassword());
        user.setEmail(registerDTO.getEmail());
        user.setRole(registerDTO.getRole());

        // Assign role to user
        Role role = roleRepository.findByName(registerDTO.getRole()).orElseThrow(() -> new RuntimeException("Role not found"));
        user.setRoles(Collections.singletonList(role));

        // Save user to repository
        userRepository.save(user);

        // Authenticate the user automatically after registration
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(registerDTO.getUserName(), registerDTO.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        // Generate JWT token
        String token = jwtConfig.generateToken(authentication);

        // Return the JWT token as part of the response
        return ResponseEntity.ok(new AuthResponseDTO(token));
    }

    @PostMapping("login")
    public ResponseEntity<AuthResponseDTO> Login(@RequestBody LoginDTO loginDto) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUserName(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtConfig.generateToken(authentication);
        return ResponseEntity.ok(new AuthResponseDTO(token));

    }

}
