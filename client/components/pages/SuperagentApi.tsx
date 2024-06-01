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
    <div className="flex justify-center bg-gray-100 p-6">
      <div className="w-full rounded-lg bg-white p-6 shadow-lg md:w-3/4">
        <h1 className="m-3 text-2xl font-bold">
          External API using Superagent
        </h1>
        <p className="">Dummy posts from DummyJson.com</p>
        {data.length > 0 ? (
          <div className="mt-4 space-y-4">
            {data.map((item) => (
              <div key={item.id} className="border-b border-gray-200 p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-md mt-2">{item.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  )
}
