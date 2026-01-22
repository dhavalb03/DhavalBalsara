
import React, { useState, useRef, useEffect } from 'react';
import { Icons } from '../constants';
import { getAIResponse } from '../services/geminiService';
import { Message } from '../types';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Hello. I’m Dhaval’s AI assistant. How can I help you understand which automation fits your business needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const response = await getAIResponse(userMsg, messages);

    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 ${
          isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 bg-emerald-600 text-white'
        }`}
      >
        <Icons.Chat className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-8 sm:right-8 z-50 w-full sm:w-96 h-full sm:h-[500px] bg-white sm:rounded-2xl shadow-2xl border border-gray-100 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-300">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-emerald-50 sm:rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <Icons.Chat className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-900">AI Consultant</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-emerald-700 font-medium uppercase tracking-wider">Quietly Confident</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icons.Close className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-emerald-600 text-white rounded-tr-none'
                      : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white sm:rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about an AI solution..."
                className="flex-grow px-4 py-2 bg-gray-100 border-none rounded-full text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="p-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors disabled:opacity-50"
              >
                <Icons.ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-widest font-medium">
              Powered by Gemini Flash
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIConsultant;
