import React, { useState } from 'react';
import { CURRICULUM_MODULES } from '../data/lifeguardData';
import { CurriculumModule } from '../types/lifeguard';
import { BookOpen, Waves, HeartPulse, Compass, Check, Clock, Shield, AlertCircle } from 'lucide-react';

export const CurriculumSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('Tümü');
  const [activeModuleId, setActiveModuleId] = useState<string>(CURRICULUM_MODULES[2].id); // CPR default open

  const categories = ['Tümü', 'Teorik', 'İlk Yardım & CPR', 'Havuz Pratiği', 'Açık Deniz Pratiği'];

  const filteredModules = filterCategory === 'Tümü'
    ? CURRICULUM_MODULES
    : CURRICULUM_MODULES.filter((m) => m.category === filterCategory);

  const activeModule = CURRICULUM_MODULES.find((m) => m.id === activeModuleId) || CURRICULUM_MODULES[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Teorik':
        return <BookOpen className="w-4 h-4 text-sky-600" />;
      case 'İlk Yardım & CPR':
        return <HeartPulse className="w-4 h-4 text-red-600" />;
      case 'Havuz Pratiği':
        return <Waves className="w-4 h-4 text-blue-600" />;
      case 'Açık Deniz Pratiği':
        return <Compass className="w-4 h-4 text-amber-600" />;
      default:
        return <Shield className="w-4 h-4 text-slate-600" />;
    }
  };

  return (
    <section id="mufredat" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
              TSSF STANDARTLARINDA TAM PROGRAM
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Detaylı Eğitim Müfredatı
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-3">
              Mevzuat ve tıbbi ilkyardımdan açık deniz kurtarma manevralarına kadar her aşama
              T.C. TSSF ve ILS yönergeleriyle titizlikle hazırlanmıştır.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 overflow-x-auto max-w-full shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`min-h-[38px] px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  filterCategory === cat
                    ? 'bg-slate-900 text-white shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Master Showcase: Split 2-column view of modules and visual spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive List of Modules */}
          <div className="lg:col-span-7 space-y-3">
            {filteredModules.map((mod) => {
              const isSelected = mod.id === activeModuleId;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveModuleId(mod.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-sky-500 shadow-md ring-1 ring-sky-300'
                      : 'bg-white/80 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                        {getCategoryIcon(mod.category)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                          <span>{mod.dayNumber}. Gün</span>
                          <span>·</span>
                          <span>{mod.category}</span>
                          <span>·</span>
                          <span className="font-semibold text-slate-700">{mod.hours} Saat</span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900 mt-0.5">
                          {mod.title}
                        </h4>
                      </div>
                    </div>

                    <span className="text-xs font-bold text-sky-700 whitespace-nowrap shrink-0">
                      {isSelected ? 'İnceleniyor' : 'Detay →'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-2">
                    {mod.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Card for Active Module with Visual Asset */}
          <div className="lg:col-span-5 sticky top-28 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-lg space-y-5">
            {/* Module Photo if available */}
            {activeModule.image ? (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
                <img
                  src={activeModule.image}
                  alt={activeModule.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                  Uygulama Sahası: {activeModule.category}
                </div>
              </div>
            ) : (
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-sky-900 to-slate-900 text-white p-6 flex flex-col justify-end">
                <div className="text-xs font-bold text-sky-300 uppercase tracking-wider font-condensed">
                  {activeModule.dayNumber}. GÜN MODÜLÜ
                </div>
                <div className="text-lg font-bold mt-1">{activeModule.title}</div>
              </div>
            )}

            {/* Module Meta */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
                <span>{activeModule.dayNumber}. Gün Programı</span>
                <span>·</span>
                <span className="font-semibold text-slate-800">{activeModule.category}</span>
                <span>·</span>
                <span className="font-semibold text-slate-800">{activeModule.hours} Saat Süre</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                {activeModule.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {activeModule.summary}
              </p>
            </div>

            {/* Learning Points */}
            <div className="pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 font-condensed mb-2.5">
                KAZANIMLAR & ÖĞRETİLEN TEKNİKLER
              </div>
              <ul className="space-y-2">
                {activeModule.learningPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Equipment Used & Evaluation */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-condensed">
                  KULLANILAN TEÇHİZAT & SİMÜLATÖRLER
                </div>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {activeModule.equipmentUsed.map((eq, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-condensed">
                  SINAV & DEĞERLENDİRME KRİTERİ
                </div>
                <div className="flex items-start gap-2 mt-1 text-xs text-slate-700 bg-amber-50/70 p-3 rounded-lg border border-amber-200/60">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{activeModule.evaluationCriteria}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Training Venue Features Bottom Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-200">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-sky-700 font-condensed uppercase tracking-wider">
              01. TEORİK SINIF ORTAMI
            </div>
            <div className="text-base font-bold text-slate-900 mt-1">
              Projeksiyon & Medikal Mankenler
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Her öğrenciye birebir CPR mankeni, otomatik şok simülatörü ve TSSF resmi ders kitabı sağlanır.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-blue-700 font-condensed uppercase tracking-wider">
              02. HAVUZ PARKURU
            </div>
            <div className="text-base font-bold text-slate-900 mt-1">
              Yarı Olimpik & Olimpik Tesisler
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              3-5 metre derinliğinde, temiz ve ısıtmalı havuzlarda zamana karşı manken kurtarma ve spinal sabitleme.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="text-xs font-bold text-amber-700 font-condensed uppercase tracking-wider">
              03. AÇIK DENİZ İSTASYONU
            </div>
            <div className="text-base font-bold text-slate-900 mt-1">
              Gümüş Kademesi Plaj Simülasyonu
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Rip akıntısı olan gerçek kıyı hatlarında kurtarma sörfü (board) ve bot koordinasyonu ile eğitim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
