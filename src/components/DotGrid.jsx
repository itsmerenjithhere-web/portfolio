import React, { useRef, useEffect } from 'react';

const DotGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouse = { x: -1000, y: -1000 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    const spacing = 40; 
    const baseRadius = 1.5; 
    const maxRadius = 4; 
    const interactionRadius = 200; 

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#444748'; // Dark grey

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let radius = baseRadius;
          if (distance < interactionRadius) {
            const factor = 1 - (distance / interactionRadius);
            radius = baseRadius + (maxRadius - baseRadius) * factor;
          }

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }} 
    />
  );
};

export default DotGrid;
