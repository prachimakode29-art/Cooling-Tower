import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-[110px]">
      
      {/* HERO BANNER */}
      <section className="relative h-[250px] md:h-[320px] bg-[#0f1c2e] overflow-hidden flex items-center justify-center">
        {/* Placeholder background image instead of an actual image since we don't have one, just a dark gradient to match the banner look */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518635850982-fdf507df0a87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
        
        <div className="relative z-10 text-center">
          <h1 className="text-white font-['Syne'] font-bold text-4xl md:text-5xl tracking-tight drop-shadow-md">
            About Us
          </h1>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-[12px] font-bold text-slate-400 tracking-wider">
            <Link to="/" className="hover:text-[#0369a1] transition-colors">HOME</Link>
            <span>›</span>
            <span className="text-slate-600">ABOUT</span>
            <span>›</span>
            <span className="text-slate-600">ABOUT US</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-[60px] md:py-[88px] bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* Left text */}
            <div className="flex-1">
              <div className="inline-block bg-[#f97316] text-white text-[12px] font-bold px-3 py-1 mb-4 uppercase tracking-wider">
                About Us
              </div>
              
              <h2 className="text-[#0369a1] font-['Syne'] font-bold text-2xl md:text-3xl mb-4">
                Arohi Engineering & Cooling Tower
              </h2>
              
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Arohi Engineering & Cooling Tower is a reputable manufacturer and service provider specializing in a range of cooling tower solutions. With a focus on delivering high-quality products and services, we are committed to meeting the cooling needs of our valued clients.
              </p>

              <h3 className="text-[#f97316] font-bold text-[15px] mb-2">Our Product Offerings:</h3>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                FRP Cooling Tower, Wooden Cooling Tower, PVC Fills, Cooling Spare Parts.
              </p>
            </div>

            {/* Right Images (mocking the reference structure) */}
            <div className="flex-1 lg:w-1/2 relative min-h-[300px]">
               <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cooling Tower piping" className="w-2/3 h-auto shadow-xl border-4 border-white absolute left-0 top-0 z-0" />
               <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cooling Tower structure" className="w-2/3 h-auto shadow-2xl border-4 border-white absolute right-0 top-20 z-10" />
            </div>

          </div>
        </div>
      </section>

      {/* REMAINDER OF THE PAGE */}
      <section className="py-[88px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-center">
            <div className="grid grid-cols-1 gap-4">
              <img src="https://images.unsplash.com/photo-1563720360259-2dd916fc1bdf?auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-[300px] object-cover shadow-lg border border-slate-200" alt="Plant Operations" />
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80" className="rounded-2xl w-full h-[300px] object-cover shadow-lg border border-slate-200" alt="Cooling Tower Components" />
            </div>
            
            <div>
              <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-3">Our Story</div>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] mb-6 leading-tight">Built on Experience,<br/>Driven by Innovation</h2>
              <div className="flex flex-col gap-4 text-slate-600 text-[15px] leading-[1.8]">
                <p>Arohi Engineering & Cooling Tower was founded with a clear mission: to provide industries across India with world-class cooling tower solutions that combine quality craftsmanship, engineering expertise, and outstanding after-sales service.</p>
                <p>From our humble beginnings as a small workshop, we have grown into a respected manufacturer and supplier serving over 200 satisfied clients across multiple industries — from cement plants and steel mills to hospitality and food processing.</p>
                <p>Our product range covers FRP Cooling Towers, Wooden Cooling Towers, and a comprehensive selection of spare parts including PVC Fills, Gear Boxes, Fan Blades, Spray Nozzles, and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-[80px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
            {/* VISION */}
            <div>
              <h2 className="text-[28px] font-bold text-[#0f1c2e] mb-[25px]">OUR VISION</h2>
              <div className="flex flex-col gap-5">
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Customer-Centric Excellence:</strong> To become the preferred cooling tower solutions provider by continuously exceeding customer expectations and delivering exceptional value.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Innovation and Quality:</strong> Strive to be at the forefront of the industry by consistently introducing innovative and high-quality products and services.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Sustainable Cooling Solutions:</strong> Lead the industry in providing environmentally responsible cooling solutions that reduce energy consumption and environmental impact.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Technological Advancement:</strong> To pioneer technological advancements and breakthroughs that revolutionize the cooling tower industry, creating sustainable and energy-efficient solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* MISSION */}
            <div>
              <h2 className="text-[28px] font-bold text-[#0f1c2e] mb-[25px]">OUR MISSION</h2>
              <div className="flex flex-col gap-5">
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Quality Products:</strong> Our mission is to design, manufacture, and supply top-quality cooling tower products that meet the diverse needs of our customers.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Service Excellence:</strong> We are committed to offering world-class services, including installation, maintenance, and repairs, to ensure optimal performance and longevity of cooling systems.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Customer Satisfaction:</strong> A core part of our mission is ensuring the complete satisfaction of our valued clients by understanding and addressing their specific cooling requirements.
                  </p>
                </div>
                <div className="relative pl-[30px] pb-5 border-b border-slate-200 before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[12px] before:h-[12px] before:border-[2px] before:border-[#f97316] before:rounded-full">
                  <p className="text-[15px] text-slate-600 leading-[1.6]">
                    <strong className="text-[#0f1c2e]">Industry Leadership:</strong> As a mission, we aim to maintain leadership in the cooling tower industry by staying at the cutting edge of technology and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-[88px] bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-[56px]">
            <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Our Values</div>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] mb-[14px]">What Drives Us</h2>
            <p className="text-slate-600 text-[16px] max-w-2xl mx-auto leading-[1.72]">
              Continuous Improvement: Dedicate ourselves to a culture of continuous improvement, where we regularly assess and enhance our processes, products, and services to adapt to evolving industry standards and meet the changing needs of our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-white border border-slate-200 rounded-[20px] p-[32px_26px] text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 hover:border-transparent cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-[#0ea5e9]/10 flex items-center justify-center mx-auto mb-[18px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0f1c2e] mb-[10px]">Quality First</h3>
              <p className="text-[13.5px] text-slate-600 leading-[1.65]">Every product we manufacture undergoes strict quality checks to ensure it meets or exceeds industry standards.</p>
            </div>
            
            <div className="bg-white border border-slate-200 rounded-[20px] p-[32px_26px] text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 hover:border-transparent cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-[#f97316]/10 flex items-center justify-center mx-auto mb-[18px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0f1c2e] mb-[10px]">Innovation</h3>
              <p className="text-[13.5px] text-slate-600 leading-[1.65]">We continuously improve our designs and processes to deliver more efficient, durable cooling solutions.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] p-[32px_26px] text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 hover:border-transparent cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-[#16a34a]/10 flex items-center justify-center mx-auto mb-[18px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0f1c2e] mb-[10px]">Customer Focus</h3>
              <p className="text-[13.5px] text-slate-600 leading-[1.65]">We listen carefully to our clients and tailor solutions that fit their exact operational requirements.</p>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] p-[32px_26px] text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1 hover:border-transparent cursor-default">
              <div className="w-16 h-16 rounded-2xl bg-[#8b5cf6]/10 flex items-center justify-center mx-auto mb-[18px]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="text-[17px] font-bold text-[#0f1c2e] mb-[10px]">Sustainability</h3>
              <p className="text-[13.5px] text-slate-600 leading-[1.65]">Our energy-efficient designs help clients reduce their carbon footprint while cutting operational costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-[88px] bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-[56px]">
            <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Our Team</div>
            <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] mb-[14px]">Meet the Experts</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1">
              <div className="w-full aspect-square bg-gradient-to-br from-[#1E293B] to-[#334155] flex items-center justify-center font-['Syne'] text-[48px] font-bold text-white relative">
                {/* Fallback to initials if images strictly not available */}
                RJ
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0f1c2e] mb-1">Mr. Ravikant Jha</h3>
                <span className="text-[13px] text-slate-400 font-medium">CEO</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1">
              <div className="w-full aspect-square bg-gradient-to-br from-[#1E293B] to-[#334155] flex items-center justify-center font-['Syne'] text-[48px] font-bold text-white relative">
                SP
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0f1c2e] mb-1">Sumit Patel</h3>
                <span className="text-[13px] text-slate-400 font-medium">Site Engineer</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1">
              <div className="w-full aspect-square bg-gradient-to-br from-[#f97316] to-[#ea6600] flex items-center justify-center font-['Syne'] text-[48px] font-bold text-white relative">
                BP
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0f1c2e] mb-1">Bhavana Pal</h3>
                <span className="text-[13px] text-slate-400 font-medium">Executive</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1">
              <div className="w-full aspect-square bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center font-['Syne'] text-[48px] font-bold text-white relative">
                SB
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0f1c2e] mb-1">Shivani Banwari</h3>
                <span className="text-[13px] text-slate-400 font-medium">CAD Designer</span>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-[20px] overflow-hidden text-center transition-all hover:shadow-[0_12px_40px_rgba(15,28,46,.15)] hover:-translate-y-1">
              <div className="w-full aspect-square bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center font-['Syne'] text-[48px] font-bold text-white relative">
                SJ
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold text-[#0f1c2e] mb-1">Mr. Santosh Jha</h3>
                <span className="text-[13px] text-slate-400 font-medium">Plant Head</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
