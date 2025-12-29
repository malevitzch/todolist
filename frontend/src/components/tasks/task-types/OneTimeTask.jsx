import { TaskBox } from "../TaskBox.jsx";

// FIXME: add completing one-time tasks

export function OneTimeTask({task}) {
    return (
        <TaskBox>
            <div className = "bg-blue-500 rounded-full text-center px-2">
                {task.name}
            </div>
        </TaskBox>
    )
}