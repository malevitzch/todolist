export async function addMultiTask(task) {
    const res = await fetch('/api/tasks/add-multi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: task.name, "maxCompletions": task.maxCompletions }),
    });
    if (!res.ok) 
        throw new Error('Failed to add task');
}

export async function addSimpleTask(task) {
    const res = await fetch('/api/tasks/add-simple', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: task.name }),
    });
    if (!res.ok) 
        throw new Error('Failed to add task');
}