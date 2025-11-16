import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Lineup from './pages/Lineup'
import Experience from './pages/Experience'
import Tickets from './pages/Tickets'
import Creators from './pages/Creators'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Admin from './pages/Admin'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
