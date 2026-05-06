import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    // Initialize Google Translate when component mounts
    let scriptLoaded = false;
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      (window as any).googleTranslateElementInit = () => {
        if (document.getElementById('google_translate_element') && document.getElementById('google_translate_element')?.innerHTML === "") {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en', 
            includedLanguages: 'en,hi,mr,gu,ta,bn,kn,te,ml', 
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL, 
            autoDisplay: false
          }, 'google_translate_element');
        }
        if (document.getElementById('google_translate_element_mobile') && document.getElementById('google_translate_element_mobile')?.innerHTML === "") {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en', 
            includedLanguages: 'en,hi,mr,gu,ta,bn,kn,te,ml', 
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL, 
            autoDisplay: false
          }, 'google_translate_element_mobile');
        }
      };

      const addScript = document.createElement('script');
      addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
      document.body.appendChild(addScript);
      scriptLoaded = true;
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-md shadow-black/5 py-0' : 'py-1'}`}>
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Top Row: Logo & Contact */}
          <div className="flex items-center justify-between py-4 border-b border-slate-100">
            {/* Logo area */}
            <Link to="/" className="flex items-center gap-3">
               <div className="flex flex-col">
                 <span className="font-['Syne'] font-bold text-[34px] text-[#0369a1] leading-none mb-0 tracking-tight italic">
                   AROHI
                 </span>
                 <span className="text-[9px] text-[#0f1c2e] font-semibold tracking-[0.15em] leading-none text-right">
                   ENGINEERING & COOLING TOWER
                 </span>
               </div>
            </Link>

            {/* Right Section: Contact + Social + Lang */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end gap-1.5">
                {/* Contact + Social Row */}
                <div className="flex items-center gap-5">
                  <div className="hidden lg:flex items-center gap-2.5">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#5b9a42]/10 flex items-center justify-center text-[#5b9a42]">
                      <Phone size={16} />
                    </div>
                    <a href="tel:+918887901762" className="text-[15px] text-slate-700 font-semibold hover:text-[#5b9a42] transition-colors">+91 8887901762</a>
                  </div>
                  <div className="hidden lg:flex items-center gap-2.5">
                    <div className="w-[32px] h-[32px] rounded-full bg-[#0369a1]/10 flex items-center justify-center text-[#0369a1]">
                      <Mail size={16} />
                    </div>
                    <a href="mailto:info@arohiect.com" className="text-[15px] text-[#0369a1] font-semibold hover:text-[#0f1c2e] transition-colors">info@arohiect.com</a>
                  </div>
                  
                  {/* Social circles */}
                  <div className="flex items-center gap-2 border-l border-slate-200 pl-5 ml-2">
                    <a href="tel:+918887901762" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#5b9a42] hover:bg-[#5b9a42] hover:text-white hover:border-[#5b9a42] transition-all" aria-label="Call"><Phone size={16} /></a>
                    <a href="https://wa.me/+918887901762" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all" aria-label="WhatsApp"><FaWhatsapp size={16} /></a>
                    <a href="https://www.facebook.com/ravikant.jha3" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all" aria-label="Facebook"><FaFacebookF size={15} /></a>
                    <a href="https://www.linkedin.com/in/ravi-kant-36a9ab199/" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all" aria-label="LinkedIn"><FaLinkedinIn size={15} /></a>
                    <a href="#" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all" aria-label="Twitter"><FaTwitter size={16} /></a>
                    <a href="#" className="w-[32px] h-[32px] rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white hover:border-transparent transition-all" aria-label="Instagram"><FaInstagram size={16} /></a>
                  </div>
                </div>

                {/* Language Selector Desktop */}
                <div id="google_translate_element" className="overflow-hidden flex justify-end h-[24px]"></div>
              </div>

              {/* Mobile Toggle */}
              <button 
                className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1 ml-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className={`block w-[22px] h-[2px] bg-[#0f1c2e] rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                <span className={`block w-[22px] h-[2px] bg-[#0f1c2e] rounded-sm transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-[22px] h-[2px] bg-[#0f1c2e] rounded-sm transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Bottom Nav Row */}
          <div className="hidden lg:flex items-center justify-center py-2 h-[48px] relative">
            <ul className="flex items-center gap-[30px] list-none">
              <li><Link to="/" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>Home</Link></li>
              <li><Link to="/about" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/about') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>About</Link></li>
              <li className="relative group py-2">
                <span className={`flex items-center gap-1 text-[12px] font-bold tracking-wider uppercase cursor-pointer transition-colors ${isActive('/gallery') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>
                  Our Products
                  <svg className="w-[12px] h-[12px] opacity-70 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </span>
                <div className="absolute top-full left-0 min-w-[240px] bg-white shadow-lg border border-slate-100 p-2 opacity-0 invisible translate-y-2 transition-all group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <div className="text-[10px] font-bold tracking-[0.09em] uppercase text-slate-400 px-3 pt-2 pb-1">Cooling Towers</div>
                  <Link to="/gallery" className="block px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#f97316] transition-all">FRP Cooling Tower</Link>
                  <Link to="/gallery" className="block px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#f97316] transition-all">Wooden Cooling Tower</Link>
                  <div className="text-[10px] font-bold tracking-[0.09em] uppercase text-slate-400 px-3 pt-2 pb-1 mt-1">Spare Parts</div>
                  <Link to="/gallery" className="block px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#f97316] transition-all">PVC Fills</Link>
                  <Link to="/gallery" className="block px-3 py-2 text-[13px] font-semibold text-[#f97316] hover:bg-slate-50 mt-1 transition-all">View All Products →</Link>
                </div>
              </li>
              <li><Link to="/gallery" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/gallery') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>Gallery</Link></li>
              <li><Link to="/testimonials" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/testimonials') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>Testimonials</Link></li>
              <li className="relative group py-2">
                <span className={`flex items-center gap-1 text-[12px] font-bold tracking-wider uppercase cursor-pointer transition-colors ${isActive('/careers') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>
                  Careers
                  <svg className="w-[12px] h-[12px] opacity-70 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                </span>
                <div className="absolute top-full left-0 min-w-[200px] bg-white shadow-lg border border-slate-100 p-2 opacity-0 invisible translate-y-2 transition-all group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  <Link to="/careers" className="block px-3 py-2 text-[13px] font-semibold text-[#0f1c2e] hover:bg-slate-50 hover:text-[#f97316] transition-all">Current Openings</Link>
                  <Link to="/job-post" className="block px-3 py-2 text-[13px] text-slate-600 hover:bg-slate-50 hover:text-[#f97316] transition-all">Post a Job / CV</Link>
                </div>
              </li>
              <li><Link to="/our-team" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/our-team') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>Our Team</Link></li>
              <li><Link to="/contact" className={`text-[12px] font-bold tracking-wider uppercase transition-colors ${isActive('/contact') ? 'text-[#0369a1]' : 'text-slate-700 hover:text-[#0369a1]'}`}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden flex-col bg-white border-t border-slate-100 px-6 pt-4 pb-7 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-[500px] opacity-100 flex' : 'max-h-0 opacity-0 hidden'}`}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[14px] font-medium border-b border-slate-100 ${isActive('/') ? 'text-[#0369a1]' : 'text-slate-700'}`}>Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[14px] font-medium border-b border-slate-100 ${isActive('/about') ? 'text-[#0369a1]' : 'text-slate-700'}`}>About</Link>
          <div className="pt-4 pb-1 text-[11px] font-bold tracking-[0.08em] uppercase text-slate-400">Products</div>
          <div className="pl-4 pb-2 border-b border-slate-100 flex flex-col gap-1">
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-[13px] text-slate-600 py-1">FRP Cooling Tower</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-[13px] text-slate-600 py-1">Wooden Cooling Tower</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-[13px] text-[#0369a1] font-medium py-1">View All Products →</Link>
          </div>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[14px] font-medium border-b border-slate-100 ${isActive('/gallery') ? 'text-[#0369a1]' : 'text-slate-700'}`}>Gallery</Link>
          <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[14px] font-medium border-b border-slate-100 ${isActive('/careers') ? 'text-[#0369a1]' : 'text-slate-700'}`}>Careers</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`block py-2.5 text-[14px] font-medium border-b border-slate-100 ${isActive('/contact') ? 'text-[#0369a1]' : 'text-slate-700'}`}>Contact</Link>
          <div className="pt-4 pb-1 text-[11px] font-bold tracking-[0.08em] uppercase text-slate-400">Language</div>
          <div id="google_translate_element_mobile" className="overflow-hidden w-full text-left">
             {/* Google Translate will inject here */}
          </div>
          <a href="tel:+918887901762" className="text-[#0369a1] font-semibold pt-4 text-[16px]">📞 +91 88879 01762</a>
        </div>
      </header>
    </>
  );
}
