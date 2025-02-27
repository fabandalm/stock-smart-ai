package com.meshtier.services.stock.inbound;

import com.meshtier.dto.stock.inbound.CreateInboundStockDTO;
import com.meshtier.dto.stock.inbound.UpdateInboundStockDTO;
import com.meshtier.models.InboundStock;
import com.meshtier.models.Product;
import com.meshtier.models.Supplier;
import com.meshtier.repositories.InboundStockRepository;
import com.meshtier.repositories.ProductRepository;
import com.meshtier.repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InboundStockService implements IInboundStockService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final InboundStockRepository inboundStockRepository;
    @Autowired
    private final SupplierRepository supplierRepository;

    public InboundStockService(ProductRepository productRepository,
                               InboundStockRepository inboundStockRepository,
                               SupplierRepository supplierRepository) {
        this.productRepository = productRepository;
        this.inboundStockRepository = inboundStockRepository;
        this.supplierRepository = supplierRepository;

    }

    @Override
    public InboundStock CreateInboundStock(CreateInboundStockDTO createEntreeStockDto) {
        InboundStock inboundStock = new InboundStock();
        inboundStock.setDate(createEntreeStockDto.getDate());
        inboundStock.setQuantity(createEntreeStockDto.getQuantity());
        Product product = productRepository.findById(createEntreeStockDto.getProductId()).orElseThrow();
        Supplier supplier = supplierRepository.findById(createEntreeStockDto.getSupplierId()).orElseThrow();
        product.setQuantity(product.getQuantity() + createEntreeStockDto.getQuantity());
        productRepository.save(product);
        inboundStock.setProduct(product);
        inboundStock.setSupplier(supplier);

        return inboundStockRepository.save(inboundStock);
    }

    @Override
    public InboundStock UpdateInboundStock(UpdateInboundStockDTO updateInboundStockDTO, Long id) {
        InboundStock inboundStock = inboundStockRepository.findById(id).orElseThrow();
        Product product = inboundStock.getProduct();

        // Revert the previous stock quantity change
        product.setQuantity(product.getQuantity() - inboundStock.getQuantity());

        // Update EntreeStock with new values from DTO
        inboundStock.setQuantity(updateInboundStockDTO.getQuantity());
        inboundStock.setDate(updateInboundStockDTO.getDate());

        // Apply the new quantity change
        product.setQuantity(product.getQuantity() + updateInboundStockDTO.getQuantity());

        // Save the updated article
        productRepository.save(product);

        // Save the updated entreeStock
        return inboundStockRepository.save(inboundStock);
    }

    @Override
    public InboundStock GetInboundStockById(Long id) {
        return inboundStockRepository.findById(id).orElseThrow();
    }

    @Override
    public List<InboundStock> GetInboundStockByProduct(Long id) {
        Product article = productRepository.findById(id).orElseThrow();
        return inboundStockRepository.findByProduct(article);

    }

    @Override
    public List<InboundStock> GetInboundStockBySupplier(Long id) {
        Supplier supplier = supplierRepository.findById(id).orElseThrow();
        return inboundStockRepository.findBySupplier(supplier);
    }

    @Override
    public List<InboundStock> GetAllInboundStock() {
        return inboundStockRepository.findAll();

    }

}
