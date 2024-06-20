import { useState, useEffect } from 'react'
import { fetchRecipes } from '../../apis/dummyJson'
import { Recipe } from '../../../models/model'
import Loading from '../sections/Loading'

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
    return (
      <div>
        <Loading />
      </div>
    )
  }
  return (
    <div className="container mx-auto min-h-screen min-w-full bg-gray-800 p-6">
      <h1 className="mb-4 p-5 pt-6 text-5xl font-extrabold text-white">
        External API using Fetch
      </h1>
      <p className="mb-6 text-lg text-gray-200">
        Dummy data from DummyJSON.com
      </p>
      {data ? (
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">{data.name}</h3>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Ingredients:</span>{' '}
            {data.ingredients.join(', ')}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Instructions:</span>{' '}
            {data.instructions.join(' ')}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Prep Time:</span>{' '}
            {data.prepTimeMinutes} minutes
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Cook Time:</span>{' '}
            {data.cookTimeMinutes} minutes
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Servings:</span> {data.servings}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Difficulty:</span> {data.difficulty}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Cuisine:</span> {data.cuisine}
          </p>
          <p className="mb-4 text-lg">
            <span className="font-semibold">Calories per Serving:</span>{' '}
            {data.caloriesPerServing}
          </p>
          <img
            className="mx-auto mb-6 h-auto w-full max-w-xl rounded shadow-md"
            src={data.image}
            alt={data.name}
          />
          <p className="mb-2 text-lg">
            <span className="font-semibold">Rating:</span> {data.rating}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Reviews:</span> {data.reviewCount}
          </p>
          <p className="mb-2 text-lg">
            <span className="font-semibold">Meal Type:</span>{' '}
            {data.mealType.join(', ')}
          </p>
        </div>
      ) : (
        <p className="text-lg text-red-500">No data available</p>
      )}
    </div>
  )
}
