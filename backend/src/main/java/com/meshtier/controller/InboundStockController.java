package com.meshtier.controller;

import com.meshtier.dto.stock.inbound.CreateInboundStockDTO;
import com.meshtier.dto.stock.inbound.UpdateInboundStockDTO;
import com.meshtier.models.InboundStock;
import com.meshtier.services.stock.inbound.IInboundStockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inbound/")
public class InboundStockController {
    private final IInboundStockService inboundStockService;

    public InboundStockController(IInboundStockService entreeStockService) {
        this.inboundStockService = entreeStockService;
    }

    @PostMapping("stock")
    public ResponseEntity<InboundStock> CreateInboundStock(@RequestBody CreateInboundStockDTO createInboundStockDTO) {
        return ResponseEntity.ok(inboundStockService.CreateInboundStock(createInboundStockDTO));
    }

    @PutMapping("stock/{id}")
    public ResponseEntity<InboundStock> UpdateEntreeStock(@PathVariable("id") Long id,
                                                          @RequestBody UpdateInboundStockDTO entreeStockDto) {

        return ResponseEntity.ok(inboundStockService.UpdateInboundStock(entreeStockDto, id));
    }

    @GetMapping("stock/{id}")
    public ResponseEntity<InboundStock> GetEntreeStockById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(inboundStockService.GetInboundStockById(id));
    }

    @GetMapping("stock/supplier/{id}")
    public ResponseEntity<List<InboundStock>> GetEntreeStockByFournisseur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(inboundStockService.GetInboundStockBySupplier(id));
    }

    @GetMapping("stock/product/{id}")
    public ResponseEntity<List<InboundStock>> GetEntreeStockByArticle(@PathVariable("id") Long id) {
        return ResponseEntity.ok(inboundStockService.GetInboundStockByProduct(id));
    }

    @GetMapping("stocks")
    public ResponseEntity<List<InboundStock>> GetAllInboundStock() {
        return ResponseEntity.ok(inboundStockService.GetAllInboundStock());
    }
}
