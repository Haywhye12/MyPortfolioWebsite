// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Ayomide Bobani</h3>
            <p>Full Stack Developer passionate about creating amazing digital experiences.</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ayomide Bobani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;