import React from 'react'
import { highlightItems as items } from '../data/brand'

const Highlights = () => {
  return (
    <section id="shop" className="py-6 sm:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl border border-[color:var(--warm-pink)]/40 bg-[color:var(--cream)] shadow-[0_10px_30px_rgba(231,184,198,0.1)]">
            <div className="relative">
              <img src={item.image} alt={item.title} className="h-44 sm:h-48 md:h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--light-pink)]/80 to-transparent" />
              <span className="absolute left-2 sm:left-3 top-2 sm:top-3 rounded-full bg-[color:var(--warm-pink)]/80 px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium text-white">Bestseller</span>
            </div>
            <div className="flex items-center justify-between p-3 sm:p-4">
              <div>
                <h3 className="font-medium text-sm sm:text-base" style={{color:'var(--dark-pink)'}}>{item.title}</h3>
                <p className="text-xs sm:text-sm" style={{color:'var(--warm-pink)'}}>from ₹299</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-lg sm:rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-transform duration-200 bg-[color:var(--warm-pink)]/60 hover:-translate-y-0.5" style={{color:'var(--dark-pink)'}}>View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights


