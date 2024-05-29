import { NavLink } from 'react-router-dom'
import SignIn from '../auth/SignIn'

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li className="text-red-400">
          <SignIn />
        </li>
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
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
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
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-blue-400' : 'text-white'
            }
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
          >
            Forms
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
