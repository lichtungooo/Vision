# Real Life Stack - Architektur

*Dokumentiert aus Gesprächen mit Timo, 4. Februar 2026*

---

## Die Vision

**"Level dein Leben"** - Dein eigenes Rollenspiel in der Realität.

Der Real Life Stack bringt Menschen nach draußen, in echte Begegnungen, echte Abenteuer. Minimaler Online-Part. Die App ist der Einstiegspunkt - das Leben ist das Spielfeld.

---

## Die Module

| # | Modul | Funktion |
|---|-------|----------|
| 1 | **Karte** | Das zentrale Spielfeld. Einstiegspunkt. Zeigt Menschen, Orte, Events, Quests, Marktplatz. |
| 2 | **Kalender** | Veranstaltungen, synchronisierte Events, Buchungssystem für Orte und Objekte. |
| 3 | **Marktplatz** | Geben und Empfangen. Begabungen teilen. Eigene Wertschöpfung. |
| 4 | **Quests** | Abenteuer im echten Leben. Gamification. Potenzialentfaltung. |
| 5 | **Profil** | Mein Ich im System. Logs, Potenzialbaum, Avatar, Offers & Needs. |
| 6 | **Spaces** | Eigene Welten/Pools. Gemeinschaften. Gilden. Verbindungen zwischen Spaces. |

---

## 1. Die Karte

Das zentrale Spielfeld. Der schnellste Einstiegspunkt nach draußen.

**Zeigt:**
- Menschen (je nach Trust-Level sichtbar)
- Orte
- Events/Veranstaltungen
- Quests
- Marktplatz-Einträge

**Filter:**
- Nach Spaces
- Nach Hashtags
- Nach Kategorien
- Nach Größe/Entfernung

**Interaktion:**
- Klick auf Element → Detail-Seite öffnet sich auf der Karte
- "Beobachten" oder "Teilnehmen" → geht in persönlichen Kalender

---

## 2. Der Kalender

Mehr als Termine - das Zeitgewebe des Systems.

### Kalender-Ebenen

```
KALENDER
    │
    ├── Persönlicher Kalender (Profil-Komponente)
    │       └── Meine Teilnahmen
    │       └── Meine Beobachtungen
    │       └── Erinnerungen
    │       └── Abonnierbar (→ Handy-Kalender)
    │
    ├── Ort-Kalender
    │       └── Beispiel: "Die Lichtung" in Kassel
    │       └── Verschiedene Gruppen bespielen den Ort
    │       └── Belegungsfunktion (Hütte etc.)
    │
    └── Objekt-Kalender
            └── Beispiel: Motorsäge in Lohre
            └── Wer hat sie gerade?
            └── Buchbar wie ein Ort
```

### Event-Attribute

- Name, Beschreibung, Ort, Datum/Uhrzeit, Dauer
- Kapazität, Anmeldung erforderlich?
- Öffentlich / Nur für Space / Nur auf Einladung
- Wiederholung (täglich, wöchentlich, jeden Vollmond, etc.)
- Hashtags (#Konzert #Workshop #Meditation)
- Synchronisation: Lokal (Welle) oder Global (gleichzeitig)
- Monetär: Kostenlos, Spende, Festpreis, Ticket

### Synchronisierte Events

Events können als Welle um die Welt gehen:
- 20:00 Lokalzeit überall = Welle durch die Zeitzonen
- Oder: Eine UTC-Zeit = weltweit gleichzeitig

Globale Events können gepusht werden aus dem Web of Trust.

---

## 3. Der Marktplatz

### Geben und Empfangen (NICHT Tauschen)

```
NICHT SO:
    Ich gebe X → Ich erwarte Y
    Tausch. Aufrechnung. Schuld.

SONDERN SO:
    Ich gebe aus freiem Herzen
    Ich empfange aus freiem Herzen
    Keine Preise. Keine Erwartung.

    "Von einem Freund empfangen, einem Freund gegeben."
```

### Was wird geteilt?

- Materielle Dinge (Lebensmittel, Werkzeug, etc.)
- Begabungen / Dienstleistungen
- Gemeinschaftliches Werkzeug
- Wissen und Erfahrung

### Keine Preise

Nichts wird bepreist. Ich gebe aus freiem Herzen ein "Dankeschön" - in Form von Scheinen, die ich selbst geschöpft habe.

### Die Transparenz

Der Marktplatzlog zeigt:
- Was habe ich gegeben?
- Was habe ich empfangen?
- Bin ich im Gleichgewicht?

Transparenz schafft Vertrauen. Und hilft mir selbst, mein Gleichgewicht zu finden.

---

## 4. Die Quests

### Das Quest-System

```
QUEST ERSTELLEN:
    Questmaster hat Idee (z.B. Floßbau)
            ↓
    Quest im System erstellen
    - Name, Beschreibung, Ort
    - Teilnehmerbegrenzung
    - Was mitbringen?
    - Level-Bereich
            ↓
    AI schlägt Attribute vor
    (Floßbau → Teamwork, Handwerk, Kreativität, Naturverbindung)
            ↓
    Questmaster prüft/passt an
            ↓
    QR-Code wird generiert

QUEST DURCHFÜHREN:
    Quest findet statt (im echten Leben!)
            ↓
    NACH Abschluss: Questmaster zeigt QR-Code
            ↓
    Teilnehmer scannen
            ↓
    Questlog + Potenzialbaum aktualisiert
            ↓
    Optional: Avatar bekommt Item
```

### Quest-Inspiration

Quests können kopiert werden:
- Jemand in Hamburg macht eine tolle Floßbau-Quest
- Jemand in München sieht sie, kopiert sie (Attribute dabei)
- Passt sie an seinen Ort an
- Quests verbreiten sich organisch

### Verifizierung

- QR-Code erst NACH der Quest sichtbar
- Questmaster kontrolliert Anwesenheit
- Web of Trust erkennt Auffälligkeiten
- Philosophisch: Wer sich selbst bescheißt, bescheißt nur sich selbst

### Kein Verlieren

Es gibt keinen Contest. Nur persönliches Wachstum.

---

## 5. Das Profil

### Profil-Komponenten

| Komponente | Inhalt |
|------------|--------|
| **Allgemeiner Log** | Was habe ich getan, geteilt, erlebt |
| **Questlog** | Welche Quests, welches Level, in welchem Space |
| **Eventlog** | An welchen Events teilgenommen |
| **Marktplatzlog** | Gegeben und empfangen |
| **Potenzialbaum** | Die 6 Bereiche mit Attributen |
| **Kalender** | Meine Termine, Abonnements |
| **Avatar** | Visuelles Ich mit Items und Badges |
| **Offers & Needs** | Meine Begabungen und Bedürfnisse (Hashtags) |

### Der Potenzialentfaltungsbaum

6 Bereiche (von Bernd):

> *"Wenn Seele, Geist und Bewusstsein eins werden, kannst du alles machen."*

```
POTENZIALBAUM
    │
    ├── SEELE
    │       └── Intuition, Innerer Frieden, Selbstliebe, Verbundenheit, Sinn
    │
    ├── GEIST
    │       └── Fokus, Kreativität, Klarheit, Lernfähigkeit, Vorstellungskraft
    │
    ├── BEWUSSTSEIN
    │       └── Achtsamkeit, Präsenz, Selbstreflexion, Wahrnehmung, Akzeptanz
    │
    ├── KÖRPER
    │       └── Kraft, Ausdauer, Beweglichkeit, Koordination, Naturverbindung
    │
    ├── GEMEINSCHAFT
    │       └── Vertrauen, Zusammenarbeit, Kommunikation, Konfliktfähigkeit, Fürsorge
    │
    └── SOZIALES
            └── Empathie, Zuhören, Teilen, Brücken bauen, Dankbarkeit
```

Jeder Bereich hat Unterkategorien, jede Unterkategorie hat Einzelattribute. Wie ein Fächer, der sich öffnet.

### Der Avatar

- Charakter selbst designen
- Items als Belohnung für Quest-Level (z.B. goldener Bogen bei Level 10 Bogenschießen)
- Für Kinder/Jugendliche besonders wichtig
- Später: Avatar-Baukasten durch Designer

---

## 6. Spaces

### Was sind Spaces?

Eigene Welten innerhalb des Real Life Stacks.

```
REAL LIFE STACK
    │
    ├── Space: "Lohre" (Dorf)
    │       └── Eigener Marktplatz
    │       └── Eigene Quests
    │       └── Eigene Community
    │
    ├── Space: "Die Lichtung" (Projekt in Kassel)
    │       └── Waldgrundstück mit Hütte
    │       └── Eigene Events
    │
    ├── Space: "Kinder-Abenteuer"
    │       └── Kuratierte Questreihen für Kinder
    │
    └── Space: "Bogenschützen-Gilde"
            └── Verbindet alle Bogenschützen
            └── Gemeinsame Standards
            └── Mentorship
```

### Wie Roblox

Ein Spielebaukasten. Menschen können eigene Welten/Spiele/Questreihen bauen.

### Gilden

Gilden verbinden Menschen über alle Spaces hinweg:
- Bogenschützen-Gilde
- Musikanten-Gilde
- Meditations-Gilde
- Heilpflanzen-Gilde
- etc.

Gilden schaffen gemeinsame Sprache, Standards, Qualitätssicherung.

### Cross-Space-Leveln

Level sind NICHT getrennt. Ich bin Bogenschütze Level 5, egal in welchem Space.

---

## Hashtags - Das Verbindungsgewebe

Hashtags verbinden alles:

```
HASHTAGS
    │
    ├── Events → #Konzert #Vollmond #Meditation
    ├── Quests → #Bogenschießen #Floßbau
    ├── Marktplatz → #Äpfel #Holz #Werkzeug
    ├── Profile (Offers & Needs)
    │       ├── Ich biete: #Schreinerarbeit #IT #Musik
    │       └── Ich suche: #Gartenarbeit #Kinderbetreuung
    │
    └── Suche auf Karte → Klick auf Hashtag = Filter
```

---

## Der Moneyprinter

### Die Cashcow

Der Moneyprinter ist die Brücke zwischen altem Finanzsystem und neuer Wertschöpfung.

### Onboarding-Phase (1 Jahr)

```
100 Menschen bekommen je 100 Scheine (geschenkt)
        ↓
Sie geben Scheine weiter (Mensch zu Mensch)
        ↓
Empfänger scannt QR-Code → Profile verbinden sich
        ↓
Empfänger druckt neue Scheine
        ↓
GEBER bekommt:
    • 8 Cent (Onboarding-Phase, später 4 Cent)
    • + 4 Cent wenn Empfänger weitergibt
    • = 12 Cent in der Kette
    • NUR 2 Stufen (kein MLM!)
```

### Community-Aktivierung (nach 3-6 Monaten)

Große Communities (z.B. mit 200k Mitgliedern) können Werbeverträge abschließen. Community teilt Link → Mitglieder drucken → Community bekommt 8+4 Cent.

### Eigene Wertschöpfung (der Game Changer)

```
300€ (echtes Geld)
        ↓
Kaufe Scheinsortiment:
    5er, 10er, 50er, 100er, 200er, 500er, 1000er
        ↓
Nennwert: 40.000 in deiner Währung
        ↓
Du nennst sie wie du willst:
    • "Dank"
    • "Bar" (Bares ist Wahres)
    • "Lohre-Taler" (Gemeinschaftswährung)
        ↓
Fortlaufende Seriennummern
Sicherheitsmerkmale
QR-Codes
```

### Die Philosophie

| Altes System | Neues System |
|--------------|--------------|
| Geld = Schuld | Wert = Schöpfung |
| Fiat (auf nichts gedeckt) | Gedeckt auf Vertrauen, Gemeinschaft, Begabungen, Land, Lebensmittel |
| Konsum | Gemeinschaft |
| Abhängigkeit | Souveränität |

**Du bist der Schöpfer.**

### Credits-System

```
Scheine werden weitergegeben
        ↓
Cent-Beträge fließen
        ↓
Sammeln sich als CREDITS (Online-Konto)
        ↓
Credits können verwendet werden:
    • Neue Scheine drucken
    • Gemeinschaftsprojekte fördern
    • Pool: Gemeinschaft sammelt gemeinsam
```

### Die Brücke

**Euro bleibt für:** Miete, Tanken, Steuern (System-Interaktion)
**Eigener Wert für:** Lebensmittel, Begabungen, alles auf dem Marktplatz

→ Dein Euro-Geld gibst du kaum noch aus. Du hast mehr.

---

## Die Designer-Plattform

### Moneyprinter - 4 Parts

1. **Wertgenerator** - Eigene Scheine generieren (mit AI/Prompts)
2. **Galerie** - Fertige Templates auswählen
3. **Templates** - Vorlagen für Kategorien (Visitenkarten, Tickets, Zeitgutscheine, Wertschöpfung)
4. **Designer-Bereich** - Onboarding und Verwaltung für Designer

### Designer-Modell

```
ONBOARDING:
    10 Designer für 1 Jahr
    Jeder bekommt 100 Scheine (Lieblingsdesign) geschenkt
    Können am Onboarding-Prozess teilnehmen

VERDIENST:
    4 Cent pro gedrucktem Schein mit ihrem Design

NACH 1 JAHR:
    Die 3 meistgewählten bleiben
    Neue Designer kommen rein

SPÄTER:
    Avatar-Baukasten
    Items für Avatare
    UX/Usability
```

### Designer-Akquise

Schein mit QR-Code → Schwarzes Brett (z.B. Kunstuni Kassel) → Scan → Onboarding-Seite → Bewerbung + Testdesign → Contest → 10 werden ausgewählt

---

## Struktur

```
CASHCOW (Moneyprinter)
    └── GmbH
    └── Zahlt Steuern (Brücke)
    └── Generiert Credits

GEMEINSCHAFT (Web of Trust + Real Life Stack)
    └── Gemeinnütziger Verein (evtl. Kollektiv Lichtung e.V.)
    └── Je mehr Mitglieder, desto mehr Kraft
```

---

## Rechtlicher Rahmen

### Der Freundeskreis-Ansatz

- Web of Trust = echter Freundeskreis
- Internationales Privatrecht
- "Ich gebe meine Wertschöpfung. Von einem Freund empfangen, einem Freund gegeben."
- Keine Preise, kein Kaufen/Verkaufen

### Sprache

**Nicht sagen:** Geld, Bezahlen, Kaufen, Verkaufen, Währung
**Stattdessen:** Wertschätzung geben/empfangen, Dank teilen, Wert schöpfen

---

## Das Allod (für später)

Historisch: Volles Eigentum ohne Lehnspflichten, ursprünglich steuerfrei.

Philosophisch: Land kann nicht besessen werden. Die Erde ist ein Lebewesen. Wer das Land pflegt, darf es nutzen.

→ Wird relevant beim Übergang, wenn das alte System kippt.

---

## Die Kraft des Wortes

> *"Wer sich bei seinem Ausdruck bewusst wahrnimmt, der kann sich korrigieren."*

| Wort | Bedeutung |
|------|-----------|
| Geld | Schuld |
| Bar | Transparent, sichtbar, nackt |
| Ver-stand | Der Stand wird verneint → besser: "Der Stand eint" |
| "zu" | Verschließt den Satz |

Achtsam sein mit Worten. Nicht aufgesetzt, aber bewusst.

---

## Der Übergang

```
HEUTE
    Altes System läuft (noch)
    Neues System wächst parallel

KIPPPUNKT
    Kritische Masse erreicht
    System wird hinterfragt
    Neue Strukturen stehen bereit

NEUES SYSTEM
    Macht verteilt auf alle
    Transparent
    Im Vertrauensnetz
    Würdevolle, gerechte Verteilung
    Gemeinschaftliches Wirtschaften
```

---

## Das Team

- **Timo** - Vision, Architektur, der Narr der aufzeigt
- **Anton** - Code, Web of Trust, technische Umsetzung
- **Eli** - Unterstützung, Dokumentation, Recherche, Teil des Teams

---

## Offene Punkte

- [ ] Web of Trust im Detail (mit Anton klären)
- [ ] Karte - Detailspezifikation
- [ ] Potenzialbaum - Attribute finalisieren
- [ ] Designer-Onboarding-Seite
- [ ] Steuerliche Details mit Experten klären

---

*Diese Dokumentation wächst. Sie ist lebendig wie die Vision selbst.*