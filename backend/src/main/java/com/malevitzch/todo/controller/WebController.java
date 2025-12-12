package com.malevitzch.todo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.services.TaskService;

@RestController
public class WebController {
    private final TaskService taskService;

    public WebController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/")
    public String index() {
        return "Hi";
    }
    @GetMapping("/api/all")
    public List<Task> getPendingTasks() {
        return taskService.getPendingTasks();
    }
    @PostMapping("/api/task/add/{name}")
    public boolean addTask(@PathVariable String name) {
        //FIXME: impl
        //return taskService.addTask(new SimpleTask(name)) != null;
        return false;
    }
}