// components/Education.js
import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Economics",
      institution: "National Open University of Nigeria (NOUN)",
      period: "2020 - Present",
      status: "400 Level",
      description: "Currently pursuing degree with focus on economic analysis and data interpretation"
    },
    {
      degree: "National Diploma in Statistics",
      institution: "Lagos State Polytechnic, Ikorodu",
      period: "2016 - 2018",
      status: "Completed",
      description: "Specialized in statistical analysis, data interpretation, and research methodology"
    },
    {
      degree: "Secondary School Certificate",
      institution: "Christ Life College",
      period: "2010 - 2016",
      status: "Completed",
      description: ""
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <span className="education-status">{edu.status}</span>
              </div>
              <div className="education-institution">
                <strong>{edu.institution}</strong>
                <span className="education-period">{edu.period}</span>
              </div>
              {edu.description && (
                <p className="education-description">{edu.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;