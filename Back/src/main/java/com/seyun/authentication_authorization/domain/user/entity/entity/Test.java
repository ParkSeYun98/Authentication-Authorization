package com.seyun.authentication_authorization.domain.user.entity.entity;

import jakarta.persistence.*;

@Entity
public class Test {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "test_id")
    private Long id;
}
