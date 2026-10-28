import React from 'react';
import { CERTIFICATION_STEPS } from '../data/lifeguardData';
import { FileCheck, ShieldCheck, CheckCircle2, Award, Clock, ArrowRight } from 'lucide-react';

interface CertificationProcessSectionProps {
  onStartRegistration: () => void;
}

export const CertificationProcessSection: React.FC<CertificationProcessSectionProps> = ({
  onStartRegistration,
}) => {
  return (
    <section id="surecler" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
            RESMİ SÜREÇ REHBERİ
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Adım Adım Sertifikasyon Süreçleri
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            İlk başvurunuzdan TSSF Manyetik Kimlik Kartınızın basılmasına ve e-Devlet sistemine
            resmi olarak işlenmesine kadar tüm aşamaları şeffaflıkla yönetiyoruz.
          </p>
        </div>

        {/* 6-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATION_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-sky-900 tracking-tight">
                    0{step.stepNumber}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                    <Clock className="w-3 h-3 text-sky-600" />
                    <span>{step.timing}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h3>
                <div className="text-xs font-medium text-[#0B2545] mt-0.5">
                  {step.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                  {step.description}
                </p>

                {/* Bullets */}
                <ul className="mt-4 pt-4 border-t border-slate-200/60 space-y-2">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-normal">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Responsible Entity Tag */}
              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Yetkili Mercii:</span>
                <span className="font-semibold text-slate-800">{step.officialEntity}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Required Documents Checklist Card */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-sky-300 uppercase tracking-wider font-condensed">
                <FileCheck className="w-4 h-4 text-emerald-400" />
                <span>KAYIT ESNASINDA İSTENEN EVRAKLAR</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Eğitime Katılmak İçin Yanınızda Bulunması Gerekenler
              </h3>
              <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-2xl">
                Evraklarınızı kursun ilk günü eğitmenlerimize elden teslim edebilir veya kayıt
                sonrası WhatsApp danışman hattımız üzerinden dijital olarak iletebilirsiniz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <span>Nüfus cüzdanı / Kimlik fotokopisi (18+ yaş)</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <span>Sağlık Beyan Formu (Merkezimizce temin edilir)</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <span>2 adet son 6 ayda çekilmiş vesikalık/biyometrik fotoğraf</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-white">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold">
                    ✓
                  </div>
                  <span>Diploma veya e-Devlet mezuniyet belgesi fotokopisi</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/15 text-center">
              <Award className="w-12 h-12 text-yellow-400 mb-2" />
              <div className="text-base font-bold text-white">Hızlı Kayıt & Danışmanlık</div>
              <p className="text-xs text-sky-200 mt-1 mb-4">
                Uygunluğunuzu hemen doğrulamak için formu doldurun.
              </p>
              <button
                onClick={onStartRegistration}
                className="w-full bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all text-xs"
              >
                Evrakları Onayla & Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
