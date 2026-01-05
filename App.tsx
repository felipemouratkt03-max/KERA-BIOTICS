
import React, { useState, useEffect, useRef } from 'react';
import { 
  AlertTriangle, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ArrowRight,
  Droplets,
  Zap,
  Leaf
} from 'lucide-react';
import { COLORS, EXTERNAL_URL, TESTIMONIALS, FAQS, COMPARISON_DATA } from './constants';

const App: React.FC = () => {
  const [showSticky, setShowSticky] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowSticky(window.scrollY > heroBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      {/* 1. TOP BANNER */}
      <div className="bg-red-700 text-white py-2 px-4 text-center font-bold text-sm md:text-base flex items-center justify-center gap-2 sticky top-0 z-50">
        <AlertTriangle size={18} />
        URGENT HEALTH ALERT: New discovery reveals the true cause of toenail issues is NOT what you think.
      </div>

      {/* 2. HERO SECTION */}
      <header ref={heroRef} className="bg-[#1a365d] text-white py-16 md:py-24 px-6 text-center border-b-8 border-[#2f855a]">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-sans">
            The 3-Second "Shower Habit" That Starves Toenail Fungus From The Inside Out
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            A simple, unusual ritual discovered by accident in a remote Amazonian village is now helping thousands reclaim their confidence.
          </p>
          
          <div className="relative inline-block">
            <a 
              href={EXTERNAL_URL}
              className="bg-[#2f855a] hover:bg-[#276749] text-white px-8 md:px-12 py-5 rounded-full text-xl font-bold flex items-center gap-3 transition-all transform hover:scale-105 animate-pulse-custom shadow-2xl"
            >
              <Play fill="white" size={24} />
              WATCH THE VIDEO NOW
            </a>
            <p className="mt-4 text-xs text-slate-300 italic">
              *Full scientific breakdown inside
            </p>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* 3. THE NARRATIVE */}
        <section className="py-20 px-6 max-w-3xl mx-auto font-narrative leading-relaxed text-slate-800 text-lg">
          <p className="mb-12">
            Marcus had lived with it for <strong>12 long years</strong>. 
            The yellowing, the thickening, and that persistent smell that wouldn't go away no matter how many "doctor recommended" creams he used.
          </p>

          <p className="mb-12">
            It wasn't just about the feet; it was about the <strong>stolen moments</strong>. 
            He stopped wearing sandals at the beach, and even at home, he felt like he had to keep his socks on.
          </p>

          <blockquote className="border-l-4 border-[#2f855a] pl-6 py-6 italic text-slate-700 bg-slate-100/50 my-12 text-2xl">
            "I felt like a leper in my own home, afraid to even walk barefoot on the rug where my kids played."
          </blockquote>

          <p className="mb-12">
            He tried the pills, but they made him <strong>nauseous and dizzy</strong>. 
            He tried the expensive laser therapy, but the problem just kept crawling back three months later.
          </p>

          <p className="mb-12">
            Then, a chance trip to a <strong>remote village in the Amazon</strong> changed everything. 
            He met a local healer named Tupa who didn't look at Marcus’s feet with disgust, but with genuine pity.
          </p>

          <p className="mb-12">
            "You are feeding the beast from the inside," Tupa said. 
            He explained that <strong>microbiome imbalance</strong> was the true culprit, not the fungus itself.
          </p>

          <p className="mb-12">
            Tupa shared a <strong>3-second daily ritual</strong> involving three specific rare botanicals. 
            These plants don't just kill the surface issue; they starve the fungus by restoring the body's natural defenses.
          </p>

          <p className="mb-12">
            Within 14 days, the <strong>new nail growth</strong> was pink and clear. 
            The itch was gone, the odor had vanished, and for the first time in a decade, Marcus felt "whole" again.
          </p>
        </section>

        {/* 4. THE MECHANISM */}
        <section className="bg-slate-100 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">Microbiome vs Fungus: The Science</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Most treatments fail because they only scratch the surface. This is why our protocol works.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6">
                  <Droplets size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Deep Permeation</h3>
                <p className="text-slate-600">Specialized lipid carriers bypass the hardened nail plate to reach the root bed directly.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mb-6">
                  <Leaf size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Microbiome Balance</h3>
                <p className="text-slate-600">Amazonian nutrients encourage "good" bacteria that naturally eliminate fungal spores.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-full flex items-center justify-center mb-6">
                  <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">Cellular Armor</h3>
                <p className="text-slate-600">Strengthens the keratin matrix to prevent future spores from taking root.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. COMPARISON TABLE */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-12">Why This Is Different</h2>
          <div className="overflow-x-auto rounded-xl shadow-lg border border-slate-200">
            <table className="w-full text-left bg-white border-collapse">
              <thead className="bg-[#1a365d] text-white">
                <tr>
                  <th className="p-4 md:p-6 font-semibold uppercase text-xs md:text-sm tracking-wider">Feature</th>
                  <th className="p-4 md:p-6 font-semibold uppercase text-xs md:text-sm tracking-wider">Traditional Chemicals</th>
                  <th className="p-4 md:p-6 font-semibold uppercase text-xs md:text-sm tracking-wider">Natural Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 md:p-6 font-bold text-slate-700 text-sm md:text-base">{row.feature}</td>
                    <td className="p-4 md:p-6 text-slate-500 italic text-sm md:text-base">{row.traditional}</td>
                    <td className="p-4 md:p-6 text-[#2f855a] font-semibold flex items-center gap-2 text-sm md:text-base">
                      <CheckCircle2 size={18} className="flex-shrink-0" /> {row.protocol}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 6. SOCIAL PROOF */}
        <section className="bg-[#1a365d] py-20 px-6 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Results From Real Users</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20 text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#2f855a]" />
                    <div>
                      <h4 className="font-bold">{t.name}</h4>
                      <p className="text-sm text-slate-300">{t.location}</p>
                    </div>
                  </div>
                  <p className="italic text-slate-100 font-narrative">"{t.text}"</p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GUARANTEE */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto bg-white border-4 border-[#d4af37] p-8 md:p-12 rounded-3xl relative overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="flex-shrink-0 text-[#d4af37]">
                <ShieldCheck size={100} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1a365d] mb-4">60-Day Gold Seal Guarantee</h2>
                <p className="text-lg text-slate-700 mb-6 font-narrative">
                  Try the full protocol for 60 days. If you aren't completely thrilled with the appearance of your nails, we will refund every penny. No hassles, no questions.
                </p>
                <div className="text-sm font-bold uppercase tracking-widest text-[#d4af37]">
                  Risk-Free Trial • Verified Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-20 px-6 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a365d] mb-12">Questions? We Have Answers</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-lg text-slate-800">
                    {faq.question}
                    <ChevronDown className="group-open:-rotate-180 transition-transform duration-300" />
                  </summary>
                  <div className="mt-4 text-slate-600 leading-relaxed font-narrative">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FINAL CTA */}
        <section className="bg-[#fdfbf7] py-24 px-6 text-center border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a365d] mb-8">Ready to reclaim your healthy nails?</h2>
            <p className="text-xl text-slate-600 mb-12 font-narrative max-w-2xl mx-auto">
              Join thousands of others who used this simple ritual to get back on their feet with confidence.
            </p>
            <a 
              href={EXTERNAL_URL}
              className="inline-flex items-center gap-4 bg-[#2f855a] hover:bg-[#276749] text-white px-10 md:px-16 py-6 rounded-full text-2xl font-bold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              ACCESS THE VIDEO NOW
              <ArrowRight size={28} />
            </a>
            <p className="mt-8 text-slate-400 text-sm italic">
              *Hurry, this presentation may be removed soon.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center text-xs md:text-sm">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="mb-4">© 2024 KeraBiotics Health Protocol. All Rights Reserved.</p>
          <p className="leading-relaxed opacity-70">
            Disclaimer: These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>

      {/* Sticky CTA - Visible after hero */}
      <div className={`fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 transition-all duration-500 transform z-50 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] ${showSticky ? 'translate-y-0' : 'translate-y-full opacity-0'}`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left hidden md:block">
            <p className="text-[#1a365d] font-bold text-lg">Watch the Amazonian Ritual Presentation</p>
            <p className="text-slate-500 text-sm">See the results Marcus achieved in 14 days.</p>
          </div>
          <a 
            href={EXTERNAL_URL}
            className="w-full md:w-auto bg-[#2f855a] hover:bg-[#276749] text-white px-8 py-3 rounded-full font-bold text-lg text-center flex items-center justify-center gap-2 shadow-lg"
          >
            WATCH VIDEO
            <Play fill="white" size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
