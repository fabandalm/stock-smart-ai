package com.meshtier.dto.auth;

import lombok.Data;

@Data
public class RegisterDTO {
    private String userName;
    private String email;
    private String password;
    private String role;
}
