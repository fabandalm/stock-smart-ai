package com.meshtier.controller;

import com.meshtier.dto.supplier.CreateSupplierDTO;
import com.meshtier.dto.supplier.UpdateSupplierDTO;
import com.meshtier.models.Supplier;
import com.meshtier.services.supplier.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class SupplierController {
    @Autowired
    private final ISupplierService supplierService;

    public SupplierController(ISupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping("suppliers")
    public ResponseEntity<List<Supplier>> GetAllSuppliers() {

        return ResponseEntity.ok(supplierService.GetAllSuppliers());
    }

    @GetMapping("supplier/{id}")
    public ResponseEntity<Supplier> GetSupplierById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(supplierService.GetSupplierById(id));
    }

    @PostMapping("supplier")
    public ResponseEntity<Supplier> CreateSupplier(@RequestBody CreateSupplierDTO supplier) {
        return ResponseEntity.ok(supplierService.CreateSupplier(supplier));
    }

    @PutMapping("supplier/{id}")
    public ResponseEntity<Supplier> UpdateSupplier(@PathVariable("id") Long id,
                                                      @RequestBody UpdateSupplierDTO supplier) {

        return ResponseEntity.ok(supplierService.UpdateSupplier(supplier, id));
    }
}
