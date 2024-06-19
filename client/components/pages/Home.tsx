export default function Home() {
  return (
    <div>
      <section className="min-h-screen bg-white">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center text-left text-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
              Fullstack Boilerplate for React JS
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl">
              Use this boilerplate to quickly set up a full-stack React
              application with built-in authentication, API integrations, and
              database management.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                href="https://github.com/jack-crawford-1/React-Express-Boilerplate"
                className="y-700 ray-700 inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                See GitHub Repo
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 lg:mt-0 lg:flex">
            <img src="/images/black-cat.png" alt="mockup" />
          </div>
        </div>
      </section>
    </div>
  )
}
