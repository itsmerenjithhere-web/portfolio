import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, strength = 0.3, className = '', style = {} }) => {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 && pos.y === 0 ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.15s ease-out',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
