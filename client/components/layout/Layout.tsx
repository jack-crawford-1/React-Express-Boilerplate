import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../sections/Footer'
import Nav from '../sections/Nav'

export default function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="pt-20">
        <main>
          <Outlet />
        </main>
      </div>

      {!isHomePage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  )
}
