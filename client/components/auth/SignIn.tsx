import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Auth'

export default function SignIn() {
  const { user, logout, loginWithRedirect } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div className="sign-in-container flex items-center space-x-4">
        <IfNotAuthenticated>
          <button
            className="sign-button rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handleSignIn}
          >
            Sign in
          </button>
        </IfNotAuthenticated>
        <IfAuthenticated>
          <div className="user-info flex items-center space-x-4">
            {user && (
              <>
                <img
                  className="user-image h-8 w-8 rounded-full"
                  src={user?.picture}
                  alt="User"
                />
                <p className="text-white">Signed in as: {user?.given_name}</p>
              </>
            )}
          </div>
          <button
            className="sign-button rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </IfAuthenticated>
      </div>
    </>
  )
}
