package com.malevitzch.todo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.malevitzch.todo.model.Task;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByCompletedTrue();
    List<Task> findByCompletedFalse();
}