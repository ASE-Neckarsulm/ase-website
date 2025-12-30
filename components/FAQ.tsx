import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Welche Steuerungen unterstützen Sie?",
    answer: "Unser Schwerpunkt liegt auf Siemens (TIA Portal) und Beckhoff. Zusätzlich realisieren wir Projekte mit Allen-Bradley, Mitsubishi oder B&R – je nach Bedarf."
  },
  {
    question: "Arbeiten Sie nach VASS-Standard?",
    answer: "Ja. Wir sind mit den Standards der großen Automobilhersteller (VASS, Integra usw.) bestens vertraut und setzen diese zuverlässig um."
  },
  {
    question: "Bieten Sie auch reinen Schaltschrankbau an?",
    answer: "Ja. Wir fertigen nach Ihren Plänen (Build-to-Print) oder übernehmen die vollständige Konstruktion in EPLAN P8."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Häufige Fragen</h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-dark-800 rounded-2xl overflow-hidden transition-all duration-300">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white text-lg">{item.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-500 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-slate-500 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;