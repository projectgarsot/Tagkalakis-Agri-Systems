import React, { useState, useEffect } from 'react';
import { Menu, X, Tractor } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ΑΡΧΙΚΗ', path: '/' },
    { label: 'ΜΗΧΑΝΗΜΑΤΑ', path: '/machinery' },
    { label: 'ΝΟΜΙΚΑ', path: '/legal' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-messinia shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded border ${scrolled ? 'border-gold text-gold' : 'border-white text-white'} group-hover:bg-gold group-hover:text-slate transition-colors`}>
                <Tractor size={24} />
            </div>
            <div className="flex flex-col">
                <span className={`font-serif font-bold text-lg leading-none ${scrolled ? 'text-white' : 'text-white'}`}>TAGKALAKIS</span>
                <span className={`text-[10px] tracking-[0.2em] font-sans uppercase ${scrolled ? 'text-gold' : 'text-gray-200'}`}>Agri-Systems</span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors relative
                ${scrolled ? 'text-gray-200 hover:text-gold' : 'text-white hover:text-gold'}
                ${location.pathname === link.path ? 'text-gold' : ''}
              `}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-messinia border-t border-white/10 shadow-xl">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-serif hover:text-gold py-2 border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;