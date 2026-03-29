'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Loader2 } from 'lucide-react';

export default function ChatVikas() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', content: "Hello! I'm Vikas. How can I assist you with our diamonds today?" }]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      // 关键改动：先检查响应状态
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.content || 'Server Error');
      }

      const data = await res.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.content }]);
    } catch (e: any) {
      console.error("Chat Error:", e);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `Error: ${e.message}. 请检查后台终端日志。` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ width: '50px', height: '50px', backgroundColor: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.2)' }}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      {isOpen && (
        <div style={{ position: 'absolute', bottom: '70px', right: 0, width: '350px', height: '500px', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid #f0f0f0' }}>
          {/* Header */}
          <div style={{ backgroundColor: '#000', padding: '20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#aa8928', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <User size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1px' }}>VIKAS</div>
              <div style={{ fontSize: '10px', color: '#aa8928', letterSpacing: '1px' }}>SHIMMER EXPERT</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', backgroundColor: '#fafafa' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', 
                maxWidth: '85%', 
                padding: '12px 16px', 
                borderRadius: '15px', 
                fontSize: '13px', 
                lineHeight: '1.5',
                backgroundColor: msg.role === 'user' ? '#000' : '#fff', 
                color: msg.role === 'user' ? '#fff' : '#333', 
                border: msg.role === 'assistant' ? '1px solid #eee' : 'none' 
              }}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px', color: '#aa8928', fontSize: '12px' }}>
                <Loader2 className="animate-spin" size={16} />
                Vikas is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px', backgroundColor: '#fff' }}>
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
              placeholder="Ask Vikas about diamonds..." 
              style={{ flex: 1, border: 'none', outline: 'none', fontSize: '13px' }} 
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading} 
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: input.trim() ? '#aa8928' : '#ccc' }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}