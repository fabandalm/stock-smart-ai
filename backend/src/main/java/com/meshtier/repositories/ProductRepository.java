package com.meshtier.repositories;

import com.meshtier.models.Category;
import com.meshtier.models.Product;
import com.meshtier.models.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCategory(Category category);

    List<Product> findBySupplier(Supplier supplier);

    long countByQuantityLessThanEqual(Integer a);

    List<Product> findByQuantityLessThanEqual(Integer a);

}
