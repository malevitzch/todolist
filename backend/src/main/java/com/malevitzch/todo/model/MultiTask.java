package com.malevitzch.todo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class MultiTask extends Task {
    private int completionCount = 0;

    @Column
    private int maxCompletions;

    private void updateStatus() {
        if(completionCount < 0) {
            completionCount = 0;
        }
        if(completionCount >= maxCompletions) {
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }

    public MultiTask(String name, int maxCompletions) {
        super(name);
        this.maxCompletions = maxCompletions;
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

    public int getMaxCompletions() {
        return maxCompletions;
    }

    public void reset() {
        setCompletionCount(0);
    }
    
    protected MultiTask() {}
};