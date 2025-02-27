package com.meshtier.services.supplier;

import com.meshtier.dto.supplier.CreateSupplierDTO;
import com.meshtier.dto.supplier.UpdateSupplierDTO;
import com.meshtier.models.Supplier;

import java.util.List;

public interface ISupplierService {
    Supplier CreateSupplier(CreateSupplierDTO createSupplierDTO);

    Supplier UpdateSupplier(UpdateSupplierDTO updateSupplierDTO, Long id);

    List<Supplier> GetAllSuppliers();

    Supplier GetSupplierById(Long id);

}
