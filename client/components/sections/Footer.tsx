export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 bg-gray-800 py-6 text-white">
      <div className="container mx-auto text-center">
        <p>Jack Crawford {year}</p>
        <a
          href="#top"
          className="mt-2 inline-block text-blue-400 hover:underline"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
