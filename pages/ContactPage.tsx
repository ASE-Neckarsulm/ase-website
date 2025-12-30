import React from 'react';
import SEO from '../components/SEO';
import { Mail, Phone, MapPin, Printer, ArrowRight, Navigation } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Kontakt" description="Treten Sie mit uns in Kontakt. Wir sind Ihr Ansprechpartner für Engineering und Automatisierung in Neckarsulm und Rastatt." url="https://asegmbh.netlify.app/kontakt" />

            {/* Header */}
            <div className="relative pt-24 pb-16 overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
                        Kontakt
                    </span>
                    <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-4xl md:text-6xl font-bold tracking-tighter mb-6 font-manrope">
                        Wir sind für Sie da. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Persönlich & Direkt.</span>
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">

                {/* Contact Form Section */}
                <div className="max-w-3xl mx-auto animate-fade-slide-in opacity-0 [animation-delay:400ms]">
                    <ContactForm />
                </div>

                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 animate-fade-slide-in opacity-0 [animation-delay:600ms]">

                    {/* Location 1: Neckarsulm */}
                    <div className="group bg-zinc-900/30 border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                        <div className="h-48 bg-zinc-800 relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.467464052304!2d9.243578776858548!3d49.23126097932644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982aeb3b3f4d0b%3A0x6334585640306760!2sIm%20Klauenfu%C3%9F%2011%2C%2074172%20Neckarsulm!5e0!3m2!1sde!2sde!4v1709210000000!5m2!1sde!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                title="Karte Neckarsulm"
                            ></iframe>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-2.5 h-2.5 rounded-full bg-brand-500"></span>
                                <h2 className="text-2xl font-bold font-manrope">Neckarsulm</h2>
                                <span className="text-sm text-slate-500 uppercase tracking-wider ml-2">(Hauptsitz)</span>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-brand-400 mt-1 shrink-0" />
                                    <div className="text-slate-300">
                                        <p>Im Klauenfuß 11</p>
                                        <p>74172 Neckarsulm</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                                    <a href="tel:+49713296550" className="text-slate-300 hover:text-white transition-colors">
                                        +49 (0) 71 32 / 96 55-0
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Printer className="w-5 h-5 text-brand-400 shrink-0" />
                                    <span className="text-slate-300">
                                        +49 (0) 71 32 / 96 55-99
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                                    <a href="mailto:info@ase-gmbh.de" className="text-slate-300 hover:text-white transition-colors">
                                        info@ase-gmbh.de
                                    </a>
                                </div>
                            </div>

                            <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                                <h3 className="flex items-center gap-2 font-semibold text-white mb-3">
                                    <Navigation className="w-4 h-4 text-brand-400" />
                                    Anfahrt
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Auf der A6 Richtung Mannheim oder Autobahnkreuz Weinsberg kommend bis zur Ausfahrt Neckarsulm fahren.
                                    Sie befinden sich jetzt auf der B 27 und fahren weiter bis zur Abzweigung Neckarsulm.
                                    Am Kreisverkehr (Autohaus ASW / Autohaus Neff) biegen Sie sinngemäß links ab und die nächste Straße gleich wieder rechts ab.
                                    Sie sind jetzt bereits in der Straße „Im Klauenfuß“ und biegen nun die erste Straße links ab.
                                    Rechter Hand sehen Sie jetzt unser Firmengebäude Nr. 35.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Location 2: Rastatt */}
                    <div className="group bg-zinc-900/30 border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-500/30 transition-all duration-300">
                        <div className="h-48 bg-zinc-800 relative overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.905625444383!2d8.188734976840748!3d48.887295971324005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479717d5a57a8a1f%3A0x6295555416629272!2sAm%20Weiher%2010%2C%2076437%20Rastatt!5e0!3m2!1sde!2sde!4v1709210100000!5m2!1sde!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Karte Rastatt"
                                className="opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                            ></iframe>
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-2.5 h-2.5 rounded-full bg-zinc-600"></span>
                                <h2 className="text-2xl font-bold font-manrope">TB Rastatt</h2>
                            </div>

                            <div className="space-y-6 mb-10">
                                <div className="flex items-start gap-4">
                                    <MapPin className="w-5 h-5 text-brand-400 mt-1 shrink-0" />
                                    <div className="text-slate-300">
                                        <p>Am Weiher 10</p>
                                        <p>76437 Rastatt</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Phone className="w-5 h-5 text-brand-400 shrink-0" />
                                    <a href="tel:+4972291856955" className="text-slate-300 hover:text-white transition-colors">
                                        +49 (0) 72 29 / 1856-955
                                    </a>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Printer className="w-5 h-5 text-brand-400 shrink-0" />
                                    <span className="text-slate-300">
                                        +49 (0) 72 29 / 1856-956
                                    </span>
                                </div>

                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-brand-400 shrink-0" />
                                    <a href="mailto:info@ase-gmbh.de" className="text-slate-300 hover:text-white transition-colors">
                                        info@ase-gmbh.de
                                    </a>
                                </div>
                            </div>

                            <div className="bg-black/40 rounded-xl p-6 border border-white/5">
                                <h3 className="flex items-center gap-2 font-semibold text-white mb-3">
                                    <Navigation className="w-4 h-4 text-brand-400" />
                                    Anfahrt
                                </h3>
                                <p className="text-sm text-slate-400 leading-relaxed font-light">
                                    Sie fahren auf der Autobahn A5 aus Richtung Karlsruhe kommend bis zur Abfahrt Baden-Baden/ Frankreich und fahren auf die B500 in Richtung Frankreich.
                                    An der zweiten Abfahrt fahren Sie rechts ab Richtung Wintersdorf.
                                    Vor dem Ortseingang am Kreisverkehr nehmen Sie die zweite Ausfahrt und biegen anschließend gleich nach links ab.
                                    Dort befindet sich auf der linken Seite im ersten Gebäude unser TB Rastatt.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
