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

## Alle Module (Übersicht)

### 1. Quest-Modul
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

### 2. Kalender-Modul
**Status:** Spezifikation vorhanden
**Zweck:** Gemeinsame Events, Termine, Verfügbarkeiten - ohne zentrale Plattform-Abhängigkeit

**Hauptfunktionen:**
- Event-Erstellung (mit Markdown, Orten, Hashtags)
- Verfügbarkeitsabfragen (ähnlich Doodle, aber dezentral)
- Event-Kategorien (Community, Privat, Öffentlich)
- Kalender-Sync (mit persönlichem Kalender via iCal/CalDAV)
- Erinnerungen & Benachrichtigungen

**Komponenten (im Profil/Dashboard):**
- Kalender-Widget (Mini-Kalender mit nächsten 3 Events)
- Event-Benachrichtigungen

**Verknüpfungen:**
- Quest-Modul (Quests mit Zeitangabe erscheinen im Kalender)
- Marktplatz-Modul (Post-MVP: Angebote mit Zeitraum)
- Map (Events mit Orten auf Map)
- Web of Trust (Event-Sichtbarkeit)

**Dokumentation:** [kalender-modul.md](kalender-modul.md)

---

### 3. Marktplatz-Modul
**Status:** Spezifikation vorhanden
**Zweck:** Lokaler Austausch von Begabungen, Bedürfnissen, Ressourcen & Werkzeugen - OHNE PREISE

**Hauptfunktionen:**
- Begabungen & Bedürfnisse anbieten/finden
- Ressourcen teilen (Äpfel, Marmelade, Eier, etc.)
- Werkzeuge verleihen
- Marktplatz-Raum (24/7 offener Raum mit QR-Codes auf Waren)
- Token-Scheine (50 Dank, 100 Dank - physisch + digital)
- Kartierung (Wo sind Ressourcen? Wo sind Werkzeuge?)
- Kategorien-Datenbank (strukturierte Einheiten: kg, Liter, Stück)

**Komponenten (im Profil/Dashboard):**
- Marktplatz-Übersicht (Kacheln: Meine Angebote, Meine Anfragen, Meine Werkzeuge)

**Verknüpfungen:**
- Map (Angebote & Anfragen auf Map)
- Kalender-Modul (Post-MVP: Verfügbarkeit von Ressourcen)
- Web of Trust (Marktplatz-Zugang, Token-Scheine-Verschlüsselung)

**Dokumentation:** [marktplatz-modul.md](marktplatz-modul.md)

---

### 4. Avatar-Modul
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

### 5. Skill-Tree-Modul
**Status:** Konzept (Teil des Quest-Moduls)
**Zweck:** Fähigkeitenbaum für persönliche Entwicklung (Seele, Geist, Bewusstsein, Körper)

**WICHTIG:** Skill-Tree ist KEIN einfacher Stats-Screen, sondern ein **eigenes Modul**!

**Hauptfunktionen:**
- Fähigkeitenbaum (4 Hauptkategorien: Seele, Geist, Bewusstsein, Körper)
- Unterkategorien (z.B. Empathie, Kreativität, Ökologisches Bewusstsein, Handwerk)
- XP & Level pro Fähigkeit
- XP-Verlauf (Timeline: wie habe ich XP gesammelt?)
- Level-Up-Historie (welche Items habe ich bei Level-Up erhalten?)
- Fähigkeiten-Details (welche Quests trainieren diese Fähigkeit?)

**Komponenten (im Profil/Dashboard):**
- Skill-Tree-Vorschau (Top 3 Skills mit Level)
- Klick → Skill-Tree-Modul öffnet sich (fullscreen oder Split-Screen)

**Verknüpfungen:**
- Quest-Modul (Quests geben XP für Skills)
- Avatar-Modul (Items bei Level-Up)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md)

---

### 6. Log-Modul (Questlog)
**Status:** Konzept (Teil des Quest-Moduls)
**Zweck:** Persönliches Tagebuch aller abgeschlossenen Quests - Dokumentation der eigenen Reise

**WICHTIG:** Log ist KEIN einfacher History-Screen, sondern ein **eigenes Modul**!

**Hauptfunktionen:**
- Timeline aller abgeschlossenen Quests (chronologisch, neueste zuerst)
- Filter (Hashtags, Kategorie, Zeitraum)
- Export (PDF: "Meine Quest-Reise 2026")
- Sharing (Link zu meinem Questlog, öffentlich oder nur für Freunde)
- Quest-Details (Foto/Video/Text-Beweis, erhaltene XP & Items, trainierte Skills)

**Komponenten (im Profil/Dashboard):**
- Log-Vorschau (Letzte 3 Quests mit Kacheln)
- Klick → Log-Modul öffnet sich (fullscreen oder Split-Screen)

**Verknüpfungen:**
- Quest-Modul (Quests werden im Log gespeichert)
- Skill-Tree-Modul (Log zeigt, welche Skills trainiert wurden)
- Avatar-Modul (Log zeigt, welche Items erhalten wurden)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md)

---

### 7. Map (Der zentrale Einstiegspunkt!)
**Status:** Konzept
**Zweck:** Geografische Übersicht aller Quests, Events, Marktplatz-Angebote

**WICHTIG:** Nicht mehr "Utopia Map" (zu abstrakt) → einfach "Map"!

**Hauptfunktionen:**
- Quest-Icons auf Map (farbkodiert nach Kategorie)
- Event-Icons auf Map
- Marktplatz-Icons auf Map (Angebote, Anfragen, Ressourcen, Werkzeuge)
- **Filter-System (CRITICAL!):**
  - **Quick Filter:** Hashtag-Suche, Distanz-Slider, Kategorie-Chips
  - **Erweiterte Filter:** Level, Teilnehmerzahl, Zeitpunkt, Quest-Typ, Belohnung, Ersteller, etc.
- Zoom in/out (wie Google Maps)
- Klick auf Icon → Detailansicht (Quest/Event/Angebot)

**Komponenten (im Profil/Dashboard):**
- Mini-Map (zeigt meine Umgebung mit nächsten 5 Quests/Events)
- Klick → Map-Modul öffnet sich (fullscreen)

**Verknüpfungen:**
- Quest-Modul (Quests auf Map)
- Kalender-Modul (Events auf Map)
- Marktplatz-Modul (Angebote auf Map)
- Web of Trust (Sichtbarkeit)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md) (Map-Sektion)

---

### 8. Dashboard-Modul
**Status:** Konzept
**Zweck:** Konfigurierbarer Einstiegspunkt für jeden User - zeigt Module-Kacheln

**Hauptfunktionen:**
- Module-Kacheln (Quest-Modul, Kalender, Marktplatz, Avatar, Skill-Tree, Log)
- Benachrichtigungen (neue Quests in der Nähe, Quest-Einladungen, Event-Erinnerungen)
- **Konfigurierbar:** Jeder User kann wählen, welche Module er sehen will
- **Desktop:** Split-Screen möglich (Profil links, Modul rechts)
- **Mobile:** Kacheln führen zu Modulen (fullscreen)

**Beispiel Desktop:**
```
┌──────────────┬────────────────────────┐
│  Dashboard   │   Quest-Modul          │
│  (Profil)    │   (vollständige Ansicht│
│  (Kacheln)   │                        │
└──────────────┴────────────────────────┘
```

**Beispiel Mobile:**
- Dashboard zeigt: Quest-Kachel, Kalender-Kachel, Marktplatz-Kachel
- Klick auf Kachel → Modul öffnet sich fullscreen

**Komponenten (im Dashboard):**
- Alle Module haben eine Kachel (z.B. "Quest-Modul: 5 neue Quests in deiner Nähe")

**Verknüpfungen:**
- Alle Module (Dashboard ist der zentrale Hub)

**Dokumentation:** Teil von [quest-modul.md](quest-modul.md) (Dashboard-Sektion)

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

### Kern-Module (Basis-Infrastruktur)
Diese Module sind **immer aktiv** (keine Spaces können sie deaktivieren):
1. **Web of Trust** (Vertrauensnetzwerk)
2. **Profil** (User-Account, Avatar-Icon, Stats)
3. **Dashboard** (Einstiegspunkt)

### Feature-Module (aktivierbar/deaktivierbar)
Spaces/Communities können wählen, welche Feature-Module sie aktivieren:
1. **Quest-Modul** (mit Avatar, Skill-Tree, Log)
2. **Kalender-Modul**
3. **Marktplatz-Modul**
4. **Map** (abhängig von aktivierten Modulen: zeigt Quests, Events, Angebote)

### Abhängigkeiten:
- **Avatar-Modul:** Benötigt Quest-Modul (Items als Belohnungen)
- **Skill-Tree-Modul:** Benötigt Quest-Modul (XP von Quests)
- **Log-Modul:** Benötigt Quest-Modul (Questlog)
- **Map:** Zeigt Inhalte von aktivierten Modulen (Quests, Events, Angebote)

---

## Komponenten-Übersicht

### Profil-Komponenten (immer sichtbar)
- **Avatar-Icon** (klein) → Klick öffnet Avatar-Modul
- **Skill-Tree-Vorschau** (Top 3 Skills) → Klick öffnet Skill-Tree-Modul
- **Log-Vorschau** (Letzte 3 Quests) → Klick öffnet Log-Modul
- **Quest-Übersicht** (Verfügbare/Laufende/Beobachtete) → Klick öffnet Quest-Modul
- **Kalender-Widget** (Nächste 3 Events) → Klick öffnet Kalender-Modul
- **Marktplatz-Übersicht** (Meine Angebote/Anfragen) → Klick öffnet Marktplatz-Modul

### Dashboard-Komponenten
- **Module-Kacheln** (Quest, Kalender, Marktplatz, etc.)
- **Benachrichtigungen** (neue Quests, Event-Erinnerungen, Marktplatz-Anfragen)
- **Mini-Map** (nächste 5 Quests/Events)

### In-Module-Komponenten
- **Mini-Map** (in Quest-Details, Event-Details)
- **Markdown-Editor** (in Quest-Erstellung, Event-Erstellung)
- **QR-Code-Scanner** (in Quest-Abschluss)
- **Hashtag-Autocomplete** (in Quest/Event/Angebots-Erstellung)
- **Skill-Selector** (in Quest-Erstellung)
- **Item-Selector** (in Quest-Erstellung)

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

## MVP-Scope

**Für MVP (Minimal Viable Product) - Pilot mit WSW Gudensberg:**

### MVP-Module:
1. ✅ Quest-Modul (CORE)
   - Quest-Erstellung, Quest-Discovery, Quest-Teilnahme
   - QR-Code-Verifizierung
   - Avatar-Modul (Items als Belohnung)
   - Skill-Tree-Modul (4 Hauptkategorien: Seele, Geist, Bewusstsein, Körper)
   - Log-Modul (Questlog)
2. ✅ Map (Quests auf Map anzeigen)
   - Quick Filter (Hashtag, Distanz, Kategorie)
3. ✅ Profil (Avatar-Icon, Stats, Quest-Übersicht)
4. ✅ Dashboard (Einstieg, Module-Kacheln)
5. ✅ Web of Trust (Basis-Version: öffentlich vs. privat)

### Post-MVP (später):
- Kalender-Modul (Integration mit Quests)
- Marktplatz-Modul
- Erweiterte Filter (Map)
- Quest-Sharing (kopieren)
- Quest-Reihen (Serien)
- Handwerk-Integration
- Desktop Split-Screen

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
