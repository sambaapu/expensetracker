package com.expense.expensetracker.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.expense.expensetracker.model.UserEntity;
import com.expense.expensetracker.repository.UserRepository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/protected/{id}")
    ResponseEntity<UserEntity> getUserJpa(@PathVariable int id) {
        Optional<UserEntity> user = userRepository.findById(id);
        return user.map(response->ResponseEntity.ok().body(response))
                            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/unprotected/{username}")
    public List<UserEntity> getUserSqlInject(@PathVariable String username){
        Query query=entityManager.createNativeQuery("SELECT * FROM usertable WHERE username ='"+username+"'",UserEntity.class);
        return query.getResultList();
    }
}
