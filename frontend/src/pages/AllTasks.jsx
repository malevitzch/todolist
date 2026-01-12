import { TaskList } from "../components/tasks/TaskList.jsx";
import { TaskAdder } from "../components/tasks/TaskAdder.jsx";
import { useOngoingTasks } from "../hooks/useTasks.js";
export function AllTasks() {
    const {data, isLoading, error} = useOngoingTasks();
    return (
        <div className="flex h-screen overflow-hidden">
            <div className="flex w-2/3 bg-blue-200">
                <TaskList data={data} isLoading={isLoading} error={error} />
            </div>
            
            <div className="w-1/3 bg-blue-300 px-1 py-1">
                <TaskAdder />
            </div>
        </div>
    )
}