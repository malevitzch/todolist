
// TODO: maybe put the invalidate hook in a separate file and generalize
// so it can be used for other queries as well
import { useQueryClient } from '@tanstack/react-query';

export function useInvalidateSimpleTasks(delay = 500) {
  const queryClient = useQueryClient();

  const invalidate = () => {
    setTimeout(() => {
      queryClient.invalidateQueries(['simple-tasks']);
    }, delay);
  };

  return invalidate;
}

export default function TaskAdder() {
    const invalidateTasks = useInvalidateSimpleTasks();
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
        invalidateTasks(500);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="name" placeholder="Task Name" required />
        </form>
    )
}