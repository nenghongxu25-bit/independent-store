import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';

export default function GemstonesMenu() {
  return (
    /* 核心修改：删除了最外层的 <div style={megaMenuStyles}>，只保留布局容器 */
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Gemstones</h4>
        <ul style={listStyles}>
          <li>Sapphires</li>
          <li>Ruby</li>
          <li>Emerald</li>
          <li>Opal</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Style</h4>
        <ul style={listStyles}>
          <li>Gemstone Rings</li>
          <li>Necklaces</li>
          <li>Birthstones</li>
        </ul>
      </div>

      <div style={cardStyles}>
        <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600' }}>Gemstone Guides</h4>
        <ul style={listStyles}>
          <li style={{ textDecoration: 'underline' }}>Pearl Guide</li>
          <li style={{ textDecoration: 'underline' }}>Gemstone Buying Tips</li>
        </ul>
      </div>
    </div>
  );
}
