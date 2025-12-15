package com.malevitzch.todo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.MultiTask;
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
    @PostMapping("/api/tasks/add-multi")
    public ResponseEntity<Void> addMultiTask(@RequestBody Map<String, String> json) {
        taskService.addTask(new MultiTask(json.get("name")));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
}