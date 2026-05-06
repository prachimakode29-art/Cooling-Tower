import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0f1c2e] pt-16 border-t border-[#0f1c2e] mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 pb-14 border-b border-white/5">
          
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-[#f97316] rounded-lg flex items-center justify-center font-['Syne'] font-extrabold text-[17px] text-white shrink-0">
                AE
              </div>
              <div className="font-['Syne'] font-bold text-[14px] text-white leading-tight">
                Arohi Engineering
                <span className="block text-[10.5px] font-normal text-white/45 tracking-[0.04em] uppercase">& Cooling Tower</span>
              </div>
            </Link>
            <p className="text-[13.5px] text-white/40 leading-[1.75] mt-4 max-w-[300px]">
              A reputable manufacturer and service provider specializing in high-quality cooling tower solutions, committed to meeting the cooling needs of industries across India.
            </p>
            <div className="flex gap-2.5 mt-6 flex-wrap">
              <a href="tel:+918887901762" className="w-[38px] h-[38px] bg-[#5b9a42] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#5b9a42]/20 hover:opacity-90" aria-label="Phone">
                <Phone size={18} className="text-white" />
              </a>
              <a href="https://wa.me/+918887901762" className="w-[38px] h-[38px] bg-[#25D366] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#25D366]/20 hover:opacity-90" aria-label="WhatsApp">
                <FaWhatsapp size={20} className="text-white" />
              </a>
              <a href="https://www.facebook.com/ravikant.jha3" className="w-[38px] h-[38px] bg-[#1877F2] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#1877F2]/20 hover:opacity-90" aria-label="Facebook">
                <FaFacebookF size={18} className="text-white" />
              </a>
              <a href="https://www.linkedin.com/in/ravi-kant-36a9ab199/" className="w-[38px] h-[38px] bg-[#0A66C2] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#0A66C2]/20 hover:opacity-90" aria-label="LinkedIn">
                <FaLinkedinIn size={18} className="text-white" />
              </a>
              <a href="#" className="w-[38px] h-[38px] bg-[#1DA1F2] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#1DA1F2]/20 hover:opacity-90" aria-label="Twitter">
                <FaTwitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-[38px] h-[38px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 shadow-md shadow-[#E1306C]/20 hover:opacity-90" aria-label="Instagram">
                <FaInstagram size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="font-['Syne'] text-[13px] font-bold text-white uppercase tracking-[0.09em] mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li><Link to="/" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Home</Link></li>
              <li><Link to="/about" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">About Us</Link></li>
              <li><Link to="/gallery" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Gallery</Link></li>
              <li><Link to="/careers" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Careers</Link></li>
              <li><Link to="/contact" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-['Syne'] text-[13px] font-bold text-white uppercase tracking-[0.09em] mb-5">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Installation</a></li>
              <li><a href="#" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Maintenance & Repair</a></li>
              <li><a href="#" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Consultation</a></li>
              <li><a href="#" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">Spare Parts Supply</a></li>
              <li><a href="#" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">AMC Contracts</a></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-['Syne'] text-[13px] font-bold text-white uppercase tracking-[0.09em] mb-5">Contact</h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="tel:+918887901762" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">+91 88879 01762</a></li>
              <li><a href="tel:+918853774170" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">+91 88537 74170</a></li>
              <li><a href="tel:07312990424" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">0731-2990424</a></li>
              <li><a href="mailto:info@arohiect.com" className="text-[13.5px] text-white/40 hover:text-white/90 hover:pl-1 transition-all">info@arohiect.com</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-2.5 text-center md:text-left">
          <p className="text-[13px] text-white/30">© {new Date().getFullYear()} <a href="https://arohiect.com" className="text-[#f97316]">arohiect.com</a>. All Rights Reserved.</p>
          <p className="text-[13px] text-white/30">Designed & Developed By India Websoft</p>
        </div>
      </div>
    </footer>
  );
}
