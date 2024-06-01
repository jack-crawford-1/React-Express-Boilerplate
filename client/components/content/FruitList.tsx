import { useFruits } from '../../hooks/useFruits'
import Loading from '../sections/Loading'

function FruitList() {
  const { data: fruits, error, isLoading } = useFruits()

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    )
  if (error) return <div>Error loading fruits</div>

  return (
    <div className="w-screen md:w-1/3">
      <ul className=" m-2 mt-6 space-y-4 rounded-lg bg-white p-6 shadow-md">
        {fruits?.map((fruit) => (
          <li key={fruit.id} className="rounded-lg bg-gray-100 p-4 shadow-sm">
            <div className="text-lg font-semibold">{fruit.name}</div>
            <div className="text-gray-600">Owner: {fruit.owner}</div>
            <div className="text-gray-600">ID: {fruit.id}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FruitList
