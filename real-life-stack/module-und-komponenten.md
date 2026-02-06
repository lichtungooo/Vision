# Module & Komponenten - Real Life Stack

**Version:** 2.0
**Datum:** 6. Februar 2026
**Status:** Neu strukturiert – basierend auf Timos Vision + technischer Realität

---

## Überblick

Dieses Dokument beschreibt die Module und Komponenten des **Real Life Stack (RLS)**.

**Wichtige Unterscheidung:**
- **Real Life Stack** = Die modulare Plattform/Infrastruktur
- **Utopia Map** = Eine konkrete Anwendung, die auf RLS aufbaut (Map-zentriert, Floating Windows)
- **Module** = Eigenständige Apps innerhalb von RLS
- **Komponenten** = Wiederverwendbare UI-Elemente (Widgets, Floating Windows auf Map, etc.)

---

## Architektur-Grundlagen

### Local-First & Connector-Based

RLS folgt der **Connector-Architektur** – Module wissen nichts vom Backend:

```
┌─────────────────────────────────────────────────────────┐
│                    Real Life Stack                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │ Kalender │  │Marktplatz│  │  Quest   │  ...Module   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘              │
│       │             │             │                     │
│       └─────────────┼─────────────┘                     │
│                     │                                   │
│              ┌──────▼──────┐                           │
│              │ DataInterface │  ← Generic Items API     │
│              └──────┬──────┘                           │
│                     │                                   │
│       ┌─────────────┼─────────────┐                     │
│       │             │             │                     │
│  ┌────▼────┐  ┌─────▼─────┐  ┌───▼───┐                │
│  │WoT-Conn.│  │REST-Conn. │  │ Mock  │  ...Connectors │
│  └─────────┘  └───────────┘  └───────┘                │
└─────────────────────────────────────────────────────────┘
```

**DataInterface** (was Module aufrufen):
```typescript
interface DataInterface {
  getItems(filter?: ItemFilter): Promise<Item[]>
  getItem(id: string): Promise<Item | null>
  createItem(item: Omit<Item, 'id'>): Promise<Item>
  updateItem(id: string, updates: Partial<Item>): Promise<Item>
  deleteItem(id: string): Promise<void>
  subscribe(filter: ItemFilter, callback: (items: Item[]) => void): Unsubscribe
}
```

**Generic Items** (universelles Datenmodell):
```typescript
interface Item {
  id: string
  type: string           // 'event', 'quest', 'offer', 'resource', ...
  createdBy: string      // did:key des Erstellers
  createdAt: number
  attributes: Record<string, unknown>  // Modul-spezifische Daten
  visibility: 'private' | 'contacts' | 'public'
}
```

### Web of Trust Integration

Jedes Item hat einen Ersteller (`createdBy` = DID). Sichtbarkeit basiert auf Trust-Netzwerk:
- `private`: Nur Ersteller
- `contacts`: Nur verifizierte Kontakte
- `public`: Alle im Netzwerk

---

## Real Life Stack Module

### Kern-Module (immer aktiv)

#### 1. Identity-Modul (Web of Trust)

**Zweck:** Login, Vertrauensnetzwerk, Offline/Online Sync

**Implementiert in:** `@real-life/wot-core`

**Hauptfunktionen:**
- BIP39 Mnemonic Recovery (12 Wörter)
- did:key Format (Ed25519)
- Verschlüsselte Seed-Speicherung (PBKDF2 + AES-GCM)
- In-Person Verification (Challenge-Response)
- Contact Management (pending → active)

**Status:** ✅ Week 2 Complete (64 Tests)

---

#### 2. Profil-Modul

**Zweck:** Persönliches Profil, Entry-Point zu anderen Modulen

**Item-Typ:** `profile`

**Attribute:**
```typescript
{
  name: string
  avatar?: string           // URL oder Base64
  bio?: string
  skills?: string[]         // Top-Skills für Anzeige
  level?: number            // Gamification (optional)
}
```

**Komponenten:**
- Avatar-Anzeige
- Skill-Vorschau
- Modul-Kacheln (Entry-Points)

---

### Prioritäts-Module

#### 3. Kalender-Modul

**Zweck:** Events, Termine, Verfügbarkeiten

**Item-Typ:** `event`

**Attribute:**
```typescript
{
  title: string
  description?: string      // Markdown
  startTime: number         // Unix timestamp
  endTime?: number
  location?: {
    name: string
    lat?: number
    lng?: number
  }
  category?: string         // 'community' | 'private' | 'public'
  hashtags?: string[]
  recurring?: RecurringPattern
}
```

**Komponenten:**
- Kalender-Widget (nächste 3 Events)
- Event-Karte (auf Map)
- Event-Detail-View
- iCal-Export/-Import

**Verknüpfungen:**
- Map (Events mit Location auf Map)
- Notifications (Event-Erinnerungen)

---

#### 4. Marktplatz-Modul

**Zweck:** Lokaler Austausch – Begabungen, Ressourcen, Werkzeuge

**Item-Typen:** `offer`, `request`, `resource`, `tool`

**Attribute (offer/request):**
```typescript
{
  title: string
  description?: string
  type: 'offer' | 'request'
  category: 'skill' | 'resource' | 'tool' | 'service'
  location?: { name: string, lat?: number, lng?: number }
  availability?: TimeRange[]
  hashtags?: string[]
}
```

**Komponenten:**
- Marktplatz-Übersicht
- Angebots-/Anfrage-Karten
- Such- und Filter-System

**Verknüpfungen:**
- Map (Angebote mit Location auf Map)
- Wertschöpfung (Token-Scheine für Transaktionen)

---

#### 5. Wertschöpfungs-Modul (Human Money Core)

**Zweck:** Digitale Wertschöpfung ohne klassisches Geld

**Implementiert durch:** Human Money Core (Rust/WASM) von Sebastian Galek

**Hauptfunktionen:**
- Individuelle "Gutscheine" erstellen
- Offline QR-Code Transaktionen
- Online Synchronisation
- Transparente Transaktionshistorie

**Item-Typ:** `transaction`

**Attribute:**
```typescript
{
  from: string              // DID des Senders
  to: string                // DID des Empfängers
  amount: number
  unit: string              // 'minuto' | 'dank' | custom
  reference?: string        // Bezug (z.B. Item-ID)
  offline: boolean          // War die Transaktion offline?
  syncedAt?: number         // Wann synchronisiert?
}
```

**Verknüpfungen:**
- Web of Trust (Keypair für Signaturen)
- Marktplatz (Transaktionen für Angebote)

---

### Gamification-Module (optional)

#### 6. Quest-Modul

**Zweck:** Gamification für reale Herausforderungen

**Item-Typ:** `quest`

**Attribute:**
```typescript
{
  title: string
  description: string       // Markdown
  location?: { name: string, lat?: number, lng?: number }
  category?: string         // 'handwerk' | 'natur' | 'gemeinschaft' | ...
  hashtags?: string[]
  skills?: string[]         // Welche Skills werden trainiert?
  xpReward?: number
  itemRewards?: string[]    // Item-IDs
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  prerequisites?: string[]  // Quest-IDs die vorher gemacht werden müssen
  verification: 'qr' | 'photo' | 'manual'
  status?: 'available' | 'in_progress' | 'completed'
}
```

**Komponenten:**
- Quest-Karten (auf Map)
- Quest-Detail-View
- Quest-Erstellung (mit Markdown-Editor)
- QR-Code-Verification

**Verknüpfungen:**
- Map (Quests auf Map)
- Avatar (Items als Belohnung)
- Skill-Tree (XP für Skills)
- Log (Quest-Completion)

---

#### 7. Avatar-Modul

**Zweck:** Visueller Avatar mit Items als Belohnungen

**Item-Typ:** `avatar_item`

**Attribute:**
```typescript
{
  name: string
  description?: string
  category: 'head' | 'body' | 'tool' | 'companion' | 'trophy'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  imageUrl: string
  obtainedFrom?: string     // Quest-ID oder Event-ID
}
```

**Komponenten:**
- Avatar-Editor
- Inventar-Grid
- Item-Detail-View

---

#### 8. Skill-Tree-Modul

**Zweck:** Fähigkeitenbaum für persönliche Entwicklung

**Skill-Kategorien (Vorschlag von Bernd):**
1. **Seele** – Empathie, Mitgefühl, Intuition
2. **Geist** – Logik, Kreativität, Problemlösung
3. **Bewusstsein** – Achtsamkeit, Selbstreflexion
4. **Körper** – Handwerk, Sport, Gesundheit
5. **Gemeinschaft** – Zusammenarbeit, Vertrauen
6. **Soziales** – Konfliktlösung, Führung

**Item-Typ:** `skill_progress`

**Attribute:**
```typescript
{
  skill: string             // Skill-ID
  xp: number
  level: number
  history: Array<{
    date: number
    xpGained: number
    source: string          // Quest-ID, Event-ID, etc.
  }>
}
```

---

#### 9. Log-Modul

**Zweck:** Persönliches Tagebuch ALLER Aktivitäten

**Aggregiert Items von:** Quest, Marktplatz, Kalender, Wertschöpfung, Skill-Tree

**Hauptfunktionen:**
- Timeline aller Aktivitäten
- Filter nach Modul, Typ, Zeitraum, Hashtags
- Statistiken (was gegeben/erhalten/gelernt)
- Export (PDF, CSV)

**Komponenten:**
- Log-Timeline
- Filter-System
- Statistik-Dashboard

---

### Erweiterte Module (Post-MVP)

#### 10. Entscheidungs-Modul

**Zweck:** Community-Entscheidungen mit Konsens/Konsent

**Wichtig:** KEIN 50-50 Mehrheitsentscheid – niemand wird zurückgelassen!

**Item-Typ:** `decision`

**Attribute:**
```typescript
{
  title: string
  description: string
  method: 'consensus' | 'consent' | 'poll'
  options?: string[]
  deadline?: number
  votes: Array<{
    voter: string           // DID
    vote: string | boolean
    objection?: string      // Bei Konsent: Einwand
  }>
  status: 'open' | 'decided' | 'blocked'
}
```

---

#### 11. Wissensdatenbank-Modul

**Zweck:** Reddit-style Q&A – Wissen teilen

**Wichtig:** KEINE Politik, neutrale Beleuchtung, alle Perspektiven willkommen

**Item-Typen:** `question`, `answer`

**Attribute (question):**
```typescript
{
  title: string
  body: string              // Markdown
  category?: string
  hashtags?: string[]
  votes: number             // Gewichtung (nicht Thumbs-Up/Down!)
}
```

---

#### 12. AI-Modul / Eli

**Zweck:** KI-Unterstützung für Quest-Erstellung, Suche, Organisation

**Hauptfunktionen:**
- Quest-Erstellungs-Hilfe
- Semantische Suche ("Welche Quests passen zu mir?")
- Organisations-Hilfe (Kalender-Planung)
- Einladung & Onboarding (Eli als Willkommens-Guide)

**Integration:**
- Chat-Interface in allen Modulen
- Contextual Help

---

#### 13. Health-Modul

**Zweck:** Hilfe zur Selbsthilfe im Bereich Gesundheit

**Wichtig:** KEINE Heilversprechen! Jeder ist selbst verantwortlich.

**Hauptfunktionen:**
- Gesundheitskreise (Reiki, Yoga, Wildkräuter)
- Gesundheits-Quests (Fasten, Meditation)
- Altes Wissen teilen (Ayurveda, TCM, Heilkräuter)

**Item-Typen:** `health_circle`, `health_quest` (erweitert Quest)

---

#### 14. Notifications-Modul

**Zweck:** Multi-Messenger Integration

**Wichtig:** KEIN eigener Messenger – Anbindung an bestehende!

**Kanäle:**
- Push Notifications (Web/Mobile)
- Telegram Bot
- Matrix Server
- Signal (optional)

**Trigger:**
- Event-Erinnerungen (Kalender)
- Quest-Einladungen
- Marktplatz-Anfragen
- Entscheidungs-Erinnerungen

---

## Utopia Map – Timos Vision

> **Hinweis:** Die folgenden Konzepte beschreiben Timos Vision einer Map-zentrierten Anwendung, die auf dem Real Life Stack aufbaut.

### Map als Fundament

**Kernidee:** Die Map ist IMMER die Basis. Alle Module öffnen sich als **Floating Windows** auf der Map.

```
┌─────────────────────────────────────────┐
│           MAP (Hintergrund)             │
│                                         │
│  ┌──────────────┐   ┌──────────────┐   │
│  │  Kalender    │   │   Profil     │   │
│  │  (Window)    │   │   (Window)   │   │
│  │              │   │              │   │
│  └──────────────┘   └──────────────┘   │
│                                         │
│         (Luft zwischen Fenstern)        │
│         (Map immer sichtbar)            │
└─────────────────────────────────────────┘
```

### Map-Features

- **Map-Layer-System:** Fantastische Karten, Weltraumansicht, künstlerische Ebenen
- **Navigation:** "Navigiere dorthin" → Google Maps Integration
- **Content auf Map:**
  - Quest-Icons (farbkodiert)
  - Event-Icons
  - Marktplatz-Icons (Angebote, Ressourcen, Werkzeuge)
- **Quick Filter:** Hashtag-Suche, Distanz-Slider, Kategorie-Chips

### Floating-Window-Architektur

- Fenster sind verschiebbar, skalierbar, andockbar
- Desktop: Bis zu 4 Fenster gleichzeitig
- Mobile Landscape: Dashboard-Widget (Vollbild)
- Mobile Portrait: Einzelne Fenster

### Dashboard auf Map

**Dashboard-Modul** als Widget-basierter Einstiegspunkt:
- User-konfigurierbare Widgets
- Quest-Widget, Kalender-Widget, Marktplatz-Widget, etc.
- Öffnet sich als Floating Window auf Map

---

## Komponenten-Bibliothek

### Profil-Komponenten
- **Avatar-Icon** → Öffnet Avatar-Modul
- **Skill-Tree-Vorschau** → Öffnet Skill-Tree
- **Log-Vorschau** → Öffnet Log
- **Quest-Übersicht** → Öffnet Quest-Modul
- **Kalender-Widget** → Öffnet Kalender
- **Marktplatz-Übersicht** → Öffnet Marktplatz
- **Wallet-Vorschau** → Öffnet Wallet/Value-Übersicht

### Dashboard-Widgets
- Quest-Widget
- Kalender-Widget
- Marktplatz-Widget
- Wallet-Widget
- Log-Widget
- Skill-Tree-Widget
- Avatar-Widget
- Notifications-Widget
- Mini-Map-Widget

### Shared Komponenten
- **Mini-Map** (in Details-Views)
- **Navigation-Button** ("Navigiere dorthin")
- **Markdown-Editor** (Quest/Event-Erstellung)
- **QR-Code-Scanner/Generator**
- **Hashtag-Autocomplete**
- **Filter-System**
- **Item-Selector**

---

## Beispiel-Flows

### Flow 1: Quest finden und abschließen

1. Map öffnen → Quest-Icons sehen
2. Filter: "#abenteuer", Distanz 20km
3. Quest antippen → Details als Floating Window
4. "Teilnehmen" → Quest in "Laufende"
5. Quest real durchführen
6. QR-Code scannen → XP + Items erhalten
7. Avatar-Modul → Item ausrüsten
8. Log → Quest erscheint in Timeline

### Flow 2: Handwerker bietet Skill an

1. Marktplatz öffnen
2. "Angebot erstellen" → Formular
3. Kategorie: "Skill", Titel: "Holzbearbeitung lernen"
4. Location setzen (Werkstatt)
5. Veröffentlichen → Erscheint auf Map
6. Interessent meldet sich
7. In-Person treffen, Wert austauschen
8. Transaktion im Wertschöpfungs-Modul

### Flow 3: Community-Event planen

1. Kalender öffnen
2. "Event erstellen"
3. Titel, Zeit, Ort setzen
4. Visibility: "contacts" (nur Web of Trust)
5. Veröffentlichen
6. Kontakte bekommen Notification
7. Event auf Map sichtbar
8. "Navigiere dorthin" → Google Maps

---

## MVP-Phasen

### Phase 1: Foundation
- ✅ Web of Trust (Identity, Verification)
- 🔄 Map-Modul (Basic)
- 🔄 Profil-Modul

### Phase 2: Kalender
- ⏳ Kalender-Modul (Events, Sync)
- ⏳ Notifications (Push)

### Phase 3: Marktplatz & Wertschöpfung
- ⏳ Marktplatz-Modul
- ⏳ Human Money Core Integration

### Phase 4: Gamification
- ⏳ Quest-Modul
- ⏳ Avatar-Modul
- ⏳ Skill-Tree-Modul
- ⏳ Log-Modul

### Phase 5: Erweitert
- ⏳ Entscheidungs-Modul
- ⏳ Wissensdatenbank
- ⏳ AI-Modul / Eli
- ⏳ Health-Modul

---

## Technische Referenz

### Packages

| Package | Beschreibung | Status |
|---------|--------------|--------|
| `@real-life/wot-core` | Identity, Verification, Contacts | ✅ Published |
| `@real-life-stack/toolkit` | UI Components (Radix, Tailwind) | ✅ Published |
| `human-money-core` | Rust WASM für Wertschöpfung | 🔄 Sebastian |

### Links

- [Web of Trust Demo](https://demo.wot-core.dev)
- [Money Printer](https://money-printer.app)
- [Toolkit Storybook](https://storybook.real-life-stack.dev)

### Stack

- **Frontend:** React 19, TypeScript 5.7, Vite 6
- **Styling:** Tailwind CSS 4, Radix UI
- **Data:** Local-First (IndexedDB, CRDTs via Evolu)
- **Identity:** Ed25519, did:key, BIP39

---

## Offene Fragen

### 1. Naming: "Real-Life Stack" vs "Forge"?
- **Real-Life Stack:** Beschreibend, klar
- **Forge:** Metaphorisch (Schmiede), cooler

### 2. Skill-Tree: Vordefiniert oder anpassbar?
- Basis-Kategorien fix (Seele, Geist, Bewusstsein, Körper, Gemeinschaft, Soziales)
- Unterkategorien anpassbar pro Community?

### 3. Items: Wer designed sie?
- MVP: Vordefinierte Item-Bibliothek (50-100)
- Später: Quest-Master können eigene Items erstellen (mit Moderation)

### 4. Wallet-Naming?
- "Wallet" ist irreführend (keine Krypto-Wallet!)
- Alternativen: "Wertübersicht", "Meine Wertschöpfung", "Value"?

---

*Basierend auf Timos Vision – geerdet in technischer Realität*
*Version 2.0 – 6. Februar 2026*
