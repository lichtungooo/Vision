# Profil-Modul

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** Konzept - PRIORITÄT 2 (nach Map)

---

## Übersicht

Das **Profil-Modul** ist der **zentrale Hub** für jeden User - ein scrollbarer Feed mit Entry-Points zu allen Modulen.

**WICHTIG:** Profil ist **NICHT statisch**, sondern ein **scrollbarer Feed** mit Modul-Entry-Points!

### Zweck
- Persönliche Übersicht (wer bin ich, was habe ich gemacht)
- Entry-Points zu allen Modulen (Kacheln zum Anklicken)
- Feed-Style Scrolling (nach unten scrollen für mehr)
- Social-Media-artiges Gefühl, aber mit Fokus auf REALE Welt

---

## Architektur

### Feed-Style Konzept
**Ähnlich wie Instagram/Facebook, aber für Real-Life!**

- **Scrollen nach unten** → mehr Inhalte
- **Kacheln** für jedes Modul
- **Entry-Points** → Klick auf Kachel öffnet Modul als Floating Window auf Map
- **Personalisiert** → jeder User sieht sein eigenes Profil

### Öffnet sich als Floating Window auf Map
- **Desktop:** Profil als Window auf Map (links oder rechts)
- **Mobile:** Profil als Overlay auf Map (swipe von links)
- **Tablet:** Profil als Split-Screen mit Map

---

## Hauptfunktionen

### 1. Profil-Header
**Wer bin ich?**

#### Enthält:
- **Avatar-Icon** (groß, klickbar → Avatar-Modul)
- **Name** (User-Name, Community-Name)
- **Level** (Gesamt-Level aus allen Skills)
- **XP-Anzeige** (Fortschrittsbalken zum nächsten Level)
- **Skill-Tree-Vorschau:**
  - Top 3 Skills mit Level
  - Mini-Balken (z.B. "Handwerk Level 7", "Empathie Level 5")
  - Klick → Skill-Tree-Modul öffnet sich

#### Beispiel:
```
┌─────────────────────────────────────┐
│  🧑 Max Mustermann                  │
│  Level 12  [████████░░] → Level 13 │
│                                     │
│  Top Skills:                        │
│  - Handwerk Level 7                 │
│  - Empathie Level 5                 │
│  - Kreativität Level 4              │
│                                     │
│  [Avatar ansehen]                   │
└─────────────────────────────────────┘
```

### 2. Module-Entry-Points (Kacheln)
**Klick auf Kachel → Modul öffnet sich!**

#### Quest-Kachel
- **Titel:** "Quests"
- **Vorschau:**
  - Verfügbare Quests in meiner Nähe (Anzahl)
  - Laufende Quests (Anzahl + erste 3)
  - Beobachtete Quests (Anzahl)
- **Klick:** Quest-Modul öffnet sich als Floating Window auf Map

#### Kalender-Kachel
- **Titel:** "Kalender"
- **Vorschau:**
  - Nächste 3 Events (Titel, Zeitpunkt, Ort)
  - Mini-Kalender (heute hervorgehoben)
- **Klick:** Kalender-Modul öffnet sich

#### Marktplatz-Kachel
- **Titel:** "Marktplatz"
- **Vorschau:**
  - Meine Angebote (Anzahl)
  - Meine Anfragen (Anzahl)
  - Meine Werkzeuge (Anzahl)
- **Klick:** Marktplatz-Modul öffnet sich

#### Log-Kachel
- **Titel:** "Mein Log"
- **Vorschau:**
  - Letzte 3 Aktivitäten (Quest abgeschlossen, Event besucht, etc.)
  - Timeline-Icon
- **Klick:** Log-Modul öffnet sich (ALLE Logs!)

#### Wallet-Kachel
- **Titel:** "Wertschöpfung" (oder besserer Name!)
- **Vorschau:**
  - Offline Value verfügbar
  - Online Value verfügbar
  - Letzte 3 Transaktionen
- **Klick:** Wallet-Modul öffnet sich

#### Community-Kachel
- **Titel:** "Meine Communities"
- **Vorschau:**
  - Liste meiner Communities
  - Anzahl aktiver Mitglieder
  - Letzte Community-Aktivität
- **Klick:** Community-Modul öffnet sich

### 3. Feed-Scrolling
**Nach unten scrollen für mehr Inhalte!**

- **Reihenfolge der Kacheln:**
  - User-konfigurierbar (Drag & Drop)
  - Standard: Quest → Kalender → Marktplatz → Log → Wallet → Community
- **Infinite Scroll:**
  - Scrollen lädt mehr Kacheln (z.B. erweiterte Stats, Achievements)
- **Pull-to-Refresh:**
  - Aktualisiert alle Kacheln

### 4. Profil-Konfiguration
**Personalisierung!**

- **Kacheln ein-/ausblenden:**
  - User kann wählen, welche Kacheln sichtbar sind
  - Deaktivierte Module werden nicht angezeigt
- **Kacheln-Reihenfolge:**
  - Drag & Drop zum Sortieren
- **Theme:**
  - Hell/Dunkel-Modus
  - Farben anpassen (optional)

---

## Komponenten

### Avatar-Icon (im Header)
- Groß, klickbar
- Zeigt aktuellen Avatar mit Items
- Klick → Avatar-Modul öffnet sich

### Skill-Tree-Vorschau (im Header)
- Top 3 Skills mit Level
- Mini-Fortschrittsbalken
- Klick → Skill-Tree-Modul öffnet sich

### Modul-Kacheln (im Feed)
- Jedes Modul hat eigene Kachel
- Kacheln zeigen Vorschau-Daten
- Klick → Modul öffnet sich als Floating Window auf Map

### Konfigurations-Button
- Zahnrad-Icon (oben rechts)
- Öffnet Profil-Einstellungen
- Kacheln ein-/ausblenden, sortieren

---

## Verknüpfungen

**Profil ist zentraler Hub für ALLE Module:**
- **Quest-Modul** (Quest-Kachel)
- **Kalender-Modul** (Kalender-Kachel)
- **Marktplatz-Modul** (Marktplatz-Kachel)
- **Log-Modul** (Log-Kachel)
- **Wallet-Modul** (Wallet-Kachel)
- **Community-Modul** (Community-Kachel)
- **Avatar-Modul** (Avatar-Icon)
- **Skill-Tree-Modul** (Skill-Tree-Vorschau)
- **Map-Modul** (Profil öffnet sich als Window auf Map)

---

## Technische Details

### Frontend
- **Framework:** React (Web) + React Native (Mobile)
- **Feed-Scrolling:** Infinite Scroll (react-infinite-scroll-component)
- **Kacheln:** React Component per Modul
- **Drag & Drop:** react-beautiful-dnd (Kacheln sortieren)
- **State Management:** Redux/Zustand (Profil-State)

### Backend
- **Profil-Service:** Microservice für User-Profile
- **API:** GraphQL Query für Profil-Daten
- **Caching:** Redis für schnelle Profil-Abfragen
- **Datenbank:** PostgreSQL (User-Tabelle mit Profil-Daten)

### Performance
- **Lazy Loading:** Kacheln werden nur geladen, wenn sichtbar
- **Caching:** Profil-Daten werden gecached (Aktualisierung bei Pull-to-Refresh)
- **Optimistic Updates:** Kachel-Updates sofort sichtbar (ohne Server-Roundtrip)

---

## MVP-Funktionen

**Für MVP (Phase 1 - Foundation):**
1. ✅ Profil-Header (Avatar, Name, Level, XP, Top 3 Skills)
2. ✅ Quest-Kachel (Verfügbare/Laufende/Beobachtete Quests)
3. ✅ Kalender-Kachel (Nächste 3 Events)
4. ✅ Marktplatz-Kachel (Meine Angebote/Anfragen)
5. ✅ Log-Kachel (Letzte 3 Aktivitäten)
6. ✅ Feed-Scrolling (nach unten scrollen)
7. ✅ Klick auf Kachel → Modul öffnet sich als Floating Window auf Map

**Post-MVP:**
- Wallet-Kachel (Wertschöpfung)
- Community-Kachel
- Konfigurierbare Kacheln (ein-/ausblenden, sortieren)
- Theme-Auswahl (Hell/Dunkel)
- Achievements-Kachel
- Erweiterte Stats-Kacheln

---

## User Stories

### Story 1: Profil öffnen und Quest finden
1. **Einstieg:** App öffnen → Map ist sichtbar
2. **Profil öffnen:** Swipe von links (Mobile) oder Profil-Icon klicken (Desktop)
3. **Profil-Feed:** Scrollen durch Kacheln
4. **Quest-Kachel:** "5 neue Quests in deiner Nähe"
5. **Klick:** Quest-Modul öffnet sich als Floating Window auf Map
6. **Quest wählen:** Quest auswählen, Details anschauen, teilnehmen

### Story 2: Nächstes Event finden
1. **Profil öffnen:** Swipe von links
2. **Kalender-Kachel:** "Nächstes Event: Wildkräuterwanderung (heute, 15:00 Uhr)"
3. **Klick:** Kalender-Modul öffnet sich
4. **Event-Details:** Details anschauen
5. **Navigation:** "Navigiere dorthin" → Google Maps

### Story 3: Log durchschauen
1. **Profil öffnen:** Swipe von links
2. **Log-Kachel:** "Letzte 3 Aktivitäten: Quest abgeschlossen, Event besucht, Marktplatz-Angebot erstellt"
3. **Klick:** Log-Modul öffnet sich
4. **Filter:** "Nur Quest-Log anzeigen"
5. **Export:** "Meine Quest-Reise 2026" als PDF exportieren

---

## Offene Fragen

### 1. Profil-Bild: Avatar oder Foto?
- **Option A:** Avatar-Icon (aus Avatar-Modul)
- **Option B:** Echtes Foto hochladen
- **Option C:** Mix (Avatar + Foto)
- **Entscheidung:** Option A (Avatar-Icon) - passt besser zur Gamification

### 2. Kacheln-Reihenfolge: Fest oder konfigurierbar?
- **Option A:** Feste Reihenfolge (Quest → Kalender → Marktplatz → Log)
- **Option B:** User kann Reihenfolge ändern (Drag & Drop)
- **Entscheidung:** Option B (Post-MVP) - mehr Personalisierung

### 3. Feed-Inhalt: Was kommt in den Feed?
- **Option A:** Nur Modul-Kacheln
- **Option B:** Modul-Kacheln + Social Feed (Community-Updates, Freunde-Aktivitäten)
- **Entscheidung:** Option A (MVP) - Social Feed in Community-Modul (Post-MVP)

### 4. Profil öffentlich oder privat?
- **Option A:** Profil ist öffentlich (wie Social Media)
- **Option B:** Profil ist privat (nur ich sehe mein Profil)
- **Option C:** User entscheidet (öffentlich/privat/nur Freunde)
- **Entscheidung:** Option C - Sichtbarkeit über Web of Trust

---

## Nächste Schritte

1. **Wireframes erstellen** (Figma)
   - Profil-Header (Avatar, Level, Skills)
   - Modul-Kacheln (Quest, Kalender, Marktplatz, Log)
   - Feed-Scrolling
   - Floating-Window-Integration (Profil auf Map)

2. **Kachel-Komponenten** designen
   - Quest-Kachel UX
   - Kalender-Kachel UX
   - Marktplatz-Kachel UX
   - Log-Kachel UX

3. **Feed-Scrolling** prototypen
   - Infinite Scroll testen
   - Pull-to-Refresh testen

4. **Integration mit Map** planen
   - Profil als Floating Window auf Map
   - Swipe-Gesten (Mobile)
   - Split-Screen (Desktop)

---

**Status:** Konzept - PRIORITÄT 2 (nach Map)
**Nächster Schritt:** Wireframes + Kachel-Design

---

*Erstellt am 6. Februar 2026*
*Das Profil ist der Hub - von hier aus geht alles los!* 👤
