import AddFruitForm from './AddFruitForm'
import DeleteFruitForm from './DeleteFruitForm'
import UpdateFruitForm from './UpdateFruit'

export default function Forms() {
  return (
    <div className="flex min-h-fit flex-col justify-center md:flex-row">
      <div className="md:w-1/3 md:p-3">
        <AddFruitForm />
      </div>
      <div className="md:w-1/3 md:p-3">
        <UpdateFruitForm />
      </div>
      <div className="md:w-1/3 md:p-3">
        <DeleteFruitForm />
      </div>
    </div>
  )
}
