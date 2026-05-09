import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Youtube, Instagram, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATEGORIES, BOOKS, ARTICLES, RECOMMENDED_BOOK_IDS } from '../data/mockData';

const SMART_PICK_DESC: Record<string, string> = {
  'vedanta-7': 'A foundational manual for life, teaching the art of action without attachment and finding clarity in the midst of duty.',
  'upa-6': 'The peak of Vedic wisdom, these texts offer direct pointers to the ultimate truth of the self and the universe.',
  'vedanta-1': 'A groundbreaking modern interpretation that bridges the gap between ancient metaphysics and the latest quantum theories.',
  'buddha-3': 'A radical deconstruction of our psychological conditioning, offering a path to true freedom beyond mental patterns.',
  'stoic-6': 'Timeless reflections on virtue, mortality, and the Inner Citadel from a Roman Emperor navigating immense responsibility.',
  'ethics-8': 'A critical inquiry into the pillars of a just society and the ethical frameworks that govern human interaction.',
  'conscious-6': 'A modern classic on presence, teaching how to transcend the noise of the conceptual mind and reside in the now.',
  'conscious-7': 'A rigorous synthesis of scientific understanding and meditative insight, exploring spirituality without borders.',
  'buddha-6': 'Succinct and powerful verses that capture the essence of the Buddhist path to enlightenment and peace.',
  'impact-1': 'A profound testament to the human spirit\'s ability to find meaning and purpose even in the most dire circumstances.'
};

interface PhilosophyCardProps {
  title: string;
  quote: string;
  author: string;
  content: string;
}

function PhilosophyCard({ title, quote, author, content }: PhilosophyCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="bg-white border border-brand-border rounded-[2.5rem] p-12 hover:shadow-xl transition-all h-fit group">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 space-y-6">
          <h3 className="text-3xl font-serif italic text-brand-charcoal group-hover:text-brand-gold transition-colors">{title}</h3>
          <div className="space-y-2 pt-4 border-t border-brand-light-gray">
            <p className="text-sm italic font-serif text-brand-gold font-medium">{quote}</p>
            <span className="text-[10px] uppercase tracking-widest block opacity-80 font-bold">— {author}</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group/btn flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-brand-charcoal hover:text-brand-gold transition-colors"
          >
            {isOpen ? 'Close Explorer' : 'Read Full Context'}
            <ArrowRight className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-90' : 'group-hover/btn:translate-x-1'}`} />
          </button>
        </div>
        <div className={`md:w-2/3 ${isOpen ? '' : 'line-clamp-6 md:line-clamp-none'} relative`}>
            <p className="text-brand-charcoal leading-relaxed font-normal text-sm md:text-base">
                {content}
            </p>
            {!isOpen && (
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent md:hidden" />
            )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [subscribed, setSubscribed] = React.useState(false);
  const [selectedArticle, setSelectedArticle] = React.useState<any>(null);

  const recommendedBooks = RECOMMENDED_BOOK_IDS.map(id => BOOKS.find(b => b.id === id)).filter(Boolean);

  return (
    <div className="bg-brand-cream">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2600&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-20 filter grayscale contrast-110"
            alt="Philosophy Archives"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EBE5D9] via-[#F2EBE1]/90 to-brand-beige/40" />
          
          {/* Mixed Color Background Accents (Subtle Glows) */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-40">
            <div className="absolute top-[-5%] right-[5%] w-[35%] h-[35%] bg-amber-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-orange-500/10 rounded-full blur-[120px]" />
            <div className="absolute top-[30%] left-[-5%] w-[25%] h-[25%] bg-brand-gold/10 rounded-full blur-[100px]" />
          </div>
        </div>

        <div className="relative z-10 max-w-6xl w-full px-4 md:px-12 flex flex-col lg:flex-row justify-between items-start gap-20">
          <div className="max-w-2xl text-left space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex gap-2">
                <div className="w-8 h-[2px] bg-brand-gold/40" />
                <div className="w-8 h-[2px] bg-brand-gold" />
                <div className="w-8 h-[2px] bg-brand-gold/40" />
              </div>
              <h1 className="text-5xl md:text-[84px] font-serif leading-[1.05] text-brand-charcoal">
                Reviving Wisdom <br className="hidden md:block" />for the <span className="italic">Modern World.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-black font-medium max-w-lg leading-relaxed"
            >
              Indian Darshan, Buddhist thought, and modern inquiry. Bringing clarity to the digital age.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link 
                to="/library"
                className="bg-brand-gold text-white px-10 py-5 text-[11px] uppercase tracking-widest font-semibold hover:bg-brand-charcoal transition-all text-center"
              >
                Explore Philosophy
              </Link>
              <Link 
                to="/media"
                className="border border-brand-border px-10 py-5 text-[11px] uppercase tracking-widest font-semibold hover:bg-white transition-all text-center"
              >
                Watch Archive
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex flex-col justify-start max-w-sm pt-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="border-l-4 border-brand-gold/30 pl-8 py-4"
            >
              <p className="font-serif italic text-2xl leading-relaxed text-brand-charcoal/90">
                "The highest function of education is to bring about an integrated individual who is capable of dealing with life as a whole."
              </p>
              <span className="text-[10px] uppercase tracking-widest mt-6 block font-black text-brand-gold">— Jiddu Krishnamurti</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Categories (Refined) */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-black">The Knowledge Hub</span>
            <h2 className="text-4xl md:text-5xl italic font-serif font-black text-black">The Gates of Wisdom</h2>
          </div>
          <Link to="/library" className="group flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold border-b border-brand-charcoal pb-1">
            Browse All Pathways
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="space-y-16">
          <PhilosophyCard 
            title="Indian Philosophy"
            quote=' "Arise, awake, and stop not till the goal is reached." '
            author="Swami Vivekananda"
            content="Indian philosophy, or Darshana, is a vast and ancient tradition that seeks to understand the nature of reality, the self, and the path to liberation. It is characterized by its diversity, ranging from the non-dualistic wisdom of Advaita Vedanta to the dualistic realism of Sankhya and the rigorous logic of Nyaya. Unlike Western philosophy, which often emphasizes detached intellectual inquiry, Indian philosophy is deeply integrated with life and practice. It provides a roadmap for internal transformation, aiming to alleviate the fundamental suffering of human existence through the realization of the Atman or the underlying consciousness. The Upanishads serve as the foundational texts, offering profound insights into the unity of all existence. Through centuries of debate and refinement, Indian thinkers have explored epistemology, metaphysics, and ethics with unparalleled depth. Today, these ancient teachings offer a crucial counter-narrative to modern nihilism, providing a framework for finding meaning and clarity in an increasingly complex and chaotic world."
          />
          <PhilosophyCard 
            title="Western Philosophy"
            quote=' "The unexamined life is not worth living." '
            author="Socrates"
            content="Western philosophy began with the Socratic inquiry into the nature of the good life and the structure of the cosmos. From the dialogues of Plato and the systematic logic of Aristotle, it evolved through the Stoic emphasis on virtue and control to the Enlightenment focus on reason and individual liberty. It is a tradition marked by constant self-critique and the testing of assumptions. Whether it is the existentialist struggle with meaning in the work of Nietzsche and Sartre or the analytical precision of contemporary thinkers, Western philosophy challenges us to justify our beliefs and examine the foundations of our knowledge. It has shaped modern science, democratic governance, and our understanding of human rights. By engaging with this tradition, we learn the art of critical thinking and the value of clear communication. It is a dialogue that spans millennia, inviting each generation to contribute to the ongoing quest for understanding what it means to be a rational being in a material universe."
          />
          <PhilosophyCard 
            title="Modern Philosophy (WPF)"
            quote=' "In a world of noise, silence is the greatest rebellion." '
            author="WPF"
            content="Modern Philosophy at the World Philosophical Foundation (WPF) represents a synthesis of ancient wisdom and contemporary reality. In an age dominated by rapid technological advancement and digital noise, we ask: what does it mean to be conscious? How do ancient ethical frameworks apply to social algorithms and artificial intelligence? WPF moves beyond mere academic study to a practical 'Tech with Philosophy' approach. We believe that the digital age requires a new kind of literacy—one that is both technically proficient and philosophically grounded. By merging the inward-looking tools of Vedantic and Buddhist psychology with the outward-looking methods of modern science, we aim to build a future where technology serves our highest potential rather than our lowest instincts. It is about reclaiming our attention, understanding our conditioning, and living with integrity in a hyper-connected world. Our work is an invitation to examine the 'Digital Mind' and discover the silence that exists beyond the pulse of the network."
          />
        </div>
      </section>

      {/* Acharya Prashant Quote Section */}
      <section className="bg-brand-beige py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="w-16 h-[1px] bg-brand-gold mx-auto" />
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-charcoal leading-tight">
            "One does not have to calm the mind, one has to let the mind be calm."
          </h2>
          <p className="text-brand-gold font-medium tracking-[0.2em] uppercase text-sm">— Acharya Prashant</p>
          <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
            <div className="p-6 border-l border-brand-gold/30">
              <p className="text-sm italic font-serif">"Truth is one; sages call it by various names."</p>
              <span className="text-[10px] uppercase tracking-widest mt-2 block opacity-100 font-bold">— Rig Veda</span>
            </div>
            <div className="p-6 border-l border-brand-gold/30">
              <p className="text-sm italic font-serif">"That which is real is always existing; that which is unreal has no existence."</p>
              <span className="text-[10px] uppercase tracking-widest mt-2 block opacity-100 font-bold">— Adi Shankara</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Reading */}

      <section className="py-32 px-6 bg-brand-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center md:text-left space-y-4 mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">Curated Wisdom</span>
              <h2 className="text-4xl md:text-5xl italic font-serif">Deep Inquiries</h2>
              <p className="text-brand-gray text-lg max-w-xl font-light">Foundational reading for the modern seeker. Depth + Variety + Source Credibility.</p>
            </div>
            <Link to="/library" className="group flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold border-b border-brand-charcoal pb-1">
              Browse Full Library
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recommendedBooks.slice(0, 9).map((book) => (
              <Link 
                key={book.id} 
                to="/library" 
                className="group flex flex-col justify-between bg-white border border-brand-border p-12 rounded-[3rem] hover:border-brand-gold hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
              >
                {/* Visual Accent Strip */}
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-brand-gold transition-all duration-700" />
                
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-[2px] bg-brand-gold/30 group-hover:w-24 group-hover:bg-brand-gold transition-all duration-500" />
                    <span className="text-[9px] uppercase tracking-widest font-black text-brand-gold/40 group-hover:text-brand-gold transition-colors">
                      Smart Pick
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-serif italic text-brand-charcoal group-hover:text-brand-gold transition-colors leading-tight">{book.title}</h4>
                    <div className="space-y-3">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-gray/60">{book.author}</p>
                      <p className="text-sm text-brand-charcoal/70 font-light leading-relaxed">
                        {SMART_PICK_DESC[book.id] || book.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-brand-charcoal hover:text-brand-gold transition-colors mt-auto">
                  Examine Source <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid Preview */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
            <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl italic">WPF Articles</h2>
                <p className="text-brand-gray text-lg">Dispatches from the frontiers of philosophy.</p>
            </div>
            <Link to="/articles" className="hidden md:flex items-center gap-2 text-brand-gold font-medium">
                View Journal <ArrowRight className="w-5 h-5" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.slice(0, 3).map((article) => (
                <div 
                  key={article.id} 
                  onClick={() => setSelectedArticle(article)}
                  className="group flex flex-col aspect-square p-12 bg-white border border-brand-border rounded-[2.5rem] hover:shadow-2xl transition-all relative overflow-hidden cursor-pointer"
                >
                    {/* Minimalist Grid Pattern Background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                    
                    <div className="space-y-6 flex-1 relative z-10">
                        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                            <span className="px-3 py-1 bg-brand-beige rounded-md">{article.category}</span>
                            <span className="text-brand-gray opacity-50">{article.readTime}</span>
                        </div>
                        <h3 className="text-3xl font-serif italic leading-tight group-hover:text-brand-gold transition-colors">{article.title}</h3>
                        <p className="text-brand-gray font-light text-sm line-clamp-4 leading-relaxed">{article.excerpt}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-black border-b-2 border-brand-charcoal/20 group-hover:border-brand-gold pb-1 w-fit mt-auto transition-all relative z-10">
                      Enter Inquiry <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                </div>
            ))}
        </div>

        {/* Article Modal for Home */}
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-brand-charcoal/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="relative w-full max-w-4xl bg-brand-cream rounded-[3rem] overflow-hidden shadow-2xl max-h-[90vh] flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-brand-charcoal text-white rounded-full hover:bg-brand-gold transition-colors shadow-lg"
              >
                <X className="w-5 h-5" /> 
              </button>

              <div className="md:w-full p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">{selectedArticle.category} • {selectedArticle.date}</span>
                    <h2 className="text-4xl font-serif italic leading-tight text-brand-charcoal">{selectedArticle.title}</h2>
                    <p className="text-sm font-medium text-brand-gold">By {selectedArticle.author}</p>
                  </div>
                  <div className="prose prose-sm font-light text-brand-gray leading-relaxed whitespace-pre-wrap">
                    {selectedArticle.content}
                  </div>
                  <div className="pt-8">
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="w-full bg-brand-charcoal text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-brand-gold transition-all"
                    >
                      Close Inquiry
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </section>

      {/* Inquiry section */}
      <section className="py-32 px-6 bg-brand-charcoal overflow-hidden relative">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl italic font-serif text-brand-cream">Direct Inquiry</h2>
            <p className="text-brand-cream/60 max-w-lg mx-auto font-light">Join our dispatch list for deep-form essays, community gatherings, and philosophical tools.</p>
          </div>

          {subscribed ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[2rem] space-y-4"
            >
              <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="text-white w-6 h-6 -rotate-45" />
              </div>
              <h3 className="text-2xl font-serif italic text-brand-cream">Thank You.</h3>
              <p className="text-brand-cream/60 max-w-xs mx-auto text-sm">WPF will response as soon as possible.</p>
            </motion.div>
          ) : (
            <form 
              onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
              className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            >
              <input 
                type="email" 
                required
                placeholder="Enter your email to connect..."
                className="flex-1 bg-white/5 border border-white/10 px-8 py-5 text-brand-cream focus:outline-none focus:border-brand-gold transition-all' rounded-2xl"
              />
              <button 
                type="submit"
                className="bg-brand-gold text-white px-10 py-5 uppercase text-[11px] font-bold tracking-widest hover:bg-white hover:text-brand-charcoal transition-all rounded-2xl"
              >
                Summon Wisdom
              </button>
            </form>
          )}
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />
      </section>
    </div>
  );
}
