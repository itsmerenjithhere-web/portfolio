import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Hero from './components/Hero';
import Works from './components/Works';
import Clients from './components/Clients';
import Cta from './components/Cta';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Works />
      <Clients />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
