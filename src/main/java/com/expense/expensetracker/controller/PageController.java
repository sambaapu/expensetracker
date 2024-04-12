package com.expense.expensetracker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PageController {

    @GetMapping("/expense")
    public String getExpense() {
        return "expense"; 
    }
    
    @GetMapping("/login")
    public String getLogin() {
        return "index";
    }
}
