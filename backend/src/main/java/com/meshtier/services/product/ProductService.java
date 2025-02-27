package com.meshtier.services.product;

import com.meshtier.dto.article.CreateProductDTO;
import com.meshtier.dto.article.UpdateProductDTO;
import com.meshtier.models.Category;
import com.meshtier.models.Product;
import com.meshtier.models.Supplier;
import com.meshtier.repositories.CategoryRepository;
import com.meshtier.repositories.ProductRepository;
import com.meshtier.repositories.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final CategoryRepository categoryRepository;
    @Autowired
    private final SupplierRepository supplierRepository;

    public ProductService(
            SupplierRepository supplierRepository, ProductRepository productRepository,
            CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.supplierRepository = supplierRepository;

    }

    @Override
    public Product CreateProduct(CreateProductDTO createArticleDto) {
        Product product = new Product();
        product.setName(createArticleDto.getName());
        product.setDescription(createArticleDto.getDescription());
        product.setBarCode(createArticleDto.getBarCode());
        Category category = categoryRepository.findById(createArticleDto.getCategoryId()).orElseThrow();
        product.setCategory(category);
        Supplier supplier = supplierRepository.findById(createArticleDto.getSupplierId()).orElseThrow();
        product.setSupplier(supplier);
        product.setPrice(createArticleDto.getPrice());
        product.setQuantity(createArticleDto.getQuantity());
        return productRepository.save(product);
    }

    @Override
    public Product UpdateProduct(UpdateProductDTO updateArticleDto, Long id) {
        Product product = productRepository.findById(id).orElseThrow();
        product.setName(updateArticleDto.getName());
        product.setDescription(updateArticleDto.getDescription());
        product.setPrice(updateArticleDto.getPrice());
        product.setQuantity(updateArticleDto.getQuantity());
        return productRepository.save(product);
    }

    @Override
    public List<Product> GetAllArticles() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> GetAllArticlesByCategorie(Long id) {
        Category category = categoryRepository.findById(id).orElseThrow();
        return productRepository.findByCategory(category);
    }

    @Override
    public List<Product> GetAllArticlesByFournisseur(Long id) {

        Supplier supplier = supplierRepository.findById(id).orElseThrow();
        return productRepository.findBySupplier(supplier);
    }

}
