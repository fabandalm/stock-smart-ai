package com.meshtier.services.stock.inbound;

import com.meshtier.dto.stock.inbound.CreateInboundStockDTO;
import com.meshtier.dto.stock.inbound.UpdateInboundStockDTO;
import com.meshtier.models.InboundStock;

import java.util.List;

;

public interface IInboundStockService {
    InboundStock CreateInboundStock(CreateInboundStockDTO createEntreeStockDto);

    InboundStock UpdateInboundStock(UpdateInboundStockDTO updateEntreeStockDto, Long id);

    InboundStock GetInboundStockById(Long id);

    List<InboundStock> GetInboundStockByProduct(Long id);

    List<InboundStock> GetInboundStockBySupplier(Long id);

    List<InboundStock> GetAllInboundStock();
}
