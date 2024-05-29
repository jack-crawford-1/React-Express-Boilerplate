import { Outlet } from 'react-router-dom'
import Header from '../sections/Header'
import Nav from '../sections/Nav'
import Footer from '../sections/Footer'

export default function Layout() {
  return (
    <>
      <header>
        <Header />
        <Nav />
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
