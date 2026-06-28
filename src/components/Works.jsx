import React, { useState } from 'react';
import { worksData } from '../data';
import VideoModal from './VideoModal';
import './Works.css';

const Works = () => {
  const [filter, setFilter] = useState('all');
  const [modalVideo, setModalVideo] = useState(null);

  const categories = ['all', 'ai-videos', 'motion-graphics', 'video-edits'];

  const filteredWorks = filter === 'all' 
    ? worksData 
    : worksData.filter(work => work.category === filter);

  const getBadgeColor = (category) => {
    switch (category) {
      case 'ai-videos': return 'orange';
      case 'motion-graphics': return 'mint';
      case 'video-edits': return 'purple';
      default: return 'light';
    }
  };

  return (
    <section className="section works" id="works">
      <div className="container">
        <div className="works-header reveal">
          <h2 className="text-display-xl works-title">Selected</h2>
          <h2 className="text-accent-italic works-subtitle" style={{ color: 'var(--accent-mint)' }}>Works</h2>
          
          <p className="text-body-lg works-desc">
            A collection of visual experiments, digital experiences, and brand narratives crafted at the intersection of brutalist honesty and minimalist precision.
          </p>
        </div>

        <div className="works-filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn text-label-caps ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat.replace('-', ' ')}
            </button>
          ))}
        </div>

        <div className="works-grid">
          {filteredWorks.map(work => (
            <div 
              key={work.id} 
              className="work-card reveal"
              onClick={() => setModalVideo(work.video)}
            >
              <div className="work-img-wrapper">
                <img src={work.thumbnail} alt={work.title} loading="lazy" />
                <div className="work-overlay">
                  <span className="text-label-caps">Play Video</span>
                </div>
              </div>
              <div className="work-info">
                <h3 className="work-title">{work.title}</h3>
                <span className={`badge ${getBadgeColor(work.category)}`}>
                  {work.categoryName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <VideoModal 
        isOpen={!!modalVideo} 
        videoSrc={modalVideo} 
        onClose={() => setModalVideo(null)} 
      />
    </section>
  );
};

export default Works;
