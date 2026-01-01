import { TaskBox } from "../TaskBox.jsx";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUpdateMultiTaskCompletion } from "../../../hooks/update-task.js";

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
    const updateCompletion = useUpdateMultiTaskCompletion();
    return (
        <TaskBox>
            <div className="h-1/3 text-center bg-blue-500 rounded-xl">{task.tag}</div>
            <div className="h-2/3 flex flex-row items-center pt-0.5">
                <div className="rounded-full text-center w-1/4 px-2 bg-blue-400">
                    {task.completionCount}/{task.maxCompletions}
                </div>
                <div className="text-right w-3/4 ml-auto">
                    <TaskButton onClick={() => updateCompletion.mutate({taskTag: task.tag, delta: -1})}>-</TaskButton>           
                    <TaskButton onClick={() => updateCompletion.mutate({taskTag: task.tag, delta: +1})}>+</TaskButton>
                </div>
            </div>
        </TaskBox>
    )
}