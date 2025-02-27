package com.meshtier.controller;

import com.meshtier.dto.category.CreateCategoryDTO;
import com.meshtier.dto.category.UpdateCategoryDTO;
import com.meshtier.models.Category;
import com.meshtier.services.category.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class CategoryController {
    @Autowired
    private final ICategoryService categoryService;

    public CategoryController(ICategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("categories")
    public ResponseEntity<List<Category>> GetAllCategories() {

        return ResponseEntity.ok(categoryService.GetAllCategories());
    }

    @GetMapping("category/{id}")
    public ResponseEntity<Category> GetCategoryById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(categoryService.GetCategoryId(id));
    }

    @PostMapping("category")
    public ResponseEntity<Category> CreateCategory(@RequestBody CreateCategoryDTO categorie) {
        return ResponseEntity.ok(categoryService.CreateCategory(categorie));
    }

    @PutMapping("category/{id}")
    public ResponseEntity<Category> UpdateCategory(@PathVariable("id") Long id,
                                                   @RequestBody UpdateCategoryDTO Categorie) {

        return ResponseEntity.ok(categoryService.UpdateCategory(Categorie, id));
    }
}
