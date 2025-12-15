import TaskList from "../components/tasks/TaskList";
import TaskAdder from "../components/tasks/TaskAdder";
export default function AllTasks() {
    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-blue-200">
                <TaskList />
            </div>
            
            <div className="w-2/3 bg-blue-300">
                <TaskAdder />
            </div>
        </div>
    )
}