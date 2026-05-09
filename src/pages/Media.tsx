import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Mic, FileText, ArrowRight, X as XIcon, Instagram, Youtube, BookOpen, ScrollText, Info, ExternalLink, Twitter, Facebook, Sparkles, Globe, Zap, MessageSquare, Calendar } from 'lucide-react';
import { MEDIA, MAGAZINES, ARTICLES } from '../data/mockData';
import { Magazine } from '../types';
import { cn } from '../lib/utils';

export default function Media() {
  const [selectedMagazine, setSelectedMagazine] = React.useState<Magazine | null>(null);
  const [isRegisteredPodcast, setIsRegisteredPodcast] = React.useState(false);
  const [isRegisteredEvent, setIsRegisteredEvent] = React.useState(false);

  return (
    <div className="pt-32 bg-brand-cream min-h-screen relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-1/3 h-screen bg-brand-beige/20 -skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-screen bg-blue-500/5 skew-x-12 -translate-x-1/4" />
      </div>

      <section className="px-6 max-w-7xl mx-auto pb-20 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
          <div className="space-y-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-12 h-[1px] bg-brand-gold" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black">Digital Wisdom Archives</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl italic font-serif text-brand-charcoal leading-[0.85] tracking-tighter"
            >
              WPF <br /> <span className="text-brand-gold">Media</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-gray text-xl md:text-2xl font-light leading-relaxed max-w-2xl"
            >
              A curated collection of audio-visual inquiries and monthly deep-dives. 
              Bridging ancient stillness with modern technology through long-form contemplation.
            </motion.p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Youtube, link: "https://youtube.com/@wpf-philosophy", color: "hover:bg-red-500" },
                { icon: Instagram, link: "https://instagram.com/wp_foundation", color: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600" },
                { icon: Twitter, link: "https://twitter.com/wp_foundation", color: "hover:bg-sky-500" },
                { icon: Facebook, link: "https://facebook.com/wp_foundation", color: "hover:bg-blue-600" }
              ].map((social, idx) => (
                <motion.a 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={cn(
                    "p-5 rounded-3xl border border-brand-charcoal/10 bg-white hover:text-white transition-all shadow-xl group",
                    social.color
                  )}
                >
                  <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </motion.a>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-brand-gray font-black opacity-40 ml-1">Connect via Channels</p>
          </div>
        </div>

        {/* Social Presence: YouTube & Instagram */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* YouTube Section */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-white rounded-[4rem] p-10 md:p-14 border border-brand-border hover:border-red-500/30 transition-all shadow-2xl space-y-8 flex flex-col relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-red-500/10 transition-colors" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-red-500 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                  <Youtube className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic tracking-tight">WPF Philosophy</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-brand-gray/60 font-black">Main Knowledge Hub</p>
                </div>
              </div>
              <a href="https://youtube.com/@wpf-philosophy" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase text-brand-gold tracking-widest hover:gap-4 transition-all bg-brand-gold/5 px-6 py-3 rounded-full border border-brand-gold/10">
                Subscribe <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <a 
              href="https://youtube.com/@wpf-philosophy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group/video rounded-[3rem] overflow-hidden aspect-video bg-brand-charcoal flex items-center justify-center shadow-inner cursor-pointer"
            >
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/80 to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-white group-hover/video:bg-red-500 transition-colors shadow-[0_0_50px_rgba(220,38,38,0.5)]"
                >
                  <Play className="w-10 h-10 fill-current ml-1" />
                </motion.div>
                <div className="text-white/80 text-[11px] font-black uppercase tracking-[0.4em] translate-y-2 group-hover/video:translate-y-0 opacity-0 group-hover/video:opacity-100 transition-all">Watch Recent Inquiry</div>
              </div>
            </a>
            
            <div className="space-y-4">
              <div className="flex gap-2">
                {['Vedanta', 'Buddhism', 'Stoicism', 'AI Ethics'].map(tag => (
                  <span key={tag} className="text-[9px] uppercase font-black tracking-widest text-brand-gold border border-brand-gold/20 px-3 py-1 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-brand-gray text-lg font-light leading-relaxed">
                Explore 500+ hours of high-definition philosophical inquiries, live symposiums, and animated wisdom bytes for the modern age.
              </p>
            </div>
          </motion.div>

          {/* Instagram Section */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-brand-charcoal rounded-[4rem] p-10 md:p-14 border border-white/5 shadow-2xl space-y-8 relative overflow-hidden flex flex-col group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-brand-gold/10 transition-colors" />
            
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-3xl flex items-center justify-center text-white shadow-lg">
                  <Instagram className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif italic text-white tracking-tight">wp_foundation</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-black">Visual Inquiry Feed</p>
                </div>
              </div>
              <a href="https://instagram.com/wp_foundation" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 text-[10px] font-black uppercase text-brand-gold tracking-widest hover:gap-4 transition-all bg-white/5 px-6 py-3 rounded-full border border-white/10">
                Follow <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 relative z-10 h-full">
              {[
                "https://images.unsplash.com/photo-1545641203-7d072a14e3b2?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=600&auto=format&fit=crop"
              ].map((img, i) => (
                <motion.a 
                  key={i}
                  href="https://instagram.com/wp_foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="aspect-[4/5] bg-white/5 rounded-[2rem] overflow-hidden border border-white/10 group/img cursor-pointer block"
                >
                  <img src={img} alt={`Social ${i}`} className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700" />
                </motion.a>
              ))}
            </div>
            
            <p className="text-brand-cream/60 text-lg font-light leading-relaxed relative z-10">
              Daily fragments of stillness curated for the modern feed. Photographic visual essays and morning reminders for the digital soul.
            </p>
          </motion.div>
        </div>

        {/* Live & Audio Inquiries (Migrated from Articles) */}
        <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Upcoming Podcasts Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-charcoal rounded-[4rem] p-12 md:p-16 text-brand-cream relative overflow-hidden border border-white/5 shadow-2xl flex flex-col"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Mic className="w-48 h-48 rotate-12" />
            </div>
            <div className="space-y-12 relative z-10 flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-brand-gold" />
                  <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black">Audio Inquiries</span>
                </div>
                <h2 className="text-5xl italic font-serif tracking-tighter">Upcoming Podcasts</h2>
              </div>

              <div className="space-y-10 flex-1">
                {isRegisteredPodcast ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
                  >
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-serif italic">Thank You from WPF</h3>
                        <p className="text-brand-cream/60 font-light">You are now on the discovery list. We will send reminders for each inquiry.</p>
                    </div>
                    <button 
                      onClick={() => setIsRegisteredPodcast(false)}
                      className="text-[10px] uppercase tracking-widest font-bold text-brand-gold border-b border-brand-gold pb-1"
                    >
                      Update Preferences
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {[
                      { date: "May 12", title: "The Architecture of Silence", guest: "Prof. Anant Shastri", status: "In Production" },
                      { date: "May 19", title: "Decoding the Digital Ego", guest: "Tech Ethics Board", status: "Post-Production" },
                      { date: "May 26", title: "Vedanta in the Age of AI", guest: "Sangha Members", status: "Scheduled" }
                    ].map((podcast, idx) => (
                      <div key={idx} className="flex gap-8 group/item">
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-black text-brand-gold leading-none">{podcast.date.split(' ')[1]}</span>
                          <span className="text-[10px] uppercase font-bold text-brand-gold/40">{podcast.date.split(' ')[0]}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-bold uppercase tracking-widest group-hover/item:text-brand-gold transition-colors">{podcast.title}</h4>
                          <p className="text-brand-cream/40 text-sm font-light">With {podcast.guest}</p>
                          <div className="flex items-center gap-2 pt-2">
                            <span className="w-1 h-1 rounded-full bg-brand-gold" />
                            <span className="text-[9px] uppercase tracking-widest font-black text-white/20">{podcast.status}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <button 
                      onClick={() => setIsRegisteredPodcast(true)}
                      className="w-full mt-12 bg-white/5 border border-white/10 hover:bg-brand-gold text-white p-6 rounded-3xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 group"
                    >
                      Remind Me <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          {/* Events & Symposiums Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-12 md:p-16 border border-brand-border shadow-2xl flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Calendar className="w-48 h-48 -rotate-12" />
            </div>
            <div className="space-y-12 relative z-10 flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-brand-gold" />
                  <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black">Live Symposiums</span>
                </div>
                <h2 className="text-5xl italic font-serif tracking-tighter">Upcoming Events</h2>
              </div>

              <div className="space-y-12 flex-1">
                {isRegisteredEvent ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
                  >
                    <div className="w-16 h-16 bg-brand-charcoal text-brand-gold rounded-full flex items-center justify-center shadow-lg">
                        <MessageSquare className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-3xl font-serif italic text-brand-charcoal">Invitation Extended</h3>
                        <p className="text-brand-gray font-light">Thank you for joining the WPF Sangha. Access details will be sent to your registered channel.</p>
                    </div>
                    <button 
                      onClick={() => setIsRegisteredEvent(false)}
                      className="text-[10px] uppercase tracking-widest font-black text-brand-gold border-b border-brand-gold pb-1"
                    >
                      Register for another event
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {[
                      { type: "Digital", title: "Modern Anxiety & Ancient Logic", location: "Global Zoom Sangha", time: "May 15, 18:00 IST" },
                      { type: "Physical", title: "Rishikesh Silent Retreat", location: "WPF Ashram Site", time: "June 01 - June 07" }
                    ].map((event, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="px-3 py-1 bg-brand-beige text-brand-gold text-[9px] font-black uppercase tracking-widest rounded-lg">{event.type}</span>
                          <span className="text-brand-gray/40 text-[10px] font-black uppercase tracking-widest">{event.time}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-serif italic text-brand-charcoal">{event.title}</h4>
                          <div className="flex items-center gap-2 text-brand-gray/60 italic text-sm">
                            <Globe className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                    ))}
                    <button 
                      onClick={() => setIsRegisteredEvent(true)}
                      className="w-full mt-12 bg-brand-charcoal hover:bg-brand-gold text-white p-6 rounded-3xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-3 shadow-xl"
                    >
                      Register for Access <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* WPF Magazines Section */}
        <div className="space-y-16 mb-40">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-brand-charcoal/10 pb-12 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand-gold" />
                <span className="text-brand-gold font-black uppercase tracking-[0.3em] text-[10px]">Deep Inquiry Series</span>
              </div>
              <h2 className="text-6xl md:text-7xl italic font-serif tracking-tighter">WPF Monthly</h2>
            </div>
            <p className="text-brand-gray max-w-sm font-light text-lg leading-relaxed italic opacity-80">"Reading as a form of meditation. Words as a bridge to the Wordless."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MAGAZINES.map((mag, idx) => (
              <motion.div 
                key={mag.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-white/40 backdrop-blur-sm border border-brand-border rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all h-full hover:bg-white"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img src={mag.image} alt={mag.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full border border-brand-border">
                    <span className="text-[9px] font-black uppercase tracking-widest text-brand-charcoal">{mag.issue}</span>
                  </div>
                </div>
                <div className="p-10 space-y-6 flex-1 flex flex-col">
                  <div className="space-y-3">
                    <p className="text-[10px] text-brand-gold uppercase tracking-[0.25em] font-black">{mag.date}</p>
                    <h3 className="text-2xl italic font-serif leading-tight group-hover:text-brand-gold transition-colors">{mag.title}</h3>
                  </div>
                  <p className="text-brand-gray text-sm leading-relaxed font-light line-clamp-3">
                    {mag.description}
                  </p>
                  <button 
                    onClick={() => setSelectedMagazine(mag)}
                    className="w-full mt-auto bg-brand-charcoal text-white py-5 rounded-3xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 group-hover:bg-brand-gold shadow-lg"
                  >
                    Open Edition <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Magazine Detail Modal */}
      <AnimatePresence>
        {selectedMagazine && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMagazine(null)}
              className="absolute inset-0 bg-brand-charcoal/98 backdrop-blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-6xl bg-brand-cream rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh] border border-white/10"
            >
              <button 
                onClick={() => setSelectedMagazine(null)}
                className="absolute top-10 right-10 z-30 p-4 bg-brand-charcoal text-white rounded-full hover:bg-brand-gold transition-all shadow-2xl group hover:rotate-90"
              >
                <XIcon className="w-6 h-6" /> 
              </button>

              {/* Modal Left: Image/Cover */}
              <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative group/modal-img">
                <img src={selectedMagazine.image} alt={selectedMagazine.title} className="w-full h-full object-cover grayscale group-hover/modal-img:grayscale-0 transition-all duration-1000 scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Issue Content</p>
                    <BookOpen className="w-4 h-4 text-brand-gold" />
                  </div>
                  <p className="text-white text-3xl font-serif italic tracking-tight">{selectedMagazine.issue}</p>
                </div>
              </div>

              {/* Modal Right: Content */}
              <div className="lg:w-1/2 p-12 md:p-20 overflow-y-auto custom-scrollbar bg-white/40 backdrop-blur-md">
                <div className="space-y-12 max-w-xl mx-auto">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-brand-gold" />
                      <span className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black">{selectedMagazine.date}</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-serif italic text-brand-charcoal leading-[1] tracking-tighter">{selectedMagazine.title}</h2>
                  </div>

                  <div className="space-y-8">
                    <p className="text-brand-charcoal/80 leading-relaxed text-xl font-light">
                      {selectedMagazine.description}
                    </p>
                    
                    <div className="bg-brand-beige/40 p-10 rounded-[2.5rem] border border-brand-charcoal/5 space-y-6">
                      <div className="flex items-center gap-3">
                        <ScrollText className="w-4 h-4 text-brand-gold" />
                        <h4 className="font-black uppercase tracking-[0.3em] text-[10px] text-brand-gold">Inside This Edition</h4>
                      </div>
                      <pre className="text-brand-charcoal/70 text-sm font-sans whitespace-pre-wrap leading-relaxed italic">
                        {selectedMagazine.content}
                      </pre>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-brand-charcoal text-white py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-gold transition-all shadow-xl group">
                      Read Fully <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 bg-white border border-brand-charcoal/10 text-brand-charcoal py-6 rounded-3xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-charcoal hover:text-white transition-all shadow-lg flex items-center justify-center gap-2">
                       Metadata <Info className="w-4 h-4" />
                    </button>
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

