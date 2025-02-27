package com.meshtier.services.dashboard;

import com.meshtier.dto.dashboard.DashboardStats;
import com.meshtier.dto.dashboard.InboundStockProgressDTO;
import com.meshtier.dto.dashboard.OutboundStockProgressDTO;
import com.meshtier.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DashboardService implements IDashboardService {
    @Autowired
    private final SupplierRepository supplierRepository;
    @Autowired
    private final InboundStockRepository inboundStockRepository;
    private final OutboundStockRepository outboundStockRepository;
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final CategoryRepository categoryRepository;

    public DashboardService(OutboundStockRepository outboundStockRepository, ProductRepository productRepository,
                            InboundStockRepository inboundStockRepository, CategoryRepository categoryRepository,
                            SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.inboundStockRepository = inboundStockRepository;
        this.outboundStockRepository = outboundStockRepository;
    }

    @Override
    public DashboardStats GetDashboardStats() {
        DashboardStats dashboardStats = new DashboardStats();
        dashboardStats.setSupplierName(supplierRepository.count());
        dashboardStats.setProductName(productRepository.count());
        dashboardStats.setCategoryName(categoryRepository.count());
        dashboardStats.setStockUsed(productRepository.countByQuantityLessThanEqual(10));
        return dashboardStats;
    }

    @Override
    public List<InboundStockProgressDTO> getInboundStockProgress() {
        List<Object[]> result = inboundStockRepository.getInboundStockProgress();
        List<InboundStockProgressDTO> progressDTOs = new ArrayList<>();

        for (Object[] row : result) {
            String month = (String) row[0];
            int totalQuantity = ((Number) row[1]).intValue();
            progressDTOs.add(new InboundStockProgressDTO(month, totalQuantity));
        }

        return progressDTOs;
    }

    public List<OutboundStockProgressDTO> getOutboundStockProgress() {
        List<Object[]> result = outboundStockRepository.getOutboundStockProgress();
        List<OutboundStockProgressDTO> progressDTOs = new ArrayList<>();

        for (Object[] row : result) {
            String month = (String) row[0];
            int totalQuantity = ((Number) row[1]).intValue();
            progressDTOs.add(new OutboundStockProgressDTO(month, totalQuantity));
        }

        return progressDTOs;
    }
}
