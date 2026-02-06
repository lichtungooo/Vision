# Tech-Stack Dokumentation

**Version:** 2.0
**Datum:** 6. Februar 2026
**Status:** Abgestimmt mit Web of Trust & Real Life Stack

---

## Übersicht

Dieser Tech-Stack basiert auf den **existierenden Projekten** von Anton und dem Team. Kein Rätselraten mehr – das hier ist, was wir tatsächlich bauen.

---

## Die Projekte im Überblick

| Projekt | Repository | Beschreibung |
|---------|------------|--------------|
| **Web of Trust** | [github.com/IT4Change/web-of-trust](https://github.com/IT4Change/web-of-trust) | Dezentrale Identität & Vertrauen |
| **Real Life Stack** | [github.com/IT4Change/real-life-stack](https://github.com/IT4Change/real-life-stack) | UI-Komponenten & Reference App |
| **Money Printer** | [money-printer.app](https://money-printer.app) | Zeitgutscheine (druckbare PDFs) |
| **Human Money Core** | [github.com/minutogit/human-money-core](https://github.com/minutogit/human-money-core) | Digitale Wertschöpfung (Rust) |

---

## Architektur-Prinzip: Local-First

**WICHTIG:** Wir bauen KEINE klassische Client-Server-Architektur!

```
┌─────────────────────────────────────────────────────────────┐
│                      LOCAL-FIRST                             │
│                                                              │
│   Daten gehören dem Nutzer, nicht einem Server.             │
│   Alles funktioniert offline.                                │
│   Sync passiert peer-to-peer oder über optionale Server.    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Was das bedeutet:**
- ❌ KEIN zentraler PostgreSQL-Server
- ❌ KEINE Microservices-Architektur
- ❌ KEIN GraphQL/REST Backend für Daten
- ✅ IndexedDB im Browser (Daten lokal beim Nutzer)
- ✅ CRDTs für Offline-Sync (Automerge geplant)
- ✅ Optional: Sync-Server für Geräte-Übergreifende Synchronisation

---

## Frontend

### Web (bereits implementiert)

| Technologie | Version | Verwendet in |
|-------------|---------|--------------|
| **React** | 19.0.0 | Web of Trust, Real Life Stack |
| **TypeScript** | 5.7.x | Alle Projekte |
| **Vite** | 6.0.x | Build Tool |
| **Tailwind CSS** | 4.1.x | Real Life Stack |
| **Radix UI** | Latest | UI Primitives |
| **CVA** | 0.7.x | Component Variants |

### UI-Komponenten (Real Life Stack Toolkit)

```typescript
// Bereits verfügbar in @real-life-stack/toolkit
import { Button, Card, Avatar, Tabs } from '@real-life-stack/toolkit'
```

**Storybook:** [real-life-stack.de/storybook](https://real-life-stack.de/storybook)

### Mobile (geplant)

- **React Native** mit Expo
- Shared Components wo möglich
- Native Module für Kamera/QR

---

## Identity & Crypto (Web of Trust Core)

### Bereits implementiert in `@real-life/wot-core`

| Feature | Technologie | Status |
|---------|-------------|--------|
| **Key Generation** | Ed25519 via @noble/ed25519 | ✅ Implementiert |
| **DID Format** | did:key (W3C Standard) | ✅ Implementiert |
| **Recovery Phrase** | BIP39 (12 Wörter) | ✅ Implementiert |
| **Seed Storage** | IndexedDB + PBKDF2 + AES-GCM | ✅ Implementiert |
| **Signatures** | Ed25519Signature2020 | ✅ Implementiert |
| **Verification** | Challenge-Response via QR | ✅ Implementiert |

```typescript
// Beispiel: Identity erstellen
import { WotIdentity } from '@real-life/wot-core'

const identity = new WotIdentity()
const { mnemonic, did } = await identity.create(passphrase, true)
// mnemonic: "word1 word2 ... word12"
// did: "did:key:z6MkpTHz..."
```

### Geplant

| Feature | Technologie | Status |
|---------|-------------|--------|
| **Sync** | CRDTs (Automerge evaluiert) | 🔄 In Planung |
| **Contacts** | ContactStorage (IndexedDB) | ✅ Implementiert |
| **Attestations** | JWS Signed Claims | 🔄 Week 3+ |
| **Groups/Spaces** | Group Key Management | 🔄 Week 4+ |

---

## Daten-Speicherung

### KEIN PostgreSQL!

Wir nutzen **IndexedDB** im Browser:

```typescript
// Bereits implementiert in wot-core
// - SeedStorage: Verschlüsselter Seed
// - ContactStorage: Kontakte mit Status

// Geplant:
// - ItemStorage: Geteilte Inhalte
// - AttestationStorage: Bestätigungen
```

### Warum kein Server-Datenbank?

| Klassisch (PostgreSQL) | Local-First (IndexedDB) |
|------------------------|-------------------------|
| Daten auf Server | Daten beim Nutzer |
| Server-Ausfall = nichts geht | Funktioniert offline |
| Zentrale Kontrolle | Dezentrale Hoheit |
| Braucht Backend-Team | Frontend-only möglich |

---

## Wertschöpfung / Transaktionen

### Money Printer (Anton)

- **Tech:** React, TypeScript, jsPDF
- **Output:** Druckbare PDF-Zeitgutscheine
- **Live:** [money-printer.app](https://money-printer.app)

### Human Money Core (Sebastian Galek)

- **Tech:** Rust
- **Features:**
  - Offline-First digitale Gutscheine
  - Ed25519 Signaturen (wie Web of Trust!)
  - Micro-Chain pro Gutschein
  - Kein zentraler Server, keine Blockchain
- **Integration:** API oder WebAssembly (WASM)

**WICHTIG:** Kein "Portieren" nötig! Human Money Core ist eine fertige Library.

```rust
// Sebastian's Rust-Code kann via WASM im Browser laufen
// Oder: API-Integration zu Desktop-App
```

---

## QR-Code System

### Bereits implementiert

| Feature | Package | Status |
|---------|---------|--------|
| **QR Generation** | qrcode | ✅ In Demo App |
| **QR Scanning** | html5-qrcode | ✅ In Demo App |

### Format

Challenge/Response sind Base64-kodiert:
```
eyJub25jZSI6IjEyMzQ1Njc4OTAiLCJ0aW1lc3RhbXAiOi...
```

---

## Deployment

### Aktuell (MVP)

| Was | Wo | URL |
|-----|-----|-----|
| Web of Trust Demo | GitHub Pages | [it4change.github.io/web-of-trust](https://it4change.github.io/web-of-trust) |
| Real Life Stack | GitHub Pages | [real-life-stack.de](https://real-life-stack.de) |
| Money Printer | GitHub Pages | [money-printer.app](https://money-printer.app) |

### Später (Self-Hosting)

- **Static Site Hosting** – Netlify, Vercel, oder eigener Server
- **Optional Sync Server** – Für Geräte-übergreifende Sync
- **Docker** – Für Communities die selbst hosten wollen

**KEIN komplexes Kubernetes Setup nötig!** Die Apps sind statische Webseiten.

---

## Tests

### Web of Trust Core

- **Framework:** Vitest
- **Test Count:** 64 Tests (alle passing)
- **Mocking:** fake-indexeddb, happy-dom

```bash
cd packages/wot-core
pnpm test
```

---

## Entwicklung

### Monorepo-Struktur

```
web-of-trust/
├── packages/
│   └── wot-core/          # @real-life/wot-core
├── apps/
│   ├── demo/              # Demo App
│   └── landing/           # Landing Page
└── docs/                  # Spezifikation

real-life-stack/
├── packages/
│   └── toolkit/           # @real-life-stack/toolkit
├── apps/
│   ├── reference/         # Reference App
│   ├── landing/           # Landing Page
│   └── prototype/         # UI Experimente
└── docs/                  # Dokumentation
```

### Schnellstart

```bash
# Web of Trust
git clone https://github.com/IT4Change/web-of-trust.git
cd web-of-trust
pnpm install
pnpm dev:demo

# Real Life Stack
git clone https://github.com/IT4Change/real-life-stack.git
cd real-life-stack
pnpm install
pnpm dev:reference
```

---

## Integration mit Timos Vision

### Was bereits existiert

| Timos Modul | Real Life Stack | Status |
|-------------|-----------------|--------|
| Map-Modul | Map Module | ✅ In Toolkit geplant |
| Profil-Modul | Profiles | ✅ In Toolkit geplant |
| Kalender-Modul | Calendar | ✅ In Toolkit geplant |
| Web of Trust | @real-life/wot-core | ✅ Implementiert |
| Wertschöpfung | Human Money Core | 🔄 Integration geplant |

### Was noch kommt

| Timos Modul | Phase | Abhängigkeit |
|-------------|-------|--------------|
| Marktplatz | Phase 3 | Kalender fertig |
| Quest-System | Phase 4 | Marktplatz fertig |
| Gamification | Phase 4+ | Quest-System |
| Health, AI, etc. | Phase 5+ | Alles andere |

---

## Wichtige Links

### Repositories
- **Web of Trust:** https://github.com/IT4Change/web-of-trust
- **Real Life Stack:** https://github.com/IT4Change/real-life-stack
- **Human Money Core:** https://github.com/minutogit/human-money-core

### Live Demos
- **Web of Trust:** https://it4change.github.io/web-of-trust
- **Real Life Stack:** https://real-life-stack.de
- **Money Printer:** https://money-printer.app

### Dokumentation
- **Web of Trust Spec:** https://web-of-trust.de
- **Storybook:** https://real-life-stack.de/storybook

---

## Team

| Person | Fokus |
|--------|-------|
| **Anton** | Web of Trust, Money Printer, Architektur |
| **Sebastian Stein** | Frontend, UX/UI |
| **Mathias Lenz** | QA, Testing, Dokumentation |
| **Ulf Gebhardt** | DevOps, Infrastruktur |
| **Sebastian Galek** | Human Money Core (Rust) |
| **Timo** | Vision, Konzepte |
| **Eli** | AI-Unterstützung, Dokumentation |

---

*Aktualisiert am 6. Februar 2026*
*Basierend auf dem tatsächlichen Stand der Projekte*
