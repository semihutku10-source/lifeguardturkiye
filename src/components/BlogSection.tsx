import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost, BlogCategory } from '../types/lifeguard';
import { Search, ArrowRight, Clock, Calendar, ShieldCheck, Tag, Newspaper } from 'lucide-react';

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onSelectPost }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Tümü',
    'Mevzuat & Yönetmelik',
    'Güvenlik İpuçları',
    'Sektör & Kariyer',
    'Eğitim & Sınav',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat = selectedCategory === 'Tümü' || post.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      q === '' ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.tags.some((t) => t.toLowerCase().includes(q)) ||
      post.author.name.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.id !== (featuredPost ? featuredPost.id : ''));

  return (
    <section id="blog" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-[#0B2545] uppercase tracking-wider font-condensed">
              GÜNCEL YÖNETMELİKLER & GÜVENLİK BÜLTENİ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Sektör Haberleri & Cankurtaranlık Rehberi
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mt-2">
              Bakanlık ve TSSF mevzuat değişiklikleri, rip akıntısı ve havuz emniyeti ipuçları,
              turizm sektörü istihdam analizleri ve resmi duyurular.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Yönetmelik, rip akıntısı, OED..."
              className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-xs sm:text-sm rounded-xl pl-9 pr-4 py-2.5 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Category Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl mb-10 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[40px] px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post Banner (if exists and visible) */}
        {featuredPost && (
          <div
            onClick={() => onSelectPost(featuredPost)}
            className="mb-12 bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left 6 cols: Image */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto bg-slate-900 overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#0B2545] text-white text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider font-condensed">
                  ÖNE ÇIKAN HABER
                </div>
              </div>

              {/* Right 6 cols: Content */}
              <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="font-bold text-sky-800 uppercase tracking-wider font-condensed">
                      {featuredPost.category}
                    </span>
                    <span>·</span>
                    <span>{featuredPost.publishedAt}</span>
                    <span>·</span>
                    <span className="font-semibold text-slate-700">{featuredPost.readTimeMinutes} dk okuma</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Key Takeaways preview */}
                  <div className="mt-4 pt-4 border-t border-slate-200/70 space-y-1.5">
                    {featuredPost.keyTakeaways.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500">
                    Yazar: <span className="font-semibold text-slate-800">{featuredPost.author.name}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B2545] group-hover:translate-x-1 transition-transform">
                    <span>Yazının Tamamını Oku</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onSelectPost(post)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Card Thumbnail */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{post.publishedAt}</span>
                    <span>·</span>
                    <span className="font-semibold text-slate-700">{post.readTimeMinutes} dk</span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-700 transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between text-xs text-slate-500">
                <span className="truncate max-w-[160px] font-medium text-slate-700">
                  {post.author.name}
                </span>
                <span className="font-bold text-sky-700 group-hover:text-[#0B2545] transition-colors flex items-center gap-1 shrink-0">
                  <span>Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <Newspaper className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-slate-800">Aramanıza uygun yazı bulunamadı</h4>
            <p className="text-xs text-slate-500 mt-1">
              Lütfen farklı bir anahtar kelime deneyin veya kategori filtrelerini sıfırlayın.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Tümü');
                setSearchQuery('');
              }}
              className="mt-4 text-xs font-bold text-[#0B2545] hover:underline"
            >
              Tüm Yazıları Göster
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
