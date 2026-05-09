import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Instagram, Youtube, Twitter, Facebook, AtSign, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-beige py-20 px-12 border-t border-brand-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold tracking-tight">WPF</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold font-bold">World Philosophical Foundation</span>
            </Link>
            <p className="text-brand-charcoal/60 text-[13px] leading-relaxed max-w-xs">
              A modern intellectual institution dedicated to reviving Indian philosophy for the modern world.
            </p>
            <div className="space-y-1 text-[11px] text-brand-charcoal/50 uppercase tracking-widest font-bold">
              <p>Lucknow, Uttar Pradesh, India</p>
              <p>wpf2025@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="https://youtube.com/@wpf-philosophy" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="YouTube">
                <Youtube className="w-3 h-3" />
              </a>
              <a href="https://instagram.com/wp_foundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="Instagram">
                <Instagram className="w-3 h-3" />
              </a>
              <a href="https://twitter.com/wp_foundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="X (Twitter)">
                <Twitter className="w-3 h-3" />
              </a>
              <a href="https://facebook.com/wp_foundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="Facebook">
                <Facebook className="w-3 h-3" />
              </a>
              <a href="https://threads.net/@wp_foundation" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="Threads">
                <AtSign className="w-3 h-3" />
              </a>
              <a href="https://chat.whatsapp.com/wpf-group" target="_blank" rel="noopener noreferrer" className="p-2 bg-brand-cream border border-brand-border rounded-full hover:text-brand-gold transition-colors" title="WhatsApp Group">
                <MessageCircle className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">Foundation</h4>
            <ul className="space-y-4 text-[13px] text-brand-charcoal/70">
              <li><Link to="/about" className="hover:text-brand-charcoal transition-colors">Our Story</Link></li>
              <li><Link to="/about" className="hover:text-brand-charcoal transition-colors">Mission & Vision</Link></li>
              <li><Link to="/community" className="hover:text-brand-charcoal transition-colors">Campus Chapters</Link></li>
              <li><Link to="/contact" className="hover:text-brand-charcoal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold mb-6">Inquiry</h4>
            <ul className="space-y-4 text-[13px] text-brand-charcoal/70">
              <li><Link to="/library" className="hover:text-brand-charcoal transition-colors">Philosophy Library</Link></li>
              <li><Link to="/articles" className="hover:text-brand-charcoal transition-colors">WPF Articles</Link></li>
              <li><Link to="/media" className="hover:text-brand-charcoal transition-colors">Media & Podcasts</Link></li>
              <li><Link to="/library" className="hover:text-brand-charcoal transition-colors">Reading List</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gold">Newsletter</h4>
            <p className="text-[13px] text-brand-charcoal/70">Weekly wisdom sent to your inbox.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full bg-brand-cream border border-brand-border rounded-lg py-3 px-6 text-[13px] focus:outline-none focus:border-brand-gold"
              />
              <button 
                type="submit"
                className="absolute right-2 top-2 p-1.5 bg-brand-charcoal text-brand-cream rounded-md hover:bg-brand-gold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between gap-4 items-center">
          <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            © {new Date().getFullYear()} World Philosophical Foundation — Pursuing Eternal Wisdom
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.15em] opacity-50 font-semibold">
            <a href="#" className="hover:text-brand-gold">Privacy</a>
            <a href="#" className="hover:text-brand-gold">Archives</a>
            <a href="#" className="hover:text-brand-gold">Institutional Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
