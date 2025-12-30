import abbLogo from '../assets/abb.png';
import agramkowLogo from '../assets/AGRAMKOW.png';
import amsLogo from '../assets/ams.png';
import audiLogo from '../assets/audi.jpg';
import baesslerLogo from '../assets/Baessler.gif';
import boschLogo from '../assets/bosch.png';
import comauLogo from '../assets/comau.jpg';
import benzLogo from '../assets/benz.jpeg';
import durrLogo from '../assets/durr.png';
import durstLogo from '../assets/durst.png';
import bucherLogo from '../assets/emil-bucher.jpg';
import inosLogo from '../assets/inos.png';
import lavairLogo from '../assets/lavair.png';
import laeppleLogo from '../assets/LAEPPLE.png';
import logsystemsLogo from '../assets/logsystems.png';
import mollLogo from '../assets/moll.gif';
import oligoLogo from '../assets/oligo.png';
import porscheLogo from '../assets/porsche.jpg';
import rennerLogo from '../assets/renner.png';
import roleffLogo from '../assets/Roleff.png';
import roosKublerLogo from '../assets/Roos_Kuebler_Gruppe.png';
import scaLogo from '../assets/SCA- Schucker.png';
import schraderLogo from '../assets/schrader.jpg';
import thyssenkruppLogo from '../assets/Thyssenkrupp.png';
import vicontLogo from '../assets/vicont.png';
import vwLogo from '../assets/volkswagen.png';
import wagonLogo from '../assets/wagon-automotive.png';
import wollLogo from '../assets/woll.png';
import ziegenerLogo from '../assets/ziegener_Frick.png';

export interface Project {
    title: string;
    details: string[];
}

export interface ClientData {
    name: string;
    logo: string;
    projects: Project[];
}

export const REFERENCE_DATA: ClientData[] = [
    {
        name: "ABB",
        logo: abbLogo,
        projects: [
            {
                title: "Audi Neckarsulm EDL Linie 1 und 2",
                details: [
                    "Integration Robotertakt Schnittstelle zu Roboter herstellen",
                    "Umbau S5 auf S7 Profinet Hard- und Softwareplanung",
                    "Visualisierung, Schaltschrankbau, Installation und Inbetriebnahme Fördertechnik und Verfahrenstechnik"
                ]
            }
        ]
    },
    {
        name: "AGRAMKOW Fluid Systems A/S",
        logo: agramkowLogo,
        projects: [
            {
                title: "Audi Neckarsulm: Medienbefüllanlage in der Fahrzeugmontage",
                details: [
                    "Steuerungstechnische Einbindung an vorhandene Anlagensteuerung (Siemens S7)",
                    "Aufbau Schaltschrank und Klemmkästen",
                    "Verlegen neuer Leitungen und anschliesen Sensorik und Aktorik",
                    "Programmierung Frequenzumformer",
                    "E- Plan in vorhandener Anlagendoukumentation anpassen",
                    "VDE Prüfung durchführen",
                    "Inbetriebnahme",
                    "Schichtbegleitung"
                ]
            }
        ]
    },
    {
        name: "INDUSTRY AMS s.r.l.",
        logo: amsLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen: Vollautomatische Verladebrücke",
                details: [
                    "Realisierung nach TIA-Standard",
                    "Hardware- und Softwareplanung",
                    "Lieferung und Montage der Schaltschränke",
                    "Lieferung und Montage der Elektroinstallation",
                    "Inbetriebnahme und Schichtbegleitung",
                    "Taktzeitoptimierung"
                ]
            }
        ]
    },
    {
        name: "AUDI AG",
        logo: audiLogo,
        projects: [
            {
                title: "Neckarsulm Lackiererei",
                details: [
                    "Ablaufoptimierung, Karossenverfolgung und Visualisierung für neuen Audi A 8",
                    "Anpassungen für 35 Siemens S5 und S7 – Steuerungen",
                    "Lieferungen von Rollenbahnen, Quergurtförderern und Hubtischen"
                ]
            },
            {
                title: "Neckarsulm Großpressen",
                details: [
                    "Planung, Schaltschrankbau, Montage und Inbetriebnahme",
                    "Integration einer Krananlage mit Bodenplatte in Großraumpresse",
                    "Hochrüstarbeiten an Coilanlage inkl. Presse",
                    "Softwareentwicklung Schallüberprüfung Fehlteile in der Presse"
                ]
            },
            {
                title: "Neckarsulm Karosseriebau",
                details: [
                    "Komplette Elektroumfänge mit Siemens S7, Phönix Interbus und Visualisierung Gefasoft für Unterbau neuer Audi A8 mit 40 KUKA-Roboter",
                    "Ausschlussstelle für TT incl. Anbindung an übergeordnete Steuerungen und Leitrechner",
                    "Integration Neuer AUDI A8 (D4) in Unterbau Vorgänger A8 (D3)"
                ]
            },
            {
                title: "Roboterschulungszentrum Neckarsulm",
                details: [
                    "Aufbau 3 Schulungszellen mit Abbildung aller Applikationen",
                    "Hardwareplanung mittels CAD-System EPLAN",
                    "Softwareplanung",
                    "Komplette Lieferung und Montage der Schaltschränke und Elektroinstallation",
                    "Roboterprogrammierung Online",
                    "Komplett Inbetriebnahme und Schichtbegleitung"
                ]
            },
            {
                title: "Neckarsulm Fördertechnik und Sonstiges",
                details: [
                    "Fördertechnik Umbau für neue Skids",
                    "Integration B9 Cabrio in der Hohlraumkonservierung: Anpassung Mechanik Dachgehänge, Steuerungstechnische Integration, Inbetriebnahme",
                    "Grundlack: elektrische Sanierung von zwei Vorbehandlungsanlagen",
                    "Montagehalle A13: Modernisierung Elektrik mehrerer Anlagen, Hochrüsten auf S7, Visu-Pulte, Frequenzgeregelte Motoren, TIA Portal Programmierung",
                    "Sonder- und Decklacktrockner: Umbau S5 auf S7, SEW Umrichter",
                    "Zuführstrecke von Karobau zu Lackiererei: Umbau S5 auf S7 mit Safety",
                    "Lüftungsanlagen und Füllertrockner: Umbau S5 auf S7 mit Safety"
                ]
            }
        ]
    },
    {
        name: "Bässler GmbH",
        logo: baesslerLogo,
        projects: [
            {
                title: "Roboteranlage zur vollautomatischen Holzkistenfertigung",
                details: [
                    "Lieferung einer Roboteranlage",
                    "Steuerungstechnische Einbindung und Visu",
                    "Verlegen neuer Leitungen und anschließen Sensorik und Aktorik",
                    "Erstellung E- Plan und gesamte Anlagendokumentation",
                    "VDE Prüfung durchführen",
                    "Inbetriebnahme und Schichtbegleitung"
                ]
            }
        ]
    },
    {
        name: "Bosch Murrhardt",
        logo: boschLogo,
        projects: [
            {
                title: "Audi Neckarsulm Montage",
                details: [
                    "Hard- und Softwareplanung, Schaltschrankbau",
                    "Montage, Inbetriebnahme und Schichtbegleitung einer Schraubersteuerung"
                ]
            },
            {
                title: "VW-Kassel Montage",
                details: [
                    "Hard – und Softwareplanung, Schaltschrankbau von 5 Stück Schraubersteuerungen"
                ]
            },
            {
                title: "Mercedes Benz AG Sindelfingen Montage",
                details: [
                    "Hard – und Softwareplanung, Schaltschrankbau von Schraubersteuerungen"
                ]
            }
        ]
    },
    {
        name: "COMAU",
        logo: comauLogo,
        projects: [
            {
                title: "DaimlerChrysler Rastatt Rohbau",
                details: [
                    "A-Klasse W 168 (50 Roboter): Hardwareplanung Ruplan, Software S5, Visu Intouch, Profibus H1/H2, Roboterprogrammierung",
                    "Lange A-Klasse S168 (38 Roboter): Seitenwand außen, Aufbaustufe 2",
                    "Lange A-Klasse BR S168 (1 Klebe-Roboter): Seitenwand innen, Aufbaustufe 1",
                    "BR 169 A-Klasse (98 KUKA-Roboter): Seitenwand innen/aussen, S7, Pilz PSS Safetybus"
                ]
            },
            {
                title: "DaimlerChrysler Sindelfingen und Bremen Rohbau",
                details: [
                    "BR 204 C-Klasse (236 KUKA-Roboter, 30 SPS-Steuerungen)",
                    "Hardwareplanung Ruplan, Softwareplanung",
                    "Lieferung/Montage Schaltschränke, Elektroumfang, Wasserversorgung, Pneumatik",
                    "Inbetriebnahme, Schichtbegleitung"
                ]
            }
        ]
    },
    {
        name: "Mercedes-Benz Group AG",
        logo: benzLogo,
        projects: [
            {
                title: "Rastatt / Bucher Eislingen Rohbau",
                details: [
                    "Projekt „Längsträgerverstärkung“, komplette Steuerungsumfänge (4 Roboter)"
                ]
            },
            {
                title: "Rohbau Oberfläche und Montage bei Daimler Rastatt",
                details: [
                    "Abstapelanlage Federdom mit 4 Behältern und 2 Robotern (Hard/Software, Visu Intouch)",
                    "Aufbau/IBN Testanlagen für SPS, Pilz Sicherheits-SPS und Roboteranlagen",
                    "Automatisierte Zuführeinrichtungen",
                    "ASS – PLUS – TCP/IP- und Datenschnittstellen",
                    "Stationäre Barcodeleser und Funkhandscanner",
                    "Leitungsmessungen, Prüfprotokolle",
                    "Roboterzelle zur Windschutzscheibenapplikation mit PRIMER",
                    "Taktzeitoptimierungen W169 und CST245"
                ]
            },
            {
                title: "Sindelfingen Rohbau",
                details: [
                    "Neue E-Klasse W211 (19 Roboter): „Motorhaube“, Hardware Ruplan, Software Schneider SAD, Pilz-SPS PSS 3000, Profibus/Interbus"
                ]
            },
            {
                title: "Gaggenau",
                details: [
                    "LCA – Lösungen (Flexitaktanlagen) zur automatisierten Bauteilezuführung (80 Stk.) für DC Rastatt, Sindelfingen, Bremen"
                ]
            }
        ]
    },
    {
        name: "Dürr AG",
        logo: durrLogo,
        projects: [
            {
                title: "Audi Neckarsulm",
                details: [
                    "Farbmischraum: Temperiersteuerungen über Sipart – Bus (Hard-/Software, Visu, Schaltschrankbau, IBN)",
                    "Hohlraumkonservierung: Hard-/Software, Visu, Kopplung Leitrechner, Schaltschrankbau, IBN"
                ]
            },
            {
                title: "Porsche Oberfläche",
                details: [
                    "Farbmischraum mit Stahl – MUX – SPS über L2 – Bus (Hard-/Software, Visu Factory-Link, Schaltschrankbau, IBN)"
                ]
            },
            {
                title: "DaimlerChrysler Rastatt Oberfläche",
                details: [
                    "Linie NAD und SFA (4 Roboter): Versetzen und Anpassen Fördertechnik, S5, Intouch, Profibus H1/H2"
                ]
            },
            {
                title: "Audi Neckarsulm Böllinger Höfe",
                details: [
                    "Elektrischer Aufbau von drei Montagelinien für den Audi R8",
                    "Aufbau Schaltschränke, Visu Pulte, Klemmkästen",
                    "Software- und Hardwareplanung, IBN, VDE"
                ]
            }
        ]
    },
    {
        name: "Durst Lackier- und Trocknungsanlagen GmbH",
        logo: durstLogo,
        projects: [
            {
                title: "Audi Neckarsulm",
                details: [
                    "Standalone Lackierkabine in Montage Halle zum Spotten von Fahrzeugen",
                    "Steuerungstechnische Programmierung der Spotkabine (Siemens Logo)",
                    "Verlegen aller Leitungen, Sensorik/Aktorik",
                    "E-Plan Anpassung, VDE Prüfung, IBN"
                ]
            }
        ]
    },
    {
        name: "Emil Bucher GmbH & Co. KG",
        logo: bucherLogo,
        projects: [
            {
                title: "Audi Neckarsulm / Bucher Eislingen Rohbau",
                details: [
                    "C 6 „Unterbau“ (12 Roboter): Hardware Eplan, Software S7, Visu, Interbus, Roboterprogrammierung"
                ]
            },
            {
                title: "Sindelfingen Rohbau",
                details: [
                    "E-Klasse C 219 (42 KUKA-Roboter): Seitenwand innen/aussen, Anbaulinie. Ruplan, Schneider SAD, Pilz PSS 3000, Profibus/Interbus",
                    "S-Klasse C 221 (86 KUKA-Roboter): Vorderbau, Stirnwand"
                ]
            },
            {
                title: "Daimler Sindelfingen",
                details: [
                    "BR 212 E-Klasse (68 KUKA-Roboter, 8 SPS Schneider Conzept, 8 Pilz): Vorbau. Hardware E-Plan, Schaltschrankbau, Montage",
                    "BR 221 E-Klasse (83 KUKA-Roboter, 12 SPS): Werk 50 Vorbau. Hardware Ruplan"
                ]
            }
        ]
    },
    {
        name: "inos Automationssoftware GmbH",
        logo: inosLogo,
        projects: [
            {
                title: "Audi Neckarsulm & VW Kassel",
                details: [
                    "Hardwareplanung",
                    "Bau Schaltschränke und Installation vor Ort",
                    "Verlegen neuer Leitungen und anschliesen Kamerasystem für Roboterzellen",
                    "Inbetriebnahmeunterstüzung"
                ]
            }
        ]
    },
    {
        name: "Lavair AG Klimatechnik",
        logo: lavairLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Steuerungstechnische Einbindung Luftbefeuchtungsanlage an Siemens S7",
                    "Verlegen neuer Leitungen, Sensorik/Aktorik",
                    "E-Plan Anpassung, VDE Prüfung, Visu Anpassung, IBN"
                ]
            }
        ]
    },
    {
        name: "Läpple / FLT",
        logo: laeppleLogo,
        projects: [
            {
                title: "Projekte Heilbronn, Miele, Daimler",
                details: [
                    "Heilbronn: Hardwareplanung und Schaltschrankbau für eine Portanlage in Südafrika",
                    "Miele Gütersloh: Hydraulische Umformeinheit für Wäschetrommel (S7, Indramat, L2-Bus)",
                    "Daimler Mettingen: 2 Roboterfertigungsinseln",
                    "Daimler Böblingen Hulb: BR 212 E-Klasse (67 KUKA-Roboter, 8 SPS). Längsträger / Aufnahme Stoßdämpfer. Hardware Ruplan"
                ]
            }
        ]
    },
    {
        name: "LogSystems",
        logo: logsystemsLogo,
        projects: [
            {
                title: "Fördertechnik und Automatisierung",
                details: [
                    "Projekte im Bereich Fördertechnik und Automatisierung (Details auf Anfrage)"
                ]
            }
        ]
    },
    {
        name: "Moll Automatisierung GmbH",
        logo: mollLogo,
        projects: [
            {
                title: "Fördertechnik Umrüstungen",
                details: [
                    "Umrüstung von diversen Fördertechnikanlagen von S5 auf S7 Profinet",
                    "Hardware, Software, Visu, Lesestellen einbinden",
                    "Multifunktionsgebäude: Hard-/Softwareplanung, Schaltschrankbau, IBN Fördertechnik",
                    "Karossenheber mit Induktion (berührungslose Daten- und Spannungsübertragung, SEW Pepperl & Fuchs)"
                ]
            }
        ]
    },
    {
        name: "OLIGO Lichttechnik GmbH / surface controls",
        logo: oligoLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Steuerungstechnische Einbindung Lichtsteuerung OLIGO an Siemens S7",
                    "E-Plan Anpassung, VDE Prüfung",
                    "Schnittstelle zur Anlagenvisualisierung (ewbk- elektronische Wagenbegleitkarte)",
                    "Inbetriebnahme"
                ]
            }
        ]
    },
    {
        name: "Dr. Ing. h.c. F. Porsche AG",
        logo: porscheLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Oberfläche: Umbau Förderanlage Füller- Decklackbereich von AEG auf Siemens SPS (ca. 1500 E/A)",
                    "Oberfläche: Umbau Förderanlage Polier- und Nacharbeits- Bereich von AEG auf Siemens SPS (ca. 800 E/A)",
                    "Vorbehandlungsanlage: Umbau auf SEW-IPOS-Regelung und Siemens Visu TP 270",
                    "Gehängesteuerung: Umrüsten von AEG A500 auf Siemens S7, Safetybus, Funkfernsteuerung",
                    "Taktzeitoptimierung Vorbehandlung KTL (SEW)",
                    "Rohbau: Soll–Istwert/Taktzeitanzeigen, Schnittstellensteuerschrank ZLT, Funkuhrsteuerung"
                ]
            }
        ]
    },
    {
        name: "Renner Industrieanlagen GmbH",
        logo: rennerLogo,
        projects: [
            {
                title: "Audi Neckarsulm",
                details: [
                    "Fördertechnik Bypass Grundlack für Integration Lamborghini Urus",
                    "Integration Ein- Ausschleussstelle inkl. Querförderer",
                    "Schaltschrankbau, Leitungsverlegung, Lesestellen (MDS)",
                    "Einbindung an Siemens S7, SEW Frequenzumformer",
                    "E-Plan Anpassung, VDE Prüfung, IBN"
                ]
            }
        ]
    },
    {
        name: "Roleff GmbH & CO. KG",
        logo: roleffLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Werkerhubbühnen: Einbindung an S7, SEW Frequenzumformer, VDE",
                    "Scherenhubtisch: Einbindung an S7, SEW Frequenzumformer, Visu Anpassung, VDE"
                ]
            }
        ]
    },
    {
        name: "Roos & Kübler Gruppe",
        logo: roosKublerLogo,
        projects: [
            {
                title: "Daimler Böblingen Hulb",
                details: [
                    "Integration BR 219 in BR212 Anlagen (Längsträger)",
                    "Hardware Ruplan, Softwareplanung, Schaltschrankbau, Elektroumfang",
                    "Roboterprogrammierung Off- Online, IBN"
                ]
            }
        ]
    },
    {
        name: "SCA- Schucker/ Atlas Copco IAS GmbH",
        logo: scaLogo,
        projects: [
            {
                title: "Audi & BMW",
                details: [
                    "Audi Neckarsulm/Ingolstadt: Konzeptionisierung einer Zentralsteuerung anstatt Einzelsteuerungen (Hardware, Schaltschrank, Software, Visu)",
                    "Audi Neckarsulm: Pilotanlage für 2-Komponentenkleber",
                    "BMW München: Zentralsteuerung Konzeptionisierung (Hardware, Schaltschrank, Software, Visu)"
                ]
            }
        ]
    },
    {
        name: "SCHRADER Verfahrenstechnik GmbH",
        logo: schraderLogo,
        projects: [
            {
                title: "Audi Neckarsulm",
                details: [
                    "Materialversorgung CFK Maskierung: Einbindung an S7, Visu, Schnittstellen Graco/Profinet, VDE",
                    "Farbversorgung Editionslackiererei: Einbindung an S7, Visu, VDE"
                ]
            }
        ]
    },
    {
        name: "Thyssenkrupp AG",
        logo: thyssenkruppLogo,
        projects: [
            {
                title: "Audi, Daimler & Porsche",
                details: [
                    "Audi Neckarsulm: Hardware/Schaltschrankbau Vorderboden A6",
                    "Audi Neckarsulm: Steuerungstechnik für 15 SPS und 38 Roboter Rohbau A8",
                    "Audi Neckarsulm: Projekt AU 58x Unterbaugruppen (126 Roboter) VASS-Standard",
                    "Daimler: Rohbau BR 221 (20 ABB-Roboterm Tunnel/Boden), BR 213 (96 KUKA-Roboter, Seitenwand), BR 190 AMG (9 KUKA-Roboter)",
                    "Porsche Zuffenhausen: Projekt PO992 Seitenwand/Türen (44 Roboter) VASS-Standard",
                    "Dräxlmaier Sachsenheim: Batteriefertigung Taycan (Prozessoptimierung Software/TIA)"
                ]
            }
        ]
    },
    {
        name: "ViCont GmbH",
        logo: vicontLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Integration Tankdeckelprüfstation Sportwagen an S7",
                    "Sensorik Anschluss, E-Plan Anpassung, VDE, Visu Anpassung"
                ]
            }
        ]
    },
    {
        name: "Volkswagen Braunschweig",
        logo: vwLogo,
        projects: [
            {
                title: "Audi Neckarsulm Hohlraumkonservierung",
                details: [
                    "Umrüsten Bestandsflutbecken für neue Fahrzeugmodelle",
                    "Schaltschränke aufrüsten, Bedienpulte, SEW IPOS",
                    "Einbindung an S7, SEW Frequenzumformer",
                    "E-Plan Anpassung, VDE Prüfung, IBN"
                ]
            }
        ]
    },
    {
        name: "Wagon Automotive Nagold GmbH",
        logo: wagonLogo,
        projects: [
            {
                title: "WAGON Rohbau CL217 S-Klasse",
                details: [
                    "Heckwagen CL217 (4 KUKA-Roboter, 1 SPS): Hardware Ruplan, Lieferung komplett",
                    "Integration Heckwagen CL217 in Anlage mit 31 Typen (5 KUKA-Roboter): Hardware EPLAN"
                ]
            }
        ]
    },
    {
        name: "Woll Maschinenbau GmbH",
        logo: wollLogo,
        projects: [
            {
                title: "Daimler Rastatt",
                details: [
                    "A und B-Klasse (1 KUKA-Roboter): Laserzelle Dachhimmel mit Fördertechnik",
                    "Hardware Ruplan, Softwareplanung, Lieferung komplett, IBN"
                ]
            }
        ]
    },
    {
        name: "Ziegener + Frick GmbH",
        logo: ziegenerLogo,
        projects: [
            {
                title: "Porsche Zuffenhausen",
                details: [
                    "Steuerungstechnische Einbindung Ionisationsportal an S7",
                    "Bau Schaltschrank und Aufbau vor Ort Decklackbereich",
                    "E-Plan Anpassung, VDE Prüfung, Visu Anpassung, IBN"
                ]
            }
        ]
    }
];
