// components/Hero.js
import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-section-bk.png';
const Hero = () => {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ayomide Bobani</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I create digital experiences that are fast, scalable, and user-friendly. 
              Specialized in React, Node.js, and modern web technologies.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View My Work</a>
            </div>
          </div>
        {/*   <div className="hero-image">
            <div className="image-placeholder">
              <img src={professionalPhoto} alt="Ayomide Bobani" />
            </div>
          </div> */}
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
