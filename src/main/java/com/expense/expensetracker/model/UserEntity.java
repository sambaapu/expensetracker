package com.expense.expensetracker.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.*;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name="usertable")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;

    private String username;

    private String email;

    private String password;

    @ManyToMany
    @JoinTable(name="user_roles", joinColumns = @JoinColumn(name="userid"), 
    inverseJoinColumns = @JoinColumn(name="roleid"))
    private List<RoleEntity> roles = new ArrayList<>();
}
