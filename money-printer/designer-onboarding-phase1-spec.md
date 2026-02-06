# Designer Onboarding - Phase 1 Spezifikation

**Für: Anton**
**Version:** 1.0 - Phase 1 (Template-System)
**Datum:** 5. Februar 2026
**Ziel:** Schnelles MVP (1-2 Wochen)

---

## Executive Summary

**Was bauen wir:**
Ein Designer-Onboarding-System, bei dem Designer Design-Assets hochladen und ein Beispiel-Layout erstellen. Dieses Layout wird als Vorlage in der Galerie angezeigt. Kunden können die Vorlage 1:1 nutzen ODER Elemente nach Belieben anpassen.

**Kernprinzip:**
- Designer & Kunde = **gleiche Tools**
- Designer setzt **Beispiel-Layout** (Vorlage)
- Kunde kann **übernehmen ODER anpassen**

**Timeline:** 1-2 Wochen (mit AI-unterstützter Entwicklung)

---

## Inhaltsverzeichnis

1. [User Stories](#user-stories)
2. [System-Architektur](#system-architektur)
3. [Datenmodell](#datenmodell)
4. [UI-Komponenten](#ui-komponenten)
5. [API-Endpoints](#api-endpoints)
6. [Designer-Flow](#designer-flow)
7. [Kunden-Flow](#kunden-flow)
8. [Template-Schema (erweitert)](#template-schema-erweitert)
9. [Implementierungs-Prioritäten](#implementierungs-prioritäten)
10. [Phase 2 Vorbereitung](#phase-2-vorbereitung)

---

## User Stories

### **Als Designer (Alex)**

**Story 1: Design hochladen**
```
Als Designer Alex
möchte ich meine Design-Assets (Background, Frame, Badges) hochladen
damit ich eine neue Template-Vorlage erstellen kann
```

**Akzeptanzkriterien:**
- Drag & Drop Upload für Background (WebP/PNG, max 2MB)
- Optional: Front/Back Frame
- Badge-Upload (1h, 5h, 10h - je PNG)
- Live-Preview nach Upload
- Validierung (Dateigröße, Format, Dimensionen)

---

**Story 2: Layout erstellen (Beispiel-Schein)**
```
Als Designer Alex
möchte ich ein Beispiel-Layout erstellen
damit Kunden sehen, wie mein Design aussehen kann
```

**Akzeptanzkriterien:**
- Drag & Drop Editor öffnet sich nach Asset-Upload
- Elemente aus Sidebar auf Canvas ziehen (Portrait, Name, Wert, etc.)
- Elemente positionieren & Größe ändern
- Text-Styles einstellen (Font, Size, Color)
- Sicherheitsmerkmale platzieren (Silber-Folie, Hologramm)
- Live-Preview Front & Back
- Speichern → Wird zu "Template-Vorlage"

---

**Story 3: Template einreichen**
```
Als Designer Alex
möchte ich mein fertiges Template zur Review einreichen
damit es in der Galerie veröffentlicht werden kann
```

**Akzeptanzkriterien:**
- "Submit for Review" Button
- Status wechselt zu "Submitted"
- Timo bekommt Notification
- Ich sehe Status in meinem Dashboard

---

### **Als Kunde (Maria, Friseurin)**

**Story 4: Template aus Galerie wählen**
```
Als Kundin Maria
möchte ich ein schönes Design aus der Galerie wählen
damit mein Friseur-Gutschein professionell aussieht
```

**Akzeptanzkriterien:**
- Galerie zeigt alle verfügbaren Templates
- Filter nach Kategorie (Wellness, Business, etc.)
- Filter nach Use-Case (Gutschein, Visitenkarte, etc.)
- Ranking sichtbar ("2.345x gedruckt")
- Preview (Front & Back) beim Hover
- "Jetzt verwenden" Button

---

**Story 5: Layout übernehmen (einfach)**
```
Als Kundin Maria
möchte ich das Designer-Layout einfach übernehmen
damit ich nur meine Daten eingeben muss
```

**Akzeptanzkriterien:**
- "Layout übernehmen" als Standard-Option
- Formular zeigt nur Daten-Felder (Name, Kontakt, Portrait-Upload, etc.)
- Live-Preview zeigt mein Schein mit meinen Daten
- Keine Layout-Anpassung nötig
- "Zur Kasse" wenn fertig

---

**Story 6: Layout anpassen (fortgeschritten)**
```
Als Kundin Maria
möchte ich das Layout etwas anpassen
weil ich mein Logo an eine andere Stelle möchte
```

**Akzeptanzkriterien:**
- "Layout anpassen" Button → Öffnet Editor
- Ich sehe das Designer-Layout als Ausgangspunkt
- Ich kann Elemente verschieben
- Ich kann Größen ändern
- Ich kann eigene Bilder hochladen (Logo)
- "Speichern" → Mein Layout wird gespeichert
- Beim nächsten Mal kann ich es wiederverwenden

---

### **Als Admin (Timo)**

**Story 7: Templates reviewen**
```
Als Admin Timo
möchte ich eingereichte Templates reviewen
damit nur hochwertige Designs in der Galerie landen
```

**Akzeptanzkriterien:**
- Admin-Dashboard zeigt "Pending Reviews"
- Ich kann Template-Details ansehen
- Live-Preview mit Test-Daten
- Test-PDF generieren
- Feedback geben (Text)
- Approve / Request Changes / Reject

---

## System-Architektur

### **High-Level-Übersicht**

```
┌─────────────────────────────────────────────────────────┐
│              MONEY-PRINTER SHOP (Next.js)               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────────────────────┐      ┌──────────────────────┐  │
│  │  PUBLIC SHOP       │      │  DESIGNER PORTAL     │  │
│  │                    │      │                      │  │
│  │  /gallery          │◄────►│  /designer/dashboard │  │
│  │  /customize        │      │  /designer/studio    │  │
│  │  /cart             │      │                      │  │
│  └────────────────────┘      └──────────────────────┘  │
│           │                            │                │
│           └────────────┬───────────────┘                │
│                        │                                │
│                        ▼                                │
│         ┌──────────────────────────────┐               │
│         │   SHARED: LAYOUT EDITOR      │               │
│         │   (React Component)          │               │
│         │                              │               │
│         │   - Drag & Drop Elements     │               │
│         │   - Resize & Position        │               │
│         │   - Live Preview             │               │
│         │   - Save Layout              │               │
│         └──────────────────────────────┘               │
│                        │                                │
└────────────────────────┼────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────────┐
        │          SUPABASE                  │
        ├────────────────────────────────────┤
        │  • designers (table)               │
        │  • designer_templates (table)      │
        │  • user_layouts (table) ← NEU!     │
        │  • template_assets (storage)       │
        └────────────────────────────────────┘
```

---

## Datenmodell

### **Tabelle: `designer_templates`** (angepasst)

```sql
CREATE TABLE designer_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  designer_id UUID REFERENCES designers(id),

  -- Metadata
  name TEXT NOT NULL,
  category TEXT NOT NULL, -- 'wellness', 'business', 'spiritual', etc.
  description TEXT,
  tags TEXT[],

  -- Design-Assets (Skin)
  skin JSONB NOT NULL, -- { background, frame, badges, colorPalette, fonts }

  -- Verfügbare Elemente (was kann platziert werden)
  available_elements TEXT[], -- ['portrait', 'name', 'value', 'qrCode', etc.]

  -- Designer's Example Layout (Vorlage!)
  example_layout JSONB NOT NULL, -- Das Layout, das Designer erstellt hat

  -- Status
  status TEXT DEFAULT 'draft', -- draft, submitted, approved, published

  -- Stats
  usage_count INT DEFAULT 0, -- Wie oft gedruckt

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  submitted_at TIMESTAMPTZ,
  approved_at TIMESTAMPTZ,
  published_at TIMESTAMPTZ
);

-- Index für Galerie-Abfragen
CREATE INDEX idx_templates_status ON designer_templates(status);
CREATE INDEX idx_templates_category ON designer_templates(category);
CREATE INDEX idx_templates_usage ON designer_templates(usage_count DESC);
```

---

### **Tabelle: `user_layouts`** (NEU!)

**Zweck:** Speichert Kunden-Layouts (wenn sie Designer-Layout anpassen)

```sql
CREATE TABLE user_layouts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  template_id UUID REFERENCES designer_templates(id),

  -- Layout-Name (optional, für Wiedererkennung)
  name TEXT DEFAULT 'Mein Schein',

  -- Custom Layout (angepasst vom Kunden)
  custom_layout JSONB NOT NULL,

  -- Verwendungszweck
  use_case TEXT, -- 'visit', 'gift', 'value', 'invite'

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  last_used_at TIMESTAMPTZ
);

-- RLS Policy
ALTER TABLE user_layouts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own layouts"
  ON user_layouts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create layouts"
  ON user_layouts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own layouts"
  ON user_layouts FOR UPDATE
  USING (auth.uid() = user_id);
```

---

## Template-Schema (erweitert)

### **Skin-Definition** (was Designer hochlädt)

```typescript
interface TemplateSkin {
  // Design-Assets
  background: string;          // URL zu Background-Datei
  frontFrame?: string;         // Optional
  backFrame?: string;          // Optional

  badges?: {
    type: 'image' | 'text';
    variants?: Array<{
      value: string | number;  // "1h", "5h", "10h"
      image?: string;          // URL wenn type='image'
      text?: string;           // Text wenn type='text'
    }>;
  };

  // Farbpalette
  colorPalette: {
    primary: string;           // Hex
    secondary: string;
    text: string;
    accent?: string;
  };

  // Fonts
  fonts: {
    heading: string;           // Font-Name (z.B. "Playfair Display")
    body: string;
    headingUrl?: string;       // Optional custom font URL
    bodyUrl?: string;
  };

  // Optionale Design-Features
  hueShiftEnabled?: boolean;   // Können Farben angepasst werden?
}
```

---

### **Layout-Definition** (was gespeichert wird)

```typescript
interface Layout {
  front: LayoutSide;
  back: LayoutSide;
}

interface LayoutSide {
  layers: Layer[];
}

type Layer =
  | BackgroundLayer
  | FrameLayer
  | ElementLayer
  | SecurityLayer;

interface BackgroundLayer {
  type: 'background';
  source: string;              // URL zu Background
  hueShift?: number;           // 0-360 (optional)
}

interface FrameLayer {
  type: 'frame';
  source: string;
}

interface ElementLayer {
  type: 'element';
  elementType: ElementType;    // 'portrait', 'name', 'value', etc.

  // Position & Size
  position: { x: number; y: number };
  size: { width: number; height: number };

  // Element-spezifische Config
  config?: ElementConfig;

  // Style (für Text-Elemente)
  style?: {
    fontSize?: number;
    fontFamily?: string;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    fontWeight?: number | string;
  };
}

type ElementType =
  | 'portrait'
  | 'name'
  | 'email'
  | 'phone'
  | 'website'
  | 'value'
  | 'valueText'
  | 'promiseText'
  | 'eventText'
  | 'serialNumber'
  | 'qrCode'
  | 'customImage'      // User-uploaded (Logo, etc.)
  | 'customText'       // Freies Textfeld
  | 'watermark';

interface ElementConfig {
  // Für Portrait
  clip?: 'ellipse' | 'circle' | 'rectangle' | 'none';
  engraving?: boolean;
  backgroundRemoval?: boolean;

  // Für Text
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;

  // Für Custom Image
  uploadedUrl?: string;       // User-uploaded file URL

  // Für QR-Code
  qrSize?: number;

  // Für Watermark
  opacity?: number;
  rotation?: number;
}

interface SecurityLayer {
  type: 'security';
  securityType: 'silverFoil' | 'hologram';
  area: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
```

---

## UI-Komponenten

### **1. LayoutEditor Component** (Herzstück!)

**Props:**
```typescript
interface LayoutEditorProps {
  mode: 'designer' | 'customer';     // Designer = erstellt Vorlage, Customer = passt an
  templateSkin: TemplateSkin;        // Das Design (Background, etc.)
  initialLayout?: Layout;            // Vorhandenes Layout (bei Customer = Designer's example)
  availableElements: ElementType[];  // Welche Elemente können platziert werden
  onSave: (layout: Layout) => void;
}
```

**Aufbau:**
```
┌──────────────────────────────────────────────────────────┐
│  Layout Editor                        [Save] [Preview]   │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  SIDEBAR (left)      CANVAS (center)      PROPERTIES     │
│  ───────────         ──────────────       ──────────     │
│                                                          │
│  Elemente:          ┌──────────────┐     Selected:      │
│                     │              │     Portrait        │
│  📷 Portrait        │ [Background] │                     │
│  💰 Wert-Badge      │              │     X: 500          │
│  📝 Name            │  [Portrait]  │     Y: 600          │
│  📝 Email           │              │     W: 400          │
│  📝 Phone           │  [Badge]     │     H: 500          │
│  📝 Versprechen     │              │                     │
│  QR QR-Code         │  [Name] [QR] │     Clip:           │
│  #️⃣ Seriennummer    │              │     ◉ Circle        │
│  🖼️ Custom Image    │  [#12345]    │     ○ Ellipse       │
│  🔒 Sicherheit      │              │     ○ Rectangle     │
│                     └──────────────┘                     │
│  [Front] [Back]                          Features:       │
│                                          ☑ Engraving     │
│                                          ☑ BG-Removal    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Kern-Features:**
- Drag & Drop von Sidebar auf Canvas
- Drag innerhalb Canvas (Repositionieren)
- Resize-Handles an ausgewähltem Element
- Properties-Panel zeigt element-spezifische Optionen
- Live-Preview während Änderungen
- Undo/Redo (später, nice-to-have)

**Libraries:**
- `react-dnd` für Drag & Drop
- `react-rnd` für Resizable & Draggable innerhalb Canvas
- `fabricjs` ODER eigenes Canvas-Rendering (wie bisher)

---

### **2. ElementLibrary Component** (Sidebar)

**Zeigt verfügbare Elemente an, draggable**

```tsx
function ElementLibrary({ availableElements, onDragStart }) {
  return (
    <div className="element-library">
      <h3>Elemente</h3>
      {availableElements.map(elementType => (
        <DraggableElement
          key={elementType}
          type={elementType}
          icon={getIconForElement(elementType)}
          label={getLabelForElement(elementType)}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}
```

---

### **3. CanvasArea Component**

**Zeigt Template-Skin + platzierte Elemente**

```tsx
function CanvasArea({ skin, layers, onElementSelect, onElementMove, onElementResize }) {
  return (
    <div className="canvas-container">
      {/* Background */}
      <img src={skin.background} className="canvas-background" />

      {/* Frame (optional) */}
      {skin.frontFrame && <img src={skin.frontFrame} className="canvas-frame" />}

      {/* Platzierte Elemente */}
      {layers.map(layer => (
        <DraggableResizableElement
          key={layer.id}
          layer={layer}
          onSelect={onElementSelect}
          onMove={onElementMove}
          onResize={onElementResize}
        />
      ))}
    </div>
  );
}
```

---

### **4. PropertiesPanel Component**

**Zeigt Optionen für ausgewähltes Element**

```tsx
function PropertiesPanel({ selectedElement, onChange }) {
  if (!selectedElement) return <p>Kein Element ausgewählt</p>;

  return (
    <div className="properties-panel">
      <h3>{selectedElement.elementType}</h3>

      {/* Position */}
      <div>
        <label>X:</label>
        <input type="number" value={selectedElement.position.x} onChange={...} />
        <label>Y:</label>
        <input type="number" value={selectedElement.position.y} onChange={...} />
      </div>

      {/* Size */}
      <div>
        <label>Width:</label>
        <input type="number" value={selectedElement.size.width} onChange={...} />
        <label>Height:</label>
        <input type="number" value={selectedElement.size.height} onChange={...} />
      </div>

      {/* Element-spezifische Optionen */}
      {selectedElement.elementType === 'portrait' && (
        <PortraitOptions config={selectedElement.config} onChange={onChange} />
      )}

      {selectedElement.elementType === 'name' && (
        <TextOptions style={selectedElement.style} onChange={onChange} />
      )}

      {/* ... weitere Element-Typen */}
    </div>
  );
}
```

---

## API-Endpoints

### **Designer-Endpoints**

**1. Template erstellen**
```
POST /api/designer/templates
Body: {
  name: "Wellness Harmony",
  category: "wellness",
  description: "...",
  tags: ["wellness", "spa", "calm"]
}
Response: { id: "uuid", status: "draft" }
```

---

**2. Assets hochladen**
```
POST /api/designer/templates/:id/assets
Body: FormData {
  background: File
  frontFrame?: File
  backFrame?: File
  badge_1h: File
  badge_5h: File
  badge_10h: File
}
Response: {
  skin: {
    background: "https://...url",
    badges: { ... }
  }
}
```

---

**3. Layout speichern (Designer's Example)**
```
POST /api/designer/templates/:id/layout
Body: {
  layout: { front: { layers: [...] }, back: { layers: [...] } }
}
Response: { success: true }
```

---

**4. Template einreichen**
```
POST /api/designer/templates/:id/submit
Response: { status: "submitted" }
```

---

### **Kunden-Endpoints**

**5. Templates abrufen (Galerie)**
```
GET /api/templates?category=wellness&useCase=gift&sort=popular
Response: [
  {
    id: "uuid",
    name: "Wellness Harmony",
    category: "wellness",
    designer: { name: "Alex", portfolio: "..." },
    previewUrls: { front: "...", back: "..." },
    usageCount: 2345,
    tags: [...]
  },
  ...
]
```

---

**6. Template-Details abrufen**
```
GET /api/templates/:id
Response: {
  id: "uuid",
  name: "Wellness Harmony",
  skin: { ... },
  exampleLayout: { front: { ... }, back: { ... } },
  availableElements: ['portrait', 'name', ...]
}
```

---

**7. Custom Layout speichern (Kunde)**
```
POST /api/user/layouts
Body: {
  templateId: "uuid",
  useCase: "gift",
  customLayout: { front: { ... }, back: { ... } }
}
Response: { id: "layout-uuid" }
```

---

**8. User-Layouts abrufen**
```
GET /api/user/layouts
Response: [
  {
    id: "layout-uuid",
    name: "Mein Friseur-Schein",
    templateId: "uuid",
    lastUsed: "2026-02-01"
  },
  ...
]
```

---

## Designer-Flow

### **Schritt-für-Schritt**

**1. Anmeldung/Profil**
- Designer registriert sich (oder wird eingeladen)
- Profil: Name, Portfolio, Bio, Skills

**2. Neues Template erstellen**
- Button: "Neues Design erstellen"
- Formular:
  - Name: "Wellness Harmony"
  - Kategorie: Wellness
  - Beschreibung: "..."
  - Tags: wellness, spa, calm
- → Erstellt Draft-Template

**3. Assets hochladen**
- Drag & Drop für:
  - Background (Pflicht)
  - Front Frame (Optional)
  - Back Frame (Optional)
  - Badges: 1h, 5h, 10h
- Validierung (Größe, Format)
- Live-Preview nach Upload

**4. Beispiel-Layout erstellen**
- LayoutEditor öffnet sich
- Designer zieht Elemente auf Canvas:
  - Portrait (oben links, Kreis)
  - Wert-Badge (rechts)
  - Name (unten mittig)
  - Email, Phone (unten links)
  - QR-Code (unten rechts)
  - Seriennummer (ganz unten)
- Positioniert & stylt alles
- Platziert Sicherheitsmerkmale (Silber-Folie um Badge)
- **Speichert als "Example Layout"**

**5. Preview & Test**
- Sieht Live-Preview mit Test-Daten
- Generiert Test-PDF
- Prüft Front & Back

**6. Einreichen**
- "Submit for Review"
- Status → "Submitted"
- Notification an Timo

---

## Kunden-Flow

### **Variante A: Layout übernehmen (einfach)**

**1. Galerie durchstöbern**
- Filter: Kategorie = Wellness
- Sieht "Wellness Harmony" Template
- Preview zeigt Designer's Example-Layout
- "2.345x gedruckt" (Social Proof)

**2. "Jetzt verwenden"**
- Wählt Use-Case: "Gift" (Gutschein)
- → Formular öffnet sich

**3. Daten eingeben**
- Portrait hochladen
- Name: "Maria Schmidt"
- Email, Phone
- Wert: "1 Massage"
- Versprechen-Text: "..."
- → **Layout wird NICHT angezeigt** (übernimmt Designer's Example)

**4. Live-Preview**
- Sieht ihren Schein mit ihren Daten
- Genau so wie Designer es designed hat

**5. Zur Kasse**
- "In den Warenkorb"
- Checkout

---

### **Variante B: Layout anpassen (fortgeschritten)**

**1-2. Wie Variante A**

**3. "Layout anpassen"**
- Button: "Layout anpassen" statt nur Formular
- → LayoutEditor öffnet sich
- Zeigt Designer's Example-Layout als **Ausgangspunkt**

**4. Elemente anpassen**
- Maria möchte ihr Salon-Logo hinzufügen:
  - Zieht "Custom Image" aus Sidebar
  - Uploaded Logo
  - Platziert oben rechts
- Verschiebt QR-Code etwas nach links
- Vergrößert ihren Namen
- → **Speichert als "Mein Friseur-Schein"**

**5. Live-Preview**
- Sieht ihren custom Schein

**6. Zur Kasse**
- Layout ist gespeichert
- Beim nächsten Mal kann sie es wiederverwenden

---

## Implementierungs-Prioritäten

### **MVP (Muss sein für Launch):**

#### **1. Core Editor (Woche 1)**
- [ ] LayoutEditor Component
  - [ ] Drag & Drop von Sidebar auf Canvas
  - [ ] Drag innerhalb Canvas (Repositionieren)
  - [ ] Resize-Handles
  - [ ] PropertiesPanel (Position, Size, basic options)
- [ ] ElementLibrary Component
- [ ] CanvasArea Component (zeigt Skin + Elemente)

#### **2. Datenbank & API (Woche 1)**
- [ ] `designer_templates` Tabelle angepasst
- [ ] `user_layouts` Tabelle erstellt
- [ ] API-Endpoints (Templates CRUD, Layouts CRUD)
- [ ] File-Upload (Supabase Storage)

#### **3. Designer-Flow (Woche 1-2)**
- [ ] Asset-Upload-Page
- [ ] LayoutEditor Integration
- [ ] Speichern von Example-Layout
- [ ] Submit-Flow

#### **4. Kunden-Flow (Woche 2)**
- [ ] Galerie (mit Filter, Sort)
- [ ] Template-Detail-Page
- [ ] "Layout übernehmen" (Formular-Modus)
- [ ] "Layout anpassen" (Editor-Modus)
- [ ] User-Layout speichern & wiederverwenden

#### **5. Rendering & Export (Woche 2)**
- [ ] Generic Renderer anpassen (liest Layout aus DB)
- [ ] PDF-Export mit Custom-Layout
- [ ] Live-Preview während Editing

---

### **Nice-to-Have (später):**
- [ ] Undo/Redo im Editor
- [ ] Snap-to-Grid / Snap-to-Element
- [ ] Guides beim Positionieren
- [ ] Zoom im Canvas (50%, 100%, 200%)
- [ ] Keyboard-Shortcuts (Arrow-Keys zum Verschieben, Delete zum Löschen)
- [ ] Element-Duplikation
- [ ] Layer-Management (Z-Index anpassen)

---

## Phase 2 Vorbereitung

**Was kommt in Phase 2 (Canvas-Editor mit AI)?**

### **Zusätzliche Features:**

**1. AI-gestützte Platzierung**
- User zieht Element → AI schlägt beste Positionen vor
- "Hier passt es harmonisch" Indicators

**2. AI-Farbanpassung**
- User uploaded Logo mit anderen Farben
- AI: "Möchtest du Logo-Farben an Template anpassen?"
- → Automatische Farb-Harmonisierung

**3. AI-Layout-Check**
- Vor Export: AI prüft:
  - Überlappungen
  - Lesbarkeit
  - QR-Code-Größe
  - Balance
- Gibt Warnings/Suggestions

**4. Hue-Shift (Farbvarianten)**
- User kann Template-Farbe ändern
- "Mach es blauer / grüner / röter"
- AI passt gesamte Palette an

**5. Erweiterte Custom-Elemente**
- Custom Shapes
- Custom Fonts (Upload)
- Effekte (Shadow, Glow, Blur)

---

## Tech-Stack

**Frontend:**
- Next.js (bestehend)
- React
- TypeScript
- Tailwind CSS
- `react-dnd` (Drag & Drop)
- `react-rnd` (Resizable & Draggable)
- `fabricjs` ODER eigenes Canvas-System

**Backend:**
- Next.js API Routes
- Supabase (PostgreSQL, Auth, Storage)

**Rendering:**
- Bestehender Generic Renderer (anpassen)
- Canvas API
- PDF-Export via `jspdf` + Canvas

---

## Development mit AI

**Wie Anton AI nutzen kann:**

### **1. Component-Generierung**
```
Prompt an Claude/Cursor:
"Erstelle eine React-Komponente 'LayoutEditor' mit:
- Drag & Drop von ElementLibrary auf Canvas
- Repositionieren von Elementen innerhalb Canvas
- Resize-Handles mit react-rnd
- PropertiesPanel die sich updated wenn Element selected
- TypeScript Types gemäß [dieses Schema]"
```

### **2. API-Endpoint-Generierung**
```
Prompt:
"Erstelle Next.js API-Route POST /api/designer/templates/:id/layout
- Nimmt layout: Layout als Body
- Speichert in Supabase designer_templates.example_layout
- Validiert Layout-Struktur
- Error-Handling"
```

### **3. Datenbank-Queries**
```
Prompt:
"Schreibe Supabase-Query:
- Fetch alle templates mit status='published'
- Filter nach category
- Sortiert nach usage_count DESC
- Include designer info (join)
- TypeScript typed"
```

---

## Timeline mit AI-Entwicklung

**Anton mit AI-Unterstützung:**

**Woche 1: Core Editor + Backend**
- Tag 1-2: LayoutEditor Component (mit AI scaffolding)
- Tag 3-4: Datenbank-Schema + API-Endpoints
- Tag 5: Asset-Upload-Flow

**Woche 2: Flows + Integration**
- Tag 1-2: Designer-Flow komplett
- Tag 3-4: Kunden-Flow (Galerie + Editor-Integration)
- Tag 5: Rendering + PDF-Export anpassen

**Testing & Polish:** +2-3 Tage

**Total:** 10-12 Arbeitstage = **1,5-2 Wochen**

---

## Offene Fragen für Anton

1. **react-dnd vs. eigenes Drag & Drop?**
   - react-dnd = etabliert, aber etwas komplex
   - Eigenes mit HTML5 Drag API = leichter, aber mehr Custom-Code

2. **fabricjs für Canvas?**
   - Vorteil: Viel Funktionalität out-of-the-box
   - Nachteil: Overhead, evtl. überdimensioniert
   - Alternative: Bestehendes Canvas-System erweitern?

3. **Supabase Storage oder S3?**
   - Supabase = einfacher, integriert
   - S3 = mehr Kontrolle, evtl. günstiger bei Scale

4. **TypeScript-Types generieren aus Schema?**
   - Oder manuell pflegen?
   - Tool: Supabase CLI kann Types auto-generieren

---

## Resources für Anton

**Docs:**
- [Template-System-Spezifikation](c:\Users\Timo\Worspace\money-printing\docs\02-produkt\template-system-specification.md) (bestehend, als Referenz)
- [Designer Contest Konzept](c:\Users\Timo\Worspace\Vision\designer-contest-konzept.md) (Überblick)

**Code-Referenzen:**
- Bestehender Generic Renderer: `src/templates/genericRenderer.ts`
- Bestehender PDF-Exporter: `src/services/pdfGeneratorV2.ts`
- Template-Loader: `src/templates/templateLoader.ts`

**Libraries:**
- react-dnd: https://react-dnd.github.io/react-dnd/
- react-rnd: https://github.com/bokuweb/react-rnd
- fabricjs: http://fabricjs.com/ (optional)
- Supabase Docs: https://supabase.com/docs

---

## Nächste Schritte

**Für Timo:**
1. Review dieser Spec
2. Feedback geben
3. Go/No-Go für Phase 1

**Für Anton:**
1. Spec lesen & verstehen
2. Fragen stellen (offene Punkte)
3. Tech-Entscheidungen treffen (react-dnd? fabricjs?)
4. Entwicklung starten

**Für Eli (mich):**
1. Phase 2 Konzept ausarbeiten (Canvas mit AI)
2. Wireframes für UI-Komponenten (optional)
3. Support während Development

---

**Let's build! 🚀**

*Dokumentiert am 5. Februar 2026*
*Für Anton - Phase 1 MVP*
