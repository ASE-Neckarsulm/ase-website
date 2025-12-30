import React from 'react';

const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "ISO 9001", label: "& WHG Zertifiziert" },
  { value: "30+", label: "Mitarbeiter" },
  { value: "Neckarsulm", label: "& Rastatt" }
];

const TrustBar: React.FC = () => {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-10 shadow-2xl bg-black/40 border border-white/10 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2">
                <div className="text-xl md:text-3xl font-bold text-white mb-1 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Use logos visually, but we ensure social proof is clear */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-lg font-bold text-white flex items-center gap-2">Audi</span>
            <span className="text-lg font-bold text-white flex items-center gap-2">Porsche</span>
            <span className="text-lg font-bold text-white flex items-center gap-2">Daimler</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;