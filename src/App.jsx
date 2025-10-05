import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Contacto from './pages/Contacto.jsx'
import Servicios from './pages/Servicios.jsx'
import Api from './pages/Api.jsx'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </main>
    </div>
  )
}
