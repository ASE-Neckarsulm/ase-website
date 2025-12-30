import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ase-white-logo.png';

const Footer: React.FC = () => {
    return (
        <footer id="kontakt" className="relative w-full pt-24 pb-12 overflow-hidden bg-zinc-950 border-t border-white/5 text-zinc-400 transition-colors duration-500">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-5 flex flex-col">
                        <img src={Logo} alt="ASE GmbH" className="w-48 h-auto mb-6" />
                        <p className="text-sm max-w-xs leading-relaxed">
                            Ihr Engineering-Partner für komplexe Automatisierung. Von der ersten Skizze bis zur finalen Inbetriebnahme.
                        </p>


                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                            <div className="flex flex-col gap-6">
                                <h4 className="text-sm uppercase tracking-wider text-white font-semibold">Unternehmen</h4>
                                <div className="flex flex-col gap-4">
                                    <Link to="/ueber-uns" className="text-sm transition-colors hover:text-white">Über uns</Link>
                                    <Link to="/karriere" className="text-sm transition-colors hover:text-white">Karriere</Link>
                                    <Link to="/leistungen" className="text-sm transition-colors hover:text-white">Leistungen</Link>
                                    <Link to="/zertifikate" className="text-sm transition-colors hover:text-white">Zertifikate</Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="text-sm uppercase tracking-wider text-white font-semibold">Rechtliches</h4>
                                <div className="flex flex-col gap-4">
                                    <Link to="/impressum" className="text-sm transition-colors hover:text-white">Impressum</Link>
                                    <Link to="/datenschutz" className="text-sm transition-colors hover:text-white">Datenschutz</Link>
                                    <Link to="/referenzen" className="text-sm transition-colors hover:text-white">Referenzen</Link>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                <h4 className="text-sm uppercase tracking-wider text-white font-semibold">Kontakt</h4>
                                <div className="flex flex-col gap-4">
                                    <a href="tel:+497132123450" className="text-sm transition-colors hover:text-white">
                                        +49 (0) 7132 / 12345-0
                                    </a>
                                    <a href="mailto:info@ase-gmbh.de" className="text-sm transition-colors hover:text-white">
                                        info@ase-gmbh.de
                                    </a>
                                    <span className="text-sm mt-2 opacity-60">
                                        Neckarsulm & Rastatt
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 border-white/5">
                    <p className="text-xs opacity-60">© {new Date().getFullYear()} ASE GmbH. All rights reserved.</p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="group flex items-center gap-2 text-xs uppercase tracking-wider transition-colors hover:text-white"
                    >
                        Back to top
                        <div className="w-5 h-5 rounded border flex items-center justify-center transition-all border-zinc-800 group-hover:bg-zinc-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                        </div>
                    </button>
                </div>
            </div>
        </footer >
    );
};

export default Footer;