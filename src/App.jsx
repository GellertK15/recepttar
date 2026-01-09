import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './layout/Navbar.jsx'
import Home from './pages/Home.jsx'
import Receptek from './pages/Receptek.jsx'
import Kereso from './pages/Kereso.jsx'
import Reszletek from './pages/Reszletek.jsx'
import NotFound from './pages/NotFound.jsx'
import Admin from './pages/Admin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receptek" element={<Receptek />} />
          <Route path="/kereso" element={<Kereso />} />
          <Route path="/receptek/:id" element={<Reszletek />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </BrowserRouter>
  )
}

export default App
