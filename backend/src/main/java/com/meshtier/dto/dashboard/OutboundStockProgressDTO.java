package com.meshtier.dto.dashboard;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class OutboundStockProgressDTO {
    private String month;
    private int totalQuantite;
}
