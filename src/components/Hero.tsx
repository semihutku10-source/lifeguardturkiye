import React from 'react';
import { ShieldCheck, Award, Users, CheckCircle2, Eye, Calendar, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenRegistration: (courseId?: string) => void;
  onOpenPosterModal: () => void;
  onOpenEligibilityQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  onOpenPosterModal,
  onOpenEligibilityQuiz,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-8 pb-16 lg:py-16 border-b border-slate-200">
      {/* Background Decorative Subtle Ocean Wave Shading */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Accreditation Clean Metadata (Anti-slop, no candy pill wrappers) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-[#0B2545]">
                <span className="w-2 h-2 rounded-full bg-[#0B2545]" />
                TSSF Yetkili Eğitim Merkezi
              </span>
              <span className="text-slate-300">·</span>
              <span>ILS Uluslararası Akreditasyon</span>
              <span className="text-slate-300">·</span>
              <span>e-Devlet Onaylı</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] sm:leading-[1.1] text-balance">
              Deniz, havuz ve suda güvenlik için{' '}
              <span className="text-[#0B2545] font-condensed tracking-normal uppercase block sm:inline">
                Cankurtaran Eğitimi
              </span>{' '}
              al!
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Türkiye Sualtı Sporları Federasyonu (TSSF) ve Uluslararası Can Kurtarma Federasyonu (ILS)
              standartlarında Bronz, Gümüş ve Altın Cankurtaran sertifikasyon programları. 3 günde
              uygulamalı eğitim, resmi federasyon sınavı ve garantili kariyer desteği.
            </p>

            {/* Key Bullet Highlights directly inspired by brochure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Uygulamalı Eğitim</div>
                  <div className="text-[11px] text-slate-500">Olimpik havuz & deniz parkurları</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Profesyonel Eğitmenler</div>
                  <div className="text-[11px] text-slate-500">TSSF kıdemli antrenör kadrosu</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Uluslararası Geçerli</div>
                  <div className="text-[11px] text-slate-500">e-Devlet tescilli & ILS denkliği</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onOpenRegistration('bronz')}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <span>Hemen Kayıt Ol</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEligibilityQuiz}
                className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base px-6 py-3.5 rounded-xl border border-slate-300 shadow-2xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Hangi Belge Bana Uygun?</span>
              </button>

              <a
                href="#mufredat"
                className="text-center sm:text-left text-xs sm:text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors py-2 px-1"
              >
                Müfredatı İncele ↓
              </a>
            </div>

            {/* Quick trust note */}
            <div className="text-xs text-slate-500 pt-1 leading-normal">
              <span className="font-semibold text-slate-700">Yasal Not:</span> Su sporları branşlarında
              (Yüzme, Sutopu, Dalış vb.) antrenörlük başvuruları için Bronz Cankurtaran belgesi kanuni
              ön koşuldur.
            </div>
          </div>

          {/* Right Column: Visual Poster Card & Official Badge Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden group">
              {/* Top Banner Tag */}
              <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 px-5 py-3 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-wider uppercase font-condensed">
                    RESMİ EĞİTİM İLANI
                  </span>
                </div>
                <button
                  onClick={onOpenPosterModal}
                  className="flex items-center gap-1.5 text-xs text-sky-200 hover:text-white transition-colors underline font-medium"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Afişi Büyüt</span>
                </button>
              </div>

              {/* The Actual Poster Image from User Attachment */}
              <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden cursor-pointer" onClick={onOpenPosterModal}>
                <img
                  src="/assets/aistudio/image_c6751b6c.png"
                  alt="Lifeguard Türkiye Bronz Cankurtaran Eğitimi Afişi"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Click to Zoom Indicator */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-white/90 backdrop-blur-xs text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#0B2545]" />
                    <span>Afişi İncelemek İçin Tıklayın</span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action Strip */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Eğitim & Danışma Hattı:</span>
                  <a href="tel:02168501907" className="font-bold text-[#0B2545] hover:underline tracking-tight">
                    0216 850 19 07
                  </a>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span className="font-semibold text-slate-800">Resmi Web Sitesi:</span>
                  <span className="font-semibold text-sky-700">cankurtaranbelgesi.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-10 border-t border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col">
            <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              3 GÜN <span className="text-[#0B2545] text-2xl">/ 21 SAAT</span>
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Uluslararası standartta yoğun teorik ve su içi pratik müfredat.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              %98 <span className="text-sky-600 text-2xl">BAŞARI</span>
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              TSSF resmi sınavında yüksek başarı oranı ve ücretsiz telafi sınav hakkı.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              350+ <span className="text-emerald-600 text-2xl">TESİS</span>
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              5 yıldızlı oteller, aqua parklar ve mavi bayraklı plajlarda iş yönlendirmesi.
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-condensed font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              T.C. e-DEVLET
            </span>
            <span className="text-xs text-slate-500 font-medium mt-1">
              Barkodlu resmi federasyon kaydı ve ILS uluslararası denklik kartı.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
