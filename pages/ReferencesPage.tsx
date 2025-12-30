import React from 'react';
import SEO from '../components/SEO';
import { Building2 } from 'lucide-react';
import { REFERENCE_DATA } from '../data/references';

const ReferencesPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Referenzen" description="Vertrauen ist der beste Beweis. Sehen Sie sich unsere Projekte für Audi, Daimler, Porsche und weitere Kunden an." url="https://asegmbh.netlify.app/referenzen" />

            {/* Header */}
            <div className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-brand-900/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
                        Referenzen
                    </span>
                    <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-manrope">
                        Vertrauen ist der <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">beste Beweis.</span>
                    </h1>
                    <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Seit über 30 Jahren realisieren wir Projekte für die führenden Namen der Automobilindustrie und des Anlagenbaus.
                    </p>
                </div>
            </div>

            {/* Detailed Project List */}
            <section className="py-24 animate-fade-slide-in opacity-0 [animation-delay:400ms]">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid gap-12">
                        {REFERENCE_DATA.map((clientItem, index) => (
                            <div key={index} className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl p-8 hover:border-brand-500/30 transition-all duration-300">

                                <div className="relative z-10">
                                    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-6 mb-8">
                                        <h2 className="text-2xl font-bold text-white">
                                            {clientItem.name}
                                        </h2>
                                        <div className="h-16 w-32 bg-white rounded-lg p-2 flex items-center justify-center shrink-0 shadow-lg md:self-start">
                                            <img
                                                src={clientItem.logo}
                                                alt={clientItem.name}
                                                className="max-h-full max-w-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        {clientItem.projects.map((project, pIndex) => (
                                            <div key={pIndex} className="pl-6 border-l-2 border-white/10 group-hover:border-brand-500/50 transition-colors">
                                                <h3 className="text-lg font-semibold text-brand-100 mb-3">
                                                    {project.title}
                                                </h3>
                                                <ul className="space-y-2">
                                                    {project.details.map((detail, dIndex) => (
                                                        <li key={dIndex} className="text-slate-400 text-sm flex items-start gap-2">
                                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500 shrink-0"></span>
                                                            <span className="leading-relaxed">{detail}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hint about full list */}
                    <div className="mt-16 text-center">
                        <p className="text-slate-500 mb-6">
                            Dies ist ein Auszug aus unserer Projektliste. Eine vollständige Referenzliste stellen wir Ihnen gerne auf Anfrage zur Verfügung.
                        </p>
                        <a
                            href="mailto:info@ase-gmbh.de"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium"
                        >
                            Vollständige Referenzliste anfordern
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReferencesPage;
