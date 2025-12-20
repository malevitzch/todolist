import { TaskList } from "../components/tasks/TaskList";
import { TaskAdder } from "../components/tasks/TaskAdder";
export function AllTasks() {
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="flex w-2/3 bg-blue-200">
                <TaskList />
            </div>
            
            <div className="w-1/3 bg-blue-300">
                <TaskAdder />
            </div>
        </div>
    )
}