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
      <div className="relative overflow-hidden rounded-3xl border-2 border-[color:var(--warm-pink)]/60 shadow-[0_15px_40px_rgba(231,184,198,0.25)]">
        <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[color:var(--warm-pink)]/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-16 h-64 w-64 rounded-full bg-[color:var(--light-pink)]/60 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-[color:var(--pink)]/40 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--light-pink)]/40 via-transparent to-[color:var(--warm-pink)]/40" />
        <img src={current.image} alt="Stationery hero" className="h-[360px] w-full object-cover sm:h-[480px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-12 relative z-10">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--light-pink)]/80 px-3 py-1 text-xs font-medium backdrop-blur shadow-sm"><span className="h-2 w-2 rounded-full bg-[color:var(--dark-pink)]" /> New arrivals just in</span>
            <h1 className="text-3xl sm:text-5xl font-semibold max-w-2xl drop-shadow-lg" style={{color:'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>{current.title}</h1>
            <p className="mt-3 max-w-xl text-white font-medium drop-shadow-md">{current.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 border-2 border-white/30" style={{backgroundColor:'var(--dark-pink)', boxShadow:'0 8px 24px rgba(210,148,169,0.6), 0 0 0 2px rgba(255,255,255,0.2) inset'}}>Shop Now</a>
              <a href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 bg-white/80 backdrop-blur border-2 border-[color:var(--warm-pink)]/60" style={{color:'var(--dark-pink)', boxShadow:'0 8px 24px rgba(231,184,198,0.4)'}}>Instagram</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 flex gap-3">
          {slides.map((_, i) => (
            <span key={i} className={`h-3 w-3 rounded-full transition-all ${i===index ? 'bg-white scale-110 ring-2 ring-[color:var(--warm-pink)]/60' : 'bg-white/60'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero


