import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/pages/App.tsx'
import Layout from './components/layout/Layout.tsx'
import SuperagentApi from './components/pages/SuperagentApi.tsx'
import Contact from './components/pages/Contact.tsx'
import Forms from './components/pages/Forms.tsx'
import FetchApi from './components/pages/FetchApi.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="superagent-api" element={<SuperagentApi />} />
    <Route path="fetch-api" element={<FetchApi />} />
    <Route path="contact" element={<Contact />} />
    <Route path="forms" element={<Forms />} />
  </Route>,
)
