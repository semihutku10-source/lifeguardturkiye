import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { CertificateLevel } from '../types/lifeguard';

interface EligibilityAdvisorProps {
  onSelectRecommended: (courseId: CertificateLevel) => void;
}

export const EligibilityAdvisor: React.FC<EligibilityAdvisorProps> = ({
  onSelectRecommended,
}) => {
  const [step, setStep] = useState<number>(1);
  const [targetLocation, setTargetLocation] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [swimConfidence, setSwimConfidence] = useState<string>('');

  const resetQuiz = () => {
    setStep(1);
    setTargetLocation('');
    setExperience('');
    setSwimConfidence('');
  };

  const getRecommendation = (): {
    level: CertificateLevel;
    title: string;
    reason: string;
    nextStepText: string;
  } => {
    if (experience === 'has_license_expired') {
      return {
        level: 'vize',
        title: 'Cankurtaran Vize Yenileme Programı',
        reason:
          'Daha önce alınmış bir belgeniz bulunduğu için sıfırdan 3 günlük eğitime katılmanıza gerek yoktur. 1 günlük hızlandırılmış vize yenileme semineri ile belgenizi e-Devlet üzerinden 2 yıl daha uzatabilirsiniz.',
        nextStepText: 'Vize Yenileme Seminerine Kaydol',
      };
    }

    if (experience === 'silver_6months' && targetLocation === 'lead') {
      return {
        level: 'altin',
        title: 'Altın Cankurtaran (Şef & Ekip Lideri)',
        reason:
          'En az 6 ay Gümüş Cankurtaran olarak çalıştığınız ve ekip yönetimi hedeflediğiniz için doğrudan Altın Cankurtaranlık eğitimine uygunsunuz.',
        nextStepText: 'Altın Cankurtaran Programına Kaydol',
      };
    }

    if (targetLocation === 'sea') {
      return {
        level: 'gumus',
        title: 'Gümüş Cankurtaran Eğitimi (Deniz & Plaj)',
        reason:
          'Mavi bayraklı plajlarda, deniz ve sahillerde görev almak istiyorsunuz. Bronz belgeniz varsa doğrudan Gümüş eğitimi; belgeniz yoksa kombine program ile deniz yetkilendirmesi alabilirsiniz.',
        nextStepText: 'Gümüş Cankurtaran Başvurusu Yap',
      };
    }

    // Default pool recommendation
    return {
      level: 'bronz',
      title: 'Bronz Cankurtaran Eğitimi (Havuz & Durgun Su)',
      reason:
        'Cankurtaranlık kariyerine yeni başlayacaklar, otel/site havuzlarında çalışmak isteyenler ve su sporları antrenörlük başvurusu yapacak adaylar için resmi başlangıç basamağıdır.',
      nextStepText: 'Bronz Cankurtaran Başvurusu Yap',
    };
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Cankurtaran Seviye Belirleme Asistanı
            </h3>
            <p className="text-xs text-slate-500">
              3 soruda hedefinize en uygun TSSF sertifika programını belirleyin.
            </p>
          </div>
        </div>

        {step > 1 && (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Yeniden Başla</span>
          </button>
        )}
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider font-condensed">
            ADIM 1 / 3 · HEDEF ÇALIŞMA ALANINIZ
          </div>
          <div className="text-base font-bold text-slate-900">
            Cankurtaran olarak nerede görev almak istiyorsunuz?
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                setTargetLocation('pool');
                setStep(2);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Havuz & Aqua Parklar
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Otel havuzları, rezidanslar, spor salonları veya antrenörlük ön koşulu.
              </p>
            </button>

            <button
              onClick={() => {
                setTargetLocation('sea');
                setStep(2);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Deniz & Mavi Bayraklı Plajlar
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Sahil resortları, halk plajları, marinalar ve açık su alanları.
              </p>
            </button>

            <button
              onClick={() => {
                setTargetLocation('lead');
                setStep(2);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Şeflik & İstasyon Liderliği
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Büyük tesislerde cankurtaran ekibini yönetmek ve risk analizi yapmak.
              </p>
            </button>

            <button
              onClick={() => {
                setExperience('has_license_expired');
                setStep(4);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Mevcut Belgemi Uzatmak İstiyorum
              </div>
              <p className="text-xs text-slate-500 mt-1">
                2 yıllık süresi dolmuş veya dolmak üzere olan belgem için vize.
              </p>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider font-condensed">
            ADIM 2 / 3 · MEVCUT BELGE & TECRÜBE DURUMUNUZ
          </div>
          <div className="text-base font-bold text-slate-900">
            Daha önce TSSF cankurtaranlık eğitimi aldınız mı?
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                setExperience('none');
                setStep(3);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Hayır, İlk Defa Katılacağım
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Sıfırdan resmi sertifikasyon almak istiyorum.
              </p>
            </button>

            <button
              onClick={() => {
                setExperience('has_bronze');
                setStep(3);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Evet, Bronz Belgem Var
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Gümüş kademesine yükseltmek istiyorum.
              </p>
            </button>

            <button
              onClick={() => {
                setExperience('silver_6months');
                setStep(4);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Gümüş Belgem Var & 6+ Ay Çalıştım
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Altın Cankurtaran kademesine geçmek istiyorum.
              </p>
            </button>

            <button
              onClick={() => {
                setExperience('has_license_expired');
                setStep(4);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Belgemin 2 Yıllık Süresi Doldu
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Vize yenileme seminerine ihtiyacım var.
              </p>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="text-xs font-bold text-sky-800 uppercase tracking-wider font-condensed">
            ADIM 3 / 3 · YÜZME SEVİYENİZ
          </div>
          <div className="text-base font-bold text-slate-900">
            Yüzme yeterliliğinizi nasıl değerlendirirsiniz?
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              onClick={() => {
                setSwimConfidence('comfortable');
                setStep(4);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                Temel Düzeyde Rahat Yüzebiliyorum
              </div>
              <p className="text-xs text-slate-500 mt-1">
                50m kesintisiz yüzebiliyorum, suda durabiliyorum.
              </p>
            </button>

            <button
              onClick={() => {
                setSwimConfidence('athletic');
                setStep(4);
              }}
              className="p-4 rounded-xl border border-slate-200 text-left hover:border-sky-500 hover:bg-sky-50/40 transition-all group"
            >
              <div className="font-bold text-sm text-slate-900 group-hover:text-sky-700">
                İleri Düzey / Kondisyonlu Yüzücüyüm
              </div>
              <p className="text-xs text-slate-500 mt-1">
                200m+ açık su yüzüşü yapabilir, dip dalışı gerçekleştirebilirim.
              </p>
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6 pt-2">
          {(() => {
            const rec = getRecommendation();
            return (
              <div className="p-6 rounded-xl bg-sky-50/70 border border-sky-200">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-wider font-condensed">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>SİZE ÖNERİLEN RESMİ SERTİFİKA PROGRAMI</span>
                </div>

                <div className="text-2xl font-extrabold text-slate-900 mt-2">
                  {rec.title}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed">
                  {rec.reason}
                </p>

                <div className="mt-6 pt-4 border-t border-sky-200/60 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectRecommended(rec.level)}
                    className="bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold py-3 px-6 rounded-xl text-xs shadow-xs transition-colors flex items-center gap-2"
                  >
                    <span>{rec.nextStepText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={resetQuiz}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                  >
                    Farklı Yanıtlarla Testi Tekrarla
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
