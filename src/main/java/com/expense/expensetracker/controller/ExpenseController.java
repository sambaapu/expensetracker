package com.expense.expensetracker.controller;

import org.springframework.web.bind.annotation.RestController;

import com.expense.expensetracker.repository.ExpenseRepository;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import com.expense.expensetracker.model.Expense;

@RestController
@RequestMapping("/api")
public class ExpenseController {
    @Autowired
    private ExpenseRepository expenseRepository;

    @GetMapping("/expenses")
    List<Expense> getAllExpenses() {
        return expenseRepository.findAll();
    }

    @PostMapping("/expense")
    ResponseEntity<Expense> addExpense(@Validated @RequestBody Expense expense) throws URISyntaxException {
        Expense res = expenseRepository.save(expense);
        return ResponseEntity.created(new URI("api/expense"+res.getExpenseid())).body(res);
    }

    @DeleteMapping("/expense/{id}")
    ResponseEntity<?> deleteExpense(@PathVariable int id){
        expenseRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
