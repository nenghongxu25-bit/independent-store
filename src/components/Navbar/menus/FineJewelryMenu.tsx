import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function FineJewelryMenu() {
  return (
    
    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Category</h4>
        <ul style={listStyles}>
          <MenuItem href="/fine-jewelry/necklaces">Necklaces</MenuItem>
          <MenuItem href="/fine-jewelry/rings">Rings</MenuItem>
          <MenuItem href="/fine-jewelry/earrings">Earrings</MenuItem>
          <MenuItem href="/fine-jewelry/bracelets">Bracelets</MenuItem>
          <MenuItem href="/fine-jewelry/mens">Men&apos;s</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Popular Styles</h4>
          <ul style={listStyles}>
            <MenuItem href="/fine-jewelry/gold-essentials">Gold Essentials</MenuItem>
            <MenuItem href="/fine-jewelry/hoop-earrings">Hoop Earrings</MenuItem>
            <MenuItem href="/fine-jewelry/tennis-bracelets">Tennis Bracelets</MenuItem>
          </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Gifts</h4>
          <ul style={listStyles}>
            <MenuItem href="/gifts/anniversary-rings">Anniversary Rings</MenuItem>
            <MenuItem href="/gifts/family-jewelry">Family Jewelry</MenuItem>
            <MenuItem href="/gifts/gift-cards">Gift Cards</MenuItem>
          </ul>
      </div>

    </div>

  )
}
