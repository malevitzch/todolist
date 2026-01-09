import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addMultiTask, addOneTimeTask } from "../services/tasks.js";

function useAddTask(mutationFn, queryKey) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
    });
}

export const useAddOneTimeTask = () => useAddTask(addOneTimeTask, 'tasks');
export const useAddMultiTask = () => useAddTask(addMultiTask, 'tasks');