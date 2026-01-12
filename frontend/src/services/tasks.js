export async function addMultiTask(task) {
    const res = await fetch('/api/tasks/add-multi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: task.name, 
            "maxCompletions": (task.perpetual ? null : task.maxCompletions),
            perpetual: task.perpetual }),
    });
    if (!res.ok) 
        throw new Error('Failed to add task');
}

export async function addOneTimeTask(task) {
    const res = await fetch('/api/tasks/one-time/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: task.name }),
    });
    if (!res.ok) 
        throw new Error('Failed to add task');
}

export async function updateMultiTaskCompletionCount({taskTag, delta}) {
    const res = await fetch('/api/tasks/complete-multi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag: taskTag, count: delta }),
    });
    if(!res.ok)
        throw new Error('Failed to update');
}

export async function completeOneTimeTask({taskTag}) {
    const res = await fetch('/api/tasks/one-time/complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag: taskTag }),
    });
    if(!res.ok)
        throw new Error('Failed to complete one-time task');
}
export async function uncompleteOneTimeTask({taskTag}) {
    const res = await fetch('/api/tasks/one-time/uncomplete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag: taskTag }),
    });
    if(!res.ok)
        throw new Error('Failed to uncomplete one-time task');
}