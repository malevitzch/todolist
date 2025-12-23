import { useQueryClient, useMutation} from "@tanstack/react-query";

export function TaskAdder() {
    const queryClient = useQueryClient();
   
    // TODO: this will be different based on task type
    const mutation = useMutation({
        mutationFn: (task) => {
            return fetch('/api/tasks/add-multi', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: task.name }),
            })
            .then(res => {
                if (!res.ok) 
                    throw new Error('Failed to add task');
            })
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['simple-tasks'] });
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.reset(); 

        mutation.mutate({ name: formData.get('name') });
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" placeholder="Task Name" required autoComplete="off" 
                className="px-1 py-1 bg-blue-400 focus:bg-blue-500 focus:outline-none"/>
        </form>
    )
}