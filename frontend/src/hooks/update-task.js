import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateMultiTaskCompletionCount } from "../services/tasks.js";

export function useUpdateMultiTaskCompletion() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateMultiTaskCompletionCount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}