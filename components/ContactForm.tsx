import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        privacy: false
    });
    const [touched, setTouched] = useState({
        privacy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, privacy: e.target.checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTouched({ privacy: true });

        if (!formData.privacy) return;

        // Construct mailto link
        const subject = encodeURIComponent(`Kontaktanfrage: ${formData.subject}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nNachricht:\n${formData.message}`
        );

        window.location.href = `mailto:info@ase-gmbh.de?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-zinc-900/30 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold font-manrope text-white mb-6">Schreiben Sie uns</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-400 ml-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                            placeholder="Ihr Name"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-400 ml-1">E-Mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                            placeholder="ihre@email.de"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-400 ml-1">Betreff</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                        placeholder="Worum geht es?"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Nachricht</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all resize-none"
                        placeholder="Ihre Nachricht an uns..."
                    ></textarea>
                </div>

                <div className="space-y-4">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative flex items-center mt-1">
                            <input
                                type="checkbox"
                                name="privacy"
                                checked={formData.privacy}
                                onChange={handleCheckboxChange}
                                className="peer appearance-none w-5 h-5 rounded border border-white/20 bg-black/40 checked:bg-brand-500 checked:border-brand-500 transition-all"
                            />
                            <CheckCircle2 className="absolute w-3.5 h-3.5 text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                        </div>
                        <span className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors select-none">
                            Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden.
                            Hinweis: Sie können Ihre Einwilligung jederzeit für die Zukunft per E-Mail an info@ase-gmbh.de widerrufen.
                        </span>
                    </label>
                    {touched.privacy && !formData.privacy && (
                        <div className="text-red-400 text-sm flex items-center gap-2 pl-1">
                            <AlertCircle size={14} />
                            Bitte akzeptieren Sie die Datenschutzhinweise.
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <Send size={18} />
                    Nachricht absenden
                </button>

                <p className="text-xs text-slate-500 text-center md:text-left mt-4">
                    Durch Klick auf "Nachricht absenden" öffnet sich Ihr Standard-Mailprogramm.
                </p>
            </form>
        </div>
    );
};

export default ContactForm;
