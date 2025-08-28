import React from 'react'
import { highlightItems as items } from '../data/brand'

const Highlights = () => {
  return (
    <section id="shop" className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl border border-[color:var(--warm-pink)]/40 bg-[color:var(--cream)] shadow-[0_10px_30px_rgba(231,184,198,0.1)]">
            <div className="relative">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--light-pink)]/80 to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-[color:var(--warm-pink)]/80 px-2 py-1 text-xs font-medium text-white">Bestseller</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium" style={{color:'var(--dark-pink)'}}>{item.title}</h3>
                <p className="text-sm" style={{color:'var(--warm-pink)'}}>from ₹299</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-transform duration-200 bg-[color:var(--warm-pink)]/60 hover:-translate-y-0.5" style={{color:'var(--dark-pink)'}}>View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights


