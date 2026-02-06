# Designer Onboarding - Konzept

*Money-Printer Template Design System*

**Version:** 2.0
**Datum:** 5. Februar 2026
**Status:** Strategiephase - Two-Phase Approach

---

## Executive Summary

**Vision:** Wir bauen ein kontinuierliches Designer-Onboarding-System, das talentierten Designern ermöglicht, hochwertige Template-Designs für Money-Printer zu erstellen.

**Kernprinzip:** Designer liefern **nur Design-Assets** (Backgrounds, Frames, Badges, Farbpaletten, Fonts) - KEINE kompletten Template-JSONs. Designer und Kunde nutzen **dasselbe LayoutEditor-Tool**.

**Two-Phase Approach:**
- **Phase 1 (1-2 Wochen):** Template-System - Designer erstellt Beispiel-Layout, Kunde kann übernehmen oder anpassen
- **Phase 2 (4-6 Wochen nach Launch):** Full Canvas Editor mit AI-Unterstützung für harmonische Integration, Smart Positioning, Prompt-based Adjustments

**Strategie:**
- Kontinuierliches Onboarding (nicht limitiert auf 10 Designer)
- Professionelles Tooling (Designer-Dashboard + Shared LayoutEditor)
- Gallery mit Ranking (Social Proof durch meistgedruckte Templates)
- Faire Konditionen (Credit, Portfolio-Link, optional Revenue-Share später)

---

## Inhaltsverzeichnis

1. [Core Concepts](#core-concepts)
2. [Use-Cases & Design-Kategorien](#use-cases--design-kategorien)
3. [Two-Phase Development Approach](#two-phase-development-approach)
4. [Designer Journey](#designer-journey)
5. [Technische Architektur](#technische-architektur)
6. [Designer-Dashboard](#designer-dashboard)
7. [Shared LayoutEditor Component](#shared-layouteditor-component)
8. [Gallery & Ranking System](#gallery--ranking-system)
9. [Integration in Money-Printing App](#integration-in-money-printing-app)
10. [Datenmodell](#datenmodell)
11. [Admin-View](#admin-view-für-timo)
12. [Timeline & Roadmap](#timeline--roadmap)

---

## Core Concepts

### 1. Designer liefert nur Design-Assets

**WAS Designer macht:**
- Background-Design erstellen
- Front/Back Frames designen (optional)
- Value-Badges gestalten (1h, 5h, 10h oder äquivalent)
- Farbpalette definieren (Primary, Secondary, Text)
- Fonts auswählen

**WAS Designer NICHT macht:**
- Keine kompletten Template-JSONs schreiben
- Keine Field-Definitionen
- Keine technische Schema-Definition

**Template-Struktur wird vom System bereitgestellt** - Designer "skinnt" diese nur mit eigenen Assets.

---

### 2. Shared LayoutEditor Component

**Designer und Kunde nutzen DASSELBE Tool:**

```typescript
interface LayoutEditorProps {
  mode: 'designer' | 'customer';     // Same component!
  templateSkin: TemplateSkin;        // The design assets
  initialLayout?: Layout;            // For customer = designer's example
  availableElements: ElementType[];
  onSave: (layout: Layout) => void;
}
```

**Workflow:**
1. Designer lädt Assets hoch (Background, Frames, Badges)
2. Designer nutzt LayoutEditor um **Beispiel-Layout** zu erstellen
3. Beispiel-Layout wird gespeichert und dem Kunden als Vorschlag gezeigt
4. Kunde öffnet **denselben LayoutEditor** mit dem Beispiel-Layout
5. Kunde kann:
   - Beispiel-Layout übernehmen (1-Click)
   - Elemente verschieben, anpassen, ändern
   - Eigenes Layout speichern und wiederverwenden

---

### 3. Two-Phase Development

**Phase 1: Template System (MVP - 1-2 Wochen)**
- Designer lädt Assets hoch
- Designer erstellt Beispiel-Layout mit einfachem Editor
- Kunde kann Layout übernehmen oder manuell anpassen
- Speichern & Wiederverwenden von eigenen Layouts
- Gallery mit Ranking

**Phase 2: Full Canvas Editor mit AI (4-6 Wochen nach Launch)**
- Vollständig freies Drag & Drop
- AI-gestützte Features:
  - Smart Positioning (harmonische Platzierung)
  - Layout-Check (Lesbarkeit, Balance)
  - Hue-Shift für Farbvarianten
  - Prompt-based Adjustments ("Mach das etwas größer")
- Advanced Layer-Management
- Templates als Starting Point, dann volle Freiheit

---

## Use-Cases & Design-Kategorien

### Die 4 Core Use-Cases

Diese sind **funktionale Kategorien** - was der Kunde tut:

#### **1. VISIT (Visitenkarte)**
**Zweck:** Persönliche Visitenkarte mit Stundenwert
**Wert-Typen:** 1h, 5h, 10h, Custom
**Zielgruppe:** Selbstständige, Kreative, Freiberufler
**Elemente:** Portrait, Name, Kontaktdaten, Stundenwert, QR-Code

---

#### **2. GIFT (Geschenk)**
**Zweck:** Wertschätzung ausdrücken, Dankeschön
**Wert-Typen:** "Ein Dankeschön", "Für deine Hilfe", Custom Text
**Zielgruppe:** Alle Altersgruppen, emotionaler Use-Case
**Elemente:** Portrait, persönliche Nachricht, Wert/Text

---

#### **3. VALUE (Eigene Währung)** ⭐ **GAME CHANGER**
**Zweck:** Eigene Währung drucken - subsumiert viele Use-Cases
**Wert-Typen:** Stunden, Punkte, Custom Units, Community-Currency
**Zielgruppen:**
- Tauschringe
- Community-Netzwerke
- Event-Organizer (Getränkemarken)
- Bildungseinrichtungen (Leistungspunkte)
- Lokale Geschäfte (Loyalty Points)

**Warum Game Changer:**
- Unendlich viele Anwendungsfälle
- Identitätsstiftend für Communities
- Hoher emotionaler Mehrwert
- Skalierbar (kleine Communities bis große Organisationen)

---

#### **4. INVITE (Einladung/Ticket)**
**Zweck:** Event-Tickets, Einladungen, Zugangsberechtigungen
**Wert-Typen:** "Eintritt", "VIP-Zugang", "2 Personen", Custom
**Zielgruppe:** Veranstalter, Community-Builder, Privatpersonen
**Elemente:** Event-Info, QR-Code prominent, Optional: Portrait

---

### Die 8 Design-Kategorien

Diese sind **ästhetische Stile** - wie das Design aussieht. Ein Design kann für MEHRERE Use-Cases genutzt werden.

| Design-Kategorie | Beschreibung | Typische Merkmale |
|-----------------|--------------|-------------------|
| **Business/Professional** | Clean, minimalistisch, premium | Serif-Schriften, dezente Farben, klare Linien |
| **Spiritual/Conscious** | Bewusst, achtsam, naturverbunden | Erdtöne, organische Formen, ruhige Typografie |
| **Handcraft/Maker** | Handwerklich, robust, authentisch | Werkzeug-Symbolik, texturiert, bodenständig |
| **Wellness/Beauty** | Entspannt, elegant, pflegend | Sanfte Farben, fließende Formen, feminine Touch |
| **Creative/Artist** | Kreativ, künstlerisch, expressiv | Bunte Farben, experimentell, einzigartig |
| **Community/Local** | Gemeinschaftlich, lokal, identitätsstiftend | Community-Logos, regional, verbindend |
| **Vintage/Heritage** | Nostalgisch, klassisch, zeitlos | Vintage-Elemente, klassische Typografie |
| **Modern/Minimal** | Zeitgemäß, clean, reduziert | Sans-Serif, viel Weißraum, geometrisch |

**Beispiel:**
- Ein "Vintage/Heritage" Design kann für VISIT (Visitenkarte) UND GIFT (Geschenk) genutzt werden
- Ein "Business/Professional" Design passt zu VISIT UND VALUE (Firmenwährung)

---

## Two-Phase Development Approach

### Phase 1: Template System (MVP)

**Zeitrahmen:** 1-2 Wochen (mit AI-assisted Development durch Anton)

**Features:**
- Designer-Onboarding & Dashboard
- Asset-Upload (Background, Frames, Badges)
- Einfacher LayoutEditor (Positionierung von Elementen)
- Designer erstellt Beispiel-Layout
- Kunde übernimmt Layout oder passt an
- Speichern & Wiederverwenden von Custom Layouts
- Gallery mit Ranking (meistgedruckte Templates)

**Einschränkungen:**
- Begrenzte Drag & Drop Funktionalität
- Vorgegebene Element-Typen
- Manuelle Positionierung (Grid-basiert oder Snap-to-Grid)

**Datenmodell:**
```typescript
interface TemplateSkin {
  background: string;          // URL to background asset
  frontFrame?: string;
  backFrame?: string;
  badges?: {
    type: 'image' | 'text';
    variants: Array<{ value: number | string; image?: string }>;
  };
  colorPalette: {
    primary: string;
    secondary: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
}

interface Layout {
  front: LayoutSide;
  back: LayoutSide;
}

interface LayoutSide {
  layers: Layer[];  // Ordered from bottom to top
}

type Layer = BackgroundLayer | FrameLayer | ElementLayer | SecurityLayer;

interface ElementLayer {
  type: 'element';
  elementType: 'portrait' | 'name' | 'email' | 'value' | 'qrCode' | 'customImage' | ...;
  position: { x: number; y: number };
  size: { width: number; height: number };
  config?: ElementConfig;
  style?: TextStyle;
}
```

**User Stories:**
1. Als Designer kann ich Assets hochladen und ein Beispiel-Layout erstellen
2. Als Kunde kann ich ein Designer-Template wählen und das Beispiel-Layout übernehmen
3. Als Kunde kann ich Elemente im Layout verschieben und anpassen
4. Als Kunde kann ich mein Custom-Layout speichern und wiederverwenden
5. Als Kunde sehe ich die meistgedruckten Templates in der Gallery

---

### Phase 2: Full Canvas Editor mit AI (Post-Launch)

**Zeitrahmen:** 4-6 Wochen nach Launch

**Additional Features:**
- Vollständig freies Drag & Drop (react-dnd oder react-rnd)
- Layer-Management (Z-Index, Gruppierung)
- AI-gestützte Features:
  - **Smart Positioning:** AI schlägt harmonische Positionen vor
  - **Layout-Check:** Lesbarkeit, Balance, Überlappungen
  - **Hue-Shift:** Automatische Farbvarianten
  - **Prompt-based Adjustments:** "Mach den Namen größer", "Verschiebe Portrait nach rechts"
- Advanced Styling (Schatten, Effekte, Transparenz)
- Template als Starting Point, dann volle Customization

**AI Integration Beispiele:**
```typescript
// Smart Positioning
interface SmartPositioningSuggestion {
  element: ElementType;
  suggestedPosition: { x: number; y: number };
  reason: string; // "Harmoniert mit Portrait", "Bessere Balance"
}

// Layout Check
interface LayoutCheckResult {
  issues: Array<{
    type: 'overlap' | 'readability' | 'balance' | 'proximity';
    severity: 'error' | 'warning' | 'info';
    message: string;
    suggestion?: string;
  }>;
}

// Prompt-based Adjustment
async function adjustLayout(prompt: string, currentLayout: Layout): Promise<Layout> {
  // AI interpretiert Prompt und gibt neues Layout zurück
  // "Mach das größer" → AI erkennt "das" = selected element, vergrößert es
}
```

**Warum Phase 2 später:**
- Phase 1 ist schneller umsetzbar (1-2 Wochen vs. 4-6 Wochen)
- Ermöglicht frühen Launch und Feedback
- AI-Features brauchen mehr Testing und Refinement
- Kunden können mit Phase 1 schon produktiv arbeiten

---

## Designer Journey

### Komplette User Journey

```
┌─────────────────────────────────────────────────────────────────────┐
│                         DESIGNER JOURNEY                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. ENTDECKUNG & INTERESSE                                          │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Designer hört von Money-Printer                        │  │
│     │ • Besucht Website, sieht Gallery                         │  │
│     │ • Interesse geweckt: "Ich will auch designen!"          │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  2. ANMELDUNG & ONBOARDING                                          │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Designer erstellt Account                              │  │
│     │ • E-Mail + Passwort (oder Google/GitHub OAuth)           │  │
│     │ • Profil: Name, Portfolio-URL, Bio                       │  │
│     │ • Skills: Design-Tools (Figma, Illustrator, etc.)       │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  3. DESIGNER-DASHBOARD                                              │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Willkommens-Tutorial (Video/interaktiv)                │  │
│     │ • "Deine Templates" (leer am Anfang)                     │  │
│     │ • CTA: "Erstes Template erstellen"                       │  │
│     │ • Sidebar: Briefing, Specs, FAQ, Community               │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  4. TEMPLATE-ERSTELLUNG                                             │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ STEP 1: Design-Kategorie & Use-Cases wählen             │  │
│     │   • Kategorie: z.B. "Vintage/Heritage"                   │  │
│     │   • Use-Cases: VISIT + GIFT (mehrere möglich)           │  │
│     │   • Template-Name & Beschreibung                         │  │
│     │                                                           │  │
│     │ STEP 2: Assets hochladen                                 │  │
│     │   • Background (Drag & Drop, Max 2MB)                   │  │
│     │   • Front/Back Frame (optional)                          │  │
│     │   • Value-Badges (1h, 5h, 10h oder Custom)              │  │
│     │   • Live-Preview beim Upload                             │  │
│     │                                                           │  │
│     │ STEP 3: Farbpalette & Fonts                              │  │
│     │   • Primary, Secondary, Text Colors                      │  │
│     │   • Heading & Body Font auswählen                        │  │
│     │                                                           │  │
│     │ STEP 4: Beispiel-Layout erstellen                        │  │
│     │   • Nutzt SHARED LayoutEditor                            │  │
│     │   • Platziert Portrait, Name, Kontakte, QR-Code, etc.   │  │
│     │   • Front & Back designen                                 │  │
│     │   • Live-Preview während des Designs                     │  │
│     │                                                           │  │
│     │ STEP 5: Preview & Test                                   │  │
│     │   • Test-PDF generieren                                  │  │
│     │   • Mobile-Preview                                        │  │
│     │   • Validierung (Assets komplett, Layout ok?)           │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  5. SUBMISSION & REVIEW                                             │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Template einreichen                                    │  │
│     │ • Status: "Submitted" → Wartet auf Review               │  │
│     │ • Admin (Timo) reviewt Template                          │  │
│     │ • Feedback: Approve / Changes Requested / Reject         │  │
│     └───────────────────────────────────────────────────────────┘  │
│                              │                                      │
│                              ▼                                      │
│  6. PUBLISHED & TRACKING                                            │
│     ┌───────────────────────────────────────────────────────────┐  │
│     │ • Template ist live im Shop & Gallery                   │  │
│     │ • Designer sieht Stats:                                  │  │
│     │   - Anzahl Bestellungen                                  │  │
│     │   - Ranking in Gallery                                    │  │
│     │   - Optional: Revenue-Share (später)                     │  │
│     └───────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Technische Architektur

### System-Übersicht

**Integration in Money-Printing App:**
- Neue Routen in `money-printer-shop` (Next.js)
- `/designer/*` für Designer-Portal
- Shared Components zwischen Shop und Designer-Portal
- Supabase Backend (PostgreSQL + Auth + Storage)

### Tech-Stack

**Frontend:**
- Next.js (bereits vorhanden)
- React + TypeScript
- Tailwind CSS
- react-dnd oder react-rnd (für Drag & Drop in Phase 2)

**Backend:**
- Supabase:
  - PostgreSQL für Daten
  - Auth für Designer-Accounts
  - Storage für Assets
  - Row-Level Security (RLS) für Permissions

**AI (Phase 2):**
- Claude API für Smart Positioning, Layout-Check, Prompt-based Adjustments
- Image Analysis für automatisches Cropping, Background Removal

---

### Datenbank-Schema

**Wichtigste Tabellen:**

```sql
-- Designer-Profile
CREATE TABLE designers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  portfolio_url TEXT,
  bio TEXT,
  skills TEXT[],
  avatar_url TEXT,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Designer Templates (nur Assets + Skin)
CREATE TABLE designer_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  designer_id UUID REFERENCES designers(id),
  name TEXT NOT NULL,
  category TEXT NOT NULL,        -- Design-Kategorie (Business, Vintage, etc.)
  use_cases TEXT[],              -- ['visit', 'gift', 'value', 'invite']

  -- Template Skin (Assets + Colors + Fonts)
  skin JSONB NOT NULL,           -- TemplateSkin Interface

  -- Designer's Example Layout
  example_layout JSONB NOT NULL, -- Layout Interface

  status TEXT DEFAULT 'draft',
  usage_count INT DEFAULT 0,     -- Für Ranking
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Custom Layouts
CREATE TABLE user_layouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  template_id UUID REFERENCES designer_templates(id),
  custom_layout JSONB NOT NULL,  -- User's customized layout
  use_case TEXT,                  -- 'visit', 'gift', 'value', 'invite'
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Row-Level Security (RLS):**

```sql
-- Designer kann nur eigene Templates sehen/bearbeiten
ALTER TABLE designer_templates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Designers can view own templates"
  ON designer_templates FOR SELECT
  USING (designer_id IN (SELECT id FROM designers WHERE user_id = auth.uid()));

CREATE POLICY "Designers can create templates"
  ON designer_templates FOR INSERT
  WITH CHECK (designer_id IN (SELECT id FROM designers WHERE user_id = auth.uid()));

-- Admin (Timo) kann alles sehen
CREATE POLICY "Admins can view all"
  ON designer_templates FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE id = auth.uid() AND email = 'timo@moneyprinter.app'
    )
  );
```

---

## Designer-Dashboard

### Dashboard-Übersicht

```
╔═══════════════════════════════════════════════════════════════╗
║  Designer Portal                              [Profile▾]      ║
╠═══════════════════════════════════════════════════════════════╣
║  Dashboard  |  Templates  |  Stats  |  Ressourcen  |  FAQ     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  Willkommen zurück, [Designer Name]!                          ║
║                                                               ║
║  ┌─────────────────────┐  ┌─────────────────────┐            ║
║  │  DEINE TEMPLATES    │  │  PERFORMANCE        │            ║
║  │                     │  │                     │            ║
║  │  3 Published        │  │  142 Prints         │            ║
║  │  1 In Review        │  │  Rank #5 (Gallery)  │            ║
║  │  0 Draft            │  │  Trending ↗         │            ║
║  └─────────────────────┘  └─────────────────────┘            ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │  + NEUES TEMPLATE ERSTELLEN                          │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ═══ DEINE TEMPLATES ═════════════════════════════════════   ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ [Preview] Vintage Time Voucher                        │   ║
║  │           Kategorien: Vintage/Heritage                │   ║
║  │           Use-Cases: VISIT, GIFT                      │   ║
║  │           Status: Published ✓                         │   ║
║  │           Usage: 87 Prints | Rank #5                  │   ║
║  │           [Bearbeiten] [Stats] [Vorschau]             │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
║  ┌───────────────────────────────────────────────────────┐   ║
║  │ [Preview] Modern Business Card                        │   ║
║  │           Kategorien: Business/Professional           │   ║
║  │           Use-Cases: VISIT, VALUE                     │   ║
║  │           Status: In Review 🕐                        │   ║
║  │           Eingereicht: vor 2 Tagen                    │   ║
║  │           [Bearbeiten] [Status]                       │   ║
║  └───────────────────────────────────────────────────────┘   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Shared LayoutEditor Component

### Architektur

**Kernprinzip:** Designer und Kunde nutzen EXAKT denselben Editor-Component.

```typescript
interface LayoutEditorProps {
  mode: 'designer' | 'customer';
  templateSkin: TemplateSkin;        // Design assets vom Designer
  initialLayout?: Layout;            // Für Customer = Designer's Beispiel
  availableElements: ElementType[];  // z.B. ['portrait', 'name', 'email', ...]
  onSave: (layout: Layout) => void;
  readOnly?: boolean;
}

function LayoutEditor({ mode, templateSkin, initialLayout, ... }: LayoutEditorProps) {
  // Shared logic für Drag & Drop, Positionierung, Rendering
  // Modus-spezifische Unterschiede:
  // - Designer: Kann Skin-Elemente (Background, Frames) ändern
  // - Customer: Kann nur Layout anpassen, nicht Assets
}
```

### Phase 1: Einfacher Editor

**Features:**
- Drag Elements aus Sidebar auf Canvas
- Positionierung per Drag oder Koordinaten-Input
- Resize-Handles für Größenanpassung
- Properties Panel für Element-Config
- Layer-Reihenfolge (einfache Liste)
- Live-Preview

**UI-Layout:**
```
┌────────────────────────────────────────────────────────────────┐
│  Layout Editor                          [Save] [Cancel]         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SIDEBAR            CANVAS                  PROPERTIES         │
│  ─────────          ──────                  ──────────         │
│                                                                │
│  Elements:         ┌──────────────────┐   Selected:           │
│                    │                  │   Portrait            │
│  [📷 Portrait]     │  ┌──────────┐   │                       │
│  [💰 Value]        │  │          │   │   Position:           │
│  [📝 Name]         │  │ Portrait │   │   X: 500px            │
│  [📝 Email]        │  │          │   │   Y: 500px            │
│  [QR QR-Code]      │  └──────────┘   │                       │
│                    │                  │   Size:               │
│                    │     [Value]      │   W: 600px            │
│  Layers:           │                  │   H: 800px            │
│  (bottom→top)      │  [Name]          │                       │
│                    │  [Email]    [QR] │   Shape:              │
│  🔲 Background     │                  │   ◉ Ellipse           │
│  🔲 Frame          │  [Serial No.]    │   ○ Circle            │
│  🔲 Portrait ✓     │                  │   ○ Rectangle         │
│  🔲 Value          └──────────────────┘                       │
│  🔲 Name                                [Apply Changes]       │
│  ...                                                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Phase 2: Advanced Editor mit AI

**Additional Features:**
- Vollständig freies Drag & Drop (react-dnd)
- Advanced Layer-Management (Gruppierung, Locking)
- AI-Suggestions beim Platzieren
- Layout-Check mit Warnings
- Prompt-based Adjustments
- Effekte (Schatten, Transparenz, etc.)

---

## Gallery & Ranking System

### Public Gallery

**Ziel:** Social Proof durch meistgedruckte Templates.

**Features:**
- Alle published Templates in Grid-Ansicht
- Sortierung nach:
  - **Beliebtheit** (meistgedruckt) ⭐ Default
  - Neueste
  - Design-Kategorie
  - Use-Case
- Designer-Credit prominent
- Preview & "Use This Template" Button

**UI:**
```
╔═══════════════════════════════════════════════════════════════╗
║  Template Gallery                                             ║
╠═══════════════════════════════════════════════════════════════╣
║  Filter: [All Categories▾] [All Use-Cases▾]                   ║
║  Sort by: [◉ Most Printed] [ Newest ] [ Designer Name ]       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          ║
║  │ [Preview]   │  │ [Preview]   │  │ [Preview]   │          ║
║  │             │  │             │  │             │          ║
║  │ Vintage     │  │ Modern      │  │ Spiritual   │          ║
║  │ Voucher     │  │ Business    │  │ Wellness    │          ║
║  │             │  │             │  │             │          ║
║  │ by Anna S.  │  │ by Max W.   │  │ by Lisa M.  │          ║
║  │ 🔥 142 prints│  │ 🔥 98 prints │  │ 🔥 87 prints │          ║
║  │ [Use This]  │  │ [Use This]  │  │ [Use This]  │          ║
║  └─────────────┘  └─────────────┘  └─────────────┘          ║
║                                                               ║
║  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          ║
║  │ ...         │  │ ...         │  │ ...         │          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Ranking Algorithm:**
```typescript
interface TemplateRankingScore {
  templateId: string;
  usageCount: number;      // Anzahl Bestellungen
  recentUsage: number;     // Letzte 30 Tage
  trending: boolean;       // Stark steigend?
  score: number;           // Gewichtete Score für Ranking
}

function calculateRankingScore(template: DesignerTemplate): number {
  const usageWeight = 0.6;
  const recencyWeight = 0.3;
  const trendingWeight = 0.1;

  return (
    template.usage_count * usageWeight +
    template.recent_usage_30d * recencyWeight +
    (template.trending ? 100 : 0) * trendingWeight
  );
}
```

---

## Integration in Money-Printing App

### Neue Routen

**Designer-Portal:**
```
/designer                  # Landing & Onboarding
/designer/dashboard        # Dashboard
/designer/templates/new    # Neues Template erstellen
/designer/templates/:id    # Template bearbeiten
/designer/stats           # Performance Stats
/designer/resources       # Briefing, Specs, FAQ
```

**Shop-Integration:**
```
/templates                 # Public Gallery
/templates/:id/preview     # Template-Preview
/customize                 # Customer nutzt LayoutEditor (mode='customer')
```

### Shared Components

```
src/
├── components/
│   ├── shared/
│   │   ├── LayoutEditor.tsx          # SHARED between designer & customer
│   │   ├── BillPreview.tsx
│   │   ├── TemplateRenderer.tsx
│   │   └── PDFExporter.tsx
│   │
│   ├── designer/
│   │   ├── Dashboard.tsx
│   │   ├── TemplateWizard/
│   │   │   ├── Step1Category.tsx
│   │   │   ├── Step2Assets.tsx
│   │   │   ├── Step3Colors.tsx
│   │   │   ├── Step4Layout.tsx       # Uses LayoutEditor
│   │   │   └── Step5Preview.tsx
│   │   └── StatsCard.tsx
│   │
│   └── shop/
│       ├── TemplateGallery.tsx
│       ├── TemplateCard.tsx
│       └── CustomizeView.tsx          # Uses LayoutEditor
│
├── lib/
│   ├── designer/
│   │   ├── storage.ts                 # Asset upload
│   │   ├── templateBuilder.ts         # Generate template JSON
│   │   └── validation.ts
│   │
│   └── layout/
│       ├── layoutEngine.ts            # Layout calculations
│       └── aiSuggestions.ts           # Phase 2: AI features
│
└── types/
    ├── designer.ts
    ├── template.ts
    └── layout.ts
```

---

## Admin-View (für Timo)

### Admin-Dashboard

**Route:** `/admin/designer-templates`

```
╔═══════════════════════════════════════════════════════════════╗
║  Designer Templates - Admin                                   ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║  ┌─────────────────┐  ┌─────────────────┐  ┌──────────────┐ ║
║  │  DESIGNER       │  │  TEMPLATES      │  │  PENDING     │ ║
║  │  12 Active      │  │  24 Published   │  │  3 Review    │ ║
║  └─────────────────┘  └─────────────────┘  └──────────────┘ ║
║                                                               ║
║  ═══ PENDING REVIEWS ═════════════════════════════════════   ║
║                                                               ║
║  ┌──────────────────────────────────────────────────────┐    ║
║  │ [Preview] Wellness Voucher                           │    ║
║  │           Designer: Lisa Müller                       │    ║
║  │           Kategorie: Wellness, Use-Cases: VISIT,GIFT │    ║
║  │           Eingereicht: vor 1 Tag                      │    ║
║  │           [Review] [Approve] [Request Changes]       │    ║
║  └──────────────────────────────────────────────────────┘    ║
║                                                               ║
║  ═══ ALL TEMPLATES ═══════════════════════════════════════   ║
║                                                               ║
║  Filter: [Status▾] [Category▾] [Designer▾]  [Search...]      ║
║                                                               ║
║  [Table: All templates with status, usage, actions]          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Review-Workflow

**1. Admin öffnet Review-Page**
- Sieht Template-Preview (Front & Back)
- Kann Test-PDF generieren
- Sieht alle Assets & Metadaten
- Validierungs-Ergebnisse

**2. Feedback geben**
- Kommentar schreiben
- Status setzen:
  - ✅ **Approve** → Published
  - ⚠️ **Request Changes** → Designer muss nachbessern
  - ❌ **Reject** → Template abgelehnt

**3. Designer wird benachrichtigt**
- E-Mail mit Feedback
- Dashboard zeigt neuen Status
- Bei "Changes Requested" kann Designer bearbeiten und neu einreichen

---

## Timeline & Roadmap

### Phase 1: MVP Template System (1-2 Wochen)

**Woche 1:**
- [ ] Supabase Setup (Database, Auth, Storage)
- [ ] Schema erstellen, RLS Policies
- [ ] Auth-Flow (Sign-up, Login)
- [ ] Designer-Dashboard (Basic UI)
- [ ] Routing (`/designer/*`)

**Woche 2:**
- [ ] Asset-Upload-Flow
- [ ] LayoutEditor Component (Basic Version)
- [ ] Template Submission Flow
- [ ] Admin-Review-Page
- [ ] Public Gallery mit Ranking

**DONE:** Phase 1 MVP launchbereit!

---

### Phase 2: Full Canvas Editor mit AI (4-6 Wochen nach Launch)

**Woche 1-2: Advanced Editor**
- [ ] react-dnd Integration
- [ ] Advanced Layer-Management
- [ ] Properties Panel erweitern
- [ ] Effekte & Styling

**Woche 3-4: AI-Integration**
- [ ] Smart Positioning (Claude API)
- [ ] Layout-Check
- [ ] Hue-Shift für Farbvarianten
- [ ] Image Analysis für Auto-Crop

**Woche 5-6: Prompt-based Adjustments**
- [ ] Natural Language Interface
- [ ] "Mach das größer" → AI interpretiert & ändert Layout
- [ ] Context-aware Suggestions
- [ ] Testing & Refinement

**DONE:** Phase 2 Advanced Features live!

---

### Post-Launch (Continuous)

**Analytics & Optimization:**
- [ ] A/B-Testing für Gallery-UI
- [ ] Designer-Performance-Dashboard
- [ ] Revenue-Share-System (optional)
- [ ] Designer-Community-Features (Forum, Discord)

**Expansion:**
- [ ] Mehr Design-Kategorien
- [ ] Kollaborations-Features (Team-Templates)
- [ ] White-Label-Optionen für große Designer
- [ ] Template-Varianten (Seasons, Holidays)

---

## Offene Fragen & Entscheidungen

### Für Timo zu entscheiden:

1. **Timeline bestätigen:**
   - Phase 1 in 1-2 Wochen realistisch? (mit Anton's AI-assisted Development)
   - Phase 2 nach Launch oder schon vorher?

2. **Designer-Incentives:**
   - Credit + Portfolio-Link ausreichend?
   - Revenue-Share später einführen?
   - Einmalige Zahlung pro Template?

3. **Qualitätskontrolle:**
   - Nur Timo reviewt oder auch Anton/Team?
   - Automatische Validierung ausreichend für Auto-Approve?

4. **Gallery:**
   - Public Ranking wirklich anzeigen (z.B. "142 Prints")?
   - Oder abstrahieren (z.B. nur "Popular", "Trending")?

5. **Phase 2 AI:**
   - Welche AI-Features priorisieren?
   - Budget für Claude API Calls?

---

## Next Steps

### Diese Woche:

1. **Timo reviewed Konzept** ✅
2. **Meeting:** Konzept besprechen, offene Fragen klären
3. **Go/No-Go Entscheidung**
4. **Anton briefen:** Phase 1 Spec schon vorhanden ([designer-onboarding-phase1-spec.md](c:\Users\Timo\Worspace\Vision\designer-onboarding-phase1-spec.md))

### Wenn Go:

5. **Phase 1 Development starten** (1-2 Wochen)
6. **Designer-Briefing-Dokument schreiben**
7. **Template-Vorlagen erstellen** (Figma, Illustrator)
8. **Launch vorbereiten**

---

## Anhang: Ressourcen

### Bestehende Docs:
- [Phase 1 Technical Specification](c:\Users\Timo\Worspace\Vision\designer-onboarding-phase1-spec.md) - Für Anton
- [Template-System-Spezifikation](c:\Users\Timo\Worspace\money-printing\docs\02-produkt\template-system-specification.md)
- [Kommunikationskonzept](c:\Users\Timo\Worspace\money-printing\docs\04-geschaeft\kommunikationskonzept.md)

### Neu zu erstellen:
- Designer-Briefing.pdf (für Designer)
- Figma/Illustrator/Photoshop-Vorlagen
- Tutorial-Videos (nach Phase 1)

---

*Dokumentiert am 5. Februar 2026*
*Von Eli, für Timo und das Money-Printing Team*

**Status:** 🟢 Ready for Review - Two-Phase Approach finalisiert

