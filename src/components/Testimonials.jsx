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
    <section className="py-6 sm:py-10">
      <div className="rounded-2xl border border-[color:var(--warm-pink)]/50 bg-[color:var(--light-pink)]/10 p-4 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(231,184,198,0.1)]">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <span className="hidden xs:inline" style={{color:'var(--dark-pink)'}}>✦</span>
          <p className="text-center text-sm xs:text-base sm:text-lg md:text-xl" style={{color:'var(--dark-pink)'}}>{quotes[i]}</p>
          <span className="hidden xs:inline" style={{color:'var(--dark-pink)'}}>✦</span>
        </div>
        <div className="mt-4 sm:mt-6 overflow-x-auto" ref={ref}>
          <div className="flex gap-2 sm:gap-4 min-w-max pb-2">
            {testimonialThumbs.map((src, idx) => (
              <img key={idx} className="h-24 w-20 sm:h-28 sm:w-24 md:h-32 md:w-28 rounded-xl object-cover border border-[color:var(--warm-pink)]/60" src={src} alt="review screenshot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


