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

    @PostMapping("/api/tasks/complete-multi")
    public ResponseEntity<Void> completeMultiTask(@RequestBody Map<String, String> json) {
        String tag = json.get("tag");
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof MultiTask)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();     
        }
        if(json.get("count") == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();     
        }
        int count = Integer.parseInt(json.get("count"));

        ((MultiTask)task).complete(count);
        taskService.updateTask(task);

        return ResponseEntity.status(HttpStatus.OK).build();
    }
}