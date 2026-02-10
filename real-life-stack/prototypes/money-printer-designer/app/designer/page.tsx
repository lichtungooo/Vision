'use client';

import Link from 'next/link';
import { useState } from 'react';

// Mock Designer Data
const mockDesigner = {
  name: 'Anna Schmidt',
  email: 'anna@example.com',
  templatesCount: 3,
  totalUsage: 142,
  ranking: 5
};

// Mock Templates
const mockTemplates = [
  {
    id: '1',
    name: 'Vintage Time Voucher',
    category: 'vintage',
    useCases: ['visit', 'gift'],
    status: 'published',
    usageCount: 87,
    createdAt: '2026-01-15',
    thumbnail: '/placeholder-vintage.png'
  },
  {
    id: '2',
    name: 'Modern Business Card',
    category: 'business',
    useCases: ['visit', 'value'],
    status: 'submitted',
    usageCount: 0,
    createdAt: '2026-02-01',
    thumbnail: '/placeholder-modern.png'
  },
  {
    id: '3',
    name: 'Spiritual Wellness',
    category: 'spiritual',
    useCases: ['gift', 'invite'],
    status: 'draft',
    usageCount: 0,
    createdAt: '2026-02-08',
    thumbnail: '/placeholder-spiritual.png'
  }
];

const statusColors = {
  draft: 'bg-gray-100 text-gray-700',
  submitted: 'bg-yellow-100 text-yellow-700',
  published: 'bg-green-100 text-green-700',
  rejected: 'bg-red-100 text-red-700'
};

const statusLabels = {
  draft: 'Entwurf',
  submitted: 'In Review',
  published: 'Veröffentlicht',
  rejected: 'Abgelehnt'
};

export default function DesignerDashboard() {
  const [templates] = useState(mockTemplates);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Designer Portal</h1>
              <p className="text-gray-600 mt-1">Willkommen, {mockDesigner.name}</p>
            </div>
            <nav className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                ← Zurück
              </Link>
              <Link
                href="/designer/upload"
                className="px-4 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] font-medium"
              >
                + Neues Template
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Deine Templates</div>
            <div className="text-3xl font-bold text-gray-900">{mockDesigner.templatesCount}</div>
            <div className="text-xs text-gray-500 mt-1">
              {templates.filter(t => t.status === 'published').length} veröffentlicht
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Gesamt-Nutzung</div>
            <div className="text-3xl font-bold text-gray-900">{mockDesigner.totalUsage}</div>
            <div className="text-xs text-gray-500 mt-1">Mal gedruckt</div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="text-sm text-gray-600 mb-1">Gallery Ranking</div>
            <div className="text-3xl font-bold text-gray-900">#{mockDesigner.ranking}</div>
            <div className="text-xs text-green-600 mt-1">↗ Trending</div>
          </div>
        </div>

        {/* Templates List */}
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Meine Templates</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {templates.map((template) => (
              <div key={template.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Thumbnail Placeholder */}
                  <div className="w-32 h-20 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm flex-shrink-0">
                    Preview
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">{template.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-gray-600">
                            Kategorie: {template.category}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="text-sm text-gray-600">
                            {template.useCases.length} Use-Cases
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[template.status as keyof typeof statusColors]}`}>
                        {statusLabels[template.status as keyof typeof statusLabels]}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>🔥 {template.usageCount} Mal gedruckt</span>
                      <span>📅 Erstellt: {new Date(template.createdAt).toLocaleDateString('de-DE')}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                        Vorschau
                      </button>
                      <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                        Bearbeiten
                      </button>
                      {template.status === 'published' && (
                        <button className="px-4 py-2 text-sm text-[#2d5016] border border-[#2d5016] rounded hover:bg-green-50">
                          Stats anzeigen
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Guide */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-lg text-[#1d3a0d] mb-3">💡 Quick Start Guide</h3>
          <div className="space-y-2 text-sm text-[#2d5016]">
            <p><strong>1.</strong> Template hochladen → Front & Back Design (85.6mm × 53.98mm, 300 DPI)</p>
            <p><strong>2.</strong> Kategorie & Use-Cases wählen</p>
            <p><strong>3.</strong> Submit → Warte auf Review</p>
            <p><strong>4.</strong> Approved → Template erscheint in Gallery</p>
          </div>
          <Link
            href="/designer/upload"
            className="inline-block mt-4 px-6 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] font-medium"
          >
            Jetzt Template hochladen
          </Link>
        </div>
      </div>
    </div>
  );
}
