package com.meshtier.dto.stock.inbound;

import lombok.Data;

import java.util.Date;

@Data
public class CreateInboundStockDTO {
    private Long productId;
    private int quantity;
    private Date date;
    private Long supplierId;

}
