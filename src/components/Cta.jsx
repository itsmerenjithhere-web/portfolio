import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <section className="section cta" id="cta">
      <div className="container cta-container reveal">
        <h2 className="text-display-xl cta-title">
          <div>LET'S CREATE</div>
          <div>SOMETHING</div>
          <div style={{ color: 'var(--accent-mint)' }}>ICONIC</div>
        </h2>
        
        <a href="mailto:itsmerenjithhere@gmail.com" className="cta-email btn-outline text-body-lg">
          itsmerenjithhere@gmail.com
        </a>

        <div className="cta-socials text-label-caps">
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
