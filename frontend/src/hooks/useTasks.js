import { useQuery } from '@tanstack/react-query';

export function useSimpleTasks() {
    // TODO: queryFn does not handle errors yet
    return useQuery({
        queryKey: ['simple-tasks'],
        queryFn: () => fetch('/api/all').then (res => res.json()),
        staleTime: 10_000, // 10 seconds
    })
}