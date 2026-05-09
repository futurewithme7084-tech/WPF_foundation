import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, History, Heart, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 bg-brand-cream">
      {/* Header */}
      <section className="px-6 max-w-7xl mx-auto pb-20 text-center space-y-8">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-gold font-bold tracking-[0.2em] uppercase text-sm"
        >
          Our Purpose
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl italic leading-tight"
        >
          Reviving Wisdom for the <br className="hidden md:block" /> Modern World
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-brand-gray font-light max-w-2xl mx-auto leading-relaxed"
        >
          WPF is an intellectual sanctuary dedicated to bridging the gap between ancient Darshan and modern consciousness.
        </motion.p>
      </section>

      {/* Wisdom Repository */}
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <div className="bg-brand-charcoal text-brand-cream rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale"
              alt="Books Background"
            />
          </div>
          
          <div className="relative z-10 space-y-16">
            <div className="space-y-4">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Wisdom Repository</span>
              <h2 className="text-4xl md:text-5xl italic font-serif">Curated Masterpieces</h2>
              <p className="text-brand-cream/60 max-w-xl font-light">Essential reading for the modern seeker, bridging the gap between ancient clarity and modern complexity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Jiddu Krishnamurti Books */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale border border-brand-gold/30">
                    <img src="https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=200&auto=format&fit=crop" alt="Jiddu" />
                  </div>
                  <h3 className="text-2xl italic font-serif border-b border-brand-gold pb-1">Jiddu Krishnamurti</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'The First and Last Freedom', desc: 'A profound exploration of the nature of the self and the importance of observation.' },
                    { title: 'Freedom from the Known', desc: 'A radical approach to self-inquiry and psychological revolution.' },
                    { title: 'Think on These Things', desc: 'Reflections on the beauty and challenge of existence.' }
                  ].map((book) => (
                    <div key={book.title} className="group cursor-pointer">
                      <h4 className="text-brand-gold font-medium group-hover:text-white transition-colors">{book.title}</h4>
                      <p className="text-sm opacity-60 font-light mt-1">{book.desc}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="text-lg italic font-serif opacity-80 pl-6 border-l-2 border-brand-gold/40 py-2">
                  "Truth is a pathless land."
                </blockquote>
              </div>

              {/* Acharya Prashant Books */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden grayscale border border-brand-gold/30">
                    <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=200&auto=format&fit=crop" alt="Acharya" />
                  </div>
                  <h3 className="text-2xl italic font-serif border-b border-brand-gold pb-1">Acharya Prashant</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: 'The Beautiful Mind', desc: 'Understanding the mechanics of the mind to navigate modern suffering.' },
                    { title: 'Joy: 24 x 7', desc: 'A deep dive into the nature of true happiness and inner calm.' },
                    { title: 'The Gospel of Zen', desc: 'Interpreting Zen for the modern intellectual seeker.' }
                  ].map((book) => (
                    <div key={book.title} className="group cursor-pointer">
                      <h4 className="text-brand-gold font-medium group-hover:text-white transition-colors">{book.title}</h4>
                      <p className="text-sm opacity-60 font-light mt-1">{book.desc}</p>
                    </div>
                  ))}
                </div>
                <blockquote className="text-lg italic font-serif opacity-80 pl-6 border-l-2 border-brand-gold/40 py-2">
                  "Knowledge is not that which remains in memory; it is that which descends into conduct."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 max-w-7xl mx-auto py-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl italic">Our Mission</h2>
            <p className="text-lg text-brand-gray leading-relaxed font-light">
              To democratize deep philosophy, making it accessible, practical, and transformative. We believe that critical inquiry into the nature of self and society is the most urgent task of our time.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl italic">Our Vision</h2>
            <p className="text-lg text-brand-gray leading-relaxed font-light">
              A global community of thinkers who navigate life with clarity, compassion, and presence—informed by the best of human civilizational wisdom.
            </p>
          </div>
        </div>
        <div className="bg-brand-beige p-12 md:p-20 rounded-[3rem] space-y-12 border border-brand-border/50">
            <h3 className="text-3xl italic">Core Values</h3>
            <div className="space-y-8">
                {[
                    { icon: History, title: 'Preservation', text: 'Protecting and translating ancient knowledge for contemporary minds.' },
                    { icon: Target, title: 'Inquiry', text: 'Encouraging radical questioning and intellectual honesty.' },
                    { icon: Heart, title: 'Service', text: 'Philosophy that serves the well-being of all sentient beings.' },
                    { icon: Users, title: 'Dialogue', text: 'Creating spaces for calm, deep, and respectful intellectual exchange.' }
                ].map((val) => (
                    <div key={val.title} className="flex gap-6">
                        <div className="w-10 h-10 bg-brand-cream border border-brand-border rounded-xl flex items-center justify-center shrink-0">
                            <val.icon className="w-5 h-5 text-brand-gold" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-serif italic text-xl">{val.title}</h4>
                            <p className="text-sm text-brand-gray leading-relaxed">{val.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>


      {/* Founder Section - Atul Yadav */}
      <section className="py-32 px-6 max-w-5xl mx-auto border-t border-brand-border">
          <div className="text-center space-y-12">
              <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs">Our Founder</span>
              <h2 className="text-5xl md:text-7xl italic">Atul Yadav</h2>
              
              <div className="max-w-3xl mx-auto space-y-8">
                  <blockquote className="text-2xl md:text-4xl text-brand-charcoal/80 font-light leading-snug italic font-serif">
                    "My goal is to bring technology and philosophy together. We do not want a world where there is technology but no consciousness."
                  </blockquote>
                  
                  <div className="h-px w-20 bg-brand-gold mx-auto opacity-30"></div>
                  
                  <div className="text-brand-gray leading-relaxed font-light text-lg space-y-6">
                    <p>
                        Atul is a visionary thinker who believes that the next evolution of technology—AI, neural networks, and digital architecture—must be explicitly grounded in the ethical and psychological framework of Indian and Buddhist thought.
                    </p>
                    <p>
                        His mission at the World Philosophical Foundation is to champion <strong>"Tech with Philosophy"</strong>: a movement designed to ensure that as our tools become more powerful, our awareness becomes more profound.
                    </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Acharya Prashant Quote 2 */}
      <section className="py-20 bg-brand-charcoal text-brand-cream text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Calm" />
          </div>
          <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl italic font-serif opacity-90 max-w-3xl mx-auto px-6 leading-relaxed">
                "Knowledge is not that which remains in memory; knowledge is that which descends into conduct."
              </blockquote>
              <p className="text-brand-gold text-xs uppercase tracking-widest font-bold mt-6">— Acharya Prashant</p>
          </div>
      </section>
    </div>
  );
}
