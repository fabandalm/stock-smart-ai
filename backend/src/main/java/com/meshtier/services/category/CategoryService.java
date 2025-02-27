package com.meshtier.services.category;

import com.meshtier.dto.category.CreateCategoryDTO;
import com.meshtier.dto.category.UpdateCategoryDTO;
import com.meshtier.models.Category;
import com.meshtier.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category CreateCategory(CreateCategoryDTO createCategoryDto) {
        Category category = new Category();
        category.setName(createCategoryDto.getName());
        category.setDescription(createCategoryDto.getDescription());
        return categoryRepository.save(category);
    }

    @Override
    public Category UpdateCategory(UpdateCategoryDTO updateCategoryDto, Long id) {

        Category category = categoryRepository.findById(id).orElseThrow();
        category.setName(updateCategoryDto.getName());
        category.setDescription(updateCategoryDto.getDescription());
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> GetAllCategories() {

        return categoryRepository.findAll();
    }

    @Override
    public Category GetCategoryId(Long id) {

        Category category = categoryRepository.findById(id).orElseThrow();
        return category;
    }

}
