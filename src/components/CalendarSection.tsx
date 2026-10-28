import React, { useState } from 'react';
import { UPCOMING_COHORTS } from '../data/lifeguardData';
import { TrainingCohort } from '../types/lifeguard';
import { Calendar, MapPin, Users, Award, ChevronRight, Check } from 'lucide-react';

interface CalendarSectionProps {
  onSelectCohort: (cohort: TrainingCohort) => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({ onSelectCohort }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Tümü');
  const [selectedType, setSelectedType] = useState<string>('Tümü');

  const cities = ['Tümü', 'İstanbul', 'Antalya', 'İzmir', 'Muğla', 'Ankara'];
  const types = [
    { label: 'Tüm Seviyeler', value: 'Tümü' },
    { label: 'Bronz (Havuz)', value: 'bronz' },
    { label: 'Gümüş (Deniz)', value: 'gumus' },
    { label: 'Altın (Şef)', value: 'altin' },
    { label: 'Vize Yenileme', value: 'vize' },
  ];

  const filteredCohorts = UPCOMING_COHORTS.filter((item) => {
    const cityMatch = selectedCity === 'Tümü' || item.city.includes(selectedCity);
    const typeMatch = selectedType === 'Tümü' || item.courseType === selectedType;
    return cityMatch && typeMatch;
  });

  const formatDateTR = (dateStr: string) => {
    const [year, month, day] = dateStr.split('-');
    const monthsTR = [
      'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
      'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
    ];
    return `${parseInt(day)} ${monthsTR[parseInt(month) - 1]}`;
  };

  return (
    <section id="takvim" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
              GÜNCEL EĞİTİM TAKVİMİ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Dönemler & Kontenjan Durumu
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              Size en uygun tarih ve şehirdeki kontenjanı seçerek hemen yerinizi ayırtın.
              Sınıflarımız kalite ve güvenlik gereği maksimum 12–18 kişi ile sınırlıdır.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* City Selector */}
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg px-3 py-2.5 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c === 'Tümü' ? 'Tüm Şehirler' : c}
                </option>
              ))}
            </select>

            {/* Type Selector */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg px-3 py-2.5 shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Cohort Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCohorts.map((cohort) => {
            const remaining = cohort.totalSlots - cohort.bookedSlots;
            const isAlmostFull = remaining <= 4;

            return (
              <div
                key={cohort.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-5"
              >
                <div>
                  {/* Top Bar of card */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-slate-800">{cohort.city}</span>
                    <span
                      className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                        cohort.status === 'Son Kontenjanlar'
                          ? 'bg-red-50 text-red-700 border border-red-200'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}
                    >
                      {cohort.status === 'Son Kontenjanlar'
                        ? `Son ${remaining} Kontenjan`
                        : `${remaining} Boş Yer`}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-slate-900 capitalize">
                    {cohort.courseType === 'bronz'
                      ? 'Bronz Cankurtaran'
                      : cohort.courseType === 'gumus'
                      ? 'Gümüş Cankurtaran'
                      : cohort.courseType === 'altin'
                      ? 'Altın Cankurtaran'
                      : 'Vize Yenileme'}
                  </h3>

                  {/* Dates Banner */}
                  <div className="mt-3 p-3 rounded-lg bg-sky-50/60 border border-sky-100 flex items-center gap-3 text-sky-950">
                    <Calendar className="w-5 h-5 text-sky-700 shrink-0" />
                    <div>
                      <div className="text-xs font-bold">
                        {formatDateTR(cohort.startDate)} – {formatDateTR(cohort.endDate)}
                      </div>
                      <div className="text-[11px] text-sky-700">{cohort.format}</div>
                    </div>
                  </div>

                  {/* Venue Details */}
                  <div className="mt-4 space-y-2 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800">{cohort.facility}</div>
                        <div className="text-slate-500">{cohort.district}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <Award className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-[11px] text-slate-500">{cohort.instructor}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Register CTA */}
                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onSelectCohort(cohort)}
                    className="w-full bg-slate-900 hover:bg-[#0B2545] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Bu Döneme Kayıt Ol</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCohorts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8">
            <p className="text-slate-600 text-sm">
              Seçilen kriterlerde şu anda açık dönem bulunamadı. Yeni açılacak dönemler için lütfen danışma hattımızla iletişime geçin.
            </p>
            <a
              href="tel:02168501907"
              className="inline-block mt-3 text-sm font-bold text-[#0B2545] hover:underline"
            >
              0216 850 19 07 Numarasını Arayın
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
