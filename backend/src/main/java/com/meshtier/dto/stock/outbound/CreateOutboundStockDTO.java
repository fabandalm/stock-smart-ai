package com.meshtier.dto.stock.outbound;

import lombok.Data;

import java.util.Date;

@Data
public class CreateOutboundStockDTO {
    private Long productId;

    private int quantity;
    private Date date;
    private String destination;
}
