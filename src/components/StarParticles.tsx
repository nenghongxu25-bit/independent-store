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
    let stars: (Star | GoldStar)[] = [];
    let width: number, height: number;

    function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, opacity: number, colorType: 'white' | 'gold') {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // 1. 绘制外层淡淡的扩散晕染（白底版：更淡）
      const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 2.0);
      glow.addColorStop(0, colorType === 'gold' ? 'rgba(212, 175, 55, 0.15)' : 'rgba(180, 180, 200, 0.1)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, size * 2.0, 0, Math.PI * 2);
      ctx.fill();

      // 2. 绘制十字星芒（白底版：更细更淡）
      ctx.beginPath();
      ctx.strokeStyle = colorType === 'gold' ? 'rgba(212, 175, 55, 0.4)' : 'rgba(150, 150, 170, 0.3)'; 
      ctx.lineWidth = size * 0.15;
      ctx.moveTo(x - size * 1.8, y);
      ctx.lineTo(x + size * 1.8, y);
      ctx.moveTo(x, y - size * 1.8);
      ctx.lineTo(x, y + size * 1.8);
      ctx.stroke();

      // 3. 核心亮点（白底版：更小更淡）
      ctx.beginPath();
      ctx.arc(x, y, size * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = colorType === 'gold' ? 'rgba(212, 175, 55, 0.5)' : 'rgba(200, 200, 220, 0.4)';
      ctx.fill();
      
      ctx.restore();
    }

    class Star {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      seed: number;
      opacity: number = 0;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.0 + 0.8;  // 更小
        this.speedX = (Math.random() - 0.5) * 0.02;
        this.speedY = (Math.random() - 0.5) * 0.02;
        this.seed = Math.random() * 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const time = Date.now() * 0.001;  // 更慢的闪烁
        const base = (Math.sin(time + this.seed) + 1) / 2; 
        
        // 白底版：透明度范围 0.1 - 0.4，更淡
        this.opacity = base * 0.3 + 0.1;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        if (this.opacity < 0.05) return; 
        drawStar(ctx!, this.x, this.y, this.size, this.opacity, 'white');
      }
    }

    class GoldStar extends Star {
      constructor() {
        super();
        this.size = Math.random() * 1.2 + 1.0;
      }
      draw() {
        if (this.opacity < 0.05) return;
        drawStar(ctx!, this.x, this.y, this.size, this.opacity, 'gold');
      }
    }

    function init() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;

      stars = [];
      // 白底版：星星数量减少 30%
      const totalCount = Math.floor((width * height) / 20000);
      for (let i = 0; i < totalCount; i++) {
        if (Math.random() > 0.9) {
          stars.push(new GoldStar());
        } else {
          stars.push(new Star());
        }
      }
    }

    function animate() {
      if (!ctx) return;
      
      // 清空画布（完全透明，不添加任何颜色滤镜）
      ctx.clearRect(0, 0, width, height);

      // 绘制星星
      for (const star of stars) {
        star.update();
        star.draw();
      }
      
      animationId = requestAnimationFrame(animate);
    }

    const handleResize = () => init();
    const handleVisibilityChange = () => {
      if (!document.hidden) animate();
      else cancelAnimationFrame(animationId);
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

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
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}