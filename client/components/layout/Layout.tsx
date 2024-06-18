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
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
