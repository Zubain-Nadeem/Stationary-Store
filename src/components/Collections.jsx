import React from 'react'

const cats = [
  { label: 'Notebooks', icon: '📓', color: 'bg-lavender/50' },
  { label: 'Planners', icon: '✅', color: 'bg-blue/50' },
  { label: 'Pens', icon: '✏️', color: 'bg-pink/40' },
  { label: 'Bundles & Offers', icon: '🎁', color: 'bg-beige' },
]

const Collections = () => (
  <section className="py-10">
    <h2 className="text-2xl font-semibold text-heading mb-6">Shop by Collection</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {cats.map(c => (
        <a key={c.label} href="#" className={`flex items-center gap-3 rounded-2xl border border-[color:var(--color-lavender)]/40 ${c.color} px-4 py-4 card-soft hover:-translate-y-0.5 transition-transform`}>
          <span className="text-xl">{c.icon}</span>
          <span className="text-heading">{c.label}</span>
        </a>
      ))}
    </div>
  </section>
)

export default Collections


