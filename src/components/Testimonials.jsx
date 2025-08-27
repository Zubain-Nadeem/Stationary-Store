import React, { useEffect, useRef, useState } from 'react'

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
      <div className="rounded-2xl border border-[color:var(--color-lavender)]/50 bg-white p-6 sm:p-8 card-soft">
        <div className="flex items-center justify-between">
          <span className="text-pink-600">✦</span>
          <p className="text-center text-lg sm:text-xl text-heading">{quotes[i]}</p>
          <span className="text-pink-600">✦</span>
        </div>
        <div className="mt-6 overflow-x-auto" ref={ref}>
          <div className="flex gap-4 min-w-max">
            {[1,2,3,4].map(n => (
              <img key={n} className="h-32 w-28 rounded-xl object-cover border border-[color:var(--color-lavender)]/40" src={`https://picsum.photos/seed/rev${n}/200/260`} alt="review screenshot" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


