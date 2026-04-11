import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function PersonalizeMenu() {
  return (
    
    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Pick Your Gem</h4>
        <ul style={listStyles}>
          <MenuItem href="/personalize/single-st-pendants">Single-Stone Pendants</MenuItem>
          <MenuItem href="/personalize/multi-st-pendants">Multi-Stone Pendants</MenuItem>
          <MenuItem href="/personalize/single-st-rings">Single-Stone Rings</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Engravable Styles</h4>
        <ul style={listStyles}>
          <MenuItem href="/personalize/shop-all">Shop All</MenuItem>
          <MenuItem href="/personalize/necklaces">Necklaces</MenuItem>
          <MenuItem href="/personalize/rings">Rings</MenuItem>
          {/* 这里已经帮你处理好了 Men's 的转义，Next.js 不会报错 */}
          <MenuItem href="/personalize/mens">Men&apos;s</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Symbolic Styles</h4>
        <ul style={listStyles}>
          <MenuItem href="/personalize/charms">Charms</MenuItem>
          <MenuItem href="/personalize/initials">Initials</MenuItem>
          <MenuItem href="/personalize/zodiac">Zodiac</MenuItem>
          <MenuItem href="/personalize/birthstones">Birthstones</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1.5 }}></div>

    </div>
    
  );
}
