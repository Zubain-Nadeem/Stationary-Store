import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import Collections from './components/Collections'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-dvh" style={{backgroundColor:'var(--cream)'}}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Highlights />
        <Collections />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
