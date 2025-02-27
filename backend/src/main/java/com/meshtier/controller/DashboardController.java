package com.meshtier.controller;

import com.meshtier.dto.dashboard.DashboardStats;
import com.meshtier.dto.dashboard.InboundStockProgressDTO;
import com.meshtier.dto.dashboard.OutboundStockProgressDTO;
import com.meshtier.services.dashboard.IDashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard/")
public class DashboardController {
    @Autowired
    private final IDashboardService dashboardService;

    public DashboardController(IDashboardService dashboardService) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("stats")
    public ResponseEntity<DashboardStats> GetDashboardStats() {
        return ResponseEntity.ok(dashboardService.GetDashboardStats());
    }

    @GetMapping("inbound/status")
    public ResponseEntity<List<InboundStockProgressDTO>> GetEntriesProgress() {
        return ResponseEntity.ok(dashboardService.getInboundStockProgress());
    }

    @GetMapping("outbound/status")
    public ResponseEntity<List<OutboundStockProgressDTO>> GetSortieProgress() {
        return ResponseEntity.ok(dashboardService.getOutboundStockProgress());
    }
}
