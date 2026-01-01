import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

export async function useUpdateQuery(queryKey, updateFn) {
    await queryClient.cancelQueries({queryKey}); 
    const previousData = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, oldData => updateFn(oldData));
    return previousData;
}