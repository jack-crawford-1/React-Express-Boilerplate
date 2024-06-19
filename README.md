# React / Express Boilerplate: Fullstack 



This **full-stack app boilerplate** leverages modern technologies and best practices to provide a robust foundation for building web applications. The project includes authentication setup using **Auth0** and features well-structured **API endpoints** for both server-side functionality and external data fetching. Internal routes handle server-side logic and responses, while external routes use **fetch** and **superagent** to retrieve data from **third-party APIs**.



The integration of a **SQLite database** ensures smooth data management and storage. The project also supports easy deployment with a **Procfile** and **Dockerfile** already configured. The file structure is organised, **separating concerns** across client and server directories, with clear divisions for components, hooks, styles, routes, models, controllers, middleware, and database interactions. This structure enhances maintainability and scalability, making it an ideal starting point for full-stack application development.


![alt text](public/images/homepage.png)


## Tech Stack

### Frontend
- React: A JavaScript library for building user interfaces
- React Router DOM: For routing in React applications
- TailwindCSS: A utility-first CSS framework for styling
- Sass: A CSS preprocessor for more advanced styling capabilities

### Backend
- Express: A minimal and flexible Node.js web application framework
- Auth0: Authentication and authorisation as a service
- Express JWT: Middleware for validating JWTs in Express
- Knex: SQL query builder for relational databases
- SQLite3: A C library that provides a lightweight, disk-based database
- Superagent: Small progressive client-side HTTP request library
- Supertest: Super-agent driven library for testing HTTP assertions

### Development Tools
- Vite: A fast frontend build tool
- TypeScript: A strongly typed programming language that builds on JavaScript
- Esbuild: An extremely fast JavaScript bundler
- TSX: For running TypeScript Node.js programs directly
- Vitest: A blazing fast unit test framework
- Testing Library (React, Jest DOM, User Event): Simple and complete testing utilities
- ESLint: Pluggable JavaScript linter
- Prettier: An opinionated code formatter
- Autoprefixer: A PostCSS plugin to parse CSS and add vendor prefixes
- PostCSS: A tool for transforming CSS with JavaScript plugins
- npm-run-all: A CLI tool to run multiple npm-scripts in parallel or sequential

### Deployment
- Procfile: For deploying applications to Heroku
- Dockerfile: For containerising the application



![alt text](public/images/crud.png)

![alt text](public/images/fetchapi.png)