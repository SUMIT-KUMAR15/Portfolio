import React from 'react'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>

    <Navbar/>
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Footer />
    <Contact />
    </div>
    <Toaster />
    </>
  )
}

export default App;