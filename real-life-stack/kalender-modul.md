# Kalender-Modul

**Version:** 1.0 (aus HedgeDog übernommen)
**Datum:** 6. Februar 2026
**Status:** Sammlungsphase - Ideen aus HedgeDog-Entwicklung

---

## Kontext

Dieses Dokument sammelt alle Ideen und Konzepte für das **Kalender-Modul** aus der HedgeDog-Entwicklung. Es ist **nicht in Stein gemeißelt** - wir nehmen die besten Ideen heraus und entwickeln daraus ein finales Konzept für den RealStack.

**Hinweis:** Das ursprüngliche HedgeDog-Konzept vereinte Kalender und Quests. Wir führen diese jetzt als **separate Module**:
- **Kalender-Modul** (dieses Dokument)
- **Quest-Modul** (separates Dokument)

---

## Rolle & Aufgabe

Du bist ein erfahrener **Softwarearchitekt, Product Owner und UX-Designer** in einer Person. Deine Aufgabe ist es, eine komplette **Kalender-App mit Termin- und Event-Funktionen** so zu spezifizieren, dass ein Entwicklerteam sie 1:1 nachbauen kann.

---

## Ziel

Eine mobile Kalender-App (primär Android, konzeptionell plattformunabhängig), die sowohl ein **klassischer Kalender** (Termine, Serientermine, Widgets usw.) als auch ein **moderner Event-Kalender** ist.

### Die App soll:

1. **Normale Termine** unterstützen (z.B. Meetings, private Termine)
2. **Events mit Bildern** (Coverbild, Bildergalerie) und ausführlicher Beschreibung über **Markdown-Editor**
3. **Orte/Locations** als eigene Entitäten verwalten, die jeweils einen **eigenen Kalender** bekommen
4. **Mehrere Kalender** (privat, Arbeit, Locations, etc.) mit Farben, Erinnerungen, Wiederholungen
5. **Widgets** für den Homescreen bereitstellen
6. **Sehr intuitive Zeiteingabe** bieten
7. **Hashtags/Tags** für Termine und Events unterstützen (#konzert, #meeting, #familie, #remote etc.)
8. Funktion zum **„Annehmen" und „Beobachten"** von Terminen/Events (Teilnahme-Status + Watchlist)
9. Im **Profil** eine „Termin-Komponente" anzeigen (angenommene, beobachtete, eigene)
10. **Synchronisation** mit Handy (Systemkalender/ICS/CalDAV)

---

## Struktur der Spezifikation

Die vollständige Spezifikation gliedert sich in folgende Hauptabschnitte:

1. **Produkt-Zusammenfassung**
2. **User Personas** (kurz)
3. **User Stories** (mit Akzeptanzkriterien)
4. **Funktionsumfang** (Feature-Liste)
5. **Datenmodell** (Entitäten & Felder)
6. **UI & Navigation** (Ansichten & Verhalten)
7. **Widgets** (Typen, Verhalten, Konfiguration)
8. **Logikdetails & Edge Cases**
9. **Nicht-funktionale Anforderungen**
10. **Offene Fragen / Annahmen**

---

## 1. PRODUKT-ZUSAMMENFASSUNG

### Was diese App kann

Die App vereint einen **klassischen Termin-Kalender** mit einem **modernen Event-Kalender**. Nutzer können:
- Private Termine verwalten (Meetings, Geburtstage, Freizeit)
- Öffentliche Events entdecken und organisieren (mit Bildern, Markdown-Beschreibungen)
- Locations/Orte mit eigenen Event-Kalendern bespielen
- Teilnahme-Status setzen (annehmen, beobachten, ablehnen)
- Alles automatisch mit dem Handy synchronisieren

### Welches Problem sie löst

Nutzer brauchen **eine zentrale Übersicht** über:
- Ihre persönlichen Termine (privat, Arbeit, Familie)
- Öffentliche Events/Veranstaltungen in ihrer Umgebung
- Location-basierte Event-Kalender (z.B. Club-Events, Konferenzräume)

Aktuell sind diese Informationen oft in mehreren Apps verteilt.

### Besonderheiten

- ✅ **Sehr gute Zeiteingabe** (Time Picker, Direkt-Eingabe, Raster)
- ✅ **Event-Ansichten mit Bildern** und Markdown-Beschreibung
- ✅ **Orte/Locations mit eigenen Kalendern**
- ✅ **Hashtags für bessere Suche/Filter** (#konzert, #meeting, #remote)
- ✅ **Teilnahme-Status** (annehmen/absagen) und **Beobachten** (Watchlist)
- ✅ **Profil-Termin-Komponente** mit automatischer Synchronisation
- ✅ **Starke Widgets** für Termine und Events

---

## 2. USER PERSONAS

### Persona 1: Berufstätiger mit vielen Meetings

**Ziele:**
- Termine schnell erfassen und verwalten
- Übersicht über den Tag/die Woche behalten
- Termine mit Handy synchronisieren

**Bedürfnisse:**
- Schnelle Eingabe (Time Picker, Standarddauer)
- Erinnerungen
- Serientermine (z.B. wöchentliche Meetings)
- Widget auf Homescreen
- Sync mit Systemkalender

---

### Persona 2: Privatnutzer / Familienorganisator

**Ziele:**
- Familien- und Freizeit-Termine koordinieren
- Geburtstage, Urlaube, private Events planen
- Übersicht durch Kategorisierung (#familie, #geburtstag, #urlaub)

**Bedürfnisse:**
- Mehrere Kalender (privat, Familie, Freizeit)
- Farben zur Unterscheidung
- Hashtags für schnelle Suche
- Erinnerungen
- Ganztägige Termine

---

### Persona 3: Event-Organisator / Location-Betreibender

**Ziele:**
- Events an bestimmten Orten planen
- Events visuell ansprechend präsentieren (Bilder, Markdown)
- Kalender pro Location „bespielen"
- Teilnahme-Statistiken sehen

**Bedürfnisse:**
- Location-Entitäten mit eigenem Kalender
- Event-Typ (vs. normaler Termin)
- Coverbild + Bildergalerie
- Markdown-Editor für Beschreibungen
- Teilnahme-Status (annehmen/beobachten)
- Übersicht: Wie viele Leute haben angenommen?

---

### Persona 4: Power-User

**Ziele:**
- Mehrere Kalender parallel nutzen (privat, business, Vereine, Locations)
- Volle Kontrolle über Sichtbarkeit, Sync, Widgets
- Hashtags, Filter, Suche intensiv nutzen

**Bedürfnisse:**
- Alle Features nutzen
- Profil-Termine + Sync
- Widgets anpassen
- Export/Import (ICS, CalDAV)
- Granulare Einstellungen

---

## 3. USER STORIES (MIT AKZEPTANZKRITERIEN)

### A) Termine verwalten

#### US-1: Termin erstellen
**Als** Nutzer
**möchte ich** einfache Termine erstellen, bearbeiten, löschen
**damit** ich meine Termine organisieren kann.

**Akzeptanzkriterien:**
- Gegeben ist die Kalender-App
- Wenn ich auf „+" oder „Neuer Termin" tippe
- Dann öffnet sich ein Formular mit: Titel, Startzeit, Endzeit, Kalender, Erinnerungen, Hashtags
- Wenn ich speichere, erscheint der Termin im Kalender

---

#### US-2: Ganztägiger Termin
**Als** Nutzer
**möchte ich** ganztägige Termine anlegen
**damit** ich z.B. Urlaube oder Geburtstage ohne Uhrzeit erfassen kann.

**Akzeptanzkriterien:**
- Gegeben ist das Termin-Formular
- Wenn ich „Ganztägig" aktiviere
- Dann verschwinden die Zeitfelder (Start-/Endzeit)
- Der Termin wird als ganztägig im Kalender angezeigt (z.B. oben im Tagesbereich)

---

#### US-3: Termin einem Kalender zuordnen
**Als** Nutzer
**möchte ich** Termine bestimmten Kalendern zuordnen können
**damit** ich zwischen privat, Arbeit, etc. unterscheiden kann.

**Akzeptanzkriterien:**
- Im Termin-Formular gibt es ein Dropdown „Kalender"
- Standard-Kalender ist vorausgewählt
- Nach Speicherung übernimmt der Termin die Farbe des Kalenders (sofern keine individuelle Farbe gesetzt)

---

#### US-4: Terminfarben
**Als** Nutzer
**möchte ich** Terminfarben verwenden können (vom Kalender oder individuell)
**damit** ich auf einen Blick sehe, zu welcher Kategorie ein Termin gehört.

**Akzeptanzkriterien:**
- Standardmäßig übernimmt der Termin die Farbe des zugeordneten Kalenders
- Optional kann ich eine eigene Farbe für den Termin setzen (überschreibt Kalenderfarbe)

---

### B) Events verwalten (mit Bildern und Markdown)

#### US-5: Event anlegen
**Als** Event-Organisator
**möchte ich** Events anlegen, die sich visuell von normalen Terminen unterscheiden
**damit** ich z.B. Konzerte, Workshops, Konferenzen attraktiv darstellen kann.

**Akzeptanzkriterien:**
- Im Formular gibt es einen Toggle „Event" vs. „Termin"
- Bei „Event" erscheinen zusätzliche Felder: Coverbild, Bildergalerie, Markdown-Editor
- Events werden in der Kalenderansicht mit kleinem Bild-Icon markiert
- Es gibt eine separate „Event-Ansicht" (Liste mit Coverbildern)

---

#### US-6: Coverbild und Galerie
**Als** Event-Organisator
**möchte ich** ein Coverbild und mehrere zusätzliche Bilder hochladen
**damit** das Event visuell ansprechend ist.

**Akzeptanzkriterien:**
- Feld „Coverbild hochladen" (max. 1 Bild)
- Feld „Galerie" (mehrere Bilder, z.B. max. 10)
- Bilder werden in der Event-Detailansicht angezeigt
- Optional: Bilder in Widgets (wenn aktiviert)

---

#### US-7: Markdown-Editor für Event-Beschreibung
**Als** Event-Organisator
**möchte ich** die Event-Beschreibung mit einem Markdown-Editor erstellen
**damit** ich Überschriften, Listen, Links und Formatierungen nutzen kann.

**Akzeptanzkriterien:**
- Im Event-Formular gibt es einen Markdown-Editor
- Vorschau-Modus zeigt gerenderten Text
- Speicherung als `markdownBody` (String)
- Detailansicht rendert Markdown als Rich-Text

---

#### US-8: Event-Beschreibung rendern
**Als** Nutzer
**möchte ich** die Event-Beschreibung in schön formatiertem Rich-Text sehen
**damit** ich alle Infos gut lesen kann.

**Akzeptanzkriterien:**
- Detailansicht rendert Markdown (Überschriften, Listen, Links, Fett, Kursiv)
- Keine Rohdaten-Ansicht (außer im Edit-Modus)

---

#### US-9: Event-Infos pflegen
**Als** Event-Organisator
**möchte ich** Start-/Endzeit, Ort (Location), Tickets/Preis (optional) pflegen
**damit** alle relevanten Infos verfügbar sind.

**Akzeptanzkriterien:**
- Felder: Titel, Start, Ende, Location (Dropdown oder Freitext), Preis (optional), Ticket-Link (optional)
- Optional: Zusatzfelder wie „Kapazität", „Anmeldung erforderlich"

---

#### US-10: Event-Liste
**Als** Nutzer
**möchte ich** Events in einer speziellen Event-Liste sehen
**damit** ich visuell schnell interessante Events finde.

**Akzeptanzkriterien:**
- Eigener Tab/View „Events"
- Liste zeigt: Coverbild, Titel, Datum, Ort, Hashtags
- Sortierung nach Datum (aufsteigend)
- Tippen öffnet Detailansicht

---

### C) Orte / Locations mit eigenen Kalendern

#### US-11: Location anlegen
**Als** Event-Organisator
**möchte ich** Orte/Locations als eigene Objekte verwalten
**damit** ich z.B. „Halle A", „Club XYZ", „Konferenzraum 1" als Entitäten habe.

**Akzeptanzkriterien:**
- Eigene Verwaltungsseite „Locations"
- Felder: Name, Adresse, Beschreibung (Markdown), Coverbild, Galerie, Geo-Koordinaten (optional), Kontakt
- Jede Location bekommt automatisch einen eigenen Kalender

---

#### US-12: Location-Kalender
**Als** Event-Organisator
**möchte ich** jedem Ort einen eigenen Kalender zuordnen
**damit** ich alle Events an diesem Ort in einer separaten Ansicht sehe.

**Akzeptanzkriterien:**
- Bei Location-Erstellung wird automatisch ein Kalender (`type: "location"`) angelegt
- Location.calendarId verweist auf diesen Kalender
- Kalender ist standardmäßig sichtbar

---

#### US-13: Location-Ansicht
**Als** Nutzer
**möchte ich** alle Events eines Ortes in einer Kalenderansicht sehen
**damit** ich z.B. den Monatsplan eines Clubs sehe.

**Akzeptanzkriterien:**
- Detailansicht einer Location zeigt Header (Bild, Name, Adresse) + Kalender darunter
- Kalender zeigt nur Events dieser Location
- Wechsel zwischen Monats-/Wochen-/Listenansicht möglich

---

#### US-14: Schneller Wechsel zwischen Location-Kalendern
**Als** Organisator
**möchte ich** schnell zwischen den Kalendern verschiedener Orte wechseln
**damit** ich z.B. zwischen „Halle A", „Halle B", „Club XYZ" navigiere.

**Akzeptanzkriterien:**
- Sidebar oder Dropdown „Locations"
- Tippen auf Location → zeigt Location-Ansicht mit Kalender

---

### D) Zeit und Datum

#### US-15: Intuitive Zeiteingabe
**Als** Nutzer
**möchte ich** Zeit schnell und intuitiv eingeben
**damit** ich nicht lange in Formularen hängenbleibe.

**Akzeptanzkriterien:**
- Time Picker (Standard Android/iOS)
- Direkt-Eingabe (z.B. „14:30" tippen)
- Zeitraster (z.B. 5/15-Minuten-Schritte, konfigurierbar)

---

#### US-16: Automatische Endzeit
**Als** Nutzer
**möchte ich** eine automatische Endzeit nach Eingabe der Startzeit
**damit** ich nicht immer beide Zeiten eingeben muss.

**Akzeptanzkriterien:**
- Nach Eingabe der Startzeit wird Endzeit = Startzeit + Standarddauer (z.B. 60 Minuten) gesetzt
- Standarddauer in Settings konfigurierbar
- Endzeit ist editierbar

---

#### US-17: Validierung
**Als** Nutzer
**möchte ich** eine Validierung bei Endzeit < Startzeit
**damit** ich keine ungültigen Termine erstelle.

**Akzeptanzkriterien:**
- Wenn Endzeit < Startzeit, erscheint Fehlermeldung
- Speichern ist blockiert, bis korrigiert

---

#### US-18: Ganztägige Events/Termine
**Als** Nutzer
**möchte ich** ganztägige Events/Termine ohne Uhrzeit anlegen
**damit** ich z.B. Geburtstage oder Urlaube erfasse.

**Akzeptanzkriterien:**
- Toggle „Ganztägig"
- Zeitfelder verschwinden
- Termin wird als ganztägig im Kalender angezeigt (z.B. oben im Tagesbereich)

---

#### US-19: Zeitraster
**Als** Nutzer
**möchte ich** ein Zeitraster (z.B. 5/15-Minuten-Schritte)
**damit** Zeiten einheitlich sind.

**Akzeptanzkriterien:**
- In Settings wählbar: 5, 10, 15, 30 Minuten
- Time Picker rastet auf Raster ein

---

### E) Wiederholungen / Serientermine

#### US-20: Wiederholungen anlegen
**Als** Nutzer
**möchte ich** tägliche, wöchentliche, monatliche, jährliche Wiederholungen
**damit** ich z.B. wöchentliche Meetings nicht einzeln anlegen muss.

**Akzeptanzkriterien:**
- Dropdown „Wiederholung": Keine, Täglich, Wöchentlich, Monatlich, Jährlich, Benutzerdefiniert
- Bei „Benutzerdefiniert": Detaileinstellungen (z.B. „alle 2 Wochen", „Mo/Mi/Fr")

---

#### US-21: Wiederholung an Wochentagen
**Als** Nutzer
**möchte ich** Wiederholung an bestimmten Wochentagen (z.B. Mo/Mi/Fr)
**damit** ich z.B. Trainingstage plane.

**Akzeptanzkriterien:**
- Bei „Wöchentlich": Checkboxen für Mo, Di, Mi, Do, Fr, Sa, So
- Termin wiederholt sich nur an ausgewählten Tagen

---

#### US-22: „Alle X Tage/Wochen/Monate/Jahre"
**Als** Nutzer
**möchte ich** „alle X Tage/Wochen/Monate/Jahre" einstellen
**damit** ich z.B. „alle 3 Tage" oder „alle 2 Monate" habe.

**Akzeptanzkriterien:**
- Eingabefeld „Alle X [Tage/Wochen/Monate/Jahre]"
- Wiederholung erfolgt entsprechend

---

#### US-23: Endbedingungen
**Als** Nutzer
**möchte ich** Endbedingungen für Wiederholungen setzen
**damit** z.B. ein Kurs nach 10 Terminen endet.

**Akzeptanzkriterien:**
- Optionen: „Nie", „Bis zu Datum", „Nach X Wiederholungen"
- Wiederholung endet entsprechend

---

#### US-24: Edge Cases (Monatsende, Schaltjahre)
**Als** Nutzer
**möchte ich** korrekte Wiederholungen auch bei Monatsende/Schaltjahren
**damit** z.B. „31. Januar" monatlich korrekt funktioniert.

**Akzeptanzkriterien:**
- Bei Monaten ohne 31. Tag → letzter Tag des Monats (z.B. 28./29. Feb)
- Schaltjahre werden korrekt berücksichtigt

---

### F) Erinnerungen / Benachrichtigungen

#### US-25: Standard-Erinnerung
**Als** Nutzer
**möchte ich** eine Standard-Erinnerung für neue Termine/Events
**damit** ich nicht vergesse, sie einzustellen.

**Akzeptanzkriterien:**
- In Settings: „Standard-Erinnerung" (z.B. 15 Minuten vorher)
- Bei neuem Termin/Event wird diese Erinnerung automatisch hinzugefügt
- Ist editierbar/löschbar

---

#### US-26: Mehrere Erinnerungen
**Als** Nutzer
**möchte ich** mehrere Erinnerungen pro Event/Termin
**damit** ich z.B. „1 Tag vorher" + „15 Minuten vorher" habe.

**Akzeptanzkriterien:**
- Feld „Erinnerungen" (Liste)
- Button „+ Erinnerung hinzufügen"
- Jede Erinnerung: Zeitpunkt (z.B. „15 Minuten vorher"), Typ (Notification, optional E-Mail)

---

#### US-27: Verschiedene Erinnerungsarten
**Als** Nutzer
**möchte ich** verschiedene Arten (System-Notification, optional E-Mail)
**damit** ich flexibel bin.

**Akzeptanzkriterien:**
- Typ: „Notification" (Standard), optional „E-Mail"
- E-Mail nur, wenn User E-Mail-Adresse hinterlegt

---

#### US-28: Snooze/Später erinnern
**Als** Nutzer
**möchte ich** Erinnerungen snoozen
**damit** ich sie z.B. +10 Minuten später nochmal bekomme.

**Akzeptanzkriterien:**
- In Notification: Buttons „Snooze 10 Min", „Snooze 1h", „Schließen"
- Nach Snooze wird Notification erneut angezeigt

---

### G) Mehrere Kalender (inkl. Location-Kalender)

#### US-29: Verschiedene Kalender
**Als** Nutzer
**möchte ich** verschiedene Kalender (privat, Arbeit, Projekt, Location-Kalender)
**damit** ich Termine kategorisiere.

**Akzeptanzkriterien:**
- Verwaltungsseite „Kalender"
- Felder: Name, Farbe, Typ (user/location/shared), Sichtbarkeit
- Standard-Kalender festlegbar

---

#### US-30: Farben pro Kalender
**Als** Nutzer
**möchte ich** Farben pro Kalender
**damit** ich sie visuell unterscheide.

**Akzeptanzkriterien:**
- Farbauswahl (Color Picker)
- Termine übernehmen Kalenderfarbe (sofern keine eigene Farbe gesetzt)

---

#### US-31: Ein-/Ausblenden von Kalendern
**Als** Nutzer
**möchte ich** Kalender ein-/ausblenden
**damit** ich z.B. nur private Termine sehe.

**Akzeptanzkriterien:**
- In Kalender-Verwaltung: Toggle „Sichtbar"
- Kalenderansicht zeigt nur sichtbare Kalender
- Widgets respektieren Sichtbarkeit

---

#### US-32: Standardkalender
**Als** Nutzer
**möchte ich** einen Standardkalender für neue Einträge
**damit** ich nicht jedes Mal auswählen muss.

**Akzeptanzkriterien:**
- In Settings: „Standardkalender"
- Bei neuem Termin/Event ist dieser vorausgewählt

---

### H) Hashtags / Tags

#### US-33: Hashtags hinzufügen
**Als** Nutzer
**möchte ich** zu Terminen und Events Hashtags hinzufügen
**damit** ich sie leichter über die Suche finde.

**Akzeptanzkriterien:**
- Feld „Hashtags" (z.B. Chips mit Autocomplete)
- Format: #meeting, #konzert, #remote
- Speicherung als Array: `["#meeting", "#konzert"]`

---

#### US-34: Nach Hashtags filtern
**Als** Nutzer
**möchte ich** in der Suche gezielt nach Hashtags filtern
**damit** ich z.B. alle #konzert-Termine finde.

**Akzeptanzkriterien:**
- Suchfeld mit Hashtag-Autocomplete
- Eingabe „#konzert" → zeigt alle Termine/Events mit diesem Hashtag

---

#### US-35: Hashtag-Übersicht
**Als** Nutzer
**möchte ich** in der Detailansicht alle Hashtags sehen und durch Tippen alle passenden Termine/Events finden
**damit** ich ähnliche Termine entdecke.

**Akzeptanzkriterien:**
- Detailansicht zeigt Hashtags als anklickbare Chips
- Tippen auf Hashtag → öffnet Suchergebnisse für diesen Hashtag

---

### I) Teilnahme-Status: Annehmen / Beobachten

#### US-36: Event annehmen
**Als** Nutzer
**möchte ich** einen Event annehmen
**damit** er als bestätigte Teilnahme in meinem Profil und Kalender angezeigt wird.

**Akzeptanzkriterien:**
- In Detailansicht: Button „Annehmen"
- Nach Klick: `Participation` mit `status: "accepted"` erstellt
- Event erscheint in Profil-Tab „Angenommen"
- Event wird in persönlichen Kalender synchronisiert (wenn aktiviert)

---

#### US-37: Event beobachten
**Als** Nutzer
**möchte ich** einen Event nur beobachten
**damit** ich ihn weiter im Blick habe, ohne feste Zusage.

**Akzeptanzkriterien:**
- Button „Beobachten"
- `Participation` mit `status: "observing"`
- Erscheint in Profil-Tab „Beobachtet"
- Optional: Sync in persönlichen Kalender (konfigurierbar)

---

#### US-38: Teilnahme ablehnen/zurückziehen
**Als** Nutzer
**möchte ich** ablehnen oder meine Teilnahme zurückziehen
**damit** ich flexibel bin.

**Akzeptanzkriterien:**
- Button „Ablehnen"
- `Participation` mit `status: "declined"` oder Löschung
- Event verschwindet aus Profil-Tabs

---

#### US-39: Teilnahme-Statistiken
**Als** Organisator
**möchte ich** sehen, wie viele Nutzer einen Event angenommen oder beobachten
**damit** ich die Resonanz einschätze.

**Akzeptanzkriterien:**
- In Event-Detailansicht (als Organisator): Zähler „X Teilnehmer", „Y Beobachter"
- Optional: Liste der Teilnehmer (wenn öffentlich)

---

#### US-40: Übersicht meiner Teilnahmen
**Als** Nutzer
**möchte ich** meine angenommenen und beobachteten Termine/Events in einer Übersicht sehen
**damit** ich schnell Zugriff habe.

**Akzeptanzkriterien:**
- Profil → „Meine Termine & Events"
- Tabs: „Eigene", „Angenommen", „Beobachtet"
- Sortiert nach Datum

---

### J) Profil & Termin-Komponente

#### US-41: Profil-Termin-Komponente
**Als** Nutzer
**möchte ich** in meinem Profil eine Termin-/Event-Komponente haben
**damit** ich alle relevanten Termine an einem Ort sehe.

**Akzeptanzkriterien:**
- Profil-Seite zeigt Bereich „Meine Termine & Events"
- Tabs: „Eigene" (createdByUserId), „Angenommen" (status: accepted), „Beobachtet" (status: observing)
- Liste zeigt: Titel, Datum, Ort, Hashtags, Teilnahme-Status

---

#### US-42: Termin direkt aus Profil öffnen/bearbeiten
**Als** Nutzer
**möchte ich** von dort aus einzelne Termine/Events direkt öffnen, bearbeiten oder meine Teilnahme anpassen
**damit** ich alles an einem Ort manage.

**Akzeptanzkriterien:**
- Tippen auf Termin → Detailansicht
- In Detailansicht: „Bearbeiten" (wenn eigener Termin), „Teilnahme ändern" (wenn Participation)

---

#### US-43: Profil-Termine als Feed abonnieren
**Als** Nutzer
**möchte ich** die Profil-Termine als eigenen Kalender/Feed abonnieren
**damit** ich sie z.B. in anderen Apps sehe.

**Akzeptanzkriterien:**
- In Profil: Button „Kalender abonnieren"
- Generiert ICS-Feed-URL
- Feed enthält eigene, angenommene, beobachtete Termine (konfigurierbar)

---

### K) Synchronisation mit eigenem Kalender / Handy

#### US-44: Persönlicher Kalender
**Als** Nutzer
**möchte ich**, dass meine relevanten Termine in meinem persönlichen Kalender angezeigt werden
**damit** ich alles an einem Ort habe.

**Akzeptanzkriterien:**
- Entität `SyncFeed` aggregiert alle relevanten Termine
- Konfigurierbar: eigene, angenommene, beobachtete

---

#### US-45: Systemkalender-Sync
**Als** Nutzer
**möchte ich** diese in meinem Betriebssystem-Kalender sehen
**damit** sie automatisch mit meinem Handy synchronisiert sind.

**Akzeptanzkriterien:**
- In Settings: „Sync mit Systemkalender" (an/aus)
- App erstellt/aktualisiert Einträge im Android Systemkalender
- Bei Änderungen werden Systemkalender-Einträge aktualisiert

---

#### US-46: ICS/CalDAV-Link
**Als** Nutzer
**möchte ich** einen ICS-/CalDAV-Link erhalten
**damit** ich meinen persönlichen Kalender in anderen Apps abonniere.

**Akzeptanzkriterien:**
- In Settings: „ICS-Feed-URL anzeigen"
- URL ist kopierbar
- Feed ist in Standard-Kalender-Apps abonnierbar

---

#### US-47: Sync-Konfiguration
**Als** Nutzer
**möchte ich** steuern, was synchronisiert wird
**damit** ich z.B. nur angenommene Events synchronisiere.

**Akzeptanzkriterien:**
- Settings: Checkboxen „Eigene Termine", „Angenommene Events", „Beobachtete Events"
- Nur ausgewählte erscheinen im Sync-Feed

---

### L) Ansichten / Navigation

#### US-48: Verschiedene Ansichten
**Als** Nutzer
**möchte ich** Tages-, Wochen-, Monats-, Jahres- und Agenda-/Listenansicht
**damit** ich flexibel bin.

**Akzeptanzkriterien:**
- Tabs/Menü: Tag, Woche, Monat, Jahr, Agenda, Events
- Swipe zwischen Ansichten möglich

---

#### US-49: Event-Ansicht
**Als** Nutzer
**möchte ich** eine spezielle Event-Liste mit Bildern und Hashtags
**damit** ich visuell Events entdecke.

**Akzeptanzkriterien:**
- Tab „Events" zeigt nur Events (type: "event")
- Liste: Coverbild, Titel, Datum, Ort, Hashtags
- Sortierung nach Datum (aufsteigend)

---

#### US-50: Zu Datum springen
**Als** Nutzer
**möchte ich** schnell zu einem Datum springen
**damit** ich z.B. zu meinem Geburtstag in 6 Monaten springe.

**Akzeptanzkriterien:**
- Button „Zu Datum springen"
- Date Picker öffnet
- Nach Auswahl springt Kalender zu diesem Datum

---

### M) Suche & Filter

#### US-51: Volltextsuche
**Als** Nutzer
**möchte ich** nach Titel, Ort, Beschreibung (auch im Markdown-Text) suchen
**damit** ich Termine schnell finde.

**Akzeptanzkriterien:**
- Suchfeld durchsucht: title, locationText, markdownBody, plainDescription
- Ergebnisliste zeigt passende Termine/Events

---

#### US-52: Hashtag-Suche
**Als** Nutzer
**möchte ich** nach Hashtags suchen
**damit** ich z.B. alle #konzert-Termine finde.

**Akzeptanzkriterien:**
- Eingabe „#konzert" filtert nach diesem Hashtag
- Autocomplete schlägt vorhandene Hashtags vor

---

#### US-53: Filter
**Als** Nutzer
**möchte ich** nach Kalendern, Locations, Event-Typ, Farben, Teilnahme-Status filtern
**damit** ich gezielte Ergebnisse bekomme.

**Akzeptanzkriterien:**
- Filter-Panel: Kalender (Multi-Select), Locations, Event-Typ (Termin/Event), Teilnahme-Status (angenommen/beobachtet/keine)
- Ergebnisliste aktualisiert sich live

---

### N) Widgets

#### US-54: Monats-Widget
**Als** Nutzer
**möchte ich** ein Monats-Widget auf dem Homescreen
**damit** ich die Übersicht habe.

**Akzeptanzkriterien:**
- Widget zeigt aktuellen Monat mit Markierung von Tagen mit Terminen/Events
- Tage mit Events haben spezielles Markup (z.B. farbiger Punkt)
- Tippen auf Tag → App öffnet Tagesansicht

---

#### US-55: Agenda-Widget
**Als** Nutzer
**möchte ich** ein Agenda-Widget (Liste kommender Termine/Events)
**damit** ich den nächsten Termin sehe.

**Akzeptanzkriterien:**
- Widget zeigt nächste X Termine/Events (konfigurierbar, z.B. 5)
- Bei Events: optionales kleines Bild
- Hashtags als Chips (optional)
- Tippen auf Eintrag → Detailansicht

---

#### US-56: Heute-Widget
**Als** Nutzer
**möchte ich** ein Heute-Widget
**damit** ich heutige Termine/den nächsten Termin prominent sehe.

**Akzeptanzkriterien:**
- Widget zeigt heutige Termine/Events
- Nächster Termin/Event prominent (groß, ggf. mit Countdown)

---

#### US-57: Location-Widget
**Als** Nutzer
**möchte ich** ein Location-Widget
**damit** ich kommende Events einer bestimmten Location sehe.

**Akzeptanzkriterien:**
- Widget-Konfiguration: Location auswählen
- Widget zeigt kommende Events dieser Location
- Tippen → Location-Ansicht

---

#### US-58: Profil-Widget
**Als** Nutzer
**möchte ich** ein Profil-Widget („Meine Termine heute")
**damit** ich nur relevante Termine (angenommen, beobachtet, eigene) sehe.

**Akzeptanzkriterien:**
- Widget zeigt nur Termine/Events, die für den Nutzer relevant sind
- Konfigurierbar: angenommen, beobachtet, eigene

---

## 4. FUNKTIONSUMFANG (FEATURE-LISTE)

### 4.1 Klassische Terminverwaltung

**Beschreibung:**
Verwaltung von einfachen Terminen (Meetings, Arzttermine, private Events).

**Optionen:**
- Titel, Start-/Endzeit, ganztägig
- Kalender-Zuordnung
- Farbe (von Kalender oder individuell)
- Erinnerungen
- Wiederholungen
- Hashtags

---

### 4.2 Eventverwaltung (mit Bildern & Markdown)

**Beschreibung:**
Verwaltung von Events mit visueller Darstellung (Coverbild, Galerie) und ausführlichen Beschreibungen (Markdown).

**Optionen:**
- Coverbild hochladen
- Bildergalerie (mehrere Bilder)
- Markdown-Editor für Beschreibung
- Preis/Tickets (optional)
- Teilnahme-Status (annehmen/beobachten/ablehnen)

---

### 4.3 Mehrere Kalender (inkl. Location-Kalender)

**Beschreibung:**
Verwaltung mehrerer Kalender (privat, Arbeit, Locations, Vereine).

**Optionen:**
- Name, Farbe, Typ (user/location/shared)
- Sichtbarkeit (ein-/ausblenden)
- Standardkalender festlegen

---

### 4.4 Farbcodierung (Kalender- und/oder Event-Ebene)

**Beschreibung:**
Farben zur visuellen Unterscheidung von Terminen/Events.

**Optionen:**
- Kalenderfarbe (alle Termine dieses Kalenders)
- Individuelle Terminfarbe (überschreibt Kalenderfarbe)

---

### 4.5 Hashtags / Tags

**Beschreibung:**
Hashtags für bessere Suche und Filterung (#konzert, #meeting, #remote).

**Optionen:**
- Hashtag-Eingabe mit Autocomplete
- Volltextsuche + exakte Hashtag-Suche
- Normalisierung (Kleinbuchstaben, keine Sonderzeichen)

---

### 4.6 Teilnahme-Status (annehmen, beobachten, ablehnen)

**Beschreibung:**
Nutzer können Events annehmen (feste Zusage), beobachten (Watchlist) oder ablehnen.

**Optionen:**
- Button „Annehmen", „Beobachten", „Ablehnen"
- Übersicht im Profil (angenommene, beobachtete)
- Synchronisation in persönlichen Kalender (konfigurierbar)

---

### 4.7 Profil-Termin-Komponente

**Beschreibung:**
Profil zeigt alle relevanten Termine/Events des Nutzers (eigene, angenommene, beobachtete).

**Optionen:**
- Tabs: „Eigene", „Angenommen", „Beobachtet"
- Direkt aus Profil öffnen/bearbeiten
- Kalender-Feed abonnieren (ICS)

---

### 4.8 Wiederholungen / Serientermine

**Beschreibung:**
Wiederholungen für regelmäßige Termine (täglich, wöchentlich, monatlich, jährlich).

**Optionen:**
- Dropdown: Keine, Täglich, Wöchentlich, Monatlich, Jährlich, Benutzerdefiniert
- Wochentage (Mo/Mi/Fr)
- „Alle X Tage/Wochen/Monate/Jahre"
- Endbedingungen: nie, bis Datum, nach X Wiederholungen

---

### 4.9 Erinnerungen / Notifications

**Beschreibung:**
Erinnerungen vor Terminen/Events.

**Optionen:**
- Standard-Erinnerung (z.B. 15 Minuten vorher)
- Mehrere Erinnerungen pro Termin/Event
- Typ: Notification, optional E-Mail
- Snooze (+10 Min, +1h)

---

### 4.10 Geburtstage & Jahrestage

**Beschreibung:**
Verwaltung von wiederkehrenden Ereignissen (Geburtstage, Jahrestage).

**Optionen:**
- Jährliche Wiederholung
- Erinnerung X Tage vorher
- Optional: Import aus Kontakten

---

### 4.11 Ansichten (Tag/Woche/Monat/Jahr/Agenda/Event-Liste)

**Beschreibung:**
Verschiedene Kalenderansichten für unterschiedliche Bedürfnisse.

**Optionen:**
- Tagesansicht (Stundeneinteilung)
- Wochenansicht (7 Tage)
- Monatsansicht (Raster)
- Jahresansicht (12 Monate)
- Agenda (Liste)
- Event-Liste (nur Events, mit Bildern)

---

### 4.12 Locations / Orte (mit eigenem Kalender)

**Beschreibung:**
Orte/Locations als eigene Entitäten mit eigenem Event-Kalender.

**Optionen:**
- Name, Adresse, Beschreibung (Markdown), Coverbild, Galerie
- Geo-Koordinaten (optional)
- Eigener Kalender pro Location
- Location-Ansicht (Header + Kalender)

---

### 4.13 Widgets (Monats-, Agenda-, Heute-, Location- & Profil-Widget)

**Beschreibung:**
Homescreen-Widgets für schnellen Zugriff.

**Optionen:**
- Monats-Widget (Übersicht)
- Agenda-Widget (nächste Termine/Events, mit Bildern)
- Heute-Widget (heutige Termine)
- Location-Widget (Events einer Location)
- Profil-Widget (nur relevante Termine)
- Konfiguration: Kalender-Auswahl, Hashtags an/aus, Bilder an/aus

---

### 4.14 Suche & Filter (inkl. Hashtags & Teilnahme-Status)

**Beschreibung:**
Suche und Filter für schnelles Finden von Terminen/Events.

**Optionen:**
- Volltextsuche (Titel, Ort, Beschreibung, Markdown)
- Hashtag-Suche mit Autocomplete
- Filter: Kalender, Locations, Event-Typ, Farben, Teilnahme-Status

---

### 4.15 Export/Import (z.B. ICS/CSV – optional)

**Beschreibung:**
Export/Import von Kalenderdaten.

**Optionen:**
- Export als ICS (einzelne Termine, ganze Kalender)
- Import aus ICS/CSV
- Backup-Funktion

---

### 4.16 Synchronisation mit Systemkalender / Handy

**Beschreibung:**
Synchronisation mit Android Systemkalender oder ICS/CalDAV-Feed.

**Optionen:**
- Systemkalender-Sync (an/aus)
- ICS-Feed-URL generieren
- CalDAV (optional)
- Konfiguration: eigene, angenommene, beobachtete

---

### 4.17 Einstellungen (Standardwerte, Anzeigeoptionen, Sync-Optionen, Markdown-Optionen)

**Beschreibung:**
Globale Einstellungen für die App.

**Optionen:**
- Standardwerte: Dauer (60 Min), Erinnerung (15 Min)
- Zeitformat (24h/12h), erster Wochentag (Mo/So)
- Standard-Ansicht (Tag/Woche/Monat/Agenda/Events)
- Markdown-Vorschau aktivieren
- Sync-Einstellungen

---

## 5. DATENMODELL (ENTITÄTEN & FELDER)

### 5.1 Entität "Event" (Termin oder Event)

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `type` | enum ("appointment", "event") | Termin vs. Event |
| `title` | string | Titel |
| `startDateTime` | datetime | Startzeit |
| `endDateTime` | datetime | Endzeit |
| `allDay` | boolean | Ganztägig |
| `locationId` | string (optional) | Referenz auf Location |
| `locationText` | string (optional) | Freitext-Adresse |
| `calendarId` | string | Zugeordneter Kalender |
| `color` | string (optional) | Individuelle Farbe (überschreibt Kalenderfarbe) |
| `markdownBody` | string (optional) | Markdown-Text (bei Events) |
| `plainDescription` | string (optional) | Aus Markdown generiert |
| `coverImageUrl` | string (optional) | Coverbild (bei Events) |
| `galleryImageUrls` | Array<string> (optional) | Bildergalerie |
| `hashtags` | Array<string> | Hashtags (z.B. ["#konzert", "#familie"]) |
| `tags` | Array<string> (optional) | Semantische Tags |
| `reminders` | Array<Reminder> | Erinnerungen |
| `recurrenceRule` | string (optional) | iCal/RFC5545-ähnliche Regel |
| `visibility` | enum ("private", "public", "unlisted") | Sichtbarkeit |
| `createdByUserId` | string | Ersteller |
| `createdAt` | datetime | Erstellungszeitpunkt |
| `updatedAt` | datetime | Letzte Änderung |

---

### 5.2 Entität "Calendar"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `name` | string | Name (z.B. "Privat", "Arbeit") |
| `type` | enum ("user", "location", "shared") | Typ |
| `color` | string | Farbe (z.B. "#FF5733") |
| `isVisible` | boolean | Sichtbarkeit |
| `isDefault` | boolean | Standard-Kalender |
| `locationId` | string (optional) | Wenn Typ = "location" |
| `ownerUserId` | string (optional) | Besitzer |

---

### 5.3 Entität "Location"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `name` | string | Name (z.B. "Club XYZ") |
| `address` | string | Adresse |
| `descriptionMarkdown` | string (optional) | Markdown-Beschreibung |
| `plainDescription` | string (optional) | Aus Markdown generiert |
| `coverImageUrl` | string (optional) | Coverbild |
| `galleryImageUrls` | Array<string> (optional) | Bildergalerie |
| `calendarId` | string | Eigener Location-Kalender |
| `geoLat` | number (optional) | Latitude |
| `geoLng` | number (optional) | Longitude |
| `contactInfo` | string (optional) | Kontaktinformationen |
| `createdAt` | datetime | Erstellungszeitpunkt |
| `updatedAt` | datetime | Letzte Änderung |

---

### 5.4 Entität "Reminder"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `offsetInMinutes` | integer | Z.B. 15 = 15 Minuten vorher |
| `type` | enum ("popup", "notification", "email") | Erinnerungsart |

---

### 5.5 Entität "User"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `name` | string | Name |
| `email` | string (optional) | E-Mail |
| `avatarUrl` | string (optional) | Avatar |
| `defaultCalendarId` | string | Standard-Kalender |
| `settingsId` | string | Referenz auf UserSettings |

---

### 5.6 Entität "UserSettings"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `defaultEventDurationMinutes` | integer | Z.B. 60 |
| `defaultReminderOffsetMinutes` | integer | Z.B. 15 |
| `timeFormat` | enum ("24h", "12h") | Zeitformat |
| `firstDayOfWeek` | enum ("monday", "sunday") | Erster Wochentag |
| `defaultView` | enum ("day", "week", "month", "agenda", "events") | Standard-Ansicht |
| `markdownPreviewEnabled` | boolean | Markdown-Vorschau |
| `syncEnabled` | boolean | Synchronisation aktiviert |
| `syncMode` | enum ("systemCalendar", "icsExport", "caldav", "none") | Sync-Modus |

---

### 5.7 Entität "Participation" (Annehmen/Beobachten)

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `eventId` | string | Referenz auf Event |
| `userId` | string | Referenz auf User |
| `status` | enum ("accepted", "observing", "declined") | Teilnahme-Status |
| `createdAt` | datetime | Erstellungszeitpunkt |
| `updatedAt` | datetime | Letzte Änderung |

---

### 5.8 Entität "WidgetConfig"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `type` | enum ("month", "agenda", "today", "locationEvents", "profileToday") | Widget-Typ |
| `calendarIds` | Array<string> | Ausgewählte Kalender |
| `locationId` | string (optional) | Bei Location-Widget |
| `showImages` | boolean | Bilder anzeigen |
| `timeRangeMode` | enum ("today", "nextNDays", "custom") | Zeitbereich |
| `timeRangeDays` | integer (optional) | Z.B. 7 für nächste 7 Tage |
| `theme` | enum ("system", "light", "dark") | Theme |

---

### 5.9 Entität "SyncFeed" (für externen Kalender/Handy)

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `feedType` | enum ("ics", "caldav", "systemCalendar") | Feed-Typ |
| `urlOrIdentifier` | string | ICS-URL oder Systemkalender-Name |
| `includeAccepted` | boolean | Angenommene Events |
| `includeObserved` | boolean | Beobachtete Events |
| `includeOwnCreated` | boolean | Eigene Termine |
| `lastSyncAt` | datetime (optional) | Letzte Synchronisation |

---

## 6. UI & NAVIGATION (ANSICHTEN & VERHALTEN)

### 6.1 Tages-/Wochen-/Monats-/Agenda-/Jahresansicht

**Tagesansicht:**
- Stundeneinteilung (z.B. 00:00 - 23:59)
- Termine als Blöcke (Höhe = Dauer)
- Events mit kleinem Bild-Icon markiert
- Ganztägige Termine oben (Bereich „Ganztägig")

**Wochenansicht:**
- 7 Tage nebeneinander (horizontal scrollbar)
- Stundeneinteilung vertikal
- Termine als Blöcke

**Monatsansicht:**
- Raster (7 Spalten × 4-6 Zeilen)
- Tage mit Terminen markiert (z.B. farbiger Punkt)
- Tage mit Events spezielles Markup (z.B. Bild-Icon)
- Tippen auf Tag → Tagesansicht

**Agenda:**
- Liste kommender Termine/Events
- Gruppierung nach Datum (heute, morgen, diese Woche, etc.)
- Termine: Titel, Zeit, Ort, Kalender, Hashtags
- Events: zusätzlich Coverbild (klein)

**Jahresansicht:**
- 12 Monate in Rasterform
- Tage mit Terminen markiert
- Tippen auf Monat → Monatsansicht

---

### 6.2 Event-Liste

**Beschreibung:**
Spezielle Ansicht nur für Events (type: "event").

**Inhalt:**
- Liste mit Coverbildern (groß)
- Titel, Datum, Ort, Hashtags
- Sortierung nach Datum (aufsteigend)
- Tippen → Detailansicht

---

### 6.3 Location-Ansicht

**Beschreibung:**
Ansicht einer einzelnen Location mit Header und Event-Kalender.

**Inhalt:**
- Header: Coverbild, Name, Adresse, Beschreibung (Markdown gerendert)
- Darunter: Kalender (Monats-/Wochen-/Listenansicht) mit Events dieser Location
- Filter: nur Events dieser Location
- Schnellwechsel zu anderen Locations (Dropdown/Sidebar)

---

### 6.4 Profilansicht

**Bereich "Meine Termine & Events":**

**Tabs:**
- **Eigene:** Alle von diesem User erstellten Termine/Events (`createdByUserId`)
- **Angenommen:** Alle Events mit `Participation.status = "accepted"`
- **Beobachtet:** Alle Events mit `Participation.status = "observing"`

**Inhalt pro Tab:**
- Liste: Titel, Datum, Ort, Hashtags, Teilnahme-Status
- Sortierung nach Datum (aufsteigend)
- Tippen → Detailansicht
- Button „Teilnahme ändern" (wenn Participation)

**Zusätzlich:**
- Button „Kalender abonnieren" → generiert ICS-Feed-URL

---

### 6.5 Detailansicht eines Events/Termins

**Inhalt:**
- Titel
- Datum/Zeit (oder „Ganztägig")
- Ort/Location (anklickbar → Location-Ansicht)
- Kalender (Name, Farbe)
- Hashtags (als anklickbare Chips)
- **Teilnahme-Status (wenn nicht eigener Termin):**
  - Buttons: „Annehmen", „Beobachten", „Ablehnen"
  - Aktueller Status angezeigt (z.B. „Du hast angenommen")
- **Bei Events:**
  - Coverbild (groß)
  - Markdown-Beschreibung (gerendert als Rich-Text)
  - Bildergalerie (Swipe-Gallery)
  - Preis/Tickets (optional)
- **Erinnerungen:**
  - Liste der Erinnerungen
  - Button „+ Erinnerung hinzufügen"
- **Wiederholung:**
  - Info über Wiederholungsregel (z.B. „Wöchentlich, jeden Montag")
  - Button „Wiederholung bearbeiten"

**Aktionen:**
- Bearbeiten (wenn eigener Termin)
- Löschen (wenn eigener Termin)
- Teilen (Link/Export)
- Teilnahme ändern (wenn Participation)

---

### 6.6 Suche/Filter-Ansicht

**Suchfeld:**
- Volltextsuche (Titel, Beschreibung, Ort, Markdown)
- Hashtag-Eingabe mit Autocomplete (z.B. „#konzert")

**Filter-Panel:**
- **Kalender:** Multi-Select (Checkboxen)
- **Locations:** Multi-Select
- **Event-Typ:** Termin, Event, Beide
- **Teilnahme-Status:** Angenommen, Beobachtet, Keines, Alle
- **Zeitbereich:** Heute, Diese Woche, Dieser Monat, Benutzerdefiniert

**Ergebnisliste:**
- Dynamisch gefiltert
- Sortierung nach Datum

---

### 6.7 Einstellungen

**Kategorien:**

**Standardwerte:**
- Standarddauer (z.B. 60 Minuten)
- Standard-Erinnerung (z.B. 15 Minuten vorher)
- Zeitformat (24h/12h)
- Erster Wochentag (Mo/So)

**Sync-Einstellungen:**
- Synchronisation aktivieren (an/aus)
- Sync-Modus: Systemkalender, ICS-Export, CalDAV, Keine
- ICS-Feed-URL anzeigen (kopierbar)
- Was synchronisieren: Eigene, Angenommene, Beobachtete (Checkboxen)

**Darstellung:**
- Standard-Ansicht (Tag/Woche/Monat/Agenda/Events)
- Theme (System, Hell, Dunkel)
- Markdown-Vorschau aktivieren

**Kalender:**
- Kalender verwalten (Liste, Farben, Sichtbarkeit, Standard)

**Locations:**
- Locations verwalten (Liste, hinzufügen, bearbeiten, löschen)

---

## 7. WIDGETS (TYPEN, VERHALTEN, KONFIGURATION)

### 7.1 Monats-Widget

**Beschreibung:**
Monatliche Übersicht mit Markierung von Tagen mit Terminen/Events.

**Inhalt:**
- Aktueller Monat (Raster)
- Tage mit Terminen: farbiger Punkt
- Tage mit Events: spezielles Markup (z.B. Bild-Icon oder dickerer Punkt)
- Heute hervorgehoben

**Verhalten:**
- Tippen auf Tag → App öffnet Tagesansicht
- Swipe links/rechts → vorheriger/nächster Monat (optional)

**Konfiguration:**
- Kalender-Auswahl (Multi-Select)
- Theme (System, Hell, Dunkel)

---

### 7.2 Agenda-Widget

**Beschreibung:**
Liste kommender Termine/Events.

**Inhalt:**
- Nächste X Termine/Events (konfigurierbar, z.B. 5)
- Pro Eintrag:
  - Titel
  - Datum/Zeit
  - Ort (optional)
  - Hashtags (optional, als kleine Chips)
  - Bei Events: kleines Coverbild (optional)

**Verhalten:**
- Tippen auf Eintrag → Detailansicht
- Scrollbar (wenn mehr als X Einträge)

**Konfiguration:**
- Anzahl Einträge (z.B. 3, 5, 10)
- Kalender-Auswahl
- Hashtags anzeigen (an/aus)
- Event-Bilder anzeigen (an/aus)
- Theme

---

### 7.3 Heute-Widget

**Beschreibung:**
Heutige Termine/Events, nächster Termin/Event prominent.

**Inhalt:**
- **Oben:** Nächster Termin/Event (groß, mit Countdown)
- **Darunter:** Liste heutiger Termine/Events

**Verhalten:**
- Tippen auf nächsten Termin → Detailansicht
- Tippen auf andere Termine → Detailansicht
- Wenn keine Termine heute: „Keine Termine heute" + nächster kommender Termin

**Konfiguration:**
- Kalender-Auswahl
- Event-Bilder anzeigen (an/aus)
- Theme

---

### 7.4 Location-Event-Widget

**Beschreibung:**
Zeigt kommende Events einer bestimmten Location.

**Inhalt:**
- Header: Location-Name, Coverbild (klein)
- Liste kommender Events dieser Location (z.B. nächste 5)
- Pro Event: Titel, Datum, Coverbild (klein)

**Verhalten:**
- Tippen auf Header → Location-Ansicht
- Tippen auf Event → Detailansicht

**Konfiguration:**
- Location auswählen
- Anzahl Events (z.B. 3, 5, 10)
- Event-Bilder anzeigen (an/aus)
- Theme

---

### 7.5 Profil-/My-Today-Widget

**Beschreibung:**
Zeigt nur Termine/Events, die für den Nutzer relevant sind (angenommen, beobachtet, eigene).

**Inhalt:**
- Liste relevanter heutiger/kommender Termine/Events
- Pro Eintrag: Titel, Datum, Teilnahme-Status (Icon), Hashtags (optional)

**Verhalten:**
- Tippen auf Eintrag → Detailansicht
- Filter nach Teilnahme-Status (angenommen/beobachtet/eigene)

**Konfiguration:**
- Was anzeigen: Eigene, Angenommene, Beobachtete (Checkboxen)
- Hashtags anzeigen (an/aus)
- Event-Bilder anzeigen (an/aus)
- Theme

---

### 7.6 Aktualisierungslogik

**Allgemein:**
- Widgets aktualisieren sich:
  - Bei App-Start
  - Bei Änderungen an Terminen/Events (automatisch)
  - Periodisch (z.B. alle 15 Minuten)
  - Bei manuellem Refresh (je nach OS)

**Verhalten bei leeren Daten:**
- Monats-Widget: Zeigt Monat ohne Markierungen + Text „Keine Termine"
- Agenda-Widget: „Keine kommenden Termine/Events"
- Heute-Widget: „Keine Termine heute" + nächster kommender Termin (wenn vorhanden)
- Location-Widget: „Keine Events für [Location-Name]"
- Profil-Widget: „Keine relevanten Termine"

---

## 8. LOGIKDETAILS & EDGE CASES

### 8.1 Zeiteingabe

**Standard-Endzeit:**
- Nach Eingabe der Startzeit: `endDateTime = startDateTime + defaultEventDurationMinutes`
- Solange Endzeit nicht manuell geändert wurde, wird sie bei Änderung der Startzeit automatisch angepasst

**Validierung:**
- Wenn `endDateTime < startDateTime`: Fehlermeldung „Endzeit darf nicht vor Startzeit liegen"
- Speichern ist blockiert

**Zeitraster:**
- In Settings konfigurierbar: 5, 10, 15, 30 Minuten
- Time Picker rastet auf Raster ein (z.B. 14:00, 14:15, 14:30, ...)

---

### 8.2 Ganztägige Events/Termine

**AllDay-Flag:**
- `allDay = true` → keine Uhrzeit angezeigt, nur Datum
- Speicherung: `startDateTime` und `endDateTime` werden auf 00:00 Uhr gesetzt (oder nur Datum, je nach Implementierung)

**Darstellung:**
- In Kalenderansichten: oben im Bereich „Ganztägig"
- In Detailansicht: „Ganztägig" statt Uhrzeit

---

### 8.3 Wiederholungslogik

**RecurrenceRule:**
- Ähnlich iCal/RFC5545 (z.B. `FREQ=WEEKLY;BYDAY=MO,WE,FR;UNTIL=20261231`)
- Wird beim Anzeigen ausgewertet (generiert Instanzen)

**Edge Cases:**
- **Monatsende:** Wenn Termin am 31. eines Monats, aber Folgemonat hat nur 30 Tage → letzter Tag des Monats (z.B. 30. oder 28./29. Feb)
- **Schaltjahre:** 29. Februar wird nur in Schaltjahren angezeigt
- **Sommerzeit:** Bei Zeitumstellung bleibt lokale Uhrzeit gleich (z.B. immer 10:00 Uhr), absolute Zeit ändert sich

---

### 8.4 Erinnerungen

**Mehrere Reminders:**
- Array `reminders: [{ offsetInMinutes: 15, type: "notification" }, { offsetInMinutes: 1440, type: "email" }]`
- Bei `startDateTime - offsetInMinutes` wird Erinnerung ausgelöst

**Standard aus Settings:**
- Bei neuem Termin/Event: `reminders` enthält Standard-Erinnerung aus `UserSettings.defaultReminderOffsetMinutes`
- Ist editierbar/löschbar

**Snooze:**
- In Notification: Buttons „Snooze 10 Min", „Snooze 1h"
- Nach Snooze: neue Erinnerung wird zu `current_time + snooze_duration` erstellt

---

### 8.5 Hashtags

**Speicherung:**
- Array: `hashtags: ["#konzert", "#familie"]`
- Normalisierung: Kleinbuchstaben, ohne Sonderzeichen außer `#`

**Volltextsuche:**
- Suche in `title`, `markdownBody`, `plainDescription`, `hashtags`
- Bei exakter Hashtag-Suche (z.B. „#konzert"): nur `hashtags`-Array durchsuchen

**Autocomplete:**
- Bei Hashtag-Eingabe: Vorschläge aus vorhandenen Hashtags
- Häufigkeit berücksichtigen (z.B. oft genutzte Hashtags zuerst)

---

### 8.6 Teilnahme-Status

**Businesslogik:**
- **Annehmen:** `Participation` mit `status: "accepted"` erstellt
  - Event erscheint in Profil-Tab „Angenommen"
  - Event wird in `SyncFeed` aufgenommen (wenn `includeAccepted = true`)
- **Beobachten:** `Participation` mit `status: "observing"`
  - Event erscheint in Profil-Tab „Beobachtet"
  - Event wird in `SyncFeed` aufgenommen (wenn `includeObserved = true`)
- **Ablehnen:** `Participation` mit `status: "declined"` oder Löschung
  - Event verschwindet aus Profil-Tabs und `SyncFeed`

**Auswirkungen auf Profilansicht:**
- Aggregation aller Events mit `Participation` des Users
- Sortierung nach Datum
- Filter nach Status möglich

**Umgang bei Eventänderungen:**
- Wenn Event-Daten geändert werden (z.B. Zeit, Ort): Benachrichtigung an alle User mit `status: "accepted"` oder `"observing"`
- Benachrichtigung: „Event [Titel] wurde geändert: [Details]"

---

### 8.7 Profil-Termin-Komponente

**Aggregation:**
- **Eigene:** Query `Event.createdByUserId = currentUser.id`
- **Angenommen:** Query `Participation.userId = currentUser.id AND status = "accepted"`
- **Beobachtet:** Query `Participation.userId = currentUser.id AND status = "observing"`

**Sortierung:**
- Nach `startDateTime` (aufsteigend)
- Optional: Nach Dringlichkeit (z.B. heute > morgen > später)

**Filteroptionen:**
- Zeitbereich (heute, diese Woche, dieser Monat, alle)
- Hashtags
- Kalender

---

### 8.8 Synchronisation

**Welche Events/Termine in SyncFeed?**
- Basierend auf `SyncFeed`-Konfiguration:
  - `includeOwnCreated = true` → alle eigenen Termine/Events
  - `includeAccepted = true` → alle mit `Participation.status = "accepted"`
  - `includeObserved = true` → alle mit `Participation.status = "observing"`

**Aktualisierung:**
- Bei Änderungen an Event-Daten → `SyncFeed.lastSyncAt` aktualisieren
- Bei Änderung von `Participation.status` → `SyncFeed` neu generieren
- Bei Systemkalender-Sync: App erstellt/aktualisiert/löscht Einträge im Android Systemkalender

**Basis-Mechanik:**
- **ICS:** Feed-URL generieren, die alle relevanten Events als ICS-Datei bereitstellt
- **Systemkalender:** Direkte Integration über Android Calendar Provider API
- **CalDAV:** Optional, bidirektionale Synchronisation (komplexer)

---

## 9. NICHT-FUNKTIONALE ANFORDERUNGEN

### 9.1 Performance

- **Viele Events & Hashtags & Bilder:**
  - Lazy Loading in Listen (nur sichtbare Einträge rendern)
  - Bildkomprimierung (Thumbnails für Listen/Widgets, Full-Size nur in Detailansicht)
  - Hashtag-Index für schnelle Suche

- **Wiederholungen:**
  - Instanzen werden bei Bedarf generiert (nicht alle im Voraus speichern)
  - Caching für häufig aufgerufene Zeitbereiche (z.B. aktueller Monat)

---

### 9.2 Offline-Fähigkeit

- **Lokale Datenbank** (z.B. SQLite, Realm)
- Synchronisation im Hintergrund (wenn Online)
- Offline-Änderungen werden bei nächster Online-Verbindung synchronisiert

---

### 9.3 Stabile Speicherung von Markdown

- **Markdown-Text** wird als String gespeichert (`markdownBody`)
- **Backup-Mechanik:** Regelmäßige Backups (lokal + optional Cloud)
- **Versionierung:** Optional, bei Änderungen alte Version speichern (für Wiederherstellung)

---

### 9.4 Gute UX auf mobilen Geräten

- **Touch-Optimierung:** Große Buttons, Swipe-Gesten
- **Responsive Design:** Unterstützung für verschiedene Bildschirmgrößen (Phone, Tablet)
- **Dark Mode:** Automatisch oder manuell schaltbar

---

### 9.5 Skalierbarkeit

- **Viele Nutzer, viele Events:**
  - Backend-Architektur mit Load Balancing (wenn Cloud-basiert)
  - Datenbank-Indizes für schnelle Queries (z.B. auf `userId`, `calendarId`, `startDateTime`, `hashtags`)

---

### 9.6 Sicherheit

- **Zugriffsrechte:**
  - Private Termine/Events nur für Owner sichtbar
  - Public Events für alle sichtbar
  - Unlisted Events nur mit Link sichtbar

- **Privacy:**
  - Verschlüsselung bei Übertragung (HTTPS)
  - Optional: End-to-End-Verschlüsselung für private Termine

- **Authentifizierung:**
  - Login mit E-Mail/Passwort, optional OAuth (Google, Facebook)

---

## 10. OFFENE FRAGEN / ANNAHMEN

### 10.1 Synchronisation

**Annahme:**
- Initial über ICS/Systemkalender
- CalDAV optional später (komplexer, bidirektionale Synchronisation)

**Offene Frage:**
- Soll CalDAV von Anfang an unterstützt werden?

---

### 10.2 Öffentliche Events & Teilen

**Annahme:**
- Public Events sind in MVP geplant, Teilen über Link (z.B. Deeplink) optional später

**Offene Frage:**
- Soll es eine „Event-Discovery"-Funktion geben (z.B. alle öffentlichen Events in meiner Nähe)?

---

### 10.3 Rollenmodell für Location-Kalender

**Annahme:**
- Organisatoren können Events für Locations erstellen
- Normale Nutzer können Events nur annehmen/beobachten

**Offene Frage:**
- Soll es explizite Rollen geben (z.B. „Location-Admin", „Event-Organisator")?

---

### 10.4 Hashtag-Konventionen

**Annahme:**
- Frei, Nutzer können beliebige Hashtags erstellen

**Offene Frage:**
- Soll es vordefinierte Listen geben (z.B. „Empfohlene Hashtags")?
- Soll es Hashtag-Kategorien geben (z.B. „Musik", „Sport", „Arbeit")?

---

### 10.5 Markdown-Editor

**Annahme:**
- Einfacher Markdown-Editor (Toolbar mit Buttons für Überschriften, Listen, Fett, Kursiv, Links)
- Vorschau-Modus

**Offene Frage:**
- Soll WYSIWYG-Editor unterstützt werden (z.B. wie Notion)?
- Soll Markdown-Export (als .md-Datei) möglich sein?

---

### 10.6 Benachrichtigungen

**Annahme:**
- System-Notifications via Android Notification API
- E-Mail-Benachrichtigungen optional (wenn User E-Mail hinterlegt)

**Offene Frage:**
- Sollen Push-Notifications bei Event-Änderungen (für angenommene/beobachtete Events) unterstützt werden?

---

### 10.7 Import/Export

**Annahme:**
- Export als ICS (einzelne Events, ganze Kalender)
- Import aus ICS/CSV optional später

**Offene Frage:**
- Soll CSV-Export unterstützt werden (z.B. für Excel)?
- Soll Import aus Google Calendar / Outlook direkt möglich sein?

---

## 11. NÄCHSTE SCHRITTE

**Aus diesem HedgeDog-Konzept nehmen wir die besten Ideen und entwickeln daraus:**

1. **Kalender-Modul für RealStack** (finale Version)
2. **Quest-Modul für RealStack** (separates Dokument)
3. **Integration beider Module** (z.B. Quests können Termine im Kalender erstellen)

---

**Status:** Sammlungsphase
**Nächster Schritt:** Quest-Modul extrahieren, dann beide Module reviewen und zusammenführen

---

*Erstellt am 6. Februar 2026*
*Von Eli, basierend auf HedgeDog-Entwicklung*
