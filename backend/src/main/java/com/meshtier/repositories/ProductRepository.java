package com.meshtier.repositories;

import com.meshtier.models.Category;
import com.meshtier.models.Product;
import com.meshtier.models.Supplier;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Override
    @EntityGraph(attributePaths = {"category", "supplier"})
    List<Product> findAll();

    @EntityGraph(attributePaths = {"category", "supplier"})
    List<Product> findByCategory(Category category);

    @EntityGraph(attributePaths = {"category", "supplier"})
    List<Product> findBySupplier(Supplier supplier);

    long countByQuantityLessThanEqual(Integer a);

    List<Product> findByQuantityLessThanEqual(Integer a);

}
