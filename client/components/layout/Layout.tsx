import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../sections/Footer'
import Nav from '../sections/Nav'

export default function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isDemoPage = location.pathname === '/demo'
  const isCrudPage = location.pathname === '/crud'

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

      {!isHomePage && !isDemoPage && !isCrudPage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  )
}
