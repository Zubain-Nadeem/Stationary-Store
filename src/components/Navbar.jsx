import React, { useState } from 'react'
import Logo from "../assets/images/logo.jpg"

const Icon = ({ name, className }) => {
  const common = 'w-5 h-5';
  if (name === 'search') return (
    <svg className={`${common} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
  );
  if (name === 'cart') return (
    <svg className={`${common} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l3-7H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"></path></svg>
  );
  if (name === 'instagram') return (
    <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="1.5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="1.5"></path><circle cx="17.5" cy="6.5" r="1.25" fill="currentColor"></circle></svg>
  );
  if (name === 'menu') return (
    <svg className={`${common} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16"></path></svg>
  );
  if (name === 'close') return (
    <svg className={`${common} ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
  );
  return null;
}

const Navbar = () => {
  const navItems = ['Home','Shop','Bestsellers','Offers','Reviews','Contact']
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[color:var(--warm-pink)]/60 bg-gradient-to-r from-[color:var(--light-pink)]/90 to-[color:var(--cream)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--light-pink)]/70 shadow-[0_10px_30px_rgba(231,184,198,0.2)]">
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="Dear Me Stationery Logo" className="h-10 w-10 rounded-lg object-cover ring-2 ring-[color:var(--warm-pink)]/60" />
              <span className="text-xl font-semibold tracking-wide bg-gradient-to-r from-[color:var(--dark-pink)] to-[color:var(--warm-pink)] bg-clip-text text-transparent">dear me stationery</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm" style={{color:'black'}}>
              {navItems.map(item => (
                <a key={item} href="#" className="transition-all hover:text-[color:var(--dark-pink)] hover:scale-105 hover:font-medium">{item}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4" style={{color:'var(--dark-pink)'}}>
              <button 
                aria-label="Toggle mobile menu" 
                className="md:hidden p-2 rounded-lg bg-[color:var(--light-pink)]/40 hover:bg-[color:var(--warm-pink)]/60 transition-all hover:scale-105 shadow-sm"
                onClick={toggleMobileMenu}
              >
                <Icon name={mobileMenuOpen ? "close" : "menu"} />
              </button>
              <button aria-label="Search" className="p-2 rounded-lg bg-[color:var(--light-pink)]/40 hover:bg-[color:var(--warm-pink)]/60 transition-all hover:scale-105 shadow-sm">
                <Icon name="search" />
              </button>
              <button aria-label="Cart" className="p-2 rounded-lg bg-[color:var(--light-pink)]/40 hover:bg-[color:var(--warm-pink)]/60 transition-all hover:scale-105 shadow-sm">
                <Icon name="cart" />
              </button>
              <a aria-label="Instagram" href="https://www.instagram.com/shop.dearme/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-[color:var(--light-pink)]/40 hover:bg-[color:var(--warm-pink)]/60 transition-all hover:scale-105 shadow-sm">
                <Icon name="instagram" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-5 py-4 border-t border-[color:var(--warm-pink)]/30 bg-gradient-to-r from-[color:var(--light-pink)]/95 to-[color:var(--cream)]/95 backdrop-blur">
            <nav className="flex flex-col items-start gap-4 text-sm" style={{color:'var(--dark-pink)'}}>
              {navItems.map(item => (
                <a 
                  key={item} 
                  href="#" 
                  className="transition-all hover:text-[color:var(--dark-pink)] hover:translate-x-1 hover:font-medium w-full py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center gap-3 pt-2 border-t border-[color:var(--warm-pink)]/30 w-full">
                <span className="text-xs text-[color:var(--dark-pink)]/70">Follow us:</span>
                <a 
                  aria-label="Instagram" 
                  href="https://www.instagram.com/shop.dearme/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded-lg bg-[color:var(--light-pink)]/40 hover:bg-[color:var(--warm-pink)]/60 transition-all hover:scale-105 shadow-sm"
                >
                  <Icon name="instagram" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar


