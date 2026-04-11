import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function DiamondsMenu() {
  return (
    <div style={containerStyles}>
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Diamonds</h4>
        <ul style={listStyles}>
          <MenuItem href="/diamonds/all">Shop All</MenuItem>
          <MenuItem href="/diamonds/natural">Natural Diamonds</MenuItem>
          <MenuItem href="/diamonds/lab-grown">Lab-Grown Diamonds</MenuItem>
          <MenuItem href="/diamonds/color-lab-grown">Color Lab-Grown Diamonds</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Specialty Diamonds</h4>
        <ul style={listStyles}>
          <MenuItem href="/diamonds/shane-classic">Shane Classic Natural</MenuItem>
          <MenuItem href="/diamonds/stargazer">Stargazer Lab-Grown</MenuItem>
          <MenuItem href="/diamonds/padma">Padma Lab-Grown</MenuItem>
        </ul>
      </div>
      
      <div style={cardStyles}>
        {/*<h4 style={{ fontSize: '1rem', marginBottom: '15px', color: '#000000ff' }}>Diamond Education</h4>*/}
        <ul style={listStyles}>
          <MenuItem href="/education/diamond-buying-guide">Diamond Buying Guide</MenuItem>
          <MenuItem href="/education/about-lab-grown">About Lab-Grown</MenuItem>
        </ul>
      </div>
    </div>
  );
}