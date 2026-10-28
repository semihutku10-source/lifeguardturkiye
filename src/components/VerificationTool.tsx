import React, { useState } from 'react';
import { ShieldCheck, Search, CheckCircle2, AlertTriangle, FileText, ExternalLink } from 'lucide-react';

interface VerifiedRecord {
  sicilNo: string;
  name: string;
  level: string;
  issueDate: string;
  expiryDate: string;
  barcode: string;
  status: 'Aktif' | 'Vize Yenileme Gerekli';
  center: string;
  scope: string;
}

const SAMPLE_RECORDS: Record<string, VerifiedRecord> = {
  'TSSF-2024-8841': {
    sicilNo: 'TSSF-2024-8841',
    name: 'M*** E*** Y***',
    level: 'Bronz Cankurtaran',
    issueDate: '14.06.2025',
    expiryDate: '14.06.2027',
    barcode: 'ED-TR-9941829381',
    status: 'Aktif',
    center: 'Lifeguard Türkiye (Yetki No: TSSF-034/08)',
    scope: 'Tüm havuz, aqua park ve durgun su tesisleri.',
  },
  'TSSF-2023-4120': {
    sicilNo: 'TSSF-2023-4120',
    name: 'A*** K*** S***',
    level: 'Gümüş Cankurtaran',
    issueDate: '22.08.2024',
    expiryDate: '22.08.2026',
    barcode: 'ED-TR-7729104812',
    status: 'Aktif',
    center: 'Lifeguard Türkiye (Yetki No: TSSF-034/08)',
    scope: 'Tüm plaj, deniz, göl, lagün ve havuz alanları.',
  },
};

export const VerificationTool: React.FC = () => {
  const [query, setQuery] = useState<string>('TSSF-2024-8841');
  const [result, setResult] = useState<VerifiedRecord | null>(SAMPLE_RECORDS['TSSF-2024-8841']);
  const [hasSearched, setHasSearched] = useState<boolean>(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toUpperCase();
    if (SAMPLE_RECORDS[clean]) {
      setResult(SAMPLE_RECORDS[clean]);
    } else {
      // Mock generated realistic response for custom query
      setResult({
        sicilNo: clean.startsWith('TSSF') ? clean : `TSSF-2025-${Math.floor(1000 + Math.random() * 9000)}`,
        name: 'K*** B*** T***',
        level: 'Bronz Cankurtaran',
        issueDate: '18.10.2025',
        expiryDate: '18.10.2027',
        barcode: `ED-TR-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        status: 'Aktif',
        center: 'Lifeguard Türkiye (Yetki No: TSSF-034/08)',
        scope: 'Havuz ve Durgun Su Güvenliği.',
      });
    }
    setHasSearched(true);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-xl">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-bold text-sky-400 uppercase tracking-wider font-condensed">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>T.C. e-DEVLET & TSSF RESMİ DOĞRULAMA SİMÜLASYONU</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
          Cankurtaran Belge Doğrulama ve Sicil Sorgulama
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-2">
          İşveren otel yöneticileri, plaj işletmeleri veya mezunlarımız; TSSF sicil no ya da e-Devlet barkod
          numarasıyla belgenin güncelliğini ve yetki kapsamını sorgulayabilir.
        </p>
      </div>

      {/* Search Input Bar */}
      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 max-w-xl">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Örn: TSSF-2024-8841 veya TC Kimlik No"
            className="w-full bg-slate-800/90 border border-slate-700 text-white text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-hidden focus:border-sky-500 font-medium tracking-wide"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#0B2545] hover:bg-[#07192f] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border border-sky-500/30 transition-colors whitespace-nowrap"
        >
          Belgeyi Doğrula
        </button>
      </form>

      {/* Quick Sample Links */}
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-400">
        <span>Örnek Sicil Numaraları:</span>
        <button
          type="button"
          onClick={() => {
            setQuery('TSSF-2024-8841');
            setResult(SAMPLE_RECORDS['TSSF-2024-8841']);
          }}
          className="text-sky-400 hover:underline font-semibold tracking-wide"
        >
          TSSF-2024-8841 (Bronz)
        </button>
        <span>·</span>
        <button
          type="button"
          onClick={() => {
            setQuery('TSSF-2023-4120');
            setResult(SAMPLE_RECORDS['TSSF-2023-4120']);
          }}
          className="text-sky-400 hover:underline font-semibold tracking-wide"
        >
          TSSF-2023-4120 (Gümüş)
        </button>
      </div>

      {/* Verification Certificate Card Output */}
      {hasSearched && result && (
        <div className="mt-8 p-6 rounded-xl bg-slate-800/80 border border-slate-700 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/80 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <span>RESMİ TESCİL GEÇERLİ (ONAYLANDI)</span>
                </div>
                <div className="text-base font-bold text-white mt-0.5">
                  {result.name}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Durum:</span>
              <span className="font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-700/50 px-2 py-0.5 rounded-md">
                {result.status}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-slate-400 text-[11px]">Sertifika Kademesi</div>
              <div className="font-bold text-white mt-0.5 text-sm">{result.level}</div>
            </div>

            <div>
              <div className="text-slate-400 text-[11px]">TSSF Sicil Numarası</div>
              <div className="font-bold text-sky-400 mt-0.5 text-sm tracking-wide">{result.sicilNo}</div>
            </div>

            <div>
              <div className="text-slate-400 text-[11px]">Geçerlilik Tarihi (2 Yıl)</div>
              <div className="font-bold text-white mt-0.5 tracking-tight">{result.issueDate} – {result.expiryDate}</div>
            </div>

            <div>
              <div className="text-slate-400 text-[11px]">e-Devlet Barkod No</div>
              <div className="font-medium text-slate-300 mt-0.5 text-[11px] tracking-wide truncate">{result.barcode}</div>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
            <div>
              <span className="text-slate-300 font-medium">Yetkili Eğitim Merkezi:</span> {result.center}
            </div>
            <div className="text-sky-300">
              Yetki Kapsamı: {result.scope}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
