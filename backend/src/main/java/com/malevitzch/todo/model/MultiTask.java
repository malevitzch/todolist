package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
class MultiTask extends Task {
    private int completionCount = 0;

    public MultiTask(String name) {
        super(name);
    }

    public void complete() {
        completionCount++;
    }

    public void complete(int n) {
        completionCount += n;
    }

    public int getCompletionCount() {
        return completionCount;
    }

    public void setCompletionCount(int n) {
        completionCount = n;
    }

    public void reset() {
        setCompletionCount(0);
    }
    
    protected MultiTask() {}
};