import React from 'react';
import { containerStyles, headerStyles, subHeaderStyles, listStyles, cardStyles } from '../MenuStyles';

export default function EngagementMenu() {
  return (
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Design Your Own</h4>
        <ul style={listStyles}>
          <li style={{ fontWeight: '700', color: '#000' }}>Shop all Engagement Rings</li>
          <span style={subHeaderStyles}>Start with a Setting</span>
          <li>Engagement Ring Settings</li>
          <li>Matching Wedding Sets</li>
          <span style={subHeaderStyles}>Start with a Stone</span>
          <li>Natural Diamonds</li>
          <li>Lab-Grown Diamonds</li>
          <li>Color Lab-Grown Diamonds</li>
          <li>Color Gemstones</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Featured Styles</h4>
        <ul style={listStyles}>
          <li>Halo</li><li>Vintage</li><li>Solitaire</li><li>Classic</li>
          <li>Perfectly Preset</li><li>Promise Rings</li><li>New Arrivals</li>
        </ul>
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Metal Types</h4>
        <ul style={listStyles}>
          <li>White Gold</li><li>Yellow Gold</li><li>Platinum</li><li>Rose Gold</li>
        </ul>
      </div>
      <div style={cardStyles}>
        <h4 style={headerStyles}>Helpful Topics & Tools</h4>
        <ul style={listStyles}>
          <li>How to Pick a Ring</li>
          <li>Diamond Buying Guide</li>
          <li>Ring Style Quiz</li>
          <li>Real Proposals</li>
        </ul>
      </div>
    </div>
  );
}
