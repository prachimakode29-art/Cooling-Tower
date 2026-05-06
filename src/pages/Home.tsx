import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px]">
        <Swiper 
          loop={true}
          navigation={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide className="relative w-full h-full bg-white">
            {/* Using a placeholder if image doesn't exist */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" alt="Cooling Tower" className="w-full h-full object-cover" />
            
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-20 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center h-full">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl md:text-6xl font-['Syne'] font-extrabold mb-6 leading-tight">
                  Cooling Excellence,<br/>Engineered with Precision
                </h2>
                <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
                  Delivering top-notch cooling solutions designed with precision and expertise to meet the specific needs and standards of your industry.
                </p>
                <div className="hero-badge">
                  <span><Link to="/about">Know More &gt;</Link></span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Story Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" alt="Product 1" className="rounded-2xl shadow-xl border border-slate-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-[#f97316] font-bold text-[13px] tracking-widest uppercase mb-3 drop-shadow-sm">About Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-['Syne'] text-[#0f1c2e] mb-6">Arohi Engineering & Cooling Tower</h2>
              <div className="flex flex-col gap-4 text-slate-600 text-[15px] leading-relaxed mb-6">
                <p>Arohi Engineering & Cooling Tower is a reputable manufacturer and service provider specializing in a range of cooling tower solutions.</p>
                <p>Through innovative services, we are committed to meeting the cooling needs of our valued clients across all industries.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-6">
                <span className="font-bold text-[#0f1c2e] mb-2 block">Our Product Offerings:</span>
                <p className="text-[#f97316] font-medium">FRP Cooling Tower, Wooden Cooling Tower, PVC Fills, Cooling Spare Parts.</p>
              </div>
              <Link to="/about" className="inline-flex items-center text-[#f97316] font-bold tracking-wider text-[13px] hover:text-[#ea6600] transition-colors">
                READ MORE <span className="ml-1 text-lg leading-none">&gt;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="flex flex-col order-2 md:order-1">
              <span className="text-[#f97316] font-bold text-[13px] tracking-widest uppercase mb-3">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-['Syne'] text-[#0f1c2e] mb-8">Why Choose Arohi Engineering?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0ea5e9]/30 transition-all">
                  <h4 className="font-bold text-[#0f1c2e] mb-2">Quality Assurance</h4>
                  <p className="text-sm text-slate-500">Uncompromising standards in every build.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#f97316]/30 transition-all">
                  <h4 className="font-bold text-[#0f1c2e] mb-2">Expertise</h4>
                  <p className="text-sm text-slate-500">Over 15 years spanning diverse industries.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#22c55e]/30 transition-all">
                  <h4 className="font-bold text-[#0f1c2e] mb-2">Customer-Centric</h4>
                  <p className="text-sm text-slate-500">Tailored solutions matching your needs.</p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#8b5cf6]/30 transition-all">
                  <h4 className="font-bold text-[#0f1c2e] mb-2">Efficiency</h4>
                  <p className="text-sm text-slate-500">Maximum cooling, minimum footprint.</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" alt="Why us" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Products */}
      <section className="section bg-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <div className="section-tag">Our Products</div>
            <h2 className="section-title">OUR LATEST PRODUCTS</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 transition-all">
              <div className="w-full aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
                <img src="https://images.unsplash.com/photo-1563720360259-2dd916fc1bdf?auto=format&fit=crop&w=400&q=80" alt="Control Flow Valve" className="w-full h-full object-cover rounded shadow-md" />
              </div>
              <div className="p-5 border-t border-slate-200">
                <h3 className="font-bold text-[#0f1c2e] text-[17px]">Control Flow Valve</h3>
              </div>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 transition-all">
              <div className="w-full aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
                <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=400&q=80" alt="PVC Fills" className="w-full h-full object-cover rounded shadow-md" />
              </div>
              <div className="p-5 border-t border-slate-200">
                <h3 className="font-bold text-[#0f1c2e] text-[17px]">PVC Fills</h3>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 transition-all">
              <div className="w-full aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
                <img src="https://images.unsplash.com/photo-1581092334651-ddf7d54d92ee?auto=format&fit=crop&w=400&q=80" alt="Gear Box" className="w-full h-full object-cover rounded shadow-md" />
              </div>
              <div className="p-5 border-t border-slate-200">
                <h3 className="font-bold text-[#0f1c2e] text-[17px]">Gear Box Oil Seal</h3>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 transition-all">
              <div className="w-full aspect-square bg-slate-50 relative overflow-hidden flex items-center justify-center p-6">
                <img src="https://images.unsplash.com/photo-1621509187321-df1e35ff6482?auto=format&fit=crop&w=400&q=80" alt="Fan" className="w-full h-full object-cover rounded shadow-md" />
              </div>
              <div className="p-5 border-t border-slate-200">
                <h3 className="font-bold text-[#0f1c2e] text-[17px]">Fan</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="py-10 bg-slate-50 overflow-hidden border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
            <h2 className="font-['Syne'] text-2xl font-bold text-[#0f1c2e]">Our Trusted Clients</h2>
        </div>
        <div className="w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
          <div className="flex gap-6 w-max animate-[marquee-scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, i) => (
              <div key={i} className="shrink-0 w-[180px] h-[90px] bg-white border border-slate-200 rounded-xl flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="font-bold text-slate-400 opacity-60">CLIENT {item}</span>
              </div>
            ))}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, i) => (
              <div key={`dup-${i}`} className="shrink-0 w-[180px] h-[90px] bg-white border border-slate-200 rounded-xl flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <span className="font-bold text-slate-400 opacity-60">CLIENT {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
