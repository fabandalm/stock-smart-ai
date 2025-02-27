package com.meshtier.services.stock.outbound;

import com.meshtier.dto.stock.outbound.CreateOutboundStockDTO;
import com.meshtier.dto.stock.outbound.UpdateOutboundStockDTO;
import com.meshtier.models.OutboundStock;
import com.meshtier.models.Product;
import com.meshtier.repositories.OutboundStockRepository;
import com.meshtier.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OutboundStockService implements IOutboundStockService {
    @Autowired
    private final OutboundStockRepository outboundStockRepository;

    @Autowired
    private final ProductRepository productRepository;

    public OutboundStockService(OutboundStockRepository outboundStockRepository, ProductRepository productRepository) {
        this.outboundStockRepository = outboundStockRepository;
        this.productRepository = productRepository;
    }

    @Override

    public OutboundStock CreateOutboundStock(CreateOutboundStockDTO createOutboundStockDTO) {
        OutboundStock outboundStock = new OutboundStock();
        outboundStock.setDate(createOutboundStockDTO.getDate());
        outboundStock.setQuantity(createOutboundStockDTO.getQuantity());
        outboundStock.setDestination(createOutboundStockDTO.getDestination());
        Product product = productRepository.findById(createOutboundStockDTO.getProductId()).orElseThrow();
        int newQuantity = product.getQuantity() - createOutboundStockDTO.getQuantity();

        // Check if the new quantity would be less than 0
        if (newQuantity < 0) {
            throw new RuntimeException("Insufficient stock! Article quantity cannot be less than 0.");
        }
        product.setQuantity(newQuantity);
        outboundStock.setProduct(product);
        return outboundStockRepository.save(outboundStock);

    }

    @Override
    public OutboundStock GetOutboundStockById(Long id) {
        return outboundStockRepository.findById(id).orElseThrow();
    }

    @Override
    public List<OutboundStock> GetOutboundStockByProduct(Long id) {
        Product product = productRepository.findById(id).orElseThrow();

        return outboundStockRepository.findByProduct(product);
    }

    @Override
    public List<OutboundStock> GetAllOutboundStock() {
        return outboundStockRepository.findAll();
    }

    @Override
    public OutboundStock UpdateOutboundStock(UpdateOutboundStockDTO updateOutboundStockDTO, Long id) {
        OutboundStock sortieStock = outboundStockRepository.findById(id).orElseThrow();
        sortieStock.setDate(updateOutboundStockDTO.getDate());

        sortieStock.setDestination(updateOutboundStockDTO.getDestination());
        Product product = sortieStock.getProduct();
        product.setQuantity(product.getQuantity() + sortieStock.getQuantity());

        int newQuantity = product.getQuantity() - updateOutboundStockDTO.getQuantity();

        // Check if the new quantity would be less than 0
        if (newQuantity < 0) {
            throw new RuntimeException("Insufficient stock! Article quantity cannot be less than 0.");
        }
        sortieStock.setQuantity(updateOutboundStockDTO.getQuantity());
        product.setQuantity(newQuantity);
        productRepository.save(product);
        return outboundStockRepository.save(sortieStock);

    }

}
