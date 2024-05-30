export default function About() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-3xl font-bold">About This App</h1>
      <p className="mb-6">
        This Fullstack Boilerplate project was created to provide a solid
        foundation for building full-stack applications with modern
        technologies. Below, you&apos;ll find an overview of the tools and
        technologies used in this project.
      </p>

      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Frontend</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-semibold">React:</span> A JavaScript library
            for building user interfaces.
          </li>
          <li>
            <span className="font-semibold">TypeScript:</span> A typed superset
            of JavaScript that compiles to plain JavaScript.
          </li>
          <li>
            <span className="font-semibold">React Router:</span> A collection of
            navigational components that compose declaratively with your
            application.
          </li>
          <li>
            <span className="font-semibold">Tailwind CSS:</span> A utility-first
            CSS framework for rapidly building custom user interfaces.
          </li>
          <li>
            <span className="font-semibold">Vite:</span> A build tool that aims
            to provide a faster and leaner development experience for modern web
            projects.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Backend</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-semibold">Node.js:</span> A JavaScript runtime
            built on Chrome&apos;`s V8 JavaScript engine.
          </li>
          <li>
            <span className="font-semibold">Express:</span> A minimal and
            flexible Node.js web application framework.
          </li>
          <li>
            <span className="font-semibold">Knex.js:</span> A SQL query builder
            for JavaScript.
          </li>
          <li>
            <span className="font-semibold">SQLite3:</span> A C library that
            provides a lightweight, disk-based database.
          </li>
          <li>
            <span className="font-semibold">JWT:</span> JSON Web Tokens for
            securely transmitting information between parties as a JSON object.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Tooling</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-semibold">Docker:</span> A platform for
            developing, shipping, and running applications in containers.
          </li>
          <li>
            <span className="font-semibold">ESLint:</span> A tool for
            identifying and reporting on patterns found in ECMAScript/JavaScript
            code.
          </li>
          <li>
            <span className="font-semibold">Prettier:</span> An opinionated code
            formatter.
          </li>
          <li>
            <span className="font-semibold">Vitest:</span> A blazing fast unit
            test framework powered by Vite.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Key Features</h2>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-semibold">CRUD Operations:</span> The
            application supports Create, Read, Update, and Delete operations for
            managing fruit records.
          </li>
          <li>
            <span className="font-semibold">API Integration:</span> Fetch data
            from external APIs using Fetch and Superagent.
          </li>
          <li>
            <span className="font-semibold">Authentication:</span> JWT-based
            authentication setup (Auth0 integration included but not
            configured).
          </li>
          <li>
            <span className="font-semibold">Responsive Design:</span> Built with
            Tailwind CSS to ensure a responsive and modern user interface.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="mb-4 text-2xl font-semibold">Project Structure</h2>
        <div>
          <h3 className="mb-2 text-xl font-semibold">Root Directory</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Dockerfile: Defines the Docker image for the application.</li>
            <li>Procfile: Configuration for Heroku deployment.</li>
            <li>README.md: Documentation and setup instructions.</li>
            <li>index.html: Main HTML file for the client.</li>
            <li>package.json: Project metadata and dependencies.</li>
            <li>postcss.config.js: Configuration for PostCSS.</li>
            <li>tailwind.config.js: Configuration for Tailwind CSS.</li>
            <li>tsconfig.json: TypeScript configuration.</li>
            <li>vite.config.js: Configuration for Vite build tool.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 text-xl font-semibold">/client Directory</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>
              /components
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>FruitList.tsx: Component to display a list of fruits.</li>
              </ul>
            </li>
            <li>
              /forms
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>AddFruitForm.tsx: Form to add a new fruit.</li>
                <li>DeleteFruitForm.tsx: Form to delete a fruit.</li>
                <li>UpdateFruit.tsx: Form to update a fruit.</li>
              </ul>
            </li>
            <li>
              /layout
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>
                  Layout.tsx: Layout component with header, navigation, and
                  footer.
                </li>
              </ul>
            </li>
            <li>
              /pages
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>App.tsx: Main application component.</li>
                <li>Contact.tsx: Contact page component.</li>
                <li>
                  FetchApi.tsx: Component to fetch and display data from an
                  external API.
                </li>
                <li>
                  SuperagentApi.tsx: Component to fetch and display data using
                  Superagent.
                </li>
              </ul>
            </li>
            <li>
              /sections
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>Footer.tsx: Footer component.</li>
                <li>Nav.tsx: Navigation bar component.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="mb-2 text-xl font-semibold">/server Directory</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>app.js: Main server application file.</li>
            <li>config.js: Server configuration settings.</li>
            <li>/controllers: Modules handling specific routes and logic.</li>
            <li>/models: Data models used by the server.</li>
            <li>
              /routes
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>
                  fruits.ts: Route handlers for the server&apos;s API endpoints.
                </li>
              </ul>
            </li>
            <li>/utils: Utility modules used by the server.</li>
            <li>/tests: Test files for the server.</li>
            <li>
              /db
              <ul className="ml-5 list-inside list-disc space-y-2">
                <li>
                  /migrations
                  <ul className="ml-5 list-inside list-disc space-y-2">
                    <li>
                      20190905120752_fruit.js: Migration file for creating the
                      fruit table.
                    </li>
                  </ul>
                </li>
                <li>
                  /seeds
                  <ul className="ml-5 list-inside list-disc space-y-2">
                    <li>
                      fruit.js: Seed file for populating the fruit table with
                      initial data.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
