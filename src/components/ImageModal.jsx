import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageModal.css';

const ImageModal = ({ images, initialIndex, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images]);

  if (!isOpen || !images || images.length === 0) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return createPortal(
    <div className="img-modal-overlay" onClick={onClose}>
      <div className="img-modal-nav left" onClick={prevImage}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      
      <div className="img-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img 
          className="modal-img" 
          src={images[currentIndex].image} 
          alt={images[currentIndex].client} 
        />
      </div>

      <div className="img-modal-nav right" onClick={nextImage}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;
