package com.malevitzch.todo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.malevitzch.todo.model.LimitedTask;
import com.malevitzch.todo.model.MultiTask;
import com.malevitzch.todo.model.OneTimeTask;
import com.malevitzch.todo.model.PerpetualTask;
import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.services.TaskService;

// FIXME: proper json input handling
// TODO: maybe multiple controllers 

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
    // TODO: maybe split into different endpoints for LimitedTask and PerpetualTask later
    @PostMapping("/api/tasks/add-multi")
    public ResponseEntity<Void> addMultiTask(@RequestBody Map<String, String> json) {
        // TODO: validate 
        String name = json.get("name");
        boolean perpetual = Boolean.parseBoolean(json.get("perpetual"));
        if(perpetual)
            taskService.addTask(new PerpetualTask(name));
        else {
            int maxCompletions = Integer.parseInt(json.get("maxCompletions"));
            System.out.println("Max completions: " + maxCompletions);  
            taskService.addTask(new LimitedTask(name, maxCompletions));
        }
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }
    @PostMapping("/api/tasks/add-simple")
    public ResponseEntity<Void> addSimpleTask(@RequestBody Map<String, String> json) {
        taskService.addTask(new OneTimeTask(json.get("name")));
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
        // FIXME: this should be a part of a task service, not the controller
        int count = Integer.parseInt(json.get("count"));

        ((MultiTask)task).complete(count);
        taskService.updateTask(task);

        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/api/tasks/complete-onetime")
    public ResponseEntity<Void> completeOneTimeTask(@RequestBody Map<String, String> json) {
        String tag = json.get("tag");
        if(tag == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
        Task task = taskService.getTaskByTag(tag);
        if (task == null || !(task instanceof OneTimeTask)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        taskService.completeOneTimeTask(tag);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}