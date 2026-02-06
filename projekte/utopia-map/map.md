# Map-Modul

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** Konzept - HÖCHSTE PRIORITÄT

---

## Übersicht

Das **Map-Modul** ist die **ABSOLUTE BASIS** der gesamten Real-Life Stack / Forge Architektur.

**WICHTIGSTE ARCHITEKTUR-ENTSCHEIDUNG:**
Die Map ist **IMMER die Basis**. Alle anderen Module sind **schwebende Fenster/Tiles auf der Map**.

### Zweck
- Geografische Basis für ALLES
- Schnellster Einstiegspunkt zur Realität
- Navigation zu allen Locations
- Discovery von Quests, Events, Angeboten
- **Ziel:** Menschen RAUS aus der App, REIN in die Realität!

---

## Floating-Window-Architektur

### Kernprinzip
- **Map ist IMMER im Hintergrund sichtbar**
- Module öffnen sich als Fenster mit **abgerundeten Ecken** auf der Map
- Fenster sind **verschiebbar, skalierbar, andockbar**
- **Luft zwischen Fenstern** - immer Teile der Map sichtbar

### Desktop
- **4 Fenster gleichzeitig möglich**
- Beispiel: Kalender oben-links, Profil oben-rechts, Avatar unten-rechts, Quest-Log unten-links
- Map immer zwischen den Fenstern sichtbar
- Fenster können gedockt werden (ähnlich IDE)
- **Desktop + 2. Monitor:** Dashboard mit Level-Fortschritt auf 2. Monitor, Map auf 1. Monitor

### Tablet
- Funktioniert sehr gut
- 2-3 Fenster gleichzeitig
- Map immer im Hintergrund

### Mobile
- **Landscape-Modus:** Dashboard-Widget (Vollbild), Map im Hintergrund
- **Portrait-Modus:** Einzelne Fenster, Map im Hintergrund
- Swipe-Gesten zum Schließen von Fenstern
- Map wird wieder sichtbar

### Visualisierung

```
Desktop (4 Fenster auf Map):
┌─────────────────────────────────────────────────────┐
│                   MAP (Hintergrund)                 │
│                                                     │
│  ┌──────────┐           ┌──────────┐               │
│  │ Kalender │           │  Profil  │               │
│  │          │           │          │               │
│  └──────────┘           └──────────┘               │
│                                                     │
│         (Luft - Map sichtbar)                      │
│                                                     │
│  ┌──────────┐           ┌──────────┐               │
│  │ Quest-Log│           │  Avatar  │               │
│  │          │           │          │               │
│  └──────────┘           └──────────┘               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Hauptfunktionen

### 1. Map-Layer-System
**Fantastische Karten statt langweiliger Google Maps!**

- **Multiple Layer gleichzeitig wählbar:**
  - **Fantastische Karten** (künstlerische Ebenen, von Designern gestaltet)
  - **Weltraumansicht** (Space-View)
  - **Standard-Map** (Google Maps Basis)
  - **Community-Layer** (von Communities hochgeladene Karten)

- **Layer-Switching:**
  - Schneller Wechsel zwischen Layern
  - Transparenz-Slider (z.B. 50% fantastische Karte, 50% Google Maps)
  - Layer-Kombinationen speichern

### 2. Navigation
**"Ich will dorthin" → Navigation starten**

- **Google Maps Integration (MVP - einfachste Lösung):**
  - Nutzt Google Maps API für Routing
  - "Navigiere dorthin" Button bei jedem Icon
  - Öffnet Google Maps App (Mobile) oder Google Maps Web (Desktop)

- **Navigation zu:**
  - **Kalender-Einträgen** ("Navigiere zum Event")
  - **Quest-Locations** ("Navigiere zur Quest")
  - **Marktplatz-Angeboten** ("Navigiere zum Angebot")
  - **Wertschöpfungs-Locations** ("Wo wurde Value geschaffen?")

- **Post-MVP:**
  - Eigene Routing-Engine (OSM-basiert)
  - Offline-Navigation
  - Multi-Stop-Routen (mehrere Quests hintereinander)

### 3. Content auf Map
**Alles auf der Map sichtbar machen!**

- **Quest-Icons:**
  - Farbkodiert nach Kategorie (Handwerk = braun, Abenteuer = rot, etc.)
  - Icon zeigt Quest-Typ (QR-Code Quest, Upload-Beweis, etc.)
  - Größe zeigt Beliebtheit (viele Teilnehmer = größeres Icon)

- **Event-Icons:**
  - Kalender-Symbol
  - Farbe zeigt Event-Kategorie (Community, Privat, Öffentlich)
  - Zeitangabe (z.B. "in 2 Stunden")

- **Marktplatz-Icons:**
  - Angebote (grün)
  - Anfragen (blau)
  - Ressourcen (gelb)
  - Werkzeuge (orange)

- **Wertschöpfungs-Icons:**
  - Wo wurde offline Value geschaffen?
  - Transparenz (Offline vs. Online)
  - Community-Währungen (Minuto, Grado, Dank)

- **Community-Icons:**
  - Wo sind Communities aktiv?
  - Wo sind Spaces?

### 4. Filter-System (CRITICAL!)
**"Finde genau das, was du suchst!"**

#### Quick Filter (immer sichtbar):
- **Hashtag-Suche:** #abenteuer, #handwerk, etc.
- **Distanz-Slider:** 5 km, 10 km, 20 km, 50 km, 100 km
- **Kategorie-Chips:** Quests, Events, Marktplatz, Wertschöpfung

#### Erweiterte Filter (ausklappbar):
- **Level:** Quest-Level 1-10
- **Teilnehmerzahl:** Mindestens X Teilnehmer
- **Zeitpunkt:** Heute, Diese Woche, Dieses Wochenende
- **Quest-Typ:** QR-Code, Upload-Beweis, Community-Verifizierung
- **Belohnung:** XP-Range, Items, etc.
- **Ersteller:** Von wem wurde Quest erstellt?
- **Offline/Online Value:** Nur offline, nur online, beides

#### Filter-Kombinationen:
- Filter können kombiniert werden
- Gespeicherte Filter (z.B. "Meine Lieblingsquests")
- Filter-Presets (z.B. "Handwerk in meiner Nähe")

### 5. Zoom & Pan
**Wie Google Maps, aber besser!**

- **Zoom in/out:**
  - Scroll-Wheel (Desktop)
  - Pinch-to-Zoom (Mobile/Tablet)
  - Zoom-Level-Buttons (+/-)

- **Pan:**
  - Drag & Drop (Desktop)
  - Touch & Drag (Mobile/Tablet)

- **Auto-Zoom:**
  - Klick auf Icon → Zoom auf Location
  - "Zeige alle Ergebnisse" → Zoom auf alle gefilterten Icons

### 6. Icon-Interaktion
**Klick auf Icon → Was passiert?**

- **Klick auf Quest-Icon:**
  - Quest-Details als Floating Window auf Map
  - Window zeigt: Titel, Beschreibung, Ort, Belohnung, Teilnehmer
  - Buttons: "Teilnehmen", "Beobachten", "Teilen", "Navigiere dorthin"

- **Klick auf Event-Icon:**
  - Event-Details als Floating Window auf Map
  - Window zeigt: Titel, Beschreibung, Zeitpunkt, Ort, Teilnehmer
  - Buttons: "Teilnehmen", "Kalender hinzufügen", "Navigiere dorthin"

- **Klick auf Marktplatz-Icon:**
  - Angebots-Details als Floating Window auf Map
  - Window zeigt: Titel, Beschreibung, Kategorie, Ressourcen
  - Buttons: "Anfragen", "Details", "Navigiere dorthin"

- **Klick auf Wertschöpfungs-Icon:**
  - Wertschöpfungs-Details als Floating Window auf Map
  - Window zeigt: Was wurde geschaffen, offline/online, Community
  - Transparenz (Logging)

---

## Komponenten

### Mini-Map-Widget (im Dashboard)
- Zeigt Umgebung mit nächsten 5 Quests/Events/Angeboten
- Klick → Map-Modul öffnet sich (fullscreen)

### Navigation-Button (in allen Modulen)
- "Navigiere dorthin" Button
- Öffnet Google Maps mit Ziel

### Map-Layer-Selector
- Layer-Auswahl (Fantastische Karten, Weltraumansicht, Standard)
- Transparenz-Slider

### Filter-Panel
- Quick Filter (Hashtag, Distanz, Kategorie)
- Erweiterte Filter (ausklappbar)

---

## Verknüpfungen

**Map ist BASIS für ALLE MODULE:**
- **Quest-Modul** (Quests auf Map)
- **Kalender-Modul** (Events auf Map)
- **Marktplatz-Modul** (Angebote auf Map)
- **Wertschöpfungs-Modul** (Value-Icons auf Map)
- **Profil-Modul** (Profil öffnet sich als Window auf Map)
- **Community-Modul** (Communities auf Map)
- **Dashboard-Modul** (Dashboard öffnet sich als Window auf Map)
- **ALLE anderen Module** (öffnen sich als Floating Windows auf Map)

---

## Technische Details

### Frontend
- **Framework:** React (Web) + React Native (Mobile)
- **Map-Library:**
  - **MVP:** Google Maps API (einfachste Lösung)
  - **Post-MVP:** Leaflet.js (Open Source) + OSM (OpenStreetMap)
- **Floating Windows:** React-Grid-Layout oder ähnlich
- **State Management:** Redux/Zustand (Map-State zentral)

### Backend
- **Map-Service:** Microservice für Map-Daten
- **API:** GraphQL Query für Icons auf Map
- **Caching:** Redis für schnelle Icon-Abfragen
- **Geo-Datenbank:** PostGIS (PostgreSQL Extension für Geo-Daten)

### Performance
- **Icon-Clustering:** Bei vielen Icons → Cluster-Icons (wie Google Maps)
- **Lazy Loading:** Icons werden nur geladen, wenn sichtbar
- **Caching:** Map-Tiles werden gecached
- **Offline:** Map-Tiles für Offline-Nutzung downloadbar

---

## MVP-Funktionen

**Für MVP (Phase 1 - Foundation):**
1. ✅ Google Maps Integration (Basis-Karte)
2. ✅ Quest-Icons auf Map
3. ✅ Event-Icons auf Map
4. ✅ Quick Filter (Hashtag, Distanz, Kategorie)
5. ✅ Zoom & Pan
6. ✅ Icon-Klick → Details-Window (Floating)
7. ✅ "Navigiere dorthin" Button → Google Maps
8. ✅ Floating-Window-System (Module auf Map)

**Post-MVP:**
- Map-Layer-System (Fantastische Karten, Weltraumansicht)
- Erweiterte Filter
- Marktplatz-Icons auf Map
- Wertschöpfungs-Icons auf Map
- Icon-Clustering
- Offline-Map
- Eigene Routing-Engine

---

## User Stories

### Story 1: Erwachsener sucht Abenteuer
1. **Einstieg:** App öffnen → Map ist sofort sichtbar
2. **Filter:** Hashtag "#abenteuer" eingeben, Distanz 20 km
3. **Quest finden:** "Bogenschießen im Wald" (10 km entfernt)
4. **Details:** Klick auf Quest-Icon → Details-Window öffnet sich
5. **Navigation:** "Navigiere dorthin" → Google Maps öffnet sich
6. **Teilnahme:** "Teilnehmen" Button → Quest in "Laufende Quests"

### Story 2: Community-Event finden
1. **Einstieg:** Map öffnen
2. **Filter:** Kategorie "Events", Distanz 10 km
3. **Event finden:** "Wildkräuterwanderung" (heute, 15:00 Uhr)
4. **Details:** Klick auf Event-Icon → Details-Window
5. **Navigation:** "Navigiere dorthin" → Google Maps
6. **Teilnahme:** "Teilnehmen" → Event im Kalender

### Story 3: Marktplatz-Angebot entdecken
1. **Einstieg:** Map öffnen
2. **Filter:** Kategorie "Marktplatz", Distanz 5 km
3. **Angebot finden:** "Frische Äpfel vom Hof" (2 km entfernt)
4. **Details:** Klick auf Angebot-Icon → Details-Window
5. **Navigation:** "Navigiere dorthin" → Google Maps
6. **Anfrage:** "Anfragen" → Kontakt aufnehmen

---

## Offene Fragen

### 1. Map-Provider: Google Maps oder OpenStreetMap?
- **Google Maps:** Einfach, bekannt, gute API
- **OpenStreetMap:** Open Source, keine API-Kosten, mehr Kontrolle
- **Entscheidung:** MVP = Google Maps, Post-MVP = OSM

### 2. Fantastische Karten: Wer designed sie?
- **Option A:** Designer-Onboarding (Designer erstellen Layer)
- **Option B:** Communities können eigene Layer hochladen
- **Option C:** Mix aus beidem
- **Entscheidung:** Option C

### 3. Offline-Map: Wie viel Speicherplatz?
- **Problem:** Map-Tiles können viel Speicherplatz brauchen
- **Lösung:** User wählt Region für Offline-Download (z.B. "Deutschland", "Hamburg")
- **Entscheidung:** Post-MVP

### 4. Icon-Clustering: Ab wie vielen Icons?
- **Problem:** Bei vielen Icons wird Map unübersichtlich
- **Lösung:** Ab 10 Icons auf gleicher Stelle → Cluster-Icon (zeigt Anzahl)
- **Entscheidung:** Post-MVP

---

## Nächste Schritte

1. **Wireframes erstellen** (Figma)
   - Map mit Quest-Icons
   - Map mit Event-Icons
   - Floating-Window-System
   - Filter-Panel
   - Icon-Details-Window

2. **Google Maps API** evaluieren
   - API-Key beantragen
   - Kosten berechnen
   - Limits prüfen

3. **Floating-Window-System** prototypen
   - React-Grid-Layout testen
   - Custom-Lösung evaluieren

4. **Filter-System** designen
   - UX für Quick Filter
   - UX für Erweiterte Filter

5. **Integration mit Quest-Modul** planen
   - API für Quest-Icons
   - Datenmodell für Locations

---

**Status:** Konzept - HÖCHSTE PRIORITÄT
**Nächster Schritt:** Wireframes + Google Maps API Evaluation

---

*Erstellt am 6. Februar 2026*
*Die Map ist die Basis - alles andere schwebt darauf!* 🗺️
