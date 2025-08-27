import React, { useEffect, useRef, useState } from 'react'

const slides = [
  {
    title: 'Feminine & Minimally Curated Stationery 💕',
    subtitle: 'Notebooks, planners and pens you will love',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Stay focused, stay gentle',
    subtitle: 'Soft pastels that calm and inspire',
    image: 'https://images.unsplash.com/photo-1521120413309-42e7eadaf06b?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'Pens & Accessories',
    subtitle: 'Curated tools for your daily notes',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1400&auto=format&fit=crop',
  },
]

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
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-lavender)]/40 card-soft">
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-beige)] via-transparent to-[color:var(--color-lavender)]/50" />
        <img src={current.image} alt="Stationery hero" className="h-[360px] w-full object-cover sm:h-[480px]" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 sm:px-12">
            <h1 className="text-3xl sm:text-5xl font-semibold text-heading max-w-2xl drop-shadow">{current.title}</h1>
            <p className="mt-3 text-subtle max-w-xl">{current.subtitle}</p>
            <div className="mt-6 flex gap-3">
              <a href="#shop" className="btn-primary">Shop Now</a>
              <a href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer" className="btn bg-lavender/50 hover:translate-y-[-2px]">Instagram</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i===index ? 'bg-[color:var(--color-pink)]' : 'bg-white/60'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero


