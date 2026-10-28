import React from 'react';
import { Phone, MessageCircle, Send } from 'lucide-react';

interface MobileBottomBarProps {
  onOpenRegistration: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenRegistration }) => {
  return (
    <aside
      aria-label="Hızlı İletişim ve Başvuru"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center justify-between gap-2"
    >
      {/* 1. Quick Call Button */}
      <a
        href="tel:02168501907"
        className="flex flex-col items-center justify-center min-w-[58px] min-h-[44px] px-2 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 transition-colors shrink-0"
        aria-label="Telefonla Ara"
      >
        <Phone className="w-4 h-4 text-sky-700" />
        <span className="text-[10px] font-bold mt-0.5">Ara</span>
      </a>

      {/* 2. WhatsApp Direct Inquiries */}
      <a
        href="https://wa.me/902168501907?text=Merhaba,%20Lifeguard%20T%C3%BCrkiye%20cankurtaran%20e%C4%9Fitimi%20ve%20kay%C4%B1t%20s%C3%BCre%C3%A7leri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center min-w-[58px] min-h-[44px] px-2 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 text-emerald-800 border border-emerald-200/60 transition-colors shrink-0"
        aria-label="WhatsApp Destek"
      >
        <MessageCircle className="w-4 h-4 text-emerald-600" />
        <span className="text-[10px] font-bold mt-0.5">WhatsApp</span>
      </a>

      {/* 3. Primary Registration Action */}
      <button
        onClick={onOpenRegistration}
        className="flex-1 min-h-[44px] bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold text-xs px-3 py-2 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Kursa Hemen Başvur</span>
      </button>
    </aside>
  );
};
