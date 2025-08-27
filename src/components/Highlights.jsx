import React from 'react'

const items = [
  {
    title: 'Study Made On',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Gel Pens',
    image: 'https://images.unsplash.com/photo-1523365280197-f1783db9fe62?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Daily Planner',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  },
]

const Highlights = () => {
  return (
    <section id="shop" className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="group overflow-hidden rounded-2xl border border-[color:var(--color-lavender)]/40 bg-cream card-soft">
            <div className="relative">
              <img src={item.image} alt={item.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(245,237,227,0.8)] to-transparent" />
            </div>
            <div className="flex items-center justify-between p-4">
              <h3 className="font-medium text-heading">{item.title}</h3>
              <button className="btn bg-lavender/60 text-heading hover:-translate-y-0.5">View</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Highlights


