package com.malevitzch.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.SimpleTask;
import com.malevitzch.todo.services.SimpleTaskService;

@RestController
public class WebController {
    private final SimpleTaskService taskService;

    public WebController(SimpleTaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/")
    public String index() {
        return "Hi";
    }
    @GetMapping("/all")
    public List<SimpleTask> getPendingTasks() {
        return taskService.getPendingTasks();
    }
    @PostMapping("/task/add/{name}")
    public boolean addTask(@PathVariable String name) {
        return taskService.addTask(name) != null;
    }
}