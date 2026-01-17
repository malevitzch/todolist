package com.malevitzch.todo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.dto.onetime.AddOneTimeTaskRequest;
import com.malevitzch.todo.dto.onetime.CompleteOneTimeTaskRequest;
import com.malevitzch.todo.dto.onetime.UncompleteOneTimeTaskRequest;
import com.malevitzch.todo.model.OneTimeTask;
import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.services.TaskService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/tasks/one-time")
public class OneTimeTaskController {

    private final TaskService taskService;

    public OneTimeTaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addOneTimeTask(
        @Valid @RequestBody AddOneTimeTaskRequest request) {
        taskService.addTask(new OneTimeTask(request.name()));
        return ResponseEntity.ok().build();
    }

    @PostMapping("/complete")
    public ResponseEntity<Void> completeOneTimeTask(
        @Valid @RequestBody CompleteOneTimeTaskRequest request) {
        String tag = request.tag();
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof OneTimeTask)) {
            return ResponseEntity.notFound().build();
        }
        taskService.completeOneTimeTask(tag);
        return ResponseEntity.ok().build();
    }
    
    @PostMapping("/uncomplete")
    public ResponseEntity<Void> uncompleteOneTimeTask(
        @Valid @RequestBody UncompleteOneTimeTaskRequest request) {
        String tag = request.tag();
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof OneTimeTask)) {
            return ResponseEntity.notFound().build();
        }
        taskService.uncompleteOneTimeTask(tag);
        return ResponseEntity.ok().build();
    }
}