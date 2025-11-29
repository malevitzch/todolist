package com.malevitzch.todo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.malevitzch.todo.model.SimpleTask;

public interface SimpleTaskRepository extends JpaRepository<SimpleTask, Long> {

    List<SimpleTask> findByCompletedTrue();
    List<SimpleTask> findByCompletedFalse();
}