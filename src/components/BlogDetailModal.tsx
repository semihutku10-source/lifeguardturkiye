import React, { useState } from 'react';
import { X, Clock, Calendar, User, Share2, Check, BookOpen, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { BlogPost } from '../types/lifeguard';

interface BlogDetailModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
  onEnroll: (courseId?: string) => void;
}

export const BlogDetailModal: React.FC<BlogDetailModalProps> = ({
  post,
  isOpen,
  onClose,
  onEnroll,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen || !post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Sticky Header with Category & Close */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-sky-300 font-condensed">
              {post.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors"
              title="Bağlantıyı Kopyala"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Kopyalandı</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Paylaş</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Article Header Metadata */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
              <span className="font-semibold text-slate-700">{post.author.name}</span>
              <span className="text-slate-400">({post.author.title})</span>
              <span>·</span>
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span className="font-semibold text-slate-700">{post.readTimeMinutes} dk okuma</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
              {post.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Takeaways Box (Önemli Çıkarımlar & Mevzuat Notları) */}
          <div className="p-5 rounded-xl bg-sky-50/80 border border-sky-200 space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-sky-900 uppercase tracking-wider font-condensed">
              <ShieldCheck className="w-4 h-4 text-sky-700" />
              <span>ÖZET & DİKKAT EDİLMESİ GEREKEN HUSUSLAR</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Body Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed pt-2">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Official Source Footnote */}
          {post.officialSource && (
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-800">Resmi Kaynak & Dayanak:</span>{' '}
                <span>{post.officialSource}</span>
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Etiketler:
            </span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            TSSF onaylı cankurtaranlık eğitimleri hakkında detaylı bilgi için:
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onEnroll('bronz');
              }}
              className="flex-1 sm:flex-none bg-[#0B2545] hover:bg-[#07192f] active:bg-[#051222] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"
            >
              <span>Eğitime Başvur</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onClose}
              className="bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-300 transition-colors"
            >
              Kapat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
