import React from 'react'

const cats = [
  { label: 'Notebooks', icon: '📓', color: 'bg-lavender/50' },
  { label: 'Planners', icon: '✅', color: 'bg-blue/50' },
  { label: 'Pens', icon: '✏️', color: 'bg-pink/40' },
  { label: 'Bundles & Offers', icon: '🎁', color: 'bg-beige' },
]

const Collections = () => (
  <section className="py-10">
    <h2 className="text-2xl font-semibold mb-6" style={{color:'var(--charcoal)'}}>Shop by Collection</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cats.map(c => (
        <a key={c.label} href="#" className={`flex items-center gap-3 rounded-2xl border border-[color:var(--lavender)]/40 ${c.color} px-4 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-transform hover:ring-1 hover:ring-[color:var(--pink)]/40`}>
          <span className="text-xl">{c.icon}</span>
          <span style={{color:'var(--charcoal)'}}>{c.label}</span>
        </a>
      ))}
    </div>
  </section>
)

export default Collections


