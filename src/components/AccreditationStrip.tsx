import React from 'react';
import { ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

export const AccreditationStrip: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Badge 1: TSSF */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="w-11 h-11 rounded-lg bg-sky-900/40 border border-sky-400/50 flex items-center justify-center shrink-0 text-sky-300">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-300 font-condensed">
                TSSF YETKİSİ
              </div>
              <div className="text-sm font-semibold text-slate-100">
                Türkiye Sualtı Sporları Fed.
              </div>
              <div className="text-[11px] text-slate-400">Resmi Sicil & Sınav Tescili</div>
            </div>
          </div>

          {/* Badge 2: ILS */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="w-11 h-11 rounded-lg bg-sky-600/20 border border-sky-500/40 flex items-center justify-center shrink-0 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-sky-400 font-condensed">
                ILS AKREDİTASYONU
              </div>
              <div className="text-sm font-semibold text-slate-100">
                Int. Life Saving Federation
              </div>
              <div className="text-[11px] text-slate-400">Uluslararası Geçerli Sertifika</div>
            </div>
          </div>

          {/* Badge 3: e-Devlet */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="w-11 h-11 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-condensed">
                T.C. e-DEVLET
              </div>
              <div className="text-sm font-semibold text-slate-100">
                Spor Bilgi Sistemi
              </div>
              <div className="text-[11px] text-slate-400">Karekodlu Doğrulanabilir Belge</div>
            </div>
          </div>

          {/* Badge 4: İstihdam & Antrenörlük */}
          <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
            <div className="w-11 h-11 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400 font-condensed">
                YASAL ZORUNLULUK
              </div>
              <div className="text-sm font-semibold text-slate-100">
                Antrenörlük Ön Koşulu
              </div>
              <div className="text-[11px] text-slate-400">Otel & Plaj Zorunlu İstihdamı</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
