import { useSimpleTasks } from "../../hooks/useTasks"
import { MultiTask } from "./task-types/MultiTask.jsx"
export function TaskList() {
    const {data, isLoading, error} = useSimpleTasks();
    // TODO: error
    if(error) {
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoading) {
        return (
            // TODO: this should be based on task type
            <div className="flex-1 overflow-y-scroll grid grid-cols-4 gap-1 p-1 items-start auto-rows-min">
                {data.map(task => (
                    <MultiTask key={task.id} task={task} />
                ))}
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}