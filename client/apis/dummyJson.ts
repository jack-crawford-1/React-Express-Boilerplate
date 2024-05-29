import request from 'superagent'
import { Post } from '../../models/model'

//using superagent to get 10 dummy posts
export async function getDummyData(): Promise<Post[]> {
  return request
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.body.slice(0, 10) as Post[])
    .catch((error) => {
      console.error('Error fetching data:', error)
      return []
    })
}

//using fetch for single recipe
export async function fetchRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes/1')
    const data = await response.json()
    console.log(data)
    return data || null
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return []
  }
}
