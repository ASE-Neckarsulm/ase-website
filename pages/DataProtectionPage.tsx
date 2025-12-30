import React from 'react';
import SEO from '../components/SEO';

const DataProtectionPage: React.FC = () => {
    return (
        <div className="bg-black min-h-screen text-white pt-20">
            <SEO title="Datenschutz" description="Datenschutzerklärung der ASE GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten." url="https://asegmbh.netlify.app/datenschutz" />
            <div className="max-w-4xl mx-auto px-6 py-20">
                <div className="animate-fade-slide-in opacity-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 font-manrope">Datenschutzerklärung</h1>
                    <p className="text-slate-400 mb-12">Informationspflichten zur Datenerhebung gem. Art. 13, 14, 21 DSGVO</p>
                </div>

                <div className="space-y-12 text-slate-300 font-light leading-relaxed animate-fade-slide-in opacity-0 [animation-delay:200ms]">

                    <p>
                        Im Folgenden informieren wir Sie über die Erhebung und Verarbeitung personenbezogener Daten bei der Nutzung unserer Website.
                        Personenbezogene Daten sind Daten, welche auf eine Person beziehbar sind, wie z.B. Name, Anschriften, Telefon- und E-Mail-Adresse,
                        IP-Adresse, aber auch Nutzerverhalten usw.
                    </p>

                    {/* 1. Verantwortliche Stelle */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">1. Name und Kontaktdaten der verantwortlichen Stelle</h2>
                        <p className="text-sm text-slate-500 uppercase tracking-wider">gem. Art. 4 Abs. 7 DSGVO</p>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p className="font-bold text-white mb-2">ASE Anlagen- und Steuerungstechnik GmbH</p>
                            <p>Im Klauenfuß 35</p>
                            <p>74172 Neckarsulm</p>
                            <p className="mt-4"><span className="text-slate-500 w-20 inline-block">Tel.:</span> +49 7132 9655 0</p>
                            <p><span className="text-slate-500 w-20 inline-block">Fax:</span> +49 7132 9655 99</p>
                            <p><span className="text-slate-500 w-20 inline-block">E-Mail:</span> info@ase-gmbh.de</p>
                        </div>
                    </section>

                    {/* 2. Datenschutzbeauftragter */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">2. Kontaktdaten des Datenschutzbeauftragten</h2>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p>Sie erreichen unseren Datenschutzbeauftragten postalisch unter:</p>
                            <p className="mt-4 font-bold text-white">ASE GmbH</p>
                            <p>PERSÖNLICH: An den Datenschutzbeauftragten</p>
                            <p>Im Klauenfuß 35</p>
                            <p>74172 Neckarsulm</p>
                            <p className="mt-4">Per E-Mail: <a href="mailto:helmut.nietsch@ase-gmbh.de" className="text-brand-400 hover:underline">helmut.nietsch@ase-gmbh.de</a></p>
                        </div>
                    </section>

                    {/* 3. Zwecke der Verarbeitung */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">3. Zwecke der Verarbeitung personenbezogener Daten</h2>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">a. Kontaktaufnahme</h3>
                            <p>
                                Wenn Sie mit uns per E-Mail oder per Kontaktformular eine Nachricht senden, werden die von Ihnen mitgeteilten Daten
                                (E-Mail-Adresse, Name, Vorname, Anschrift, Telefonnummer usw.) von uns gespeichert und zur Bearbeitung Ihrer Nachricht
                                und zur Kontaktaufnahme mit Ihnen verwendet. (Rechtsgrundlage hierfür ist Art. 6 Abs.1 lit. a und b DSGVO).
                                Die in diesem Zusammenhang anfallenden Daten werden gelöscht, sobald die Speicherung nicht mehr erforderlich ist
                                bzw. die Verarbeitung wird eingeschränkt, falls gesetzliche Aufbewahrungspflichten bestehen.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">b. Nutzung der Website</h3>
                            <p>
                                Bei bloßer Nutzung unserer Website – ohne dass Sie Informationen an uns übermitteln – erheben wir nur die personenbezogenen Daten,
                                die Ihr Webbrowser an unsere Server übermittelt. Rechtsgrundlage hierfür ist Art. 6 Abs.1 lit. f DSGVO.
                            </p>
                            <ul className="list-disc pl-6 space-y-1 marker:text-brand-500">
                                <li>Ihre IP-Adresse</li>
                                <li>Datum und Uhrzeit des Seitenabrufs</li>
                                <li>Inhalt der Anforderung (konkrete Website)</li>
                                <li>Zugriffsstatus/HTTP Statuscode</li>
                                <li>Jeweils übertragene Datenmenge</li>
                                <li>Website, von der die Anforderung kommt</li>
                                <li>Verwendeter Webbrowser mit Versionsnummer und eingestellter Sprache</li>
                                <li>Betriebssystem sowie ggf. verwendete Oberfläche</li>
                            </ul>
                            <p className="text-sm text-slate-500">
                                Die Speicherdauer der erfassten Daten beträgt 14 Tage. Danach werden die vorstehend genannten Daten gelöscht.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white">c. Bewerbungen</h3>
                            <p>
                                Im Rahmen unserer Karriereseite können Sie sich initiativ oder auf konkrete Stellenangebote bewerben. Ihre Daten werden
                                nur im Rahmen der jeweiligen Stellenausschreibung (Art. 6 Abs. 1 lit. b DSGVO, § 26 BDSG) verarbeitet.
                            </p>
                            <div className="bg-brand-900/10 border-l-4 border-brand-500 p-4">
                                <p className="text-sm">
                                    <strong>Hinweis zu sensiblen Daten:</strong> Wir weisen Sie ausdrücklich darauf hin, dass Bewerbungen besonders sensible Angaben
                                    enthalten können. Übermitteln Sie uns solche Angaben, so erklären Sie sich ausdrücklich damit einverstanden, dass wir diese Daten
                                    zum Zwecke der Durchführung des Bewerberverfahrens verarbeiten dürfen.
                                </p>
                            </div>
                            <p>
                                Die Löschung der übermittelten Daten erfolgt bei Zurückweisung spätestens nach 6 Monaten nach Beendigung des Bewerbungsverfahrens.
                            </p>
                        </div>
                    </section>

                    <hr className="border-white/10" />

                    {/* Third Party Services */}
                    <section className="space-y-8">
                        <h2 className="text-2xl font-bold text-white">Dienste von Drittanbietern</h2>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">Google Analytics</h3>
                            <p>
                                Diese Website benutzt Google Analytics. Google Analytics verwendet „Cookies“. Die durch das Cookie erzeugten Informationen über Ihre
                                Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Wir haben die
                                IP-Anonymisierung aktiviert.
                            </p>
                            <p>
                                Sie können die Erfassung durch Google Analytics verhindern, indem Sie das Browser-Plugin herunterladen:
                                <a href="http://tools.google.com/dlpage/gaoptout?hl=de" className="text-brand-400 hover:underline ml-1" target="_blank" rel="noreferrer">Browser-Add-on</a>
                            </p>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">YouTube</h3>
                            <p>
                                Wir setzen zum Einbinden von Videos YouTube ein (erweiterter Datenschutzmodus). YouTube verwendet Cookies zur Datenerhebung.
                            </p>
                        </div>
                    </section>

                    <hr className="border-white/10" />

                    {/* Social Media */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">Social Media Plug-ins</h2>
                        <p>
                            Auf unseren Seiten sind Funktionen von Social Media Diensten eingebunden (Twitter, Instagram, XING, LinkedIn).
                            Wenn Sie diese nutzen, werden Daten an die jeweiligen Anbieter übertragen. Wir haben keinen Einfluss auf die erhobenen Daten.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    {/* Rights */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold text-white">7. Ihre Rechte</h2>
                        <p>Sie haben uns gegenüber folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-brand-500">
                            <li>Recht auf Auskunft</li>
                            <li>Recht auf Berichtigung oder Löschung</li>
                            <li>Recht auf Einschränkung der Verarbeitung</li>
                            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                            <li>Recht auf Datenübertragbarkeit</li>
                        </ul>

                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                            <p className="font-bold text-white mb-2">Kontakt für Ihre Rechte:</p>
                            <p>ASE GmbH</p>
                            <p>Datenschutzbeauftragter</p>
                            <p>Im Klauenfuß 35, 74172 Neckarsulm</p>
                            <p>E-Mail: helmut.nietsch@ase-gmbh.de</p>
                        </div>
                    </section>

                    {/* Objection */}
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">8. Widerspruch oder Widerruf</h2>
                        <p>
                            Falls Sie eine Einwilligung zur Verarbeitung Ihrer Daten erteilt haben, können Sie diese jederzeit widerrufen.
                            Soweit wir die Verarbeitung Ihrer personenbezogenen Daten auf die Interessensabwägung stützen, können Sie Widerspruch gegen die Verarbeitung einlegen.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default DataProtectionPage;
