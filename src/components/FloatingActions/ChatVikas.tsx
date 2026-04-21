'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Loader2 } from 'lucide-react';
import styles from './ChatVikas.module.css';

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
      <div className={styles.trigger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      {isOpen && (
        <div className={styles.panel}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.avatar}>
              <User size={20} />
            </div>
            <div>
              <div className={styles.headerName}>VIKAS</div>
              <div className={styles.headerRole}>SHIMMER EXPERT</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === 'user' ? styles.messageUser : styles.messageAssistant}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div className={styles.loading}>
                <Loader2 className="animate-spin" size={16} />
                Vikas is thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div className={styles.inputBar}>
            <input 
              type="text" 
              className={styles.input}
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleSend()} 
              placeholder="Ask Vikas about diamonds..." 
            />
            <button 
              className={input.trim() ? styles.sendButtonActive : styles.sendButtonDisabled}
              onClick={handleSend} 
              disabled={isLoading} 
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
