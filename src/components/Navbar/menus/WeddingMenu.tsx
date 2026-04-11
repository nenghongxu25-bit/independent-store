import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function WeddingMenu() {
  return (

    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop All Bands</h4>
        <ul style={listStyles}>
          <MenuItem href="/wedding/womens-bands">Women&apos;s Bands</MenuItem>
          <MenuItem href="/wedding/mens-bands">Men&apos;s Bands</MenuItem>
          <MenuItem href="/wedding/couples-bands">Couples Bands</MenuItem>
          <MenuItem href="/wedding/wedding-sets">Wedding Sets</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Style</h4>
        <ul style={listStyles}>
          <MenuItem href="/wedding/diamond">Diamond</MenuItem>
          <MenuItem href="/wedding/yellow-gold">Yellow Gold</MenuItem>
          <MenuItem href="/wedding/platinum">Platinum</MenuItem>
          <MenuItem href="/wedding/new-arrivals">New Arrivals</MenuItem>
        </ul>
      </div>

      <div style={cardStyles}>
        <h4 style={{ fontSize: '1rem', marginBottom: '15px', fontWeight: '600' }}>Wedding Tools</h4>
        <ul style={listStyles}>
          <MenuItem href="/wedding/band-guide">Wedding Band Guide</MenuItem>
          <MenuItem href="/wedding/find-your-ring-size">Find Your Ring Size</MenuItem>
        </ul>
      </div>

    </div>

  );

}
