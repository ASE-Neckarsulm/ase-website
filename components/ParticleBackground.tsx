import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Streamline Configuration
    class Streamline {
      x: number;
      y: number;
      speed: number;
      length: number;
      thickness: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = Math.random() * 4 + 2; // Faster speed for "automotive" feel
        this.length = Math.random() * 150 + 50;
        this.thickness = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        
        // Automotive/Tech palette: Blue, Cyan, White
        const colors = ['#3b82f6', '#60a5fa', '#ffffff', '#93c5fd'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speed;
        
        // Reset when off screen
        if (this.x > width + this.length) {
          this.x = -this.length;
          this.y = Math.random() * height;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Draw the line with a gradient for a "motion trail" effect
        const gradient = ctx.createLinearGradient(this.x - this.length, this.y, this.x, this.y);
        gradient.addColorStop(0, 'rgba(0,0,0,0)'); // Fade tail
        gradient.addColorStop(1, this.color); // Bright head
        
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = 'round';
        ctx.moveTo(this.x - this.length, this.y);
        
        // Add a very slight sine wave to simulate aerodynamics/fluid dynamics
        // We only curve the path slightly, but for high-speed look, straight lines with varying opacity are best
        // Let's stick to straight lines for the "Wind Tunnel" look
        ctx.lineTo(this.x, this.y);
        
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    }

    const count = Math.min(width / 10, 150); // Adjust count based on screen width
    const lines: Streamline[] = [];
    
    for (let i = 0; i < count; i++) {
      lines.push(new Streamline());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      lines.forEach(line => {
        line.update();
        line.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="block w-full h-full"
    />
  );
};

export default ParticleBackground;