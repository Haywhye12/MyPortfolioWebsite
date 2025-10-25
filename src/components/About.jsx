// components/About.js
import React from 'react';
import './About.css';
import professionalPhoto from '../assets/proffessional-photo.png';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
              My journey in web development started during my National Diploma in Statistics, where I discovered my love 
              for problem-solving and creating digital solutions.
            </p>
            <p>
              Currently pursuing my degree in Economics while working as a Senior Developer, I bring a unique perspective 
              to development projects, combining technical expertise with analytical thinking. I thrive in remote 
              environments and enjoy collaborating with teams to build innovative applications.
            </p>
            <p>
              When I'm not coding, I'm constantly learning new technologies and working on personal projects that 
              challenge my skills and expand my knowledge in the ever-evolving tech landscape.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
           <div className="image-placeholder">
              <img src={professionalPhoto} alt="Ayomide Bobani" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;