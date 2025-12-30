import React from 'react';

const About: React.FC = () => {
  return (
    <section id="über-uns" className="py-32 bg-black text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-brand-500 font-semibold tracking-widest uppercase text-xs mb-6 text-center">
          Über uns
        </h2>

        <p className="text-xl md:text-3xl font-medium leading-relaxed text-center text-slate-300">
          Die ASE GmbH ist seit über 30 Jahren in der Automatisierungs-, Elektro- und Steuerungstechnik tätig. Mit mehr als 30 qualifizierten Mitarbeitern realisieren wir komplette Anlagenlösungen – von der Elektrokonstruktion und Softwareentwicklung über den Schaltschrankbau bis zur Installation, Inbetriebnahme, Optimierung und dauerhaften Betreuung.“
        </p>

        <div className="mt-12 text-center">
          <span className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold tracking-wide shadow-lg">
            Unser Anspruch: kundennah, flexibel und lösungsorientiert.
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;