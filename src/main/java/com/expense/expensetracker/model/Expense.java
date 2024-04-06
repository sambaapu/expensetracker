package com.expense.expensetracker.model;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
@Table(name="expense")
public class Expense {
    @Id
    private int expenseid;

    private double amount;

    private Instant date;

    @ManyToOne
    private User user;

    @ManyToOne
    private Category category;
}
