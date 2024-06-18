import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'
import { useState, useEffect, useRef } from 'react'

export default function SignIn() {
  const { user, logout, loginWithRedirect } = useAuth0()
  const [showProfile, setShowProfile] = useState(false)
  const dropdownRef = useRef(null)

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  const handleProfileClick = () => {
    setShowProfile(!showProfile)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleProfileClick()
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfile(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <>
      <div className="sign-in-container flex items-center space-x-4">
        <IfNotAuthenticated>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <div className="user-info relative flex items-center space-x-4">
            {user && (
              <>
                <img
                  className="user-image h-10 w-10 cursor-pointer rounded-full"
                  src={user.picture}
                  alt="User"
                  // onClick={handleProfileClick}
                  onKeyDown={handleKeyDown}
                  role="button"
                  tabIndex={0}
                  aria-label="User Profile"
                />
                {showProfile && (
                  <div
                    className="profile-info absolute right-0 mt-2 w-48 rounded bg-white p-2 shadow"
                    ref={dropdownRef}
                  >
                    <p className="mr-1 text-gray-900">{user.name}</p>
                    <a
                      className="ml-1 text-blue-500 underline"
                      href={`https://example.com/profile/${user.sub}`}
                    >
                      View Profile
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </IfAuthenticated>
      </div>
    </>
  )
}
