package com.meshtier.dto.stock.outbound;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateOutboundStockDTO {
    private int quantity;
    private Date date;
    private String destination;
}
