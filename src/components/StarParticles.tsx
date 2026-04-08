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
      
      // 1. 绘制外层淡淡的扩散晕染 (增加柔和感)
      const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 2.5);
      // 将光晕颜色也稍微带一点点紫/蓝调 (e.g., #E6E6FA for white, #FFDAB9 for gold)
      glow.addColorStop(0, colorType === 'gold' ? 'rgba(255, 218, 185, 0.25)' : 'rgba(230, 230, 250, 0.15)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, size * 2.5, 0, Math.PI * 2);
      ctx.fill();

      // 2. 绘制十字星芒 (使用 #EFEFFF 代替纯白，增加高级感)
      ctx.beginPath();
      ctx.strokeStyle = colorType === 'gold' ? '#FFD700' : '#EFEFFF'; 
      ctx.lineWidth = size * 0.22;
      ctx.moveTo(x - size * 2.3, y);
      ctx.lineTo(x + size * 2.3, y);
      ctx.moveTo(x, y - size * 2.3);
      ctx.lineTo(x, y + size * 2.3);
      ctx.stroke();

      // 3. 核心亮点
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = colorType === 'gold' ? '#FFFACD' : '#FFFFFF';
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
        this.size = Math.random() * 1.3 + 1.2;
        this.speedX = (Math.random() - 0.5) * 0.03;
        this.speedY = (Math.random() - 0.5) * 0.03;
        this.seed = Math.random() * 100;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const time = Date.now() * 0.002; 
        const base = (Math.sin(time + this.seed) + 1) / 2; 
        
        // 保留微颤
        const microTwinkle = Math.random() > 0.98 ? Math.random() * 0.2 : 0;
        this.opacity = base * 0.8 + microTwinkle;

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
        this.size = Math.random() * 1.5 + 2.0;
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
      const totalCount = Math.floor((width * height) / 15000); // 保持少而精
      for (let i = 0; i < totalCount; i++) {
        if (Math.random() > 0.85) {
          stars.push(new GoldStar());
        } else {
          stars.push(new Star());
        }
      }
    }

    function animate() {
      if (!ctx) return;
      
      // 1. 清空画布
      ctx.clearRect(0, 0, width, height);

      // --- 核心优化: 绘制深邃紫色“调色滤镜” ---
      ctx.save();
      
      // 使用 destination-over 确保这层紫色在星星“后面”
      // 并且会与 layout 的背景图叠加
      ctx.globalCompositeOperation = 'destination-over';
      
      // 创建径向渐变，从中心淡淡的紫色过渡到边缘的极深紫黑
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, Math.max(width, height) / 1.5);
      
      // 增加深紫色感：
      // 中心使用淡淡的、带透明度的薰衣草紫 (#E6E6FA @ 0.05)
      bgGradient.addColorStop(0, 'rgba(230, 230, 250, 0.05)'); 
      // 边缘过渡到极深的、带透明度的暗紫 (#080110 @ 0.3)
      bgGradient.addColorStop(1, 'rgba(8, 1, 16, 0.3)'); 
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);
      
      ctx.restore(); // 恢复正常的混合模式，用于绘制星星

      // 2. 绘制星星
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
        // --- 调整 1: 移除 CSS 背景色，让其变透明 ---
        background: 'transparent', 
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}