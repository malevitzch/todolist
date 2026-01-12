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

    public List<Task> getOngoingTasks() {
        return repository.findByCompletedFalse();
    }

    public List<Task> getAllTasks() {
        return repository.findAll();
    }

    public Task getTaskByTag(String tag) {
        int hashIndex = tag.lastIndexOf('#');
        if (hashIndex == -1) {
            return null;
        }
        String idBase36 = tag.substring(hashIndex + 1);
        Long id = Long.valueOf(idBase36, 36);
        String name = tag.substring(0, hashIndex);
        Task task = repository.findById(id).stream().findFirst().orElse(null);
        if(task == null || !task.getName().equals(name)) {
            return null;
        }
        return task;
    }

    public void updateTask(Task task) {
        repository.save(task);
    }

    public void completeOneTimeTask(String tag) {
        Task task = getTaskByTag(tag);
        if (task != null) {
            task.setCompleted(true);
            updateTask(task);
        }
    }
    public void uncompleteOneTimeTask(String tag) {
        Task task = getTaskByTag(tag);
        if (task != null) {
            task.setCompleted(false);
            updateTask(task);
        }
    }
}