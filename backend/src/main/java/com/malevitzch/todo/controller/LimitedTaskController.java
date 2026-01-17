package com.malevitzch.todo.controller;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.LimitedTask;
import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.services.TaskService;
@RestController
@RequestMapping("/api/tasks/limited")
public class LimitedTaskController {
    private final TaskService taskService;

    public LimitedTaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public ResponseEntity<Void> addLimitedTask(@RequestBody Map<String, String> json) {
        // TODO: wonder about sending perpetual
        if(!json.containsKey("name")) {
            return ResponseEntity.badRequest().build();
        }
        String name = json.get("name");
        if(!json.containsKey("maxCompletions")) {
            return ResponseEntity.badRequest().build();
        }
        int maxCompletions = Integer.parseInt(json.get("maxCompletions"));
        System.out.println("Max completions: " + maxCompletions);  
        taskService.addTask(new LimitedTask(name, maxCompletions));
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PostMapping("/complete")
    public ResponseEntity<Void> completeLimitedTask(@RequestBody Map<String, String> json) {
        String tag = json.get("tag");
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof LimitedTask)) {
            return ResponseEntity.badRequest().build();     
        }
        if(json.get("count") == null) {
            return ResponseEntity.badRequest().build();
        }
        // FIXME: this should be a part of a task service, not the controller
        int count = Integer.parseInt(json.get("count"));

        ((LimitedTask)task).complete(count);
        taskService.updateTask(task);

        return ResponseEntity.ok().build();
    }
}