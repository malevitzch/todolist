import { TaskBox } from "../TaskBox.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function TaskButton({ onClick, children }) {
    return (
        <button type="button" onClick={onClick} 
            className="text-center w-1/2 px-1 bg-blue-400 rounded-full hover:shadow-md
             hover:bg-blue-500 active:scale-90 transition-transform duration-75">
            {children}
        </button>
    )
}

export function MultiTask({task}) {
    const queryClient = useQueryClient();
    
    // FIXME: abstract this into hook + service
    const mutation = useMutation({
        mutationFn: async ({ taskTag, delta }) => {
            const res = await fetch('/api/tasks/complete-multi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tag: taskTag, count: delta }),
            });
            if(!res.ok)
                throw new Error('Failed to update');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
    function updateCompletionCount(taskTag, delta) { 
        mutation.mutate({ taskTag, delta });
    }

    return (
        <TaskBox>
            <div className="h-1/3 text-center bg-blue-500 rounded-xl">{task.tag}</div>
            <div className="h-2/3 flex flex-row items-center pt-0.5">
                <div className="rounded-full text-center w-1/4 px-2 bg-blue-400">
                    {task.completionCount}/{task.maxCompletions}
                </div>
                <div className="text-right w-3/4 ml-auto">
                    <TaskButton onClick={() => updateCompletionCount(task.tag, -1)}>-</TaskButton>           
                    <TaskButton onClick={() => updateCompletionCount(task.tag, 1)}>+</TaskButton>
                </div>
            </div>
        </TaskBox>
    )
}