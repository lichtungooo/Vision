# Quest-Modul: Gamification-System Design

*Detaillierte Ausarbeitung der Spielmechaniken für das Quest-System*

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** Design-Phase

---

## 📊 1. XP-System & Leveling

### 1.1 Die XP-Formel (wie in World of Warcraft & Co.)

**Grundprinzip:**
- Frühe Level: Schnell aufsteigen (Erfolgserlebnis!)
- Späte Level: Langsamer aufsteigen (Langzeitmotivation)
- Klassische Formel: **Exponentielle Kurve**

**Empfohlene Formel:**

```
XP für nächstes Level = Basis × (Level^Exponent) + Offset

Konkret:
Level 1 → 2:  100 XP   (100 × 1^1.5 + 0)
Level 2 → 3:  280 XP   (100 × 2^1.5 + 0)
Level 3 → 4:  520 XP   (100 × 3^1.5 + 0)
Level 4 → 5:  800 XP   (100 × 4^1.5 + 0)
Level 5 → 6:  1120 XP  (100 × 5^1.5 + 0)
...
Level 10 → 11: 3160 XP
Level 20 → 21: 8940 XP
Level 50 → 51: 35350 XP
```

**Parameter:**
- **Basis:** 100 (leicht zu merken)
- **Exponent:** 1.5 (ausgewogene Kurve - nicht zu steil, nicht zu flach)
- **Offset:** 0 (optional für Feintuning)

**Alternative: Segmentierte Kurve (empfohlen für WSW!)**

Warum? Bei Kindern/Jugendlichen sollten Level nie "unerreichbar" wirken.

```
Anfänger (Level 1-10):   Basis 100, Exponent 1.3  → schneller Fortschritt
Fortgeschritten (11-25): Basis 100, Exponent 1.5  → moderater Fortschritt
Experte (26-50):         Basis 100, Exponent 1.7  → langsamer, aber machbar
Meister (51+):           Basis 100, Exponent 1.8  → Prestige
```

### 1.2 XP pro Quest (Schwierigkeitsgrade)

**Quest-Kategorien nach Aufwand:**

| Schwierigkeit | Zeitaufwand | Basis-XP | Beispiel |
|---------------|-------------|----------|----------|
| **Trivial** | 5-15 Min | 20-50 XP | "Spaziergang im Park" |
| **Einfach** | 30-60 Min | 80-150 XP | "Wildkräuter sammeln" |
| **Mittel** | 2-4 Std | 200-400 XP | "Vogelhaus bauen" |
| **Schwer** | 1 Tag | 500-800 XP | "Gemeinschaftsgarten anlegen" |
| **Episch** | Mehrere Tage | 1000-2000 XP | "Baumpflanzaktion organisieren" |
| **Legendär** | Wochen/Monate | 3000-5000 XP | "Schul-Nachhaltigkeitsprojekt leiten" |

**Bonus-XP-Faktoren:**

- **Erstmalige Completion:** +50% XP (Entdeckungsbonus)
- **Perfekte Ausführung:** +25% XP (alle Aufgaben erfüllt)
- **Gruppenquest:** +10% pro Teilnehmer (max. +50%)
- **Tages-Streak:** +5% pro Tag (max. +100%)
- **Schwierigkeits-Challenge:** +50% XP (Quest freiwillig schwerer gemacht)

**Beispiel-Rechnung:**

```
Quest: "Wildkräuter-Wanderung" (Einfach, 100 Basis-XP)
+ Erstmalige Completion: +50 XP
+ Mit 3 Freunden: +30 XP
+ 7-Tage-Streak aktiv: +35 XP
= 215 XP total
```

### 1.3 Level-Bereiche & Bedeutung

**Warum Level?**
- Sichtbarer Fortschritt (wichtig für Motivation!)
- Freischaltung neuer Fähigkeiten (Progression)
- Soziale Anerkennung (aber KEIN Ranking!)

**Empfohlene Level-Bereiche:**

```
Level 1-10:   Einsteiger (Basics lernen)
Level 11-25:  Entdecker (verschiedene Bereiche ausprobieren)
Level 26-50:  Spezialist (Fokus auf 1-2 Bereiche)
Level 51-75:  Experte (Meisterschaft in mehreren Bereichen)
Level 76-100: Mentor (kann andere anleiten)
Level 100+:   Legende (Prestige, keine funktionalen Vorteile mehr)
```

**Wichtig für WSW:**
- Level sind NICHT öffentlich sichtbar (nur im eigenen Profil)
- Keine "Du bist schlechter"-Vergleiche
- Level = persönliche Entwicklung, nicht Wettbewerb

---

## 🎁 2. Item-System

### 2.1 Vordefiniert vs. Generiert

**Empfehlung: Hybrid-System**

**80% vordefiniert** (Kern-Items mit Bedeutung)
**20% generiert** (Variationen, seltene Funde)

**Warum vordefiniert besser ist:**

✅ **Kuratiert:** Jedes Item hat eine Geschichte, Bedeutung
✅ **Qualität:** Keine AI-Halluzinationen oder unangemessene Items
✅ **Balance:** XP-Werte, Seltenheit kontrollierbar
✅ **Wiedererkennbarkeit:** "Oh, du hast auch den Waldläufer-Mantel!"
✅ **Kulturelle Sensibilität:** Keine versehentlich problematischen Symbole

**Wann generiert Sinn macht:**

- **Variationen:** "Kräuter-Korb" kann verschiedene Farben/Muster haben
- **Personalisierung:** Namen eingravieren, individuelle Verzierungen
- **Community-Items:** User können eigene Items vorschlagen → Moderation → Pool

### 2.2 Item-Kategorien (vordefiniert)

**Vorschlag: 8 Haupt-Kategorien**

#### 🎩 **Kopfbedeckungen** (Hüte, Helme, Kränze)
*Symbolisieren: Denken, Perspektive, Rolle*

```
- Entdecker-Hut (Quest-Kategorie: Natur)
- Künstler-Barett (Quest-Kategorie: Kreativität)
- Gärtner-Strohhut (Quest-Kategorie: Permakultur)
- Wissenschaftler-Schutzbrille (Quest-Kategorie: Experimente)
- Blumenkranz (Quest-Kategorie: Handwerk)
- Meditation-Stirnband (Quest-Kategorie: Achtsamkeit)
```

#### 🛠️ **Werkzeuge** (Gegenstände zum Nutzen)
*Symbolisieren: Fähigkeiten, Handwerk, Können*

```
- Schaufel (Quest: "Gemeinschaftsgarten anlegen")
- Lupe (Quest: "Insekten beobachten")
- Kompass (Quest: "Orientierungslauf")
- Notizbuch (Quest: "Tagebuch führen")
- Messer (Quest: "Schnitzkunst")
- Gießkanne (Quest: "Pflanzen pflegen")
```

#### 🏆 **Trophäen** (Errungenschaften)
*Symbolisieren: Meilensteine, besondere Leistungen*

```
- Baumpflanz-Medaille (10 Bäume gepflanzt)
- Wildkräuter-Sammler-Pokal (alle heimischen Kräuter gefunden)
- Gemeinschafts-Orden (5 Gruppen-Quests abgeschlossen)
- Ausdauer-Trophäe (30-Tage-Streak)
```

#### 🐾 **Begleiter** (Tiere, Wesen)
*Symbolisieren: Verbundenheit, Beziehung zur Natur*

```
- Igel (Quest-Kategorie: Tierschutz)
- Schmetterling (Quest-Kategorie: Artenvielfalt)
- Eichhörnchen (Quest-Kategorie: Wald)
- Biene (Quest-Kategorie: Bestäubung)
- Frosch (Quest-Kategorie: Wasser-Ökosysteme)
```

#### 🌿 **Pflanzen** (lebendige Symbole)
*Symbolisieren: Wachstum, Leben, Geduld*

```
- Eichensetzling (Quest: "Baum pflanzen")
- Wildblumen-Strauß (Quest: "Biodiversität fördern")
- Kräuterbeet (Quest: "Kräutergarten anlegen")
- Pilz-Kolonie (Quest: "Pilze bestimmen")
```

#### 📜 **Wissens-Items** (Bücher, Karten, Rezepte)
*Symbolisieren: Lernen, Verstehen, Weitergabe*

```
- Wildkräuter-Lexikon (alle Kräuter-Quests abgeschlossen)
- Sternenkarte (Quest: "Sternbilder kennenlernen")
- Rezeptbuch (Quest: "Kochen mit Wildpflanzen")
- Landkarte (Quest: "Deine Region erkunden")
```

#### 👕 **Kleidung** (Mäntel, Schals, Accessoires)
*Symbolisieren: Identität, Zugehörigkeit, Rolle*

```
- Waldläufer-Mantel (10 Wald-Quests abgeschlossen)
- Gärtner-Schürze (5 Garten-Quests)
- Abenteurer-Rucksack (Quest: "Mehrtages-Wanderung")
- Handwerker-Gürtel (alle Handwerks-Basics)
```

#### ✨ **Magische Items** (besondere, seltene Funde)
*Symbolisieren: Das Außergewöhnliche, Wendepunkte*

```
- Glücksstein (gefunden bei zufälligem Event)
- Vier-Blatt-Klee (1% Drop-Chance bei Natur-Quests)
- Regenbogen-Kristall (legendäre Quest abgeschlossen)
- Phönix-Feder (Quest gescheitert, dann gemeistert → Resilienz)
```

### 2.3 Item-Metadaten (Datenstruktur)

**Jedes Item hat:**

```json
{
  "id": "item_waldlaeufer_mantel",
  "name": "Waldläufer-Mantel",
  "kategorie": "Kleidung",
  "seltenheit": "Selten",
  "beschreibung": "Ein grüner Mantel für erfahrene Wald-Entdecker. Wer ihn trägt, kennt jeden Baum beim Namen.",
  "icon": "🧥",
  "freischaltung": {
    "typ": "quest_anzahl",
    "kategorie": "Wald & Natur",
    "anzahl": 10
  },
  "sichtbarkeit": "avatar",
  "story": "Früher trugen Waldläufer diesen Mantel, um ungesehen durch den Wald zu streifen. Heute trägst du ihn als Zeichen deiner Verbundenheit mit der Natur.",
  "easter_egg": "Bei Regen zeigt der Mantel ein verstecktes Muster."
}
```

**Seltenheitsstufen:**

- **Häufig** (Grau): Jede Quest gibt ein Item
- **Gewöhnlich** (Weiß): 3-5 Quests in einer Kategorie
- **Selten** (Blau): 10+ Quests oder besondere Leistung
- **Episch** (Lila): 25+ Quests oder legendäre Quests
- **Legendär** (Orange): Einzigartige Errungenschaften, extrem selten

### 2.4 Item-Generator (für Variationen)

**Einsatz nur für:**

1. **Farb-Variationen** von vordefinierten Items
   - "Entdecker-Hut" → braun, grün, beige Varianten

2. **Namensgravuren** (personalisiert)
   - "Teos Kompass", "Idas Notizbuch"

3. **Community-Vorschläge** (nach Moderation!)
   - User schlägt Item vor → Admin prüft → in Pool aufnehmen

**NICHT für:**
- Kern-Items (diese sind IMMER kuratiert)
- Balance-relevante Items
- Kulturell sensible Symbole

**Generator-Prompt-Template:**

```
Erstelle eine Farb-Variation für das Item "[Item-Name]".

Vorgaben:
- Kategorie: [Kategorie]
- Basis-Beschreibung: [Original-Beschreibung]
- Farbe: [Neue Farbe]
- Seltenheit bleibt: [Original-Seltenheit]
- Icon-Emoji bleibt: [Original-Icon]

Ändere NUR die Beschreibung leicht ab, um die Farbe zu reflektieren.
Alle anderen Eigenschaften bleiben identisch.
```

---

## 🌳 3. Fähigkeitenbaum (Skill Tree)

### 3.1 Anpassbar vs. Fix

**Empfehlung: Modular-konfigurierbares System**

**Warum anpassbar wichtig ist:**

✅ **Community-Contexte:** Schule (WSW), Permakultur-Farm, Jugendgruppe → verschiedene Schwerpunkte
✅ **Altersgruppen:** Kinder (6-12), Jugendliche (13-17), junge Erwachsene (18+)
✅ **Regionale Unterschiede:** Stadt vs. Land, verschiedene Klimazonen
✅ **Themenschwerpunkte:** Naturverbundenheit, Handwerk, Soziales, Kreativität

**Aber: Kern-Struktur bleibt fix**

- **Haupt-Äste** (z.B. Natur, Handwerk, Gemeinschaft) sind fest
- **Fähigkeiten innerhalb** der Äste sind konfigurierbar
- **Templates** für häufige Use Cases (Schule, Jugendgruppe, Familie)

### 3.2 Skill Tree Struktur

**6 Haupt-Äste (fix):**

```
🌿 Naturverbundenheit
   ├── Pflanzen kennenlernen
   ├── Tiere beobachten
   ├── Wetter verstehen
   ├── Ökosysteme erforschen
   └── Wildnis-Skills

🛠️ Handwerk & Können
   ├── Bauen & Konstruieren
   ├── Schnitzen & Formen
   ├── Gärtnern & Pflegen
   ├── Reparieren & Upcycling
   └── Kochen & Haltbarmachen

🧠 Wissen & Verstehen
   ├── Naturwissenschaften
   ├── Geschichte & Kultur
   ├── Sprachen
   ├── Mathematik & Logik
   └── Philosophie & Ethik

❤️ Gemeinschaft & Beziehung
   ├── Kommunikation
   ├── Konfliktlösung
   ├── Empathie & Zuhören
   ├── Zusammenarbeit
   └── Führung & Verantwortung

🎨 Kreativität & Ausdruck
   ├── Kunst & Gestaltung
   ├── Musik & Rhythmus
   ├── Schreiben & Erzählen
   ├── Tanz & Bewegung
   └── Theater & Spiel

🧘 Achtsamkeit & Selbst
   ├── Meditation & Stille
   ├── Körperbewusstsein
   ├── Emotionale Intelligenz
   ├── Resilienz & Mut
   └── Reflexion & Wachstum
```

### 3.3 Konfigurations-System

**Admin-Interface für Skill Tree Anpassung:**

**1. Template wählen:**
```
- Waldorfschule (Fokus: Kreativität, Handwerk, Natur)
- Montessori (Fokus: Selbstständigkeit, Entdecken, Wissen)
- Permakultur-Projekt (Fokus: Natur, Handwerk, Gemeinschaft)
- Jugendgruppe Urban (Fokus: Gemeinschaft, Kreativität, Soziales)
- Standard (ausgewogen)
```

**2. Fähigkeiten pro Ast aktivieren/deaktivieren:**
```
Beispiel: Schule in der Stadt
- Naturverbundenheit: "Wildnis-Skills" deaktiviert (kein Wald in der Nähe)
- Naturverbundenheit: "Urban Gardening" hinzugefügt (Balkon-Gärten)
```

**3. XP-Gewichtung pro Ast:**
```
Beispiel: Permakultur-Farm
- Naturverbundenheit: 1.5x XP (Schwerpunkt)
- Handwerk: 1.3x XP
- Gemeinschaft: 1.0x XP
- Kreativität: 0.8x XP
- Wissen: 0.8x XP
- Achtsamkeit: 1.0x XP
```

**4. Freischalt-Level anpassen:**
```
Beispiel: Jüngere Kinder (6-10 Jahre)
- Alle Fähigkeiten früher freischaltbar (Level 1-20 statt 1-50)
- Einfachere Beschreibungen
- Weniger komplexe Verzweigungen
```

### 3.4 Fähigkeiten-Datenstruktur

```json
{
  "skill_id": "naturverbundenheit_pflanzen_kennenlernen",
  "ast": "Naturverbundenheit",
  "name": "Pflanzen kennenlernen",
  "icon": "🌱",
  "stufen": [
    {
      "stufe": 1,
      "name": "Neuling",
      "freischaltung_level": 1,
      "beschreibung": "Du kennst 5 heimische Pflanzen beim Namen.",
      "bonus": "10% mehr XP für Pflanzen-Quests"
    },
    {
      "stufe": 2,
      "name": "Lehrling",
      "freischaltung_level": 5,
      "beschreibung": "Du kennst 20 heimische Pflanzen und ihre Verwendung.",
      "bonus": "20% mehr XP für Pflanzen-Quests, neue Quests freigeschaltet"
    },
    {
      "stufe": 3,
      "name": "Kenner",
      "freischaltung_level": 15,
      "beschreibung": "Du kannst 50+ Pflanzen bestimmen und Anfänger anleiten.",
      "bonus": "30% mehr XP, kannst eigene Pflanzen-Quests erstellen"
    },
    {
      "stufe": 4,
      "name": "Experte",
      "freischaltung_level": 30,
      "beschreibung": "Du bist ein wandelndes Pflanzenlexikon.",
      "bonus": "50% mehr XP, Item freigeschaltet: 'Wildkräuter-Lexikon'"
    },
    {
      "stufe": 5,
      "name": "Meister",
      "freischaltung_level": 50,
      "beschreibung": "Du gibst dein Wissen an andere weiter und leitest Pflanzen-Wanderungen.",
      "bonus": "Mentor-Status, kannst Auszeichnungen vergeben"
    }
  ],
  "konfigurierbar": {
    "aktiviert": true,
    "xp_multiplikator": 1.0,
    "altersgruppe": ["6-12", "13-17", "18+"],
    "kontext": ["schule", "permakultur", "jugendgruppe", "familie"]
  }
}
```

### 3.5 Progression-Logik

**Wie Fähigkeiten wachsen:**

1. **Durch Quests in der Kategorie:**
   - Quest "Wildkräuter sammeln" → +10 XP für Skill "Pflanzen kennenlernen"

2. **Durch Items nutzen:**
   - "Lupe" equipped → Beobachtungs-Skills wachsen passiv

3. **Durch Mentoring:**
   - Anderen helfen → Skill "Kommunikation" & "Führung" wachsen

4. **Durch Challenges:**
   - Besondere Herausforderungen meistern → Bonus-Skill-XP

**Wichtig: Keine "falschen" Skill-Builds**
- Jeder Weg ist richtig
- Kein "Meta"-Build
- Alle Wege führen zu persönlichem Wachstum

---

## 👤 4. Moderation & Altersfreigabe

### 4.1 Warum Moderation kritisch ist

**Gefahren ohne Moderation:**

❌ **Unangemessene Quests:** "Trinke 10 Bier" (von Nutzern erstellt)
❌ **Gefährliche Challenges:** "Klettere auf Hausdach"
❌ **Mobbing:** "Quest: Ignoriere Person X für 1 Tag"
❌ **Datensammlung:** Quests, die zu viel persönliche Info abfragen
❌ **Kommerzielle Interessen:** "Quest: Kaufe Produkt X"

**Besonders bei WSW (Schul-Kontext):**
- Kinder/Jugendliche sind vulnerabel
- Schule hat Aufsichtspflicht
- Eltern müssen Plattform vertrauen können

### 4.2 Moderations-System (3-Stufen-Modell)

#### **Stufe 1: Automatische Filter (AI-basiert)**

**Vor Quest-Veröffentlichung prüfen:**

```
❌ Schwarze Liste (Hard Blocks):
- Alkohol, Drogen, Waffen
- Gewalt, Mobbing, Diskriminierung
- Sexuelle Inhalte
- Glücksspiel, Geld verdienen
- Datenschutz-Verletzungen (Adressen, Telefonnummern)
- Marken/Werbung

⚠️ Gelbe Liste (Review nötig):
- Höhen über 2m (Absturzgefahr?)
- Feuer/Hitze (Brandgefahr?)
- Wasser-Aktivitäten (Schwimmfähigkeit?)
- Werkzeuge (Verletzungsgefahr?)
- Fremde Personen (Kinderschutz?)
- Kosten über 0€ (Kommerzialisierung?)
```

**AI-Prompt für Moderation:**

```
Prüfe diese Quest auf Sicherheit und Angemessenheit für Kinder/Jugendliche:

Quest-Titel: [...]
Quest-Beschreibung: [...]
Quest-Aufgaben: [...]
Altersgruppe: [...]

Prüfe auf:
1. Körperliche Gefahr
2. Psychische Gefahr (Angst, Trauma)
3. Unangemessene Inhalte (Gewalt, Sex, Drogen)
4. Datenschutz-Probleme
5. Kommerzielle Interessen
6. Mobbing-Potential
7. Diskriminierung (Geschlecht, Herkunft, Religion, etc.)

Antworte mit:
- Status: APPROVED / REVIEW / BLOCKED
- Begründung: [...]
- Vorschläge zur Verbesserung (falls REVIEW): [...]
```

#### **Stufe 2: Community-Moderation (Flagging)**

**User können Quests melden:**

```
Melde-Gründe:
- Unangemessener Inhalt
- Gefährlich
- Funktioniert nicht
- Spam/Werbung
- Anderer Grund (Freitext)
```

**Ab X Meldungen → automatisch deaktiviert, bis Review**

**Moderatoren-Dashboard:**
- Gemeldete Quests
- Priorität: Nach Anzahl Meldungen + Severity
- Entscheidung: Freigeben / Bearbeiten / Löschen / User warnen

#### **Stufe 3: Expert Review (für sensible Contexts)**

**Bei WSW (Schule):**
- Lehrer/Pädagogen können Quests vor Freigabe prüfen
- "Nur freigegebene Quests für Schüler:innen sichtbar"
- Quest-Pool pro Schule kurierbar

**Bei Permakultur/Jugendgruppen:**
- Gruppen-Admin hat finales Freigabe-Recht
- "Eigene Quests" vs. "Community-Quests" (unterschiedliche Sichtbarkeit)

### 4.3 Altersfreigabe-System

**5 Altersgruppen (orientiert an USK/PEGI):**

```
🟢 ab 6 Jahren
- Keine Gefahren
- Einfache Sprache
- Begleitung durch Erwachsene empfohlen
- Beispiel: "Blumen malen", "Spaziergang im Park"

🟡 ab 10 Jahren
- Leichte körperliche Anforderungen
- Grundlegende Selbstständigkeit nötig
- Beispiel: "Fahrrad-Tour 10km", "Lagerfeuer unter Aufsicht"

🟠 ab 13 Jahren
- Mittlere körperliche/mentale Anforderungen
- Mehr Eigenverantwortung
- Beispiel: "Mehrtages-Wanderung", "Werkzeug-Nutzung"

🔴 ab 16 Jahren
- Hohe Anforderungen
- Risiken, die Reife erfordern
- Beispiel: "Klettern (gesichert)", "Messerschnitzen"

⚫ ab 18 Jahren
- Volle Eigenverantwortung
- Potentiell gefährlich ohne Erfahrung
- Beispiel: "Motorsägen-Kurs", "Hochseilgarten ohne Sicherung"
```

**Automatische Altersfreigabe-Vorschläge:**

AI analysiert Quest-Inhalte und schlägt Altersfreigabe vor:

```
Kriterien:
- Körperliche Anforderung (Kraft, Ausdauer, Koordination)
- Kognitive Anforderung (Planung, Verständnis)
- Gefahrenpotential (Höhe, Feuer, Werkzeuge, Fremde)
- Emotionale Reife (Durchhaltevermögen, Frustrations-Toleranz)
- Selbstständigkeit (Kann alleine durchgeführt werden?)
```

**Eltern-Freigabe:**

```
Für Kinder unter 13:
- Eltern können in App zusätzliche Freigaben erteilen
- "Mein Kind darf auch Quests ab 13 machen (unter Aufsicht)"

Für Kinder unter 16:
- "Mein Kind darf Werkzeuge nutzen (geschult)"
- "Mein Kind darf an Feuer-Quests teilnehmen (Erfahrung vorhanden)"
```

### 4.4 Quest-Erstellung: Genehmigungsflow

**Wer darf Quests erstellen?**

```
1. Admins (RealStack-Team)
   → Direkt freigeschaltet, keine Moderation

2. Pädagogen/Lehrer (verifiziert)
   → Freigabe für eigene Community (Schule)
   → Community-weite Quests: Moderation Stufe 2

3. Mentoren (Level 50+, Mentor-Status)
   → Können Quests vorschlagen
   → Moderation Stufe 1 + 2 + 3

4. Normale User (Level 20+)
   → Können Quests vorschlagen
   → Moderation Stufe 1 + 2 + 3
   → Nur für eigene Gruppen sichtbar (bis approved)

5. Anfänger (Level < 20)
   → Keine Quest-Erstellung (Spam-Schutz)
```

**Genehmigungsflow:**

```
1. User erstellt Quest
   ↓
2. AI-Moderation (Stufe 1)
   ├─ APPROVED → Stufe 3
   ├─ REVIEW → Stufe 3
   └─ BLOCKED → User erhält Feedback, Quest nicht sichtbar
   ↓
3. (Optional) Expert Review (bei sensiblen Contexts wie Schule)
   ├─ Freigabe → Quest live für Community
   └─ Ablehnung → Feedback an User
   ↓
4. Quest ist live
   ↓
5. Community-Flagging (Stufe 2)
   └─ Bei Meldungen → Zurück zu Stufe 3
```

### 4.5 Transparenz & Appeals

**Wichtig für Vertrauen:**

✅ **Klare Regeln:** Community Guidelines öffentlich
✅ **Begründungen:** Warum wurde Quest abgelehnt?
✅ **Einspruch möglich:** "Ich glaube, das war ein Fehler"
✅ **Lern-Möglichkeit:** "So würde die Quest funktionieren: [Vorschläge]"

**Community Guidelines (Auszug):**

```markdown
# Quest-Erstellung: Do's & Don'ts

✅ DO:
- Quests, die Naturverbundenheit fördern
- Quests, die Gemeinschaft stärken
- Quests, die neue Fähigkeiten lehren
- Quests, die Kreativität anregen
- Quests, die Achtsamkeit üben

❌ DON'T:
- Quests, die gefährlich sind ohne Aufsicht
- Quests, die andere ausgrenzen oder verletzen
- Quests, die Geld kosten (außer transparent kommuniziert)
- Quests, die Werbung enthalten
- Quests, die persönliche Daten sammeln
- Quests, die gegen Gesetze verstoßen

⚠️ VORSICHT:
- Quests mit Höhe, Feuer, Wasser, Werkzeugen
  → Sicherheitshinweise + Altersfreigabe nötig!
- Quests mit Fremden
  → Nur mit Eltern-/Lehrer-Begleitung
```

---

## 🎯 5. Zusammenfassung & nächste Schritte

### 5.1 Was wir jetzt haben

✅ **XP-System:** Formeln, Schwierigkeitsgrade, Bonus-Faktoren
✅ **Item-System:** Hybrid (80% vordefiniert, 20% generiert), 8 Kategorien, Metadaten
✅ **Fähigkeitenbaum:** Modular-konfigurierbar, 6 Haupt-Äste, Templates
✅ **Moderation:** 3-Stufen-Modell (AI + Community + Expert)
✅ **Altersfreigabe:** 5 Stufen, Eltern-Optionen

### 5.2 Was noch zu tun ist

**Design-Phase:**
- [ ] Item-Pool kuratieren (erste 100-200 Items designen)
- [ ] Fähigkeiten-Details ausarbeiten (alle Skills mit Stufen)
- [ ] Templates erstellen (Schule, Permakultur, Jugendgruppe, Familie)
- [ ] Community Guidelines finalisieren

**Technische Umsetzung:**
- [ ] Datenbank-Schema für Items, Skills, XP
- [ ] Admin-Interface für Skill Tree Konfiguration
- [ ] AI-Moderations-Integration (Claude API?)
- [ ] Flagging-System & Moderatoren-Dashboard

**Testing:**
- [ ] XP-Kurve mit echten Usern testen (fühlt sich gut an?)
- [ ] Item-Feedback (sind Items motivierend?)
- [ ] Moderation-Tests (false positives? false negatives?)

### 5.3 Offene Fragen für Diskussion (mit Anton & Team)

1. **XP-Kurve:** Exponent 1.5 ok, oder lieber flacher/steiler?
2. **Items:** Wie viele Items zum Launch? (Minimum 50? 100? 200?)
3. **Item-Visuals:** Nur Emojis, oder auch Custom Icons/Illustrationen?
4. **Moderation:** Wer macht Expert Review? (Bezahlt? Freiwillig? Community?)
5. **Altersfreigabe:** 5 Stufen ok, oder reichen 3? (ab 6, ab 12, ab 16)
6. **Quest-Erstellung:** Ab welchem Level? (Level 20 ok?)
7. **Avatar:** 2D-Sprites oder 3D-Modelle? (Budget!)
8. **Langzeit-Motivation:** Was passiert nach Level 100? (Prestige-System?)

---

**Nächster Schritt:**
Lass uns besprechen, welchen Teil wir zuerst detailliert ausarbeiten:
- Item-Pool kuratieren?
- Skill-Details?
- Moderation-Flows?

Oder möchtest du erstmal mit Anton die offenen Fragen klären?

---

*Dokumentiert am 6. Februar 2026*
