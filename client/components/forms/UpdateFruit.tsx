import { useState } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { useUpdateFruit } from '../../hooks/useFruits'

function UpdateFruitForm() {
  const updateFruitMutation = useUpdateFruit()
  const queryClient = useQueryClient()
  const [id, setId] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      await updateFruitMutation.mutateAsync(
        { id: Number(id), name },
        {
          onSuccess: () => {
            console.log('Fruit updated')
            setId('')
            setName('')
            queryClient.invalidateQueries({ queryKey: ['fruits'] })
          },
        },
      )
    } catch (error) {
      console.error('Failed to update fruit', error)
    }
  }
  return (
    <div className="bg-white p-6 ">
      <h1 className="m-1 text-2xl font-bold">Update fruit name from ID</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="mb-2 block font-bold text-gray-700">
            Fruit ID:
          </label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            placeholder="Enter Fruit ID to update..."
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
            New Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter new Fruit name"
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Update Fruit
        </button>
      </form>
    </div>
  )
}

export default UpdateFruitForm
