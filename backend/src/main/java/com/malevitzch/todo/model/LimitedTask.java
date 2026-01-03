package com.malevitzch.todo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

@Entity
public class LimitedTask extends MultiTask {

    @Column
    private int maxCompletions;

    @Override
    protected void updateStatus() {
        if(getCompletionCount() < 0) {
            setCompletionCount(0);
        }
        if(getCompletionCount() >= maxCompletions) {
            setCompleted(true);
        } else {
            setCompleted(false);
        }
    }

    public LimitedTask(String name, int maxCompletions) {
        super(name);
        this.maxCompletions = maxCompletions;
    }

    public int getMaxCompletions() {
        return maxCompletions;
    }

    protected LimitedTask() {}
}