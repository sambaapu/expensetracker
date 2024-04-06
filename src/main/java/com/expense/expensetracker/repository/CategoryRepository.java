package com.expense.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.expensetracker.model.Category;


public interface CategoryRepository extends JpaRepository<Category, Integer>{
    Category findByName(String name);
}
