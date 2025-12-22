import { TaskBox } from "../TaskBox.jsx";
import { useInvalidateQuery } from "../../../hooks/useInvalidateQuery.js";


export function MultiTask({task}) {
    const invalidateSimpleTasks = useInvalidateQuery('simple-tasks', 300);
    
    function updateCompletionCount(taskTag, delta) { 
        fetch('/api/tasks/complete-multi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({tag: taskTag, count: delta }),
        });
        invalidateSimpleTasks();
    }

    return (
        <TaskBox>
            <div className="h-1/3 text-center bg-blue-700 rounded-xl">{task.tag}</div>
            <div className="h-2/3 flex flex-row items-center pt-0.5">
                <div className="rounded-full text-center w-1/2 px-2 bg-blue-600">{task.completionCount}</div>
                <div className="text-right w-1/2 ml-auto">
                    <button type="button" onClick={() => updateCompletionCount(task.tag, -1)} 
                        className="text-center w-1/2 px-1 rounded-full bg-blue-400">-</button>                
                    <button type="button" onClick={() => updateCompletionCount(task.tag, 1)} 
                        className="text-center w-1/2 px-1 rounded-full bg-blue-400">+</button>
                </div>
            </div>
        </TaskBox>
    )
}