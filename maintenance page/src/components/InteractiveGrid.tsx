import React, { useEffect, useRef } from 'react';

const InteractiveGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // Grid configuration
    const gridSize = 40; 
    const hoverRadius = 200; // Increased radius
    const repelForce = 0.5; // How much the mouse pushes the grid
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Helper to get distorted point position
    const getPoint = (x: number, y: number) => {
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;
      
      const dx = x - mouseX;
      const dy = y - mouseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      let newX = x;
      let newY = y;
      
      // Apply repulsion if within radius
      if (distance < hoverRadius) {
        const force = (hoverRadius - distance) / hoverRadius;
        // Cubic easing for smoother dropoff
        const ease = force * force * force; 
        
        const angle = Math.atan2(dy, dx);
        const moveDistance = ease * hoverRadius * repelForce;
        
        newX += Math.cos(angle) * moveDistance;
        newY += Math.sin(angle) * moveDistance;
      }
      
      return { x: newX, y: newY };
    };

    const drawGrid = () => {
      if (!ctx || !canvas) return;
      
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // More visible grid color
      ctx.strokeStyle = 'rgba(100, 255, 218, 0.2)'; 
      ctx.lineWidth = 1;

      // We'll draw the grid by iterating cols and rows
      // We draw horizontal segments and vertical segments separately or together.
      
      const cols = Math.ceil(canvas.width / gridSize) + 1;
      const rows = Math.ceil(canvas.height / gridSize) + 1;

      ctx.beginPath();

      // Draw horizontal lines (connecting horizontally adjacent points)
      for (let j = 0; j < rows; j++) {
        const yBase = j * gridSize;
        for (let i = 0; i < cols - 1; i++) {
          const xBase = i * gridSize;
          const xNext = (i + 1) * gridSize;
          
          const p1 = getPoint(xBase, yBase);
          const p2 = getPoint(xNext, yBase);
          
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
      }
      
      // Draw vertical lines (connecting vertically adjacent points)
      for (let i = 0; i < cols; i++) {
        const xBase = i * gridSize;
        for (let j = 0; j < rows - 1; j++) {
          const yBase = j * gridSize;
          const yNext = (j + 1) * gridSize;
          
          const p1 = getPoint(xBase, yBase);
          const p2 = getPoint(xBase, yNext);
          
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
      }
      
      ctx.stroke();

      // Draw interactive highlights (Crosshair / Nodes)
       const mouseX = mouseRef.current.x;
       const mouseY = mouseRef.current.y;
       
       // Snap to nearest grid point for the highlight effect (optional, or just follow mouse)
       // Let's highlight the nearest intersection point
       const snapX = Math.round(mouseX / gridSize) * gridSize;
       const snapY = Math.round(mouseY / gridSize) * gridSize;
       
       const pSnap = getPoint(snapX, snapY);

       // Draw a glowing spot at the nearest warped grid intersection
       ctx.beginPath();
       const gradient = ctx.createRadialGradient(pSnap.x, pSnap.y, 0, pSnap.x, pSnap.y, 100);
       gradient.addColorStop(0, 'rgba(100, 255, 218, 0.4)');
       gradient.addColorStop(1, 'rgba(100, 255, 218, 0)');
       ctx.fillStyle = gradient;
       ctx.arc(pSnap.x, pSnap.y, 100, 0, Math.PI * 2);
       ctx.fill();

      animationFrameId = requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current = { 
            x: e.clientX - rect.left, 
            y: e.clientY - rect.top 
        };
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (e.touches.length > 0) {
             const rect = canvas.getBoundingClientRect();
             mouseRef.current = { 
                x: e.touches[0].clientX - rect.left, 
                y: e.touches[0].clientY - rect.top 
            };
        }
    }

    const handleLeave = () => {
        mouseRef.current = { x: -1000, y: -1000 };
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleLeave);
    window.addEventListener('mouseout', handleLeave);

    resizeCanvas();
    drawGrid();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleLeave);
      window.removeEventListener('mouseout', handleLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[-1] bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-950/80 to-black pointer-events-none" />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};

export default InteractiveGrid;
