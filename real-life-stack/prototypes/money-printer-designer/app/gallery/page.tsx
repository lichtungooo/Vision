'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES, USE_CASES, TemplateCategory, TemplateUseCase, DesignerTemplate } from '@/types/template';

// Mock data for published templates
const MOCK_TEMPLATES: DesignerTemplate[] = [
  {
    id: '1',
    name: 'Vintage Time Voucher',
    description: 'Klassisches Vintage-Design mit nostalgischem Charme',
    designerName: 'Anna Schmidt',
    designerEmail: 'anna@example.com',
    designerId: 'designer-1',
    category: 'vintage',
    subcategory: 'retro',
    useCases: ['visit', 'gift'],
    frontImage: 'https://placehold.co/1011x638/8b6914/fff?text=Vintage+Time+Voucher',
    backImage: 'https://placehold.co/1011x638/8b6914/fff?text=Back',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-01'),
    usageCount: 87,
    rating: 4.8,
    featured: true,
    createdAt: new Date('2026-01-20'),
    updatedAt: new Date('2026-02-01'),
  },
  {
    id: '2',
    name: 'Modern Business Card',
    description: 'Clean und professionell für Business-Kontakte',
    designerName: 'Anna Schmidt',
    designerEmail: 'anna@example.com',
    designerId: 'designer-1',
    category: 'modern',
    subcategory: 'scandinavian',
    useCases: ['visit'],
    frontImage: 'https://placehold.co/1011x638/2d5016/fff?text=Modern+Business',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-05'),
    usageCount: 34,
    rating: 4.5,
    createdAt: new Date('2026-01-25'),
    updatedAt: new Date('2026-02-05'),
  },
  {
    id: '3',
    name: 'Spiritual Wellness',
    description: 'Achtsam und naturverbunden für Wellness-Angebote',
    designerName: 'Lena Müller',
    designerEmail: 'lena@example.com',
    designerId: 'designer-2',
    category: 'spiritual',
    subcategory: 'yoga',
    useCases: ['gift', 'value'],
    frontImage: 'https://placehold.co/1011x638/6b8e23/fff?text=Spiritual+Wellness',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-03'),
    usageCount: 56,
    rating: 4.9,
    featured: true,
    createdAt: new Date('2026-01-22'),
    updatedAt: new Date('2026-02-03'),
  },
  {
    id: '4',
    name: 'Handcraft Workshop',
    description: 'Authentisch und handwerklich für Maker',
    designerName: 'Max Weber',
    designerEmail: 'max@example.com',
    designerId: 'designer-3',
    category: 'handcraft',
    subcategory: 'wood-metal',
    useCases: ['visit', 'gift', 'invite'],
    frontImage: 'https://placehold.co/1011x638/8b4513/fff?text=Handcraft+Workshop',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-07'),
    usageCount: 21,
    rating: 4.6,
    createdAt: new Date('2026-01-28'),
    updatedAt: new Date('2026-02-07'),
  },
  {
    id: '5',
    name: 'Community Tauschring',
    description: 'Gemeinschaftlich für lokale Tauschkreise',
    designerName: 'Lena Müller',
    designerEmail: 'lena@example.com',
    designerId: 'designer-2',
    category: 'community',
    subcategory: 'tauschring',
    useCases: ['value', 'invite'],
    frontImage: 'https://placehold.co/1011x638/4682b4/fff?text=Community+Tauschring',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-08'),
    usageCount: 12,
    rating: 4.7,
    createdAt: new Date('2026-02-01'),
    updatedAt: new Date('2026-02-08'),
  },
  {
    id: '6',
    name: 'Creative Artist Card',
    description: 'Kreativ und expressiv für Künstler',
    designerName: 'Sophie Klein',
    designerEmail: 'sophie@example.com',
    designerId: 'designer-4',
    category: 'creative',
    subcategory: 'visual-arts',
    useCases: ['visit', 'gift'],
    frontImage: 'https://placehold.co/1011x638/ff6347/fff?text=Creative+Artist',
    formatSpecs: { width: 85.6, height: 53.98, dpi: 300, bleed: 3 },
    status: 'published',
    publishedAt: new Date('2026-02-09'),
    usageCount: 8,
    rating: 4.4,
    createdAt: new Date('2026-02-03'),
    updatedAt: new Date('2026-02-09'),
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [selectedUseCase, setSelectedUseCase] = useState<TemplateUseCase | 'all'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'rating'>('popular');
  const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

  // Filter templates
  const filteredTemplates = MOCK_TEMPLATES.filter((template) => {
    if (selectedCategory !== 'all' && template.category !== selectedCategory) {
      return false;
    }
    if (selectedUseCase !== 'all' && !template.useCases.includes(selectedUseCase)) {
      return false;
    }
    return true;
  });

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.usageCount - a.usageCount;
      case 'newest':
        return (b.publishedAt?.getTime() || 0) - (a.publishedAt?.getTime() || 0);
      case 'rating':
        return (b.rating || 0) - (a.rating || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Template Gallery</h1>
              <p className="text-gray-600 mt-1">
                {filteredTemplates.length} {filteredTemplates.length === 1 ? 'Template' : 'Templates'} verfügbar
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Home
              </Link>
              <Link
                href="/designer"
                className="px-4 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] font-medium"
              >
                Designer Login
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar: Filters */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sort */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">Sortierung</h3>
              <div className="space-y-2">
                {[
                  { id: 'popular', label: '🔥 Beliebteste', value: 'popular' },
                  { id: 'newest', label: '✨ Neueste', value: 'newest' },
                  { id: 'rating', label: '⭐ Best bewertet', value: 'rating' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.value as any)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      sortBy === option.value
                        ? 'bg-[#2d5016] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Use-Case */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">Use-Case</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedUseCase('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedUseCase === 'all'
                      ? 'bg-[#2d5016] text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Alle
                </button>
                {Object.values(USE_CASES).map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(useCase.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedUseCase === useCase.id
                        ? 'bg-[#2d5016] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{useCase.icon}</span>
                    {useCase.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Category */}
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <h3 className="font-bold text-gray-900 mb-3">Design-Kategorie</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-[#2d5016] text-white'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Alle
                </button>
                {Object.values(CATEGORIES).map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#2d5016] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main: Template Grid */}
          <div className="lg:col-span-3">
            {filteredTemplates.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Keine Templates gefunden
                </h3>
                <p className="text-gray-600 mb-4">
                  Versuche andere Filter-Einstellungen
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedUseCase('all');
                  }}
                  className="px-4 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d]"
                >
                  Filter zurücksetzen
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedTemplates.map((template) => {
                  const category = CATEGORIES[template.category];
                  const isHovered = hoveredTemplate === template.id;

                  return (
                    <div
                      key={template.id}
                      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                      onMouseEnter={() => setHoveredTemplate(template.id)}
                      onMouseLeave={() => setHoveredTemplate(null)}
                    >
                      {/* Image Preview */}
                      <div className="relative bg-gray-100 aspect-[16/10]">
                        <img
                          src={isHovered && template.backImage ? template.backImage : template.frontImage}
                          alt={template.name}
                          className="w-full h-full object-cover"
                        />
                        {template.featured && (
                          <div className="absolute top-2 right-2 bg-[#2d5016] text-white px-2 py-1 rounded text-xs font-bold">
                            ⭐ Featured
                          </div>
                        )}
                        {template.backImage && (
                          <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                            {isHovered ? 'Rückseite' : 'Hover für Rückseite'}
                          </div>
                        )}
                      </div>

                      {/* Template Info */}
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-bold text-gray-900">{template.name}</h4>
                            <p className="text-sm text-gray-600">{template.description}</p>
                          </div>
                          <span className="text-xl">{category.icon}</span>
                        </div>

                        {/* Use-Cases */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {template.useCases.map((useCaseId) => {
                            const useCase = USE_CASES[useCaseId];
                            return (
                              <span
                                key={useCaseId}
                                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                                title={useCase.description}
                              >
                                {useCase.icon} {useCase.name}
                              </span>
                            );
                          })}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                          <div>
                            <span className="font-medium">{template.usageCount}x</span> genutzt
                          </div>
                          {template.rating && (
                            <div>
                              ⭐ <span className="font-medium">{template.rating.toFixed(1)}</span>
                            </div>
                          )}
                        </div>

                        {/* Designer */}
                        <div className="text-xs text-gray-500 mb-3">
                          Designer: {template.designerName}
                        </div>

                        {/* Action Button */}
                        <Link
                          href={`/gallery/${template.id}`}
                          className="block w-full py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] font-medium text-center transition-colors"
                        >
                          Jetzt verwenden
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              {MOCK_TEMPLATES.length} Templates von {new Set(MOCK_TEMPLATES.map(t => t.designerId)).size} Designern
            </p>
            <Link
              href="/designer/upload"
              className="text-[#2d5016] hover:text-[#1d3a0d] font-medium text-sm"
            >
              Designer werden →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
