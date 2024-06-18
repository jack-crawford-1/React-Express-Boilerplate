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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setShowProfile(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [dropdownRef])

  return (
    <>
      <div className="sign-in-container flex items-center space-x-4">
        <IfNotAuthenticated>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:text-gray-200 md:hover:bg-gray-600 md:hover:text-white"
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
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 md:text-gray-700 md:hover:bg-gray-600 md:hover:text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </IfAuthenticated>
      </div>
    </>
  )
}
