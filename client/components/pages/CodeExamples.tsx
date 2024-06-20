import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const fetchCode = `
import { Request, Response } from 'express';
import * as db from '../db/fruits.ts';

export async function getFruits(req: Request, res: Response) {
  try {
    const fruits = await db.getAllFruits();
    res.json(fruits);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fruits' });
  }
}
`

const addCode = `
import { Request, Response } from 'express';
import * as db from '../db/fruits.ts';

export async function addFruit(req: Request, res: Response) {
  try {
    const { owner, name } = req.body;
    await db.addFruit({ owner, name });
    res.status(201).send();
  } catch (error) {
    res.status(500).json({ message: 'Error adding fruit' });
  }
}
`

const reactQueryCode = `
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { addFruit, getFruits } from '../apis/fruits.ts';

export function useFruits() {
  return useQuery({ queryKey: ['fruits'], queryFn: getFruits });
}

export function useAddFruit() {
  const queryClient = useQueryClient();
  return useMutation(addFruit, {
    onSuccess: () => queryClient.invalidateQueries('fruits'),
  });
}
`

const formHandlingCode = `
const handleSubmit = async (event) => {
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
};
`

export default function CodeExamples() {
  return (
    <>
      <section className="bg-gray-800">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
          <h1 className="mb-8 text-3xl font-extrabold text-white md:text-5xl">
            Code Snippets: CRUD Operations
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-12 dark:border-gray-700">
              <div className="mb-2 inline-flex items-center rounded-md bg-purple-500 px-2.5 py-0.5 text-xs font-medium text-purple-200">
                Fetch
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
                Retrieving data from the Database
              </h2>
              <div className="max-w-sm md:max-w-xl">
                <SyntaxHighlighter
                  language="typescript"
                  style={stackoverflowDark}
                >
                  {fetchCode}
                </SyntaxHighlighter>
              </div>
              <p className="pt-4 text-lg font-normal text-gray-500">
                This function fetches all fruits from the database and returns
                them as a JSON response. If an error occurs, it sends a 500
                status with an error message.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-12 dark:border-gray-700 ">
              <div className="mb-2 inline-flex items-center rounded-md bg-green-700 px-2.5 py-0.5 text-xs font-medium text-green-200">
                Add
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
                Inserting new data
              </h2>
              <div className="max-w-sm md:max-w-xl">
                <SyntaxHighlighter
                  language="typescript"
                  style={stackoverflowDark}
                >
                  {addCode}
                </SyntaxHighlighter>
              </div>
              <p className="pt-4 text-lg font-normal text-gray-500">
                This function adds a new fruit to the database. It receives the
                fruits owner and name from the request body and saves it. On
                success, it sends a 201 status; otherwise, it sends a 500 status
                with an error message.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-12 dark:border-gray-700 ">
              <div className="mb-2 inline-flex items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-200 dark:bg-gray-700">
                Query
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
                Managing data with React Query
              </h2>
              <div className="max-w-sm md:max-w-xl">
                <SyntaxHighlighter
                  language="typescript"
                  style={stackoverflowDark}
                >
                  {reactQueryCode}
                </SyntaxHighlighter>
              </div>
              <p className="pt-4 text-lg font-normal text-gray-500">
                This custom hook uses React Query to fetch and add fruits. It
                includes queries to fetch fruits and a mutation to add a new
                fruit, with automatic cache invalidation.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8 md:p-12 dark:border-gray-700 ">
              <div className="mb-2 inline-flex items-center rounded-md bg-yellow-300 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                Submit
              </div>
              <h2 className="mb-2 text-3xl font-extrabold text-gray-900">
                Form Handling for data addition
              </h2>
              <div className="max-w-sm md:max-w-xl">
                <SyntaxHighlighter
                  language="javascript"
                  style={stackoverflowDark}
                >
                  {formHandlingCode}
                </SyntaxHighlighter>
              </div>
              <p className="pt-4 text-lg font-normal text-gray-500">
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
