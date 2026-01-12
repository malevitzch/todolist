import { useQuery } from '@tanstack/react-query';

export function useOngoingTasks() {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('/api/all');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            return response.json();
        },
        staleTime: 10_000, // 10 seconds
        refetchInterval: 10_000, // 10 seconds
    })
}