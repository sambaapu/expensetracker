package com.expense.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.expense.expensetracker.model.UserEntity;
import java.util.List;


public interface UserRepository extends JpaRepository<UserEntity, Integer> {
    @Query("select u from UserEntity u where username = :username")
    List<UserEntity> getUser(String username);
}

