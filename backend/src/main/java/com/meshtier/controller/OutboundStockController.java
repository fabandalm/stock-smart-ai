package com.meshtier.controller;

import com.meshtier.dto.stock.outbound.CreateOutboundStockDTO;
import com.meshtier.dto.stock.outbound.UpdateOutboundStockDTO;
import com.meshtier.models.OutboundStock;
import com.meshtier.services.stock.outbound.IOutboundStockService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/outbound/")
public class OutboundStockController {
    private final IOutboundStockService sortieStockService;

    public OutboundStockController(IOutboundStockService sortieStockService) {
        this.sortieStockService = sortieStockService;
    }


    @PostMapping("stock")
    public ResponseEntity<OutboundStock> CreateOutboundStock(@RequestBody CreateOutboundStockDTO createSortieStockDto) {
        return ResponseEntity.ok(sortieStockService.CreateOutboundStock(createSortieStockDto));
    }

    @PutMapping("stock/{id}")
    public ResponseEntity<OutboundStock> UpdateOutboundStock(@PathVariable("id") Long id,
                                                           @RequestBody UpdateOutboundStockDTO SortieStockDto) {

        return ResponseEntity.ok(sortieStockService.UpdateOutboundStock(SortieStockDto, id));
    }

    @GetMapping("stock/{id}")
    public ResponseEntity<OutboundStock> GetOutboundStockById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(sortieStockService.GetOutboundStockById(id));
    }

    @GetMapping("stock/article/{id}")
    public ResponseEntity<List<OutboundStock>> GetOutboundStockByArticle(@PathVariable("id") Long id) {
        return ResponseEntity.ok(sortieStockService.GetOutboundStockByProduct(id));
    }

    @GetMapping("stocks")
    public ResponseEntity<List<OutboundStock>> GetAllOutboundStock() {
        return ResponseEntity.ok(sortieStockService.GetAllOutboundStock());
    }
}
