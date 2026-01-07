import React, { useRef, useState } from 'react';
import {
  Bot, Binary, Cpu, Settings, ScanEye, ShieldCheck, ArrowRight, Droplets, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Spotlight Card Component
const SpotlightCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}> = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.15)" }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/40 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="leistungen" className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
            <span className="text-xs font-semibold text-blue-200 uppercase tracking-widest font-manrope">Kompetenzen</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tighter font-manrope leading-[1.1]">
            Unsere <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Dienstleistungen</span>
          </h2>
        </div>
        <div className="mt-8 md:mt-0">
          <Link to="/leistungen" className="group inline-flex items-center gap-2 pl-6 pr-2 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-white/20 hover:bg-zinc-800 transition-all duration-300">
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white font-manrope">Alle Details</span>
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

        {/* 1. Elektrokonstruktion */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col">
          <Cpu className="text-zinc-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">1. Elektrokonstruktion</h3>
          <ul className="space-y-2 text-sm text-zinc-400 group-hover:text-zinc-300">
            <li className="flex gap-2"><span className="text-blue-500">•</span> Planung mit EPLAN P8</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Normgerechte Dokumentation</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Hardware Planung</li>
          </ul>
        </SpotlightCard>

        {/* 2. Schaltschrankbau */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col">
          <Settings className="text-zinc-500 mb-6 group-hover:text-blue-400 transition-colors" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">2. Schaltschrankbau</h3>
          <ul className="space-y-2 text-sm text-zinc-400 group-hover:text-zinc-300">
            <li className="flex gap-2"><span className="text-blue-500">•</span> Eigenfertigung nach DIN/VDE</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> Integration von SPS & Safety-Systemen</li>
            <li className="flex gap-2"><span className="text-blue-500">•</span> UL/CSA Standard</li>
          </ul>
        </SpotlightCard>

        {/* 3. SPS Programmierung */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col" spotlightColor="rgba(168, 85, 247, 0.15)">
          <Binary className="text-zinc-500 mb-6 group-hover:text-purple-400 transition-colors" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">3. SPS-Programmierung</h3>
          <ul className="space-y-2 text-sm text-zinc-400 group-hover:text-zinc-300">
            <li className="flex gap-2"><span className="text-purple-500">•</span> Siemens TIA Portal & Step 7</li>
            <li className="flex gap-2"><span className="text-purple-500">•</span> Beckhoff TwinCAT</li>
            <li className="flex gap-2"><span className="text-purple-500">•</span> HMI & Visualisierung</li>
          </ul>
        </SpotlightCard>

        {/* 4. Roboterprogrammierung */}
        <SpotlightCard className="lg:col-span-6 p-10 group" spotlightColor="rgba(59, 130, 246, 0.15)">
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
              <Bot size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">4. Roboter-Programmierung</h3>
            <ul className="space-y-3 text-base text-zinc-400 group-hover:text-zinc-300 flex-grow">
              <li className="flex gap-2"><span className="text-blue-500">•</span> Programmierung von KUKA, ABB, Fanuc & Yaskawa</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Optimierung von Taktzeiten</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Simulation von Bewegungsabläufen</li>
            </ul>
          </div>
        </SpotlightCard>

        {/* 5. Bildverarbeitung */}
        <SpotlightCard className="lg:col-span-6 p-10 group">
          <div className="flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-zinc-400">
              <ScanEye size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">5. Bildverarbeitung</h3>
            <ul className="space-y-3 text-base text-zinc-400 group-hover:text-zinc-300 flex-grow">
              <li className="flex gap-2"><span className="text-blue-500">•</span> Industrielle Qualitätskontrolle</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Integration in Steuerungssysteme</li>
              <li className="flex gap-2"><span className="text-blue-500">•</span> Positionserkennung & Messaufgaben</li>
            </ul>
          </div>
        </SpotlightCard>

        {/* 6. Betriebssicherheit */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col">
          <Activity className="text-zinc-500 mb-6 group-hover:text-emerald-400 transition-colors" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">6. Betriebssicherheit</h3>
          <ul className="space-y-2 text-sm text-zinc-400 group-hover:text-zinc-300">
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Anlagenbetreung & Lifecycle-Service</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Störungsanalyse & Fehlerbehebung</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Prozessoptimierung</li>
          </ul>
        </SpotlightCard>

        {/* 7. DGUV-Prüfungen */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col">
          <ShieldCheck className="text-zinc-500 mb-6 group-hover:text-emerald-400 transition-colors" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">7. DGUV-Prüfungen</h3>
          <ul className="space-y-2 text-sm text-zinc-400 group-hover:text-zinc-300">
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Prüfung nach DGUV Vorschrift 3</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Maschinensicherheit</li>
            <li className="flex gap-2"><span className="text-emerald-500">•</span> Rechtssichere Prüfprotokolle</li>
          </ul>
        </SpotlightCard>

        {/* 8. Wasserversorgung */}
        <SpotlightCard className="lg:col-span-4 p-8 group flex flex-col bg-blue-900/10 border-blue-500/20" spotlightColor="rgba(59, 130, 246, 0.3)">
          <Droplets className="text-blue-400 mb-6" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">8. Wasserversorgung</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li className="flex gap-2"><span className="text-blue-400">•</span> WHG-konforme Lösungen</li>
            <li className="flex gap-2"><span className="text-blue-400">•</span> Fernwirktechnik</li>
            <li className="flex gap-2"><span className="text-blue-400">•</span> Ausfallsichere Steuerungssysteme</li>
          </ul>
        </SpotlightCard>

      </div>
    </section>
  );
};

export default Services;