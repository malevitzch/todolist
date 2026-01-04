import { useQueryClient, useMutation } from "@tanstack/react-query";
import { addMultiTask, addSimpleTask } from "../services/tasks.js";

function useAddTask(mutationFn, queryKey) {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: mutationFn,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [queryKey] });
        },
        onError: (error) => {
            throw error;
        }
    });
}

export const useAddSimpleTask = () => useAddTask(addSimpleTask, 'tasks');
export const useAddMultiTask = () => useAddTask(addMultiTask, 'tasks');