package com.meshtier.dto.stock.inbound;

import lombok.Data;

import java.util.Date;

@Data
public class UpdateInboundStockDTO {
    private int quantity;
    private Date date;
}
