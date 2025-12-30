import React from 'react';
import { ShieldCheck, FileCheck, ArrowRight } from 'lucide-react';

const Certifications: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="qualität" className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-900 to-black pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-16 tracking-tight">Geprüfte Qualität & Sicherheit.</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          {/* Card 1 */}
          <div className="flex-1 max-w-md mx-auto group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-1 rounded-3xl hover:border-brand-500/50 transition-all duration-300">
            <div className="bg-black/80 backdrop-blur-xl rounded-[20px] p-8 h-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mb-6 shadow-inner border border-white/5">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">ISO 9001</h3>
              <p className="text-slate-400 text-sm mb-6">Qualitätsmanagement</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Unsere Prozesse sind klar strukturiert, transparent und auf kontinuierliche Verbesserung ausgerichtet.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 max-w-md mx-auto group bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-1 rounded-3xl hover:border-blue-500/50 transition-all duration-300">
            <div className="bg-black/80 backdrop-blur-xl rounded-[20px] p-8 h-full flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center mb-6 shadow-inner border border-white/5">
                <FileCheck className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">WHG Fachbetrieb</h3>
              <p className="text-slate-400 text-sm mb-6">Nach Wasserhaushaltsgesetz</p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Zugelassen und zertifiziert für Arbeiten an Anlagen mit wassergefährdenden Stoffen.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <button onClick={scrollToContact} className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
            Qualität nachweisen lassen
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;