import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-900">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" light />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm pt-2">
              Lifeguard Türkiye, Türkiye Sualtı Sporları Federasyonu (TSSF) yetkili eğitim merkezi
              ve International Life Saving Federation (ILS) akreditasyonlu cankurtaran yetiştirme,
              sertifikasyon ve istihdam kurumudur.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400">Çağrı Merkezi & WhatsApp:</span>
                <a href="tel:02168501907" className="font-bold text-white hover:underline tracking-tight">
                  0216 850 19 07
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400">Resmi Web Portalı:</span>
                <span className="font-semibold text-white">cankurtaranbelgesi.com</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>İstanbul Merkez Ofisi: Kadıköy & Ataşehir / İstanbul</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider font-condensed mb-4">
              EĞİTİM PROGRAMLARI
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#egitimler" className="hover:text-white transition-colors">
                  Bronz Cankurtaran (Havuz)
                </a>
              </li>
              <li>
                <a href="#egitimler" className="hover:text-white transition-colors">
                  Gümüş Cankurtaran (Deniz/Plaj)
                </a>
              </li>
              <li>
                <a href="#egitimler" className="hover:text-white transition-colors">
                  Altın Cankurtaran (Şeflik)
                </a>
              </li>
              <li>
                <a href="#egitimler" className="hover:text-white transition-colors">
                  2 Yıllık Vize Yenileme
                </a>
              </li>
              <li>
                <a href="#egitimler" className="hover:text-white transition-colors">
                  Cankurtaran Eğitmenliği
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Blog & Legal */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider font-condensed mb-4">
              BLOG & MEVZUAT REHBERİ
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  2026 Otel & Plaj Yönetmeliği
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Rip (Çeken) Akıntısı Rehberi
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  İkincil Boğulma Belirtileri
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  2026 Sezonu İstihdam Raporu
                </a>
              </li>
              <li>
                <a href="#mevzuat" className="hover:text-white transition-colors">
                  Antrenörlük Başvuru Şartları
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Accreditation & e-Devlet */}
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wider font-condensed mb-4">
              RESMİ AKREDİTASYON
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-white font-semibold text-xs">TSSF Tescilli</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Türkiye Sualtı Sporları Federasyonu Yetkili Cankurtarma Merkezi
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-white font-semibold text-xs">e-Devlet Entegrasyonu</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Spor Bilgi Sistemi Resmi Karekodlu Sertifika
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} Lifeguard Türkiye (cankurtaranbelgesi.com). Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-3">
            <span>TSSF Yönetmeliklerine Uygundur</span>
            <span>·</span>
            <span>Gizlilik Politikası</span>
            <span>·</span>
            <span>KVKK Aydınlatma Metni</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
