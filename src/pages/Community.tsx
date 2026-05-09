import React from 'react';
import { motion } from 'motion/react';
import { Users, BookOpen, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function Community() {
  const [subscribed, setSubscribed] = React.useState(false);

  const [reviewSubmitted, setReviewSubmitted] = React.useState(false);

  const mockReviews = [
    { name: "Julian Voss", date: "2 days ago", rating: 5, text: "The depth of inquiry here is unparalleled. WPF has completely changed my perspective on asychronous living." },
    { name: "Sarah Chen", date: "1 week ago", rating: 5, text: "Beautifully curated content. The focus on stillness in a fast world is exactly what I needed." },
    { name: "Marcus Thorne", date: "2 weeks ago", rating: 4, text: "Excellent archives. The technical frameworks for mindfulness are practical and effective." }
  ];

  return (
    <div className="pt-32 bg-brand-cream min-h-screen">
      <section className="px-6 max-w-7xl mx-auto pb-20 text-center space-y-12">
        <h1 className="text-5xl md:text-7xl italic">Belong to the Inquiry</h1>
        <div className="max-w-xl mx-auto space-y-6">
            <p className="text-brand-gray text-xl font-light">WPF is not just a library; it's a global movement of thinkers and seekers.</p>
            
            {subscribed ? (
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-brand-gold/10 border border-brand-gold/20 rounded-[2rem] p-8"
                >
                    <h3 className="text-2xl font-serif italic text-brand-charcoal">Thank you for becoming a WPF member.</h3>
                    <p className="text-brand-gray text-sm mt-2">Check your email for instructions on how to access our private archives and discussion circles.</p>
                </motion.div>
            ) : (
                <form 
                    className="flex flex-col sm:flex-row gap-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                        setSubscribed(true);
                    }}
                >
                    <input 
                        type="email" 
                        placeholder="Enter your email to join" 
                        className="flex-1 bg-brand-ivory border border-brand-border rounded-full py-4 px-8 text-brand-charcoal focus:outline-none focus:border-brand-gold transition-colors"
                        required
                    />
                    <button type="submit" className="bg-brand-charcoal text-brand-cream px-10 py-4 rounded-full font-medium hover:bg-brand-gold transition-colors">
                        Become a Member
                    </button>
                </form>
            )}
            <p className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">Join 5000+ members worldwide</p>
        </div>
      </section>

      {/* Tiers / Involvement */}
      <section className="px-6 max-w-7xl mx-auto py-20 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                  { icon: Users, title: 'Discussion Circles', text: 'Small, local groups meeting monthly to discuss foundational texts.' },
                  { icon: MapPin, title: 'Campus Chapters', text: 'Institutional partnerships designed for student-led inquiry.' },
                  { icon: BookOpen, title: 'Study Fellows', text: 'Rigorous guided study programs for serious philosophical work.' },
                  { icon: Sparkles, title: 'Volunteer', text: 'Help us translate, organize, and spread civilizational wisdom.' }
              ].map((item) => (
                  <div key={item.title} className="bg-brand-ivory p-10 rounded-[2.5rem] space-y-6 shadow-sm hover:shadow-xl transition-shadow group cursor-default">
                      <div className="w-14 h-14 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl italic leading-tight">{item.title}</h3>
                      <p className="text-sm text-brand-gray font-light leading-relaxed">{item.text}</p>
                      <button className="flex items-center gap-2 text-brand-gold font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn More <ArrowRight className="w-3 h-3" />
                      </button>
                  </div>
              ))}
          </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-32 px-6 bg-brand-charcoal text-brand-cream rounded-[4rem] mx-6 mb-32 overflow-hidden border border-white/5 shadow-2xl">
          <div className="max-w-7xl mx-auto space-y-20">
              <div className="text-center space-y-4">
                  <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px]">Voices of Seeker</span>
                  <h2 className="text-5xl md:text-7xl italic font-serif leading-none">Seeker Feedback</h2>
                  <div className="flex items-center justify-center gap-2 mt-4 text-brand-gold">
                      {[1,2,3,4,5].map(i => (
                          <Sparkles key={i} className="w-5 h-5 fill-current" />
                      ))}
                      <span className="ml-2 text-brand-cream font-medium">4.9/5 based on 200+ Google Reviews</span>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {mockReviews.map((review, idx) => (
                      <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/10 space-y-4">
                          <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-black uppercase text-xs">
                                  {review.name[0]}
                              </div>
                              <div>
                                  <h4 className="font-serif italic text-lg leading-none">{review.name}</h4>
                                  <p className="text-[10px] uppercase text-brand-cream/40 mt-1">{review.date}</p>
                              </div>
                          </div>
                          <div className="flex gap-1 text-brand-gold">
                              {Array.from({length: review.rating}).map((_, i) => (
                                  <Sparkles key={i} className="w-3 h-3 fill-current" />
                              ))}
                          </div>
                          <p className="text-brand-cream/70 font-light text-sm leading-relaxed italic">
                              "{review.text}"
                          </p>
                      </div>
                  ))}
              </div>

              <div className="max-w-2xl mx-auto pt-10 border-t border-white/10">
                  <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 space-y-8">
                      {reviewSubmitted ? (
                          <motion.div 
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="text-center space-y-4"
                          >
                              <div className="w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                                  <Sparkles className="w-10 h-10 text-brand-charcoal" />
                              </div>
                              <h3 className="text-4xl italic font-serif">Thank You for Your Voice.</h3>
                              <p className="text-brand-cream/60 font-light">Your review has been captured in our digital archives. We appreciate your contribution to the Sangha.</p>
                          </motion.div>
                      ) : (
                          <div className="space-y-8">
                              <div className="text-center space-y-2">
                                  <h3 className="text-3xl italic font-serif">Share Your Experience</h3>
                                  <p className="text-brand-cream/50 text-sm font-light">Help other seekers find their path by sharing your thoughts.</p>
                              </div>
                              <form 
                                  className="space-y-6"
                                  onSubmit={(e) => {
                                      e.preventDefault();
                                      setReviewSubmitted(true);
                                  }}
                              >
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <input 
                                          type="text" 
                                          placeholder="Full Name" 
                                          className="bg-white/10 border border-white/10 rounded-2xl py-4 px-6 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-cream/20"
                                          required
                                      />
                                      <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl py-4 px-6">
                                          <span className="text-brand-cream/40 text-sm font-light">Rating:</span>
                                          <div className="flex gap-2">
                                              {[1,2,3,4,5].map(i => (
                                                  <button type="button" key={i} className="text-brand-gold hover:scale-125 transition-transform"><Sparkles className="w-5 h-5 fill-current" /></button>
                                              ))}
                                          </div>
                                      </div>
                                  </div>
                                  <textarea 
                                      placeholder="Tell us how WPF has influenced your inquiry..." 
                                      className="w-full bg-white/10 border border-white/10 rounded-3xl py-4 px-6 text-brand-cream focus:outline-none focus:border-brand-gold transition-colors placeholder:text-brand-cream/20 h-32 resize-none"
                                      required
                                  ></textarea>
                                  <button type="submit" className="w-full bg-brand-gold text-brand-charcoal py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-cream transition-all shadow-xl">
                                      Submit My Review
                                  </button>
                              </form>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
}
