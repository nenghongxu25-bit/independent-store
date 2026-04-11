import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function GemstonesMenu() {
  return (
    
    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Gemstones</h4>
        <ul style={listStyles}>
          <MenuItem href="/gemstones/sapphires">Sapphires</MenuItem>
          <MenuItem href="/gemstones/ruby">Ruby</MenuItem>
          <MenuItem href="/gemstones/emerald">Emerald</MenuItem>
          <MenuItem href="/gemstones/opal">Opal</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Style</h4>
        <ul style={listStyles}>
          <MenuItem href="/gemstones/gemstone-rings">Gemstone Rings</MenuItem>
          <MenuItem href="/gemstones/necklaces">Necklaces</MenuItem>
          <MenuItem href="/gemstones/birthstones">Birthstones</MenuItem>  
        </ul>
      </div>

      <div style={cardStyles}>
        <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600' }}>Gemstone Guides</h4>
        <ul style={listStyles}>
          <MenuItem href="/education/pearl-guide">Pearl Guide</MenuItem>
          <MenuItem href="/education/gemstone-buying-tips">Gemstone Buying Tips</MenuItem>
        </ul>
      </div>

    </div>
    
  );

}
