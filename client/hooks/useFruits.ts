import {
  useQuery,
  useMutation,
  useQueryClient,
  MutationFunction,
} from '@tanstack/react-query'
import {
  addFruit,
  deleteFruit,
  getFruits,
  updateFruit,
} from '../apis/fruits.ts'

export function useFruits() {
  const query = useQuery({ queryKey: ['fruits'], queryFn: getFruits })
  return {
    ...query,
  }
}

export function useFruitsMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })

  return mutation
}

export function useAddFruit() {
  return useFruitsMutation(addFruit)
}

export function useDeleteFruit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteFruit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })
}

export function useUpdateFruit() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ id, name }: { id: number; name: string }) =>
      updateFruit(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    },
  })
}
