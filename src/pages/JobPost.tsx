import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function JobPost() {
  const [success, setSuccess] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(`✓ ${e.target.files[0].name}`);
    }
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
            <Link to="/careers" className="text-[13px] text-white/45 hover:text-white/85 transition-colors">Careers</Link>
            <span className="text-white/25">›</span>
            <span className="text-[13px] text-[#f97316]">Apply</span>
          </div>
          
          <div className="inline-flex items-center gap-2 bg-[#f97316]/10 border border-[#f97316]/30 text-[#fba96a] text-[12px] font-semibold tracking-[0.07em] uppercase px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" /> Apply Now
          </div>
          
          <h1 className="text-white font-['Syne'] font-bold text-[clamp(34px,5.5vw,62px)] leading-tight mb-4 tracking-tight">
            Send Your <em className="text-[#f97316] not-italic">Application</em>
          </h1>
          
          <p className="text-white/60 text-[16px] max-w-xl leading-[1.72]">
            Don't see the right role? Send us your CV anyway — we're always keen to meet talented, motivated people.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-[88px] bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.85fr] gap-16 lg:gap-[64px] items-start">
            
            {/* Info */}
            <div>
              <div className="text-[11.5px] font-bold tracking-[0.12em] uppercase text-[#f97316] mb-[12px]">Contact HR</div>
              <h2 className="text-[clamp(26px,3.5vw,42px)] font-bold text-[#0f1c2e] font-['Syne'] mb-[14px] leading-tight">Need assistance?</h2>
              
              <div className="flex flex-col gap-6 mt-[36px]">
                <div className="flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[11px] bg-[#f97316]/10 flex items-center justify-center shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1">Office Address</div>
                    <div className="text-[13.5px] text-slate-500 leading-[1.65]">104, G-Block Ras Town, Near Satellite Junction,<br/>Dewas Naka, Indore, M.P.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[11px] bg-[#f97316]/10 flex items-center justify-center shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.31 12a19.79 19.79 0 01-3.07-8.67A2 2 0 013.22 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1">Call / WhatsApp</div>
                    <div className="text-[13.5px] text-slate-500 leading-[1.65] flex flex-col">
                      <a href="tel:+918887901762" className="hover:text-[#f97316]">+91 88879 01762</a>
                      <a href="tel:+918853774170" className="hover:text-[#f97316]">+91 88537 74170</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-[44px] h-[44px] rounded-[11px] bg-[#22c55e]/10 flex items-center justify-center shrink-0">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.06em] mb-1">Email</div>
                    <div className="text-[13.5px] text-slate-500 leading-[1.65] flex flex-col">
                      <a href="mailto:info@arohiect.com" className="hover:text-[#f97316]">info@arohiect.com</a>
                      <a href="mailto:arohiect20@gmail.com" className="hover:text-[#f97316]">arohiect20@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="bg-white border border-slate-200 rounded-[20px] p-[44px_40px] shadow-[0_4px_24px_rgba(15,28,46,.08)]">
              {!success ? (
                <div>
                  <h3 className="text-[24px] font-bold font-['Syne'] text-[#0f1c2e] mb-7">Application Form</h3>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fname">Full Name <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="fname" type="text" placeholder="Eg. Rahul Sharma" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="femail">Email Address <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="femail" type="email" placeholder="you@example.com" />
                    </div>
                    
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fphone">Phone Number <em className="text-[#f97316] not-italic">*</em></label>
                      <input required className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="fphone" type="tel" placeholder="+91 98765 43210" />
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fposition">Position Applying For <em className="text-[#f97316] not-italic">*</em></label>
                      <select required defaultValue="" className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all appearance-none cursor-pointer pr-10" id="fposition">
                        <option value="" disabled>Select a position</option>
                        <option>Sales Executive</option>
                        <option>Mechanical Engineer</option>
                        <option>Production Supervisor</option>
                        <option>Accounts Executive</option>
                        <option>Other / General Application</option>
                      </select>
                      <div className="absolute top-[35px] right-4 pointer-events-none text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 relative">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fexp">Years of Experience</label>
                      <select defaultValue="" className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all appearance-none cursor-pointer pr-10" id="fexp">
                        <option value="" disabled>Select experience</option>
                        <option>Fresher (0–1 year)</option>
                        <option>1–3 years</option>
                        <option>3–5 years</option>
                        <option>5–10 years</option>
                        <option>10+ years</option>
                      </select>
                      <div className="absolute top-[35px] right-4 pointer-events-none text-slate-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fcity">Current City</label>
                      <input className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all placeholder:text-slate-400" id="fcity" type="text" placeholder="Eg. Indore" />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]">Upload Resume <em className="text-[#f97316] not-italic">*</em></label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-slate-200 rounded-[12px] p-[28px] text-center cursor-pointer bg-slate-50 hover:bg-[#f97316]/[0.04] hover:border-[#f97316] transition-all"
                      >
                        <div className="w-12 h-12 bg-[#f97316]/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        </div>
                        <p className="text-[14px] text-slate-500 mb-1"><strong className="text-[#f97316]">Click to upload</strong> or drag & drop your resume here</p>
                        <small className="text-[12px] text-slate-400 block">PDF, DOC, or DOCX — max 5 MB</small>
                        {fileName && <div className="text-[13px] text-[#16a34a] mt-2 font-semibold animate-in fade-in zoom-in">{fileName}</div>}
                      </div>
                      <input required type="file" id="file-input" accept=".pdf,.doc,.docx" className="hidden" ref={fileInputRef} onChange={handleFileChange} />
                    </div>

                    <div className="col-span-1 md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-[13px] font-semibold text-[#0f1c2e]" htmlFor="fmsg">Cover Letter / Message</label>
                      <textarea className="w-full px-4 py-2.5 border-[1.5px] border-slate-200 text-[#0f1c2e] rounded-[10px] text-[14px] bg-white outline-none focus:border-[#f97316] focus:ring-[3px] focus:ring-[#f97316]/10 transition-all min-h-[130px] resize-y placeholder:text-slate-400" id="fmsg" placeholder="Tell us a little about yourself and why you want to join Arohi Engineering..."></textarea>
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-4">
                      <button type="submit" className="w-full py-4 bg-[#f97316] text-white font-['Syne'] font-bold text-[16px] tracking-[0.02em] rounded-[12px] hover:bg-[#ea6600] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(249,115,22,.38)] transition-all flex items-center justify-center gap-2">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-[74px] h-[74px] bg-[#22c55e]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 className="text-[26px] font-bold font-['Syne'] text-[#0f1c2e] mb-2.5">Application Received!</h3>
                  <p className="text-[15px] text-slate-500 max-w-[380px] mx-auto leading-[1.7] mb-6">
                    Thank you for your interest in Arohi Engineering. Our HR team will review your application and reach out within 3–5 working days.
                  </p>
                  <button onClick={() => setSuccess(false)} className="px-7 py-3 bg-[#f97316] hover:bg-[#ea6600] text-white font-semibold rounded-[9px] text-[14px] transition-all hover:shadow-[0_8px_24px_rgba(249,115,22,.3)]">
                    Submit Another Application →
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
