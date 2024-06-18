import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../auth/SignIn'

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl text-white">Fullstack Boilerplate</div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <div className="space-y-2">
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
              <div className="h-0.5 w-8 bg-white"></div>
            </div>
          </button>
        </div>
        <ul className="hidden space-x-4 md:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'text-white'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/superagent-api"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'text-white'
              }
            >
              Superagent API
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fetch-api"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'text-white'
              }
            >
              Fetch API
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forms"
              className={({ isActive }) =>
                isActive ? 'text-blue-400' : 'text-white'
              }
            >
              Forms
            </NavLink>
          </li>
        </ul>
        <div className="hidden text-red-400 md:flex">
          <SignIn />
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 space-y-2 md:hidden">
          <div className="text-red-400">
            <SignIn />
          </div>
          <ul className="space-y-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/superagent-api"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Superagent API
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/fetch-api"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Fetch API
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/onthisday"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Wiki API- dotenv
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forms"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
                onClick={toggleMenu}
              >
                Forms
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Nav
