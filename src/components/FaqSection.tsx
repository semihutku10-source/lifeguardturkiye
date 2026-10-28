import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/lifeguardData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
            MERAK EDİLENLER
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Cankurtaranlık eğitimi, sınavlar, e-Devlet tescili ve istihdam olanakları hakkında yanıtlar.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-hidden"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-slate-900">Farklı bir sorunuz mu var?</div>
            <div className="text-xs text-slate-500">
              Eğitmen kadromuz ve danışmanlarımız haftanın 7 günü yanıtlamaya hazırdır.
            </div>
          </div>
          <a
            href="tel:02168501907"
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-5 py-2.5 rounded-lg whitespace-nowrap transition-colors"
          >
            0216 850 19 07'yi Arayın
          </a>
        </div>
      </div>
    </section>
  );
};
