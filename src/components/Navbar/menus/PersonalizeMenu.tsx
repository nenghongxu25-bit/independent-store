import React from 'react';
import { containerStyles, headerStyles, subHeaderStyles, listStyles } from '../MenuStyles';

export default function PersonalizeMenu() {
  return (
    /* 核心修改：删除了最外层的 <div style={megaMenuStyles}> 
       让定位由 Navbar 的父级容器统一管理，彻底消除 45px 的空白死区 */
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Pick Your Gem</h4>
        <ul style={listStyles}>
          <li>Single-Stone Pendants</li>
          <li>Multi-Stone Pendants</li>
          <li>Single-Stone Rings</li>
          <li>Multi-Stone Rings</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Engravable Styles</h4>
        <ul style={listStyles}>
          <li style={{ fontWeight: '700' }}>Shop All</li>
          <li>Necklaces</li>
          <li>Rings</li>
          {/* 这里已经帮你处理好了 Men's 的转义，Next.js 不会报错 */}
          <li>Men&apos;s</li>
          <li>Lockets</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Symbolic Styles</h4>
        <ul style={listStyles}>
          <li>Charms</li>
          <li>Initials</li>
          <li>Zodiac</li>
          <li>Birthstones</li>
        </ul>
      </div>

      {/* 保持 Shane Co. 的极简感，右侧留出适当呼吸感 */}
      <div style={{ flex: 1.5 }}></div>
    </div>
  );
}
