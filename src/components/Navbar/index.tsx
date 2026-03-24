'use client';
import React, { useState } from 'react';
import EngagementMenu from './EngagementMenu';
import WeddingMenu from './WeddingMenu';
// ... 导入其他菜单

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <nav onMouseLeave={() => setActiveMenu(null)}>
      <div className="navbar-main">
        {/* Logo 和 搜索栏代码 */}
        <div onMouseEnter={() => setActiveMenu('engagement')}>ENGAGEMENT</div>
        <div onMouseEnter={() => setActiveMenu('wedding')}>WEDDING</div>
      </div>

      {/* 根据状态显示对应的子组件 */}
      {activeMenu === 'engagement' && <EngagementMenu />}
      {activeMenu === 'wedding' && <WeddingMenu />}
      {/* ... 其他菜单 */}
    </nav>
  );
}
