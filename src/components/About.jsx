import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-content">
          <h2 className="text-display-xl about-title reveal">About</h2>
          <p className="text-body-lg about-text reveal delay-1">
            Hi, I'm <span className="highlight-orange">Renjith M Nair</span>.<br/><br/>
            A Creative Visual Designer with 5+ years of experience in <span className="highlight-teal">motion graphics</span>, <span className="highlight-purple">branding</span>, <span className="highlight-teal">video editing</span>, and <span className="highlight-orange">AI-powered creative workflows</span>. I create engaging visual experiences that blend creativity, storytelling, and technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
