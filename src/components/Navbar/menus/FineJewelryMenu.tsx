import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from '../MenuStyles';

export default function FineJewelryMenu() {
  return (
    
    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Shop by Category</h4>
        <ul style={listStyles}>
          <li>Necklaces</li>
          <li>Rings</li>
          <li>Earrings</li>
          <li>Bracelets</li>
          <li>Men&apos;s</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Popular Styles</h4>
        <ul style={listStyles}>
          <li>Gold Essentials</li>
          <li>Hoop Earrings</li>
          <li>Tennis Bracelets</li>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Gifts</h4>
        <ul style={listStyles}>
          <li>Anniversary Rings</li>
          <li>Family Jewelry</li>
          <li>Gift Cards</li>
        </ul>
      </div>

    </div>

  )
}
