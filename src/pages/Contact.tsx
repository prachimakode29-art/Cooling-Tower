import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSuccess(true);
  };

  return (
    <div className="pt-[72px]">
      
      {/* HERO */}
      <section className="mt-3 bg-white relative overflow-hidden py-[88px] pb-[96px]">
        <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_700px_500px_at_85%_40%,rgba(14,165,233,.13)_0%,transparent_70%),radial-gradient(ellipse_500px_350px_at_5%_90%,rgba(249,115,22,.11)_0%,transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/" className="text-[13px] text-white/45 hover:text-white/85 transition-colors">Home</Link>
            <span className="text-white/25">›</span>
            <span className="text-[13px] text-[#f97316]">Contact Us</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#fba96a] text-[12px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" /> Get In Touch
          </div>
          
          <h1 className="text-white font-['Syne'] font-bold text-[clamp(34px,5.5vw,62px)] leading-tight mb-4 tracking-tight">
            Contact <em className="text-[#f97316] not-italic">Arohi Engineering</em>
          </h1>
          
          <p className="text-white/60 text-[17px] max-w-xl leading-[1.72]">
            Have a question or need a quote? Our team is ready to help you find the perfect cooling solution for your needs.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-[88px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-16 lg:gap-16 items-start">
            
            {/* Info Cards */}
            <div>
              <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Contact Details</div>
              <h2 className="text-[clamp(24px,3vw,38px)] font-bold text-[#0f1c2e] font-['Syne'] mb-[14px]">We'd Love to Hear From You</h2>
              <p className="text-[15px] text-slate-500 leading-[1.72] mb-[36px]">Reach us by phone, email, or simply fill in the form and we'll get back to you within 24 hours.</p>

              <div className="flex flex-col gap-4">
                <div className="bg-white border border-slate-200 rounded-[20px] p-6 flex items-start gap-4 transition-all hover:shadow-[0_4px_24px_rgba(15,28,46,.08)] hover:border-[#f97316]/20 hover:translate-x-1 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.31 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.22 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-1">Phone Numbers</div>
                    <div className="text-[14px] font-medium text-[#0f1c2e] leading-[1.6]">
                      <a href="tel:+918887901762" className="hover:text-[#f97316] block">+91 88879 01762</a>
                      <a href="tel:+918853774170" className="hover:text-[#f97316] block">+91 88537 74170</a>
                      <a href="tel:07312990424" className="hover:text-[#f97316] block">0731-2990424</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[20px] p-6 flex items-start gap-4 transition-all hover:shadow-[0_4px_24px_rgba(15,28,46,.08)] hover:border-[#f97316]/20 hover:translate-x-1 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#f97316]/10 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-1">Email Address</div>
                    <div className="text-[14px] font-medium text-[#0f1c2e] leading-[1.6]">
                      <a href="mailto:info@arohiect.com" className="hover:text-[#f97316]">info@arohiect.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[20px] p-6 flex items-start gap-4 transition-all hover:shadow-[0_4px_24px_rgba(15,28,46,.08)] hover:border-[#f97316]/20 hover:translate-x-1 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-[#16a34a]/10 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-1">Office Address</div>
                    <div className="text-[14px] font-medium text-[#0f1c2e] leading-[1.6]">
                      Arohi Engineering & Cooling Tower,<br/>Indore, Madhya Pradesh, India
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-[20px] p-6 flex items-start gap-4 transition-all hover:shadow-[0_4px_24px_rgba(15,28,46,.08)] hover:border-[#f97316]/20 hover:translate-x-1 cursor-default mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#16a34a]/15 flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25d366" strokeWidth="2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606l.677-.677a.5.5 0 00.073-.627l-.916-2.207c-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-400 mb-1">WhatsApp</div>
                    <div className="text-[14px] font-medium text-[#0f1c2e] leading-[1.6]">
                      <a href="https://wa.me/918887901762" className="hover:text-[#f97316]">Chat on WhatsApp →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white border border-slate-200 rounded-[20px] p-8 md:p-10 shadow-[0_4px_24px_rgba(15,28,46,.08)]">
              {!success ? (
                <div>
                  <h3 className="text-2xl font-bold font-['Syne'] text-[#0f1c2e] mb-2">Send Us a Message</h3>
                  <p className="text-sm text-slate-500 mb-8">Fill in the details below and our team will get back to you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="cname">Full Name <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="cname" type="text" placeholder="Your full name" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="cemail">Email Address <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="cemail" type="email" placeholder="your@email.com" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="cphone">Phone Number <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="cphone" type="tel" placeholder="+91 XXXXX XXXXX" />
                    </div>

                    <div className="flex flex-col gap-1.5 ">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="cservice">Service Required</label>
                      <div className="relative">
                        <select className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all appearance-none cursor-pointer pr-10" id="cservice">
                          <option value="">Select a service</option>
                          <option>FRP Cooling Tower</option>
                          <option>Wooden Cooling Tower</option>
                          <option>PVC Fills</option>
                          <option>Spare Parts</option>
                          <option>Installation</option>
                          <option>Maintenance / Repair</option>
                          <option>AMC Contract</option>
                          <option>Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="ccity">City / Location</label>
                      <input className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="ccity" type="text" placeholder="Your city" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="ccompany">Company Name</label>
                      <input className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="ccompany" type="text" placeholder="Your company" />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="cmsg">Message <em className="text-[#f97316] not-italic">*</em></label>
                      <textarea required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-lg text-sm bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all min-h-[140px] resize-y placeholder:text-slate-400" id="cmsg" placeholder="Describe your requirement in detail..."></textarea>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-2">
                       <button type="submit" className="w-full py-3.5 bg-[#f97316] text-white font-semibold rounded-lg hover:bg-[#ea6600] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,.35)] transition-all">Send Message →</button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 animate-in fade-in duration-500">
                  <div className="w-[72px] h-[72px] bg-[#16a34a]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <h3 className="text-2xl font-bold font-['Syne'] text-[#16a34a] mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">Thank you for contacting us. Our team will reach out to you within 24 hours.</p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="bg-slate-50">
        <iframe className="w-full h-[420px] border-none block grayscale opacity-80 mix-blend-multiply hover:grayscale-0 hover:opacity-100 hover:mix-blend-normal transition-all duration-500" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.82219997065!2d75.7172638!3d22.7195687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Indore Map"></iframe>
      </div>
    </div>
  );
}
