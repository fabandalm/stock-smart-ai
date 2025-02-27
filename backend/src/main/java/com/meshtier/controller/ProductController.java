package com.meshtier.controller;

import com.meshtier.dto.article.CreateProductDTO;
import com.meshtier.dto.article.UpdateProductDTO;
import com.meshtier.models.Product;
import com.meshtier.services.product.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class ProductController {
    @Autowired
    private final IProductService productService;

    public ProductController(IProductService productService) {
        this.productService = productService;
    }

    @GetMapping("products")
    public ResponseEntity<List<Product>> GetAllArticles() {

        return ResponseEntity.ok(productService.GetAllArticles());
    }

    @GetMapping("product/category/{id}")
    public ResponseEntity<List<Product>> GetArticlesByCategoriy(@PathVariable("id") Long id) {
        return ResponseEntity.ok(productService.GetAllArticlesByCategorie(id));
    }

    @GetMapping("product/supplier/{id}")
    public ResponseEntity<List<Product>> GetArticlesByFournisseur(@PathVariable("id") Long id) {
        return ResponseEntity.ok(productService.GetAllArticlesByFournisseur(id));
    }

    @PostMapping("product")
    public ResponseEntity<Product> CreateArticle(@RequestBody CreateProductDTO product) {
        return ResponseEntity.ok(productService.CreateProduct(product));
    }

    @PutMapping("product/{id}")
    public ResponseEntity<Product> UpdateArticle(@PathVariable("id") Long id, @RequestBody UpdateProductDTO Product) {

        return ResponseEntity.ok(productService.UpdateProduct(Product, id));
    }
}
