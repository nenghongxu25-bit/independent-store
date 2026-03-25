import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from '../MenuStyles';

export default function WeddingMenu() {
  return (
    /* 核心修改：删除了最外层的 <div style={megaMenuStyles}> 
       这样它就不会相对于父级再向下偏移 45px，解决了空白断层问题 */
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Bands</h4>
        <ul style={listStyles}>
          {/* 使用 &apos; 确保 Next.js 编译不报错 */}
          <li>Women&apos;s Bands</li>
          <li>Men&apos;s Bands</li>
          <li>Couples Bands</li>
          <li>Wedding Sets</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Style</h4>
        <ul style={listStyles}>
          <li>Diamond</li>
          <li>Yellow Gold</li>
          <li>Platinum</li>
          <li>New Arrivals</li>
        </ul>
      </div>

      <div style={cardStyles}>
        <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600' }}>Wedding Tools</h4>
        <ul style={listStyles}>
          <li style={{ textDecoration: 'underline' }}>Wedding Band Guide</li>
          <li style={{ textDecoration: 'underline' }}>Find Your Ring Size</li>
        </ul>
      </div>
    </div>
  );
}
