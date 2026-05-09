import React, { useState } from 'react';
import { Mail, MessageSquare, Phone, Globe, Send, X, CreditCard, Sparkles, Youtube, Instagram, Twitter, Facebook, AtSign, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="pt-32 bg-brand-cream min-h-screen relative overflow-hidden">
      {/* Background with same image as Home */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2600&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-10 filter grayscale contrast-110"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#EBE5D9] via-[#F2EBE1]/95 to-brand-beige/60" />
      </div>

      <section className="px-6 max-w-7xl mx-auto pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-12">
                <div className="space-y-6">
                    <h1 className="text-5xl md:text-7xl italic leading-tight">Connect with <br /> WPF</h1>
                    <p className="text-brand-gray text-xl font-light leading-relaxed max-w-md">Whether you are a scholar, a student, or a seeker—we welcome your inquiry.</p>
                </div>

                <div className="space-y-8">
                    {[
                        { icon: Mail, label: 'Email', value: 'wpf2025@gmail.com' },
                        { icon: Phone, label: 'Contact', value: '+91 9532902471' },
                        { icon: Globe, label: 'Place', value: 'Lucknow, Uttar Pradesh, India' }
                    ].map((item) => (
                        <div key={item.label} className="flex gap-6 items-center">
                            <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-gold">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold/60">{item.label}</p>
                                <p className="text-lg font-serif italic text-brand-charcoal">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="pt-12 space-y-6">
                    <p className="text-[10px] uppercase tracking-widest font-black text-brand-gold">Digital Channels</p>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { icon: Youtube, href: 'https://youtube.com/@wpf-philosophy', label: 'YouTube' },
                            { icon: Instagram, href: 'https://instagram.com/wp_foundation', label: 'Instagram' },
                            { icon: Twitter, href: 'https://twitter.com/wp_foundation', label: 'X (Twitter)' },
                            { icon: Facebook, href: 'https://facebook.com/wp_foundation', label: 'Facebook' },
                            { icon: AtSign, href: 'https://threads.net/@wp_foundation', label: 'Threads' },
                            { icon: MessageCircle, href: 'https://chat.whatsapp.com/wpf-group', label: 'WhatsApp' }
                        ].map((social) => (
                            <a 
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-white border border-brand-light-gray rounded-2xl flex items-center justify-center text-brand-charcoal hover:text-brand-gold hover:border-brand-gold transition-all"
                                title={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-brand-ivory p-10 md:p-16 rounded-[3rem] shadow-sm border border-brand-light-gray">
                {submitted ? (
                    <div className="h-full flex flex-col items-center justify-center py-20 text-center space-y-8">
                        <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center shadow-xl">
                            <Send className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-4xl italic font-serif text-brand-charcoal">Thank You.</h2>
                            <p className="text-brand-gray font-light max-w-xs mx-auto">Your inquiry has been received. WPF will respond as soon as possible.</p>
                        </div>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="text-brand-gold font-bold uppercase tracking-widest text-[10px] border-b border-brand-gold pb-1"
                        >
                            Send another inquiry
                        </button>
                    </div>
                ) : (
                    <form 
                        className="space-y-8"
                        onSubmit={(e) => {
                            e.preventDefault();
                            setSubmitted(true);
                        }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray">Full Name</label>
                                <input required type="text" className="w-full bg-white border-b border-brand-light-gray py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="Dharma Patil" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray">Email Address</label>
                                <input required type="email" className="w-full bg-white border-b border-brand-light-gray py-3 focus:outline-none focus:border-brand-gold transition-colors" placeholder="dharma@seeker.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray">Subject of Inquiry</label>
                                <select className="w-full bg-white border-b border-brand-light-gray py-3 focus:outline-none focus:border-brand-gold transition-colors appearance-none">
                                    <option>General Inquiry</option>
                                    <option>Join as Fellow</option>
                                    <option>Campus Chapter Request</option>
                                    <option>Collaboration / Research</option>
                                    <option>Media Request</option>
                                </select>
                        </div>
                        <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-brand-gray">Your Inquiry</label>
                                <textarea required rows={5} className="w-full bg-white border-b border-brand-light-gray py-3 focus:outline-none focus:border-brand-gold transition-colors resize-none" placeholder="What is on your mind?"></textarea>
                        </div>
                        <button type="submit" className="flex items-center gap-3 bg-brand-charcoal text-brand-cream px-12 py-5 rounded-full font-medium hover:bg-brand-gold transition-colors group">
                            Send Inquiry <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </form>
                )}
            </div>
        </div>
        
        {/* Financial Support Section */}
        <div className="mt-32 border-t border-brand-charcoal/10 pt-20">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-black">Support the Quest</span>
                    <h2 className="text-4xl md:text-6xl italic font-serif text-brand-charcoal">Financial Inquiries</h2>
                    <p className="text-brand-gray text-xl font-light leading-relaxed">
                        WPF is a non-profit foundation. Your support allows us to keep philosophical inquiry alive and accessible globally.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Project Fellowship', desc: 'Support research students studying ancient logic and modern ethics.' },
                        { title: 'Digital Archive', desc: 'Maintain and expand the global knowledge repository for seekers.' },
                        { title: 'Campus Outreach', desc: 'Support the establishment of philosophical chapters in universities.' }
                    ].map((item) => (
                        <div key={item.title} className="p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-brand-border space-y-4">
                            <h4 className="font-bold text-brand-charcoal uppercase tracking-widest text-xs">{item.title}</h4>
                            <p className="text-sm text-brand-gray/80 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-brand-charcoal rounded-[3rem] text-brand-cream border border-white/10 shadow-2xl">
                    <div className="text-left px-4">
                        <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Direct Contributions</p>
                        <p className="text-xl font-serif italic text-brand-gold">Become a Patron of Wisdom</p>
                    </div>
                    <button 
                      onClick={() => setShowQRCode(true)}
                      className="bg-brand-gold text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-brand-cream hover:text-brand-charcoal transition-all"
                    >
                        Provide Financial Support
                    </button>
                    <p className="text-[10px] opacity-30 italic max-w-[150px] leading-relaxed">Secure contribution gateway for the WPF Archive.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Payment QR Modal */}
      <AnimatePresence>
        {showQRCode && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQRCode(false)}
              className="absolute inset-0 bg-brand-charcoal/90 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[4rem] overflow-hidden shadow-2xl p-12 text-center space-y-8 border border-white/10"
            >
              <button 
                onClick={() => setShowQRCode(false)}
                className="absolute top-8 right-8 p-3 bg-brand-cream rounded-full hover:bg-brand-gold hover:text-white transition-all group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-3xl font-serif italic text-brand-charcoal">Patron Inquiry</h3>
                <p className="text-brand-gray font-light">Scan the official WPF inquiry code below to provide your financial support.</p>
              </div>

              <div className="relative mx-auto w-64 h-64 bg-white p-4 rounded-3xl border-2 border-brand-beige shadow-inner flex items-center justify-center overflow-hidden group/qr">
                <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=WPF-SUPPORT-INQUIRY-2025" 
                    alt="WPF Payment QR Code" 
                    className="w-full h-full grayscale group-hover/qr:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[12px] border-white pointer-events-none" />
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-center gap-2 text-brand-gold">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Secure Support Channel</span>
                </div>
                <p className="text-[11px] text-brand-gray/60 italic leading-relaxed">
                    All support is directly funneled into the WPF Global Archive and Fellowship programs.
                </p>
              </div>

              <div className="pt-6 border-t border-brand-beige">
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-brand-gray opacity-40">Transaction ID: WPF-Q4-2026</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
