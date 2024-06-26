import {
  useAddFruit,
  useDeleteFruit,
  useFruits,
  useUpdateFruit,
} from '../../hooks/useFruits'

import { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useQueryClient } from '@tanstack/react-query'
import Loading from '../sections/Loading'

export default function Demo() {
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
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <div className="mb-8 rounded-lg border border-gray-200 bg-gray-800 p-8 md:p-12 dark:border-gray-700">
            <h1 className="mb-2 text-3xl font-extrabold text-white">
              CRUD functionality with Knex and SQLite3
            </h1>
            <p className="mb-6 text-lg font-normal text-gray-200">
              This project showcases how to perform CRUD (Create, Read, Update,
              Delete) operations using Knex and SQLite3 in a full-stack Express
              application. It includes examples of adding new entries to the
              database, as well as editing and deleting existing entries with
              real-time updates and authentication.
            </p>
            <a
              href="/code-examples"
              className="inline-flex items-center text-lg font-medium text-blue-400 hover:underline dark:text-blue-500"
            >
              See Code Examples
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border-gray-700 bg-gray-800 p-8 md:p-12 dark:bg-gray-800">
              <div className="flex justify-center">
                <div className="w-full bg-white">
                  {isAuthenticated ? (
                    <>
                      <form
                        onSubmit={handleAddSubmit}
                        className="bg-gray-800 p-1"
                      >
                        <h2 className="mb-2 pb-1 text-3xl font-extrabold text-white">
                          Add to database
                        </h2>
                        <p className="mb-6 text-lg font-normal text-gray-200">
                          For logged in users, the owner's name field is
                          automatically populated using the useAuth0 hook. Uses
                          the useEffect hook to set the owner's name when the
                          component mounts, ensuring the owner field reflects
                          the current user's name.
                        </p>
                        <div className="mb-4">
                          <label
                            htmlFor="owner"
                            className="mb-2 block font-bold text-gray-300"
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
                            className="mb-2 block font-bold text-gray-300"
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
                          className="mt-3 w-full rounded-md bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                            placeholder="Log in to add fruits"
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-300 focus:outline-none focus:ring"
                          />
                        </div>
                      </form>
                      <div className="text-center font-bold text-red-500">
                        You need to log in to add and manage fruits.
                      </div>
                    </>
                  )}

                  {fruitsLoading ? (
                    <div>
                      <Loading />
                    </div>
                  ) : fruitsError ? (
                    <div>Error loading fruits</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 bg-gray-800 p-8 md:p-12 dark:border-gray-700">
              <h2 className="mb-2 text-3xl font-extrabold text-white">
                Edit Database Entries
              </h2>
              <p className="mb-6 text-lg font-normal text-gray-200">
                Uses custom hooks for mutation and deletion of the existing
                data. When the form is submitted, the mutation is triggered,
                updating or deleting the fruit in the database and refreshing
                the fruit list. Ensure's that users are authenticated before
                allowing any changes.
              </p>
              <div className="w-full p-3">
                <ul className="m-2 mt-6 space-y-4 rounded-lg bg-white p-6 shadow-md">
                  {fruits?.map((fruit) => (
                    <li
                      key={fruit.id}
                      className="duration rounded-lg bg-gray-100 p-4 shadow-sm transition hover:bg-gray-300"
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
                        <div className="flex flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
                          <div className="flex-grow">
                            <div className="text-lg font-semibold">
                              {fruit.name}
                            </div>
                            <div className="text-gray-600">
                              Owner: {fruit.owner}
                            </div>
                            <div className="text-gray-600">ID: {fruit.id}</div>
                          </div>
                          {isAuthenticated && (
                            <div className="flex space-x-2">
                              <button
                                className="rounded bg-gray-800 px-2 py-2 text-white hover:bg-blue-600"
                                onClick={() => {
                                  setSelectedFruitId(fruit.id)
                                  setUpdateName(fruit.name)
                                }}
                              >
                                Edit
                              </button>
                              <button
                                className="rounded bg-gray-500 px-2 py-2 text-white hover:bg-red-600"
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
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
