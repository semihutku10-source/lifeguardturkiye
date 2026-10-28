import React from 'react';
import { X, Download, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

interface PosterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnroll: () => void;
}

export const PosterModal: React.FC<PosterModalProps> = ({ isOpen, onClose, onEnroll }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden my-6">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 text-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-sm font-bold tracking-tight">
              Lifeguard Türkiye Resmi Eğitim Afişi & Duyurusu
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 2-Column Inside Modal: Image on Left, Explanations on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950">
          {/* Left Column: The Real Image */}
          <div className="md:col-span-7 flex items-center justify-center p-4 bg-black/40">
            <img
              src="/assets/aistudio/image_c6751b6c.png"
              alt="Lifeguard Türkiye Bronz Cankurtaran Eğitimi Resmi İlanı"
              className="max-h-[75vh] w-auto object-contain rounded-lg shadow-lg border border-slate-800"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Column: Key Details Extracted from the Poster */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between text-white space-y-6">
            <div>
              <div className="text-xs font-bold text-sky-400 uppercase tracking-wider font-condensed">
                AFİŞ DETAYLARI & KAZANIMLAR
              </div>
              <h3 className="text-2xl font-black font-condensed uppercase tracking-tight mt-1 text-white">
                BRONZ CANKURTARAN EĞİTİMİ
              </h3>
              <p className="text-xs text-sky-200 mt-2 leading-relaxed">
                Deniz, havuz ve suda güvenlik için TSSF ve ILS akreditasyonlu resmi cankurtaranlık eğitimi.
              </p>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>TSSF Onaylı Sertifika:</strong> Federasyon tescilli resmi cankurtaran kimlik kartı.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>e-Devlet Onaylı Sertifika:</strong> Karekodlu ve barkodlu Spor Bilgi Sistemi tescili.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Kariyer & İstihdam Desteği:</strong> 350+ anlaşmalı 5 yıldızlı otel ve plajda iş imkanı.</span>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Su Branşlarında Antrenörlük:</strong> Yüzme ve dalış antrenörlüğü için zorunlu ön koşul.</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2 text-xs text-slate-400">
                <div className="flex justify-between">
                  <span>Yetkili Kurum:</span>
                  <span className="font-bold text-white">Lifeguard Türkiye</span>
                </div>
                <div className="flex justify-between">
                  <span>Web Sitesi:</span>
                  <span className="font-semibold text-sky-400">cankurtaranbelgesi.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Danışma Hattı:</span>
                  <a href="tel:02168501907" className="font-bold text-sky-400 hover:underline tracking-tight">
                    0216 850 19 07
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onEnroll();
                }}
                className="w-full bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Bu Eğitime Hemen Başvur</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2 px-4 rounded-lg text-xs transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
