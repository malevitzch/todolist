import { TaskBox } from "../TaskBox.jsx";
import { useCompleteOneTimeTask } from "../../../hooks/update-task.js";

export function OneTimeTask({task}) {
    const completeTask = useCompleteOneTimeTask();
    return (
        <TaskBox>
            <div className = "bg-blue-500 rounded-full text-center px-2">
                {task.name}
            </div>
            <button type="button" 
                    onClick={() => completeTask.mutate({taskTag: task.tag})} 
                    className="w-full text-center bg-blue-400 rounded-full 
                               hover:shadow-md hover:bg-blue-500 
                               active:scale-y-90 active:scale-x-95 transition-transform duration-75">
                Complete
            </button>
        </TaskBox>
    )
}