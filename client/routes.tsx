import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/pages/App.tsx'
import Layout from './components/layout/Layout.tsx'
import SuperagentApi from './components/pages/SuperagentApi.tsx'
import Forms from './components/pages/Forms.tsx'
import FetchApi from './components/pages/FetchApi.tsx'
import Crud from './components/pages/Crud.tsx'
import Demo from './components/pages/Demo.tsx'
import CodeExamples from './components/pages/CodeExamples.tsx'
import Profile from './components/pages/Profile.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<App />} />
    <Route path="crud" element={<Crud />} />
    <Route path="superagent-api" element={<SuperagentApi />} />
    <Route path="fetch-api" element={<FetchApi />} />
    <Route path="forms" element={<Forms />} />
    <Route path="code-examples" element={<CodeExamples />} />
    <Route path="profile" element={<Profile />} />
    <Route path="demo" element={<Demo />} />
  </Route>,
)
