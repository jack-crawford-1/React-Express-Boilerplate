import { Outlet } from 'react-router-dom'
// import Nav from '../sections/Nav'
import Footer from '../sections/Footer'
import NavCustom from '../sections/NavCustom'

export default function Layout() {
  return (
    <>
      <header>
        {/* <Nav /> */}

        <NavCustom />
      </header>
      <div className="pt-20">
        <main>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
