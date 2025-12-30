package com.malevitzch.todo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class MultiTask extends Task {
    private int completionCount = 0;

    @Column(nullable = false)
    private int maxCompletions;

    private void updateCompletedStatus() {
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
        updateCompletedStatus();
    }

    public void complete(int n) {
        completionCount += n;
        updateCompletedStatus();
    }

    public int getCompletionCount() {
        return completionCount;
    }

    public void setCompletionCount(int n) {
        completionCount = n;
        updateCompletedStatus();
    }

    public int getMaxCompletions() {
        return maxCompletions;
    }

    public void reset() {
        setCompletionCount(0);
    }
    
    protected MultiTask() {}
};