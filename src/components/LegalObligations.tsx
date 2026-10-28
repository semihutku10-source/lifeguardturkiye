import React from 'react';
import { Scale, AlertCircle, Building2, ShieldAlert, Award } from 'lucide-react';

export const LegalObligations: React.FC = () => {
  return (
    <section id="mevzuat" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
            T.C. KANUNİ HÜKÜMLER & DENETİMLER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Plaj & Havuzlarda Yasal Cankurtaran Bulundurma Zorunluluğu
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            T.C. Kültür ve Turizm Bakanlığı ile T.C. İçişleri Bakanlığı’nın ilgili yönetmeliklerine göre
            derinliği ve yüzölçümüne bakılmaksızın halka ve misafirlere açık yüzme alanlarında TSSF onaylı
            cankurtaran bulundurmak mecburidir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Otel ve Plaj İşletmeleri */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Oteller, Tatil Köyleri & Aqua Parklar
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Kültür ve Turizm Bakanlığı Turizm Tesisleri Nitelikleri Yönetmeliği uyarınca; yüzme
                havuzu veya plajı bulunan konaklama tesisleri, yüzme saatleri boyunca geçerli TSSF
                cankurtaran kartına sahip personel çalıştırmak zorundadır.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-700">
              Yaptırım: İdari para cezası ve ruhsat askıya alma.
            </div>
          </div>

          {/* Card 2: Site ve Rezidans Havuzları */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Site & Toplu Konut Havuzları
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Yargıtay ve ilgili mülki amirlik kararlarına göre; ortak kullanıma açık site havuzlarında
                yaşanabilecek boğulma veya boğulma tehlikesi vakalarında, cankurtaran bulundurmayan
                site yönetimi ve müteahhitlikler cezai ve hukuki olarak birinci derecede sorumlu tutulmaktadır.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-700">
              Sorumluluk: Site Yönetim Kurulu hukuki güvencesi.
            </div>
          </div>

          {/* Card 3: Spor Federasyonları Antrenörlük Ön Koşulu */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-red-100 text-red-800 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Su Sporları Antrenörlük Ön Şartı
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Gençlik ve Spor Bakanlığı Yüzme, Sutopu, Dalış ve Yelken Federasyonları Antrenör Eğitim
                Talimatnamesi uyarınca; 1. Kademe Yardımcı Antrenörlük kursuna başvurabilmek için
                en az Bronz Cankurtaran belgesi ibrazı zorunludur.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200 text-xs font-semibold text-slate-700">
              Geçerlilik: Resmi Spor Bilgi Sistemi kaydı.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
