import { megaMenuStyles, containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';

export default function GemstonesMenu() {
  return (
    <div style={megaMenuStyles}>
      <div style={containerStyles}>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Shop All Gemstones</h4>
          <ul style={listStyles}>
            <li>Sapphires</li><li>Ruby</li><li>Emerald</li><li>Opal</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Shop by Style</h4>
          <ul style={listStyles}>
            <li>Gemstone Rings</li><li>Necklaces</li><li>Birthstones</li>
          </ul>
        </div>
        <div style={cardStyles}>
          <h4 style={{ fontSize: '1rem', marginBottom: '15px' }}>Gemstone Guides</h4>
          <ul style={listStyles}>
            <li>Pearl Guide</li><li>Gemstone Buying Tips</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
