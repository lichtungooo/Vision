# Module & Komponenten Übersicht

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** Architektur-Übersicht für Real-Life Stack / Forge

---

## Was ist Real-Life Stack / Forge?

**Real-Life Stack** (Arbeitstitel könnte "Forge" werden) ist eine modulare Plattform für lokale Gemeinschaften und Spaces, um echte Begegnungen, Wertschöpfung und Potenzialentfaltung zu fördern.

**Kernprinzipien:**
- **Modular:** Spaces/Communities wählen, welche Module sie aktivieren
- **Real-World-First:** Technologie bringt Menschen ZURÜCK in die Realität (nicht virtuell)
- **Ohne Geld:** Wertschätzung statt Preise (Token-Scheine, Web of Trust)
- **Für ALLE:** Kinder, Erwachsene, Handwerk, NGOs, Gemeinschaften

---

## Module vs. Komponenten

### Was ist ein Modul?
- **Vollständige Feature-Einheit** mit eigener UI, Logik, Datenmodell
- **Eigenständig aufrufbar** (fullscreen auf Mobile, Split-Screen auf Desktop)
- **Konfigurierbar:** Spaces können Module aktivieren/deaktivieren
- **Entwicklung:** Jedes Modul kann unabhängig entwickelt werden

### Was ist eine Komponente?
- **Teil eines Moduls** oder **kleine Vorschau im Profil/Dashboard**
- **NICHT eigenständig**, sondern eingebettet
- **Beispiel:** Avatar-Icon im Profil (Komponente) → Klick öffnet Avatar-Modul

---

## Architektur-Prinzip: Map als Fundament

**WICHTIGSTE ARCHITEKTUR-ENTSCHEIDUNG:**

Die **Map ist IMMER die Basis**. Alle anderen Module sind **schwebende Fenster/Tiles auf der Map**.

### Floating-Window-Architektur:
- Map ist immer im Hintergrund sichtbar
- Module öffnen sich als Fenster mit **abgerundeten Ecken** auf der Map
- Fenster sind **verschiebbar, skalierbar, andockbar**
- **Luft zwischen Fenstern** - immer Teile der Map sichtbar
- Desktop: 4 Fenster gleichzeitig möglich (z.B. Kalender oben-links, Profil oben-rechts, Avatar unten-rechts, Quest-Log unten-links)
- Mobile: Landscape-Modus mit Dashboard-Widget (Vollbild), Portrait-Modus mit einzelnen Fenstern
- **Map = schnellster Einstiegspunkt** - "Ich will dorthin" → Navigation
- Ziel: Menschen raus aus der App, rein in die Realität!

---

## Alle Module (Übersicht)

### 1. Map-Modul (ABSOLUTE BASIS!)
**Status:** Konzept - HÖCHSTE PRIORITÄT
**Zweck:** Geografische Basis für ALLES - Navigation, Discovery, reale Begegnungen

**WICHTIG:** Map ist nicht mehr nur ein Modul unter vielen - sie ist **DAS FUNDAMENT**!

**Hauptfunktionen:**
- **Map-Layer-System:**
  - Fantastische Karten (künstlerische Ebenen)
  - Weltraumansicht (Space-View)
  - Multiple Layer gleichzeitig wählbar
- **Navigation:**
  - Google Maps Integration (MVP - einfachste Lösung)
  - Kalender-Einträge → "Navigiere dorthin"
  - Quest-Einträge → "Navigiere dorthin"
  - Event-Einträge → "Navigiere dorthin"
- **Content auf Map:**
  - Quest-Icons (farbkodiert nach Kategorie)
  - Event-Icons
  - Marktplatz-Icons (Angebote, Anfragen, Ressourcen, Werkzeuge)
  - Wertschöpfungs-Icons (wo wurde offline Value geschaffen?)
- **Filter-System (CRITICAL!):**
  - Quick Filter: Hashtag-Suche, Distanz-Slider, Kategorie-Chips
  - Erweiterte Filter: Level, Teilnehmerzahl, Zeitpunkt, Quest-Typ, Belohnung, Ersteller, etc.
- **Floating Windows auf Map:**
  - Module öffnen sich als Fenster auf Map
  - Immer Teile der Map zwischen Fenstern sichtbar
  - Fenster verschiebbar, skalierbar, andockbar

**Komponenten (im Dashboard):**
- Mini-Map (zeigt Umgebung mit nächsten 5 Quests/Events/Angeboten)

**Verknüpfungen:**
- **ALLE MODULE!** (Map ist Basis für alles)
- Quest-Modul, Kalender-Modul, Marktplatz-Modul, Wertschöpfungs-Modul, Profil, Community

**Dokumentation:** [map-modul.md](map-modul.md) (TODO)

---

### 2. Profil-Modul
**Status:** Konzept - PRIORITÄT 2 (nach Map)
**Zweck:** Persönliches Profil als Feed - Einstiegspunkt zu allen Modulen

**WICHTIG:** Profil ist NICHT statisch, sondern ein **scrollbarer Feed** mit Modul-Entry-Points!

**Hauptfunktionen:**
- **Feed-Style Scrolling:**
  - Nach unten scrollen für mehr Inhalte
  - Jedes Modul hat Entry-Point im Feed
- **Profil-Header:**
  - Avatar-Icon (klickbar → Avatar-Modul)
  - Name, Level, XP
  - Skill-Tree-Vorschau (Top 3 Skills)
- **Module-Entry-Points (Kacheln):**
  - Quest-Übersicht (Verfügbare/Laufende/Beobachtete)
  - Kalender-Widget (Nächste 3 Events)
  - Marktplatz-Übersicht (Meine Angebote/Anfragen)
  - Log-Vorschau (Letzte 3 Einträge)
  - Wallet-Vorschau (Offline/Online Value)
  - Community-Übersicht (Meine Communities)
- **Navigation:**
  - Klick auf Kachel → Modul öffnet sich als Floating Window auf Map

**Komponenten:**
- Avatar-Icon, Stats, Module-Kacheln

**Verknüpfungen:**
- Alle Module (Profil ist zentraler Hub)
- Map (Profil öffnet sich als Window auf Map)

**Dokumentation:** [profil-modul.md](profil-modul.md) (TODO)

---

### 3. Quest-Modul
**Status:** In Entwicklung
**Zweck:** Gamification für reale Herausforderungen - für ALLE (Kinder, Erwachsene, Handwerk, NGOs)

**Hauptfunktionen:**
- Quest-Erstellung (mit Markdown, Orten, Hashtags, Skills, Belohnungen)
- Quest-Discovery (auf Map, im Kalender, im Profil)
- Quest-Teilnahme (QR-Code-Verifizierung oder Upload-Beweis)
- Quest-Sharing (Hamburg → München → Paris)
- Quest-Reihen (z.B. Carpenter Level 1-10)
- Positive Ratings (Teilnehmerzahl, Kommentare, Kopien)
- Handwerk-Integration (Azubi-Suche umgedreht)

**Komponenten (im Profil/Dashboard):**
- Quest-Übersicht (Kacheln: Verfügbare, Laufende, Beobachtete Quests)

**Verknüpfungen:**
- Map (Quest-Icons auf Map)
- Kalender-Modul (Quests mit Zeitangabe erscheinen im Kalender)
- Avatar-Modul (Items als Belohnung)
- Skill-Tree-Modul (XP für Skills)
- Log-Modul (Questlog)
- Web of Trust (Quest-Sichtbarkeit)

**Dokumentation:** [quest-modul.md](quest-modul.md)

---

### 4. Kalender-Modul
**Status:** Spezifikation vorhanden - PRIORITÄT 3 (nach Map & Profil)
**Zweck:** Gemeinsame Events, Termine, Verfügbarkeiten - ohne zentrale Plattform-Abhängigkeit

**WICHTIG:** Kalender ist **absolute Priorität** nach Map/Profil - Integration mit allem!

**Hauptfunktionen:**
- **Event-Erstellung** (mit Markdown, Orten, Hashtags)
- **Verfügbarkeitsabfragen** (ähnlich Doodle, aber dezentral)
- **Event-Kategorien** (Community, Privat, Öffentlich)
- **Kalender-Sync:**
  - Mit persönlichem Kalender via iCal/CalDAV
  - **Abonnieren von Kalendern** (Communities können Kalender teilen)
- **Navigation:**
  - Event auf Map anzeigen
  - "Navigiere dorthin" Button → Google Maps Navigation
- **Erinnerungen & Benachrichtigungen:**
  - Push-Benachrichtigungen
  - Telegram/Matrix/Signal Bot-Integration (siehe Notifications-Modul)

**Komponenten (im Profil/Dashboard):**
- Kalender-Widget (Mini-Kalender mit nächsten 3 Events)
- Event-Benachrichtigungen

**Verknüpfungen:**
- Quest-Modul (Quests mit Zeitangabe erscheinen im Kalender)
- Marktplatz-Modul (Post-MVP: Angebote mit Zeitraum)
- Map (Events mit Orten auf Map, Navigation)
- Web of Trust (Event-Sichtbarkeit)
- Notifications-Modul (Event-Erinnerungen)

**Dokumentation:** [kalender-modul.md](kalender-modul.md)

---

### 5. Marktplatz-Modul
**Status:** Spezifikation vorhanden - PRIORITÄT 4
**Zweck:** Lokaler Austausch von Begabungen, Bedürfnissen, Ressourcen & Werkzeugen - OHNE PREISE

**WICHTIG:** Marktplatz erweitert Money-Printer-Nutzbarkeit - das ist "der geile Scheiss"!

**Hauptfunktionen:**
- **Begabungen & Bedürfnisse** anbieten/finden
- **Ressourcen teilen** (Äpfel, Marmelade, Eier, etc.)
- **Werkzeuge verleihen** (Bohrmaschine, Rasenmäher, etc.)
- **Gemeinsames Sparen:** Communities können zusammen für große Anschaffungen sparen
- **Gemeinsamer Einkauf:** Communities kaufen zusammen ein (günstigere Preise)
- **Marktplatz-Raum:** 24/7 offener Raum mit QR-Codes auf Waren
- **Token-Scheine:** 50 Dank, 100 Dank - physisch + digital (siehe Wertschöpfungs-Modul)
- **Kredit-Option:** Via Money-Printer (Community entscheidet über Kredit-Vergabe)
- **Kartierung:** Wo sind Ressourcen? Wo sind Werkzeuge? (Map-Integration)
- **Kategorien-Datenbank:** Strukturierte Einheiten (kg, Liter, Stück)

**Komponenten (im Profil/Dashboard):**
- Marktplatz-Übersicht (Kacheln: Meine Angebote, Meine Anfragen, Meine Werkzeuge)

**Verknüpfungen:**
- Map (Angebote & Anfragen auf Map)
- Kalender-Modul (Post-MVP: Verfügbarkeit von Ressourcen)
- Web of Trust (Marktplatz-Zugang, Token-Scheine-Verschlüsselung)
- Wertschöpfungs-Modul (Token-Scheine, Wertschöpfung)
- Entscheidungs-Modul (Community entscheidet über Kredit-Vergabe)
- Log-Modul (Marktplatz-Log)

**Dokumentation:** [marktplatz-modul.md](marktplatz-modul.md)

---

### 6. Wertschöpfungs-Modul (E-Minuto Integration)
**Status:** NEU - Konzept - CRITICAL für Business!
**Zweck:** Digitale Wertschöpfung ohne Geld - E-Minuto Integration (Sebastian Garleck)

**WICHTIG:** Erweiterung von Money-Printer - in jede beliebige Währung konvertierbar!

**Hauptfunktionen:**
- **E-Minuto Integration:**
  - Sebastian Garleck's Arbeit (gebaut in Rust, muss portiert werden)
  - Digitale Wertschöpfung ohne klassisches Geld
  - In jede beliebige Währung konvertierbar
- **Offline + Online Funktionalität:**
  - **CRITICAL:** Web of Trust Keypair-Login (Private/Public Keys)
  - Offline QR-Code-Scans (Zahlungen ohne Internet)
  - Online Synchronisation (wenn wieder online)
  - **Transparenz:** Offline-Value vs. Online-Value sichtbar machen
- **Individuelle Währungen:**
  - Jeder User kann eigene Wertschöpfungs-Einheit erstellen ("Dank")
  - Communities können eigene Währungen erstellen (Minuto, Grado, Dank)
  - **Sequenzielle Nummerierung:** Offline + Online getrennt
  - **Verification:** Betrugsprävention durch Web of Trust
- **QR-Code System:**
  - Offline Zahlungen via QR-Code
  - Scan → Value wird offline gespeichert
  - Synchronisation wenn online
- **Money-Printer Connection:**
  - Direkter Anschluss an Anton's Money-Printer
  - Muss koordiniert werden (Tech-Stack!)
- **Transparenz (CRITICAL!):**
  - Alle Transaktionen sichtbar (Web of Trust)
  - Schafft Vertrauen
  - Keine versteckten Transfers

**Komponenten (im Profil/Dashboard):**
- Wertschöpfungs-Übersicht (Offline/Online Value, Transaktionen)

**Verknüpfungen:**
- Web of Trust (CRITICAL - Keypair-Login, Verification)
- Money-Printer (Anton's Projekt)
- Marktplatz-Modul (Token-Scheine, Zahlungen)
- Map (Wertschöpfungs-Icons auf Map)
- Wallet-Modul (Value-Übersicht)
- Log-Modul (Transaktions-Log)

**Dokumentation:** [wertschoepfungs-modul.md](wertschoepfungs-modul.md) (TODO)

---

### 7. Wallet-Modul (BRAUCHT ANDEREN NAMEN!)
**Status:** NEU - Konzept
**Zweck:** Übersicht über eigene Wertschöpfung - NICHT wie traditionelle Wallet!

**WICHTIG:** Name "Wallet" ist irreführend - es ist KEINE Krypto-Wallet, KEINE traditionelle Geldbörse!

**Hauptfunktionen:**
- **Value-Übersicht:**
  - Offline Value verfügbar
  - Online Value verfügbar
  - Was ich selbst geschaffen habe
- **Direkte Verbindung zu ALLEN Modulen:**
  - Quest-Log (welche Quests abgeschlossen)
  - Marktplatz-Log (was gegeben, was erhalten)
  - Event-Log (welche Events besucht)
  - Wertschöpfungs-Log (alle Transaktionen)
- **Statistiken & Filtering:**
  - Was habe ich gegeben?
  - Was habe ich erhalten?
  - Was habe ich gelernt?
  - Welche XP habe ich gesammelt?
  - Welche Level-Ups hatte ich?
- **Log-Connections:**
  - Alle Logs an einem Ort
  - Filter nach Modul, Typ, Zeitraum
  - "Filtere dein ganzes Leben"

**Komponenten (im Profil/Dashboard):**
- Wallet-Vorschau (Offline/Online Value, letzte 3 Transaktionen)

**Verknüpfungen:**
- Wertschöpfungs-Modul (Value-Tracking)
- Log-Modul (ALLE Logs)
- Quest-Modul (XP, Level-Ups)
- Marktplatz-Modul (Transaktionen)
- Kalender-Modul (Event-Teilnahme)

**Dokumentation:** [wallet-modul.md](wallet-modul.md) (TODO - **NAMING ÄNDERN!**)

---

### 8. Entscheidungs-Modul
**Status:** NEU - Konzept
**Zweck:** Community-Entscheidungen mit Konsens/Konsent - KEIN 50-50-Voting!

**WICHTIG:** Bewusstsein schaffen - niemand wird zurückgelassen!

**Hauptfunktionen:**
- **Entscheidungs-Methoden:**
  - **Konsens** (alle sind einverstanden)
  - **Konsent** (niemand hat schwerwiegenden Einwand)
  - **KEIN** 50-50 Mehrheitsentscheid (spaltet, lässt Menschen zurück)
- **Community-Wahl:**
  - Jede Community kann wählen, welche Methode sie nutzt
  - Methoden können kombiniert werden
- **Umfragen & Polls:**
  - Für einfache Abfragen
  - Stimmungsbilder
  - Aber: Finale Entscheidungen über Konsens/Konsent
- **Kredit-Vergabe:**
  - Community entscheidet über Kredit-Anträge (Marktplatz-Modul)
  - Transparenz durch Web of Trust
- **Bewusstseins-Bildung:**
  - Ziel: Alle Stimmen hören
  - Konflikte konstruktiv lösen
  - Niemand wird übergangen

**Komponenten (im Profil/Dashboard):**
- Entscheidungs-Übersicht (Laufende Entscheidungen, Meine Stimme)

**Verknüpfungen:**
- Marktplatz-Modul (Kredit-Vergabe, gemeinsame Anschaffungen)
- Community-Modul (Community-Entscheidungen)
- Notifications-Modul (Erinnerungen für Abstimmungen)

**Dokumentation:** [entscheidungs-modul.md](entscheidungs-modul.md) (TODO)

---

### 9. Wissensdatenbank-Modul
**Status:** NEU - Konzept
**Zweck:** Reddit-style Q&A - Fragen stellen, Antworten finden, Wissen teilen

**WICHTIG:** KEINE POLITIK! Keine Links-Rechts-Spaltung, neutrale Beleuchtung!

**Hauptfunktionen:**
- **Reddit-Style Q&A:**
  - Fragen stellen
  - Antworten posten
  - **Voting-System:** KEIN Thumbs-Up/Thumbs-Down!
  - Voting gibt Gewichtung (welche Antworten sind hilfreich?)
- **Eigene Antwort hinzufügen:**
  - Wenn keine Antwort passt → eigene Antwort schreiben
  - Andere können darauf reagieren
- **Neutrale Beleuchtung:**
  - Ziel: Sachliche, objektive Informationen
  - KEINE politische Spaltung
  - KEINE ideologische Einfärbung
  - Alle Perspektiven willkommen
- **Kategorien:**
  - Handwerk, Gesundheit, Ernährung, Gemeinschaft, etc.
  - Hashtag-System wie bei Quests
- **Moderation:**
  - Community-basiert (Web of Trust)
  - Missbrauch verhindern
  - Konstruktive Diskussionen fördern

**Komponenten (im Profil/Dashboard):**
- Wissensdatenbank-Vorschau (Meine Fragen, Top-Antworten)

**Verknüpfungen:**
- Quest-Modul (Quests können auf Wissensdatenbank verlinken)
- Community-Modul (Community-spezifisches Wissen)
- Web of Trust (Moderation, Sichtbarkeit)

**Dokumentation:** [wissensdatenbank-modul.md](wissensdatenbank-modul.md) (TODO)

---

### 10. AI-Modul / Eli-Modul
**Status:** NEU - Konzept
**Zweck:** KI-Unterstützung für Quest-Erstellung, Suche, Organisation

**WICHTIG:** CRITICAL für Sichtbarkeit - Quests finden, Quests entwickeln!

**Hauptfunktionen:**
- **Quest-Erstellungs-Hilfe:**
  - KI hilft bei Quest-Formulierung
  - Vorschläge für Skills, Items, Belohnungen
  - Markdown-Formatierung
- **Suche & Discovery:**
  - "Welche Quests passen zu mir?"
  - "Wo finde ich Handwerk-Quests?"
  - Semantische Suche (nicht nur Hashtags)
- **Organisations-Hilfe:**
  - Kalender-Planung
  - Event-Vorschläge
  - Community-Organisation
- **Credits-System (optional):**
  - Basis-Funktionen kostenlos
  - Komplexe Prozesse kosten Credits (z.B. Quest-Serie generieren)
  - Credits via Wertschöpfungs-Modul
- **Immer erreichbar:**
  - Chat-Interface
  - Voice-Input (später)
  - Integration in alle Module

**Komponenten (im Profil/Dashboard):**
- AI-Chat-Icon (immer sichtbar, Klick öffnet Chat)

**Verknüpfungen:**
- Quest-Modul (Quest-Erstellung, Discovery)
- Kalender-Modul (Event-Planung)
- Wissensdatenbank-Modul (Wissen finden)
- Marktplatz-Modul (Angebote finden)
- Map (Suche auf Map)

**Dokumentation:** [ai-modul.md](ai-modul.md) (TODO)

---

### 11. Notifications-Modul
**Status:** NEU - Konzept (Anton's Vorschlag!)
**Zweck:** Multi-Messenger Integration - Push, Telegram, Matrix, Signal

**WICHTIG:** KEIN eigener Messenger - Leute nutzen WhatsApp eh - aber Anbindung!

**Hauptfunktionen:**
- **Telegram Bot Integration:**
  - Benachrichtigungen via Telegram
  - Bot-Befehle (z.B. "/quests in meiner Nähe")
  - Automatisierte Nachrichten
- **Matrix Server Posting:**
  - Community-Updates in Matrix-Räumen
  - Dezentrale Kommunikation
- **Signal Bots (optional):**
  - Für datenschutzbewusste Communities
  - Signal-Bot-API nutzen
- **Push Notifications:**
  - Mobile App Push-Notifications
  - Web Push (Browser)
- **Automatisierte Nachrichten:**
  - Event-Erinnerungen
  - Quest-Einladungen
  - Marktplatz-Anfragen
  - Community-Entscheidungen (Entscheidungs-Modul)
- **Sicherheit vs. Kommunikation:**
  - Balance zwischen Sicherheit und Nutzbarkeit
  - Nutzer entscheiden, welche Kanäle sie aktivieren
  - Wir bauen KEINEN eigenen Messenger!

**Komponenten (im Profil/Dashboard):**
- Notifications-Übersicht (Letzte 5 Benachrichtigungen)

**Verknüpfungen:**
- Kalender-Modul (Event-Erinnerungen)
- Quest-Modul (Quest-Einladungen)
- Marktplatz-Modul (Anfragen)
- Entscheidungs-Modul (Abstimmungs-Erinnerungen)
- Community-Modul (Community-Updates)

**Dokumentation:** [notifications-modul.md](notifications-modul.md)

---

### 12. Health-Modul (Gesundheits-Modul)
**Status:** NEU - Konzept
**Zweck:** Hilfe zur Selbsthilfe im Bereich Gesundheit - altes Wissen, Erfahrungsaustausch

**WICHTIG:** KEINE Heilversprechen! Hilfe zur Selbsthilfe, jeder ist selbst verantwortlich.

**Hauptfunktionen:**
- **Gesundheitskreise:** Lokale Gruppen (Reiki, Yoga, Homöopathie, Wildkräuter)
- **Gesundheits-Quests:** Fasten, Wildkräuter, Yoga-Challenge, zuckerfrei, Meditation
- **Wissensdatenbank Integration:** Heilkräuter, Rezepte, Studien, Erfahrungsberichte
- **Marktplatz Integration:** Heilkräuter, gesunde Lebensmittel, Nahrungsergänzungsmittel
- **Psychosomatik:** Krankheit als Spiegel der Psyche verstehen
- **Altes Wissen:** Ayurveda, TCM, germanische Heilkräuter, Alchemie, Homöopathie

**Komponenten (im Profil/Dashboard):**
- Health-Vorschau (Gesundheitskreise, laufende Quests, letzte Einträge)

**Verknüpfungen:**
- Quest-Modul (Gesundheits-Quests, Skills: Gesundheitsbewusstsein)
- Wissensdatenbank-Modul (Heilkräuter, Rezepte, Studien)
- Marktplatz-Modul (Heilkräuter, gesunde Lebensmittel)
- Map-Modul (Gesundheitskreise auf Map)
- Kalender-Modul (Treffen, Workshops)
- Community-Modul (Gesundheitskreise bilden)
- Web of Trust (Moderation, Qualitätskontrolle)

**Dokumentation:** [health-modul.md](health-modul.md)

---

### 13. Avatar-Modul
**Status:** Konzept (Teil des Quest-Moduls)
**Zweck:** Visueller Avatar mit Items als Belohnungen - Motivation & soziale Anerkennung

**WICHTIG:** Avatar ist KEIN einfaches Profil-Bild, sondern ein **eigenes Modul**!

**Hauptfunktionen:**
- Avatar-Editor (Farben, Augen, Frisur - optional)
- Inventar (Grid mit allen Items)
- Drag & Drop (Items auf Avatar ziehen)
- Avatar-Geschichte (welche Items wann erhalten?)
- Item-Kategorien (Kopfbedeckungen, Werkzeuge, Trophäen, Begleiter)
- Item-Seltenheit (Common, Rare, Epic, Legendary)

**Komponenten (im Profil/Dashboard):**
- Avatar-Icon (klein, klickbar)
- Klick → Avatar-Modul öffnet sich (fullscreen oder Split-Screen)

**Verknüpfungen:**
- Quest-Modul (Items als Belohnung)
- Skill-Tree-Modul (Items bei Level-Up)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md)

---

### 13. Skill-Tree-Modul
**Status:** Konzept (Teil des Quest-Moduls) - ERWEITERT
**Zweck:** Fähigkeitenbaum für persönliche Entwicklung (Seele, Geist, Bewusstsein, Körper, Gemeinschaft, Soziales)

**WICHTIG:** Skill-Tree ist KEIN einfacher Stats-Screen, sondern ein **eigenes Modul**!

**WICHTIG:** Bernd's Zitat: "Wenn Seele, Geist und Bewusstsein eins werden, kannst du alles machen"
- Körper ist nur die Hülle
- ABER: Gemeinschaft und Soziales sind CRITICAL für vollständige Entwicklung!

**Hauptfunktionen:**
- **Fähigkeitenbaum (6 Hauptkategorien):**
  1. **Seele** (Empathie, Mitgefühl, Intuition)
  2. **Geist** (Logik, Kreativität, Problemlösung)
  3. **Bewusstsein** (Achtsamkeit, Ökologisches Bewusstsein, Selbstreflexion)
  4. **Körper** (Handwerk, Sport, Gesundheit)
  5. **Gemeinschaft** (NEU! - Zusammenarbeit, Kommunikation, Vertrauen)
  6. **Soziales** (NEU! - Empathie in Gruppen, Konfliktlösung, Führung)
- **Unterkategorien** (z.B. Empathie, Kreativität, Ökologisches Bewusstsein, Handwerk)
- **XP & Level pro Fähigkeit**
- **XP-Verlauf** (Timeline: wie habe ich XP gesammelt?)
- **Level-Up-Historie** (welche Items habe ich bei Level-Up erhalten?)
- **Fähigkeiten-Details** (welche Quests trainieren diese Fähigkeit?)
- **Ganzheitliche Entwicklung:**
  - Visualisierung: Sind alle Bereiche ausgeglichen?
  - Empfehlungen: "Du hast viel Körper-XP, aber wenig Soziales - versuch mal eine Community-Quest!"

**Komponenten (im Profil/Dashboard):**
- Skill-Tree-Vorschau (Top 3 Skills mit Level)
- Klick → Skill-Tree-Modul öffnet sich (fullscreen oder Split-Screen)

**Verknüpfungen:**
- Quest-Modul (Quests geben XP für Skills)
- Avatar-Modul (Items bei Level-Up)
- AI-Modul (Empfehlungen für ausgeglichene Entwicklung)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md) + [skill-tree-modul.md](skill-tree-modul.md) (TODO - erweitern!)

---

### 14. Log-Modul (ALLE Logs, nicht nur Questlog!)
**Status:** Konzept (Teil des Quest-Moduls) - MASSIV ERWEITERT
**Zweck:** Persönliches Tagebuch ALLER Aktivitäten - "Filtere dein ganzes Leben"

**WICHTIG:** Log ist KEIN einfacher History-Screen, sondern ein **eigenes Modul**!
**WICHTIG:** Log ist NICHT NUR Questlog - es umfasst ALLE Module!

**Hauptfunktionen:**
- **Alle Log-Typen:**
  - **Quest-Log** (abgeschlossene Quests)
  - **Marktplatz-Log** (was gegeben, was erhalten, Transaktionen)
  - **Event-Log** (besuchte Events, Veranstaltungen)
  - **Wertschöpfungs-Log** (alle Value-Transaktionen, offline + online)
  - **Skill-Log** (XP-Gewinne, Level-Ups)
  - **Community-Log** (Community-Aktivitäten, Entscheidungen)
  - **Weitere Logs je nach aktivierten Modulen**
- **Timeline aller Aktivitäten:**
  - Chronologisch, neueste zuerst
  - Alle Logs in einer Timeline ODER getrennt nach Typ
- **Filter-System (CRITICAL!):**
  - Nach Modul (Quest, Marktplatz, Event, etc.)
  - Nach Typ (gegeben, erhalten, gelernt, etc.)
  - Nach Hashtags
  - Nach Kategorie
  - Nach Zeitraum
  - "Filtere dein ganzes Leben" - finde alles, was du jemals gemacht hast!
- **Statistiken:**
  - Was habe ich gegeben?
  - Was habe ich erhalten?
  - Was habe ich gelernt?
  - Welche XP habe ich gesammelt?
  - Welche Level-Ups hatte ich?
  - Wie viele Events besucht?
  - Wie viele Quests abgeschlossen?
- **Export:**
  - PDF: "Meine Lebensreise 2026" (ALLE Logs oder gefiltert)
  - CSV: Für eigene Auswertungen
- **Sharing:**
  - Link zu meinem Log (öffentlich oder nur für Freunde)
  - Auswahl: Welche Logs teilen?
- **Details-Ansicht:**
  - Quest-Details (Foto/Video/Text-Beweis, erhaltene XP & Items, trainierte Skills)
  - Marktplatz-Details (was gegeben, was erhalten, Wertschöpfung)
  - Event-Details (wann, wo, mit wem)

**Komponenten (im Profil/Dashboard):**
- Log-Vorschau (Letzte 3 Einträge aus ALLEN Logs)
- Klick → Log-Modul öffnet sich (fullscreen oder Split-Screen)

**Verknüpfungen:**
- Quest-Modul (Quest-Log)
- Marktplatz-Modul (Marktplatz-Log)
- Kalender-Modul (Event-Log)
- Wertschöpfungs-Modul (Transaktions-Log)
- Skill-Tree-Modul (Skill-Log)
- Avatar-Modul (Item-Log)
- Wallet-Modul (Value-Log)
- Community-Modul (Community-Log)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md) + [log-modul.md](log-modul.md) (TODO - massiv erweitern!)

---

### 15. Dashboard-Modul
**Status:** Konzept - ERWEITERT
**Zweck:** Konfigurierbarer Einstiegspunkt für jeden User - Widget-basiert, funktionale Übersicht

**WICHTIG:** Dashboard öffnet sich ALS FLOATING WINDOW auf Map!

**Hauptfunktionen:**
- **Widget-basiertes System:**
  - User können Widgets konfigurieren (welche Module sichtbar?)
  - Widgets sind verschiebbar, skalierbar
  - Scroll-down für mehr Widgets
- **Haupt-Widget oben:**
  - Wichtigste Info zuerst (z.B. nächste 3 Events, 5 neue Quests)
  - User-konfigurierbar
- **Module-Widgets:**
  - Quest-Widget (Verfügbare/Laufende/Beobachtete Quests)
  - Kalender-Widget (Nächste 3 Events)
  - Marktplatz-Widget (Meine Angebote/Anfragen)
  - Wallet-Widget (Offline/Online Value)
  - Log-Widget (Letzte 3 Aktivitäten)
  - Skill-Tree-Widget (Top 3 Skills)
  - Avatar-Widget (Avatar-Icon mit letztem Item)
  - Notifications-Widget (Letzte 5 Benachrichtigungen)
- **Benachrichtigungen:**
  - Neue Quests in der Nähe
  - Quest-Einladungen
  - Event-Erinnerungen
  - Marktplatz-Anfragen
  - Community-Entscheidungen
- **Navigation zu Modulen:**
  - Klick auf Widget → Modul öffnet sich als Floating Window auf Map
  - Zurück-Button → Dashboard wieder sichtbar
- **Desktop vs. Mobile:**
  - **Desktop:** Dashboard als Window auf Map (kann mit anderen Windows kombiniert werden)
  - **Desktop + 2. Monitor:** Dashboard mit Level-Fortschritt, Stats, etc.
  - **Tablet:** Funktioniert sehr gut (genug Platz für mehrere Widgets)
  - **Mobile Landscape:** Dashboard-Widget (Vollbild) mit Übersicht
  - **Mobile Portrait:** Dashboard mit Scroll-Down
- **Themes & Anpassung:**
  - User kann Dashboard-Look konfigurieren
  - Widget-Reihenfolge ändern
  - Widgets ein-/ausblenden

**Beispiel Desktop (auf Map):**
```
┌─────────────────────────────────────────┐
│           MAP (Hintergrund)             │
│                                         │
│  ┌──────────────┐   ┌──────────────┐   │
│  │  Dashboard   │   │ Profil/Modul │   │
│  │  (Widgets)   │   │              │   │
│  │  - Quests    │   │              │   │
│  │  - Kalender  │   │              │   │
│  │  - Marktplatz│   │              │   │
│  └──────────────┘   └──────────────┘   │
│                                         │
│         (Luft zwischen Fenstern)        │
│         (Map sichtbar)                  │
└─────────────────────────────────────────┘
```

**Beispiel Mobile Landscape:**
- Dashboard-Widget als Vollbild-Overlay auf Map
- Schneller Überblick: XP, Level, nächste Events, Quests
- Swipe nach unten → Map wieder sichtbar

**Komponenten (im Dashboard):**
- Alle Module haben ein Widget (konfigurierbar)

**Verknüpfungen:**
- Alle Module (Dashboard ist zentraler Hub)
- Map (Dashboard öffnet sich auf Map)

**Dokumentation:** [dashboard-modul.md](dashboard-modul.md) (TODO - erweitern!)

---

### 9. Web of Trust (Basis-Infrastruktur)
**Status:** Konzept
**Zweck:** Dezentrales Vertrauensnetzwerk - wer sieht was? Wer vertraut wem?

**Hauptfunktionen:**
- Trust-Levels (Ich vertraue dir, du vertraust mir → wir sind verbunden)
- Sichtbarkeit (Quests/Events/Angebote nur für Netzwerk oder öffentlich)
- Verschlüsselung (QR-Codes auf Token-Scheinen verschlüsselt über Web of Trust)
- Räume & Spaces (Spaces können eigenes Netzwerk aufbauen)

**Komponenten (im Profil/Dashboard):**
- Trust-Netzwerk-Übersicht (Wie viele Verbindungen habe ich?)

**Verknüpfungen:**
- ALLE Module (Web of Trust bestimmt Sichtbarkeit)

**Dokumentation:** Teil von [sicherheits-strategie.md](../real-life-stack/sicherheits-strategie.md)

---

## Module-Hierarchie & Abhängigkeiten

**WICHTIGSTE ARCHITEKTUR-REGEL: Map ist IMMER die Basis!**

### Fundament (IMMER aktiv, NICHT deaktivierbar):
1. **Map-Modul** (ABSOLUTE BASIS - alles schwebt auf der Map!)
2. **Web of Trust** (Login, Vertrauensnetzwerk, Offline/Online Sync)
3. **Profil-Modul** (User-Account, Feed, Module-Entry-Points)

### Kern-Module (Basis-Infrastruktur, immer aktiv):
4. **Dashboard-Modul** (Widget-basierter Einstiegspunkt)
5. **Notifications-Modul** (Push, Telegram, Matrix, Signal)

### Prioritäts-Module (aktivierbar/deaktivierbar, aber HOCH PRIORISIERT):
6. **Kalender-Modul** (Events, Sync, Navigation)
7. **Marktplatz-Modul** (Begabungen, Ressourcen, Werkzeuge, gemeinsames Sparen)
8. **Wertschöpfungs-Modul** (E-Minuto, Money-Printer Connection)

### Gamification-Module (aktivierbar/deaktivierbar):
9. **Quest-Modul** (mit Avatar, Skill-Tree, Log)
10. **Avatar-Modul** (Items, Inventar)
11. **Skill-Tree-Modul** (6 Kategorien: Seele, Geist, Bewusstsein, Körper, Gemeinschaft, Soziales)
12. **Log-Modul** (ALLE Logs: Quest, Marktplatz, Event, Wertschöpfung, etc.)

### Erweiterte Module (Post-MVP, aktivierbar/deaktivierbar):
13. **Wallet-Modul** (Value-Übersicht, Statistiken, "Filtere dein ganzes Leben")
14. **Entscheidungs-Modul** (Konsens/Konsent, Umfragen, Kredit-Vergabe)
15. **Wissensdatenbank-Modul** (Reddit-style Q&A, Voting)
16. **AI-Modul / Eli-Modul** (Quest-Hilfe, Suche, Discovery)
17. **Health-Modul** (Gesundheit, Hilfe zur Selbsthilfe, altes Wissen)

### Abhängigkeiten (CRITICAL!):

**Map ist BASIS für:**
- Alle Module (Map ist IMMER im Hintergrund sichtbar)
- Floating Windows (alle Module öffnen sich auf Map)
- Navigation (alle Locations werden auf Map angezeigt)

**Web of Trust ist BASIS für:**
- Login (Keypair-Login: Private/Public Keys)
- Offline/Online Sync (CRITICAL!)
- Sichtbarkeit (wer sieht was?)
- Verschlüsselung (QR-Codes, Token-Scheine)
- Vertrauensnetzwerk (Trust-Levels)

**Wertschöpfungs-Modul benötigt:**
- Web of Trust (Keypair-Login, Verification)
- Money-Printer (Anton's Projekt - Tech-Stack koordinieren!)
- Marktplatz-Modul (Token-Scheine, Zahlungen)

**Marktplatz-Modul benötigt:**
- Wertschöpfungs-Modul (Token-Scheine, Wertschöpfung)
- Entscheidungs-Modul (Kredit-Vergabe, gemeinsame Anschaffungen)
- Map (Angebote auf Map)

**Quest-Modul benötigt:**
- Avatar-Modul (Items als Belohnungen)
- Skill-Tree-Modul (XP für Skills)
- Log-Modul (Quest-Log)
- Map (Quests auf Map)

**Log-Modul sammelt Daten von:**
- Quest-Modul (Quest-Log)
- Marktplatz-Modul (Marktplatz-Log)
- Kalender-Modul (Event-Log)
- Wertschöpfungs-Modul (Transaktions-Log)
- Skill-Tree-Modul (Skill-Log, XP-Log)
- Avatar-Modul (Item-Log)

**Wallet-Modul benötigt:**
- Log-Modul (ALLE Logs)
- Wertschöpfungs-Modul (Value-Tracking)
- Quest-Modul (XP, Level-Ups)

**Notifications-Modul sendet Benachrichtigungen für:**
- Kalender-Modul (Event-Erinnerungen)
- Quest-Modul (Quest-Einladungen)
- Marktplatz-Modul (Anfragen)
- Entscheidungs-Modul (Abstimmungs-Erinnerungen)
- Community-Modul (Community-Updates)

**Dashboard-Modul zeigt Widgets von:**
- ALLEN aktivierten Modulen (user-konfigurierbar)

---

## Komponenten-Übersicht

**WICHTIG:** Alle Komponenten sind Entry-Points zu Modulen - Klick öffnet Modul als Floating Window auf Map!

### Profil-Komponenten (immer sichtbar im Profil-Feed):
- **Avatar-Icon** (klein) → Klick öffnet Avatar-Modul
- **Skill-Tree-Vorschau** (Top 3 Skills) → Klick öffnet Skill-Tree-Modul
- **Log-Vorschau** (Letzte 3 Einträge aus ALLEN Logs) → Klick öffnet Log-Modul
- **Quest-Übersicht** (Verfügbare/Laufende/Beobachtete) → Klick öffnet Quest-Modul
- **Kalender-Widget** (Nächste 3 Events) → Klick öffnet Kalender-Modul
- **Marktplatz-Übersicht** (Meine Angebote/Anfragen) → Klick öffnet Marktplatz-Modul
- **Wallet-Vorschau** (Offline/Online Value, letzte 3 Transaktionen) → Klick öffnet Wallet-Modul
- **Community-Übersicht** (Meine Communities) → Klick öffnet Community-Modul

### Dashboard-Widgets (user-konfigurierbar):
- **Quest-Widget** (Verfügbare/Laufende/Beobachtete Quests)
- **Kalender-Widget** (Nächste 3 Events)
- **Marktplatz-Widget** (Meine Angebote/Anfragen)
- **Wallet-Widget** (Offline/Online Value)
- **Log-Widget** (Letzte 3 Aktivitäten)
- **Skill-Tree-Widget** (Top 3 Skills)
- **Avatar-Widget** (Avatar-Icon mit letztem Item)
- **Notifications-Widget** (Letzte 5 Benachrichtigungen)
- **Mini-Map-Widget** (nächste 5 Quests/Events/Angebote)
- **Wertschöpfungs-Widget** (Offline/Online Value, letzte Transaktionen)

### In-Module-Komponenten (innerhalb von Modulen):
- **Mini-Map** (in Quest-Details, Event-Details, Marktplatz-Angeboten)
- **Navigation-Button** ("Navigiere dorthin" → Google Maps)
- **Markdown-Editor** (in Quest-Erstellung, Event-Erstellung, Angebots-Erstellung)
- **QR-Code-Scanner** (in Quest-Abschluss, Wertschöpfungs-Modul)
- **QR-Code-Generator** (in Wertschöpfungs-Modul, Token-Scheine)
- **Hashtag-Autocomplete** (in Quest/Event/Angebots-Erstellung)
- **Skill-Selector** (in Quest-Erstellung)
- **Item-Selector** (in Quest-Erstellung)
- **Filter-System** (in Map, Log, Marktplatz, Wissensdatenbank)
- **Voting-Buttons** (in Wissensdatenbank-Modul)
- **Konsens/Konsent-Interface** (in Entscheidungs-Modul)
- **AI-Chat** (in AI-Modul, integrierbar in alle Module)

---

## Beispiel-Flows

### Flow 1: Erwachsener sucht Abenteuer
1. **Einstieg:** Dashboard öffnen
2. **Map-Kachel:** Klick → Map öffnet sich
3. **Filter:** Hashtag "#abenteuer" eingeben, Distanz 20 km
4. **Quest finden:** "Bogenschießen im Wald" (10 km entfernt)
5. **Quest-Details:** Klick auf Quest-Icon → Detailansicht
6. **Teilnahme:** "Teilnehmen" Button → Quest in "Laufende Quests"
7. **Quest durchführen:** In der realen Welt Bogenschießen lernen
8. **Quest abschließen:** QR-Code scannen → XP + Item "Bogenschütze-Abzeichen"
9. **Avatar:** Avatar-Modul öffnen → "Bogenschütze-Abzeichen" auf Avatar ziehen
10. **Log:** Log-Modul öffnen → Quest erscheint in Timeline

### Flow 2: Handwerker sucht Azubi
1. **Einstieg:** Dashboard öffnen
2. **Quest-Modul:** Klick → Quest-Modul öffnet sich
3. **Quest-Reihe erstellen:** "Carpenter Quest 1-10" Serie erstellen
4. **Quest 1:** "Holzarten kennenlernen" (50 XP, Item "Holz-Kenner")
5. **Quest 2-10:** Weitere Quests erstellen (aufsteigender Schwierigkeitsgrad)
6. **Quest 10:** "Eigenes Möbelstück bauen" (500 XP, legendäres Item "Goldene Säge")
7. **Veröffentlichen:** Quests auf Map veröffentlichen
8. **Jugendliche finden Quests:** Via Map → machen Quests durch
9. **Handwerker sieht Fortschritt:** Jugendlicher hat "Carpenter Level 7"
10. **Handwerker macht Angebot:** "Willst du bei mir Azubi werden?"

### Flow 3: Questmaster teilt Quest
1. **Einstieg:** Map öffnen
2. **Erfolgreiche Quest finden:** "Wildkräuterwanderung Hamburg" (47 Teilnehmer, 12 Kommentare, 8x kopiert)
3. **Quest kopieren:** "Quest kopieren" Button → Formular öffnet sich (vorausgefüllt)
4. **Anpassen:** Ort ändern: "Englischer Garten München"
5. **Veröffentlichen:** Quest auf Map in München veröffentlichen
6. **Quest verbreitet sich:** Andere Questmaster kopieren nach Paris, London, NYC

---

## Technische Architektur

### Frontend
- **Framework:** React (Web) + React Native (Mobile) - oder ähnlich
- **Routing:** Modul-basiert (jedes Modul hat eigene Routes)
- **State Management:** Redux/Zustand (modulare Slices)
- **UI-Komponenten:** Shared Component Library (z.B. Shadcn, Material-UI)

### Backend
- **Architektur:** Microservices (jedes Modul = eigener Service)
  - quest-service
  - calendar-service
  - marketplace-service
  - avatar-service
  - web-of-trust-service
- **API:** GraphQL (flexibles Query-System) oder REST
- **Datenbank:** PostgreSQL (relational) + Redis (Cache)
- **File Storage:** S3-kompatibel (für Bilder, Videos, Beweise)
- **Authentifizierung:** JWT + Web of Trust

### Deployment
- **Spaces können selbst hosten** (Docker Compose, Kubernetes)
- **Oder: Managed Hosting** (wir hosten für sie)
- **Modularität:** Spaces wählen, welche Services sie aktivieren

---

## MVP-Scope & Business-Prioritäten

**WICHTIG: WIR MÜSSEN GELD VERDIENEN!**

"Wir sind wertvoll" wird nicht sofort Cash bringen - wir brauchen **Money-Printer als Cash Cow**!

### Business-Prioritäten (in dieser Reihenfolge!):

#### 1. **Money-Printer** (HÖCHSTE PRIORITÄT - Cash Cow!)
- Anton's Projekt - läuft parallel
- Muss SOFORT funktionieren
- Erweitert durch Wertschöpfungs-Modul
- Integration mit Web of Trust

#### 2. **Web of Trust** (Login-Basis für alles)
- Anton arbeitet parallel daran
- Keypair-Login (Private/Public Keys)
- Offline/Online Sync (CRITICAL!)
- Basis für alle anderen Module

#### 3. **Designer Onboarding** (parallel - für Verkauf!)
- Läuft parallel zur Entwicklung
- Brauchen wir für Marketing & Sales
- Siehe: [designer-onboarding-konzept.md](../real-life-stack/designer-onboarding-konzept.md)

### Modul-Prioritäten (in dieser Reihenfolge!):

#### Phase 1 - Foundation (ABSOLUTE BASIS):
1. **Map-Modul** (ABSOLUTE GRUNDLAGE!)
   - Google Maps Integration (MVP - einfachste Lösung)
   - Navigation
   - Map-Layer (fantastische Karten, Weltraumansicht)
   - Floating-Window-System
   - Quick Filter (Hashtag, Distanz, Kategorie)

2. **Profil-Modul + Community-Modul**
   - Feed-Style Scrolling
   - Module-Entry-Points
   - Community-Übersicht
   - Avatar-Integration

#### Phase 2 - Kalender (ABSOLUTE PRIORITÄT nach Map/Profil):
3. **Kalender-Modul**
   - Event-Erstellung
   - Kalender-Sync (iCal/CalDAV)
   - Kalender-Abos (Communities können Kalender teilen)
   - Navigation ("Navigiere dorthin")
   - Notifications-Integration

#### Phase 3 - Marktplatz (erweitert Money-Printer-Nutzbarkeit):
4. **Marktplatz-Modul**
   - Begabungen & Bedürfnisse
   - Ressourcen teilen
   - Werkzeuge verleihen
   - **Gemeinsames Sparen** (Community kauft zusammen)
   - **Kredit-Option** (via Money-Printer, Community entscheidet)
   - Token-Scheine (Wertschöpfungs-Modul)
   - Marktplatz-Raum (24/7 offener Raum)

5. **Wertschöpfungs-Modul** (E-Minuto Integration)
   - Sebastian Garleck's Arbeit (Rust → portieren!)
   - Offline + Online Value
   - QR-Code System
   - Money-Printer Connection (CRITICAL!)
   - Transparenz (Offline vs. Online)
   - Community-Währungen (Minuto, Grado, Dank)

#### Phase 4 - Gamification ("der geile Scheiss"):
6. **Quest-Modul** (CORE Gamification)
   - Quest-Erstellung, Quest-Discovery, Quest-Teilnahme
   - QR-Code-Verifizierung
   - Avatar-Modul (Items als Belohnung)
   - Skill-Tree-Modul (6 Hauptkategorien: Seele, Geist, Bewusstsein, Körper, **Gemeinschaft, Soziales**)
   - Log-Modul (ALLE Logs: Quest, Marktplatz, Event, Wertschöpfung, etc.)

#### Phase 5 - Erweiterte Features (Post-MVP):
7. **Wallet-Modul** (NAMING ÄNDERN!)
   - Value-Übersicht (Offline/Online)
   - Alle Logs an einem Ort
   - Statistiken & Filtering ("Filtere dein ganzes Leben")

8. **Entscheidungs-Modul**
   - Konsens/Konsent (KEIN 50-50-Voting!)
   - Umfragen & Polls
   - Kredit-Vergabe (Community entscheidet)

9. **Wissensdatenbank-Modul**
   - Reddit-style Q&A
   - Voting-System (KEIN Thumbs-Up/Down!)
   - Neutrale Beleuchtung (KEINE POLITIK!)

10. **AI-Modul / Eli-Modul**
    - Quest-Erstellungs-Hilfe
    - Suche & Discovery
    - Credits-System (optional)

11. **Notifications-Modul**
    - Telegram/Matrix/Signal Bot-Integration
    - Push-Notifications
    - KEIN eigener Messenger!

12. **Dashboard-Modul**
    - Widget-basiert
    - User-konfigurierbar
    - Mobile Landscape-Widget

### Transparenz & Trust (CRITICAL EARLY ON!):
- **Transparenz schafft Vertrauen** (Web of Trust)
- **Logging alles** (was wurde gegeben, erhalten, gelernt)
- **Offline/Online sichtbar** (keine versteckten Transfers)
- **Community-Entscheidungen transparent** (Konsens/Konsent)

### Tech-Stack (muss koordiniert werden!):
- **React** (UI)
- **Anton's Money-Printer Tech** (muss abgestimmt werden)
- **Sebastian's E-Minuto (Rust)** (muss portiert werden)
- **Web of Trust** (Keypair-Login)
- Siehe: [tech-stack.md](tech-stack.md) (TODO!)

### Post-MVP (später):
- Erweiterte Filter (Map)
- Quest-Sharing (kopieren)
- Quest-Reihen (Serien)
- Handwerk-Integration
- Desktop Split-Screen (4 Windows gleichzeitig)
- Map-Layer erweitern
- Voice-Input für AI-Modul

---

## Offene Fragen

### 1. Naming: "Real-Life Stack" oder "Forge"?
- **Real-Life Stack:** Beschreibend, klar
- **Forge:** Metaphorisch (Schmiede = Ort der Transformation), cooler, aber abstrakter
- **Entscheidung:** Noch offen, erstmal "Real-Life Stack" verwenden

### 2. Fähigkeitenbaum: Vordefiniert oder anpassbar?
- **Option A:** Fixer Baum (Seele, Geist, Bewusstsein, Körper mit festen Unterfähigkeiten)
- **Option B:** Anpassbar (jede Karteninstanz kann eigenen Baum definieren)
- **Vorschlag:** Option B für Flexibilität, aber Basis-Baum vordefiniert

### 3. Items: Wer designed sie?
- **Option A:** Vordefinierte Item-Bibliothek (50-100 Items für MVP)
- **Option B:** Quest-Master können eigene Items hochladen
- **Vorschlag:** Option A für MVP, später Option B mit Moderation

### 4. Desktop vs. Mobile: Unterschiedliche UX?
- **Desktop:** Split-Screen möglich (Profil + Modul)
- **Mobile:** Fullscreen-Module
- **Entscheidung:** Ja, unterschiedliche UX für optimale Nutzung

---

## Nächste Schritte

1. **Feedback von Timo** zu diesem Dokument
2. **Entscheidungen treffen** (offene Fragen)
3. **MVP-Scope finalisieren** (was ist WIRKLICH im MVP?)
4. **Prototyp / Wireframes** erstellen (Figma)
   - Dashboard
   - Map mit Filter-System
   - Quest-Erstellung
   - Quest-Details
   - Avatar-Modul
   - Skill-Tree-Modul
   - Log-Modul
5. **Technische Architektur** detaillieren (Microservices, API-Design)
6. **Development Start** (erste Sprints planen)

---

**Status:** Version 1.0 - Architektur-Übersicht
**Nächster Schritt:** Feedback + Wireframes

---

*Erstellt am 6. Februar 2026*
*Von Claude, mit Begeisterung für modulare Architektur* 💚
