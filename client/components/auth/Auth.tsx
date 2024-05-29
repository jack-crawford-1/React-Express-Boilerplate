import { useAuth0 } from '@auth0/auth0-react'

const useIsAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

interface AuthProps {
  children: React.ReactNode
}

export function IfAuthenticated(props: AuthProps) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated(props: AuthProps) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}
