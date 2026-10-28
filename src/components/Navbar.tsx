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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* MOBILE LAYOUT (MAXIMIZED LOGO AREA) */}
        <div className="flex lg:hidden items-center justify-between h-40 px-6 relative">
          {/* Left Side: Empty for balance */}
          <div className="w-10" />

          {/* Center: Massive Logo to fill the red square area requested */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <a href="#" className="flex items-center">
              <BrandLogo 
                size="xl" 
                className="scale-[2.4] origin-center"
                showAccreditationBadges={false} 
              />
            </a>
          </div>

          {/* Right Side: Menu Button (Standard size) */}
          <div className="z-10">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center rounded-xl text-slate-700 bg-slate-50 border border-slate-100 active:bg-slate-100 transition-colors"
              aria-label="Menü"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT (SINGLE ROW) */}
        <div className="hidden lg:flex h-24 items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex items-center shrink-0 group transition-transform hover:scale-[1.02]">
            <BrandLogo size="nav" showAccreditationBadges={true} />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#egitimler" className="hover:text-sky-600 transition-colors whitespace-nowrap">Eğitim Seviyeleri</a>
            <a href="#mufredat" className="hover:text-sky-600 transition-colors whitespace-nowrap">Müfredat</a>
            <a href="#surecler" className="hover:text-sky-600 transition-colors whitespace-nowrap">Sertifikasyon</a>
            <a href="#takvim" className="hover:text-sky-600 transition-colors whitespace-nowrap">Eğitim Takvimi</a>
            <a href="#blog" className="hover:text-sky-600 transition-colors whitespace-nowrap">Blog & Rehber</a>
            <a href="#mevzuat" className="hover:text-sky-600 transition-colors whitespace-nowrap">Mevzuat & SSS</a>
          </nav>

          {/* Zone 3: Desktop Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <a
              href="tel:02168501907"
              className="flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-sky-600 transition-colors whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
                <Phone className="w-4 h-4 text-sky-600" />
              </div>
              <span className="font-bold tracking-tight">0216 850 19 07</span>
            </a>

            <button
              onClick={() => onOpenRegistration()}
              className="bg-[#0B2545] hover:bg-[#07192f] text-white text-sm font-bold px-6 py-2.5 rounded-xl shadow-xs transition-all"
            >
              Hemen Başvur
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation tray */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-8 space-y-5 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
          <nav className="flex flex-col space-y-1 text-sm font-semibold text-slate-800">
            <a href="#egitimler" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Eğitim Seviyeleri</a>
            <a href="#mufredat" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Müfredat</a>
            <a href="#surecler" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Sertifikasyon</a>
            <a href="#takvim" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Eğitim Takvimi</a>
            <a href="#blog" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Blog & Rehber</a>
            <a href="#mevzuat" onClick={() => setMobileMenuOpen(false)} className="px-3 py-3 rounded-lg active:bg-slate-50">Mevzuat & SSS</a>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegistration();
              }}
              className="w-full h-14 bg-[#0B2545] text-white font-bold rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              Kursa Hemen Başvur
            </button>
            <div className="grid grid-cols-2 gap-3">
              <a href="tel:02168501907" className="h-12 flex items-center justify-center gap-2 bg-slate-100 rounded-xl text-xs font-bold">
                <Phone className="w-4 h-4 text-sky-600" />
                0216 850 19 07
              </a>
              <a href="https://wa.me/902168501907" target="_blank" rel="noreferrer" className="h-12 flex items-center justify-center bg-emerald-50 text-emerald-800 rounded-xl text-xs font-bold">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
