package com.meshtier.dto.article;

import lombok.Data;

@Data
public class UpdateProductDTO {
    private String name;
    private String description;
    private int quantity;
    private double price;
}
