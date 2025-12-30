import React from 'react';
import SEO from '../components/SEO';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const CertificatesPage: React.FC = () => {
    // Placeholder array
    const CERTIFICATES = [
        {
            id: 1,
            title: "TISAX Assessment Level 1",
            description: "Nachweis über Informationssicherheit in der Automobilindustrie",
            image: "/assets/certificates/ASE-TISAX-Assessment-Level-1-1.png"
        },
        {
            id: 2,
            title: "ISO 9001:2015",
            description: "Zertifiziertes Qualitätsmanagementsystem",
            image: "/assets/certificates/ASE_ISO-9001-2015_08.04.2024-bis-07.04.2027.png"
        },
        {
            id: 3,
            title: "Fachbetrieb nach WHG",
            description: "Zertifizierung nach Wasserhaushaltsgesetz",
            image: "/assets/certificates/ASE_WHG_09_2026.png"
        }
    ];

    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Zertifikate" description="Unsere Zertifizierungen und Qualifikationen. Qualität und Sicherheit nach internationalen Standards." url="https://asegmbh.netlify.app/zertifikate" />

            {/* Header */}
            <div className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
                        Qualität & Sicherheit
                    </span>
                    <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-manrope">
                        Ausgezeichnete <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Leistung.</span>
                    </h1>
                    <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Unsere Zertifikate belegen unsere Kompetenz und unseren Anspruch an höchste Qualitätsstandards.
                    </p>
                </div>
            </div>

            {/* Intro Stats/Badges */}
            <section className="pb-20 border-b border-white/5 animate-fade-slide-in opacity-0 [animation-delay:600ms]">
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
                    <div className="flex items-center gap-4 text-slate-300">
                        <ShieldCheck className="w-8 h-8 text-brand-400" />
                        <span className="font-semibold text-lg">WHG Zertifiziert</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300">
                        <Award className="w-8 h-8 text-brand-400" />
                        <span className="font-semibold text-lg">ISO 9001 Konform</span>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300">
                        <CheckCircle className="w-8 h-8 text-brand-400" />
                        <span className="font-semibold text-lg">Siemens Solution Partner</span>
                    </div>
                </div>
            </section>

            {/* Grid of Certificates */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {CERTIFICATES.map((item) => (
                            <div key={item.id} className="group relative bg-zinc-900/30 rounded-2xl border border-white/10 overflow-hidden hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] w-full overflow-hidden bg-white/5 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover shadow-2xl transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Overlay */}
                                <div className="p-6 border-t border-white/5 bg-zinc-900/50 flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-white pr-2">{item.title}</h3>
                                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/20 transition-colors">
                                            <Award className="w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" />
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-400">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Background Pattern/Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-zinc-900/10 pointer-events-none"></div>

                                {/* Scanlines effect */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CertificatesPage;
