'use client';

import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks'; 
import MenuRenderer, { NAV_ITEMS } from './menus/index'; 
import {UserAuth, CartIcon, SearchBar} from './ui/index';
import styles from './Navbar.module.css'; // 引入皮肤

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // 监听菜单打开/关闭，给 body 添加类来控制页面文字模糊
  useEffect(() => {
    const isOpen = activeMenu !== null;
    
    if (isOpen) {
      document.body.classList.add('navMenuOpen');
    } else {
      document.body.classList.remove('navMenuOpen');
    }
    
    return () => {
      document.body.classList.remove('navMenuOpen');
    };
  }, [activeMenu]);

  return (
    <div className={`${styles.navbarContainer} ${activeMenu ? styles.menuActive : ''}`}>

      {/* Logo 区域 - 恢复原样，不加 navLogo */}
      <div className={styles.logoWrapper}>
        <h1 translate="no" className={styles.logoText} style={{ fontFamily: 'var(--font-cormorant)' }}>
          DroSta
        </h1>
      </div>

      {/* 右侧工具组 */}
      <div className={styles.rightTools}>
        <SearchBar /> 
        <CartIcon count={3} />
      </div>

      {/* 左侧工具组 */}
      <div className={styles.leftTools}>
        <UserAuth />
      </div>

      {/* 导航菜单逻辑区 */}
      <div 
        className={styles.navLinksWrapper}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <NavLinks 
          items={NAV_ITEMS} 
          activeMenu={activeMenu} 
          setActiveMenu={setActiveMenu} 
        />
        <MenuRenderer activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </div>

    </div>
  );
}