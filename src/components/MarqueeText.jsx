import React, { useRef, useEffect, useState } from 'react';

const MarqueeText = ({ text, speed = 50, className = '' }) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const duration = containerWidth / speed;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          animation: `marquee ${duration}s linear infinite`,
          whiteSpace: 'nowrap',
        }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} style={{ paddingRight: '80px' }}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
