export default function Nav() {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex justify-center space-x-4">
        <a
          className="p-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-blue-500"
          href="/"
        >
          Home
        </a>
        <a
          className="p-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-blue-500"
          href="/superagent-api"
        >
          Superagent API
        </a>
        <a
          className="p-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-blue-500"
          href="/fetch-api"
        >
          Fetch API
        </a>
        <a
          className="p-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-blue-500"
          href="/contact"
        >
          Contact
        </a>
        <a
          className="p-2 font-semibold text-gray-700 transition duration-300 ease-in-out hover:text-blue-500"
          href="/forms"
        >
          Forms
        </a>
      </div>
    </nav>
  )
}
