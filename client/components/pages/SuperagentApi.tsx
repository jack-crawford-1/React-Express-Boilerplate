import { useState, useEffect } from 'react'
import { getDummyData } from '../../apis/dummyJson'
import { Post } from '../../../models/model'

export default function SuperagentApi() {
  const [data, setData] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDummyData()
      .then((data) => {
        setData(data)
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
      <h1 className="m-3 text-2xl font-bold">External API using Superagent</h1>
      <p className="font-bold">Dummy posts from DummyJson.com</p>
      {data.length > 0 ? (
        <div>
          {data.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  )
}
