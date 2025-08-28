import React from 'react'

const Footer = () => (
  <footer className="mt-12 border-t border-[color:var(--warm-pink)]/40" style={{backgroundColor:'var(--light-pink)'}}>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold" style={{color:'var(--dark-pink)'}}>dear me stationery</h3>
          <p className="mt-2 text-sm" style={{color:'black'}}>write your story beautifully</p>
        </div>
        <nav className="text-sm flex flex-col gap-2" style={{color:'black'}}>
          <a href="#">About</a>
          <a href="#">FAQ</a>
          <a href="#">Contact</a>
          <a href="#">Policies</a>
        </nav>
        <div className="flex items-start gap-4">
          <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition-transform duration-200 bg-[color:var(--warm-pink)]/60 hover:-translate-y-0.5" style={{color:'var(--dark-pink)'}} href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer">Instagram</a>
          <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition-transform duration-200 bg-[color:var(--light-pink)]/60 hover:-translate-y-0.5" style={{color:'var(--dark-pink)'}} href="#">WhatsApp</a>
        </div>
      </div>
      <p className="mt-8 text-xs" style={{color:'var(--dark-pink)'}}>© {new Date().getFullYear()} dear me stationery</p>
    </div>
  </footer>
)

export default Footer


