package com.seyun.authentication_authorization.domain.user.entity.api;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Getter @Slf4j
@RequiredArgsConstructor
@RequestMapping("/api/user")
public class UserController {

    @GetMapping("")
    public String test() {
        return "test";
    }
}
