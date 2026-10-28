import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Calendar, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenRegistration: (courseId?: string) => void;
  onOpenEligibilityQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenRegistration,
  onOpenEligibilityQuiz,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Bar: 3 zones, logo positioned with larger scale than CTA button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 lg:h-24 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Wordmark (Noticeably larger than the right-side CTA button) */}
        <a href="#" className="flex items-center shrink-0 group transition-transform hover:scale-[1.02]">
          <BrandLogo size="nav" showAccreditationBadges={true} />
        </a>

        {/* Zone 2: 5 single-line clean text nav links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <a
            href="#egitimler"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Eğitim Seviyeleri
          </a>
          <a
            href="#mufredat"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Müfredat
          </a>
          <a
            href="#surecler"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Sertifikasyon
          </a>
          <a
            href="#takvim"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Eğitim Takvimi
          </a>
          <a
            href="#blog"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Blog & Rehber
          </a>
          <a
            href="#mevzuat"
            className="hover:text-sky-600 transition-colors whitespace-nowrap shrink-0"
          >
            Mevzuat & SSS
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Phone */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href="tel:02168501907"
            className="hidden sm:flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors whitespace-nowrap min-h-[44px]"
          >
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
              <Phone className="w-4 h-4 text-sky-600" />
            </div>
            <span className="font-bold tracking-tight">0216 850 19 07</span>
          </a>

          <button
            onClick={() => onOpenRegistration()}
            className="hidden sm:inline-flex bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 min-h-[44px] items-center"
          >
            Hemen Başvur
          </button>

          {/* Mobile hamburger toggle (min 44x44px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation tray */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            <a
              href="#egitimler"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Eğitim Seviyeleri (Bronz / Gümüş / Altın)
            </a>
            <a
              href="#mufredat"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Eğitim Müfredatı & Konular
            </a>
            <a
              href="#surecler"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Sertifikasyon Süreçleri & e-Devlet
            </a>
            <a
              href="#takvim"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Eğitim Takvimi & Şehirler
            </a>
            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Blog, Güvenlik İpuçları & Haberler
            </a>
            <a
              href="#mevzuat"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 py-2.5 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            >
              Mevzuat, Yükümlülükler & SSS
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full min-h-[44px] bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Hemen Kursa Kayıt Ol</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEligibilityQuiz();
              }}
              className="w-full min-h-[44px] text-center py-2.5 px-4 text-xs font-bold text-sky-900 bg-sky-50 hover:bg-sky-100 rounded-xl transition-colors"
            >
              Hangi Cankurtaran Belgesi Bana Uygun? (Test)
            </button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href="tel:02168501907"
                className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-3 text-xs font-bold text-slate-800 bg-slate-100 rounded-xl"
              >
                <Phone className="w-3.5 h-3.5 text-sky-600" />
                <span>0216 850 19 07</span>
              </a>

              <a
                href="https://wa.me/902168501907"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 min-h-[44px] py-2 px-3 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 rounded-xl"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
