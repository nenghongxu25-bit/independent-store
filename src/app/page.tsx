'use client';

import React, { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import BrandStory from '@/components/BrandStory';
import Bestsellers from '@/components/BestSeller';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <main style={{ minHeight: '100vh', background: '#FFFFFF' }} />;
  }

  return (
    <>
      {/* 第一板块：Hero 区 */}
      <HeroSection />

      {/* 第二板块：品牌故事 */}
      <BrandStory />
      
      {/* 第三板块：畅销产品 */}
      <Bestsellers />
    </>
  );
}