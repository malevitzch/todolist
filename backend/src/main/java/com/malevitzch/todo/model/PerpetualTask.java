package com.malevitzch.todo.model;

import jakarta.persistence.Entity;

@Entity
public class PerpetualTask extends MultiTask {
    @Override
    protected void updateStatus() {
        if(getCompletionCount() < 0) {
            setCompletionCount(0);
        }
        if(getCompletionCount() >= getMaxCompletions()) {
            reset();
        }
    }

    // FIXME: MultiTask should be split into
    // LimitedTask and PerpetualTask to avoid redundant maxCompletions field

    public PerpetualTask(String name) {
        super(name, Integer.MAX_VALUE);
    }

    protected PerpetualTask() {}
}