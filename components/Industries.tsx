import React from 'react';
import { Car, Droplet, ArrowRight } from 'lucide-react';
import BodyworkHomeImage from '../assets/Bodywork-home.jpeg';

const Industries: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('kontakt');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="branchen" className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center tracking-tight">
          Branchenkompetenz & Referenzen
        </h2>

        <div className="space-y-8">

          {/* Automotive Section */}
          <div className="group relative rounded-[2.5rem] overflow-hidden h-[500px] w-full border border-white/5">
            <img
              src={BodyworkHomeImage}
              alt="Automotive Manufacturing"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4">
              <div className="inline-flex items-center gap-2 bg-brand-600/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-6">
                <Car size={16} />
                Automotive
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Karosseriebau, Lackiererei & Fördertechnik.</h3>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Wir realisieren komplette Automatisierungs- und Steuerungslösungen für OEMs und direkte Zulieferer der Automobilhersteller – von der Planung über die Installation bis zur Inbetriebnahme..
              </p>

              <div className="flex flex-wrap gap-6 border-t border-white/20 pt-6">
                <div>
                  <span className="block text-xl font-bold text-white">Roboter</span>
                  <span className="text-xs text-slate-400 uppercase">KUKA, ABB, Fanuc</span>
                </div>
                <div className="w-px bg-white/20 h-10 hidden md:block"></div>
                <div>
                  <span className="block text-xl font-bold text-white">Standards</span>
                  <span className="text-xs text-slate-400 uppercase">VASS, Integra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Water Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-[2.5rem] overflow-hidden min-h-[400px] w-full bg-dark-800 border border-white/5 p-10 flex flex-col justify-center">
              <div className="mb-6 bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Droplet className="text-blue-400 w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Wasserwirtschaft</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Zertifizierte Sicherheit für Wasserwerke und Kläranlagen. Wir gewährleisten einen ausfallsicheren Betrieb kritischer Infrastruktur.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-slate-200 text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  WHG (§ 19 I) Fachbetrieb – Ihre Sicherheitsgarantie
                </li>
                <li className="flex items-center text-slate-300 text-sm">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                  Modernste Fernwirktechnik
                </li>
              </ul>
              <button onClick={scrollToContact} className="inline-flex items-center text-white font-medium hover:text-blue-400 transition-colors mt-auto">
                Lösung anfragen <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>

            <div className="group relative rounded-[2.5rem] overflow-hidden min-h-[400px] w-full">
              <img
                src="https://images.pexels.com/photos/3862389/pexels-photo-3862389.jpeg"
                alt="Water Management"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs">
                <p className="text-white text-sm font-medium">"WHG-Zertifizierung ist für uns kein Label, sondern ein Versprechen für Umweltschutz und Sicherheit."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Industries;