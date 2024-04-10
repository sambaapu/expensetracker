package com.expense.expensetracker.model;

import java.time.Instant;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
    @JoinColumn(name="userid")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name="categoryid")
    private Category category;
}
