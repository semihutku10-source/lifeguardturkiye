import React from 'react';
import { CheckCircle2, ArrowRight, Sparkles, Waves, ShieldCheck, Award, LifeBuoy, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenRegistration: (courseId?: string) => void;
  onOpenPosterModal?: () => void;
  onOpenEligibilityQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRegistration,
  onOpenEligibilityQuiz,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-100/60 via-sky-50/40 to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-200">
      {/* Dynamic Animated Sea Waves & Ocean Ambient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
        {/* Soft Radial Ocean Sunlight Glows */}
        <div className="absolute -top-24 right-1/4 w-[650px] h-[650px] bg-sky-200/45 rounded-full blur-3xl animate-ocean-glow" />
        <div className="absolute top-1/3 -left-32 w-[550px] h-[550px] bg-cyan-200/35 rounded-full blur-3xl animate-ocean-glow" style={{ animationDelay: '-4s' }} />
        
        {/* Animated Multi-Layer Flowing SVG Ocean Waves at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 pointer-events-none overflow-hidden">
          {/* Deep ocean back wave layer */}
          <div className="absolute bottom-0 left-0 w-[2400px] h-full opacity-20 text-[#0284c7] animate-wave-slow">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
              <path d="M0,45 C150,90 350,10 500,55 C650,100 850,20 1000,60 C1150,100 1200,45 1200,45 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Mid-level turquoise sea wave layer */}
          <div className="absolute bottom-0 left-0 w-[2400px] h-full opacity-25 text-[#0ea5e9] animate-wave-medium">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
              <path d="M0,65 C200,20 400,95 600,45 C800,-5 1000,85 1200,50 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Foreground crest wave with foam reflection */}
          <div className="absolute bottom-0 left-0 w-[2400px] h-full opacity-35 text-[#38bdf8] animate-wave-fast">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
              <path d="M0,80 C180,45 360,110 540,75 C720,40 900,95 1080,65 C1140,55 1200,80 1200,80 L1200,120 L0,120 Z" />
            </svg>
          </div>

          {/* Soft water gradient blend into base */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-50 via-slate-50/70 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-column balanced grid */}
        {/* Main 2-column balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Right Column (now visually first on mobile): Coastal Ocean Rescue Visual Composition */}
          <div className="lg:col-span-5 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Soft decorative water ripple backdrop */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-400/20 via-cyan-300/15 to-transparent rounded-3xl blur-xl" />

              {/* Main Visual Frame with gentle buoyancy motion */}
              <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-sky-200/80 shadow-2xl overflow-hidden animate-float-gentle group">
                {/* Coastal Marine Photography */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    src="/assets/images/hero_coastal_ocean_rescue_1793176525153.jpg"
                    alt="Lifeguard Türkiye Açık Deniz ve Kıyı Güvenlik Eğitimi"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle coastal lighting overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2545]/85 via-black/20 to-transparent" />

                  {/* Top-right floating accreditation badge */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/60 shadow-md flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="text-[11px] font-extrabold text-[#0B2545] leading-tight">TSSF & ILS ONAYLI</div>
                      <div className="text-[9px] font-medium text-slate-500">Resmi Belgelendirme</div>
                    </div>
                  </div>

                  {/* Overlaid Bottom Title & Info inside Image */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-200 uppercase tracking-wider mb-1">
                      <LifeBuoy className="w-3.5 h-3.5 text-sky-300 animate-spin" style={{ animationDuration: '12s' }} />
                      <span>Deniz ve Kıyı Emniyet Parkurları</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm">
                      Mavi Bayraklı Plajlar, Tesisler ve Havuzlar İçin Profesyonel Can Güvenliği
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive & Trust Strip */}
                <div className="p-4 bg-gradient-to-r from-slate-50 to-sky-50/60 border-t border-sky-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-[#0B2545] shrink-0" />
                    <span className="font-medium">İstanbul & Türkiye Geneli Eğitim Noktaları</span>
                  </div>

                  <a
                    href="tel:02168501907"
                    className="inline-flex items-center gap-1.5 font-bold text-[#0B2545] hover:text-sky-700 hover:underline shrink-0"
                  >
                    <span>0216 850 19 07</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Floating Stat Card 1 - Bottom Left Buoyancy */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-sky-100 shadow-xl items-center gap-3 animate-float-reverse z-20">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0B2545] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#0B2545]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Uluslararası ILS Denkliği</div>
                  <div className="text-[10px] text-slate-500">Dünya genelinde geçerli sertifika</div>
                </div>
              </div>

              {/* Floating Stat Card 2 - Top Left Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-[#0B2545]/95 text-white backdrop-blur-md px-3.5 py-2 rounded-xl border border-sky-700/50 shadow-xl items-center gap-2 z-20">
                <Waves className="w-4 h-4 text-sky-400" />
                <span className="text-xs font-bold font-condensed tracking-wide uppercase">
                  CANLI EĞİTİM SEZONU
                </span>
              </div>
            </div>
          </div>

          {/* Left Column (now visually second on mobile): Headlines & Actions */}
          <div className="lg:col-span-7 lg:order-1 flex flex-col space-y-6">
            {/* Accreditation Clean Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-sky-900 tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-[#0B2545]">
                <Waves className="w-3.5 h-3.5 text-[#0B2545]" />
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

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 backdrop-blur-xs border border-sky-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Uygulamalı Deniz Eğitimi</div>
                  <div className="text-[11px] text-slate-500">Açık deniz ve havuz parkurları</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 backdrop-blur-xs border border-sky-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Kıdemli Antrenörler</div>
                  <div className="text-[11px] text-slate-500">TSSF resmi eğitmen kadrosu</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/90 backdrop-blur-xs border border-sky-100 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Uluslararası Geçerlilik</div>
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
              <span className="font-semibold text-slate-700">Yasal Bilgilendirme:</span> Su sporları branşlarında
              (Yüzme, Sutopu, Dalış vb.) antrenörlük ve can güvenliği sorumluluğu için Bronz Cankurtaran belgesi kanuni
              ön koşuldur.
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
