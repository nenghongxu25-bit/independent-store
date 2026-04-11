'use client';

import React, { useEffect, useState } from 'react';
import EngagementMenu from './EngagementMenu';
import WeddingMenu from './WeddingMenu';
import DiamondsMenu from './DiamondsMenu';
import GemstonesMenu from './GemstonesMenu';
import FineJewelryMenu from './FineJewelryMenu';
import PersonalizeMenu from './PersonalizeMenu';
import SupportMenu from './SupportMenu';
import { megaMenuStyles } from './MenuStyles';

export const NAV_ITEMS = [
  { id: 'engagement', label: 'Engagement Rings' },
  { id: 'wedding', label: 'Wedding Bands' },
  { id: 'diamonds', label: 'Diamonds' },
  { id: 'gemstones', label: 'Gemstones' },
  { id: 'fine-jewelry', label: 'Fine Jewelry' },
  { id: 'personalize', label: 'Personalize' },
  { id: 'support', label: 'Support Center' }
];

const MENU_COMPONENTS: Record<string, React.ComponentType> = {
  engagement: EngagementMenu,
  wedding: WeddingMenu,
  diamonds: DiamondsMenu,
  gemstones: GemstonesMenu,
  'fine-jewelry': FineJewelryMenu,
  personalize: PersonalizeMenu,
  support: SupportMenu,
};

interface MenuRendererProps {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
}

export default function MenuRenderer({ activeMenu, setActiveMenu }: MenuRendererProps) {
  const [visibleMenu, setVisibleMenu] = useState<string | null>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (activeMenu) {
      setShouldAnimate(false);
      setVisibleMenu(activeMenu);
      const timer = setTimeout(() => setShouldAnimate(true), 10);
      return () => clearTimeout(timer);
    } else {
      setVisibleMenu(null);
    }
  }, [activeMenu]);

  if (!visibleMenu) return null;
  const ActiveComponent = MENU_COMPONENTS[visibleMenu];
  if (!ActiveComponent) return null;

  const animatedStyles = {
    ...megaMenuStyles,
    animation: shouldAnimate ? 'fadeInUp 0.25s ease-out' : 'none',
    opacity: shouldAnimate ? 1 : 0,
    transform: shouldAnimate ? 'translateY(0)' : 'translateY(-10px)',
  };

  return (
    <div style={animatedStyles} onMouseEnter={() => setActiveMenu(visibleMenu)}>
      <ActiveComponent />
    </div>
  );
}