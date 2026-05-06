/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Phone, MessageCircle, Facebook, Linkedin, Instagram } from 'lucide-react';

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
    <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col z-[100] shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
      <a href="tel:+918887901762" className="w-[42px] h-[42px] bg-[#5b9a42] flex items-center justify-center text-white hover:w-[48px] hover:-translate-x-1 transition-all rounded-l-md border-b border-white/10" aria-label="Phone">
        <Phone size={18} />
      </a>
      <a href="#" className="w-[42px] h-[42px] bg-[#42d184] flex items-center justify-center text-white hover:w-[48px] hover:-translate-x-1 transition-all rounded-l-md border-b border-white/10" aria-label="WhatsApp">
        <MessageCircle size={18} />
      </a>
      <a href="#" className="w-[42px] h-[42px] bg-[#3b5998] flex items-center justify-center text-white hover:w-[48px] hover:-translate-x-1 transition-all rounded-l-md border-b border-white/10" aria-label="Facebook">
        <Facebook size={18} />
      </a>
      <a href="#" className="w-[42px] h-[42px] bg-[#0077b5] flex items-center justify-center text-white hover:w-[48px] hover:-translate-x-1 transition-all rounded-l-md border-b border-white/10" aria-label="LinkedIn">
        <Linkedin size={18} />
      </a>
      <a href="#" className="w-[42px] h-[42px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center text-white hover:w-[48px] hover:-translate-x-1 transition-all rounded-l-md" aria-label="Instagram">
        <Instagram size={18} />
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
