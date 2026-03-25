import React from 'react';
import { containerStyles, headerStyles, listStyles } from './MenuStyles';

export default function SupportMenu() {
  return (
    /* 核心修改：删除了外层的 megaMenuStyles 容器。
       现在的结构：Navbar 控制位置和背景 -> SupportMenu 只负责内容排版 */
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Help & Services</h4>
        <ul style={listStyles}>
          <li>Contact Us</li>
          <li>Free 60-Day Returns</li>
          <li>Find a Store</li>
        </ul>
      </div>
      
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Education & Tools</h4>
        <ul style={listStyles}>
          <li>FAQs</li>
          <li>Ring Sizing</li>
          <li>Financing</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>About Shimmer</h4>
        <ul style={listStyles}>
          <li>About Us</li>
          <li>The Loupe Blog</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
}
