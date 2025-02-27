package com.meshtier.services.supplier;

import com.meshtier.dto.supplier.CreateSupplierDTO;
import com.meshtier.dto.supplier.UpdateSupplierDTO;
import com.meshtier.models.Supplier;
import com.meshtier.repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService implements ISupplierService {
    @Autowired
    private final SupplierRepository supplierRepository;

    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }

    @Override
    public Supplier CreateSupplier(CreateSupplierDTO createSupplierDTO) {
        Supplier supplier = new Supplier();
        supplier.setName(createSupplierDTO.getNom());
        supplier.setAddress(createSupplierDTO.getAdresse());
        supplier.setContact(createSupplierDTO.getContact());
        supplier.setTelephone(createSupplierDTO.getTelephone());
        return supplierRepository.save(supplier);

    }

    @Override
    public Supplier UpdateSupplier(UpdateSupplierDTO updateSupplierDTO, Long id) {
        Supplier supplier = supplierRepository.findById(id).orElseThrow();
        supplier.setName(updateSupplierDTO.getNom());
        supplier.setAddress(updateSupplierDTO.getAdresse());
        supplier.setContact(updateSupplierDTO.getContact());
        supplier.setTelephone(updateSupplierDTO.getTelephone());
        return supplierRepository.save(supplier);
    }

    @Override
    public List<Supplier> GetAllSuppliers() {
        return supplierRepository.findAll();
    }

    @Override
    public Supplier GetSupplierById(Long id) {
        return supplierRepository.findById(id).orElseThrow();
    }

}
