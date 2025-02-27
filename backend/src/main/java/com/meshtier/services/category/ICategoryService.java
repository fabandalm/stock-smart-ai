package com.meshtier.services.category;

import com.meshtier.dto.category.CreateCategoryDTO;
import com.meshtier.dto.category.UpdateCategoryDTO;
import com.meshtier.models.Category;

import java.util.List;

public interface ICategoryService {
    Category CreateCategory(CreateCategoryDTO createCategoryDto);

    Category UpdateCategory(UpdateCategoryDTO updateCategoryDto, Long id);

    List<Category> GetAllCategories();

    Category GetCategoryId(Long id);

}
