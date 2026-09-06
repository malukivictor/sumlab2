import { Routes, Route } from 'react-router-dom'
import Navbar from './components/NavBar.jsx'   
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import AdminPortal from './pages/AdminPortal.jsx'
import Layout from './components/Layout.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Route>
    </Routes>
  )
}

export default App