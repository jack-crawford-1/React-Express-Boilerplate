import { useQuery } from '@tanstack/react-query'
import { getMessage } from '../apis/messages'

export function useMessage() {
  const query = useQuery({ queryKey: ['message'], queryFn: getMessage })
  return {
    ...query,
  }
}
