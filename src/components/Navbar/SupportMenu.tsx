import { megaMenuStyles, containerStyles, headerStyles, listStyles } from './MenuStyles';

export default function SupportMenu() {
  return (
    <div style={megaMenuStyles}>
      <div style={containerStyles}>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Help & Services</h4>
          <ul style={listStyles}>
            <li>Contact Us</li><li>Free 60-Day Returns</li><li>Find a Store</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Education & Tools</h4>
          <ul style={listStyles}>
            <li>FAQs</li><li>Ring Sizing</li><li>Financing</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>About Shimmer</h4>
          <ul style={listStyles}>
            <li>About Us</li><li>The Loupe Blog</li><li>Careers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
