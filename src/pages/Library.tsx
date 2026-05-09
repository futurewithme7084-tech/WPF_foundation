import React, { useState } from 'react';
import { Search, Filter, BookOpen, X, ExternalLink, ArrowRight, ShoppingCart, Info, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BOOKS } from '../data/mockData';
import { Book } from '../types';

const LIBRARY_CATEGORIES = [
  'All', 'Vedanta', 'Buddhism', 'Ethics', 'Consciousness', 'Stoicism', 'Nyaya', 'Sankhya', 'Upanishads'
];

export default function Library() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const displayCategories = selectedCategory === 'All' 
    ? LIBRARY_CATEGORIES.filter(c => c !== 'All') 
    : [selectedCategory];

  return (
    <div className="pt-32 bg-brand-cream min-h-screen relative">
      <section className="px-6 max-w-7xl mx-auto pb-12 border-b border-brand-light-gray">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl italic font-serif text-brand-charcoal tracking-tighter">WPF Library</h1>
                <p className="text-brand-gray text-xl max-w-xl font-light leading-relaxed">A curated repository of foundational wisdom, organized for the modern seeker.</p>
            </div>
            
            <div className="relative w-full md:w-96 shadow-xl rounded-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-gray" />
                <input 
                    type="text" 
                    placeholder="Search books or authors..." 
                    className="w-full bg-white border border-brand-border rounded-full py-4 pl-14 pr-6 focus:outline-none focus:border-brand-gold transition-all shadow-inner"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
        </div>

        <div className="flex flex-wrap gap-3">
            {LIBRARY_CATEGORIES.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-8 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-black transition-all ${
                        selectedCategory === cat 
                        ? 'bg-brand-gold text-white shadow-xl shadow-brand-gold/20 scale-105' 
                        : 'bg-white text-brand-gray border border-brand-border hover:bg-brand-beige'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto py-24 pb-40 space-y-32">
          {displayCategories.map(category => {
              const categoryBooks = BOOKS.filter(book => 
                book.category === category && 
                (book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                 book.author.toLowerCase().includes(searchQuery.toLowerCase()))
              );

              if (categoryBooks.length === 0) return null;

              return (
                <div key={category} className="space-y-16">
                    <div className="flex items-center gap-6">
                        <h2 className="text-4xl md:text-5xl italic font-serif text-brand-charcoal tracking-tight">{category}</h2>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-gold/40 to-transparent"></div>
                        <span className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gold opacity-60">{categoryBooks.length} Editions</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {categoryBooks.map((book, idx) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                key={book.id} 
                                onClick={() => setSelectedBook(book)}
                                className="group bg-white rounded-[3rem] p-10 border border-brand-border hover:border-brand-gold hover:shadow-2xl transition-all cursor-pointer flex flex-col h-full overflow-hidden relative"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-brand-gold/10 transition-colors" />
                                
                                <div className="space-y-6 flex-1 relative z-10">
                                    <div className="w-12 h-[1px] bg-brand-gold/30 group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500" />
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-serif italic text-brand-charcoal group-hover:text-brand-gold transition-colors leading-tight">
                                            {book.title}
                                        </h3>
                                        <p className="text-[10px] uppercase tracking-[0.2em] font-black text-brand-gray/60 group-hover:text-brand-gray transition-colors">
                                            {book.author}
                                        </p>
                                    </div>
                                    <p className="text-sm text-brand-gray/80 font-light leading-relaxed line-clamp-3">
                                        {book.description}
                                    </p>
                                </div>
                                <div className="pt-8 mt-auto flex items-center justify-between relative z-10">
                                    <span className="text-[9px] uppercase tracking-widest font-black text-brand-gold bg-brand-gold/5 px-3 py-1 rounded-md">View Insight</span>
                                    <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
              );
          })}

          {displayCategories.every(cat => BOOKS.filter(b => b.category === cat && (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()))).length === 0) && (
              <div className="text-center py-40 border-2 border-dashed border-brand-border rounded-[4rem] bg-white/50 backdrop-blur-sm shadow-inner">
                  <div className="w-20 h-20 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Search className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h3 className="text-3xl italic font-serif">No wisdom found here.</h3>
                  <p className="text-brand-gray mt-3 text-lg font-light">Try expanding your search parameters or category selection.</p>
              </div>
          )}
      </section>

      {/* Book Detail Modal */}
      <AnimatePresence>
        {selectedBook && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBook(null)}
              className="absolute inset-0 bg-brand-charcoal/95 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-5xl bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-white/10"
            >
              <button 
                onClick={() => setSelectedBook(null)}
                className="absolute top-8 right-8 z-30 p-4 bg-brand-charcoal text-white rounded-full hover:bg-brand-gold transition-all shadow-2xl group hover:rotate-90"
              >
                <X className="w-6 h-6" /> 
              </button>

              {/* Modal Content Left: Visual */}
              <div className="md:w-5/12 bg-brand-cream relative overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative z-10 w-full aspect-[3/4] bg-white rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden border border-brand-border"
                >
                    <img src={selectedBook.image} alt={selectedBook.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-8 text-white">
                        <p className="text-xs font-black uppercase tracking-widest italic">Wisdom Cover Archive</p>
                    </div>
                </motion.div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-gold/20 font-serif italic text-9xl select-none pointer-events-none uppercase">WPF</div>
              </div>

              {/* Modal Content Right: Text */}
              <div className="md:w-7/12 p-10 md:p-20 overflow-y-auto custom-scrollbar bg-white">
                <div className="space-y-12 max-w-xl mx-auto">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-[1px] bg-brand-gold" />
                      <span className="text-[11px] uppercase tracking-[0.4em] text-brand-gold font-black">{selectedBook.category}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif italic text-brand-charcoal leading-[1] tracking-tighter">{selectedBook.title}</h2>
                    <p className="text-brand-gold text-xl font-medium tracking-tight">By {selectedBook.author}</p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-4 h-[2px] bg-brand-gold/30" />)}
                    </div>
                    <p className="text-brand-gray text-xl font-light leading-relaxed italic border-l-4 border-brand-beige pl-8">
                      {selectedBook.description}
                    </p>
                    
                    <div className="space-y-4">
                        <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-charcoal/40">Inquiry Context</h4>
                        <p className="text-brand-charcoal/80 leading-relaxed font-light">
                            {selectedBook.author === "Acharya Prashant" 
                                ? "This work represent a pivotal contribution to modern Vedanta, synthesizing rigorous ancient logic with the immediate psychological demands of the 21st century seeker."
                                : "A foundational text in the global landscape of philosophy, offering primary insights into the nature of existence and human purpose."}
                        </p>
                    </div>
                  </div>

                  <div className="pt-10 flex flex-col sm:flex-row gap-4">
                    {selectedBook.author === "Acharya Prashant" ? (
                        <a 
                            href="https://acharyaprashant.org/en/books" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 bg-brand-charcoal text-white py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold transition-all shadow-2xl flex items-center justify-center gap-3 group"
                        >
                            Open AP Book Store <ShoppingCart className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        </a>
                    ) : (
                        <button className="flex-1 bg-brand-charcoal text-white py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold transition-all shadow-2xl flex items-center justify-center gap-3">
                            Source Insight <ExternalLink className="w-4 h-4" />
                        </button>
                    )}
                    <button className="flex-1 bg-white border border-brand-border text-brand-charcoal py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-beige transition-all shadow-xl flex items-center justify-center gap-3">
                       Abstract <Info className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="pt-8 border-t border-brand-beige flex items-center justify-between">
                    <p className="text-[9px] uppercase tracking-widest font-black text-brand-gray opacity-40">WPF Registered Archive No: {selectedBook.id.toUpperCase()}</p>
                    <Globe className="w-4 h-4 text-brand-gold opacity-20" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
