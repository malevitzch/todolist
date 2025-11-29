package com.malevitzch.todo.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.malevitzch.todo.model.SimpleTask;
import com.malevitzch.todo.repositories.SimpleTaskRepository;

@Service
public class SimpleTaskService {
    private final SimpleTaskRepository repository;

    public SimpleTaskService(SimpleTaskRepository repository) {
        this.repository = repository;
    }
    
    public SimpleTask addTask(String name) {
        SimpleTask task = new SimpleTask(name);
        return repository.save(task);
    }
    
    public List<SimpleTask> getCompletedTasks() {
        return repository.findByCompletedTrue();
    }

    public List<SimpleTask> getPendingTasks() {
        return repository.findByCompletedFalse();
    }
}