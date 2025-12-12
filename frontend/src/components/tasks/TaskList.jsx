import { useSimpleTasks } from "../../hooks/useTasks"
export default function TaskList() {
    const {data, isLoading, error} = useSimpleTasks();
    return (
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}