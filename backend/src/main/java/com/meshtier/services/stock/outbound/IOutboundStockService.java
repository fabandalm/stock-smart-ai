package com.meshtier.services.stock.outbound;

import com.meshtier.dto.stock.outbound.CreateOutboundStockDTO;
import com.meshtier.dto.stock.outbound.UpdateOutboundStockDTO;
import com.meshtier.models.OutboundStock;

import java.util.List;

public interface IOutboundStockService {
    OutboundStock CreateOutboundStock(CreateOutboundStockDTO createOutboundStockDTO);

    OutboundStock GetOutboundStockById(Long id);

    List<OutboundStock> GetOutboundStockByProduct(Long id);

    List<OutboundStock> GetAllOutboundStock();

    OutboundStock UpdateOutboundStock(UpdateOutboundStockDTO updateSortieStockDTO, Long id);

}
