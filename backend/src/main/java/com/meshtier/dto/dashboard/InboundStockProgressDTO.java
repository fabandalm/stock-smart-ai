package com.meshtier.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class InboundStockProgressDTO {
    private String month;
    private int totalQuantity;
}
