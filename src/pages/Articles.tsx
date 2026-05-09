import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User, Share2, X, Mic, Calendar, Globe, Sparkles, Zap, MessageSquare, Anchor } from 'lucide-react';
import { ARTICLES } from '../data/mockData';
import { AnimatePresence } from 'motion/react';

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = React.useState<any>(null);
  const featuredArticle = ARTICLES[0];

  return (
    <div className="pt-32 bg-brand-cream min-h-screen relative overflow-hidden">
      {/* Mixed Color Background Accents (Subtle Glows) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] left-[20%] w-[25%] h-[25%] bg-brand-charcoal/5 rounded-full blur-[80px]" />
      </div>

      <section className="px-6 max-w-7xl mx-auto pb-20 relative z-10">
        <div className="space-y-4 mb-20 text-center">
            <h1 className="text-5xl md:text-7xl italic">WPF Journal</h1>
            <p className="text-brand-gray text-xl font-light max-w-2xl mx-auto">Thoughtful dispatches on consciousness, society, and the art of inquiry.</p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 9).map((article) => (
                <div 
                    key={article.id} 
                    onClick={() => setSelectedArticle(article)}
                    className="group flex flex-col bg-white rounded-[2.5rem] overflow-hidden border border-brand-border hover:border-brand-gold hover:shadow-2xl transition-all aspect-square cursor-pointer p-10"
                >
                    <div className="space-y-6 flex-1 flex flex-col h-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-brand-gold">
                                <span className="px-2 py-1 bg-brand-beige rounded">{article.category}</span>
                            </div>
                            <span className="text-[10px] text-brand-gray/40 font-medium">{article.date}</span>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-3xl font-serif italic leading-tight group-hover:text-brand-gold transition-colors">{article.title}</h3>
                            <p className="text-brand-gray/80 leading-relaxed font-light text-base line-clamp-4">{article.excerpt}</p>
                        </div>
                        <div className="flex items-center justify-between pt-8 border-t border-brand-light-gray mt-auto">
                            <span className="text-[10px] text-brand-charcoal uppercase tracking-widest font-black group-hover:text-brand-gold transition-colors">Read Full Inquiry</span>
                            <div className="w-10 h-10 bg-brand-beige rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-all shadow-sm">
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Related Initiatives / Footer Note Section */}
        <div className="mt-32 border-t border-brand-charcoal/10 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-brand-gold" />
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">WPF Lab</h4>
              </div>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                Exploring the intersection of neural networks and non-dual consciousness. Our research papers are released quarterly for public inquiry.
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors flex items-center gap-2 group">
                View Research <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Wisdom Bytes</h4>
              </div>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                A daily micro-dispatch of stillness for your inbox. Zero noise, 100% philosophical integrity. Subscribe to the morning fragment.
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors flex items-center gap-2 group">
                Subscribe <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-gold" />
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-gold">Global Sangha</h4>
              </div>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                Our global community of seekers across 40+ countries. Finding common ground through the rigorous inquiry into the nature of Truth.
              </p>
              <button className="text-[10px] font-black uppercase tracking-widest text-brand-charcoal hover:text-brand-gold transition-colors flex items-center gap-2 group">
                Join Community <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="mt-32 text-center space-y-6">
            <p className="text-[10px] uppercase font-black tracking-[0.5em] text-brand-gray/30 italic">World Philosophical Foundation Archives</p>
            <div className="w-12 h-[1px] bg-brand-gold/20 mx-auto" />
          </div>
        </div>

        {/* Article Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-brand-charcoal/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-5xl bg-brand-cream rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row elevation-xl"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-20 p-3 bg-brand-charcoal text-white rounded-full hover:bg-brand-gold transition-colors shadow-lg"
              >
                <X className="w-5 h-5" /> 
              </button>

              <div className="md:w-12/12 p-8 md:p-16 overflow-y-auto custom-scrollbar bg-white/50 backdrop-blur-sm">
                <div className="space-y-8 max-w-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                       <span className="text-[11px] uppercase tracking-widest text-brand-gold font-black bg-brand-gold/5 px-3 py-1 rounded">{selectedArticle.category}</span>
                       <span className="text-[11px] text-brand-gray/60 font-medium uppercase tracking-widest">{selectedArticle.date}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif italic leading-[1.1] text-brand-charcoal">{selectedArticle.title}</h2>
                    <div className="flex items-center gap-3 pt-2">
                        <div className="w-10 h-10 rounded-full bg-brand-beige flex items-center justify-center font-serif italic text-brand-gold">W</div>
                        <div>
                            <p className="text-xs font-bold text-brand-charcoal uppercase tracking-wider">Analysis by {selectedArticle.author}</p>
                            <p className="text-[10px] text-brand-gray/60 uppercase">World Philosophical Foundation</p>
                        </div>
                    </div>
                  </div>
                  
                  <div className="w-12 h-1 bg-brand-gold/20" />

                  <div className="text-brand-charcoal/80 leading-[1.8] font-light text-lg whitespace-pre-wrap selection:bg-brand-gold/20">
                    {selectedArticle.content}
                  </div>
                  
                  <div className="pt-12 border-t border-brand-border flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-brand-charcoal text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-gold transition-all shadow-lg hover:shadow-brand-gold/20">
                      Share This Insight
                    </button>
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="flex-1 bg-brand-cream/50 border border-brand-charcoal/10 text-brand-charcoal py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] hover:bg-brand-charcoal hover:text-white transition-all"
                    >
                      Return to Journal
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>
    </div>
  );
}
