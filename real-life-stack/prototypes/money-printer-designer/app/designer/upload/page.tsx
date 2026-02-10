'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CATEGORIES, USE_CASES, TEMPLATE_FORMAT, TemplateCategory, TemplateUseCase } from '@/types/template';

interface UploadFormData {
  name: string;
  description: string;
  category: TemplateCategory | '';
  subcategory: string;
  useCases: TemplateUseCase[];
  frontImage: File | null;
  backImage: File | null;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function UploadPage() {
  const [formData, setFormData] = useState<UploadFormData>({
    name: '',
    description: '',
    category: '',
    subcategory: '',
    useCases: [],
    frontImage: null,
    backImage: null,
  });

  const [frontPreview, setFrontPreview] = useState<string | null>(null);
  const [backPreview, setBackPreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle file drop
  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>, side: 'front' | 'back') => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleFileSelect(file, side);
    }
  };

  // Handle file selection
  const handleFileSelect = async (file: File, side: 'front' | 'back') => {
    setIsValidating(true);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = e.target?.result as string;
      if (side === 'front') {
        setFrontPreview(preview);
        setFormData(prev => ({ ...prev, frontImage: file }));
      } else {
        setBackPreview(preview);
        setFormData(prev => ({ ...prev, backImage: file }));
      }
    };
    reader.readAsDataURL(file);

    // Validate format
    await validateImageFormat(file, side);
    setIsValidating(false);
  };

  // Validate image format
  const validateImageFormat = async (file: File, side: 'front' | 'back'): Promise<void> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const widthInch = img.width / 300; // Assuming 300 DPI
        const heightInch = img.height / 300;
        const widthMm = widthInch * 25.4;
        const heightMm = heightInch * 25.4;

        const widthOk = Math.abs(widthMm - TEMPLATE_FORMAT.width) < 5;
        const heightOk = Math.abs(heightMm - TEMPLATE_FORMAT.height) < 5;
        const dpiOk = img.width >= TEMPLATE_FORMAT.widthPx && img.height >= TEMPLATE_FORMAT.heightPx;

        const newErrors = { ...errors };
        if (!widthOk || !heightOk) {
          newErrors[`${side}Dimensions`] = `Bild sollte ${TEMPLATE_FORMAT.width}mm × ${TEMPLATE_FORMAT.height}mm sein (aktuell: ${widthMm.toFixed(1)}mm × ${heightMm.toFixed(1)}mm)`;
        } else {
          delete newErrors[`${side}Dimensions`];
        }

        if (!dpiOk) {
          newErrors[`${side}DPI`] = `Auflösung zu niedrig. Minimum: ${TEMPLATE_FORMAT.widthPx}px × ${TEMPLATE_FORMAT.heightPx}px bei 300 DPI`;
        } else {
          delete newErrors[`${side}DPI`];
        }

        setErrors(newErrors);
        resolve();
      };
      img.src = URL.createObjectURL(file);
    });
  };

  // Handle use case toggle
  const toggleUseCase = (useCase: TemplateUseCase) => {
    setFormData(prev => ({
      ...prev,
      useCases: prev.useCases.includes(useCase)
        ? prev.useCases.filter(uc => uc !== useCase)
        : [...prev.useCases, useCase]
    }));
  };

  // Handle submit
  const handleSubmit = async () => {
    // Validate form
    const newErrors: ValidationErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Bitte gib deinem Template einen Namen';
    }

    if (!formData.category) {
      newErrors.category = 'Bitte wähle eine Kategorie';
    }

    if (formData.useCases.length === 0) {
      newErrors.useCases = 'Bitte wähle mindestens einen Use-Case';
    }

    if (!formData.frontImage) {
      newErrors.frontImage = 'Vorderseite ist erforderlich';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate upload
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Success - redirect to dashboard
    alert('Template erfolgreich hochgeladen! Status: Pending Review');
    window.location.href = '/designer';
  };

  const selectedCategory = formData.category ? CATEGORIES[formData.category] : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Template hochladen</h1>
              <p className="text-gray-600 mt-1">Erstelle ein neues Design-Template</p>
            </div>
            <Link
              href="/designer"
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
            >
              ← Zurück zum Dashboard
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Basis-Informationen</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Template-Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="z.B. Vintage Time Voucher"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5016] focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Beschreibung
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Kurze Beschreibung deines Designs..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5016] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Category Selection */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Design-Kategorie *</h3>

              <div className="grid grid-cols-2 gap-3">
                {Object.values(CATEGORIES).map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, category: category.id, subcategory: '' }))}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      formData.category === category.id
                        ? 'border-[#2d5016] bg-[#2d5016]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{category.icon}</span>
                      <div>
                        <div className="font-medium text-sm text-gray-900">{category.name}</div>
                        <div className="text-xs text-gray-600">{category.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {errors.category && (
                <p className="text-red-600 text-sm mt-2">{errors.category}</p>
              )}

              {/* Subcategory */}
              {selectedCategory && selectedCategory.subcategories.length > 0 && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Unterkategorie (optional)
                  </label>
                  <select
                    value={formData.subcategory}
                    onChange={(e) => setFormData(prev => ({ ...prev, subcategory: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2d5016] focus:border-transparent"
                  >
                    <option value="">-- Bitte wählen --</option>
                    {selectedCategory.subcategories.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.name} - {sub.description}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Use Cases */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Use-Cases *</h3>
              <p className="text-sm text-gray-600 mb-4">
                Wofür eignet sich dein Template? (Mehrfachauswahl möglich)
              </p>

              <div className="grid grid-cols-2 gap-3">
                {Object.values(USE_CASES).map((useCase) => (
                  <button
                    key={useCase.id}
                    type="button"
                    onClick={() => toggleUseCase(useCase.id)}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      formData.useCases.includes(useCase.id)
                        ? 'border-[#2d5016] bg-[#2d5016]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{useCase.icon}</span>
                      <div>
                        <div className="font-medium text-sm text-gray-900">{useCase.name}</div>
                        <div className="text-xs text-gray-600">{useCase.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
              {errors.useCases && (
                <p className="text-red-600 text-sm mt-2">{errors.useCases}</p>
              )}
            </div>
          </div>

          {/* Right: Image Upload */}
          <div className="space-y-6">
            {/* Format Specs */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-bold text-blue-900 mb-2">📐 Format-Anforderungen</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Größe: {TEMPLATE_FORMAT.width}mm × {TEMPLATE_FORMAT.height}mm (Kreditkartenformat)</li>
                <li>• Auflösung: Minimum {TEMPLATE_FORMAT.dpi} DPI ({TEMPLATE_FORMAT.widthPx}px × {TEMPLATE_FORMAT.heightPx}px)</li>
                <li>• Sicherheitsabstand: {TEMPLATE_FORMAT.bleed}mm (wichtige Elemente nicht am Rand)</li>
                <li>• Format: PNG, JPG oder WebP</li>
              </ul>
            </div>

            {/* Front Image Upload */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Vorderseite *</h3>

              <div
                onDrop={(e) => handleFileDrop(e, 'front')}
                onDragOver={(e) => e.preventDefault()}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  frontPreview ? 'border-[#2d5016] bg-[#2d5016]/5' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {frontPreview ? (
                  <div className="space-y-4">
                    <img
                      src={frontPreview}
                      alt="Vorschau Vorderseite"
                      className="max-w-full h-48 object-contain mx-auto rounded"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setFrontPreview(null);
                        setFormData(prev => ({ ...prev, frontImage: null }));
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Entfernen
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-2">📤</div>
                    <p className="text-gray-700 font-medium mb-2">
                      Bild hierher ziehen oder klicken
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileSelect(file, 'front');
                      }}
                      className="hidden"
                      id="front-upload"
                    />
                    <label
                      htmlFor="front-upload"
                      className="inline-block px-4 py-2 bg-[#2d5016] text-white rounded-lg hover:bg-[#1d3a0d] cursor-pointer"
                    >
                      Datei auswählen
                    </label>
                  </div>
                )}
              </div>

              {(errors.frontDimensions || errors.frontDPI || errors.frontImage) && (
                <div className="mt-2 space-y-1">
                  {errors.frontImage && <p className="text-red-600 text-sm">{errors.frontImage}</p>}
                  {errors.frontDimensions && <p className="text-orange-600 text-sm">⚠️ {errors.frontDimensions}</p>}
                  {errors.frontDPI && <p className="text-orange-600 text-sm">⚠️ {errors.frontDPI}</p>}
                </div>
              )}
            </div>

            {/* Back Image Upload */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Rückseite (optional)</h3>

              <div
                onDrop={(e) => handleFileDrop(e, 'back')}
                onDragOver={(e) => e.preventDefault()}
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  backPreview ? 'border-[#2d5016] bg-[#2d5016]/5' : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {backPreview ? (
                  <div className="space-y-4">
                    <img
                      src={backPreview}
                      alt="Vorschau Rückseite"
                      className="max-w-full h-48 object-contain mx-auto rounded"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setBackPreview(null);
                        setFormData(prev => ({ ...prev, backImage: null }));
                      }}
                      className="text-sm text-red-600 hover:text-red-700"
                    >
                      Entfernen
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="text-4xl mb-2">📤</div>
                    <p className="text-gray-700 font-medium mb-2">
                      Bild hierher ziehen oder klicken
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileSelect(file, 'back');
                      }}
                      className="hidden"
                      id="back-upload"
                    />
                    <label
                      htmlFor="back-upload"
                      className="inline-block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
                    >
                      Datei auswählen
                    </label>
                  </div>
                )}
              </div>

              {(errors.backDimensions || errors.backDPI) && (
                <div className="mt-2 space-y-1">
                  {errors.backDimensions && <p className="text-orange-600 text-sm">⚠️ {errors.backDimensions}</p>}
                  {errors.backDPI && <p className="text-orange-600 text-sm">⚠️ {errors.backDPI}</p>}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting || isValidating}
              className="w-full py-3 bg-[#2d5016] text-white rounded-lg font-bold hover:bg-[#1d3a0d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? 'Upload läuft...' : 'Template einreichen'}
            </button>

            <p className="text-xs text-gray-600 text-center">
              Nach dem Upload wird dein Template von unserem Team geprüft.<br />
              Du erhältst eine Benachrichtigung, sobald es freigegeben wurde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
