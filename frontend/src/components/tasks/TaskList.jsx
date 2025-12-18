import { useSimpleTasks } from "../../hooks/useTasks"
import TaskBox from "./TaskBox.jsx";
export default function TaskList() {
    const {data, isLoading, error} = useSimpleTasks();
    // TODO: error handling
    if (!isLoading) {
        return (
            <div>
            {data.map(task => (
                <TaskBox key={task.id}>
                    <div>{task.name}</div>
                </TaskBox>
            ))}
            </div>
        )
    } else {
        return <div>Loading...</div>
    }
}