import { useState } from 'react'
import { useDeleteFruit } from '../../hooks/useFruits'
import { useQueryClient } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

function DeleteFruitForm() {
  const deleteFruitMutation = useDeleteFruit()
  const queryClient = useQueryClient()
  const [id, setId] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { isAuthenticated } = useAuth0()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
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
      setError('Failed to delete fruit. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className=" bg-white p-6">
      <h1 className="m-1 text-2xl font-bold">Delete fruit by ID</h1>
      {isAuthenticated ? (
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
          <div className="md:pb-25 pb-24"> </div>
          {error && <div className="mb-4 text-red-500">{error}</div>}
          <button
            type="submit"
            className="w-full rounded-md bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            disabled={isLoading}
          >
            {isLoading ? 'Deleting...' : 'Delete Fruit'}
          </button>
        </form>
      ) : (
        <div className="text-center font-bold text-red-500">
          You need to log in to delete a fruit.
        </div>
      )}
    </div>
  )
}

export default DeleteFruitForm
