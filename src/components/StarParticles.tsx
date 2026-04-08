'use client';

import { useEffect, useRef } from 'react';

export default function StarParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];
    let goldStars: GoldStar[] = [];
    let width: number, height: number;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationId);
      } else {
        animate();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, isGold: boolean = false) {
      const spikes = 4;
      const outerRadius = size;
      const innerRadius = size * 0.4;
      let rotation = Math.PI / 4;
      let step = Math.PI / spikes;

      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        let r = (i % 2 === 0) ? outerRadius : innerRadius;
        let angle = i * step + rotation;
        let xPos = x + r * Math.cos(angle);
        let yPos = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(xPos, yPos);
        else ctx.lineTo(xPos, yPos);
      }
      ctx.closePath();
      
      if (isGold) {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `rgba(255, 215, 0, ${opacity})`);
        gradient.addColorStop(1, `rgba(255, 100, 0, ${opacity * 0.8})`);
        ctx.fillStyle = gradient;
      } else {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(1, `rgba(255, 200, 100, ${opacity * 0.7})`);
        ctx.fillStyle = gradient;
      }
      ctx.fill();
    }

    function drawStarGlow(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, isGold: boolean = false) {
      const spikes = 4;
      const outerRadius = size * 2.2;
      const innerRadius = size * 0.8;
      let rotation = Math.PI / 4;
      let step = Math.PI / spikes;

      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        let r = (i % 2 === 0) ? outerRadius : innerRadius;
        let angle = i * step + rotation;
        let xPos = x + r * Math.cos(angle);
        let yPos = y + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(xPos, yPos);
        else ctx.lineTo(xPos, yPos);
      }
      ctx.closePath();
      
      if (isGold) {
        ctx.fillStyle = `rgba(255, 200, 50, ${opacity * 0.4})`;
      } else {
        ctx.fillStyle = `rgba(255, 255, 200, ${opacity * 0.3})`;
      }
      ctx.fill();
    }

    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseOpacity: number;
      currentOpacity: number;
      cyclePhase: number;
      cycleSpeed: number;
      twinkleAmplitude: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2.5 + 1.2;
        this.speedX = (Math.random() - 0.5) * 0.02;
        this.speedY = (Math.random() - 0.5) * 0.015;
        this.baseOpacity = Math.random() * 0.3 + 0.2;
        this.cyclePhase = Math.random() * Math.PI * 2;
        // 闪烁速度降低到原来的 1/3：0.002 - 0.006（之前是 0.008-0.02）
        this.cycleSpeed = 0.002 + Math.random() * 0.004;
        this.twinkleAmplitude = 0.4 + Math.random() * 0.3;
        this.currentOpacity = this.baseOpacity;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        this.cyclePhase += this.cycleSpeed;
        const brightness = Math.sin(this.cyclePhase) * this.twinkleAmplitude;
        this.currentOpacity = Math.max(0.15, Math.min(0.9, this.baseOpacity + brightness));

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        drawStarGlow(ctx, this.x, this.y, this.size, this.currentOpacity * 1.2, false);
        drawStar(ctx, this.x, this.y, this.size, this.currentOpacity, false);
      }
    }

    class GoldStar {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseOpacity: number;
      currentOpacity: number;
      cyclePhase: number;
      cycleSpeed: number;
      twinkleAmplitude: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1.8;
        this.speedX = (Math.random() - 0.5) * 0.018;
        this.speedY = (Math.random() - 0.5) * 0.012;
        this.baseOpacity = Math.random() * 0.35 + 0.25;
        this.cyclePhase = Math.random() * Math.PI * 2;
        // 金色星星闪烁也更慢：0.0025 - 0.0055
        this.cycleSpeed = 0.0025 + Math.random() * 0.003;
        this.twinkleAmplitude = 0.5 + Math.random() * 0.35;
        this.currentOpacity = this.baseOpacity;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        this.cyclePhase += this.cycleSpeed;
        const brightness = Math.sin(this.cyclePhase) * this.twinkleAmplitude;
        this.currentOpacity = Math.max(0.2, Math.min(0.95, this.baseOpacity + brightness));

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (!ctx) return;
        
        drawStarGlow(ctx, this.x, this.y, this.size * 1.3, this.currentOpacity * 1.3, true);
        drawStar(ctx, this.x, this.y, this.size, this.currentOpacity, true);
      }
    }

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) canvas.width = width;
      if (canvas) canvas.height = height;

      stars = [];
      const starCount = Math.min(600, Math.floor((width * height) / 4000));
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }

      goldStars = [];
      const goldCount = Math.max(25, Math.min(60, Math.floor((width * height) / 10000)));
      for (let i = 0; i < goldCount; i++) {
        goldStars.push(new GoldStar());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      
      ctx.fillStyle = 'rgba(3, 3, 10, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      for (const star of stars) {
        star.update();
        star.draw();
      }
      
      for (const gold of goldStars) {
        gold.update();
        gold.draw();
      }
      
      animationId = requestAnimationFrame(animate);
    }

    function handleResize() {
      init();
    }

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}