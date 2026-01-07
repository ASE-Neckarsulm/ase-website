import React from 'react';
import SEO from '../components/SEO';
import { Users, Globe, Zap, ArrowRight, TrendingUp, Award, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import AseBuildingImage from '../assets/ase-building.jpeg';
import WasserImage from '../assets/services/Wasserversorgung.jpeg';
import TeamImage from '../assets/tamilex-team.jpg';

const AboutPage: React.FC = () => {


    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Über uns" description="Seit 1995 entwickeln wir Automations- und Steuerungstechnik für die Automobilindustrie und Wasserwirtschaft. Erfahren Sie mehr über uns." url="https://asegmbh.netlify.app/ueber-uns" />

            {/* 1. Header / Intro Statement - Staggered Animation */}
            <div className="relative pt-24 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
                            Über uns
                        </span>
                        <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] font-manrope mb-8">
                            Technik, die das Leben <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">einfacher macht.</span>
                        </h1>
                        <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-xl text-slate-400 max-w-2xl leading-relaxed">
                            Wir sind Ingenieure, Tüftler und Partner. Seit drei Jahrzehnten entwickeln wir Lösungen, die Industrie und Infrastruktur verlässlich antreiben.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. History Section - Fade In */}
            <section className="py-20 animate-fade-slide-in opacity-0 [animation-delay:600ms]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-manrope">Seit 1995: Beständigkeit im Wandel.</h2>
                            <div className="prose prose-invert prose-lg text-slate-400 font-light leading-relaxed space-y-6">
                                <p>
                                    Was 1995 als kleines Ingenieurbüro begann, ist heute ein fester Bestandteil der süddeutschen Automatisierungslandschaft. Seit der Gründung entwickelt die ASE GmbH Automatisierungs- und Steuerungslösungen für Kunden, die Wert auf stabile, praxiserprobte Technik legen.
                                </p>
                                <p>
                                    Unser Schwerpunkt liegt in der Automobilindustrie, im industriellen Anlagenbau sowie in der Wasserwirtschaft. Darüber hinaus realisieren wir Projekte in weiteren Industriebereichen, unter anderem in der Chemie- und Pharmaindustrie.
                                </p>
                                <p>
                                    Im Jahr 2025 wurde die ASE GmbH Teil der Tamilex Holding, zu der auch die Kilum Automation & Service GmbH aus Villingen-Schwenningen gehört. Die Integration eröffnet neue Möglichkeiten, insbesondere im Bereich Digitalisierung, IT-Sicherheit und strukturierter Projektabwicklung. Gleichzeitig bleiben unsere technische Ausrichtung, unsere Arbeitsweise und die Nähe zum Kunden unverändert.
                                </p>
                                <div className="flex items-center gap-4 pt-4">
                                    <div className="flex -space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 hover:z-10">95</div>
                                        <div className="w-12 h-12 rounded-full bg-zinc-700 border-2 border-black flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 hover:z-10">05</div>
                                        <div className="w-12 h-12 rounded-full bg-zinc-600 border-2 border-black flex items-center justify-center text-xs font-bold transition-transform hover:scale-110 hover:z-10">15</div>
                                        <div className="w-12 h-12 rounded-full bg-brand-600 border-2 border-black flex items-center justify-center text-xs font-bold text-white transition-transform hover:scale-110 hover:z-10">25</div>
                                    </div>
                                    <span className="text-sm text-slate-500 font-medium">30 Jahre Innovation</span>
                                </div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] group border border-white/10 shadow-2xl">
                            <img
                                src={AseBuildingImage}
                                alt="Industrial History"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8">
                                <p className="text-white font-mono text-sm">Standort Neckarsulm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values (New Content) */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5 animate-fade-slide-in opacity-0 [animation-delay:800ms]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold font-manrope mb-4">Wofür wir stehen</h2>
                        <p className="text-slate-400">Technik ist unser Handwerk, aber unsere Werte sind unser Fundament.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black border border-white/10 p-8 rounded-3xl hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                <Shield className="w-7 h-7 text-brand-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Verlässlichkeit</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Was wir zusagen, halten wir ein. Unsere Anlagen funktionieren nicht nur bei der Abnahme, sondern auch noch Jahre später zuverlässig im Betrieb.
                            </p>
                        </div>
                        <div className="bg-black border border-white/10 p-8 rounded-3xl hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                <Heart className="w-7 h-7 text-brand-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Partnerschaft</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Wir verstehen uns nicht als reiner Lieferant, sondern als Teil Ihres Teams. Wir denken mit und lösen Probleme, bevor sie entstehen.
                            </p>
                        </div>
                        <div className="bg-black border border-white/10 p-8 rounded-3xl hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-2 group">
                            <div className="w-14 h-14 rounded-2xl bg-zinc-900 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
                                <Award className="w-7 h-7 text-brand-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Qualität</h3>
                            <p className="text-slate-400 leading-relaxed">
                                „Good enough“ gibt es bei uns nicht. Wir legen Wert auf sauberen Code, fachgerecht aufgebaute Schaltschränke und eine vollständige, nachvollziehbare Dokumentation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Water Management Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Image Left */}
                        <div className="order-2 md:order-1 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] group border border-white/10">
                            <img
                                src={WasserImage}
                                alt="Water Management"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                            />
                            <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>
                        </div>

                        {/* Content Right */}
                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <span className="text-blue-400 text-sm font-semibold tracking-wide uppercase">Verantwortung</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-manrope">Wasser ist Leben. Wir steuern es sicher.</h2>
                            <div className="prose prose-invert prose-lg text-slate-400 font-light leading-relaxed space-y-6">
                                <p>
                                    Neben der Industrieautomatisierung unterstützen wir Städte, Kommunen und Anlagenbauer im Bereich der Wasserversorgung. In diesem Umfeld sind Zuverlässigkeit und Sicherheit entscheidend.
                                </p>
                                <blockquote className="pl-6 border-l-2 border-brand-500 text-xl font-medium text-white not-italic my-6">
                                    "Technik soll das Leben einfacher machen – nicht komplizierter."
                                </blockquote>
                                <p>
                                    Als zertifizierter Betrieb nach Wasserhaushaltsgesetz (WHG) bieten wir Rechtssicherheit und technische Exzellenz.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Tamilex Section */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-zinc-900 to-black">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-900/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-5">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="flex h-3 w-3 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
                                </span>
                                <span className="text-sm font-bold tracking-widest uppercase text-brand-300">New Chapter</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight font-manrope mb-8">
                                2025<br />
                                <span className="text-slate-500">Tamilex Holding.</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-7 space-y-12">
                            <div className="prose prose-invert prose-xl font-light text-slate-300">
                                <p>
                                    Mit der Aufnahme in die Tamilex Holding eröffnen sich neue Möglichkeiten. Wir bleiben, wer wir sind – mit einem stärkeren Fokus auf digitale Werkzeuge, moderne Kommunikation und internationale Projekte.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
                                    <TrendingUp className="w-8 h-8 text-brand-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">Evolution statt Revolution</h3>
                                    <p className="text-sm text-slate-400">
                                        Der eingeschlagene Weg setzt nicht auf Veränderung um jeden Preis, sondern baut auf dem auf, was uns seit Jahren auszeichnet: Erfahrung und Verlässlichkeit.
                                    </p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default">
                                    <Globe className="w-8 h-8 text-brand-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">Global & Lokal</h3>
                                    <p className="text-sm text-slate-400">
                                        Wir freuen uns darauf, Projekte künftig auch international umzusetzen – ohne dabei die Bodenständigkeit und die Nähe zu unseren Kunden zu verlieren.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Team Photo Section (New) */}
            <section className="py-12 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-[2.5rem] overflow-hidden group border border-white/10 shadow-2xl flex flex-col md:block">
                        {/* Placeholder for Team Photo */}
                        <img
                            src={TeamImage}
                            alt="Unser Team"
                            className="w-full h-auto aspect-video md:aspect-auto md:h-[600px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

                        <div className="relative md:absolute bottom-0 left-0 p-8 md:p-16 max-w-2xl bg-zinc-900 md:bg-transparent">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-manrope">Die Denker und Antreiber unseres Unternehmens.</h2>
                            <p className="text-lg text-slate-300 mb-8">
                                Hier stehen die Menschen, die Verantwortung übernehmen, Entscheidungen treffen und die ASE GmbH fachlich und strategisch voranbringen.
                            </p>
                            <Link to="/karriere" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-slate-200 transition-colors">
                                Werde Teil des Teams <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Stats Grid */}
            <section className="py-24 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-8 rounded-3xl bg-dark-900 border border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Users className="w-8 h-8 text-slate-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">30+</h3>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Mitarbeiter</p>
                            </div>
                        </div>
                        <div className="group p-8 rounded-3xl bg-dark-900 border border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Zap className="w-8 h-8 text-slate-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">1995</h3>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Gegründet</p>
                            </div>
                        </div>
                        <div className="group p-8 rounded-3xl bg-dark-900 border border-white/10 hover:border-brand-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                            <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Globe className="w-8 h-8 text-slate-300" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-4xl font-bold text-white mb-2">2</h3>
                                <p className="text-slate-400 font-medium uppercase tracking-wider text-sm">Standorte</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. Final CTA */}
            <section className="py-32 px-6 bg-zinc-950">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-manrope tracking-tighter">Neugierig?</h2>
                    <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light">
                        Dann sprechen Sie uns an – wir erzählen gern mehr über unsere Vision und unsere Projekte.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:info@ase-gmbh.de"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-manrope font-semibold text-black transition-all duration-200 bg-white rounded-full hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
                        >
                            <span>info@ase-gmbh.de</span>
                            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </a>
                        <Link to="/kontakt" className="px-8 py-4 text-white rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">
                            Kontaktformular nutzen
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;