import { useInvalidateQuery } from "./../../hooks/useInvalidateQuery.js"

export default function TaskAdder() {
    const invalidateSimpleTasks = useInvalidateQuery('simple-tasks', 300);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.reset(); 

        fetch('/api/tasks/add-multi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: formData.get('name') }),
        })
        invalidateSimpleTasks(500);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" placeholder="Task Name" required />
        </form>
    )
}