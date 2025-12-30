import React from 'react';
import SEO from '../components/SEO';
import {
  Settings, Cpu, Bot, ScanEye, Wrench, BarChart3, CheckCircle2, ShieldCheck, ArrowRight, Activity, Droplets
} from 'lucide-react';
import CabinetImage from '../assets/services/Schaltschrankbau.jpeg';
import ElektroImage from '../assets/services/elektrokonstuction.jpeg';
import SpsImage from '../assets/services/sps.png';
import RoboticsImage from '../assets/services/robotics.png';
import AnlagenbetreuungImage from '../assets/services/Anlagenbetreuung.png';
import BildverarbeitungImage from '../assets/services/Bildverarbeitung.png';
import WasserversorgungImage from '../assets/services/Wasserversorgung.jpeg';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 'elektrokonstruktion',
    icon: Cpu,
    title: 'Elektrokonstruktion',
    description: 'Maßgeschneiderte Elektrokonstruktion für industrielle Anlagen. Wir schaffen die technische Basis für stabile und effiziente Prozesse durch klare Strukturen, saubere Planung und normgerechte Umsetzung.',
    details: [
      'Planung von elektrischen Anlagen',
      'Erstellung von Schaltplänen und Stromlaufplänen (EPLAN P8)',
      'Auswahl und Auslegung der Komponenten',
      'Dokumentation nach Normen und Kundenvorgabe',
      'Unterstützung bei technischen Abnahmen'
    ],
    image: ElektroImage
  },
  {
    id: 'schaltschrankbau',
    icon: Settings,
    title: 'Schaltschrankbau',
    description: 'Fertigung individueller Schaltschränke für Maschinen und Anlagen – von der Planung über den Aufbau bis zur vollständigen Dokumentation. Präzise, normkonform und praxisgerecht.',
    details: [
      'Konstruktion und Fertigung von Steuerungs- und Leistungsschränken',
      'Aufbau nach Kundenstandard oder nach ASE-Standard',
      'Verdrahtung, Funktionsprüfung und Sicherheitstests',
      'Integration von SPS-, Sicherheits- und Kommunikationsmodulen',
      'Erweiterung und Modernisierung bestehender Schaltschränke',
      'Dokumentation nach DIN/VDE'
    ],
    image: CabinetImage
  },
  {
    id: 'sps-programmierung',
    icon: BarChart3,
    title: 'SPS-Programmierung',
    description: 'Steuerungssysteme sind das Kernstück jeder Anlage. Wir entwickeln stabile, wartungsfreundliche und klar strukturierte Software – mit Schwerpunkt auf Siemens und Beckhoff.',
    details: [
      'Erstellung neuer SPS-Programme (TIA Portal, TwinCAT)',
      'Erweiterung und Anpassung bestehender Anlagen',
      'Visualisierung und HMI-Entwicklung',
      'Fehlersuche, Optimierung und Upgrade älterer Systeme',
      'Dokumentation, Versionierung und Support'
    ],
    image: SpsImage
  },
  {
    id: 'roboterprogrammierung',
    icon: Bot,
    title: 'Roboterprogrammierung',
    description: 'Wir bringen Bewegung in Ihre Fertigung. Unsere Experten programmieren Industrieroboter aller führenden Hersteller für komplexe Kinematiken und reibungslose Abläufe.',
    details: [
      'Erstellung neuer Roboterprogramme (KUKA, ABB, Fanuc)',
      'Optimierung von Bewegungsabläufen',
      'Integration in neue und bestehende Automationsanlagen',
      'Prozessoptimierung und Taktzeitverbesserung',
      'Fehleranalyse und Support vor Ort'
    ],
    image: RoboticsImage
  },
  {
    id: 'bildverarbeitung',
    icon: ScanEye,
    title: 'Bildverarbeitung',
    description: 'Integration industrieller Bildverarbeitungssysteme zur Qualitätskontrolle, Vermessung und Objekterkennung – zuverlässig und exakt auf die Anwendung abgestimmt.',
    details: [
      'Planung und Auswahl des passenden Kamerasystems',
      'Programmierung und Einrichtung der Software',
      'Qualitäts- und Maßkontrolle',
      'Integration in Steuerungs- und Robotersysteme',
      'Dokumentation und Übergabe'
    ],
    image: BildverarbeitungImage
  },
  {
    id: 'anlagenbetreuung',
    icon: Wrench,
    title: 'Anlagenbetreuung & Optimierung',
    description: 'Stillstand kostet Geld. Wir sorgen dafür, dass Ihre Anlagen laufen – durch regelmäßige Wartung, schnelle Fehlerbehebung und gezielte Modernisierung.',
    details: [
      'Störungsanalyse und Fehlerbehebung',
      'Laufende Betreuung, Wartung und Anpassungen',
      'Taktzeitoptimierung',
      'Modernisierung von Hard- und Software',
      'Technischer Support vor Ort oder remote'
    ],
    image: AnlagenbetreuungImage
  },
  {
    id: 'dguv',
    icon: ShieldCheck,
    title: 'DGUV- & Maschinenprüfung',
    description: 'Sicherheit geht vor. Wir führen die gesetzlich vorgeschriebenen Prüfungen durch und dokumentieren den sicheren Zustand Ihrer elektrischen Anlagen.',
    details: [
      'DGUV-V3-Prüfungen an elektrischen Anlagen',
      'Maschinenprüfung nach aktuellen Vorschriften',
      'Sicherheitsbewertungen und Risikobeurteilungen',
      'Prüfprotokolle und rechtssichere Dokumentation'
    ],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'wasserversorgung',
    icon: Droplets,
    title: 'Wasserversorgung',
    description: 'Sichere und effiziente Wasserversorgung durch modernste Steuerungstechnik. Wir bieten maßgeschneiderte Lösungen für Wasserwerke, Kläranlagen und Pumpstationen.',
    details: [
      'Speziallösungen nach WHG',
      'Fernwirktechnik und Anbindung an Leitsysteme',
      'Ausfallsichere Steuerungen und Redundanzkonzepte',
      'Modernisierung bestehender Anlagen'
    ],
    image: WasserversorgungImage
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black pt-20 pb-20 min-h-screen text-white">
      <SEO title="Leistungen" description="Unser Leistungsspektrum: Elektrokonstruktion, Schaltschrankbau, SPS-Programmierung, Roboterprogrammierung, Bildverarbeitung und Anlagenbetreuung." url="https://asegmbh.netlify.app/leistungen" />

      {/* 1. Hero Section - Staggered Animations */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="animate-fade-slide-in opacity-0 inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-brand-400 uppercase mb-8">
              Leistungen
            </span>
            <h1 className="animate-fade-slide-in opacity-0 [animation-delay:200ms] text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] font-manrope mb-8">
              Technische <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-white">Exzellenz.</span>
            </h1>
            <p className="animate-fade-slide-in opacity-0 [animation-delay:400ms] text-xl text-slate-400 max-w-2xl leading-relaxed">
              Von der Planung bis zur Wartung. Wir bieten das vollständige Leistungsspektrum für moderne Industrieanlagen – aus einer Hand.
            </p>
          </div>
        </div>
      </div>

      {/* Services Sections */}
      <div className="space-y-0 animate-fade-slide-in opacity-0 [animation-delay:600ms]">
        {servicesData.map((service, index) => (
          <section key={service.id} className="py-24 border-t border-white/5 relative overflow-hidden">
            {/* Alternating Background for variety */}
            {index % 2 !== 0 && (
              <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>
            )}

            <div className="max-w-7xl mx-auto px-6 relative z-10">
              <div className={`grid lg:grid-cols-12 gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* 
                  Headline / Image Column 
                */}
                <div className={`lg:col-span-5 flex flex-col ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Icon & Label */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-brand-400 shadow-xl transition-transform hover:scale-110 duration-300">
                      <service.icon size={28} />
                    </div>
                    <div className="h-px flex-grow bg-white/10"></div>
                    <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold font-manrope text-white mb-8 leading-tight break-words hyphens-auto">
                    {service.title}
                  </h2>

                  <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] border border-white/10 group shadow-2xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>

                {/* 
                  Content Column 
                */}
                <div className={`lg:col-span-7 pt-4 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>

                  <div className="prose prose-invert prose-lg max-w-none mb-12">
                    <p className="text-xl text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Detail Cards Grid */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="group cursor-default p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/30 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-1">
                        <CheckCircle2 className="w-6 h-6 text-brand-500 mb-4 group-hover:scale-110 transition-transform" />
                        <p className="text-sm text-slate-300 font-medium leading-relaxed">
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/5 animate-fade-slide-in opacity-0 [animation-delay:800ms]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-manrope tracking-tighter">Spezifische Anforderung?</h2>
          <p className="text-xl text-slate-400 mb-12 font-light">
            Kein Projekt ist wie das andere. Lassen Sie uns über Ihre Herausforderung sprechen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:info@ase-gmbh.de"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-manrope font-semibold text-black transition-all duration-200 bg-white rounded-full hover:bg-slate-200 focus:outline-none"
            >
              <span>Anfrage senden</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/kontakt" className="px-8 py-4 text-white rounded-full border border-white/10 hover:bg-white/5 transition-colors font-medium">
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;