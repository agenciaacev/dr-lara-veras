import { useEffect } from 'react'
import AOS from 'aos'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sintomas from './components/Sintomas'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Conteudo from './components/Conteudo'
import ComoFunciona from './components/ComoFunciona'
import FAQ from './components/FAQ'
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
      <Sintomas />
      <Sobre />
      <Servicos />
      <Conteudo />
      <ComoFunciona />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
