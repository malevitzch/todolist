package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
public class PerpetualTask extends MultiTask {
    @Override
    protected void updateStatus() {
        if(getCompletionCount() < 0) {
            setCompletionCount(0);
        }
        // Perpetual tasks are never completed
    }

    public PerpetualTask(String name) {
        super(name);
    }

    protected PerpetualTask() {}
}