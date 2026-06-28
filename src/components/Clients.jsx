import React, { useState } from 'react';
import { clientsData } from '../clientsData';
import ImageModal from './ImageModal';
import './Clients.css';

const Clients = () => {
  const [activeClient, setActiveClient] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  // Extract unique clients
  const clientNames = ['all', ...new Set(clientsData.map(c => c.client))];

  const filteredImages = activeClient === 'all'
    ? clientsData
    : clientsData.filter(c => c.client === activeClient);

  return (
    <section className="section clients" id="clients">
      <div className="container">
        <div className="clients-header reveal">
          <h2 className="text-display-xl clients-title">Creative</h2>
          <h2 className="text-accent-italic clients-subtitle" style={{ color: 'var(--accent-orange)' }}>Partners</h2>
          
          <p className="text-body-lg clients-desc">
            A visual showcase of brand identities, marketing collateral, and creative campaigns designed for diverse clients.
          </p>
        </div>

        <div className="clients-filters">
          {clientNames.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn text-label-caps ${activeClient === cat ? 'active' : ''}`}
              onClick={() => setActiveClient(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="clients-masonry">
          {filteredImages.map((imgData, index) => (
            <div 
              key={imgData.id} 
              className="client-img-wrapper reveal"
              onClick={() => {
                setModalIndex(index);
                setModalOpen(true);
              }}
              style={{ cursor: 'pointer' }}
            >
              <img src={imgData.image} alt={imgData.client} loading="lazy" />
              <div className="client-img-overlay">
                <span className="text-label-caps">{imgData.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ImageModal 
        isOpen={modalOpen} 
        images={filteredImages}
        initialIndex={modalIndex}
        onClose={() => setModalOpen(false)} 
      />
    </section>
  );
};

export default Clients;
