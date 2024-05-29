import { useState } from 'react'
import { useDeleteFruit } from '../../hooks/useFruits'
import { useQueryClient } from '@tanstack/react-query'

function DeleteFruitForm() {
  const deleteFruitMutation = useDeleteFruit()
  const queryClient = useQueryClient()
  const [id, setId] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await deleteFruitMutation.mutateAsync(id, {
        onSuccess: () => {
          console.log('Fruit deleted')
          setId('')
          queryClient.invalidateQueries({ queryKey: ['fruits'] })
        },
      })
    } catch (error) {
      console.error('Failed to delete fruit', error)
    }
  }
  return (
    <div className="rounded-lg bg-white p-6 shadow-md ">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="mb-2 block font-bold text-gray-700">
            Fruit ID:
          </label>
          <input
            type="text"
            id="id"
            placeholder="Enter Fruit ID to delete..."
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Delete Fruit
        </button>
      </form>
    </div>
  )
}

export default DeleteFruitForm
