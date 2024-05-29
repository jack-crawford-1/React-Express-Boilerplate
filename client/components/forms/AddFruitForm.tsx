import { useAddFruit } from '../../hooks/useFruits'
import { useState } from 'react'

function AddFruitForm() {
  const addFruitMutation = useAddFruit()

  const [owner, setOwner] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const newFruit = { owner, name }
    addFruitMutation.mutate(newFruit)
    setOwner('')
    setName('')
  }
  return (
    <div className="rounded-lg bg-white p-6 shadow-md">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="owner" className="mb-2 block font-bold text-gray-700">
            Owner:
          </label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block font-bold text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
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
    </div>
  )
}

export default AddFruitForm
