
import React from 'react';
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
  return (
    <header className="bg-dark-teal shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white tracking-wider">
          Nidhi<span className="text-gold">Setu</span>
        </Link>
        <nav className="flex items-center space-x-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
