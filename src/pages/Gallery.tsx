import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GALLERY_ITEMS = [
  { id: 1, category: 'cooling-tower', title: 'FRP Cooling Tower', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { id: 2, category: 'cooling-tower', title: 'Wooden Cooling Tower', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
  { id: 3, category: 'fills', title: 'PVC Fill Media', image: 'https://images.unsplash.com/photo-1563720360259-2dd916fc1bdf?auto=format&fit=crop&w=800&q=80' },
  { id: 4, category: 'spare-parts', title: 'Control Flow Valve', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'spare-parts', title: 'Bevel Helical Gear Box', image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'motors', title: 'Cooling Tower Motor', image: 'https://images.unsplash.com/photo-1621509187321-df1e35ff6482?auto=format&fit=crop&w=800&q=80' },
  { id: 7, category: 'spare-parts', title: 'HDPE Fan & Fan Blade', image: 'https://images.unsplash.com/photo-1581092334651-ddf7d54d92ee?auto=format&fit=crop&w=800&q=80' },
  { id: 8, category: 'spare-parts', title: 'Cooling Tower Spray Nozzle', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<{ open: boolean; item: any | null }>({ open: false, item: null });

  const filteredItems = filter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(it => it.category === filter);

  return (
    <div className="pt-[72px]">
      
      {/* HERO BANNER */}
      <section className="relative h-[250px] md:h-[320px] bg-[#0f1c2e] overflow-hidden flex items-center justify-center mt-6">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518635850982-fdf507df0a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-white font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight drop-shadow-md">
            Product Gallery
          </h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 tracking-wider">
            <Link to="/" className="hover:text-[#0369a1] transition-colors">HOME</Link>
            <span>›</span>
            <span className="text-slate-600">GALLERY</span>
          </div>
        </div>
      </div>

      {/* GALLERY */}
      <section className="py-[88px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-wrap gap-2.5 mb-10">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'cooling-tower', label: 'Cooling Towers' },
              { id: 'spare-parts', label: 'Spare Parts' },
              { id: 'motors', label: 'Motors & Drives' },
              { id: 'fills', label: 'PVC Fills' },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 border-[1.5px] rounded-full text-[13px] font-medium transition-all ${filter === f.id ? 'border-[#f97316] text-[#f97316] bg-[#f97316]/5' : 'border-slate-200 text-slate-600 bg-white hover:border-[#f97316] hover:text-[#f97316] hover:bg-[#f97316]/5'}`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                onClick={() => setLightbox({ open: true, item })}
                className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] transition-all hover:scale-[1.02]"
              >
                <div className="w-full h-full relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/10 to-transparent p-5 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#f97316] mb-1">{item.category.replace('-', ' ')}</div>
                    <div className="text-[16px] font-bold text-white font-['Syne']">{item.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox.open && lightbox.item && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-6 backdrop-blur-sm transition-opacity"
          onClick={() => setLightbox({ open: false, item: null })}
        >
          <button 
            onClick={(e) => { e.stopPropagation(); setLightbox({ open: false, item: null }); }}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          >
            ✕
          </button>
          
          <div 
            className="relative max-w-5xl w-full aspect-[16/9] bg-black rounded-lg overflow-hidden animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={lightbox.item.image} alt={lightbox.item.title} className="w-full h-full object-contain" />
          </div>
          
          <div className="text-center mt-6 animate-in fade-in slide-in-from-bottom-4 duration-300 delay-100">
            <h3 className="text-2xl font-bold text-white font-['Syne'] mb-2">{lightbox.item.title}</h3>
            <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/70 text-sm tracking-wider uppercase">
              {lightbox.item.category.replace('-', ' ')}
            </span>
          </div>
        </div>
      )}

    </div>
  );
}
