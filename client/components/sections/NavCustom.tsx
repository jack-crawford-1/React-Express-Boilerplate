import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import SignIn from '../auth/SignIn'
import { useAuth0 } from '@auth0/auth0-react'

export default function NavCustom() {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth0()
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/bulb.svg" className="h-8" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Boilerplate
          </span>
        </a>
        <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            {!isOpen && (
              <img
                className="h-8 w-8 rounded-full"
                src={user?.picture}
                alt={user?.name}
              />
            )}
          </button>
          {/* Dropdown menu */}
          {isOpen && (
            <div
              className="z-50 my-4 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
              id="user-dropdown"
              ref={dropdownRef}
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  <SignIn />
                </span>
                <span className="block truncate text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          )}
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            <svg
              className="h-5 w-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 ">
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
                to="/forms"
                className={({ isActive }) =>
                  isActive ? 'text-blue-400' : 'text-white'
                }
              >
                Forms Display
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
        </div>
      </div>
    </nav>
  )
}