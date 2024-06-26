package com.expense.expensetracker.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.expense.expensetracker.repository.CategoryRepository;
import com.expense.expensetracker.model.Category;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/api")
public class CategoryController {
    private CategoryRepository categoryRepository;
    public CategoryController(CategoryRepository categoryRepository){
        super();
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/categories")
    Collection<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/category/{id}")
    ResponseEntity<?> getCategory(@PathVariable int id) {
        Optional<Category> category = categoryRepository.findById(id);
        return category.map(response->ResponseEntity.ok().body(response))
                            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/category")
    ResponseEntity<Category> createCategory(@Validated @RequestBody Category category) throws URISyntaxException {
        Category resCategory = categoryRepository.save(category);
        return ResponseEntity.created(new URI("api/category"+resCategory.getCategoryid())).body(resCategory);
    }

    @PutMapping("/category/{id}")
    ResponseEntity<Category> updateCategory(@Validated @RequestBody Category category){
        Category resCategory= categoryRepository.save(category);
        return ResponseEntity.ok().body(resCategory);
    }
    
    @DeleteMapping("/category/{id}")
    ResponseEntity<?> deleteCategory(@PathVariable int id){
        categoryRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
