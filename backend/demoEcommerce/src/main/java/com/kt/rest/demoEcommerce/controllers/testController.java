package com.kt.rest.demoEcommerce.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class testController {

    @GetMapping
    public ResponseEntity<String> testReponse() {
        return ResponseEntity.ok("Hello, this returned response has been authenticated");
    }
}
