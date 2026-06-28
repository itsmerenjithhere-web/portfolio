import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo-link">
          <img src="/assets/white.png" alt="Renjith M Nair" className="header-logo" />
        </a>
        
        <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#works" className="text-label-caps" onClick={() => setMobileMenuOpen(false)}>Works</a></li>
            <li><a href="#clients" className="text-label-caps" onClick={() => setMobileMenuOpen(false)}>Clients</a></li>
            <li><a href="#about" className="text-label-caps" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#socials" className="text-label-caps" onClick={() => setMobileMenuOpen(false)}>Socials</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+919744704918" className="btn-outline text-label-caps">Book a Call</a>
          
          <button className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
