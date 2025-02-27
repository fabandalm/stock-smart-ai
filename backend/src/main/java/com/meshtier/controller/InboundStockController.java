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
    private final IInboundStockService entreeStockService;

    public InboundStockController(IInboundStockService entreeStockService) {
        this.entreeStockService = entreeStockService;
    }

    @PostMapping("stock")
    public ResponseEntity<InboundStock> CreateEntreeStock(@RequestBody CreateInboundStockDTO createEntreeStockDto) {
        return ResponseEntity.ok(entreeStockService.CreateInboundStock(createEntreeStockDto));
    }

    @PutMapping("stock/{id}")
    public ResponseEntity<InboundStock> UpdateEntreeStock(@PathVariable("id") Long id,
                                                          @RequestBody UpdateInboundStockDTO entreeStockDto) {

        return ResponseEntity.ok(entreeStockService.UpdateInboundStock(entreeStockDto, id));
    }

    @GetMapping("stock/{id}")
    public ResponseEntity<InboundStock> GetEntreeStockById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetInboundStockById(id));
    }

    @GetMapping("stock/supplier/{id}")
    public ResponseEntity<List<InboundStock>> GetEntreeStockByFournisseur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetInboundStockBySupplier(id));
    }

    @GetMapping("stock/product/{id}")
    public ResponseEntity<List<InboundStock>> GetEntreeStockByArticle(@PathVariable("id") Long id) {
        return ResponseEntity.ok(entreeStockService.GetInboundStockByProduct(id));
    }

    @GetMapping("stock")
    public ResponseEntity<List<InboundStock>> GetAllEntreeStock() {
        return ResponseEntity.ok(entreeStockService.GetAllInboundStock());
    }
}
