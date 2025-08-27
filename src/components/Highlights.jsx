import React from 'react'
import { highlightItems as items } from '../data/brand'

const Highlights = () => {
  return (
    <section id="shop" className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl border border-[color:var(--lavender)]/40 bg-[color:var(--cream)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
            <div className="relative">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(245,237,227,0.8)] to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2 py-1 text-xs font-medium">Bestseller</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium" style={{color:'var(--charcoal)'}}>{item.title}</h3>
                <p className="text-sm" style={{color:'var(--softgray)'}}>from ₹299</p>
              </div>
              <button className="inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition-transform duration-200 bg-[color:var(--lavender)]/60 hover:-translate-y-0.5" style={{color:'var(--charcoal)'}}>View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights


