import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Library', path: '/library' },
  { name: 'Articles', path: '/articles' },
  { name: 'Media', path: '/media' },
  { name: 'Community', path: '/community' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6",
        scrolled ? "bg-brand-cream/80 backdrop-blur-md border-b border-brand-border py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-baseline gap-1 group">
            <div className="flex flex-col">
              <span className="font-serif text-3xl md:text-4xl font-black tracking-tighter text-black leading-none uppercase">WPF</span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-brand-gold font-black mt-1">World Philosophical Foundation</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-[12px] uppercase tracking-[0.15em] font-black transition-all hover:text-brand-gold",
                  location.pathname === link.path 
                    ? "text-black border-b-2 border-brand-gold pb-0.5" 
                    : "text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-charcoal hover:text-brand-gold transition-colors -mr-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-brand-cream border-t border-brand-border overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2 p-8 text-left">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-serif font-bold italic tracking-tight transition-all py-2 border-b border-brand-charcoal/5 last:border-0",
                    location.pathname === link.path ? "text-brand-gold pl-4" : "text-brand-charcoal hover:pl-2"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
