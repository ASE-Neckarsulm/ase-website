-- Create the jobs table
CREATE TABLE IF NOT EXISTS jobs (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  location TEXT NOT NULL,
  department TEXT NOT NULL,
  image TEXT NOT NULL,
  short_description TEXT NOT NULL,
  description TEXT NOT NULL,
  responsibilities TEXT[] NOT NULL,
  requirements TEXT[] NOT NULL,
  benefits TEXT[] NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO jobs (id, title, type, location, department, image, short_description, description, responsibilities, requirements, benefits)
VALUES
  (
    'sps-programmierer',
    'SPS-Programmierer (m/w/d)',
    'Vollzeit',
    'Neckarsulm',
    'Automatisierung',
    'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    'Entwickeln Sie komplexe Steuerungskonzepte für die Automobilindustrie mit Siemens TIA und Beckhoff.',
    'Als SPS-Programmierer bei ASE entwickeln Sie anspruchsvolle Steuerungskonzepte für unsere Kunden in der Automobilindustrie. Sie begleiten Projekte von der Konzeption bis zur Inbetriebnahme.',
    ARRAY['Entwicklung von SPS-Software (Siemens TIA Portal, Step 7, Beckhoff TwinCAT)', 'Visualisierungserstellung (WinCC, HMI)', 'Inbetriebnahme der Anlagen beim Kunden vor Ort', 'Technische Klärung mit Kunden und Lieferanten', 'Schulung des Bedienpersonals'],
    ARRAY['Studium der Elektrotechnik, Mechatronik oder Ausbildung mit Weiterbildung zum Techniker', 'Fundierte Kenntnisse in der SPS-Programmierung', 'Reisebereitschaft für Inbetriebnahmen', 'Gute Deutsch- und Englischkenntnisse'],
    ARRAY['Unbefristeter Arbeitsvertrag', 'Attraktives Gehaltspaket', 'Firmenwagen (auch zur privaten Nutzung)', '30 Tage Urlaub', 'Weiterbildungsmöglichkeiten']
  ),
  (
    'roboter-programmierer',
    'Roboter-Programmierer (m/w/d)',
    'Vollzeit',
    'Neckarsulm / Rastatt',
    'Robotics',
    'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=1200',
    'Bringen Sie Bewegung in die Industrie. Programmierung von KUKA, ABB und Fanuc Robotern.',
    'Sie sind der Experte für Kinematik und Bewegungsabläufe. In dieser Rolle programmieren und optimieren Sie Industrieroboter für komplexe Fertigungsaufgaben.',
    ARRAY['Offline- und Online-Programmierung von Industrierobotern (KUKA, ABB, Fanuc)', 'Simulation von Bewegungsabläufen', 'Integration von peripheren Systemen (Greifer, Schweißzangen, Klebesysteme)', 'Taktzeitoptimierung und Prozessverbesserung', 'Fehlersuche und Support'],
    ARRAY['Erfahrung in der Roboterprogrammierung', 'Kenntnisse in VASS-Standard von Vorteil', 'Technisches Verständnis für Fertigungsprozesse', 'Teamfähigkeit und eigenständige Arbeitsweise'],
    ARRAY['Modernes Equipment', 'Flexible Arbeitszeiten', 'Betriebliche Altersvorsorge', 'JobRad Angebot']
  ),
  (
    'elektrokonstrukteur',
    'Elektrokonstrukteur (m/w/d)',
    'Vollzeit',
    'Neckarsulm',
    'Engineering',
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200',
    'Planen Sie die Nervenbahnen moderner Anlagen mit EPLAN P8.',
    'Verantworten Sie die hardwareseitige Planung unserer Projekte. Vom ersten Stromlaufplan bis zur Stückliste.',
    ARRAY['Erstellung von Schaltplänen mit EPLAN P8', 'Auslegung von Antriebs- und Steuerungskomponenten', 'Erstellung von Aufbauplänen und Stücklisten', 'Normgerechte Dokumentation', 'Enge Abstimmung mit dem Schaltschrankbau'],
    ARRAY['Erfahrung mit EPLAN P8', 'Kenntnisse der relevanten Normen (DIN EN 60204, etc.)', 'Strukturierte und genaue Arbeitsweise', 'Abgeschlossene technische Ausbildung oder Studium'],
    ARRAY['Ergonomischer Arbeitsplatz', 'Home-Office Möglichkeit', 'Familiäres Betriebsklima', 'Kostenlose Getränke']
  )
ON CONFLICT (id) DO NOTHING;
