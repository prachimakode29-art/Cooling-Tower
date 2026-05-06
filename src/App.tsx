/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Phone } from 'lucide-react';
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import JobPost from './pages/JobPost';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function FloatingSocials() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-[100] bg-white/90 backdrop-blur-md p-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200/50">
      <a href="tel:+918887901762" className="w-[36px] h-[36px] bg-[#5b9a42]/10 text-[#5b9a42] hover:bg-[#5b9a42] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Phone">
        <Phone size={16} />
      </a>
      <a href="https://wa.me/+918887901762" className="w-[36px] h-[36px] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="WhatsApp">
        <FaWhatsapp size={18} />
      </a>
      <a href="https://www.facebook.com/ravikant.jha3" className="w-[36px] h-[36px] bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Facebook">
        <FaFacebookF size={16} />
      </a>
      <a href="https://www.linkedin.com/in/ravi-kant-36a9ab199/" className="w-[36px] h-[36px] bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="LinkedIn">
        <FaLinkedinIn size={16} />
      </a>
      <a href="#" className="w-[36px] h-[36px] bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Twitter">
        <FaTwitter size={16} />
      </a>
      <a href="#" className="w-[36px] h-[36px] bg-[#E1306C]/10 text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#bc1888] hover:text-white rounded-full flex items-center justify-center transition-all hover:scale-110" aria-label="Instagram">
        <FaInstagram size={18} />
      </a>
    </div>
  );
}

function MainApp() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <FloatingSocials />
      
      <main className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-post" element={<JobPost />} />
        </Routes>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
