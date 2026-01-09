package com.malevitzch.todo.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.OneTimeTask;
import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.services.TaskService;

@RestController
@RequestMapping("/api/tasks/one-time")
public class OneTimeTaskController {

    private final TaskService taskService;

    public OneTimeTaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addOneTimeTask(@RequestBody Map<String, String> json) {
        taskService.addTask(new OneTimeTask(json.get("name")));
        return ResponseEntity.ok().build();
    }

    @PostMapping("/complete")
    public ResponseEntity<Void> completeOneTimeTask(@RequestBody Map<String, String> json) {
        String tag = json.get("tag");
        if(tag == null) {
            return ResponseEntity.badRequest().build();
        }
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof OneTimeTask)) {
            return ResponseEntity.notFound().build();
        }
        taskService.completeOneTimeTask(tag);
        return ResponseEntity.ok().build();
    }
}