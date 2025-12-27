package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
public class OneTimeTask extends Task {
    
    public OneTimeTask(String name) {
        super(name);
    }
    
    public void complete() {
        setCompleted(true);
    }

    protected OneTimeTask() {}
} 