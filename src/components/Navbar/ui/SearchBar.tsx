'use client';

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (!searchQuery) {
      setIsFocused(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setIsFocused(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim() && onSearch) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderBottom: isFocused ? '2px solid #d4af37' : '1px solid #aaa',
        paddingBottom: '4px',
        transition: 'all 0.3s',
        width: isFocused ? '180px' : '150px'
      }}>
        <Search 
          size={20} 
          strokeWidth={2} 
          color={isFocused ? '#d4af37' : '#777'} 
          style={{ transition: 'color 0.3s' }}
        />
        <input 
          type="text" 
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          style={{
            border: 'none',
            outline: 'none',
            marginLeft: '10px',
            fontSize: '0.9rem',
            width: '100%',
            backgroundColor: 'transparent',
            color: '#222',
            fontWeight: '500'
          }}
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2px',
              marginLeft: '6px'
            }}
            aria-label="清除搜索"
          >
            <X size={16} color="#999" strokeWidth={2} />
          </button>
        )}
      </div>
      
      {isFocused && searchQuery && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          border: '2px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '4px',
          marginTop: '6px',
          padding: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <div style={{
            fontSize: '12px',
            color: '#444',
            padding: '4px 8px',
            fontWeight: '500'
          }}>
            Press Enter to search "{searchQuery}"
          </div>
        </div>
      )}
    </div>
  );
}
