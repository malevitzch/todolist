import {useQueryClient} from "@tanstack/react-query";

const queryClient = useQueryClient();

export async function useUpdateQuery(queryKey, updateFn) {
    await queryClient.cancelQueries({queryKey}); 
}