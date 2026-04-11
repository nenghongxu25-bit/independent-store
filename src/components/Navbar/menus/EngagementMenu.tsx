import React from 'react';
import { containerStyles, headerStyles, subHeaderStyles, listStyles, cardStyles } from './MenuStyles';
// 确保这里导入了你定义的那个 MenuItem 组件
import MenuItem from './MenusItems'; 

export default function EngagementMenu() {
  return (
    <div style={containerStyles}>
      
      {/* 第一列：定制设计 */}
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Design Your Own</h4>
        <ul style={listStyles}>
          <MenuItem href="/engagement-rings/all">Shop all Engagement Rings</MenuItem>
          
          <MenuItem href="/engagement-rings/setting">Start with a Setting</MenuItem>
          <MenuItem href="/engagement-rings/settings">Engagement Ring Settings</MenuItem>
          <MenuItem href="/engagement-rings/matching-sets">Matching Wedding Sets</MenuItem>
          
          <MenuItem href="/engagement-rings/stone">Start with a Stone</MenuItem>  
          <MenuItem href="/diamonds/natural">Natural Diamonds</MenuItem>
          <MenuItem href="/diamonds/lab-grown">Lab-Grown Diamonds</MenuItem>
          <MenuItem href="/diamonds/color-lab-grown">Color Lab-Grown Diamonds</MenuItem>
          <MenuItem href="/gemstones/all">Color Gemstones</MenuItem>
        </ul>
      </div>

      {/* 第二列：特色款式 */}
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Featured Styles</h4>
        <ul style={listStyles}>
          <MenuItem href="/engagement-rings/halo">Halo</MenuItem>
          <MenuItem href="/engagement-rings/vintage">Vintage</MenuItem>
          <MenuItem href="/engagement-rings/solitaire">Solitaire</MenuItem>
          <MenuItem href="/engagement-rings/classic">Classic</MenuItem>
          <MenuItem href="/engagement-rings/preset">Perfectly Preset</MenuItem>
          <MenuItem href="/engagement-rings/promise">Promise Rings</MenuItem>
          <MenuItem href="/engagement-rings/new">New Arrivals</MenuItem>
        </ul>
      </div>

      {/* 第三列：金属材质 */}
      <div style={{ flex: 1 }}>
        <h4 style={headerStyles}>Metal Types</h4>
        <ul style={listStyles}>
          <MenuItem href="/engagement-rings/white-gold">White Gold</MenuItem>
          <MenuItem href="/engagement-rings/yellow-gold">Yellow Gold</MenuItem>
          <MenuItem href="/engagement-rings/platinum">Platinum</MenuItem>
          <MenuItem href="/engagement-rings/rose-gold">Rose Gold</MenuItem>
        </ul>
      </div>

      {/* 第四列：工具与指南（Card 样式） */}
      <div style={cardStyles}>
        <h4 style={headerStyles}>Helpful Topics & Tools</h4>
        <ul style={listStyles}>
          <MenuItem href="/education/how-to-pick-a-ring">How to Pick a Ring</MenuItem>
          <MenuItem href="/education/diamond-buying-guide">Diamond Buying Guide</MenuItem>
          <MenuItem href="/quiz/ring-style">Ring Style Quiz</MenuItem>
          <MenuItem href="/proposals">Real Proposals</MenuItem>
        </ul>
      </div>

    </div>
  );
}