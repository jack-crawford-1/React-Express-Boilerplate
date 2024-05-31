export default function Contact() {
  return (
    <div className="flex h-[calc(100vh-205px)] justify-center bg-gray-100 p-6">
      <div className="w-full rounded-lg bg-white p-6 shadow-lg md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
        <p className="mb-6">This is the contact page.</p>
        <ul className="list-none space-y-4">
          <li className="flex items-center space-x-2">
            <span className="font-bold">Email:</span>
            <span>contact@email.com</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="font-bold">Phone:</span>
            <span>123-456-789</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="font-bold">Address:</span>
            <span>123 New Street</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
