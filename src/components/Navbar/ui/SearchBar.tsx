'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  isFocused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export default function SearchBar({ isFocused, onFocus, onBlur }: SearchBarProps) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      borderBottom: isFocused ? '1px solid #000' : '1px solid #ccc',
      paddingBottom: '2px',
      transition: 'all 0.3s'
    }}>
      <Search size={18} strokeWidth={1.5} color="#333" />
      <input 
        type="text" 
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
        style={{
          border: 'none',
          outline: 'none',
          marginLeft: '8px',
          fontSize: '0.85rem',
          width: isFocused ? '150px' : '100px',
          transition: 'width 0.3s',
          backgroundColor: 'transparent'
        }}
      />
    </div>
  );
}
