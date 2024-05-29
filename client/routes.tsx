import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/pages/App.tsx'
import Layout from './components/layout/Layout.tsx'
import About from './components/pages/About.tsx'
import Contact from './components/pages/Contact.tsx'
import Forms from './components/forms/Forms.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="forms" element={<Forms />} />
  </Route>,
)
