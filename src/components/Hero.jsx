import React, { useState, useEffect } from 'react';
import DotGrid from './DotGrid';
import './Hero.css';

const Hero = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; 
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setOffset({ x: -x, y: -y }); // Inverse movement for parallax
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      <DotGrid />
      <div className="hero-content">
        <div className="hero-text text-display-xl">
          <div style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>Creative</div>
          <div style={{ transform: `translate(${-offset.x * 1.2}px, ${-offset.y * 0.8}px)` }}>Visual</div>
          <div style={{ transform: `translate(${offset.x * 0.5}px, ${-offset.y * 1.5}px)` }}>Designer</div>
        </div>
        
        <div className="hero-image-container">
          <img src="/assets/CUTOUT.png" alt="Renjith M Nair" className="hero-image" />
        </div>
        
        <div className="hero-badges">
          <div className="badge orange badge-float-1">Visual Direction</div>
          <div className="badge badge-light badge-float-2" style={{backgroundColor: '#e2e2e2', color: '#121414'}}>Digital Experience</div>
          <div className="badge mint badge-float-3">Brand Identity</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
