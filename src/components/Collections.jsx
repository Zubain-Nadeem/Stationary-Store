import React from 'react'

const cats = [
  { label: 'Notebooks', icon: '📓', color: 'bg-[color:var(--light-pink)]/70' },
  { label: 'Planners', icon: '✅', color: 'bg-[color:var(--warm-pink)]/50' },
  { label: 'Pens', icon: '✏️', color: 'bg-[color:var(--pink)]/50' },
  { label: 'Bundles & Offers', icon: '🎁', color: 'bg-[color:var(--dark-pink)]/30' },
]

const Collections = () => (
  <section className="py-10">
    <h2 className="text-2xl font-semibold mb-6" style={{color:'var(--dark-pink)'}}>Shop by Collection</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cats.map(c => (
        <a key={c.label} href="#" className={`flex items-center gap-3 rounded-2xl border border-[color:var(--warm-pink)]/40 ${c.color} px-4 py-4 shadow-[0_10px_30px_rgba(231,184,198,0.1)] hover:-translate-y-0.5 transition-transform hover:ring-1 hover:ring-[color:var(--dark-pink)]/60`}>
          <span className="text-xl">{c.icon}</span>
          <span style={{color:'var(--dark-pink)'}}>{c.label}</span>
        </a>
      ))}
    </div>
  </section>
)

export default Collections


