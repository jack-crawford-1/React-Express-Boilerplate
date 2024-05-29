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
    <div>
      <h2>External API using Fetch</h2>
      <p>Dummy data from DummyJSON.com</p>
      {data ? (
        <div>
          <h3>{data.name}</h3>
          <p>{data.ingredients.join(', ')}</p>
          <p>{data.instructions.join(' ')}</p>
          <p>Prep Time: {data.prepTimeMinutes} minutes</p>
          <p>Cook Time: {data.cookTimeMinutes} minutes</p>
          <p>Servings: {data.servings}</p>
          <p>Difficulty: {data.difficulty}</p>
          <p>Cuisine: {data.cuisine}</p>
          <p>Calories per Serving: {data.caloriesPerServing}</p>
          <img src={data.image} alt={data.name} />
          <p>Rating: {data.rating}</p>
          <p>Reviews: {data.reviewCount}</p>
          <p>Meal Type: {data.mealType.join(', ')}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}
