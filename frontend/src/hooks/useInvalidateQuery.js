import { useQueryClient } from '@tanstack/react-query';

export function useInvalidateQuery(name, delay) {
  const queryClient = useQueryClient();
  
  // FIXME: error handling
  const invalidate = () => {
    setTimeout(() => {
      queryClient.invalidateQueries([name]);
    }, delay);
  };

  return invalidate;
}
