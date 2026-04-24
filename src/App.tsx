import { useEffect } from 'react'
import AOS from 'aos'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Sintomas from './components/Sintomas'
import Robotica from './components/Robotica'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    })
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <Sobre />
      <Sintomas />
      <Robotica />
      <CTA />
      <Footer />
    </div>
  )
}
