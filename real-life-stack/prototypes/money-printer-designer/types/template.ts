/**
 * Money Printer - Designer Template System
 * Type Definitions
 */

// ===== USE-CASES =====
export type TemplateUseCase = 'visit' | 'gift' | 'value' | 'invite';

export interface UseCaseDefinition {
  id: TemplateUseCase;
  name: string;
  description: string;
  targetAudience: string[];
  icon: string;
}

export const USE_CASES: Record<TemplateUseCase, UseCaseDefinition> = {
  visit: {
    id: 'visit',
    name: 'Visitenkarte',
    description: 'Das bin ich, das kann ich',
    targetAudience: ['Selbstständige', 'Freelancer', 'Handwerker', 'Coaches'],
    icon: '👤'
  },
  gift: {
    id: 'gift',
    name: 'Geschenk/Gutschein',
    description: 'Danke für deine Hilfe',
    targetAudience: ['Alle - emotional, persönlich'],
    icon: '🎁'
  },
  value: {
    id: 'value',
    name: 'Eigene Währung',
    description: 'Unsere Community-Währung',
    targetAudience: ['Tauschringe', 'Communities', 'Events', 'Bildung'],
    icon: '💰'
  },
  invite: {
    id: 'invite',
    name: 'Einladung/Ticket',
    description: 'Komm zu unserem Event',
    targetAudience: ['Veranstalter', 'Organisatoren'],
    icon: '🎫'
  }
};

// ===== DESIGN CATEGORIES =====
export type TemplateCategory =
  | 'business'
  | 'spiritual'
  | 'handcraft'
  | 'wellness'
  | 'creative'
  | 'community'
  | 'vintage'
  | 'modern';

export interface CategoryDefinition {
  id: TemplateCategory;
  name: string;
  description: string;
  style: string;
  values: string[];
  icon: string;
  subcategories: SubcategoryDefinition[];
}

export interface SubcategoryDefinition {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Record<TemplateCategory, CategoryDefinition> = {
  business: {
    id: 'business',
    name: 'Business / Professional',
    description: 'Clean, minimalistisch, premium',
    style: 'Serif-Schriften, dezente Farben, klare Linien',
    values: ['Professionalität', 'Vertrauen', 'Expertise'],
    icon: '💼',
    subcategories: [
      { id: 'corporate', name: 'Corporate', description: 'Unternehmen, Premium' },
      { id: 'consulting', name: 'Consulting', description: 'Berater, Coaches' },
      { id: 'legal', name: 'Legal', description: 'Anwälte, Notare' }
    ]
  },
  spiritual: {
    id: 'spiritual',
    name: 'Spiritual / Conscious',
    description: 'Bewusst, achtsam, naturverbunden',
    style: 'Erdtöne, organische Formen, ruhige Typografie',
    values: ['Bewusstsein', 'Natur', 'Ganzheitlichkeit'],
    icon: '🌿',
    subcategories: [
      { id: 'yoga', name: 'Yoga & Meditation', description: 'Achtsamkeit, Bewegung' },
      { id: 'healing', name: 'Healing & Energy', description: 'Energiearbeit, Therapie' },
      { id: 'permaculture', name: 'Permaculture & Nature', description: 'Permakultur, Natur' }
    ]
  },
  handcraft: {
    id: 'handcraft',
    name: 'Handcraft / Maker',
    description: 'Handwerklich, robust, authentisch',
    style: 'Texturiert, Werkzeug-Symbolik, bodenständig',
    values: ['Qualität', 'Authentizität', 'Handarbeit'],
    icon: '🔨',
    subcategories: [
      { id: 'wood-metal', name: 'Wood & Metal', description: 'Tischler, Schmiede' },
      { id: 'textiles', name: 'Textiles', description: 'Schneider, Weber' },
      { id: 'food', name: 'Food', description: 'Bäcker, Brauer' }
    ]
  },
  wellness: {
    id: 'wellness',
    name: 'Wellness / Beauty',
    description: 'Entspannt, elegant, pflegend',
    style: 'Sanfte Farben, fließende Formen, feminine Touch',
    values: ['Entspannung', 'Schönheit', 'Selbstfürsorge'],
    icon: '✨',
    subcategories: [
      { id: 'hair-beauty', name: 'Hair & Beauty', description: 'Friseure, Kosmetik' },
      { id: 'massage-spa', name: 'Massage & Spa', description: 'Massage, Wellness' },
      { id: 'fitness', name: 'Fitness & Health', description: 'Fitness, Gesundheit' }
    ]
  },
  creative: {
    id: 'creative',
    name: 'Creative / Artist',
    description: 'Kreativ, künstlerisch, expressiv',
    style: 'Bunte Farben, experimentell, einzigartig',
    values: ['Kreativität', 'Ausdruck', 'Individualität'],
    icon: '🎨',
    subcategories: [
      { id: 'visual-arts', name: 'Visual Arts', description: 'Maler, Fotograf' },
      { id: 'music', name: 'Music', description: 'Musiker, Produzent' },
      { id: 'design', name: 'Design', description: 'Grafik, UX' }
    ]
  },
  community: {
    id: 'community',
    name: 'Community / Local',
    description: 'Gemeinschaftlich, lokal, identitätsstiftend',
    style: 'Community-Logos, regional, verbindend',
    values: ['Gemeinschaft', 'Lokal', 'Zusammenhalt'],
    icon: '🤝',
    subcategories: [
      { id: 'tauschring', name: 'Tauschring', description: 'Tauschkreise' },
      { id: 'nachbarschaft', name: 'Nachbarschaft', description: 'Nachbarschaftsinitiativen' },
      { id: 'vereine', name: 'Vereine', description: 'Vereine, Clubs' }
    ]
  },
  vintage: {
    id: 'vintage',
    name: 'Vintage / Heritage',
    description: 'Nostalgisch, klassisch, zeitlos',
    style: 'Vintage-Elemente, klassische Typografie',
    values: ['Zeitlosigkeit', 'Tradition', 'Wert'],
    icon: '📜',
    subcategories: [
      { id: 'retro', name: 'Retro', description: '50s-80s Stil' },
      { id: 'classic', name: 'Classic', description: 'Pre-1950 Klassik' },
      { id: 'industrial', name: 'Industrial', description: 'Industriedesign' }
    ]
  },
  modern: {
    id: 'modern',
    name: 'Modern / Minimal',
    description: 'Zeitgemäß, clean, reduziert',
    style: 'Sans-Serif, viel Weißraum, geometrisch',
    values: ['Innovation', 'Klarheit', 'Zukunft'],
    icon: '🔷',
    subcategories: [
      { id: 'tech', name: 'Tech & Startups', description: 'Technologie, Innovation' },
      { id: 'scandinavian', name: 'Scandinavian', description: 'Nordisches Design' },
      { id: 'futuristic', name: 'Futuristic', description: 'Zukunftsorientiert' }
    ]
  }
};

// ===== TEMPLATE STATUS =====
export type TemplateStatus = 'draft' | 'submitted' | 'approved' | 'published' | 'rejected';

// ===== DESIGNER TEMPLATE =====
export interface DesignerTemplate {
  id: string;

  // Basic Info
  name: string;
  description: string;

  // Designer
  designerName: string;
  designerEmail: string;
  designerUrl?: string;
  designerId?: string; // Later: Web of Trust DID

  // Classification
  category: TemplateCategory;
  subcategory?: string;
  useCases: TemplateUseCase[];

  // Assets
  frontImage: string; // URL or Base64
  backImage?: string;
  thumbnail?: string; // Generated from frontImage

  // Validation Info
  formatSpecs: {
    width: number;  // in mm
    height: number; // in mm
    dpi: number;
    bleed: number;  // in mm
  };

  // Status & Workflow
  status: TemplateStatus;
  submittedAt?: Date;
  approvedAt?: Date;
  publishedAt?: Date;
  rejectedAt?: Date;
  reviewNotes?: string;

  // Stats
  usageCount: number;
  rating?: number;
  featured?: boolean;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

// ===== TEMPLATE UPLOAD =====
export interface TemplateUploadInput {
  name: string;
  description: string;
  category: TemplateCategory;
  subcategory?: string;
  useCases: TemplateUseCase[];
  frontImage: File;
  backImage?: File;
}

// ===== VALIDATION =====
export interface ValidationResult {
  valid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}

export interface ValidationWarning {
  field: string;
  message: string;
  code: string;
}

// ===== FORMAT SPECS (Credit Card Size) =====
export const TEMPLATE_FORMAT = {
  width: 85.6,  // mm (Credit Card Standard)
  height: 53.98, // mm
  dpi: 300,     // Minimum DPI
  bleed: 3,     // mm (Sicherheitsabstand)
  widthPx: 1011, // px at 300 DPI
  heightPx: 638  // px at 300 DPI
} as const;
