import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="socials">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/assets/white.png" alt="Renjith M Nair" className="footer-logo-img" />
            <p className="text-body-lg footer-bio">
              Creative Visual Designer merging aesthetics with functionality to create timeless digital products. Based in Kumily, Idukki, available worldwide.
            </p>
            <div className="footer-links text-label-caps">
         <a href="https://www.behance.net/itsrenjith" target="_blank" rel="noopener noreferrer">Behance</a>
        <a href="https://www.linkedin.com/in/renjith-muraleedharan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://vimeo.com/user98693260" target="_blank" rel="noopener noreferrer">Vimeo</a>
            </div>
          </div>
          
          <div className="footer-contact">
            <span className="text-label-caps contact-label">Contact</span>
            <a href="mailto:itsmerenjithhere@gmail.com" className="contact-email text-headline-lg">
              itsmerenjithhere@gmail.com
            </a>
            <p className="contact-phone text-body-lg">+91 9744704918</p>
            <p className="copyright text-body-lg">
              © 2026 Renjith M Nair.
            </p>
            <p className="credits text-body-lg" style={{ marginTop: '8px', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Designed by Renjith using Antigravity
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="#ffb68b"/>
              </svg>
            </p>
            
            <a 
              href="/assets/Renjith M Nair_resume 2026 .pdf" 
              download 
              className="btn-outline text-label-caps resume-btn"
              style={{ marginTop: '24px' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
