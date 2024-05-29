import AddFruitForm from '../forms/AddFruitForm'
import DeleteFruitForm from '../forms/DeleteFruitForm'
import UpdateFruitForm from '../forms/UpdateFruit'

export default function Forms() {
  return (
    <>
      <h1 className="text-3xl font-bold ">
        Manage Fruits: Add, Update, and Delete Records
      </h1>
      <p className="mb-6 text-center">
        Use the forms below to interact with the backend API for managing fruit
        records in the database. You can add new fruits, update existing ones,
        and delete fruits as needed.
      </p>
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
    </>
  )
}
