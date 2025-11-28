package com.malevitzch.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class WebController {
    @GetMapping("/")
    public String index() {
        return "<h1>Hello world</h1>";
    }
}