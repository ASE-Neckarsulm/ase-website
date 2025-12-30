import React, { useRef, useState } from 'react';
import { ArrowRight, Cpu, Activity, Zap, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleBackground from './ParticleBackground';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-48 lg:pb-32">

      {/* --- WebGL Particle Streamlines Background --- */}
      {/* We apply a mask-image to fade the bottom into black smoothly */}
      <div
        className="absolute inset-0 z-0 bg-black"
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      >
        <ParticleBackground />
      </div>

      {/* Content Container */}
      <div className="text-center max-w-5xl z-10 px-6 relative mt-10">

        {/* Badge */}
        <div className="animate-fade-slide-in opacity-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-950/20 mb-10 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-xs font-semibold text-blue-200 tracking-wide font-manrope">Engineering Excellence seit über 30 Jahren</span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] leading-[1.1] md:text-7xl text-4xl font-semibold tracking-tighter font-manrope mb-8 text-white">
          <span className="block mb-2 text-zinc-400 text-3xl md:text-5xl">30 Jahre Erfahrung in der</span>
          <SpotlightText>Automatisierungs- & Steuerungstechnik</SpotlightText>
        </h1>

        {/* Subtext */}
        <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] leading-relaxed md:text-xl text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-medium">
          Wir entwickeln und realisieren zuverlässige, effiziente und skalierbare Automatisierungslösungen – komplett aus einer Hand.
        </p>

        {/* Action Buttons */}
        <div className="animate-fade-slide-in opacity-0 [animation-delay:600ms] flex flex-col items-center justify-center gap-6 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Primary Button - Shiny Effect */}
            <button
              onClick={scrollToContact}
              className="shiny-button group relative inline-flex items-center justify-center px-8 py-4 font-manrope font-semibold text-white transition-all duration-200 bg-zinc-950/80 rounded-full hover:bg-zinc-900 focus:outline-none"
            >
              <span className="relative z-10 flex items-center">
                Jetzt Lösung anfragen
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>

            {/* Secondary Button */}
            <Link to="/leistungen" className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5">
              Unsere Leistungen entdecken
              <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
            </Link>
          </div>

          {/* Social Proof Text */}
          <p className="text-zinc-500 text-sm font-medium">
            Langjähriger Partner von <span className="text-zinc-300">Audi, Porsche & Daimler</span>
          </p>
        </div>

      </div>

      {/* Static Logos / Tech Stack */}
      <div className="animate-fade-slide-in opacity-0 [animation-delay:800ms] relative z-20 w-full max-w-5xl mx-auto px-6 border-t border-white/5 pt-12">
        <p className="text-center text-xs font-semibold text-zinc-700 uppercase tracking-widest mb-8">Technologie-Stack & Partner</p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logo 1 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <Cpu size={24} className="text-zinc-500 group-hover:text-blue-500 transition-colors" />
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">Siemens</span>
          </div>
          {/* Logo 2 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <Activity size={24} className="text-zinc-500 group-hover:text-red-500 transition-colors" />
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">Beckhoff</span>
          </div>
          {/* Logo 3 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <Zap size={24} className="text-zinc-500 group-hover:text-orange-500 transition-colors" />
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">KUKA</span>
          </div>
          {/* Logo 4 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <CircleDashed size={24} className="text-zinc-500 group-hover:text-yellow-400 transition-colors" />
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">FANUC</span>
          </div>
          {/* Logo 5 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">EPLAN</span>
          </div>
          {/* Logo 6 */}
          <div className="flex flex-col items-center gap-2 group cursor-default">
            <span className="text-sm font-bold font-manrope text-zinc-500 group-hover:text-white transition-colors">ABB</span>
          </div>
        </div>
      </div>

    </section>
  );
};

// --- Helper Component: SpotlightText ---

const SpotlightText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative inline-block cursor-default select-none text-transparent transition-opacity duration-300"
      style={{
        backgroundImage: `radial-gradient(
          250px circle at ${position.x}px ${position.y}px, 
          #60a5fa 0%, 
          #3b82f6 25%,
          #333333 100%
        )`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        backgroundSize: '100% 100%',
        color: 'transparent'
      }}
    >
      {children}
    </span>
  );
};

export default Hero;