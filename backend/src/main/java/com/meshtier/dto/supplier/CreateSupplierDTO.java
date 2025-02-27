package com.meshtier.dto.supplier;

import lombok.Data;

@Data
public class CreateSupplierDTO {
    private String nom;
    private String contact;
    private String adresse;
    private String telephone;
}
