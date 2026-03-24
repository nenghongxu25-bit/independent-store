// src/components/Navbar/EngagementMenu.tsx
import { megaMenuStyles, containerStyles, headerStyles, listStyles, cardStyles } from './MenuStyles';

export default function EngagementMenu() {
  return (
    <div style={megaMenuStyles}>
      <div style={containerStyles}>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Design Your Own</h4>
          <ul style={listStyles}>
            <li style={{ fontWeight: 'bold' }}>Shop all Engagement Rings</li>
            <li style={{ color: '#999', marginTop: '10px' }}>Start with a Setting</li>
            <li>Engagement Ring Settings</li>
          </ul>
        </div>
        <div style={cardStyles}>
          <h4 style={{ fontFamily: 'serif' }}>Helpful Topics</h4>
          <ul style={listStyles}>
            <li>How to Pick a Ring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
