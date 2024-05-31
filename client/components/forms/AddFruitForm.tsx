import { useAddFruit } from '../../hooks/useFruits'
import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function AddFruitForm() {
  const { isAuthenticated, user } = useAuth0()
  const addFruitMutation = useAddFruit()
  const [owner, setOwner] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (isAuthenticated && user) {
      setOwner(user.name || user.nickname || '')
    }
  }, [isAuthenticated, user])

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const newFruit = { owner, name }
    addFruitMutation.mutate(newFruit)
    setOwner(user?.name || user?.nickname || '')
    setName('')
    setOwner('')
  }

  return (
    <div className="bg-white p-6">
      <h1 className="m-1 text-2xl font-bold">Add fruit to the database</h1>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="owner"
              className="mb-2 block font-bold text-gray-700"
            >
              Owner:
            </label>
            <input
              type="text"
              id="owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              required
              placeholder="Enter Owner name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter Fruit name"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Fruit
          </button>
        </form>
      ) : (
        <div className="text-center font-bold text-red-500">
          You need to log in to add a fruit.
        </div>
      )}
    </div>
  )
}

export default AddFruitForm
