# Designer Contest - Komplettes Konzept

*Money-Printer Template Design Wettbewerb*

**Version:** 1.0
**Datum:** 5. Februar 2026
**Status:** Konzeptphase

---

## Executive Summary

**Vision:** Wir laden 10 talentierte Designer ein, außergewöhnliche Money-Printer Templates zu erstellen. Die Designer erhalten ein professionelles Onboarding, ein intuitives Design-Studio und ein eigenes Dashboard zur Verwaltung ihrer Submissions.

**Ziel:**
- 10-20 hochwertige, diverse Templates für verschiedene Use-Cases
- Aufbau einer Designer-Community
- Templates für Launch (März 2026) bereit

**Strategie:**
- Exklusive Einladung (nicht öffentlicher Contest)
- Professionelles Tooling (Designer-Dashboard + Studio)
- Faire Konditionen (Credit, Portfolio-Link, optional Revenue-Share)

---

## Inhaltsverzeichnis

1. [Kategorien & Zielgruppen](#kategorien--zielgruppen)
2. [Template-Anforderungen](#template-anforderungen)
3. [Designer Journey](#designer-journey)
4. [Technische Architektur](#technische-architektur)
5. [Designer-Dashboard](#designer-dashboard)
6. [Design-Studio (Konfigurator)](#design-studio-konfigurator)
7. [Integration in Money-Printing App](#integration-in-money-printing-app)
8. [Datenmodell](#datenmodell)
9. [Admin-View (für dich)](#admin-view-für-dich)
10. [Timeline & Roadmap](#timeline--roadmap)

---

## Kategorien & Zielgruppen

### Die Kategorien - Was macht Sinn?

Basierend auf den Personas aus dem Kommunikationskonzept und den größten Verkaufspotenzialen:

#### **1. Classic Time Vouchers** (Primär)
**Use-Case:** "Der Netzwerker" - Persönliche Zeitgutscheine
**Wert-Typen:** 1h, 5h, 10h, Custom
**Zielgruppe:** Selbstständige, Kreative, Freiberufler
**Verkaufspotenzial:** ★★★★★ (Kernprodukt)

**Design-Anforderungen:**
- Professionell, wertig, banknotenähnlich
- Platz für Portrait (Oval/Kreis)
- Seriöser Look, nicht zu verspielt

---

#### **2. Handwerk & Trade Cards** (Sekundär)
**Use-Case:** Handwerker, lokale Dienstleister
**Wert-Typen:** "1 Stunde Arbeit", "Reparatur", "Beratung"
**Zielgruppe:** Schreiner, Elektriker, Mechaniker, etc.
**Verkaufspotenzial:** ★★★★☆ (Großes Potenzial, wenig Konkurrenz)

**Design-Anforderungen:**
- Robust, handwerklich, "Made with hands"
- Werkzeug-Symbolik (dezent)
- Vertrauenswürdig, bodenständig

---

#### **3. Business Vouchers** (Primär)
**Use-Case:** B2B-Networking, Corporate Gifting
**Wert-Typen:** "1 Beratungsstunde", "Workshop", "Mentoring"
**Zielgruppe:** Coaches, Berater, Agenturen
**Verkaufspotenzial:** ★★★★★ (Hohes Budget, Bulk-Orders)

**Design-Anforderungen:**
- Clean, minimalistisch, premium
- Platz für Logo (optional)
- International verwendbar (weniger kulturspezifisch)

---

#### **4. Event Tickets** (Tertiär)
**Use-Case:** Workshops, Community-Events, private Feiern
**Wert-Typen:** "Eintritt", "VIP-Zugang", "2 Personen"
**Zielgruppe:** Veranstalter, Community-Builder
**Verkaufspotenzial:** ★★★☆☆ (Nische, aber interessant)

**Design-Anforderungen:**
- Festlich, einladend, event-typisch
- Platz für Event-Info (Datum, Ort optional)
- QR-Code prominent

---

#### **5. Gift & Thank-You Cards** (Sekundär)
**Use-Case:** "Die Dankbare" - Wertschätzung ausdrücken
**Wert-Typen:** "Ein Dankeschön", "Für deine Hilfe", Custom
**Zielgruppe:** Alle Altersgruppen, emotionaler Use-Case
**Verkaufspotenzial:** ★★★★☆ (Emotionaler Mehrwert = höhere Zahlungsbereitschaft)

**Design-Anforderungen:**
- Warm, persönlich, nicht zu kitschig
- Platz für persönliche Nachricht
- Verschiedene Stile (elegant, verspielt, minimalistisch)

---

#### **6. Community Currencies** (Tertiär)
**Use-Case:** Tauschringe, Nachbarschafts-Netzwerke
**Wert-Typen:** "1 Stunde", "Punktewährung", Custom
**Zielgruppe:** "Die Tauschring-Aktive"
**Verkaufspotenzial:** ★★★☆☆ (Klein aber leidenschaftlich)

**Design-Anforderungen:**
- Gemeinschaftlich, lokal, identitätsstiftend
- Platz für Community-Logo/Name
- Kann bunter/spielerischer sein

---

### Priorisierung für den Contest

**MUST-HAVE (Mindestens je 2 Templates):**
1. Classic Time Vouchers
2. Business Vouchers
3. Gift & Thank-You Cards

**NICE-TO-HAVE (je 1-2 Templates):**
4. Handwerk & Trade Cards
5. Event Tickets

**EXPERIMENTAL (optional):**
6. Community Currencies

**Total:** 10 Designer × 1-2 Templates = 10-20 Templates

---

## Template-Anforderungen

### Was muss ein Template haben?

Basierend auf der bestehenden Template-Spezifikation:

#### **1. Pflicht-Elemente**

**Visuelle Assets:**
- ✅ **Background** (Hintergrund-Design, WebP/PNG, 3633x1920px @ 600 DPI)
- ✅ **Front Frame** (optional, aber empfohlen)
- ✅ **Back Frame** (optional, aber empfohlen)
- ✅ **Badge-System** (Wert-Badges: 1h, 5h, 10h oder äquivalent)

**Technische Bereiche (Template-Schema):**
- ✅ **Portrait-Bereich** (Position, Form: Oval/Kreis/Rechteck)
- ✅ **Wert-Feld** (Position für Stundenzahl/Wert-Text)
- ✅ **Text-Felder** (Name, Kontaktdaten, Versprechen)
- ✅ **Seriennummer** (Position, Style)
- ✅ **QR-Code** (Position, Größe)

**Sicherheitsmerkmale (für Designer zu definieren):**
- ✅ **Silber-Folien-Bereich** (wo wird Silber aufgeklebt?)
- ✅ **Hologramm-Bereich** (optional, für Premium-Designs)
- ✅ **Micro-Text** (optional, aber cool für Authentizität)
- ✅ **Wasserzeichen-Bereich** (optional)

---

#### **2. Template-JSON-Struktur**

Designer definiert in `template.json`:

```json
{
  "id": "handcraft-voucher",
  "version": "1.0.0",
  "name": "Handcraft Voucher",
  "type": "time-voucher",
  "category": "handwerk",

  "designer": {
    "name": "Designer Name",
    "url": "https://portfolio.com",
    "email": "designer@email.com"
  },

  "assets": {
    "background": "/templates/handcraft/background.webp",
    "frontFrame": "/templates/handcraft/front_frame.webp",
    "backFrame": "/templates/handcraft/back_frame.webp",
    "badges": {
      "type": "image",
      "variants": [
        { "value": 1, "image": "/templates/handcraft/badge_1h.png" },
        { "value": 5, "image": "/templates/handcraft/badge_5h.png" },
        { "value": 10, "image": "/templates/handcraft/badge_10h.png" }
      ]
    }
  },

  "schema": {
    "fields": [
      {
        "id": "portrait",
        "type": "image",
        "label": "Dein Portrait",
        "required": true,
        "config": {
          "shape": "ellipse",
          "features": {
            "zoom": true,
            "pan": true,
            "engraving": true,
            "backgroundRemoval": true
          }
        }
      },
      {
        "id": "hours",
        "type": "select",
        "label": "Stunden",
        "required": true,
        "config": {
          "options": [
            { "value": 1, "label": "1 Stunde" },
            { "value": 5, "label": "5 Stunden" },
            { "value": 10, "label": "10 Stunden" }
          ]
        }
      },
      {
        "id": "name",
        "type": "text",
        "label": "Dein Name",
        "required": true,
        "validation": { "maxLength": 50 }
      }
      // ... weitere Felder
    ]
  },

  "layout": {
    "dimensions": {
      "width": 3633,
      "height": 1920,
      "dpi": 600
    },
    "front": {
      "layers": [
        { "type": "background", "source": "background" },
        { "type": "frame", "source": "frontFrame" },
        { "type": "field", "fieldId": "portrait", "position": { "x": 500, "y": 500 }, "clip": "ellipse" },
        { "type": "badges", "fieldId": "hours", "positions": [{ "x": 2800, "y": 960 }] },
        { "type": "field", "fieldId": "name", "position": { "x": 1816, "y": 1400 }, "style": { "fontSize": 48, "fontFamily": "serif", "color": "#2a3a2a" } }
        // ... weitere Layer
      ]
    },
    "back": {
      "layers": [
        // Rückseiten-Layout
      ]
    }
  },

  "security": {
    "silverFoilArea": {
      "front": [
        { "type": "rectangle", "x": 100, "y": 100, "width": 200, "height": 100 }
      ],
      "back": []
    },
    "hologramArea": null,
    "serialNumberPosition": { "side": "back", "x": 3400, "y": 1800 }
  }
}
```

---

#### **3. Usability-Anforderungen**

**Für den Endnutzer (der den Schein bestellt):**
- ✅ Alle Felder klar erkennbar und lesbar
- ✅ Portrait prominent platziert
- ✅ Wert (Stunden) sofort erkennbar
- ✅ Nicht überladen (max. 5-7 Informationscluster)
- ✅ QR-Code gut scannbar (mind. 200x200px)

**Für den Drucker (Print-Ready):**
- ✅ 3mm Bleed enthalten
- ✅ Schnittmarken definiert
- ✅ Silber-Folien-Bereiche klar markiert
- ✅ Hochauflösend (600 DPI)

**Für den Designer (Workflow):**
- ✅ Einfach zu konfigurieren
- ✅ Template-JSON gut strukturiert
- ✅ Assets optimiert (<2MB gesamt)

---

### Technische Specs (für Designer-Briefing)

**Canvas-Größe:**
- 3633 × 1920 Pixel (600 DPI)
- Physisch: 138.6mm × 72.9mm (Scheckkartenformat + Bleed)

**Farbraum:**
- RGB für Digital-Preview
- CMYK-Fähig (für Druck)
- Silver-Foil-Ready (Bereiche müssen definiert werden)

**Dateiformate:**
- Background/Frames: WebP oder PNG
- Badges: PNG mit Transparenz
- Fonts: WOFF2/WOFF/TTF (müssen inkludiert werden, falls custom)

**Performance:**
- Gesamtgröße aller Assets: <5MB
- Background: <2MB
- Frames: <1MB jeweils
- Badges: <500KB gesamt

---

## Designer Journey

### Die komplette User Journey eines Designers

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DESIGNER JOURNEY                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. EINLADUNG                                                       │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Designer erhält persönliche E-Mail-Einladung           │  │
│     │ • Link zur Landingpage: contest.moneyprinter.app         │  │
│     │ • Unique Invite-Code im Link                             │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  2. LANDINGPAGE & ONBOARDING                                        │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Hero: "Du bist eingeladen zum Designer Contest"        │  │
│     │ • Intro-Video (2 Min): Was ist Money-Printer?            │  │
│     │ • Beispiele: Bestehende Templates (Classic)              │  │
│     │ • CTA: "Jetzt teilnehmen" → Account erstellen            │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  3. ACCOUNT-ERSTELLUNG                                              │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • E-Mail + Passwort (oder Google/GitHub OAuth)           │  │
│     │ • Profil: Name, Portfolio-URL, Bio                       │  │
│     │ • Skills: Design-Tools (Figma, Illustrator, Photoshop)  │  │
│     │ • Portfolio-Upload (optional, 3-5 Arbeitsproben)        │  │
│     │ • Kategorie-Wahl: Welche Kategorie interessiert dich?   │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  4. DESIGNER-DASHBOARD                                              │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Willkommen-Screen mit Tutorial                         │  │
│     │ • "Deine Templates" (leer am Anfang)                     │  │
│     │ • CTA: "Neues Template erstellen"                        │  │
│     │ • Sidebar: Ressourcen, Briefing, FAQ, Support           │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  5. TEMPLATE-ERSTELLUNG (Design Studio)                            │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ STEP 1: Kategorie & Basics                               │  │
│     │   • Kategorie wählen (Time/Business/Event/etc.)         │  │
│     │   • Template-Name eingeben                               │  │
│     │   • Kurzbeschreibung                                     │  │
│     │                                                           │  │
│     │ STEP 2: Assets hochladen                                 │  │
│     │   • Background (Drag & Drop, Max 2MB)                   │  │
│     │   • Front Frame (optional)                               │  │
│     │   • Back Frame (optional)                                │  │
│     │   • Badges (1h, 5h, 10h - je ein PNG)                   │  │
│     │   • Preview: Live-Vorschau beim Upload                  │  │
│     │                                                           │  │
│     │ STEP 3: Bereiche definieren (Drag & Drop Editor)        │  │
│     │   • Portrait-Bereich: Ziehen, Größe anpassen, Form wählen│  │
│     │   • Wert-Badge: Position definieren                     │  │
│     │   • Text-Felder: Name, Email, Phone, Description        │  │
│     │   • Seriennummer: Position & Style                      │  │
│     │   • QR-Code: Position & Größe                           │  │
│     │   • Sicherheitsmerkmale:                                │  │
│     │     - Silber-Folien-Bereich markieren                   │  │
│     │     - Hologramm-Position (optional)                     │  │
│     │                                                           │  │
│     │ STEP 4: Styling & Feintuning                            │  │
│     │   • Text-Styles: Font, Size, Color                      │  │
│     │   • Hue-Shift-Option (Farbvarianten)?                   │  │
│     │   • Portrait-Optionen: Engraving? BG-Removal?           │  │
│     │                                                           │  │
│     │ STEP 5: Preview & Test                                   │  │
│     │   • Live-Preview mit Test-Daten                         │  │
│     │   • Front & Back ansehen                                 │  │
│     │   • Test-PDF generieren                                  │  │
│     │   • Mobile-Preview (wie sieht es auf Phone aus?)        │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  6. SUBMISSION                                                      │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Finale Checkliste:                                     │  │
│     │   ✓ Alle Assets hochgeladen?                            │  │
│     │   ✓ Bereiche definiert?                                 │  │
│     │   ✓ Test-PDF sieht gut aus?                             │  │
│     │ • Button: "Template einreichen"                         │  │
│     │ • Status: "Submitted" → Wartet auf Review               │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  7. REVIEW-PROZESS                                                  │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Designer sieht Status im Dashboard:                   │  │
│     │   "In Review" (Timo schaut es an)                       │  │
│     │ • Notification wenn Feedback kommt:                     │  │
│     │   "Changes Requested" → Designer bekommt Kommentare     │  │
│     │   "Approved" → Template ist freigegeben                 │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  8. APPROVED & PUBLISHED                                            │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Template ist jetzt live im Shop                       │  │
│     │ • Designer erhält Bestätigung + Portfolio-Link          │  │
│     │ • Dashboard zeigt: "Published" Status                   │  │
│     │ • Optional: Revenue-Share-Tracking (später)             │  │
│     └───────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Technische Architektur

### Wo lebt das System?

**Integration in bestehende Money-Printing App:**
- **NICHT** separate Landingpage
- **Integriert** in die Money-Printing App (`money-printer-shop`)
- **Neue Routen:**
  - `/designer` - Designer-Portal Einstieg
  - `/designer/onboarding` - Onboarding-Flow
  - `/designer/dashboard` - Dashboard
  - `/designer/studio` - Design Studio (Template-Editor)
  - `/designer/templates/:id` - Template bearbeiten

---

### Tech-Stack

**Frontend:**
- Next.js (bereits verwendet in `money-printer-shop`)
- React (bereits vorhanden)
- TypeScript
- Tailwind CSS (bereits vorhanden)

**Backend:**
- Next.js API Routes (Serverless Functions)
- Oder: Separate Node.js Backend (falls mehr Kontrolle gewünscht)

**Datenbank:**
- **Supabase** (empfohlen)
  - PostgreSQL-basiert
  - Auth built-in (Email/Password, OAuth)
  - Storage für Assets (Bilder, PDFs)
  - Real-time subscriptions
  - Row-Level Security
- Alternative: **Firebase** (aber Supabase passt besser)

**File Storage:**
- Supabase Storage oder AWS S3
- Für: Template-Assets (Background, Frames, Badges)

**Auth:**
- Supabase Auth
- Supports: Email/Password, Google, GitHub OAuth

---

### System-Architektur-Diagramm

```
┌─────────────────────────────────────────────────────────────────┐
│                    MONEY-PRINTER SHOP (Next.js)                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────┐       ┌────────────────────────┐   │
│  │   PUBLIC SHOP          │       │   DESIGNER PORTAL      │   │
│  │   (existing)           │       │   (NEW)                │   │
│  │                        │       │                        │   │
│  │  /                     │       │  /designer             │   │
│  │  /products             │       │  /designer/onboarding  │   │
│  │  /customize            │       │  /designer/dashboard   │   │
│  │  /cart                 │       │  /designer/studio      │   │
│  └────────────────────────┘       └────────────────────────┘   │
│              │                                 │                │
│              └─────────────┬───────────────────┘                │
│                            │                                    │
│                            ▼                                    │
│              ┌──────────────────────────────┐                   │
│              │     SHARED COMPONENTS        │                   │
│              │  - BillPreview               │                   │
│              │  - Generic Renderer          │                   │
│              │  - PDF Exporter              │                   │
│              │  - Template Registry         │                   │
│              └──────────────────────────────┘                   │
│                            │                                    │
└────────────────────────────┼────────────────────────────────────┘
                             │
                             ▼
┌──────────────────────────────────────────────────────────────────┐
│                        SUPABASE                                  │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌───────────────┐ │
│  │   PostgreSQL     │  │   Auth           │  │   Storage     │ │
│  │                  │  │                  │  │               │ │
│  │  Tables:         │  │  - Designers     │  │  - Templates/ │ │
│  │  - designers     │  │  - Sessions      │  │    {id}/      │ │
│  │  - templates     │  │  - OAuth         │  │    - bg.webp  │ │
│  │  - submissions   │  │                  │  │    - frame.png│ │
│  │  - reviews       │  │                  │  │    - badges/  │ │
│  └──────────────────┘  └──────────────────┘  └───────────────┘ │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Designer-Dashboard

### Dashboard-Features

**Haupt-Navigation:**
```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]  Designer Portal                         [Profile▾] │
├─────────────────────────────────────────────────────────────┤
│  Dashboard  |  Templates  |  Ressourcen  |  Support         │
└─────────────────────────────────────────────────────────────┘
```

---

### 1. Dashboard-Startseite

```
╔═══════════════════════════════════════════════════════════════╗
║  Willkommen zurück, [Designer Name]!                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ┌─────────────────────┐  ┌─────────────────────┐            ║
║  │  DEINE TEMPLATES    │  │  STATUS             │            ║
║  │                     │  │                     │            ║
║  │  2 Templates        │  │  1 In Review        │            ║
║  │  1 Approved         │  │  1 Published        │            ║
║  │  1 In Review        │  │  0 Changes Needed   │            ║
║  └─────────────────────┘  └─────────────────────┘            ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │  + NEUES TEMPLATE ERSTELLEN                          │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ═══ DEINE TEMPLATES ═════════════════════════════════════   ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ [Preview] Handcraft Voucher                           │   ║
║  │           Status: Published ✓                         │   ║
║  │           Erstellt: 28. Jan 2026                      │   ║
║  │           [Bearbeiten] [Vorschau] [Statistiken]       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ [Preview] Business Card Template                      │   ║
║  │           Status: In Review 🕐                        │   ║
║  │           Eingereicht: 3. Feb 2026                    │   ║
║  │           Feedback: "Bitte QR-Code vergrößern"        │   ║
║  │           [Bearbeiten] [Kommentare ansehen]           │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### 2. Ressourcen-Seite

```
╔═══════════════════════════════════════════════════════════════╗
║  Ressourcen & Downloads                                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  📄 BRIEFING & SPECS                                          ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ • Designer-Briefing.pdf (Kategorien, Anforderungen)   │   ║
║  │ • Technische Spezifikationen (Canvas-Größe, DPI)      │   ║
║  │ • Template-Schema-Dokumentation                       │   ║
║  │ • Beispiel-Templates (Classic als Referenz)           │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  🎨 DESIGN-VORLAGEN                                           ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ • Figma-Template (3633x1920px mit Guides)             │   ║
║  │ • Illustrator-Template (.ai)                          │   ║
║  │ • Photoshop-Template (.psd)                           │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  📚 TUTORIALS                                                 ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ ▶ Video: "So erstellst du dein erstes Template" (8min)│   ║
║  │ ▶ Video: "Bereiche definieren im Design Studio" (5min)│   ║
║  │ 📖 Guide: "Best Practices für lesbare Typografie"     │   ║
║  │ 📖 Guide: "Sicherheitsmerkmale richtig platzieren"    │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  💬 COMMUNITY                                                 ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ • Discord-Channel: Designer-Talk                      │   ║
║  │ • Slack: #designer-contest                            │   ║
║  │ • FAQ: Häufige Fragen & Antworten                     │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Design-Studio (Konfigurator)

### Der Template-Editor - Das Herzstück

**Ziel:** Designer kann ohne Code ein komplettes Template erstellen.

---

### Studio-Layout

```
┌────────────────────────────────────────────────────────────────────┐
│  [Logo] Design Studio                              [Save] [Exit]   │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌───────────┬──────────────────────────────────┬──────────────┐  │
│  │           │                                  │              │  │
│  │  SIDEBAR  │         CANVAS                   │  PROPERTIES  │  │
│  │  (Left)   │         (Center)                 │  (Right)     │  │
│  │           │                                  │              │  │
│  │  Steps:   │  [Live-Preview des Templates]    │  Selected:   │  │
│  │           │                                  │              │  │
│  │  1. Basics│  [Drag & Drop Bereiche]          │  Portrait    │  │
│  │  2. Assets│                                  │              │  │
│  │  3. Layout│  Front / Back Tabs               │  Position:   │  │
│  │  4. Style │                                  │  X: 500      │  │
│  │  5. Test  │  [Zoom: 50%]                     │  Y: 500      │  │
│  │           │                                  │  Width: 600  │  │
│  │           │                                  │  Height: 800 │  │
│  │           │                                  │              │  │
│  │           │                                  │  Shape:      │  │
│  │           │                                  │  ○ Ellipse   │  │
│  │           │                                  │  ○ Circle    │  │
│  │           │                                  │  ○ Rectangle │  │
│  │           │                                  │              │  │
│  └───────────┴──────────────────────────────────┴──────────────┘  │
│                                                                    │
│  [← Prev Step]                          [Next Step → ] [Submit]   │
└────────────────────────────────────────────────────────────────────┘
```

---

### STEP 1: Basics

**Formular:**
```
╔═══════════════════════════════════════════════════════════════╗
║  Template-Informationen                                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  Template-Name:                                               ║
║  [                                    ]                       ║
║                                                               ║
║  Kategorie:                                                   ║
║  [ ▼ Time Voucher              ]                              ║
║      • Time Voucher                                           ║
║      • Business Voucher                                       ║
║      • Handwerk & Trade                                       ║
║      • Event Ticket                                           ║
║      • Gift & Thank-You                                       ║
║      • Community Currency                                     ║
║                                                               ║
║  Kurzbeschreibung:                                            ║
║  [                                                        ]   ║
║  [                                                        ]   ║
║  [                                                        ]   ║
║  (Max. 280 Zeichen)                                           ║
║                                                               ║
║  Tags (optional):                                             ║
║  [ vintage ] [ colorful ] [ minimalist ] [+ Add]              ║
║                                                               ║
║  [Cancel]                              [Save & Continue →]   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### STEP 2: Assets hochladen

**Upload-Interface:**
```
╔═══════════════════════════════════════════════════════════════╗
║  Assets hochladen                                             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ┌─────────────────────────────────────────────────────┐     ║
║  │  BACKGROUND (Pflicht)                               │     ║
║  │                                                      │     ║
║  │  ┌────────────────────────────────────────────┐     │     ║
║  │  │  [Drop file here or click to upload]      │     │     ║
║  │  │  📁 background.webp (Max 2MB)              │     │     ║
║  │  │                                             │     │     ║
║  │  │  Specs: 3633×1920px, WebP/PNG, 600 DPI     │     │     ║
║  │  └────────────────────────────────────────────┘     │     ║
║  │                                                      │     ║
║  │  [Preview]                                           │     ║
║  │  [✓ Uploaded: background.webp (1.2 MB)]             │     ║
║  └─────────────────────────────────────────────────────┘     ║
║                                                               ║
║  ┌─────────────────────────────────────────────────────┐     ║
║  │  FRONT FRAME (Optional)                             │     ║
║  │  ┌────────────────────────────────────────────┐     │     ║
║  │  │  [Drop file here]                          │     │     ║
║  │  │  📁 front_frame.png (Max 1MB)              │     │     ║
║  │  └────────────────────────────────────────────┘     │     ║
║  └─────────────────────────────────────────────────────┘     ║
║                                                               ║
║  ┌─────────────────────────────────────────────────────┐     ║
║  │  BACK FRAME (Optional)                              │     ║
║  │  ┌────────────────────────────────────────────┐     │     ║
║  │  │  [Drop file here]                          │     │     ║
║  │  │  📁 back_frame.png (Max 1MB)               │     │     ║
║  │  └────────────────────────────────────────────┘     │     ║
║  └─────────────────────────────────────────────────────┘     ║
║                                                               ║
║  ┌─────────────────────────────────────────────────────┐     ║
║  │  BADGES (Pflicht)                                   │     ║
║  │                                                      │     ║
║  │  Wert-Badges (1h, 5h, 10h):                         │     ║
║  │  ┌──────┐  ┌──────┐  ┌──────┐                       │     ║
║  │  │  1h  │  │  5h  │  │ 10h  │                       │     ║
║  │  │ [📁] │  │ [📁] │  │ [📁] │                       │     ║
║  │  └──────┘  └──────┘  └──────┘                       │     ║
║  │  PNG mit Transparenz, ~200×200px, <200KB each       │     ║
║  │                                                      │     ║
║  │  [✓ 1.png] [✓ 5.png] [✓ 10.png]                     │     ║
║  └─────────────────────────────────────────────────────┘     ║
║                                                               ║
║  [← Back]                              [Continue →]          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Features:**
- Drag & Drop Support
- Live-Preview nach Upload
- Automatische Validierung (Größe, Format, Dimensionen)
- Progress-Bar während Upload
- Fehlermeldungen wenn nicht korrekt

---

### STEP 3: Layout (Drag & Drop Editor)

**Der wichtigste Schritt!**

```
┌────────────────────────────────────────────────────────────────┐
│  Layout Editor                          [Front] [Back]         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SIDEBAR                    CANVAS                  PROPERTIES │
│  ─────────                  ──────                  ────────── │
│                                                                │
│  Elemente:                 ┌──────────────────┐   Selected:   │
│                            │                  │   Portrait    │
│  [📷 Portrait]  ──────────►│  ┌──────────┐   │               │
│  [💰 Wert-Badge]           │  │          │   │   Position:   │
│  [📝 Text: Name]           │  │ Portrait │   │   X: 500px    │
│  [📝 Text: Email]          │  │          │   │   Y: 500px    │
│  [📝 Text: Phone]          │  └──────────┘   │               │
│  [📝 Text: Versprechen]    │                  │   Size:       │
│  [#️⃣ Seriennummer]         │       [Badge]    │   W: 600px    │
│  [QR QR-Code]              │                  │   H: 800px    │
│  [🔒 Sicherheit]           │  [Name]          │               │
│                            │  [Email]         │   Shape:      │
│  ───────────               │  [Phone]    [QR] │   ◉ Ellipse   │
│                            │                  │   ○ Circle    │
│  Layers:                   │  [Seriennr.]     │   ○ Rectangle │
│  (unten → oben)            │                  │               │
│                            └──────────────────┘   Features:   │
│  🔲 Background                                   ☑ Engraving  │
│  🔲 Frame                                        ☑ BG-Removal │
│  🔲 Portrait ← SELECTED                          ☐ Grayscale  │
│  🔲 Badge                                                     │
│  🔲 Name                                        [Apply]       │
│  🔲 Email                                                     │
│  ...                                                          │
│                                                                │
│  [+ Add Element]                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Interaktion:**

1. **Element aus Sidebar ziehen** → auf Canvas droppen
2. **Element auf Canvas** → Drag to reposition
3. **Element anklicken** → Properties rechts erscheinen
4. **Resize-Handles** → Größe ändern mit Maus
5. **Layer-Reihenfolge** → Per Drag in Sidebar ändern

**Properties Panel (kontextuell):**

**Für Portrait-Element:**
```
┌────────────────────────┐
│ Portrait-Bereich       │
├────────────────────────┤
│ Position:              │
│ X: [500] Y: [500]      │
│                        │
│ Größe:                 │
│ W: [600] H: [800]      │
│                        │
│ Form:                  │
│ ◉ Ellipse              │
│ ○ Circle               │
│ ○ Rectangle            │
│                        │
│ Clipping:              │
│ ☑ Clip to shape        │
│                        │
│ Features:              │
│ ☑ Zoom & Pan           │
│ ☑ Engraving-Effekt     │
│ ☑ BG-Removal           │
│ ☐ Grayscale            │
│                        │
│ [Reset] [Apply]        │
└────────────────────────┘
```

**Für Text-Element (z.B. Name):**
```
┌────────────────────────┐
│ Text-Feld: Name        │
├────────────────────────┤
│ Position:              │
│ X: [1816] Y: [1400]    │
│                        │
│ Font:                  │
│ [▼ Playfair Display]   │
│                        │
│ Größe:                 │
│ [48] px                │
│                        │
│ Farbe:                 │
│ [#2a3a2a] 🎨           │
│                        │
│ Style:                 │
│ [ B ] [ I ] [ U ]      │
│                        │
│ Ausrichtung:           │
│ [ ← ] [ ≡ ] [ → ]      │
│                        │
│ Max. Breite:           │
│ [800] px (Wrap)        │
│                        │
│ Pflichtfeld:           │
│ ☑ Erforderlich         │
│                        │
│ [Reset] [Apply]        │
└────────────────────────┘
```

**Für Sicherheitsmerkmale:**
```
┌────────────────────────┐
│ Sicherheitsmerkmale    │
├────────────────────────┤
│                        │
│ Silber-Folien-Bereich: │
│ [+ Bereich markieren]  │
│                        │
│ ┌────────────────────┐ │
│ │ Rechteck 1:        │ │
│ │ X: 100, Y: 100     │ │
│ │ W: 200, H: 100     │ │
│ │ [Edit] [Delete]    │ │
│ └────────────────────┘ │
│                        │
│ [+ Weiterer Bereich]   │
│                        │
│ Hologramm (optional):  │
│ ☐ Hologramm verwenden  │
│ Position: [...]        │
│                        │
│ Seriennummer:          │
│ Position:              │
│ X: [3400] Y: [1800]    │
│ Font: [Courier]        │
│ Größe: [24] px         │
│                        │
│ [Apply]                │
└────────────────────────┘
```

---

### STEP 4: Styling & Feintuning

```
╔═══════════════════════════════════════════════════════════════╗
║  Globale Einstellungen                                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  Farbvarianten (Hue-Shift):                                   ║
║  ☑ Hue-Shift aktivieren                                       ║
║  Betroffene Layer: [☑ Background] [☐ Frame] [☐ Badges]       ║
║  Standard-Hue: [45°] 🎨                                       ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │  Preview verschiedener Hues:                         │   ║
║  │  [Vorschau 0°] [Vorschau 45°] [Vorschau 90°] ...     │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  ───────────────────────────────────────────────────────────  ║
║                                                               ║
║  Globale Schriftart (Falls keine Custom-Fonts):               ║
║  [▼ Playfair Display]                                         ║
║                                                               ║
║  Globale Textfarbe:                                           ║
║  [#2a3a2a] 🎨                                                 ║
║                                                               ║
║  ───────────────────────────────────────────────────────────  ║
║                                                               ║
║  Custom Fonts (Optional):                                     ║
║  ☐ Custom Font verwenden                                      ║
║  Upload: [.woff2 / .woff / .ttf]                              ║
║                                                               ║
║  [← Back]                              [Continue →]          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### STEP 5: Preview & Test

```
╔═══════════════════════════════════════════════════════════════╗
║  Vorschau & Test                                              ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  [Front] [Back]                     Zoom: [50%] [100%] [200%]║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │                                                       │    ║
║  │            [Live-Preview des Templates]              │    ║
║  │            mit Test-Daten                             │    ║
║  │                                                       │    ║
║  │  [Portrait: Placeholder-Bild]                         │    ║
║  │  [Name: Max Mustermann]                               │    ║
║  │  [Email: max@example.com]                             │    ║
║  │  [Wert: 5 Stunden]                                    │    ║
║  │                                                       │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  Test-Daten:                                                  ║
║  ☑ Standard-Daten verwenden                                   ║
║  ☐ Eigene Daten eingeben                                      ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │  Test-PDF generieren:                                │    ║
║  │  [📥 Download Test-PDF]                               │    ║
║  │  (PDF mit Wasserzeichen "PREVIEW")                    │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │  Mobile-Preview:                                     │    ║
║  │  [📱 Auf Phone anzeigen]                              │    ║
║  │  (QR-Code zum Scannen mit Handy)                     │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ───────────────────────────────────────────────────────────  ║
║                                                               ║
║  Validierung:                                                 ║
║  ✓ Alle Pflicht-Assets hochgeladen                            ║
║  ✓ Bereiche definiert                                         ║
║  ✓ Keine Überlappungen                                        ║
║  ⚠ Warnung: QR-Code sehr klein (< 150px)                     ║
║                                                               ║
║  [← Back to Edit]                [Submit Template →]         ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### Optional: KI-gestützte Anpassungen?

**Idee:** Designer kann per Prompt Anpassungen vornehmen.

**Beispiel-UI:**
```
┌────────────────────────────────────────────────────────────┐
│  🤖 AI-Assistent (Beta)                                    │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Beschreibe was du ändern möchtest:                        │
│  ┌────────────────────────────────────────────────────┐   │
│  │ "Mach den Hintergrund etwas blauer und erhöhe den │   │
│  │  Kontrast der Schrift"                             │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
│  [Generate]                                                │
│                                                            │
│  ┌────────────────────────────────────────────────────┐   │
│  │  AI-Vorschlag:                                     │   │
│  │  • Background Hue +15°                             │   │
│  │  • Text Color: #1a2a1a (dunkler)                   │   │
│  │  • Text Shadow: 1px 1px 2px rgba(0,0,0,0.3)       │   │
│  │                                                    │   │
│  │  [Apply] [Regenerate] [Cancel]                    │   │
│  └────────────────────────────────────────────────────┘   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**ABER:** Das ist **Optional** und **später**. Erstmal ohne KI starten, Fokus auf manuellen Editor.

---

## Integration in Money-Printing App

### Neue Routen & Pages

**In `money-printer-shop` (Next.js):**

```
src/
├── pages/
│   ├── designer/
│   │   ├── index.tsx                 # Landing/Onboarding
│   │   ├── dashboard.tsx             # Dashboard
│   │   ├── studio/
│   │   │   ├── new.tsx               # Neues Template erstellen
│   │   │   └── [id].tsx              # Template bearbeiten
│   │   ├── templates/
│   │   │   └── [id].tsx              # Template-Details & Stats
│   │   └── resources.tsx             # Ressourcen-Seite
│   │
│   └── api/
│       └── designer/
│           ├── templates.ts          # CRUD für Templates
│           ├── upload.ts             # File-Upload-Handler
│           ├── submit.ts             # Template submission
│           └── review.ts             # Review-Feedback (Admin)
│
├── components/
│   └── designer/
│       ├── Dashboard.tsx
│       ├── TemplateCard.tsx
│       ├── Studio/
│       │   ├── StudioLayout.tsx
│       │   ├── Sidebar.tsx
│       │   ├── Canvas.tsx
│       │   ├── PropertiesPanel.tsx
│       │   ├── ElementLibrary.tsx
│       │   └── steps/
│       │       ├── Step1Basics.tsx
│       │       ├── Step2Assets.tsx
│       │       ├── Step3Layout.tsx
│       │       ├── Step4Styling.tsx
│       │       └── Step5Preview.tsx
│       └── Onboarding/
│           ├── Welcome.tsx
│           ├── ProfileSetup.tsx
│           └── CategorySelection.tsx
│
├── lib/
│   └── designer/
│       ├── templateBuilder.ts        # Template-JSON generieren
│       ├── validation.ts             # Client-side Validierung
│       └── storage.ts                # File-Upload zu Supabase
│
└── types/
    └── designer.ts                   # TypeScript Types
```

---

### Auth & Permissions

**User-Rollen:**
- `customer` (Standard-User, kauft Scheine)
- `designer` (Designer, erstellt Templates)
- `admin` (Timo, reviewt Templates)

**Supabase Row-Level Security (RLS):**

```sql
-- Designers Table
CREATE TABLE designers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  portfolio_url TEXT,
  bio TEXT,
  skills TEXT[],
  status TEXT DEFAULT 'active', -- active, suspended
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policy: Designer kann nur eigene Daten sehen/bearbeiten
ALTER TABLE designers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Designers can view own profile"
  ON designers FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Designers can update own profile"
  ON designers FOR UPDATE
  USING (auth.uid() = user_id);

-- Templates Table
CREATE TABLE designer_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  designer_id UUID REFERENCES designers(id),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  template_json JSONB NOT NULL, -- Das komplette Template-Schema
  status TEXT DEFAULT 'draft', -- draft, submitted, in_review, changes_requested, approved, published
  submitted_at TIMESTAMPTZ,
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES auth.users(id),
  feedback TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Policy
ALTER TABLE designer_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Designers can view own templates"
  ON designer_templates FOR SELECT
  USING (designer_id IN (SELECT id FROM designers WHERE user_id = auth.uid()));

CREATE POLICY "Designers can create templates"
  ON designer_templates FOR INSERT
  WITH CHECK (designer_id IN (SELECT id FROM designers WHERE user_id = auth.uid()));

CREATE POLICY "Designers can update own draft/changes_requested templates"
  ON designer_templates FOR UPDATE
  USING (
    designer_id IN (SELECT id FROM designers WHERE user_id = auth.uid())
    AND status IN ('draft', 'changes_requested')
  );

-- Admin Policy (Timo kann alles sehen/bearbeiten)
CREATE POLICY "Admins can view all templates"
  ON designer_templates FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND email = 'timo@moneyprinter.app' -- oder role = 'admin'
    )
  );

CREATE POLICY "Admins can update all templates"
  ON designer_templates FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid()
      AND email = 'timo@moneyprinter.app'
    )
  );
```

---

### File-Upload Flow

**Assets (Background, Frames, Badges) → Supabase Storage:**

```typescript
// lib/designer/storage.ts

import { supabase } from '@/lib/supabase';

export async function uploadTemplateAsset(
  templateId: string,
  file: File,
  type: 'background' | 'front_frame' | 'back_frame' | 'badge'
): Promise<string> {
  // Dateiname mit Template-ID prefixen
  const fileName = `${templateId}/${type}_${Date.now()}_${file.name}`;

  // Upload zu Supabase Storage
  const { data, error } = await supabase.storage
    .from('designer-templates') // Bucket
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) throw error;

  // Public URL zurückgeben
  const { data: { publicUrl } } = supabase.storage
    .from('designer-templates')
    .getPublicUrl(fileName);

  return publicUrl;
}

// Validierung vor Upload
export function validateTemplateAsset(
  file: File,
  type: 'background' | 'frame' | 'badge'
): { valid: boolean; error?: string } {
  // Größe prüfen
  const maxSize = type === 'background' ? 2 * 1024 * 1024 : 1 * 1024 * 1024; // 2MB / 1MB
  if (file.size > maxSize) {
    return { valid: false, error: `Datei zu groß (Max: ${maxSize / 1024 / 1024}MB)` };
  }

  // Format prüfen
  const allowedFormats = ['image/webp', 'image/png'];
  if (!allowedFormats.includes(file.type)) {
    return { valid: false, error: 'Nur WebP und PNG erlaubt' };
  }

  // Dimensionen prüfen (async, muss im Component gemacht werden)
  // TODO: Image-Dimensionen validieren

  return { valid: true };
}
```

**In React-Component:**

```typescript
// components/designer/Studio/Step2Assets.tsx

import { uploadTemplateAsset, validateTemplateAsset } from '@/lib/designer/storage';

function Step2Assets({ templateId, onComplete }) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [assets, setAssets] = useState({
    background: null,
    frontFrame: null,
    backFrame: null,
    badges: {}
  });

  async function handleFileUpload(file: File, type: string) {
    // Validierung
    const validation = validateTemplateAsset(file, type);
    if (!validation.valid) {
      alert(validation.error);
      return;
    }

    // Upload
    try {
      const publicUrl = await uploadTemplateAsset(templateId, file, type);
      setAssets(prev => ({ ...prev, [type]: publicUrl }));
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload fehlgeschlagen');
    }
  }

  return (
    <div>
      <h2>Assets hochladen</h2>

      {/* Background Upload */}
      <div>
        <h3>Background (Pflicht)</h3>
        <input
          type="file"
          accept="image/webp,image/png"
          onChange={(e) => handleFileUpload(e.target.files[0], 'background')}
        />
        {assets.background && <img src={assets.background} alt="Preview" />}
      </div>

      {/* ... weitere Uploads */}

      <button onClick={() => onComplete(assets)}>Weiter</button>
    </div>
  );
}
```

---

## Datenmodell

### Datenbank-Schema (Supabase/PostgreSQL)

```sql
-- Designers
CREATE TABLE designers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  portfolio_url TEXT,
  bio TEXT,
  skills TEXT[], -- ['Figma', 'Illustrator', 'Photoshop']
  avatar_url TEXT,
  status TEXT DEFAULT 'active', -- active, suspended
  invite_code TEXT UNIQUE, -- Der Einladungscode
  invited_at TIMESTAMPTZ,
  onboarded_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Templates
CREATE TABLE designer_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  designer_id UUID REFERENCES designers(id) ON DELETE CASCADE,

  -- Metadata
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- 'time-voucher', 'business', 'handwerk', etc.
  description TEXT,
  tags TEXT[],

  -- Template-JSON (das komplette Schema!)
  template_json JSONB NOT NULL,

  -- Status & Lifecycle
  status TEXT DEFAULT 'draft', -- draft, submitted, in_review, changes_requested, approved, published, deprecated
  version TEXT DEFAULT '1.0.0',

  -- Review
  submitted_at TIMESTAMPTZ,
  reviewed_at TIMESTAMPTZ,
  reviewed_by UUID REFERENCES auth.users(id),
  feedback JSONB, -- { comments: [...], changes_requested: [...] }
  approved_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ,

  -- Assets (URLs zu Supabase Storage)
  assets JSONB, -- { background: 'url', frontFrame: 'url', ... }

  -- Stats (später)
  views INT DEFAULT 0,
  downloads INT DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Template-Versionen (für History)
CREATE TABLE template_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  template_id UUID REFERENCES designer_templates(id) ON DELETE CASCADE,
  version TEXT NOT NULL,
  template_json JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by UUID REFERENCES auth.users(id)
);

-- Review-Comments (für Feedback-Thread)
CREATE TABLE template_reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  template_id UUID REFERENCES designer_templates(id) ON DELETE CASCADE,
  reviewer_id UUID REFERENCES auth.users(id),
  comment TEXT NOT NULL,
  type TEXT, -- 'feedback', 'approval', 'rejection'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indices
CREATE INDEX idx_designer_templates_designer ON designer_templates(designer_id);
CREATE INDEX idx_designer_templates_status ON designer_templates(status);
CREATE INDEX idx_designer_templates_category ON designer_templates(category);
```

---

### TypeScript Types

```typescript
// types/designer.ts

export interface Designer {
  id: string;
  user_id: string;
  name: string;
  email: string;
  portfolio_url?: string;
  bio?: string;
  skills?: string[];
  avatar_url?: string;
  status: 'active' | 'suspended';
  invite_code?: string;
  invited_at?: string;
  onboarded_at?: string;
  created_at: string;
  updated_at: string;
}

export interface DesignerTemplate {
  id: string;
  designer_id: string;
  name: string;
  category: TemplateCategory;
  description?: string;
  tags?: string[];
  template_json: TemplateJSON; // Das komplette Template-Schema (siehe Spec)
  status: TemplateStatus;
  version: string;
  submitted_at?: string;
  reviewed_at?: string;
  reviewed_by?: string;
  feedback?: TemplateFeedback;
  approved_at?: string;
  published_at?: string;
  assets: TemplateAssets;
  views: number;
  downloads: number;
  created_at: string;
  updated_at: string;
}

export type TemplateCategory =
  | 'time-voucher'
  | 'business'
  | 'handwerk'
  | 'event-ticket'
  | 'gift-thank-you'
  | 'community-currency';

export type TemplateStatus =
  | 'draft'
  | 'submitted'
  | 'in_review'
  | 'changes_requested'
  | 'approved'
  | 'published'
  | 'deprecated';

export interface TemplateFeedback {
  comments: Array<{
    id: string;
    reviewer: string;
    text: string;
    timestamp: string;
  }>;
  changes_requested?: string[];
}

export interface TemplateAssets {
  background: string; // URL
  frontFrame?: string;
  backFrame?: string;
  badges: {
    [value: string]: string; // { "1": "url", "5": "url", "10": "url" }
  };
}

// Template-JSON entspricht der bestehenden Spec
export interface TemplateJSON {
  id: string;
  version: string;
  name: string;
  type: string;
  designer: {
    name: string;
    url?: string;
    email?: string;
  };
  assets: {
    background: string;
    frontFrame?: string;
    backFrame?: string;
    badges?: any;
  };
  schema: {
    fields: Field[];
    // ... siehe Template-Spec
  };
  layout: {
    dimensions: { width: number; height: number; dpi: number };
    front: { layers: Layer[] };
    back: { layers: Layer[] };
  };
  security?: {
    silverFoilArea?: any;
    hologramArea?: any;
    serialNumberPosition?: any;
  };
}

// ... weitere Types aus der Template-Spec
```

---

## Admin-View (für dich)

### Admin-Dashboard Route

**`/admin/designer-contest`**

```
╔═══════════════════════════════════════════════════════════════╗
║  Designer Contest - Admin Dashboard                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ ║
║  │  DESIGNER       │  │  TEMPLATES      │  │  STATUS      │ ║
║  │                 │  │                 │  │              │ ║
║  │  10 Total       │  │  18 Total       │  │  3 Review    │ ║
║  │  8 Active       │  │  12 Published   │  │  2 Approved  │ ║
║  │  2 Inactive     │  │  3 In Review    │  │  1 Changes   │ ║
║  └─────────────────┘  └─────────────────┘  └──────────────┘ ║
║                                                               ║
║  ═══ PENDING REVIEWS ═════════════════════════════════════   ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ [Preview] Business Card Template                     │    ║
║  │           Designer: Anna Schmidt                      │    ║
║  │           Kategorie: Business                         │    ║
║  │           Eingereicht: 3. Feb 2026 (vor 2 Tagen)     │    ║
║  │           [Review starten] [Vorschau] [Ablehnen]     │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ [Preview] Handcraft Voucher                          │    ║
║  │           Designer: Max Weber                         │    ║
║  │           Kategorie: Handwerk                         │    ║
║  │           Eingereicht: 4. Feb 2026 (vor 1 Tag)       │    ║
║  │           [Review starten]                            │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ═══ ALLE TEMPLATES ══════════════════════════════════════   ║
║                                                               ║
║  Filter: [▼ Alle Status] [▼ Alle Kategorien]                 ║
║          [Search: Designer oder Template-Name]                ║
║                                                               ║
║  [Table mit allen Templates, sortierbar, filterbar]          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

### Review-Page

**`/admin/designer-contest/review/[templateId]`**

```
┌────────────────────────────────────────────────────────────────┐
│  Template-Review                                [Back]          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │  Business Card Template                                │   │
│  │  von Anna Schmidt                                      │   │
│  │  Eingereicht: 3. Feb 2026                              │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  ┌──────────────────────┬──────────────────────────────────┐  │
│  │  PREVIEW             │  DETAILS                         │  │
│  │                      │                                  │  │
│  │  [Front-Ansicht]     │  Kategorie: Business             │  │
│  │                      │  Tags: minimalist, clean         │  │
│  │  [Live-Preview]      │  Beschreibung: "Modern..."       │  │
│  │                      │                                  │  │
│  │  [Back-Ansicht]      │  Assets:                         │  │
│  │                      │  • Background: bg.webp (1.8 MB)  │  │
│  │  [Test-PDF laden]    │  • Front Frame: frame.png (900KB)│  │
│  │                      │  • Badges: ✓ All uploaded        │  │
│  │                      │                                  │  │
│  │  [Mobile-View]       │  Validation:                     │  │
│  │                      │  ✓ Schema valid                  │  │
│  │                      │  ✓ Assets complete               │  │
│  │                      │  ✓ Layout ok                     │  │
│  │                      │  ⚠ QR-Code klein (150px)         │  │
│  │                      │                                  │  │
│  └──────────────────────┴──────────────────────────────────┘  │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  FEEDBACK & KOMMENTARE                                   │ │
│  ├──────────────────────────────────────────────────────────┤ │
│  │                                                          │ │
│  │  [Textarea für Feedback]                                 │ │
│  │  "Bitte QR-Code auf mindestens 200×200px vergrößern"    │ │
│  │                                                          │ │
│  │  ☐ Änderungen erforderlich                               │ │
│  │  ☐ Freigeben                                             │ │
│  │  ☐ Ablehnen                                              │ │
│  │                                                          │ │
│  │  [Submit Feedback]                                       │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  QUICK ACTIONS                                           │ │
│  │  [✓ Approve & Publish]  [⚠ Request Changes]  [✗ Reject] │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Timeline & Roadmap

### Entwicklungs-Phasen

#### **Phase 0: Vorbereitung (1 Woche)**
**Ziel:** Planung finalisieren, Tech-Stack entscheiden

- [x] Konzept schreiben (dieses Dokument)
- [ ] Kategorien finalisieren (mit Timo besprechen)
- [ ] Tech-Stack-Entscheidung (Supabase? Firebase? Eigenes Backend?)
- [ ] Designer-Briefing-Dokument schreiben
- [ ] Figma-Vorlagen erstellen (für Designer)
- [ ] Invite-Liste (10 Designer identifizieren)

---

#### **Phase 1: Foundation (2 Wochen)**
**Ziel:** Auth, Datenbank, Basic UI

**Woche 1:**
- [ ] Supabase Setup (Database, Auth, Storage)
- [ ] Schema erstellen (Tabellen, RLS Policies)
- [ ] Auth-Flow implementieren (Sign-up, Login, OAuth)
- [ ] Designer-Rolle & Permissions
- [ ] Basic Routing (`/designer/*`)

**Woche 2:**
- [ ] Dashboard-Page (UI only, noch keine Funktionalität)
- [ ] Onboarding-Flow (Profil erstellen, Skills, Portfolio)
- [ ] Ressourcen-Seite (statisch, Briefing-PDFs)
- [ ] Designer-Profil-Edit

---

#### **Phase 2: Design Studio (3-4 Wochen)**
**Ziel:** Template-Editor voll funktionsfähig

**Woche 3:**
- [ ] Studio-Layout (Sidebar, Canvas, Properties)
- [ ] Step 1: Basics (Formular)
- [ ] Step 2: Assets-Upload (Drag & Drop, Validation)
- [ ] File-Upload zu Supabase Storage
- [ ] Preview nach Upload

**Woche 4:**
- [ ] Step 3: Layout-Editor - Part 1
  - [ ] Drag & Drop von Elementen auf Canvas
  - [ ] Element-Positionierung
  - [ ] Resize-Handles

**Woche 5:**
- [ ] Step 3: Layout-Editor - Part 2
  - [ ] Properties Panel (kontextuell)
  - [ ] Layer-Management
  - [ ] Sicherheitsmerkmale definieren

**Woche 6:**
- [ ] Step 4: Styling (Hue-Shift, Fonts, Colors)
- [ ] Step 5: Preview & Test (Live-Preview, Test-PDF)
- [ ] Template-JSON generieren & speichern

---

#### **Phase 3: Review & Admin (1 Woche)**
**Ziel:** Admin-Dashboard für Timo

**Woche 7:**
- [ ] Admin-Dashboard (`/admin/designer-contest`)
- [ ] Template-Liste mit Filter/Search
- [ ] Review-Page (Template ansehen, Feedback geben)
- [ ] Status-Updates (Approve, Request Changes, Reject)
- [ ] Notifications an Designer (Email)

---

#### **Phase 4: Integration & Testing (1 Woche)**
**Ziel:** In Money-Printing Shop integrieren

**Woche 8:**
- [ ] Approved Templates in Shop-Registry integrieren
- [ ] Template-Selector im Shop (wenn Template wählen)
- [ ] End-to-End-Test: Designer erstellt → Timo reviewt → Published → Kunde bestellt
- [ ] Bug-Fixes & Polish

---

#### **Phase 5: Launch (1 Woche)**
**Ziel:** Designer einladen, Contest starten

**Woche 9:**
- [ ] Finale Tests
- [ ] Briefing-Materialien fertigstellen
- [ ] Video-Tutorials aufnehmen
- [ ] E-Mails an 10 Designer senden
- [ ] Launch! 🚀

---

### Gesamt-Timeline

**Total: ~9 Wochen** (ca. 2 Monate)

**Wenn Start: 10. Februar 2026**
→ **Launch Mitte April 2026**

**Für Money-Printing Launch März 2026:**
→ Entweder Contest VOR Launch (sehr knapp)
→ Oder Contest parallel/nach Launch (besser)

---

## Offene Fragen & Entscheidungen

### Für Timo zu entscheiden:

1. **Tech-Stack:**
   - Supabase (empfohlen) oder Firebase?
   - Oder eigenes Backend (Node.js/Express)?

2. **Kategorien:**
   - Sind die 6 Kategorien okay?
   - Prioritäten richtig gesetzt?

3. **Anzahl Designer:**
   - 10 Designer ausreichend?
   - Oder mehr einladen?

4. **Incentives:**
   - Was bekommen Designer?
   - Credit + Portfolio-Link?
   - Revenue-Share später?
   - Einmalige Zahlung?

5. **KI-Assistent:**
   - Jetzt schon einbauen oder später?
   - Empfehlung: Später (V2)

6. **Template-Review:**
   - Wer reviewt außer Timo?
   - Anton, Sebastian, Mathias einbinden?

7. **Timeline:**
   - 9 Wochen realistisch?
   - Deadline flexibel?

---

## Next Steps

### Sofort (diese Woche):

1. **Timo reviewed dieses Konzept** ✅
2. **Meeting:** Konzept besprechen, offene Fragen klären
3. **Entscheidungen treffen:** Tech-Stack, Timeline, Incentives
4. **Kategorien finalisieren**
5. **Go/No-Go Entscheidung**

### Wenn Go:

6. **Phase 0 starten:** Supabase Setup, Schema-Design
7. **Designer-Liste:** 10 Designer identifizieren & kontaktieren
8. **Briefing schreiben:** Designer-Briefing-Dokument
9. **Figma-Vorlagen erstellen**
10. **Development kickoff:** Phase 1 starten

---

## Anhang: Ressourcen

### Bestehende Docs (relevant):

- [Template-System-Spezifikation](c:\Users\Timo\Worspace\money-printing\docs\02-produkt\template-system-specification.md)
- [Kommunikationskonzept](c:\Users\Timo\Worspace\money-printing\docs\04-geschaeft\kommunikationskonzept.md)

### Neu zu erstellen:

- Designer-Briefing.pdf (für Designer)
- Technische Spezifikation (Canvas-Größe, Bereiche, etc.)
- Tutorial-Videos (nach Development)
- Figma/Illustrator/Photoshop-Vorlagen

---

*Dokumentiert am 5. Februar 2026*
*Von Eli, für Timo und das Money-Printing Team*

---

**Status:** 🟡 Konzeptphase - Wartet auf Timo's Review & Go-Entscheidung
