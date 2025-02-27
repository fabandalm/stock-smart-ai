package com.meshtier.services.product;

import com.meshtier.dto.article.CreateProductDTO;
import com.meshtier.dto.article.UpdateProductDTO;
import com.meshtier.models.Product;

import java.util.List;

public interface IProductService {
    Product CreateProduct(CreateProductDTO createArticleDto);

    Product UpdateProduct(UpdateProductDTO updateArticleDto, Long id);

    List<Product> GetAllArticles();

    List<Product> GetAllArticlesByCategorie(Long id);

    List<Product> GetAllArticlesByFournisseur(Long id);

}
