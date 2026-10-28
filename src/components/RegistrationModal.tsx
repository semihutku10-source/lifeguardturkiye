import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, Calendar, Phone, Send, ArrowRight } from 'lucide-react';
import { COURSES, UPCOMING_COHORTS } from '../data/lifeguardData';
import { CertificateLevel, TrainingCohort } from '../types/lifeguard';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  initialCohort?: TrainingCohort | null;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  initialCourseId = 'bronz',
  initialCohort = null,
}) => {
  const [courseId, setCourseId] = useState<string>(initialCourseId);
  const [selectedCohortId, setSelectedCohortId] = useState<string>(
    initialCohort ? initialCohort.id : ''
  );
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>(initialCohort?.city || 'İstanbul (Anadolu)');
  const [birthYear, setBirthYear] = useState<string>('2002');
  const [healthDeclaration, setHealthDeclaration] = useState<boolean>(true);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [bookingCode, setBookingCode] = useState<string>('');

  useEffect(() => {
    if (initialCourseId) {
      setCourseId(initialCourseId);
    }
    if (initialCohort) {
      setSelectedCohortId(initialCohort.id);
      setCity(initialCohort.city);
      setCourseId(initialCohort.courseType);
    }
  }, [initialCourseId, initialCohort, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `LG-TR-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingCode(code);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Top Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-sky-950 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <h3 className="text-base font-bold tracking-tight">
              Lifeguard Türkiye · Ön Kayıt Formu
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-4 max-h-[calc(90vh-70px)] overflow-y-auto">
            <div className="text-xs text-slate-500 mb-1 leading-relaxed">
              Ön kaydınız tamamen <span className="font-bold text-slate-700">ücretsizdir</span>.
              Kontenjanınız geçici olarak rezerve edilir ve uzman danışmanımız evrak checklistini tarafınıza iletir.
            </div>

            {/* Course Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                EĞİTİM SEVİYESİ
              </label>
              <select
                value={courseId}
                onChange={(e) => setCourseId(e.target.value)}
                className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-semibold"
                required
              >
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({c.badgeTitle})
                  </option>
                ))}
              </select>
            </div>

            {/* City & Preferred Cohort */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  ŞEHİR
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  required
                >
                  <option value="İstanbul (Anadolu)">İstanbul (Anadolu)</option>
                  <option value="İstanbul (Avrupa)">İstanbul (Avrupa)</option>
                  <option value="Antalya">Antalya</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Muğla (Bodrum)">Muğla (Bodrum)</option>
                  <option value="Ankara">Ankara</option>
                  <option value="Bursa">Bursa</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  TERCİH EDİLEN DÖNEM
                </label>
                <select
                  value={selectedCohortId}
                  onChange={(e) => setSelectedCohortId(e.target.value)}
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                >
                  <option value="">En Yakın Açık Dönem</option>
                  {UPCOMING_COHORTS.map((co) => (
                    <option key={co.id} value={co.id}>
                      {co.city} - {co.startDate}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  AD SOYAD
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Adınız Soyadınız"
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  TELEFON NUMARASI
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05XX XXX XX XX"
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-medium tracking-wide"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  E-POSTA ADRESİ
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@mail.com"
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-condensed">
                  DOĞUM YILI (18+ YAŞ)
                </label>
                <input
                  type="number"
                  min="1950"
                  max="2008"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  className="w-full min-h-[44px] bg-slate-50 border border-slate-300 text-slate-900 text-base sm:text-sm rounded-xl px-3 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500 font-medium tracking-wide"
                  required
                />
              </div>
            </div>

            {/* Health & Swimming Declaration */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={healthDeclaration}
                  onChange={(e) => setHealthDeclaration(e.target.checked)}
                  className="w-5 h-5 rounded text-sky-600 border-slate-300 mt-0.5 shrink-0"
                  required
                />
                <span className="leading-normal">
                  Temel düzeyde yüzebildiğimi, suda kalabileceğimi ve cankurtaranlık yapmaya engel
                  kronik/akut sağlık sorunum olmadığını beyan ederim.
                </span>
              </label>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500 text-center sm:text-left">
                7/24 Çağrı Merkezi: <a href="tel:02168501907" className="font-bold text-slate-800 hover:underline">0216 850 19 07</a>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto min-h-[48px] bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
              >
                <span>Ön Kaydımı Tamamla</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider font-condensed">
                BAŞVURUNUZ ALINDI
              </div>
              <h4 className="text-2xl font-extrabold text-slate-900 mt-1">
                Tebrikler {fullName}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Ön kayıt talebiniz TSSF eğitim sistemimize aktarılmıştır. Danışmanımız en kısa sürede
                tarafınızla iletişime geçecektir.
              </p>
            </div>

            {/* Booking Code Card */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Kayıt Referans Kodu:</span>
                <span className="font-bold text-sky-700 tracking-wider">{bookingCode}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Eğitim:</span>
                <span className="font-bold text-slate-800 capitalize">{courseId} Cankurtaran</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-500">Bölge:</span>
                <span className="font-semibold text-slate-800">{city}</span>
              </div>
            </div>

            {/* Next Steps */}
            <div className="text-xs text-slate-500 max-w-md mx-auto text-left bg-sky-50 p-4 rounded-xl border border-sky-100 space-y-1.5">
              <div className="font-bold text-sky-950 mb-1">Bundan Sonraki Adımlar:</div>
              <div>1. Kayıt danışmanımız evrak kontrolü için telefonla arayacaktır.</div>
              <div>2. WhatsApp üzerinden havuz konumu ve ders saatleri paylaşılacaktır.</div>
              <div>3. Tesis girişinde kimlik fotokopinizle birlikte eğitiminize başlayabilirsiniz.</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/902168501907?text=Merhaba,%20Lifeguard%20T%C3%BCrkiye%20cankurtaran%20e%C4%9Fitimi%20i%C3%A7in%20${bookingCode}%20kodlu%20%C3%B6n%20kayd%C4%B1m%C4%B1%20olu%C5%9Fturmu%C5%9Ftum.`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>WhatsApp’tan Bilgi Al</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-2.5 px-5 rounded-lg transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
