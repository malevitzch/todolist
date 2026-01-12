import { useQuery } from '@tanstack/react-query';

// TODO: move fetch logic to services
export function useOngoingTasks() {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('/api/tasks/completed');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            return response.json();
        },
        staleTime: 10_000, // 10 seconds
        refetchInterval: 10_000, // 10 seconds
    })
}

export function useAllTasks() {
    return useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await fetch('/api/tasks/all');
            if (!response.ok) {
                throw new Error('Failed to fetch tasks');
            }
            return response.json();
        },
        staleTime: 10_000, // 10 seconds
        refetchInterval: 10_000, // 10 seconds
    })
}