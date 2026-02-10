# Money Printer - Designer Portal

Designer-Templates für Money Printer - Kuratierte Qualität für Zeitgutscheine.

## 🎯 Projekt-Übersicht

Das **Designer Portal** ermöglicht es Grafikdesignern, hochwertige Design-Vorlagen für Zeitgutscheine zu erstellen und hochzuladen. Kunden können diese Templates in der Gallery durchsuchen und für ihre eigenen Gutscheine verwenden.

### Zwei Zielgruppen:

1. **Designer** - Erstellen und uploaden Templates
2. **Kunden** - Wählen Templates aus Gallery oder laden eigene hoch

### Qualität über Quantität

- ✅ **Kuratiert** - Review-Prozess vor Veröffentlichung
- ✅ **Professionell** - Format-Validierung (300 DPI, Kreditkartenformat)
- ❌ **Kein AI-Chaos** - Keine Massen-Templates wie bei Spreadshirt

## 🚀 Schnellstart

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Im Browser öffnen
http://localhost:3000
```

## 📁 Projekt-Struktur

```
money-printer-designer/
├── app/
│   ├── page.tsx                    # Landing Page
│   ├── layout.tsx                  # Root Layout
│   ├── globals.css                 # Anton's Farbschema (#2d5016)
│   ├── designer/
│   │   ├── page.tsx                # Designer Dashboard
│   │   └── upload/
│   │       └── page.tsx            # Template Upload
│   └── gallery/
│       └── page.tsx                # Public Template Gallery
├── types/
│   └── template.ts                 # TypeScript Type Definitions
└── README.md
```

## 🎨 Features

### ✅ Fertig (Phase 1)

#### Landing Page (`/`)
- Header mit Navigation
- Hero Section
- **Use-Cases Grid** (4 Kategorien: Visit, Gift, Value, Invite)
- **Design-Kategorien Grid** (8 Stile: Business, Spiritual, Handcraft, Wellness, Creative, Community, Vintage, Modern)
- CTA "Designer werden"

#### Designer Dashboard (`/designer`)
- Stats-Übersicht (Templates, Nutzung, Ranking)
- Template-Liste mit Status
- Status-Labels (Draft, In Review, Published, Rejected)
- Quick Start Guide

#### Upload Page (`/designer/upload`)
- **Drag & Drop** für Front/Back Bilder
- **Automatische Format-Validierung**:
  - Dimensionen: 85.6mm × 53.98mm (Kreditkarte)
  - Auflösung: Minimum 300 DPI (1011px × 638px)
  - Bleed: 3mm Sicherheitsabstand
- Kategorie & Use-Case Auswahl
- Live-Preview
- Fehler-Feedback bei falschem Format

#### Gallery (`/gallery`)
- Grid mit allen approved Templates
- **Filter** nach Kategorie & Use-Case
- **Sortierung** (Beliebteste, Neueste, Best bewertet)
- Preview mit Hover (Vorder-/Rückseite)
- "Jetzt verwenden" Button
- Featured-Templates Highlighting

### ⏳ Geplant (Phase 2)

- Admin Review Interface (`/admin/review/[id]`)
- Flexibles Werte-System (nicht nur "1 Stunde")
- Designer Briefing & Kunden-Guide
- Supabase Integration
- Integration in Anton's money-printer.app

## 🎨 Kategoriesystem

### Use-Cases (Was macht der Kunde damit?)

| Icon | Name | Beschreibung | Zielgruppe |
|------|------|--------------|------------|
| 👤 | **Visit** | Visitenkarte | Selbstständige, Freelancer |
| 🎁 | **Gift** | Geschenk/Gutschein | Alle - emotional, persönlich |
| 💰 | **Value** | Eigene Währung | Tauschringe, Communities |
| 🎫 | **Invite** | Einladung/Ticket | Veranstalter |

### Design-Kategorien (Wie sieht es aus?)

| Icon | Name | Stil | Werte |
|------|------|------|-------|
| 💼 | **Business** | Clean, minimalistisch | Professionalität, Vertrauen |
| 🌿 | **Spiritual** | Bewusst, naturverbunden | Achtsamkeit, Natur |
| 🔨 | **Handcraft** | Handwerklich, authentisch | Qualität, Handarbeit |
| ✨ | **Wellness** | Entspannt, elegant | Entspannung, Schönheit |
| 🎨 | **Creative** | Kreativ, expressiv | Kreativität, Ausdruck |
| 🤝 | **Community** | Gemeinschaftlich, lokal | Gemeinschaft, Zusammenhalt |
| 📜 | **Vintage** | Nostalgisch, zeitlos | Tradition, Wert |
| 🔷 | **Modern** | Zeitgemäß, reduziert | Innovation, Klarheit |

**Die Power:** Ein Design kann für **mehrere Use-Cases** verwendet werden!
- Beispiel: "Vintage Time Voucher" = VINTAGE × (VISIT + GIFT)

## 🔧 Tech-Stack

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4

**Warum dieser Stack?**
- ✅ Identisch mit Anton's money-printer.app
- ✅ Nahtlose Integration später möglich
- ✅ Modern & performant

**Deployment:**
- Vercel (geplant)

## 🎨 Design-System

### Farbschema (von Anton übernommen)

```css
--color-primary: #2d5016;      /* Dark Green */
--color-primary-light: #3d6b1f;
--color-primary-dark: #1d3a0d;
--color-secondary: #8b6914;    /* Gold/Brown */
```

### Format-Specs

```typescript
TEMPLATE_FORMAT = {
  width: 85.6,    // mm (Kreditkartenformat)
  height: 53.98,  // mm
  dpi: 300,       // Minimum
  bleed: 3,       // mm (Sicherheitsabstand)
  widthPx: 1011,  // px at 300 DPI
  heightPx: 638   // px at 300 DPI
}
```

## 🔄 Workflow

### Designer-Flow:
```
1. Designer bewirbt sich (Portfolio-Check)
   ↓
2. Zugang erhalten (Login)
   ↓
3. Template hochladen (/designer/upload)
   ↓
4. Automatische Validierung (Format, DPI)
   ↓
5. Submit → Status: Pending Review
   ↓
6. Admin Review (Timo)
   ↓
7. Approved → Gallery veröffentlicht
```

### Kunden-Flow:
```
1. Gallery durchsuchen (/gallery)
   ↓
2. Filter nutzen (Kategorie, Use-Case)
   ↓
3. Template auswählen
   ↓
4. "Jetzt verwenden" → Integration in Money Printer
```

## 📊 Mock-Daten

Das Projekt nutzt Mock-Daten für schnelles Prototyping:

**Designer:**
- Anna Schmidt (3 Templates, 142 Nutzungen)
- Lena Müller (2 Templates)
- Max Weber (1 Template)
- Sophie Klein (1 Template)

**Templates:**
- Vintage Time Voucher (87× genutzt, ⭐ 4.8)
- Modern Business Card (34× genutzt, ⭐ 4.5)
- Spiritual Wellness (56× genutzt, ⭐ 4.9)
- Handcraft Workshop (21× genutzt, ⭐ 4.6)
- Community Tauschring (12× genutzt, ⭐ 4.7)
- Creative Artist Card (8× genutzt, ⭐ 4.4)

## 🛠 Entwicklung

### Verfügbare Scripts

```bash
npm run dev      # Dev-Server mit Turbopack
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

### Routes

- `/` - Landing Page
- `/designer` - Designer Dashboard
- `/designer/upload` - Template Upload
- `/gallery` - Public Template Gallery
- `/gallery/[id]` - Template Detail (geplant)
- `/admin/review/[id]` - Review Interface (geplant)

## 📝 Offene Fragen

### Für Anton:
1. Integration: Separate Repos oder mergen?
2. Routing: `/designer` Prefix ok?
3. Shared Components?
4. Deployment-Strategie?

### Für Team:
5. Designer-Compensation: Credit? Revenue-Share?
6. Review-Prozess: Nur Timo? Team?
7. Gallery-Ranking: Public sichtbar?
8. Template-Limits pro Designer?

### Technisch:
9. Web of Trust Integration: Phase 1 oder später?
10. Storage: Supabase? S3? Cloudinary?
11. PDF-Generation: Bestehenden Renderer nutzen?

## 📚 Dokumentation

- [Designer Onboarding Konzept](../projekte/money-printer/designer-onboarding-konzept.md)
- [Phase 1 Spec (für Anton)](../projekte/money-printer/designer-onboarding-phase1-spec.md)
- [Tagebuch 10. Februar 2026](../../tagebuch/2026-02-10-money-printer-designer.md)

## 🎯 Nächste Schritte

### Diese Woche:
- [ ] Anton zeigen & Feedback holen
- [ ] Integration planen

### Nächste Woche:
- [ ] Admin Review Interface
- [ ] Werte-System flexibilisieren
- [ ] Supabase Setup
- [ ] Deployment

## 👥 Team

**Built by:**
- Timo (Konzept, Produktmanagement)
- Eli (Implementation, Development)

**Integration with:**
- Anton (Web of Trust, Money Printer Core)
- Sebastian (UI/UX)

---

**Status:** 🟢 Phase 1 MVP Complete

**Next Milestone:** Anton's Feedback & Integration Planning

**Live:** http://localhost:3000

---

*Prototyp erstellt am 10. Februar 2026*
