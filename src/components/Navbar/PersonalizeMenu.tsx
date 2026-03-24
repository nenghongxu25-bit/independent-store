import { megaMenuStyles, containerStyles, headerStyles, subHeaderStyles, listStyles } from './MenuStyles';

export default function PersonalizeMenu() {
  return (
    <div style={megaMenuStyles}>
      <div style={containerStyles}>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Pick Your Gem</h4>
          <ul style={listStyles}>
            <li>Single-Stone Pendants</li>
            <li>Multi-Stone Pendants</li>
            <li>Single-Stone Rings</li>
            <li>Multi-Stone Rings</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Engravable Styles</h4>
          <ul style={listStyles}>
            <li style={{ fontWeight: '700' }}>Shop All</li>
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Men&apos;s</li>
            <li>Lockets</li>
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          <h4 style={headerStyles}>Symbolic Styles</h4>
          <ul style={listStyles}>
            <li>Charms</li>
            <li>Initials</li>
            <li>Zodiac</li>
            <li>Birthstones</li>
          </ul>
        </div>
        {/* 这里可以留空或放一张精致的图片占位，保持 Shane Co. 的极简感 */}
        <div style={{ flex: 1.5 }}></div>
      </div>
    </div>
  );
}
