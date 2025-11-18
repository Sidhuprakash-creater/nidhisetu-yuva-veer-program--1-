
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:-translate-y-0.5 transition-transform ${
        isActive
          ? 'bg-gold/20 text-gold'
          : 'text-white hover:bg-gold/10 hover:text-gold'
      }`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-dark-teal shadow-md sticky top-0 z-50 relative">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center bg-dark-teal border-b border-gold/20">
        <Link to="/" className="text-2xl font-bold text-white tracking-wider">
          Nidhi<span className="text-gold">Setu</span>
        </Link>
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/register">Register</NavLink>
            <Link
              to="/admin-login"
              className="ml-2 px-4 py-2 rounded-md bg-gold text-dark-teal text-sm font-semibold hover:bg-yellow-400 transition-colors duration-300 hover:-translate-y-0.5 transition-transform"
            >
              Admin Login
            </Link>
          </nav>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden ml-2 p-2 rounded-md text-white hover:bg-gold/10 hover:text-gold transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <>
          <div className="absolute left-0 right-0 top-full md:hidden bg-dark-teal/95 border-t border-gold/30 z-50">
            <div className="container mx-auto px-4 py-3 space-y-2">
              <Link to="/" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md text-base text-white hover:bg-gold/10 hover:text-gold">Home</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md text-base text-white hover:bg-gold/10 hover:text-gold">Register</Link>
              <Link to="/admin-login" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-md text-base bg-gold text-dark-teal font-semibold hover:bg-yellow-400">Admin Login</Link>
            </div>
          </div>
          <button aria-label="Close menu overlay" onClick={() => setOpen(false)} className="md:hidden fixed inset-0 bg-black/30 z-40"></button>
        </>
      )}
    </header>
  );
};

export default Header;
