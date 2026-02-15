// src/components/Header.tsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/livre', label: 'Le Livre' },
  { to: '/auteur', label: 'Autrice' },
  { to: '/avis', label: 'Avis' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 md:p-6">
        <Link to="/" className="text-xl font-bold text-primaryRed">Stéphanie Oyarsabal</Link>
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ to, label }) => (
            <NavLink 
              key={to} 
              to={to} 
              className={({ isActive }) =>
                `font-semibold transition-colors hover:text-primaryRed ${
                  isActive ? 'underline decoration-primaryRed' : 'text-primaryBlue'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
        <a href="https://www.amazon.fr/dp/B0GNHL49Q8" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block bg-primaryRed text-white px-5 py-2 rounded hover:bg-primaryBlue transition">
          Acheter
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryRed" aria-label="Menu">
          <svg className="w-6 h-6 text-primaryBlue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-white bg-opacity-90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col px-6 pb-6 space-y-3">
            {navLinks.map(({ to, label }) => (
              <NavLink to={to} key={to} onClick={() => setOpen(false)} className={({ isActive }) => 
                `block py-2 font-semibold hover:text-primaryRed ${
                  isActive ? 'underline decoration-primaryRed' : 'text-primaryBlue'
                }`
              }>
                {label}
              </NavLink>
            ))}
            <a href="https://www.amazon.fr/dp/B0GNHL49Q8" target="_blank" rel="noopener noreferrer" className="block bg-primaryRed text-center text-white py-2 rounded hover:bg-primaryBlue transition">
              Acheter
            </a>
          </div>
        </div>
      )}
    </header>
  )
}