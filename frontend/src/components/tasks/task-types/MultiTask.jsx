import { TaskBox } from "../TaskBox.jsx";
import { useInvalidateQuery } from "../../../hooks/useInvalidateQuery.js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function MultiTask({task}) {
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: ({ taskTag, delta }) => {
            return fetch('/api/tasks/complete-multi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tag: taskTag, count: delta }),
            })
            .then(res => {
                if(!res.ok)
                    throw new Error('Failed to update');
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['simple-tasks'] });
        },
    });
    function updateCompletionCount(taskTag, delta) { 
        mutation.mutate({ taskTag, delta });
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