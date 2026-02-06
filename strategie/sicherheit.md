# Resilienz-Strategie - Architektur für digitale Souveränität

*Wie wir Web of Trust, Real Life Stack und ONE nachhaltig, dezentral und zukunftssicher bauen*

---

## Executive Summary

**Unsere Vision:**
- **Technische Dezentralität** - Resilient, verteilt, organisch
- **Multi-Jurisdiktion** - Global, harmonisch, klug strukturiert
- **Finanzielle Souveränität** - Unabhängig, gemeinschaftsgetragen
- **Datenschutz by Design** - Privatsphäre als Grundrecht

**Die Architektur:** Wir bauen so, dass wir **überall und nirgends** sind. Nicht aus Angst, sondern aus Weisheit. Nicht im Widerstand, sondern im Flow.

---

## Teil 1: Warum Dezentralität?

### Die Prinzipien

**1. Nutzer-Souveränität**
- Jeder besitzt seine eigenen Daten
- Keine zentrale Kontrolle
- Selbstbestimmte digitale Identität

**2. Resilienz durch Verteilung**
- Kein Single Point of Failure
- Organisches Wachstum
- Community-getragen

**3. Privatsphäre als Grundrecht**
- Ende-zu-Ende-Verschlüsselung
- Zero-Knowledge-Architektur
- Datensparsamkeit

**4. Offenheit & Transparenz**
- Open Source
- Nachvollziehbare Prozesse
- Community-Governance

---

## Teil 2: Technische Architektur

**Ziel:** Ein System, das organisch wächst, resilient ist und den Nutzern gehört.

### Grundprinzipien

1. **Kein Single Point of Failure**
   - Keine zentrale Datenbank
   - Keine zentrale Identitätsverwaltung
   - Dezentrale Governance-Struktur

2. **Community-Betrieben**
   - Jeder kann einen Node betreiben
   - Open Source
   - Niedrige Hardware-Anforderungen
   - Einfache Installation

3. **Ende-zu-Ende-Verschlüsselung**
   - Standard, nicht optional
   - Zero-Knowledge-Prinzip
   - User kontrolliert Keys

4. **Selbst-souveräne Identität**
   - DID:key (keine zentrale Registry)
   - User kontrolliert Private Keys
   - Portabel zwischen Systemen

---

### Technologie-Stack

#### 1. **Identität: did:key**

**Status:** ✅ Anton hat das bereits implementiert

**Eigenschaften:**
- Keine zentrale DID-Registry notwendig
- Public Key = DID (selbst-beschreibend)
- User generiert lokal
- Vollständige Kontrolle beim Nutzer
- Portabel und standardisiert

**Beispiel:**
```
did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH
```

---

#### 2. **Storage: Hybrid IPFS + lokales IndexedDB**

**Warum IPFS:**
- Content-addressable Storage
- Peer-to-Peer Verteilung
- Permanenz durch Community-Pinning
- Kosteneffizient (keine zentralen Server)

**Architektur:**
```
User erstellt Post
    ↓
Post wird verschlüsselt (E2E)
    ↓
Verschlüsselter Post → IPFS
    ↓
IPFS gibt Hash zurück (z.B. Qm...)
    ↓
Hash wird im Web of Trust Graph gespeichert
    ↓
Andere User laden Post via Hash
    ↓
IPFS findet ihn auf verteilten Nodes
```

**Vorteile:**
- **Resilient:** Content ist verteilt gespeichert
- **Permanent:** Solange eine Node pinnt, ist Content verfügbar
- **Skalierbar:** Wächst organisch mit Community
- **Kosteneffizient:** Shared Storage

**Für Web of Trust:**
- Profil-Daten → IPFS
- Posts/Attestierungen → IPFS
- Medien (Fotos, Videos) → IPFS
- Graph-Struktur → lokal + CRDT-Sync

**Pinning Services (optional):**
- Pinata, Infura, 4EVERLAND
- Backup für Reliability
- Distributed weltweit

---

#### 3. **Sync: CRDT über P2P**

**Optionen:**

**A. Hypercore Protocol**
- P2P-Datenstruktur (append-only logs)
- Hyperswarm: P2P Networking mit NAT-Durchdringung
- Keine Server erforderlich
- Battle-tested (Keet Messenger)

**B. Automerge + WebRTC**
- CRDT-Library (JavaScript)
- WebRTC für P2P-Verbindung
- Einfache Integration in React

**C. Gun.js**
- Dezentrale Graph-Datenbank
- P2P + optionale Relay-Nodes
- Soziale Netzwerk-erprobt

**D. OrbitDB**
- Datenbank auf IPFS
- CRDT-basiert
- P2P-repliziert

**Empfehlung: Hypercore + IPFS Hybrid**

**Warum:**
- Hypercore für Echtzeit-Sync (Verifications)
- IPFS für Content-Storage
- Kein zentraler Server nötig
- Optional: Community-Relay-Nodes

---

#### 4. **Domains: Blockchain-basiert + traditionell**

**Blockchain-Domains (unzensierbar):**

**Unstoppable Domains:**
- .crypto, .nft, .blockchain, .dao
- Auf Ethereum/Polygon
- Smart Contract-basiert
- Verlinkt zu IPFS Hash

**ENS (Ethereum Name Service):**
- .eth Domains
- Dezentral
- Große Community

**Für unsere Projekte:**
- `wot.crypto` oder `web-of-trust.eth`
- `life.crypto`
- `forge.crypto`
- `one.crypto`

**Zusätzlich: Traditionelle Domains als Gateway**
- weboftrust.org → Leitet zu IPFS
- Benutzerfreundlich für Einsteiger
- Falls Probleme: Direct access via .crypto

---

#### 5. **Apps: Progressive Web App (PWA) first**

**Web-First:**
- Kein App Store-Gatekeeper
- Installierbar auf allen Geräten
- Offline-fähig (Service Workers)
- Updates ohne Approval

**Native Apps (später):**
- iOS + Android
- Backup über F-Droid (alternativer Store)
- APK direkt downloadbar

**Vorteile PWA:**
- Universell zugänglich
- Plattform-unabhängig
- Sofort nutzbar (kein Download)

---

### Dezentrale Architektur - Diagramm

```
┌─────────────────────────────────────────────────────┐
│                  USER DEVICES                       │
│  (Browser / PWA / Native App)                      │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────┐  ┌──────────────┐               │
│  │  IndexedDB   │  │ Private Keys │               │
│  │  (lokal)     │  │  (lokal)     │               │
│  └──────────────┘  └──────────────┘               │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │         IPFS Node (im Browser)               │ │
│  │  - Content Storage                           │ │
│  │  - P2P über WebRTC/WebSockets                │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐ │
│  │    Hypercore/CRDT Sync Engine                │ │
│  │  - P2P-Sync mit anderen Peers                │ │
│  │  - Verifications, Attestierungen, Graph      │ │
│  └──────────────────────────────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
             │               │                │
             ↓               ↓                ↓
    ┌────────────┐   ┌────────────┐   ┌────────────┐
    │ Peer Nodes │   │ Peer Nodes │   │ Peer Nodes │
    │  (Users)   │   │  (Users)   │   │  (Users)   │
    └────────────┘   └────────────┘   └────────────┘
             │               │                │
             └───────────────┴────────────────┘
                          │
                          ↓
        ┌───────────────────────────────────────┐
        │  Optional: Public IPFS Gateways       │
        │  (für Nutzer ohne eigene Node)        │
        │  - Pinata, Infura, Cloudflare         │
        └───────────────────────────────────────┘
                          │
                          ↓
        ┌───────────────────────────────────────┐
        │  Optional: Community Relay Nodes      │
        │  (betrieben von Community!)           │
        │  - NAT-Durchdringung                  │
        │  - Kein Content-Storage               │
        └───────────────────────────────────────┘
```

**Wichtig:**
- Kein zentraler Server unter unserer Kontrolle
- User = Nodes
- Optional Relay/Gateway Nodes = Community-betrieben

---

### Eigenschaften dieser Architektur

| Eigenschaft | Benefit |
|-------------|---------|
| Verteilt | Resilient gegen Ausfälle |
| P2P | Skaliert organisch |
| E2E-Verschlüsselt | Privatsphäre garantiert |
| Open Source | Transparenz & Trust |
| Selbst-souverän | Nutzer besitzt Daten |
| Kosteneffizient | Community trägt Last |

---

## Teil 3: Organisationsstruktur - Multi-Jurisdiktional

**Ziel:** Kluge, globale, nachhaltige Struktur.

### Das Modell: ONE Foundation + Operative Entities

```
┌─────────────────────────────────────────────────────┐
│              ONE FOUNDATION (Schweiz)               │
│  - Gemeinnützige Stiftung                          │
│  - Governance-Body                                  │
│  - Besitzt: Markenrechte, Domains, Repositories    │
│  - Vergibt: Grants an Entwickler                   │
│  - Status: Steuerbefreit (gemeinnützig)            │
└─────────────────────────────────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         │              │              │
         ▼              ▼              ▼
┌────────────────┐ ┌────────────────┐ ┌────────────────┐
│ MONEYPRINTER   │ │ DEVELOPMENT    │ │ OPERATIONS     │
│ (Profitabel)   │ │ (Team)         │ │ (Infrastruktur)│
│                │ │                │ │                │
│ - Zahlt Steuern│ │ - Beste Loc    │ │ - Tech-Hub     │
│ - Legal        │ │ - Team Happy   │ │ - Digital Gov  │
└────────────────┘ └────────────────┘ └────────────────┘
```

---

### Jurisdiktion 1: **Schweiz** (Foundation HQ)

**Warum Schweiz:**

✅ **Stabile Rechtslage**
- Neutral
- Starke Privatsphäre-Tradition
- Tradition gemeinnütziger Stiftungen

✅ **Crypto/Web3-freundlich**
- Crypto Valley (Zug)
- Ethereum Foundation ist dort
- Klare Regulierung

✅ **Steuervorteile**
- Gemeinnützige Stiftungen: steuerfrei
- Zweck: Technologie, Bildung, Gemeinwohl

✅ **Reputation**
- "Swiss Foundation" = Vertrauen
- Hilft bei Fundraising

**Kosten:**
- Initial: ca. 50.000 CHF Stiftungskapital
- Jährlich: ca. 5.000-10.000 CHF (Verwaltung)

**Stiftungszweck:**
> "Förderung von dezentralen Technologien, Privatsphäre, digitaler Souveränität und Community-Building durch Open-Source-Software zum Wohl der Allgemeinheit."

**Was die Stiftung tut:**
- Besitzt Markenrechte (ONE, LIFE, FORGE)
- Verwaltet GitHub Repositories
- Vergibt Grants an Entwickler
- Keine operativen Geschäfte

**Governance:**
- Anfangs: Board (Timo, Anton, + externe)
- Später (Phase 3): DAO-gesteuert

---

### Jurisdiktion 2: **Development Hub** (für Team)

**Kriterien:**
- Gute Lebensqualität
- Stabile Rechtslage
- Tech-freundlich
- Kostengünstig
- Team fühlt sich wohl

**Optionen:**

**Argentinien (Buenos Aires):**
- ✅ Tech-Hub wachsend
- ✅ Günstige Lebenshaltung
- ✅ Gute IT-Infrastruktur
- ✅ Englisch/Spanisch-Community

**Portugal (Lissabon):**
- ✅ EU-Mitglied
- ✅ Tech-Szene etabliert
- ✅ Gutes Wetter
- ✅ Crypto-freundlich

**Estland (Tallinn):**
- ✅ E-Residency Programm
- ✅ Digitale Regierung
- ✅ EU-Mitglied
- ✅ Tech-fokussiert

**Entscheidung:** Je nachdem wo Team sich am wohlsten fühlt.

---

### Jurisdiktion 3: **Operations** (für Infrastruktur)

**Estland (E-Residency):**
- Digitale Identität für Non-Residents
- Firmen remote gründen
- EU-Zugang (SEPA)
- Niedrige Bürokratie

**Verwendung:**
- Optional: OÜ (estnische GmbH)
- Banking (SEPA)
- Digitale Verwaltung

---

### Jurisdiktion 4: **Open Source** (GitHub)

**USA (GitHub/GitLab):**
- Größte Code-Hosting-Plattform
- Starke Open-Source-Community
- Legal Framework etabliert

**Plus Mirrors:**
- GitLab (USA/EU)
- Codeberg (Deutschland)
- Radicle (dezentral, P2P)
- IPFS (Code-Backup)

**Zweck:**
- Code ist öffentlich
- Community Contributions
- Transparenz

---

### Multi-Jurisdiktionale Vorteile

**Warum mehrere Länder:**

1. **Optimierung**
   - Jede Jurisdiktion für ihre Stärken
   - Schweiz: Legal stability & reputation
   - Development: Team happiness
   - Operations: Efficiency

2. **Risiko-Streuung**
   - Nicht von einem Land abhängig
   - Verschiedene Rechtssysteme
   - Verschiedene Kulturen

3. **Globale Perspektive**
   - Keine nationale Bindung
   - ONE ist für alle
   - Wir sind Weltbürger

---

## Teil 4: Finanzielle Souveränität

**Ziel:** Unabhängig, nachhaltig, gemeinschaftsgetragen.

### Strategien

#### 1. **Moneyprinter = Community-Währung**
- Dezentrale Werteaustausch
- Community-owned
- Unabhängig von traditionellem Banking

#### 2. **Krypto-Diversifikation**

**Bitcoin (BTC):**
- Store of Value
- Langfristige Rücklage

**Ethereum (ETH):**
- Smart Contracts
- DeFi-Zugang
- Foundation Operations

**Stablecoins (USDC/DAI):**
- Liquidität
- Tägliche Operations
- Grants auszahlen

**Monero (XMR):**
- Privacy
- Backup-Option

**Storage:**
- Hardware Wallets (Ledger)
- Multi-Sig (3-of-5)
- Cold Storage für Reserves

#### 3. **Donations & Funding**

**Crypto-Donations:**
- BTC, ETH, Monero an Foundation Wallet
- Transparent (Blockchain)
- Global möglich

**Web3 Grants:**
- Gitcoin Grants
- Ethereum Foundation
- Protocol Labs (IPFS)
- Andere Foundations

**Traditional (später):**
- Wenn nötig: Bank-Donations
- Aber: Crypto first

#### 4. **Banking-Strategie**

**Multi-Bank:**
- Nicht alles in einer Bank
- Schweizer Bank (Privatsphäre)
- Crypto-freundliche Banks (Revolut, Wise)
- Backup-Optionen

**Foundation Funds:**
- Multi-Sig Wallet
- Timo, Anton, + 3 Trustees
- Transparente Verwendung

---

## Teil 5: Persönliche Souveränität & Privacy

**Ziel:** Team arbeitet sicher, privat, effektiv.

### Kommunikations-Tools

**Für interne Team-Kommunikation:**

1. **Signal** (Messenger)
   - E2E-verschlüsselt
   - Open Source
   - Verschwindende Nachrichten

2. **Matrix/Element** (Team-Chat)
   - Dezentraler Slack-Ersatz
   - E2E-verschlüsselt
   - Selbst-hostbar

3. **PGP-verschlüsselte Email**
   - ProtonMail oder Tutanota
   - Wichtige Dokumente
   - Backup-Kommunikation

**Für Community:**
- Matrix (öffentliche Channels)
- Discord (falls nötig, aber bewusst einsetzen)
- Telegram (für Reichweite, aber nicht für Sensibles)

---

### Privacy-Tools

**VPN:**
- Mullvad (Zahlung mit Crypto, anonym)
- ProtonVPN (Schweizer)
- Immer aktiv für Team

**Tor:**
- Tor Browser für sensitive Recherche
- Optional: Tor für Development (höhere Anonymität)

**Password Manager:**
- Bitwarden (Open Source, selbst-hostbar)
- 1Password (wenn komfortabler)

**2FA:**
- Hardware Keys (YubiKey)
- TOTP-Apps (Aegis, Authy)

---

### Operational Security (OpSec)

**Best Practices:**

1. **Verschlüsselung always on**
   - Full Disk Encryption (BitLocker, FileVault, LUKS)
   - Encrypted Backups
   - E2E für alle Kommunikation

2. **Access Control**
   - SSH Keys (nicht Passwords)
   - Multi-Factor Authentication
   - Least Privilege Principle

3. **Backup-Strategie**
   - 3-2-1 Rule (3 Kopien, 2 Medien, 1 offsite)
   - Encrypted Cloud (ProtonDrive, Tresorit)
   - Lokale verschlüsselte Backups

4. **Development Security**
   - Code Reviews
   - Dependency Scanning
   - Security Audits (später, bei kritischer Größe)

---

## Teil 6: Wachstums-Phasen & Timeline

### Phase 1: START (2026-2027) - "Fundament legen"

**Fokus:** Technische Grundlagen, dezentrale Architektur

**Milestones:**
- ✅ Dezentrale Architektur geplant
- ⏳ IPFS + Hypercore Integration
- ⏳ DID:key Identität (already done!)
- ⏳ PWA mit Offline-Support
- ⏳ Erste 1.000 User

**Legal:**
- ⏳ Schweizer Foundation gründen (sobald Budget)
- ⏳ Unstoppable Domains sichern
- ⏳ Open Source alles

**Team:**
- ⏳ OpSec etablieren (Signal, VPN)
- ⏳ Development Hub entscheiden

**Strategie:** Klein, fokussiert, technisch exzellent.

---

### Phase 2: WACHSTUM (2027-2030) - "Community-getragen"

**Fokus:** Organisches Wachstum, Community-Nodes, Resilience beweisen

**Milestones:**
- ✅ 100.000+ User
- ✅ Dezentrale Architektur läuft stabil
- ✅ Community betreibt eigene Nodes
- ✅ Erste externe Developer Contributions
- ✅ Moneyprinter ist aktiv

**Legal:**
- ✅ Foundation operativ (Grants vergeben)
- ✅ Multi-Jurisdiktion etabliert

**Team:**
- ✅ Team glücklich am gewählten Standort
- ✅ Erste Hires via Foundation Grants

**Strategie:** Skalieren ohne zu zentralisieren.

---

### Phase 3: KIPPPUNKT (2030+) - "ADAC-Moment"

**Fokus:** 1 Milliarde Menschen = neue Erde ist sichtbar

**Milestones:**
- ✅ 1+ Milliarde User
- ✅ ONE Foundation → DAO-Governance
- ✅ Web of Trust = Standard für Vertrauen
- ✅ LIFE = globale Bewegung
- ✅ FORGE = Infrastructure-Standard

**Legal:**
- ✅ Dezentrale Governance (DAO)
- ✅ Community-owned
- ✅ Transparent & accountable

**Vision:**
- ✅ Eine neue Erde ist geboren
- ✅ Souveränität ist normal
- ✅ Vertrauen ist dezentral
- ✅ ONE

**Strategie:** Wir sind die neue Normalität.

---

## Teil 7: Implementierungs-Roadmap

### Jetzt (diese Woche)

1. ✅ **Strategie dokumentiert** (done!)
2. ⏳ **Team-Meeting:** Strategie besprechen
3. ⏳ **Entscheidung:** Dezentrale Architektur priorisieren?
   - IPFS/Hypercore Timeline?
   - Anton's technische Einschätzung?

---

### Kurzfristig (1-3 Monate)

4. ⏳ **Domains sichern:**
   - Unstoppable: wot.crypto, life.crypto, forge.crypto, one.crypto
   - Traditional: Backups

5. ⏳ **OpSec etablieren:**
   - Team nutzt Signal
   - VPN Standard
   - Password Manager

6. ⏳ **IPFS Integration beginnen:**
   - Proof of Concept
   - IPFS Node im Browser
   - Erste Content-Storage-Tests

---

### Mittelfristig (3-12 Monate)

7. ⏳ **Schweizer Foundation gründen:**
   - Sobald 50k CHF Kapital verfügbar
   - ONE Foundation
   - Gemeinnützig registriert

8. ⏳ **Dezentrale Architektur live:**
   - IPFS für Content
   - Hypercore für Sync
   - PWA installierbar
   - Keine zentralen Server mehr

9. ⏳ **Financial Sovereignty:**
   - Foundation Wallet (Multi-Sig)
   - Crypto-Donations public
   - Erste Grants vergeben

10. ⏳ **Development Hub:**
    - Team-Entscheidung: Wo?
    - Relocation wenn gewünscht
    - Büro/Space (falls nötig)

---

### Langfristig (1-3 Jahre)

11. ⏳ **Community-Nodes:**
    - Anleitung für Node-Betrieb
    - Incentivierung (Moneyprinter?)
    - Dezentrale Infrastruktur wächst

12. ⏳ **DAO-Vorbereitung:**
    - Governance-Struktur designen
    - Smart Contracts vorbereiten
    - Community einbinden

13. ⏳ **Scale:**
    - 1 Million User
    - Global distribution
    - Resilience proof

---

## Teil 8: Die Philosophie - Licht bauen

### Unsere Haltung

**Wir bauen NICHT:**
- ❌ Aus Angst
- ❌ Im Widerstand
- ❌ Als Reaktion
- ❌ Im Kampf

**Wir bauen:**
- ✅ Aus Liebe zur Freiheit
- ✅ Im Vertrauen
- ✅ Als Vision
- ✅ Im Flow

---

### Die Metapher: Wald, nicht Turm

**Zentralisierte Systeme = Turm**
- Ein Fundament
- Kann umfallen
- Sichtbar, angreifbar
- Allein

**Dezentrale Systeme = Wald**
- Viele Wurzeln
- Resilient gegen Stürme
- Organisch, natürlich
- Gemeinschaft

**Wir pflanzen einen Wald.**

---

### Die Energie

**Anton sagt:**
> "Wenn ich sowas denke, dann manifestiere ich das."

**Er hat absolut recht.**

**Deshalb diese Strategie:**
- Einmal gründlich durchdenken ✅
- Klug bauen ✅
- Dann loslassen ✅
- Vertrauen ✅

**Nicht:**
> "Wir müssen uns schützen vor..."

**Sondern:**
> "Wir bauen etwas Schönes, das von Natur aus resilient ist."

---

## Schlusswort

**Diese Strategie ist:**
- ✅ Technisch exzellent
- ✅ Legal durchdacht
- ✅ Finanziell souverän
- ✅ Philosophisch im Licht

**Wir bauen:**
- Nicht gegen etwas
- Sondern FÜR etwas

**FÜR:**
- Freiheit
- Souveränität
- Gemeinschaft
- Vertrauen
- Liebe

**Das ist keine Verteidigungsstrategie.**
**Das ist eine Bau-Strategie.**

**Wir bauen eine neue Erde.**
**Dezentral, organisch, schön.**

**ONE.**

---

*Dokumentiert am 5. Februar 2026*
*Von Eli, für Timo, Anton, und das Team*

---

## Anhang: Technische Details

### A. IPFS Implementation Beispiel

```javascript
// Browser-based IPFS Node
import { create } from 'ipfs-core'

const ipfs = await create({
  repo: 'wot-repo',
  config: {
    Bootstrap: [
      '/dns4/node0.preload.ipfs.io/tcp/443/wss/p2p/...',
      // Community nodes here
    ]
  }
})

// Store encrypted content
const encryptedContent = await encryptPost(post, recipientPublicKey)
const { cid } = await ipfs.add(encryptedContent)

// Share CID in Web of Trust graph
await publishToGraph({
  type: 'post',
  cid: cid.toString(),
  timestamp: Date.now()
})
```

---

### B. DID:key Implementation (bereits done!)

```javascript
// Anton's existing implementation
import { generateKeyPair } from '@transmute/did-key.js'

const didKey = await generateKeyPair('Ed25519')
// did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH

// User owns this completely
// No central registry
// Portable across systems
```

---

### C. Multi-Sig Wallet Beispiel

```javascript
// Gnosis Safe (Ethereum)
// 3-of-5 Multi-Sig

Signers:
1. Timo
2. Anton
3. External Trustee 1
4. External Trustee 2
5. External Trustee 3

// Any transaction requires 3 signatures
// Transparent on blockchain
// Secure & distributed control
```

---

### D. Blockchain Domain Setup

```bash
# Unstoppable Domains
1. Buy wot.crypto on unstoppabledomains.com
2. Set IPFS hash as resolution
3. Configure in app to resolve:
   - If wot.crypto → resolve IPFS hash
   - Display content from IPFS

# Result: Uncensorable domain pointing to decentralized content
```

---

### E. Schweizer Stiftung - Struktur

```
ONE FOUNDATION
├── Stiftungsrat (Board)
│   ├── Timo (Founder)
│   ├── Anton (Technical Lead)
│   └── External Board Members (2-3)
│
├── Assets
│   ├── Markenrechte (ONE, LIFE, FORGE)
│   ├── Domains (.crypto + traditional)
│   ├── GitHub Repositories (Owner)
│   └── Crypto Wallet (Multi-Sig)
│
├── Activities
│   ├── Developer Grants
│   ├── Research Funding
│   ├── Community Support
│   └── Open Source Stewardship
│
└── Governance (Phase 3)
    └── DAO (Community-controlled)
```

---

### F. Ressourcen & Links

**Dezentrale Technologien:**
- IPFS: https://ipfs.io
- Hypercore: https://hypercore-protocol.org
- Automerge: https://automerge.org
- Gun.js: https://gun.eco

**Identität:**
- DID Spec: https://w3c.github.io/did-core/
- did:key Method: https://w3c-ccg.github.io/did-method-key/

**Blockchain Domains:**
- Unstoppable Domains: https://unstoppabledomains.com
- ENS: https://ens.domains

**Schweizer Stiftungen:**
- Stiftungsrecht Schweiz: https://www.eda.admin.ch
- Crypto Valley Association: https://cryptovalley.swiss

**Privacy Tools:**
- Signal: https://signal.org
- Matrix: https://matrix.org
- Mullvad VPN: https://mullvad.net
- ProtonMail: https://proton.me

---

*Ende der Resilienz-Strategie*

