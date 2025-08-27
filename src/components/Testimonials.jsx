import React, { useEffect, useRef, useState } from 'react'
import { testimonialThumbs } from '../data/brand'

const quotes = [
  'What is yours will find you ✨',
  'Lovely quality and colors — obsessed! 💖',
  'Packaging was so cute, will order again.',
]

const Testimonials = () => {
  const [i, setI] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const id = setInterval(() => setI(v => (v + 1) % quotes.length), 3500)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="py-10">
      <div className="rounded-2xl border border-[color:var(--lavender)]/50 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-between">
          <span className="text-pink-600">✦</span>
          <p className="text-center text-lg sm:text-xl" style={{color:'var(--charcoal)'}}>{quotes[i]}</p>
          <span className="text-pink-600">✦</span>
        </div>
        <div className="mt-6 overflow-x-auto" ref={ref}>
          <div className="flex gap-4 min-w-max">
            {testimonialThumbs.map((src, idx) => (
              <img key={idx} className="h-32 w-28 rounded-xl object-cover border border-[color:var(--lavender)]/40" src={src} alt="review screenshot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


