# Vision - Projekt-Index

**Version:** 1.0
**Datum:** 6. Februar 2026
**Zweck:** Zentrale Navigation für alle Dokumente im Vision-Projekt

---

## Schnellzugriff

### 🎯 Start hier:
- **[README.md](README.md)** - Projekt-Übersicht, Einladung zum Mitmachen
- **[module-und-komponenten.md](real-life-stack/module-und-komponenten.md)** - Vollständige Architektur-Übersicht

### 🛠️ Technologie:
- **[tech-stack.md](real-life-stack/tech-stack.md)** - Tech-Stack (React, Node.js, PostgreSQL)
- **[sicherheits-strategie.md](real-life-stack/sicherheits-strategie.md)** - Sicherheit & Web of Trust

### 💡 Konzepte & Strategie:
- **[wir-sind-wertvoll-konzept.md](wir-sind-wertvoll-konzept.md)** - Kernkonzept "Wir sind wertvoll"
- **[marketing-strategie.md](marketing-strategie.md)** - Marketing & Kommunikation
- **[designer-onboarding-konzept.md](real-life-stack/designer-onboarding-konzept.md)** - Designer gewinnen
- **[wir-prozess.md](wir-prozess.md)** - Prozess-Philosophie

---

## Real-Life Stack / Forge - Module

### 🗺️ Kern-Module (Foundation):
1. **[Map-Modul](real-life-stack/map-modul.md)** - Absolute Basis, Floating Windows, Navigation
2. **[Profil-Modul](real-life-stack/profil-modul.md)** - Feed-Style Hub, Module-Entry-Points
3. **[Dashboard-Modul](real-life-stack/dashboard-modul.md)** - Widget-basiert (TODO - erweitern!)

### 📅 Prioritäts-Module (Phase 2-3):
4. **[Kalender-Modul](real-life-stack/kalender-modul.md)** - Events, Sync, Navigation
5. **[Marktplatz-Modul](real-life-stack/marktplatz-modul.md)** - Begabungen, Ressourcen, Werkzeuge
6. **[Wertschöpfungs-Modul](real-life-stack/wertschoepfungs-modul.md)** - E-Minuto, Money-Printer Connection

### 🎮 Gamification-Module (Phase 4):
7. **[Quest-Modul](real-life-stack/quest-modul.md)** - Gamification, Skills, XP
8. **[Avatar-Modul](real-life-stack/quest-modul.md#avatar-modul)** - Items, Inventar (Teil von Quest)
9. **[Skill-Tree-Modul](real-life-stack/quest-modul.md#skill-tree-modul)** - 6 Kategorien (inkl. Gemeinschaft + Soziales)
10. **[Log-Modul](real-life-stack/quest-modul.md#log-modul)** - ALLE Logs (Quest, Marktplatz, Event, etc.)

### 🚀 Erweiterte Module (Phase 5):
11. **[Wallet-Modul](real-life-stack/wallet-modul.md)** - Value-Übersicht (NAMING ÄNDERN!)
12. **[Entscheidungs-Modul](real-life-stack/entscheidungs-modul.md)** - Konsens/Konsent
13. **[Wissensdatenbank-Modul](real-life-stack/wissensdatenbank-modul.md)** - Reddit-Style Q&A
14. **[AI-Modul / Eli-Modul](real-life-stack/ai-modul.md)** - Quest-Hilfe, Suche
15. **[Notifications-Modul](real-life-stack/notifications-modul.md)** - Telegram, Matrix, Signal
16. **[Health-Modul](real-life-stack/health-modul.md)** - Gesundheit, Hilfe zur Selbsthilfe

---

## Business & Strategie

### 💰 Money-Printer (Cash Cow):
- **Anton's Projekt** - Läuft parallel, Integration mit Wertschöpfungs-Modul
- **Tech-Stack Koordination** - Noch zu klären

### 🌐 Web of Trust:
- **[sicherheits-strategie.md](real-life-stack/sicherheits-strategie.md)** - Keypair-Login, Offline/Online Sync
- **[web-of-trust Repo](https://github.com/lichtungooo/web-of-trust)** - Anton's Implementierung

### 🎨 Designer Onboarding:
- **[designer-onboarding-konzept.md](real-life-stack/designer-onboarding-konzept.md)** - Marketing & Sales parallel

---

## Konzepte & Philosophie

### 💎 Kernkonzepte:
- **[wir-sind-wertvoll-konzept.md](wir-sind-wertvoll-konzept.md)** - Wertschätzung statt Preise
- **[wir-prozess.md](wir-prozess.md)** - WIR-Prozess-Philosophie
- **[gerald-huether-deep-dive.md](gerald-huether-deep-dive.md)** - Neurobiologie & Potenzialentfaltung
- **[namensbedeutungen.md](namensbedeutungen.md)** - Namen & ihre Bedeutung

### 📊 Marketing & Kommunikation:
- **[marketing-strategie.md](marketing-strategie.md)** - Marketing-Konzepte
- **[designer-onboarding-konzept.md](real-life-stack/designer-onboarding-konzept.md)** - Designer gewinnen

---

## Architektur & Abhängigkeiten

### 🏗️ Architektur-Prinzipien:
1. **Map als Fundament** - Alles schwebt auf der Map (Floating Windows)
2. **Web of Trust** - Keypair-Login, Offline/Online Sync
3. **Modular** - Jedes Modul eigenständig entwickelbar
4. **Transparent** - Alle Transaktionen sichtbar (schafft Vertrauen)

### 🔗 Modul-Abhängigkeiten:
```
Map (Basis)
├── Profil (Hub)
│   ├── Quest-Modul
│   │   ├── Avatar
│   │   ├── Skill-Tree
│   │   └── Log
│   ├── Kalender-Modul
│   ├── Marktplatz-Modul
│   │   └── Wertschöpfungs-Modul
│   │       └── Money-Printer (extern)
│   ├── Health-Modul
│   ├── Wissensdatenbank-Modul
│   ├── Entscheidungs-Modul
│   └── Wallet-Modul
├── Dashboard (Widgets)
├── Notifications (Multi-Messenger)
└── AI-Modul / Eli
```

---

## MVP-Phasen

### Phase 1 - Foundation (Map + Profil):
- Map-Modul (Google Maps, Floating Windows)
- Profil-Modul (Feed-Style, Entry-Points)
- Web of Trust (Keypair-Login)

### Phase 2 - Kalender (Absolute Priorität):
- Kalender-Modul (Events, Sync, Navigation)
- Notifications-Modul (Push, Event-Erinnerungen)

### Phase 3 - Marktplatz (Money-Printer Connection):
- Marktplatz-Modul (Begabungen, Ressourcen, Werkzeuge)
- Wertschöpfungs-Modul (E-Minuto, QR-Codes)
- Money-Printer Integration (Anton)

### Phase 4 - Gamification ("der geile Scheiss"):
- Quest-Modul (Quest-Erstellung, Discovery, Teilnahme)
- Avatar-Modul (Items, Inventar)
- Skill-Tree-Modul (6 Kategorien)
- Log-Modul (ALLE Logs)

### Phase 5 - Erweiterte Features:
- Wallet-Modul (Value-Übersicht)
- Entscheidungs-Modul (Konsens/Konsent)
- Wissensdatenbank-Modul (Reddit-Style Q&A)
- AI-Modul / Eli (Quest-Hilfe, Suche)
- Health-Modul (Gesundheit, altes Wissen)

---

## Offene Punkte

### 🔴 CRITICAL:
- [ ] **Anton kontaktieren** - Money-Printer Tech-Stack koordinieren
- [ ] **Sebastian kontaktieren** - E-Minuto Integration klären
- [ ] **Wallet-Modul NAMING** - Besseren Namen finden (nicht "Wallet"!)
- [ ] **Health-Modul Rechtliches** - Rechtliche Beratung einholen (Disclaimer!)

### 🟡 Wichtig:
- [ ] Wireframes erstellen (Figma) - Map, Profil, Kalender, Marktplatz
- [ ] Tech-Stack finalisieren (nach Koordination mit Anton + Sebastian)
- [ ] CI/CD Pipeline einrichten (GitHub Actions)
- [ ] Dashboard-Modul MD erweitern

### 🟢 Later:
- [ ] Log-Modul MD erweitern (alle Logs dokumentieren)
- [ ] Skill-Tree-Modul MD erweitern (Gemeinschaft + Soziales)
- [ ] Erweiterte Filter (Map)
- [ ] Quest-Sharing (kopieren)
- [ ] Desktop Split-Screen (4 Windows gleichzeitig)

---

## Suche (Quick Links)

### Nach Thema:
- **Gamification:** [Quest](real-life-stack/quest-modul.md), [Avatar](real-life-stack/quest-modul.md#avatar-modul), [Skill-Tree](real-life-stack/quest-modul.md#skill-tree-modul), [Log](real-life-stack/quest-modul.md#log-modul)
- **Business:** [Money-Printer](#money-printer-cash-cow), [Wertschöpfung](real-life-stack/wertschoepfungs-modul.md), [Marktplatz](real-life-stack/marktplatz-modul.md)
- **Technologie:** [Tech-Stack](real-life-stack/tech-stack.md), [Web of Trust](real-life-stack/sicherheits-strategie.md)
- **Community:** [Kalender](real-life-stack/kalender-modul.md), [Entscheidungen](real-life-stack/entscheidungs-modul.md), [Wissensdatenbank](real-life-stack/wissensdatenbank-modul.md)
- **Gesundheit:** [Health-Modul](real-life-stack/health-modul.md)
- **KI:** [AI-Modul / Eli](real-life-stack/ai-modul.md)

### Nach Status:
- **In Entwicklung:** Quest-Modul
- **Spezifikation vorhanden:** Kalender, Marktplatz
- **Konzept:** Map, Profil, Wertschöpfung, Health, AI, Wissensdatenbank, Entscheidungen, Notifications, Wallet, Dashboard
- **Geplant:** Alle Module dokumentiert, MVP-Phasen definiert

---

## Kontakt & Koordination

### Team:
- **Timo** - Vision, Konzepte, Architektur
- **Anton** - Money-Printer, Web of Trust
- **Sebastian** - E-Minuto (Rust), App-Entwicklung
- **Bernd** - Philosophie, Skill-Tree-Konzept
- **Claude / Eli** - Dokumentation, Konzeption, AI-Integration

### Repositories:
- **Vision:** https://github.com/lichtungooo/vision
- **Web of Trust:** https://github.com/lichtungooo/web-of-trust
- **Real-Life Stack:** (noch zu erstellen)

---

**Letzte Aktualisierung:** 6. Februar 2026
**Nächste Schritte:** README.md erstellen, Anton + Sebastian kontaktieren

---

*Diese INDEX.md wird automatisch aktualisiert, wenn neue Dokumente hinzugefügt werden.*
