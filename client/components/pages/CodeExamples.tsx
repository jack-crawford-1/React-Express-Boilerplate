export default function CodeExamples() {
  return (
    <>
      <section className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h1 className="mb-8 text-3xl font-extrabold text-white md:text-5xl">
            Code Snippets: CRUD Operations
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 inline-flex items-center rounded-md bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-gray-700 dark:text-purple-400">
                Fetch
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                Retrieving data from the Database
              </h2>
              <pre className="mb-2 overflow-auto rounded-md bg-gray-900 p-4 text-white">
                <code className="whitespace-pre-wrap">
                  {`import { Request, Response } from 'express';
import * as db from '../db/fruits.ts';

export async function getFruits(req: Request, res: Response) {
  try {
    const fruits = await db.getAllFruits();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fruits' });
  }
}`}
                </code>
              </pre>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This function fetches all fruits from the database and returns
                them as a JSON response. If an error occurs, it sends a 500
                status with an error message.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-gray-700 dark:text-green-400">
                Add
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                Inserting new data
              </h2>
              <pre className="mb-2 overflow-auto rounded-md bg-gray-900 p-4 text-white">
                <code className="whitespace-pre-wrap">
                  {`import { Request, Response } from 'express';
import * as db from '../db/fruits.ts';

export async function addFruit(req: Request, res: Response) {
  try {
    const { owner, name } = req.body;
    await db.addFruit({ owner, name });
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: 'Error adding fruit' });
  }
}`}
                </code>
              </pre>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This function adds a new fruit to the database. It receives the
                fruits owner and name from the request body and saves it. On
                success, it sends a 201 status; otherwise, it sends a 500 status
                with an error message.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
                Query
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                Managing data with React Query
              </h2>
              <pre className="mb-2 overflow-auto rounded-md bg-gray-900 p-4 text-white">
                <code className="whitespace-pre-wrap">
                  {`import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addFruit, getFruits } from '../apis/fruits.ts';

export function useFruits() {
  return useQuery({ queryKey: ['fruits'], queryFn: getFruits });
}

export function useAddFruit() {
  const queryClient = useQueryClient();
  return useMutation(addFruit, {
    onSuccess: () => queryClient.invalidateQueries('fruits'),
  });
}`}
                </code>
              </pre>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This custom hook uses React Query to fetch and add fruits. It
                includes queries to fetch fruits and a mutation to add a new
                fruit, with automatic cache invalidation.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 md:p-12 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-2 inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-gray-700 dark:text-yellow-400">
                Submit
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900 dark:text-white">
                Form Handling for data addition
              </h2>
              <pre className="mb-2 overflow-auto rounded-md bg-gray-900 p-4 text-white">
                <code className="whitespace-pre-wrap">
                  {`const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true);
  try {
    await addFruitMutation.mutateAsync({ owner, name });
    setMessage('Fruit added successfully!');
    setName('');
    setOwner(user?.name || user?.nickname || '');
  } catch (error) {
    setMessage('Failed to add fruit.');
  } finally {
    setLoading(false);
  }
};`}
                </code>
              </pre>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                This function handles the form submission. It prevents the
                default form submission, creates a new fruit object with the
                owner and name, submits the new fruit using addFruitMutation,
                and then resets the form fields.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
