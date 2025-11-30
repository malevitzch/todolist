package com.malevitzch.todo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.malevitzch.todo.model.Task;
import com.malevitzch.todo.repositories.TaskRepository;

@Service
public class TaskService {
    private final TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }
    
    public Task addTask(Task task) {
        return repository.save(task);
    }
    
    public List<Task> getCompletedTasks() {
        return repository.findByCompletedTrue();
    }

    public List<Task> getPendingTasks() {
        return repository.findByCompletedFalse();
    }
}