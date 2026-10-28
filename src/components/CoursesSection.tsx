import React, { useState } from 'react';
import { COURSES } from '../data/lifeguardData';
import { CertificateLevel, CourseInfo } from '../types/lifeguard';
import { Check, Clock, Calendar, ShieldCheck, MapPin, ChevronRight, FileCheck } from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onSelectCourse }) => {
  const [selectedCourseId, setSelectedCourseId] = useState<CertificateLevel>('bronz');

  const activeCourse = COURSES.find((c) => c.id === selectedCourseId) || COURSES[0];

  return (
    <section id="egitimler" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
            TSSF & ILS MÜFREDAT KADEMELERİ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Cankurtaran Sertifikasyon Seviyeleri
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            İhtiyacınıza, çalışma alanınıza ve deneyiminize uygun TSSF onaylı eğitim programını seçin.
            Tüm belgeler e-Devlet sistemine tescilli ve uluslararası ILS geçerliliğine sahiptir.
          </p>
        </div>

        {/* Level Selector Tabs (Functional Segmented Control) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-slate-100 rounded-xl mb-10">
          {COURSES.map((course) => {
            const isActive = course.id === selectedCourseId;
            return (
              <button
                key={course.id}
                onClick={() => setSelectedCourseId(course.id)}
                className={`py-3 px-4 text-sm font-bold rounded-lg transition-all text-center whitespace-nowrap ${
                  isActive
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <div className="truncate">{course.title}</div>
                <div className="text-[11px] font-normal text-slate-500 mt-0.5 truncate">
                  {course.badgeTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Course Deep Dive Showcase */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Scope, Highlights, Prerequisites, Swim Requirements */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
                  <span>{activeCourse.durationDays} Gün Yoğun Eğitim</span>
                  <span>·</span>
                  <span>{activeCourse.totalHours} Saat Müfredat</span>
                  <span>·</span>
                  <span>{activeCourse.validityYears} Yıl Geçerlilik</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeCourse.title}
                </h3>
                <p className="text-base text-slate-700 mt-2 leading-relaxed">
                  {activeCourse.scope}
                </p>
              </div>

              {/* Authorized Work Locations */}
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-condensed mb-3">
                  GÖREV ALINABİLEN TESİSLER & ÇALIŞMA ALANLARI
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCourse.targetLocations.map((loc, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites & Physical Tests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-condensed mb-2.5">
                    KATILIM ÖN KOŞULLARI
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeCourse.prerequisites.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-condensed mb-2.5">
                    YÜZME & PARKUR KRİTERLERİ
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {activeCourse.physicalRequirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Highlights Card & Registration Trigger */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#0B2545] font-condensed">
                  EĞİTİM KAZANIMLARI & AKREDİTASYON
                </div>
                <div className="text-lg font-bold text-slate-900 mt-1">
                  Neler Elde Edeceksiniz?
                </div>

                <ul className="mt-4 space-y-3">
                  {activeCourse.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-normal">
                      <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[10px]">
                        ✓
                      </div>
                      <span className="font-medium text-slate-800">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Resmi Belge:</span>
                    <span className="font-semibold text-slate-900">TSSF Manyetik Kimlik Kartı</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Dijital Belge:</span>
                    <span className="font-semibold text-slate-900">e-Devlet Barkodlu Sertifika</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Uluslararası:</span>
                    <span className="font-semibold text-slate-900">ILS (International Life Saving)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500">Paket Kapsamı:</span>
                    <span className="font-semibold text-slate-900">Kitap + CPR Ekipmanı + Sınav Harcı</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onSelectCourse(activeCourse.id)}
                  className="w-full bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <span>{activeCourse.title} Başvurusu Yap</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  Ön kayıt ücretsizdir. Danışmanlarımız evrak ve uygunluğunuzu teyit eder.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Cards Quick Comparison Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedCourseId(c.id)}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                c.id === selectedCourseId
                  ? 'bg-sky-50/50 border-sky-400 ring-1 ring-sky-300'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-2xs'
              }`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-condensed">
                {c.badgeTitle}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mt-1">{c.title}</h4>
              <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                {c.scope}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>{c.durationDays} Gün / {c.totalHours} Saat</span>
                <span className="text-sky-700 font-semibold hover:underline">Detaylar →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
