import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Welcome to our site, if you need help simply reply to this message, we are online and ready to help.", sender: "bot" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thank you for reaching out! Our team will get back to you shortly.", sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div className={`bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right mb-4 ${isOpen ? 'scale-100 opacity-100 w-[340px] max-h-[480px]' : 'scale-0 opacity-0 w-0 h-0'}`}>
        
        {/* Header */}
        <div className="bg-white text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-[#f97316] rounded-full flex items-center justify-center font-bold text-sm">AE</div>
             <div>
               <h4 className="font-semibold text-sm">Customer Support</h4>
               <p className="text-xs text-white/70">Usually replies in a few minutes</p>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="p-4 flex-1 h-[300px] overflow-y-auto bg-slate-50 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-[14px] ${msg.sender === 'user' ? 'bg-[#f97316] text-white self-end rounded-br-sm' : 'bg-white border border-slate-200 text-[#0f1c2e] self-start rounded-bl-sm'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input 
            type="text"
            className="flex-1 border-none bg-slate-100 text-[14px] px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all text-[#0f1c2e]"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button onClick={handleSend} className="w-10 h-10 bg-[#f97316] text-white rounded-full flex items-center justify-center shrink-0 hover:bg-[#ea6600] transition-colors">
            <Send size={16} />
          </button>
        </div>

      </div>

      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-14 h-14 bg-[#f97316] text-white rounded-full shadow-lg shadow-orange-500/30 flex items-center justify-center hover:scale-105 transition-all float-right"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
