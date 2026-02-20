import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SitterSession from './pages/SitterSession'
import NewbornSession from './pages/NewbornSession'
import First48Session from './pages/First48Session'
import SitterGallery from './pages/SitterGallery'
import NewbornGallery from './pages/NewbornGallery'
import First48Gallery from './pages/First48Gallery'
import About from './pages/About'
import './App.css'

// ScrollToTop component to ensure pages start at the top
const ScrollToTop = () => {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="app-wrapper">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sitter-session" element={<SitterSession />} />
                    <Route path="/newborn-session" element={<NewbornSession />} />
                    <Route path="/first-48-session" element={<First48Session />} />
                    <Route path="/sitter-gallery" element={<SitterGallery />} />
                    <Route path="/newborn-gallery" element={<NewbornGallery />} />
                    <Route path="/first-48-gallery" element={<First48Gallery />} />
                    <Route path="/about-us" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
