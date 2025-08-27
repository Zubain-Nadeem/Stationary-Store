import React from 'react'

const Footer = () => (
  <footer className="mt-12 bg-beige/60 border-t border-[color:var(--color-lavender)]/40">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-heading">dear me stationery</h3>
          <p className="mt-2 text-subtle text-sm">write your story beautifully</p>
        </div>
        <nav className="text-sm text-subtle flex flex-col gap-2">
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Policies</a>
        </nav>
        <div className="flex items-start gap-4">
          <a className="btn bg-lavender/60" href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="btn bg-pink/30" href="#">WhatsApp</a>
        </div>
      </div>
      <p className="mt-8 text-xs text-subtle">© {new Date().getFullYear()} dear me stationery</p>
    </div>
  </footer>
)

export default Footer


