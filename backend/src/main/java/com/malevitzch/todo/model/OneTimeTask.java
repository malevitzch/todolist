package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
public class OneTimeTask extends Task {
    
    @Override
    protected void updateStatus() {
        // No-op for one-time tasks
    }

    public OneTimeTask(String name) {
        super(name);
    }
    
    public void complete() {
        setCompleted(true);
    }

    protected OneTimeTask() {}
} 