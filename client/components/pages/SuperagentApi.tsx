import { useState, useEffect } from 'react'
import { getDummyData } from '../../apis/dummyJson'
import { Post } from '../../../models/model'
import Loading from '../sections/Loading'

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
    return (
      <div>
        <Loading />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-800 p-6">
      <h1 className="mb-4 p-5 text-5xl font-extrabold text-white">
        External API using Superagent
      </h1>
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <p className="mb-6">Dummy posts from DummyJson.com</p>
        {data.length > 0 ? (
          <div className="space-y-6">
            {data.map((item) => (
              <div key={item.id} className="border-b border-gray-300 pb-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-lg text-gray-700">{item.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-700">No data available</p>
        )}
      </div>
    </div>
  )
}
