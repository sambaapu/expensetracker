package com.expense.expensetracker.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.expense.expensetracker.model.RoleEntity;

public interface RoleRepository extends JpaRepository<RoleEntity, Integer>{
    Optional<RoleEntity> findByName(String name);
    
} 