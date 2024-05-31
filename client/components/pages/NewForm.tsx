// combined form/ display to add, update and delete fruits

import {
  useAddFruit,
  useDeleteFruit,
  useFruits,
  useUpdateFruit,
} from '../../hooks/useFruits'

import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQueryClient } from '@tanstack/react-query'

function NewForm() {
  const { isAuthenticated, user } = useAuth0()
  const addFruitMutation = useAddFruit()
  const deleteFruitMutation = useDeleteFruit()
  const updateFruitMutation = useUpdateFruit()
  const queryClient = useQueryClient()

  const [owner, setOwner] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [selectedFruitId, setSelectedFruitId] = useState<string | null>(null)
  const [updateName, setUpdateName] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const {
    data: fruits,
    error: fruitsError,
    isLoading: fruitsLoading,
  } = useFruits()

  useEffect(() => {
    if (isAuthenticated && user) {
      setOwner(user.name || user.nickname || '')
    }
  }, [isAuthenticated, user])

  const handleAddSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setLoading(true)
    setMessage('')
    const newFruit = { owner, name }
    try {
      await addFruitMutation.mutateAsync(newFruit)
      setMessage('Fruit added successfully!')
      setName('')
      setOwner(user?.name || user?.nickname || '')
      queryClient.invalidateQueries({ queryKey: ['fruits'] })
    } catch (error) {
      setMessage('Failed to add fruit.')
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateSubmit = async (id: string, newName: string) => {
    setIsUpdating(true)
    try {
      await updateFruitMutation.mutateAsync(
        { id: Number(id), name: newName },
        {
          onSuccess: () => {
            console.log('Fruit updated')
            setSelectedFruitId(null)
            setUpdateName('')
            queryClient.invalidateQueries({ queryKey: ['fruits'] })
          },
        },
      )
    } catch (error) {
      console.error('Failed to update fruit', error)
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDelete = async (id: string) => {
    setIsDeleting(true)
    setError(null)
    try {
      await deleteFruitMutation.mutateAsync(id, {
        onSuccess: () => {
          console.log('Fruit deleted')
          queryClient.invalidateQueries({ queryKey: ['fruits'] })
        },
      })
    } catch (error) {
      console.error('Failed to delete fruit', error)
      setError('Failed to delete fruit. Please try again.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="flex justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 md:ml-10 md:w-1/2 md:pl-10 ">
        <div className="rounded-xl border-4 border-gray-200 p-3">
          <p className="m-4">
            This page allows you to manage fruits by adding, updating, and
            deleting entries in the SQLite database. It leverages the following
            technologies and tools:
          </p>
          <ul className="mb-4 list-disc pl-6">
            <li className="mb-2">
              <strong>React</strong>: Utilises hooks like <code>useState</code>{' '}
              and <code>useEffect</code> for state management and side effects.
            </li>
            <li className="mb-2">
              <strong>Auth0</strong>: Handles authentication to ensure that only
              authorised users can manage fruits.
            </li>
            <li className="mb-2">
              <strong>React Query</strong>: Manages server state, caching, and
              syncing with the backend.
            </li>
            <li className="mb-2">
              <strong>Tailwind CSS</strong>: Provides utility-first CSS for
              styling the components.
            </li>
            <li className="mb-2">
              <strong>SQLite</strong>: Stores and retrieves the fruit data.
            </li>
          </ul>
        </div>

        {isAuthenticated ? (
          <>
            <form
              onSubmit={handleAddSubmit}
              className="mb-10 mt-10 rounded-xl border-4 border-gray-200 p-3"
            >
              <h1 className="m-1 text-2xl font-bold">Add Fruits</h1>
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
                  Fruit:
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
                className="w-1/2 rounded-md bg-gray-800 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 md:w-1/3"
                disabled={loading}
              >
                {loading ? 'Adding...' : 'Add Fruit'}
              </button>
            </form>
            {message && (
              <div className="mt-4 text-center font-bold text-green-500">
                {message}
              </div>
            )}
          </>
        ) : (
          <div className="text-center font-bold text-red-500">
            You need to log in to add and manage fruits.
          </div>
        )}

        {fruitsLoading ? (
          <div>Loading...</div>
        ) : fruitsError ? (
          <div>Error loading fruits</div>
        ) : (
          <div className="mt-6 w-full rounded-xl border-4 border-gray-200 p-3">
            <ul className="m-2 mt-6 space-y-4 rounded-lg bg-white p-6 shadow-md">
              {fruits?.map((fruit) => (
                <li
                  key={fruit.id}
                  className="rounded-lg bg-gray-100 p-4 shadow-sm"
                >
                  {selectedFruitId === fruit.id ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleUpdateSubmit(fruit.id, updateName)
                      }}
                    >
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="mb-2 block font-bold text-gray-700"
                        >
                          New Name:
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={updateName}
                          onChange={(e) => setUpdateName(e.target.value)}
                          required
                          placeholder="Enter new Fruit name"
                          className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                        disabled={isUpdating}
                      >
                        {isUpdating ? 'Updating...' : 'Update Fruit'}
                      </button>
                      <button
                        type="button"
                        className="mt-2 w-full rounded-md bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={() => {
                          setSelectedFruitId(null)
                          setUpdateName('')
                        }}
                      >
                        Cancel
                      </button>
                    </form>
                  ) : (
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-semibold">
                          {fruit.name}
                        </div>
                        <div className="text-gray-600">
                          Owner: {fruit.owner}
                        </div>
                        <div className="text-gray-600">ID: {fruit.id}</div>
                      </div>
                      {isAuthenticated && (
                        <div>
                          <button
                            className="rounded bg-gray-800 px-4 py-2 text-white hover:bg-blue-600"
                            onClick={() => {
                              setSelectedFruitId(fruit.id)
                              setUpdateName(fruit.name)
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="ml-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-red-600"
                            onClick={() => handleDelete(fruit.id)}
                            disabled={isDeleting}
                          >
                            {isDeleting ? 'Deleting...' : 'Delete'}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default NewForm
