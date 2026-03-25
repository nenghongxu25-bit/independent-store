import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';

export default function DiamondsMenu() {
  return (
    /* ❌ 绝对不要在这里再写一次 <div style={megaMenuStyles}> ❌ */
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Diamonds</h4>
        <ul style={listStyles}>
          <li style={{ fontWeight: 'bold' }}>Shop All</li>
          <li>Natural Diamonds</li>
          <li>Lab-Grown Diamonds</li>
          <li>Color Lab-Grown Diamonds</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Specialty Diamonds</h4>
        <ul style={listStyles}>
          <li>Shane Classic Natural</li>
          <li>Stargazer Lab-Grown</li>
          <li>Padma Lab-Grown</li>
        </ul>
      </div>
      <div style={cardStyles}>
        <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Diamond Education</h4>
        <ul style={listStyles}>
          <li style={{ textDecoration: 'underline' }}>Diamond Buying Guide</li>
          <li style={{ textDecoration: 'underline' }}>About Lab-Grown</li>
        </ul>
      </div>
    </div>
  );
}
