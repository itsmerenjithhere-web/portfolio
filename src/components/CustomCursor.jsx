import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Observe hover on interactive elements
    const addHoverListeners = () => {
      const elements = document.querySelectorAll('a, button, .work-card, .client-img-wrapper, .filter-btn, .btn-outline, .badge');
      elements.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
      return elements;
    };

    // Use MutationObserver to handle dynamically added elements
    let elements = addHoverListeners();
    const observer = new MutationObserver(() => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      elements = addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      observer.disconnect();
    };
  }, [isVisible]);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: isHovering ? '56px' : '40px',
          height: isHovering ? '56px' : '40px',
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'var(--accent-mint)' : 'rgba(255,255,255,0.3)'}`,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, left 0.08s ease-out, top 0.08s ease-out',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: isVisible ? 1 : 0,
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: isHovering ? '6px' : '4px',
          height: isHovering ? '6px' : '4px',
          borderRadius: '50%',
          backgroundColor: isHovering ? 'var(--accent-mint)' : '#fff',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, background-color 0.3s ease',
          pointerEvents: 'none',
          zIndex: 10001,
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
