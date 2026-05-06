import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';

type Message = {
  id: string;
  text: string;
  role: 'user' | 'bot';
  timestamp: Date;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: 'Welcome to our site, if you need help simply reply to this message, we are online and ready to help.',
      role: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const userText = inputValue;
    const newMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role,
        text: msg.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userText,
          history: chatHistory
        })
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      
      setMessages(prev => [...prev, {
        id: Date.now().toString() + 'bot',
        text: data.text,
        role: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      console.error("Error sending message", error);
      setMessages(prev => [...prev, {
        id: Date.now().toString() + 'bot_err',
        text: "Sorry, I'm having trouble connecting to the server. Please try again later.",
        role: 'bot',
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      <div className={`bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right mb-4 ${isOpen ? 'scale-100 opacity-100 w-[340px] max-h-[480px]' : 'scale-0 opacity-0 w-0 h-0'}`}>
        
        {/* Header */}
        <div className="bg-[#03a948] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm">AE</div>
             <div>
               <h4 className="font-semibold text-sm">Customer Support</h4>
               <div className="flex items-center gap-1.5 mt-0.5">
                   <span className="w-2 h-2 rounded-full bg-green-300"></span>
                   <span className="text-xs text-white/90">Online</span>
               </div>
             </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/80 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        {/* Messages */}
        <div className="p-4 flex-1 h-[300px] overflow-y-auto bg-slate-50 flex flex-col gap-3">
          {messages.map((msg, i) => (
            <div key={msg.id || i} className={`max-w-[85%] p-3 rounded-2xl text-[14px] leading-relaxed ${msg.role === 'user' ? 'bg-[#03a948] text-white self-end rounded-br-sm shadow-sm' : 'bg-white border border-slate-200 text-[#0f1c2e] self-start rounded-bl-sm shadow-sm'}`}>
              {msg.text}
            </div>
          ))}

          {isLoading && (
            <div className="max-w-[75%] bg-white border border-slate-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm self-start">
              <Loader2 size={16} className="animate-spin text-[#03a948]" />
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
          <input 
            type="text"
            className="flex-1 border-none bg-slate-100 text-[14px] px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-[#03a948]/50 transition-all text-[#0f1c2e]"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage} 
            disabled={!inputValue.trim() || isLoading}
            className="w-10 h-10 bg-[#03a948] disabled:bg-slate-300 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-[#028b3a] transition-colors"
          >
            <Send size={16} className="ml-1" />
          </button>
        </div>

      </div>

      {/* Toggle button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-14 h-14 bg-[#03a948] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-all float-right"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
