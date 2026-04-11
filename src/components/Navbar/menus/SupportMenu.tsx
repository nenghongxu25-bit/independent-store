import React from 'react';
import { containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';
import MenuItem from './MenusItems';

export default function SupportMenu() {
  return (

    <div style={containerStyles}>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Help & Services</h4>
        <ul style={listStyles}>
          <MenuItem href="/support/contact-us">Contact Us</MenuItem>
          <MenuItem href="/support/free-60-day-returns">Free 60-Day Returns</MenuItem>
          <MenuItem href="/support/find-a-store">Find a Store</MenuItem>
        </ul>
      </div>
      
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Education & Tools</h4>
        <ul style={listStyles}>
          <MenuItem href="/education/faqs">FAQs</MenuItem>
          <MenuItem href="/education/ring-sizing">Ring Sizing</MenuItem>
          <MenuItem href="/education/financing">Financing</MenuItem>
        </ul>
      </div>

      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>About Shimmer</h4>
        <ul style={listStyles}>
          <MenuItem href="/about-shimmer/about-us">About Us</MenuItem>
          <MenuItem href="/about-shimmer/loupe-blog">The Loupe Blog</MenuItem>
          <MenuItem href="/about-shimmer/careers">Careers</MenuItem>
        </ul>
      </div>

    </div>

  );

}
