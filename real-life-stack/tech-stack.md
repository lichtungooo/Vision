# Tech-Stack Dokumentation

**Version:** 1.0
**Datum:** 6. Februar 2026
**Status:** ENTWURF - MUSS KOORDINIERT WERDEN!

---

## Übersicht

Dieser Dokumentation beschreibt den geplanten Tech-Stack für **Real-Life Stack / Forge**.

**WICHTIG:** Muss mit Anton (Money-Printer) und Sebastian (E-Minuto) koordiniert werden!

---

## Frontend

### Web
- **Framework:** React 18+
- **Routing:** React Router v6
- **State Management:** Redux Toolkit oder Zustand
- **UI-Komponenten:** Shadcn/ui oder Material-UI
- **Map-Library:** Google Maps API (MVP) → Leaflet.js + OSM (Post-MVP)
- **Floating Windows:** React-Grid-Layout oder Custom-Lösung
- **QR-Code:** react-qr-code (Gen) + react-qr-scanner (Scan)
- **Markdown:** react-markdown
- **Forms:** React Hook Form
- **Styling:** Tailwind CSS oder Styled Components

### Mobile
- **Framework:** React Native
- **Navigation:** React Navigation
- **State Management:** Redux Toolkit oder Zustand (shared mit Web)
- **Map:** react-native-maps (Google Maps oder OSM)
- **QR-Code:** react-native-camera (Scanner)
- **Offline Storage:** AsyncStorage
- **Push Notifications:** Firebase Cloud Messaging (FCM)

### Desktop (optional)
- **Framework:** Electron (React-basiert)
- **Alternative:** Tauri (Rust-basiert, leichtgewichtig)

---

## Backend

### Architektur
- **Microservices:** Jedes Modul = eigener Service
  - quest-service
  - calendar-service
  - marketplace-service
  - value-service (Wertschöpfungs-Modul)
  - avatar-service
  - web-of-trust-service
  - notification-service
  - ai-service

### API
- **GraphQL:** Apollo Server (flexibles Query-System)
- **Alternative:** REST (einfacher, weniger Overhead)

### Backend-Framework
- **Node.js:** Express oder Fastify
- **Alternative:** NestJS (TypeScript-basiert, gut für Microservices)

### Datenbank
- **Relational:** PostgreSQL 15+
  - User-Daten
  - Quests, Events, Marktplatz-Angebote
  - Transaktionen (Wertschöpfung)
  - Web of Trust Connections
- **Geo-Daten:** PostGIS (PostgreSQL Extension)
  - Locations, Map-Icons
- **Cache:** Redis
  - Session-Cache
  - Map-Icon-Cache
  - API-Cache
- **Offline Storage (Client):**
  - IndexedDB (Browser)
  - AsyncStorage (Mobile)

### File Storage
- **S3-kompatibel:** MinIO oder AWS S3
  - Bilder (Quest-Beweise, Avatar-Items)
  - Videos (Quest-Beweise)
  - Dokumente (PDF-Exports)

### Authentifizierung
- **Web of Trust Keypair-Login:**
  - Private/Public Key-Generierung
  - Offline/Online Sync
  - JWT-Token für Session-Management
- **Library:** `libsodium` oder `tweetnacl` (Public-Key Cryptography)

---

## Money-Printer Integration (Anton's Projekt)

**WICHTIG:** Muss mit Anton koordiniert werden!

### Fragen an Anton:
1. **Welche Tech nutzt du?** (React? Backend? Datenbank?)
2. **Welche API-Endpoints hast du?** (REST? GraphQL?)
3. **QR-Code-Format:** Welches Format nutzt du für Token-Scheine?
4. **Deployment:** Wo läuft Money-Printer? (Docker? Kubernetes?)

### Geplante Integration:
- **API-Calls:** Wertschöpfungs-Modul ↔ Money-Printer
- **QR-Code-Standard:** Gemeinsamer QR-Code-Format
- **Token-Scheine:** Physisch (Money-Printer) + Digital (Wertschöpfungs-Modul)

---

## E-Minuto Integration (Sebastian Garleck)

**WICHTIG:** Muss mit Sebastian koordiniert werden!

### Fragen an Sebastian:
1. **Rust-Code:** Können wir den Code portieren? Oder API-Integration?
2. **Welche Features sind CRITICAL?**
3. **Offline/Online Sync:** Wie löst du das?
4. **Blockchain:** Nutzt du Blockchain? Welche?

### Geplante Integration:
- **Option A:** Rust-Code portieren (Node.js oder WebAssembly)
- **Option B:** API-Integration zu Sebastian's Server
- **Entscheidung:** Sebastian fragen!

---

## Web of Trust

**Basis:** web-of-trust Repo (Anton's Projekt)

### Features:
- Keypair-Login (Private/Public Keys)
- Offline/Online Sync
- Trust-Levels (wer vertraut wem)
- Verschlüsselung (QR-Codes, Nachrichten)

### Tech:
- **Public-Key Cryptography:** `libsodium` oder `tweetnacl`
- **Key Storage:** IndexedDB (Browser) + AsyncStorage (Mobile) + Secure Keychain (iOS/Android)

---

## Deployment

### MVP (Phase 1-3):
- **Docker Compose:**
  - Alle Services in einem Docker Compose File
  - PostgreSQL + Redis + Microservices
  - Einfach zu deployen (Single-Server)

### Production (Post-MVP):
- **Kubernetes:**
  - Jedes Modul = eigener Pod
  - Auto-Scaling
  - Load Balancing
- **Spaces können selbst hosten:**
  - Docker Compose Files bereitstellen
  - Dokumentation für Self-Hosting
- **Oder: Managed Hosting:**
  - Wir hosten für Spaces (SaaS-Modell)

---

## CI/CD

- **GitHub Actions:** Automatische Tests + Deployment
- **Tests:** Jest (Unit), Cypress (E2E)
- **Linting:** ESLint + Prettier
- **Pre-Commit Hooks:** Husky

---

## Monitoring & Logging

- **Logging:** Winston oder Pino
- **Monitoring:** Prometheus + Grafana
- **Error Tracking:** Sentry
- **Performance:** Lighthouse (Frontend)

---

## Sicherheit

- **HTTPS:** Pflicht (Let's Encrypt)
- **CORS:** Konfiguriert
- **Rate Limiting:** Express Rate Limit
- **Input Validation:** Joi oder Zod
- **SQL Injection Prevention:** Prepared Statements
- **XSS Prevention:** Content Security Policy (CSP)

---

## Offene Fragen

### 1. GraphQL vs. REST?
- **GraphQL:** Flexibel, aber komplexer
- **REST:** Einfacher, weniger Overhead
- **Entscheidung:** MVP = REST, Post-MVP = GraphQL?

### 2. Monorepo oder Multi-Repo?
- **Monorepo:** Alle Services in einem Repo (Nx oder Turborepo)
- **Multi-Repo:** Jeder Service eigenes Repo
- **Entscheidung:** Monorepo (einfacher für MVP)

### 3. TypeScript oder JavaScript?
- **TypeScript:** Type-Safety, bessere IDE-Unterstützung
- **JavaScript:** Einfacher, schneller zu entwickeln
- **Entscheidung:** TypeScript (langfristig besser)

### 4. React Native oder Flutter?
- **React Native:** Shared Code mit Web (React)
- **Flutter:** Bessere Performance, aber andere Tech
- **Entscheidung:** React Native (Code-Sharing mit Web)

---

## Nächste Schritte

1. **Anton kontaktieren** (Money-Printer Tech-Stack)
2. **Sebastian kontaktieren** (E-Minuto Integration)
3. **Tech-Stack finalisieren** (nach Koordination)
4. **Prototyp aufsetzen** (React + Express + PostgreSQL)
5. **CI/CD Pipeline** einrichten (GitHub Actions)

---

**Status:** ENTWURF - MUSS KOORDINIERT WERDEN!
**Nächster Schritt:** Anton + Sebastian kontaktieren

---

*Erstellt am 6. Februar 2026*
*Der Tech-Stack ist die Basis - alles muss zusammenpassen!* 🛠️
