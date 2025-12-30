import { Job } from '../types';

export const localJobs: Job[] = [
    {
        id: 'sps-programmierer',
        title: 'SPS-Programmierer (m/w/d)',
        type: 'Vollzeit',
        location: 'Neckarsulm',
        department: 'Automatisierung',
        image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
        shortDescription: 'Entwickeln Sie komplexe Steuerungskonzepte für die Automobilindustrie mit Siemens TIA und Beckhoff.',
        description: 'Als SPS-Programmierer bei ASE entwickeln Sie anspruchsvolle Steuerungskonzepte für unsere Kunden in der Automobilindustrie. Sie begleiten Projekte von der Konzeption bis zur Inbetriebnahme.',
        responsibilities: [
            'Entwicklung von SPS-Software (Siemens TIA Portal, Step 7, Beckhoff TwinCAT)',
            'Visualisierungserstellung (WinCC, HMI)',
            'Inbetriebnahme der Anlagen beim Kunden vor Ort',
            'Technische Klärung mit Kunden und Lieferanten',
            'Schulung des Bedienpersonals'
        ],
        requirements: [
            'Studium der Elektrotechnik, Mechatronik oder Ausbildung mit Weiterbildung zum Techniker',
            'Fundierte Kenntnisse in der SPS-Programmierung',
            'Reisebereitschaft für Inbetriebnahmen',
            'Gute Deutsch- und Englischkenntnisse'
        ],
        benefits: [
            'Unbefristeter Arbeitsvertrag',
            'Attraktives Gehaltspaket',
            'Firmenwagen (auch zur privaten Nutzung)',
            '30 Tage Urlaub',
            'Weiterbildungsmöglichkeiten'
        ]
    },
    {
        id: 'roboter-programmierer',
        title: 'Roboter-Programmierer (m/w/d)',
        type: 'Vollzeit',
        location: 'Neckarsulm / Rastatt',
        department: 'Robotics',
        image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1200',
        shortDescription: 'Bringen Sie Bewegung in die Industrie. Programmierung von KUKA, ABB und Fanuc Robotern.',
        description: 'Sie sind der Experte für Kinematik und Bewegungsabläufe. In dieser Rolle programmieren und optimieren Sie Industrieroboter für komplexe Fertigungsaufgaben.',
        responsibilities: [
            'Offline- und Online-Programmierung von Industrierobotern (KUKA, ABB, Fanuc)',
            'Simulation von Bewegungsabläufen',
            'Integration von peripheren Systemen (Greifer, Schweißzangen, Klebesysteme)',
            'Taktzeitoptimierung und Prozessverbesserung',
            'Fehlersuche und Support'
        ],
        requirements: [
            'Erfahrung in der Roboterprogrammierung',
            'Kenntnisse in VASS-Standard von Vorteil',
            'Technisches Verständnis für Fertigungsprozesse',
            'Teamfähigkeit und eigenständige Arbeitsweise'
        ],
        benefits: [
            'Modernes Equipment',
            'Flexible Arbeitszeiten',
            'Betriebliche Altersvorsorge',
            'JobRad Angebot'
        ]
    },
    {
        id: 'elektrokonstrukteur',
        title: 'Elektrokonstrukteur (m/w/d)',
        type: 'Vollzeit',
        location: 'Neckarsulm',
        department: 'Engineering',
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
        shortDescription: 'Planen Sie die Nervenbahnen moderner Anlagen mit EPLAN P8.',
        description: 'Verantworten Sie die hardwareseitige Planung unserer Projekte. Vom ersten Stromlaufplan bis zur Stückliste.',
        responsibilities: [
            'Erstellung von Schaltplänen mit EPLAN P8',
            'Auslegung von Antriebs- und Steuerungskomponenten',
            'Erstellung von Aufbauplänen und Stücklisten',
            'Normgerechte Dokumentation',
            'Enge Abstimmung mit dem Schaltschrankbau'
        ],
        requirements: [
            'Erfahrung mit EPLAN P8',
            'Kenntnisse der relevanten Normen (DIN EN 60204, etc.)',
            'Strukturierte und genaue Arbeitsweise',
            'Abgeschlossene technische Ausbildung oder Studium'
        ],
        benefits: [
            'Ergonomischer Arbeitsplatz',
            'Home-Office Möglichkeit',
            'Familiäres Betriebsklima',
            'Kostenlose Getränke'
        ]
    }
];
