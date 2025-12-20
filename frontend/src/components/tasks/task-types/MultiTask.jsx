import { TaskBox } from "../TaskBox.jsx";

export function MultiTask({task}) {
    return (
        <TaskBox>
            <div className="h-1/3 text-center bg-blue-700 rounded-xl">{task.name}</div>
            <div>{task.completionCount}</div>
        </TaskBox>
    )
}