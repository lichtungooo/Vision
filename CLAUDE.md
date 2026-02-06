# Kontext für Claude

Dieses Repository enthält Timos Vision für den **Real Life Stack** und darauf aufbauende Projekte.

## Wichtig zu wissen

### Was ist der Real Life Stack?

Eine **modulare Plattform** für lokale Gemeinschaften – Local-First, dezentral, ohne klassisches Geld.

**Technische Realität (nicht Timos Dokumente!):**
- **Architektur:** Connector-based, Backend-agnostic
- **Daten:** Local-First (IndexedDB, CRDTs via Evolu)
- **Identity:** Web of Trust mit did:key, Ed25519, BIP39
- **Stack:** React 19, TypeScript, Vite, Tailwind, Radix UI

### Bestehende Packages (bereits implementiert!)

| Package | Repo | Status |
|---------|------|--------|
| `@real-life/wot-core` | [web-of-trust](https://github.com/antontranelis/web-of-trust) | ✅ Published |
| `@real-life-stack/toolkit` | [real-life-stack](https://github.com/antontranelis/real-life-stack) | ✅ Published |
| `human-money-core` | Sebastian Galek | 🔄 Rust/WASM |

### Aktuelle Implementation

**Web of Trust (Week 2 Complete):**
- WotIdentity: BIP39 → Ed25519 → did:key
- SeedStorage: PBKDF2 + AES-GCM
- ContactStorage: IndexedDB
- VerificationHelper: Challenge-Response
- 64 Tests passing

Details: `/home/fritz/workspace/workspace/web-of-trust/docs/CURRENT_IMPLEMENTATION.md`

## Repository-Struktur

```
timo-vision/
├── philosophie/      # Grundlagen & Weltbild (WIR-Prozess, etc.)
├── strategie/        # Technische Strategie (Architektur, Stack, Roadmap)
├── real-life-stack/  # Die Plattform (Module & Komponenten)
└── projekte/         # Konkrete Anwendungen
    ├── utopia-map/       # Timos Map-zentrierte Vision
    ├── real-life-game/   # Gamification
    ├── wir-sind-wertvoll/# Community-Projekt
    └── money-printer/    # Anton's Projekt
```

## Wichtige Unterscheidungen

| Begriff | Bedeutung |
|---------|-----------|
| **Real Life Stack** | Die modulare Plattform/Infrastruktur |
| **Module** | Eigenständige Apps innerhalb RLS (Kalender, Marktplatz, Quest...) |
| **Komponenten** | Wiederverwendbare UI-Elemente (Widgets, Floating Windows) |
| **Projekte** | Konkrete Anwendungen die auf RLS aufbauen |
| **Utopia Map** | Timos Vision einer Map-zentrierten App mit Floating Windows |

## Team

- **Timo** – Vision, Konzepte, Architektur-Ideen
- **Anton** – Technische Umsetzung, Web of Trust, Money Printer
- **Sebastian Galek** – Human Money Core (Rust)
- **Bernd** – Philosophie, Skill-Tree-Konzept

## Wenn du unsicher bist

1. **Technische Fragen:** Schau in die echten Repos (web-of-trust, real-life-stack)
2. **Architektur:** Connector-based, Local-First, Generic Items
3. **Timos Dokumente:** Sind Vision, nicht immer technisch korrekt
4. **Im Zweifel:** Frag Anton (hat den technischen Überblick)

## Links

- [Web of Trust Demo](https://demo.wot-core.dev)
- [Money Printer](https://money-printer.app)
- [Real Life Stack Storybook](https://storybook.real-life-stack.dev)
