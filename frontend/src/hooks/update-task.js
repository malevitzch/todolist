import { useQueryClient, useMutation } from "@tanstack/react-query";
import { updateMultiTaskCompletionCount } from "../services/tasks.js";
import { completeOneTimeTask, uncompleteOneTimeTask } from "../services/tasks.js";

export function useUpdateMultiTaskCompletion() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: updateMultiTaskCompletionCount,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}

export function useCompleteOneTimeTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: completeOneTimeTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}

export function useUncompleteOneTimeTask() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: uncompleteOneTimeTask,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tasks'] });
        },
    });
}