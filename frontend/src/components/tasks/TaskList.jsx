import { useSimpleTasks } from "../../hooks/useTasks"
import TaskBox from "./TaskBox.jsx";
export default function TaskList() {
    const {data, isLoading, error} = useSimpleTasks();
    // TODO: error
    if(error) {
        return <div>Error: {error.message}</div>;
    }
    else if(!isLoading) {
        return (
            // TODO: this should be based on task type
            <div className="flex-1 overflow-y-auto">
                {data.map(task => (
                    <TaskBox key={task.id}>
                        <div>{task.name}</div>
                        <div>{task.completionCount}</div>
                    </TaskBox>
                ))}
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}