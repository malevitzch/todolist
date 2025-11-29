package com.malevitzch.todo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {
    @GetMapping("/")
    public String index() {
        return "<h1>Hello world</h1>";
    }
    @PostMapping("/task/add/{name}")
    public boolean addTask(String name) {

        return true;
    }
}