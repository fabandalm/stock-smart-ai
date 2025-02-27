package com.meshtier.services.dashboard;

import com.meshtier.dto.dashboard.DashboardStats;
import com.meshtier.dto.dashboard.InboundStockProgressDTO;
import com.meshtier.dto.dashboard.OutboundStockProgressDTO;

import java.util.List;

public interface IDashboardService {
    DashboardStats GetDashboardStats();

    List<InboundStockProgressDTO> getInboundStockProgress();

    List<OutboundStockProgressDTO> getOutboundStockProgress();
}
