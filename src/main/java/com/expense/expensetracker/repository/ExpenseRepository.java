package com.expense.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.expensetracker.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer>{
    
}
