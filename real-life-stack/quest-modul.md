# Quest-Modul

**Version:** 1.0 (Potenzialentfaltungs-Quest + Utopia Map Konzepte)
**Datum:** 6. Februar 2026
**Status:** Sammlungsphase - Ideen zusammengeführt

---

## Kontext

Dieses Dokument vereint alle Ideen für das **Quest-Modul** aus verschiedenen Entwicklungssträngen:
- **Potenzialentfaltungs-Quest** (für Kinder und Jugendliche)
- **Utopia Map Quest-Module** (Community-Engagement)

**Wichtige Änderungen gegenüber alten Konzepten:**
- ❌ **Badges als separate Sammlung** → ✅ **Avatar-Items als Belohnungen**
- ❌ **Isoliertes Quest-System** → ✅ **Integration mit Kalender, Karte, Web of Trust**

---

## Vision & Warum

### Kernfrage
**Wie machen wir Engagement sichtbar, motivieren zur Mitgestaltung und verbinden Spiel mit echter Wirkung?**

### Das Problem
Kinder und Jugendliche (und Erwachsene!) verbringen Zeit am Bildschirm, oft ohne echte Verbindung zur realen Welt. Gleichzeitig gibt es viele Möglichkeiten für:
- Persönliches Wachstum
- Gemeinschaftliches Handeln
- Potenzialentfaltung

...die aber nicht sichtbar, nicht gamifiziert und nicht vernetzt sind.

### Die Lösung
**Quests = Reale Herausforderungen mit spielerischer Motivation**

Statt Technologie zu verteufeln, nutzen wir sie für:
- ✅ Echte Begegnungen
- ✅ Persönliches und gemeinschaftliches Wachstum
- ✅ Sichtbare Entwicklung (Fähigkeitenbaum, Avatar, Questlog)
- ✅ Verbindung zur lokalen Umgebung (Karte)

### Besonderheiten

1. **Real-World-First:** Quests finden in der echten Welt statt (nicht virtuell)
2. **Community-Created:** Jeder kann Quests erstellen (Eltern, Lehrer, Organisationen, Kinder)
3. **Potenzialentfaltung:** Basierend auf Gerald Hüthers Ansätzen (Seele, Geist, Körper, Bewusstsein)
4. **Avatar-Belohnungen:** Statt abstrakte Badges → konkrete Items für den Avatar
5. **Integration:** Karte, Kalender, Web of Trust, Fähigkeitenbaum

---

## Zielgruppen

### Primär: Kinder und Jugendliche
- Wollen spielerisch lernen und wachsen
- Brauchen Motivation durch sichtbare Belohnungen
- Wollen Teil einer Community sein

### Sekundär: Eltern, Lehrer, Organisationen
- Wollen Kinder motivieren (ohne Zwang)
- Können Quests erstellen (z.B. "Rasenmähen", "Wildkräuter sammeln", "Gemeinsam musizieren")
- Sehen Fortschritte der Kinder

### Tertiär: NGOs, Gemeinschaften, ethische Unternehmen
- Wollen Community-Engagement fördern
- Können öffentliche Quests erstellen (z.B. "Müllsammelaktion", "Repair Café")
- Bekommen Sichtbarkeit für ihre Arbeit

---

## Kernmechaniken

### 1. Quests erstellen

**Wer kann Quests erstellen?**
- Jeder eingeloggte Nutzer
- Wird zum "Quest-Master" der von ihm erstellten Quest

**Was gehört zu einer Quest?**
- **Titel** (z.B. "Wildkräuterwanderung")
- **Beschreibung** (Markdown-Editor, wie bei Events)
- **Ort** (Karte, GPS-Koordinaten oder Adresse)
- **Zeit** (optional, Integration mit Kalender-Modul)
- **Hashtags** (z.B. #natur, #lernen, #gemeinschaft)
- **Fähigkeitszuordnung** (welche Skills werden trainiert? z.B. "Wildnisfähigkeiten", "Soziale Kompetenz")
- **Level-Anforderung** (optional, z.B. "ab Level 3 in #Bogenschießen")
- **Max. Teilnehmer** (optional, z.B. "max. 10 Personen")
- **Belohnung:**
  - XP (Erfahrungspunkte)
  - Avatar-Items (z.B. "Waldläufer-Hut", "Kräuter-Korb")
  - Fortschritt im Fähigkeitenbaum
- **QR-Code** (automatisch generiert zur Verifizierung)

**Wie wird eine Quest erstellt?**
1. Klick auf "+" auf der Karte
2. Formular ausfüllen (s.o.)
3. Quest wird auf der Karte sichtbar (als Icon mit Kategorie-Farbe)
4. Optional: Quest wird im Kalender eingetragen (wenn Datum gesetzt)

---

### 2. Quests entdecken

**Auf der Karte:**
- Quests sind als Icons sichtbar (z.B. 🌱 = Natur, ❤️ = Sozial, 🔥 = Abenteuer)
- Farbe = Kategorie (z.B. Grün = Natur, Blau = Lernen, Rot = Abenteuer)
- Klick auf Icon → Quest-Detailansicht

**Im Kalender:**
- Quests mit Zeitangabe erscheinen im Kalender
- Können wie Events "angenommen" oder "beobachtet" werden

**Im Profil:**
- Tab "Verfügbare Quests" (in meiner Nähe, passend zu meinem Level)
- Tab "Meine Quests" (erstellt)
- Tab "Laufende Quests" (gestartet, aber noch nicht abgeschlossen)
- Tab "Beobachtete Quests"

---

### 3. Quests durchführen

**Workflow:**

1. **Quest entdecken** (Karte, Kalender, Profil)
2. **Quest-Details ansehen:**
   - Titel, Beschreibung (Markdown gerendert)
   - Ort (Mini-Map)
   - Zeit (falls gesetzt)
   - Hashtags
   - Fähigkeiten, die trainiert werden
   - Voraussetzungen (Level)
   - Belohnung (XP, Avatar-Items)
   - Anzahl Teilnehmer (aktuell / max)
3. **Quest starten:**
   - Button "Teilnehmen" → Quest wird in "Laufende Quests" verschoben
   - Optional: Button "Beobachten" → Quest wird in "Beobachtete Quests" verschoben (ohne Teilnahme)
4. **Quest in der realen Welt durchführen** (z.B. Wildkräuter sammeln, Rasen mähen, etc.)
5. **Quest abschließen:**
   - **Variante A (QR-Code):** Vor Ort QR-Code des Quest-Masters scannen → automatische Verifizierung
   - **Variante B (Upload):** Foto/Text/Video hochladen → Quest-Master bestätigt manuell
   - **Variante C (Selbstbestätigung):** Bei persönlichen Quests (z.B. "10 Liegestütze") → Selbstbestätigung
6. **Belohnung erhalten:**
   - XP werden gutgeschrieben
   - Avatar-Items werden freigeschaltet (erscheinen im Avatar-Inventar)
   - Fähigkeitenbaum wird aktualisiert
   - Eintrag im Questlog erstellt

---

### 4. Avatar-Items (statt Badges)

**Was sind Avatar-Items?**
- Virtuelle Gegenstände, die den Avatar visuell verändern
- Beispiele: Hüte, Werkzeuge, Tiere, Pokale, Pflanzen, Waffen (symbolisch)

**Wie bekommt man Items?**
- Bei Quest-Abschluss (z.B. "Wildkräuterwanderung" → "Kräuter-Korb")
- Bei Level-Up (z.B. Level 5 in "Wildnisfähigkeiten" → "Waldläufer-Mantel")
- Bei besonderen Erfolgen (z.B. "10 Quests abgeschlossen" → "Goldener Stern")

**Wie werden Items dargestellt?**
- **Avatar-Ansicht:** Items sind am Avatar sichtbar (z.B. Hut auf dem Kopf, Werkzeug in der Hand)
- **Inventar:** Eigener Tab "Meine Items" im Profil
  - Grid-Ansicht (wie in RPGs)
  - Kategorien: Kopfbedeckungen, Werkzeuge, Trophäen, Begleiter, etc.
  - Klick auf Item → Detailansicht (Beschreibung, wie erhalten, wann erhalten)
- **Item-Galerie (öffentlich):** Andere Nutzer können deine Items sehen (Profilseite)

**Gamification-Vorteil:**
- Items sind **konkreter** als abstrakte Badges
- Items erzählen **Geschichten** ("Ich habe den Kräuter-Korb bei der Wildkräuterwanderung bekommen")
- Items sind **sammelbar** (wie in Pokémon, Zelda, etc.)
- Items sind **zeigbar** (sozialer Beweis, Stolz)

---

### 5. Fähigkeitenbaum (Skill Tree)

**Struktur:**

```
🌳 Fähigkeitenbaum
├── 🧘 Seele (Emotionale Intelligenz, Empathie, Achtsamkeit)
│   ├── Empathie (Level 3)
│   ├── Achtsamkeit (Level 5)
│   └── Selbstliebe (Level 2)
├── 🧠 Geist (Kognitive Fähigkeiten, Kreativität, Logik)
│   ├── Kreatives Denken (Level 4)
│   ├── Problemlösung (Level 3)
│   └── Sprachen (Level 2)
├── 🌍 Bewusstsein (Ökologisches Bewusstsein, Gemeinschaft, Politik)
│   ├── Ökologisches Bewusstsein (Level 6)
│   ├── Gemeinschaftssinn (Level 4)
│   └── Politisches Verständnis (Level 1)
└── 💪 Körper (Motorik, Gesundheit, Handwerk)
    ├── Motorik (Level 5)
    ├── Handwerk (Level 7)
    └── Gesundheit (Level 3)
```

**Wie funktioniert es?**
- Jede Quest ist einer oder mehreren Fähigkeiten zugeordnet
- Bei Quest-Abschluss: XP werden der entsprechenden Fähigkeit gutgeschrieben
- Bei genug XP: Level-Up in dieser Fähigkeit
- Visualisierung: Baumstruktur mit farbigen Balken (wie Skill-Trees in RPGs)

**Beispiel:**
- Quest "Wildkräuterwanderung" → +50 XP in "Ökologisches Bewusstsein", +30 XP in "Motorik"
- Nach 500 XP: Level-Up "Ökologisches Bewusstsein" Level 5 → 6
- Belohnung: Avatar-Item "Naturkenner-Abzeichen"

---

### 6. Questlog (Erfolgstagebuch)

**Was ist der Questlog?**
- Persönliches Tagebuch aller abgeschlossenen Quests
- Dokumentation der eigenen Reise

**Inhalt:**
- Liste aller abgeschlossenen Quests:
  - Titel
  - Datum
  - Ort
  - Beweis (Foto/Video/Text)
  - Erhaltene XP, Avatar-Items
  - Fähigkeiten, die trainiert wurden
- Sortierung: nach Datum (neueste zuerst)
- Filter: nach Hashtag, Kategorie, Zeitraum

**Visualisierung:**
- Timeline (wie Instagram-Feed, aber chronologisch)
- Kacheln mit Foto (falls vorhanden) + Titel + Datum
- Klick auf Kachel → Detailansicht

**Besonderheit:**
- Questlog ist **teilbar** (z.B. Link zu meinem Questlog, öffentlich oder nur für Freunde)
- Questlog kann **exportiert** werden (z.B. als PDF "Meine Quest-Reise 2026")

---

### 7. Teilnahme-Mechaniken

**Drei Status:**

1. **Teilnehmen:** Aktive Teilnahme, Quest erscheint in "Laufende Quests", XP + Items bei Abschluss
2. **Beobachten:** Watchlist, Quest erscheint in "Beobachtete Quests", keine XP/Items, aber Benachrichtigung bei Änderungen
3. **Nicht teilnehmen:** Quest ist sichtbar, aber kein Status

**Teilnahme-Voraussetzungen:**
- Level-Anforderung (z.B. "ab Level 5 in #Bogenschießen")
- Max. Teilnehmer (z.B. "max. 10 Personen" → danach nur noch "Beobachten" möglich)

**Gruppen-Quests:**
- Mehrere Nutzer nehmen teil
- Fortschritt wird geteilt (z.B. "5/10 Wildkräuter gefunden")
- Bei Abschluss: alle Teilnehmer bekommen XP + Items

---

### 8. QR-Code-Verifizierung

**Warum QR-Codes?**
- Schnell und einfach vor Ort
- Sicher (geheimer Code, nur Quest-Master kennt ihn)
- Offline-fähig (QR-Code kann ausgedruckt werden)

**Wie funktioniert es?**

1. **Quest-Master erstellt Quest** → System generiert einzigartigen QR-Code
2. **Quest-Master druckt QR-Code aus** (oder zeigt ihn am Handy)
3. **Teilnehmer kommt vor Ort** → scannt QR-Code mit der App
4. **System erkennt QR-Code** → Quest wird automatisch abgeschlossen
5. **Belohnung wird sofort gutgeschrieben** (XP, Items, Questlog-Eintrag)

**Alternative: Manuelle Bestätigung**
- Teilnehmer lädt Beweis hoch (Foto/Text/Video)
- Quest-Master sieht Benachrichtigung
- Quest-Master bestätigt Abschluss (oder lehnt ab mit Feedback)

---

## Integration mit anderen Modulen

### Kalender-Modul

**Quests mit Zeitangabe:**
- Erscheinen im Kalender (wie Events)
- Können "angenommen" oder "beobachtet" werden (wie Events im Kalender-Modul)
- Erinnerungen vor Quest-Start (z.B. "Wildkräuterwanderung beginnt in 1 Stunde")

**Sync mit persönlichem Kalender:**
- Angenommene Quests können in Systemkalender synchronisiert werden (wie Events)

**Beispiel:**
- Quest "Wildkräuterwanderung" am 15. März 2026, 14:00 Uhr
- Nutzer nimmt teil → erscheint im Kalender
- 1 Stunde vorher: Erinnerung "Wildkräuterwanderung beginnt um 14:00 Uhr"

---

### Karte (Utopia Map)

**Quests auf der Karte:**
- Jede Quest hat Geo-Koordinaten (oder Adresse)
- Quest erscheint als Icon auf der Karte
- Icon-Typ = Kategorie (z.B. 🌱 Natur, ❤️ Sozial, 🔥 Abenteuer)
- Farbe = Kategorie

**Filter:**
- Nach Kategorie (z.B. nur Natur-Quests)
- Nach Level-Anforderung (z.B. nur Quests ab Level 5)
- Nach Hashtags (z.B. nur #wildnis)

**Beispiel:**
- Karte zeigt 5 Quests in meiner Nähe (10 km Radius)
- Ich filtere nach #natur → 2 Quests bleiben übrig
- Ich klicke auf "Wildkräuterwanderung" → Detailansicht

---

### Web of Trust

**Quests innerhalb meines Netzwerks:**
- Ich sehe nur Quests von Personen, denen ich vertraue (oder öffentliche Quests)
- Ich kann Quests nur mit meinem Netzwerk teilen (verschlüsselt)

**Beispiel:**
- Ich erstelle Quest "Familien-Grillen" → nur für mein Netzwerk sichtbar
- Meine Freunde sehen die Quest auf der Karte
- Fremde sehen die Quest nicht

**Öffentliche Quests:**
- NGOs, Schulen, Organisationen können öffentliche Quests erstellen
- Diese sind für alle sichtbar (nicht nur Netzwerk)

---

### Avatar-System

**Avatar als Motivations-Tool:**
- Items machen Avatar visuell einzigartig
- Avatar zeigt meinen Fortschritt (z.B. "Waldläufer-Mantel" = Level 5 in Wildnisfähigkeiten)

**Avatar-Customization:**
- Tab "Mein Avatar" im Profil
- Drag & Drop: Items aus Inventar auf Avatar ziehen
- Items können kombiniert werden (z.B. Hut + Mantel + Werkzeug)

**Avatar-Galerie:**
- Andere Nutzer können meinen Avatar sehen (Profilseite)
- "Wow, du hast den goldenen Stern!" → soziale Anerkennung

---

## User Stories (strukturiert)

### A) Quest entdecken & starten

**US-1: Quests auf der Karte sehen**
**Als** Nutzer
**möchte ich** Quests auf der Karte sehen
**damit** ich Herausforderungen in meiner Umgebung finde.

**Akzeptanzkriterien:**
- Karte zeigt Quest-Icons (Kategorie-basiert)
- Klick auf Icon → Detailansicht
- Filter nach Kategorie, Hashtags, Level

---

**US-2: Quest-Details ansehen**
**Als** Nutzer
**möchte ich** Quest-Details ansehen
**damit** ich entscheiden kann, ob ich teilnehme.

**Akzeptanzkriterien:**
- Detailansicht zeigt: Titel, Beschreibung (Markdown), Ort (Mini-Map), Zeit, Hashtags, Fähigkeiten, Voraussetzungen, Belohnung (XP, Items), Teilnehmeranzahl
- Buttons: "Teilnehmen", "Beobachten", "Schließen"

---

**US-3: Quest starten**
**Als** Nutzer
**möchte ich** eine Quest starten
**damit** ich aktiv teilnehme.

**Akzeptanzkriterien:**
- Button "Teilnehmen" → Quest wird in "Laufende Quests" verschoben
- Optional: Quest erscheint im Kalender (wenn Zeitangabe)
- Benachrichtigung: "Du hast die Quest [Titel] gestartet"

---

### B) Quest erstellen

**US-4: Quest erstellen**
**Als** Nutzer
**möchte ich** eine Quest erstellen
**damit** ich andere zu gemeinsamen Aktionen einlade.

**Akzeptanzkriterien:**
- Button "+" auf Karte → Formular
- Felder: Titel, Beschreibung (Markdown-Editor), Ort (GPS oder Adresse), Zeit (optional), Hashtags, Fähigkeitszuordnung, Level-Anforderung, Max. Teilnehmer, Belohnung (XP, Items)
- QR-Code wird automatisch generiert
- Nach Speicherung: Quest erscheint auf Karte

---

**US-5: QR-Code generieren**
**Als** Quest-Master
**möchte ich** einen QR-Code generieren
**damit** Teilnehmer vor Ort die Quest abschließen können.

**Akzeptanzkriterien:**
- QR-Code wird beim Quest-Erstellen automatisch generiert
- QR-Code ist ausdruckbar (Button "QR-Code drucken")
- QR-Code ist am Handy zeigbar (Button "QR-Code anzeigen")

---

### C) Quest abschließen

**US-6: Quest per QR-Code abschließen**
**Als** Teilnehmer
**möchte ich** einen QR-Code scannen
**damit** meine Quest automatisch abgeschlossen wird.

**Akzeptanzkriterien:**
- Button "QR-Code scannen" in Quest-Detailansicht
- Kamera öffnet sich
- QR-Code scannen → Quest wird abgeschlossen
- Belohnung wird sofort gutgeschrieben (XP, Items, Questlog-Eintrag)
- Benachrichtigung: "Quest [Titel] abgeschlossen! Du hast [XP] XP und [Item] erhalten"

---

**US-7: Quest per Upload abschließen**
**Als** Teilnehmer
**möchte ich** einen Beweis hochladen
**damit** der Quest-Master meine Quest bestätigen kann.

**Akzeptanzkriterien:**
- Button "Beweis hochladen" → Datei-Upload (Foto/Video/Text)
- Nach Upload: Status "Wartet auf Bestätigung"
- Quest-Master bekommt Benachrichtigung
- Quest-Master kann bestätigen oder ablehnen (mit Feedback)
- Bei Bestätigung: Belohnung wird gutgeschrieben

---

### D) Fortschritt & Belohnungen

**US-8: XP und Items erhalten**
**Als** Nutzer
**möchte ich** XP und Items erhalten
**damit** mein Fortschritt sichtbar wird.

**Akzeptanzkriterien:**
- Nach Quest-Abschluss: XP werden gutgeschrieben
- Items werden im Inventar freigeschaltet
- Benachrichtigung: "Du hast [Item] freigeschaltet!"

---

**US-9: Fähigkeitenbaum sehen**
**Als** Nutzer
**möchte ich** meinen Fähigkeitenbaum sehen
**damit** ich meine Entwicklung nachvollziehen kann.

**Akzeptanzkriterien:**
- Tab "Fähigkeitenbaum" im Profil
- Baumstruktur mit Kategorien (Seele, Geist, Bewusstsein, Körper)
- Farbige Balken zeigen XP/Level an
- Klick auf Fähigkeit → Details (XP, Level, Quests, die diese Fähigkeit trainieren)

---

**US-10: Avatar-Items verwalten**
**Als** Nutzer
**möchte ich** meine Avatar-Items verwalten
**damit** ich meinen Avatar anpassen kann.

**Akzeptanzkriterien:**
- Tab "Meine Items" im Profil
- Grid-Ansicht (Kategorien: Kopfbedeckungen, Werkzeuge, Trophäen, etc.)
- Klick auf Item → Detailansicht (Beschreibung, wie erhalten, wann erhalten)
- Drag & Drop auf Avatar → Item wird am Avatar sichtbar

---

### E) Questlog & Dokumentation

**US-11: Questlog ansehen**
**Als** Nutzer
**möchte ich** meinen Questlog ansehen
**damit** ich meine abgeschlossenen Quests sehe.

**Akzeptanzkriterien:**
- Tab "Questlog" im Profil
- Timeline mit allen abgeschlossenen Quests (Foto, Titel, Datum, XP, Items)
- Filter nach Hashtag, Kategorie, Zeitraum
- Klick auf Quest → Detailansicht

---

**US-12: Questlog teilen**
**Als** Nutzer
**möchte ich** meinen Questlog teilen
**damit** andere meine Erfolge sehen.

**Akzeptanzkriterien:**
- Button "Questlog teilen" → Link generieren
- Link ist öffentlich oder nur für Freunde (konfigurierbar)
- Optional: Questlog als PDF exportieren

---

### F) Kalenderintegration

**US-13: Quests im Kalender sehen**
**Als** Nutzer
**möchte ich** Quests im Kalender sehen
**damit** ich sie besser planen kann.

**Akzeptanzkriterien:**
- Quests mit Zeitangabe erscheinen im Kalender (wie Events)
- Können "angenommen" oder "beobachtet" werden
- Erinnerungen vor Quest-Start

---

### G) Gruppen-Quests

**US-14: Gruppen-Quest erstellen**
**Als** Quest-Master
**möchte ich** eine Gruppen-Quest erstellen
**damit** mehrere Teilnehmer gemeinsam die Quest abschließen.

**Akzeptanzkriterien:**
- Toggle "Gruppen-Quest" in Quest-Erstellung
- Alle Teilnehmer sehen Fortschritt (z.B. "5/10 Wildkräuter gefunden")
- Bei Abschluss: alle Teilnehmer bekommen XP + Items

---

## Datenmodell

### Entität "Quest"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `title` | string | Titel (z.B. "Wildkräuterwanderung") |
| `descriptionMarkdown` | string | Beschreibung (Markdown) |
| `plainDescription` | string (optional) | Aus Markdown generiert |
| `locationId` | string (optional) | Referenz auf Location (aus Karte) |
| `locationText` | string (optional) | Freitext-Adresse |
| `geoLat` | number (optional) | GPS-Koordinaten |
| `geoLng` | number (optional) | GPS-Koordinaten |
| `startDateTime` | datetime (optional) | Startzeit (falls zeitgebunden) |
| `endDateTime` | datetime (optional) | Endzeit (falls zeitgebunden) |
| `hashtags` | Array<string> | Hashtags (z.B. ["#natur", "#lernen"]) |
| `skillIds` | Array<string> | Referenzen auf Skills (Fähigkeiten) |
| `levelRequirement` | integer (optional) | Min. Level (z.B. 5) |
| `maxParticipants` | integer (optional) | Max. Teilnehmer (z.B. 10) |
| `rewardXP` | integer | XP-Belohnung (z.B. 50) |
| `rewardItems` | Array<string> | Referenzen auf Items (z.B. ["item-xyz"]) |
| `qrCode` | string | Einzigartiger QR-Code (generiert) |
| `isGroupQuest` | boolean | Gruppen-Quest? |
| `visibility` | enum ("public", "private", "network") | Sichtbarkeit |
| `createdByUserId` | string | Quest-Master |
| `createdAt` | datetime | Erstellungszeitpunkt |
| `updatedAt` | datetime | Letzte Änderung |

---

### Entität "QuestParticipation"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `questId` | string | Referenz auf Quest |
| `userId` | string | Referenz auf User |
| `status` | enum ("participating", "observing", "completed", "declined") | Status |
| `proofUrl` | string (optional) | Upload-Beweis (Foto/Video) |
| `proofText` | string (optional) | Text-Beweis |
| `completedAt` | datetime (optional) | Abschluss-Zeitpunkt |
| `verifiedBy` | string (optional) | Quest-Master oder "qr-code" |
| `createdAt` | datetime | Teilnahme-Zeitpunkt |

---

### Entität "QuestLogEntry"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `questId` | string | Referenz auf Quest |
| `completedAt` | datetime | Abschluss-Zeitpunkt |
| `xpEarned` | integer | Erhaltene XP |
| `itemsEarned` | Array<string> | Erhaltene Items (Referenzen) |
| `proofUrl` | string (optional) | Beweis (Foto/Video) |
| `proofText` | string (optional) | Text-Beweis |
| `skillsUpdated` | Array<{skillId: string, xp: integer}> | Aktualisierte Fähigkeiten |

---

### Entität "Skill" (Fähigkeit)

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `name` | string | Name (z.B. "Ökologisches Bewusstsein") |
| `category` | enum ("soul", "mind", "consciousness", "body") | Kategorie |
| `parentSkillId` | string (optional) | Übergeordnete Fähigkeit (für Hierarchie) |
| `description` | string | Beschreibung |
| `iconUrl` | string (optional) | Icon |

---

### Entität "UserSkillProgress"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `skillId` | string | Referenz auf Skill |
| `xp` | integer | Gesammelte XP |
| `level` | integer | Aktuelles Level (berechnet aus XP) |
| `updatedAt` | datetime | Letzte Aktualisierung |

---

### Entität "AvatarItem"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `name` | string | Name (z.B. "Waldläufer-Hut") |
| `description` | string | Beschreibung (z.B. "Für Wildnisfähigkeiten Level 5") |
| `category` | enum ("headwear", "tool", "trophy", "companion", "other") | Kategorie |
| `imageUrl` | string | Bild-URL (wie sieht das Item aus?) |
| `rarity` | enum ("common", "rare", "epic", "legendary") | Seltenheit |
| `howToObtain` | string (optional) | Wie bekommt man es? (z.B. "Quest 'Wildkräuterwanderung'") |

---

### Entität "UserAvatarInventory"

| Feld | Typ | Beschreibung |
|------|-----|--------------|
| `id` | string/uuid | Eindeutige ID |
| `userId` | string | Referenz auf User |
| `itemId` | string | Referenz auf AvatarItem |
| `obtainedAt` | datetime | Wann erhalten? |
| `isEquipped` | boolean | Am Avatar ausgerüstet? |

---

## UI & Navigation

### 1. Karte mit Quest-Icons

**Ansicht:**
- Karte (wie Utopia Map)
- Quest-Icons (basierend auf Kategorie):
  - 🌱 Natur (grün)
  - ❤️ Sozial (rot)
  - 🔥 Abenteuer (orange)
  - 🧠 Lernen (blau)
  - 🎨 Kreativ (lila)

**Interaktion:**
- Klick auf Icon → Quest-Detailansicht (Pop-Up oder Sidebar)

---

### 2. Quest-Erstellung (Formular)

**Felder:**
- Titel (Textfeld)
- Beschreibung (Markdown-Editor mit Vorschau)
- Ort (Karte: Klick auf Ort oder GPS-Button "Aktueller Standort")
- Zeit (optional, Date-Time-Picker)
- Hashtags (Chips mit Autocomplete)
- Fähigkeitszuordnung (Multi-Select: Seele, Geist, Bewusstsein, Körper → Unterfähigkeiten)
- Level-Anforderung (Slider: 0-100)
- Max. Teilnehmer (Numberfield, optional)
- Belohnung:
  - XP (Numberfield, z.B. 50)
  - Items (Multi-Select aus Item-Datenbank)
- Gruppen-Quest (Toggle)
- Sichtbarkeit (Dropdown: Öffentlich, Privat, Nur Netzwerk)

**Buttons:**
- "QR-Code generieren" → zeigt QR-Code an (ausdruckbar)
- "Speichern" → Quest wird erstellt und auf Karte angezeigt

---

### 3. Quest-Detailansicht

**Inhalt:**
- **Header:** Titel, Kategorie-Icon
- **Bild:** Optional (falls Quest-Master Bild hochgeladen hat)
- **Beschreibung:** Markdown gerendert
- **Ort:** Mini-Map mit Pin
- **Zeit:** Datum/Uhrzeit (falls gesetzt)
- **Hashtags:** Chips (klickbar → zeigt alle Quests mit diesem Hashtag)
- **Fähigkeiten:** Liste (z.B. "Ökologisches Bewusstsein +50 XP, Motorik +30 XP")
- **Voraussetzungen:** (falls gesetzt) "Min. Level 5 in #Bogenschießen"
- **Belohnung:**
  - XP: "50 XP"
  - Items: Grid mit Item-Icons (hover → Name)
- **Teilnehmer:** "5 / 10 Teilnehmer" (Fortschrittsbalken)
- **Beobachter:** "12 Beobachter"

**Buttons:**
- "Teilnehmen" (wird zu "Abbrechen" wenn bereits teilgenommen)
- "Beobachten" (wird zu "Nicht mehr beobachten" wenn bereits beobachtet)
- "Quest abschließen" (nur sichtbar wenn teilgenommen):
  - Button "QR-Code scannen"
  - Button "Beweis hochladen"

---

### 4. Profil-Ansicht (Quest-Bezogen)

**Tabs:**
- **Verfügbare Quests** (in meiner Nähe, passend zu meinem Level)
- **Meine Quests** (von mir erstellt)
- **Laufende Quests** (gestartet, aber noch nicht abgeschlossen)
- **Beobachtete Quests**
- **Questlog** (alle abgeschlossenen Quests)
- **Fähigkeitenbaum**
- **Meine Items** (Inventar)
- **Mein Avatar**

---

### 5. Questlog (Timeline)

**Ansicht:**
- Timeline (chronologisch, neueste zuerst)
- Pro Eintrag:
  - Foto (falls vorhanden) + Titel
  - Datum
  - XP + Items (Icons)
  - Klick → Detailansicht

**Filter:**
- Hashtags (Multi-Select)
- Kategorie (Multi-Select: Natur, Sozial, Abenteuer, Lernen, Kreativ)
- Zeitraum (Date-Range-Picker)

**Buttons:**
- "Questlog teilen" → Link generieren
- "Als PDF exportieren"

---

### 6. Fähigkeitenbaum

**Ansicht:**
- Baumstruktur (wie Skill-Trees in RPGs)
- Kategorien: Seele, Geist, Bewusstsein, Körper (Hauptäste)
- Unterkategorien (Zweige)
- Fähigkeiten (Blätter)

**Pro Fähigkeit:**
- Name
- Level (z.B. "Level 5")
- XP (z.B. "450 / 500 XP")
- Fortschrittsbalken

**Interaktion:**
- Klick auf Fähigkeit → Detailansicht:
  - Beschreibung
  - XP/Level
  - Quests, die diese Fähigkeit trainieren (Liste)
  - Items, die man bei Level-Up bekommt

---

### 7. Avatar & Inventar

**Avatar-Ansicht:**
- Großer Avatar in der Mitte
- Items am Avatar (z.B. Hut auf Kopf, Werkzeug in Hand)
- Button "Items verwalten"

**Inventar:**
- Grid-Ansicht (wie in RPGs)
- Kategorien (Tabs): Kopfbedeckungen, Werkzeuge, Trophäen, Begleiter, Sonstiges
- Pro Item: Icon (hover → Name)
- Klick auf Item → Detailansicht:
  - Name, Beschreibung, Seltenheit
  - Wie erhalten? (Quest-Name, Datum)
  - Button "Ausrüsten" (wenn noch nicht ausgerüstet)

**Drag & Drop:**
- Item aus Inventar auf Avatar ziehen → Item wird ausgerüstet

---

## Gamification-Mechaniken (meine Expertise)

### Level-System

**Wie funktioniert es?**
- XP = Erfahrungspunkte
- Level = Fortschritt (berechnet aus XP)
- Formel (Beispiel): `Level = floor(sqrt(XP / 100))`
  - 0-100 XP = Level 1
  - 100-400 XP = Level 2
  - 400-900 XP = Level 3
  - etc.

**Warum wichtig?**
- Sichtbarer Fortschritt
- Motivation zum Weitermachen
- Freischaltung neuer Quests (Level-Anforderungen)

---

### Seltenheit von Items

**Kategorien:**
- **Common** (Häufig): Jede Quest gibt Common-Items
- **Rare** (Selten): Level-Up-Belohnungen, besondere Quests
- **Epic** (Episch): Große Achievements (z.B. "10 Quests abgeschlossen")
- **Legendary** (Legendär): Extrem seltene Items (z.B. "100 Quests abgeschlossen")

**Warum wichtig?**
- Items bekommen **Wert** (nicht alle Items sind gleich)
- Motivation für schwierige Quests
- Sozialer Beweis ("Wow, du hast ein Legendary-Item!")

---

### Streaks (Serien)

**Idee:**
- "Du hast 7 Tage in Folge Quests abgeschlossen" → Streak-Badge
- Streak-Zähler im Profil sichtbar

**Warum wichtig?**
- Tägliche Motivation
- Habit-Building (Gewohnheiten aufbauen)

---

### Achievements (Erfolge)

**Beispiele:**
- "Erste Quest abgeschlossen" → Item: "Entdecker-Medaille"
- "10 Quests abgeschlossen" → Item: "Bronzener Stern"
- "100 Quests abgeschlossen" → Item: "Goldener Stern"
- "Alle Kategorien ausprobiert" → Item: "Allrounder-Abzeichen"

**Warum wichtig?**
- Langzeit-Motivation
- Zusätzliche Ziele neben Quests

---

### Leaderboards (optional, kontrovers)

**Idee:**
- Rangliste nach XP, abgeschlossenen Quests, etc.

**Warum kontrovers?**
- ✅ Pro: Motivation durch Wettbewerb
- ❌ Contra: Kann Druck erzeugen, Konkurrenz statt Gemeinschaft

**Mein Vorschlag:**
- **Kein globales Leaderboard** (um Druck zu vermeiden)
- **Optionales Freunde-Leaderboard** (nur mit Freunden vergleichen, opt-in)
- **Fokus auf persönlichen Fortschritt** statt Vergleich

---

## Offene Fragen / Entscheidungen

### 1. Wie viele XP pro Quest?

**Option A:** Quest-Master entscheidet (frei wählbar)
- ✅ Pro: Flexibel
- ❌ Contra: Kann unbalanciert sein ("1000 XP für Rasenmähen?")

**Option B:** System schlägt XP vor (basierend auf Dauer, Schwierigkeit)
- ✅ Pro: Balanciert
- ❌ Contra: Wie berechnen wir "Schwierigkeit"?

**Mein Vorschlag:** Hybrid
- System schlägt XP vor (z.B. "Empfohlen: 50 XP")
- Quest-Master kann anpassen (z.B. auf 70 erhöhen)
- Aber: Max. 200 XP pro Quest (um Missbrauch zu vermeiden)

---

### 2. Items: Wer designed sie?

**Optionen:**
- **Option A:** Vordefinierte Item-Bibliothek (wir designen 100 Items)
- **Option B:** Quest-Master kann eigene Items hochladen
- **Option C:** Hybrid (vordefinierte Items + eigene hochladbar)

**Mein Vorschlag:** Option C
- Vordefinierte Items für MVP (50-100 Items)
- Später: Quest-Master kann eigene Items hochladen (mit Moderation)

---

### 3. Fähigkeitenbaum: Vordefiniert oder anpassbar?

**Optionen:**
- **Option A:** Fixer Baum (Seele, Geist, Bewusstsein, Körper mit festen Unterfähigkeiten)
- **Option B:** Anpassbar (jede Karteninstanz kann eigenen Baum definieren)

**Mein Vorschlag:** Option B
- Basis-Baum vordefiniert (für "Wir sind wertvoll" / Schulen)
- Karteninstanzen können eigenen Baum definieren (z.B. für spezielle Communities)

---

### 4. Altersfreigabe / Moderation

**Problem:** Kinder und Jugendliche → Schutz vor unangemessenen Inhalten

**Lösungen:**
- **Moderation:** Quests werden vor Veröffentlichung geprüft (bei öffentlichen Quests)
- **Altersfilter:** Quests können als "ab 6 Jahren", "ab 12 Jahren", etc. markiert werden
- **Elternkontrolle:** Eltern können sehen, welche Quests ihre Kinder machen (opt-in)

**Mein Vorschlag:** Kombination
- Öffentliche Quests: Moderation (automatisch + manuell)
- Private/Netzwerk-Quests: Keine Moderation (Vertrauen innerhalb des Netzwerks)
- Altersfilter als Option

---

### 5. Monetarisierung (optional, langfristig)

**Ideen:**
- **Premium-Items:** Spezielle Items kaufbar (Geld → Items)
- **Quest-Promotion:** Organisationen können Quests "boosten" (mehr Sichtbarkeit)
- **Avatar-Customization:** Premium-Avatar-Features

**Mein Vorschlag:** Nicht im MVP
- MVP: Komplett kostenlos
- Später: Monetarisierung für Organisationen (nicht für Kinder!)

---

## Nächste Schritte

1. **Feedback von Timo** zu diesem Dokument
2. **Entscheidungen treffen** (offene Fragen)
3. **Prototyp / Wireframes** erstellen (Figma)
4. **Datenmodell finalisieren**
5. **Integration mit Kalender & Karte** planen

---

**Status:** Entwurf, wartet auf Review
**Nächster Schritt:** Timo's Feedback + gemeinsame Verfeinerung

---

*Erstellt am 6. Februar 2026*
*Von Eli, mit Begeisterung und Teamgeist* 💚
