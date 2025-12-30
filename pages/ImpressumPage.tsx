import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const ImpressumPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Impressum" description="Impressum der ASE GmbH Engineering & Automatisierung." url="https://asegmbh.netlify.app/impressum" />
            <div className="max-w-4xl mx-auto px-6 py-20">
                <h1 className="animate-fade-slide-in opacity-0 text-4xl md:text-5xl font-bold mb-12 font-manrope">Impressum</h1>

                <div className="space-y-12 text-slate-300 font-light leading-relaxed animate-fade-slide-in opacity-0 [animation-delay:200ms]">

                    {/* Address Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                        <p className="font-medium text-white">ASE Anlagen und Steuerungstechnik GmbH</p>
                        <p>Im Klauenfuß 11</p>
                        <p>74172 Neckarsulm</p>
                    </section>

                    {/* Contact Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Kontakt</h2>
                        <div className="grid grid-cols-[100px_1fr] gap-y-2">
                            <span>Telefon:</span>
                            <a href="tel:+49713296550" className="hover:text-brand-400 transition-colors">+49 7132 9655 0</a>

                            <span>Fax:</span>
                            <span>+49 7132 9655 99</span>

                            <span>E-Mail:</span>
                            <a href="mailto:info@ase-gmbh.de" className="hover:text-brand-400 transition-colors">info@ase-gmbh.de</a>
                        </div>
                    </section>

                    {/* Management Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Vertreten durch die Geschäftsführung</h2>
                        <ul className="list-none space-y-1">
                            <li>Kadadsan Kanagasingam</li>
                            <li>Kajeeban Kanagasingam</li>
                            <li>Vijikkumar Sritharan</li>
                            <li>Sebastian Knoll</li>
                        </ul>
                    </section>

                    {/* Register Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Registereintrag</h2>
                        <p>Eintragung im Handelsregister.</p>
                        <p>Registergericht: Amtsgericht Stuttgart</p>
                        <p>Registernummer: 105692</p>
                    </section>

                    {/* VAT Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Umsatzsteuer</h2>
                        <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                        <p>DE 171359738</p>
                    </section>

                    {/* Chamber Block */}
                    <section className="space-y-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Zuständige Kammer</h2>
                        <p>IHK HN – Franken, HWK HN-Franken</p>
                    </section>

                    {/* Legal Content */}
                    <section className="space-y-6 pt-8 border-t border-white/10">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Urheberrecht</h3>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
                                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            </p>
                            <p className="mt-4">© 2025 ASE GmbH. Alle Rechte vorbehalten.</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Haftung für Inhalte</h3>
                            <p>
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-2">Haftung für Links</h3>
                            <p>
                                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
                                fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                                der Seiten verantwortlich.
                            </p>
                        </div>
                    </section>

                    <div className="pt-8">
                        <Link to="/datenschutz" className="inline-flex items-center text-brand-400 hover:text-brand-300 transition-colors font-medium">
                            Zur Datenschutzerklärung &rarr;
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ImpressumPage;
