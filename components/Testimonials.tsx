import React, { useRef, useEffect } from 'react';
import { REFERENCE_DATA } from '../data/references';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scrollContent = Array.from(scrollContainer.children);
        scrollContent.forEach((item) => {
            const duplicatedItem = (item as HTMLElement).cloneNode(true);
            scrollContainer.appendChild(duplicatedItem);
        });
    }, []);

    // Filter clients that have logos (assuming all in REFERENCE_DATA do, but good safety)
    // and maybe pick a few featured projects for a highlight section
    const featuredProjects = REFERENCE_DATA.slice(0, 3); // Pick first 3 for now as featured

    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-6">
                        Referenzen
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope text-white mb-6">
                        Vertrauen von <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Marktführern.</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light leading-relaxed">
                        Seit Jahrzehnten arbeiten wir für die anspruchsvollsten Kunden der Industrie.
                    </p>
                </div>

                {/* Logo Scroller (Infinite Marquee) */}
                <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-20">
                    <ul ref={scrollRef} className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll">
                        {REFERENCE_DATA.map((client, index) => (
                            <li key={`logo-${index}`} className="opacity-75 hover:opacity-100 transition-opacity duration-300">
                                <div className="w-40 h-24 bg-white rounded-xl flex items-center justify-center p-4">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Featured Project Spotlights */}
                <div className="grid md:grid-cols-3 gap-8">
                    {featuredProjects.map((client, index) => (
                        <div key={index} className="group relative bg-zinc-900/30 border border-white/10 rounded-3xl p-8 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2">
                            <div className="absolute top-8 right-8 text-brand-500/20 group-hover:text-brand-500/40 transition-colors">
                                <Quote size={40} />
                            </div>

                            <div className="h-16 w-32 bg-white rounded-lg p-2 mb-6 flex items-center justify-center">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>

                            <div className="space-y-4">
                                {client.projects.slice(0, 1).map((project, pIndex) => (
                                    <div key={pIndex}>
                                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                            {project.title}
                                        </h3>
                                        <ul className="space-y-2">
                                            {project.details.slice(0, 2).map((detail, dIndex) => (
                                                <li key={dIndex} className="text-sm text-slate-400 leading-relaxed list-disc list-inside marker:text-brand-500">
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5">
                                <div className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                                    Projektumfang
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/referenzen" className="inline-flex items-center gap-2 text-white font-semibold hover:text-brand-400 transition-colors group">
                        Alle Referenzen ansehen
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

            </div>

            <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 200s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
