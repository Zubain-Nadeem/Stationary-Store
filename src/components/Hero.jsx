import React, { useEffect, useRef, useState } from 'react'
import { heroSlides as slides } from '../data/brand'

const Hero = () => {
  const [index, setIndex] = useState(0)
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => setIndex(i => (i + 1) % slides.length), 4500)
    return () => clearInterval(timer.current)
  }, [])

  const current = slides[index]

  return (
    <section className="mt-8 sm:mt-12 mb-12">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--warm-pink)]/40 shadow-[0_10px_30px_rgba(231,184,198,0.1)]">
        <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[color:var(--warm-pink)]/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-16 h-56 w-56 rounded-full bg-[color:var(--light-pink)]/50 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-[color:var(--pink)]/30 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--light-pink)]/30 via-transparent to-[color:var(--warm-pink)]/30" />
        <img src={current.image} alt="Stationery hero" className="h-[360px] w-full object-cover sm:h-[480px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-12">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur"><span className="h-2 w-2 rounded-full bg-[color:var(--pink)]"></span> New arrivals just in</span>
            <h1 className="text-3xl sm:text-5xl font-semibold max-w-2xl drop-shadow" style={{color:'var(--charcoal)'}}>{current.title}</h1>
            <p className="mt-3 max-w-xl" style={{color:'var(--softgray)'}}>{current.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white transition-transform duration-200 hover:-translate-y-0.5" style={{backgroundColor:'var(--dark-pink)', boxShadow:'0 8px 24px rgba(210,148,169,0.4)'}}>Shop Now</a>
              <a href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition-transform duration-200 bg-[color:var(--warm-pink)]/60 hover:-translate-y-0.5" style={{color:'var(--dark-pink)'}}>Instagram</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i===index ? 'bg-[color:var(--dark-pink)]' : 'bg-[color:var(--light-pink)]/80'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero


