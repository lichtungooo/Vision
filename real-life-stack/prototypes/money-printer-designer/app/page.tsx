import Link from 'next/link';
import { CATEGORIES, USE_CASES } from '@/types/template';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Money Printer</h1>
              <p className="text-gray-600 mt-1">Designer Portal - Prototyp</p>
            </div>
            <nav className="flex gap-4">
              <Link
                href="/gallery"
                className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/designer"
                className="px-4 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] font-medium"
              >
                Designer Login
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Designer-Templates für Money Printer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Erstelle hochwertige Design-Vorlagen für Zeitgutscheine.
            Kuratierte Qualität statt AI-Chaos.
          </p>
        </div>
      </div>

      {/* Use-Cases */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Use-Cases</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.values(USE_CASES).map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{useCase.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{useCase.description}</p>
              <div className="text-xs text-gray-500">
                {useCase.targetAudience.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Design-Kategorien */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Design-Kategorien</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {Object.values(CATEGORIES).map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">{category.name}</h4>
              <p className="text-gray-600 text-sm mb-2">{category.description}</p>
              <div className="flex flex-wrap gap-1 mt-3">
                {category.values.map((value) => (
                  <span
                    key={value}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-[#2d5016] rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Bereit, Designer zu werden?
          </h3>
          <p className="text-white mb-6 max-w-2xl mx-auto">
            Erstelle hochwertige Templates und erreiche tausende Nutzer.
            Kuratierte Qualität, faire Konditionen.
          </p>
          <Link
            href="/designer/upload"
            className="inline-block px-8 py-3 bg-white text-[#2d5016] rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Template hochladen
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 text-sm">
            Money Printer Designer Portal - Prototyp by Timo & Eli
          </p>
        </div>
      </footer>
    </div>
  );
}
