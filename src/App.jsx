import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Marketplace } from './pages/Marketplace/Marketplace'
import { Contact } from './pages/Contact/Contact'
import { SchemesMain } from './pages/Schemes/SchemesMain';
import { Weather } from './pages/Home/Weather/Weather';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/Loan" element={<SchemesMain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App