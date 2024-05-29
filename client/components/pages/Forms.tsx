import AddFruitForm from '../forms/AddFruitForm'
import DeleteFruitForm from '../forms/DeleteFruitForm'
import UpdateFruitForm from '../forms/UpdateFruit'

export default function Forms() {
  return (
    <>
      <h1 className="m-7 text-3xl font-bold">
        Manage Fruits: Add, Update, and Delete Records
      </h1>
      <p className="mb-6 text-center">
        Use the forms below to interact with the backend API for managing fruit
        records in the database. You can add new fruits, update existing ones,
        and delete fruits.
      </p>
      <div className="flex flex-col justify-center md:flex-row">
        <div className="flex justify-center p-3 md:w-1/3">
          <div className="flex h-96 w-full max-w-sm flex-col justify-between rounded-lg border bg-white p-4 shadow-md">
            <AddFruitForm />
          </div>
        </div>
        <div className="flex justify-center p-3 md:w-1/3">
          <div className="flex h-96 w-full max-w-sm flex-col justify-between rounded-lg border bg-white p-4 shadow-md">
            <UpdateFruitForm />
          </div>
        </div>
        <div className="flex justify-center p-3 md:w-1/3">
          <div className="flex h-96 w-full max-w-sm flex-col justify-between rounded-lg border bg-white p-4 shadow-md">
            <DeleteFruitForm />
            <div className="flex-grow"></div>{' '}
          </div>
        </div>
      </div>
    </>
  )
}
