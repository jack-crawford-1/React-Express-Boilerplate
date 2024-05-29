import { useState, useEffect } from 'react'
import { fetchRecipes } from '../../apis/dummyJson'
import { Recipe } from '../../../models/model'

export default function FetchApi() {
  const [data, setData] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecipes()
      .then((recipe) => {
        setData(recipe)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-4 text-2xl font-bold">External API using Fetch</h2>
      <p className="mb-6 text-gray-700">Dummy data from DummyJSON.com</p>
      {data ? (
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-2 text-xl font-bold">{data.name}</h3>
          <p className="mb-2">
            <span className="font-semibold">Ingredients:</span>{' '}
            {data.ingredients.join(', ')}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Instructions:</span>{' '}
            {data.instructions.join(' ')}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Prep Time:</span>{' '}
            {data.prepTimeMinutes} minutes
          </p>
          <p className="mb-2">
            <span className="font-semibold">Cook Time:</span>{' '}
            {data.cookTimeMinutes} minutes
          </p>
          <p className="mb-2">
            <span className="font-semibold">Servings:</span> {data.servings}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Difficulty:</span> {data.difficulty}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Cuisine:</span> {data.cuisine}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Calories per Serving:</span>{' '}
            {data.caloriesPerServing}
          </p>
          <img
            className="mx-auto mb-4 h-auto w-full max-w-xl rounded"
            src={data.image}
            alt={data.name}
          />
          <p className="mb-2">
            <span className="font-semibold">Rating:</span> {data.rating}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Reviews:</span> {data.reviewCount}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Meal Type:</span>{' '}
            {data.mealType.join(', ')}
          </p>
        </div>
      ) : (
        <p className="text-red-500">No data available</p>
      )}
    </div>
  )
}
