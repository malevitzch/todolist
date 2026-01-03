package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
public abstract class MultiTask extends Task {
    protected int completionCount;

    public MultiTask(String name) {
        super(name);
    }

    public void complete() {
        completionCount++;
        updateStatus();
    }

    public void complete(int n) {
        completionCount += n;
        updateStatus();
    }

    public int getCompletionCount() {
        return completionCount;
    }

    public void setCompletionCount(int n) {
        completionCount = n;
        updateStatus();
    }

    public void reset() {
        setCompletionCount(0);
    }
    
    protected MultiTask() {}
};