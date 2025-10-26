// components/Experience.js
import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Texhbox Lab",
      period: "2025 - Present",
      type: "Remote",
      description: [
        "Develop and maintain full-stack web applications using React, TypeScript, and Next.js",
        "Design and implement robust back-end services and APIs using Node.js, Express, and Apollo GraphQL",
        "Manage and optimize database systems including PostgreSQL and MySQL",
        "Lead feature development from conception to deployment",
        "Mentor junior developers and conduct code reviews"
      ]
    },
    {
      title: "Junior Developer Intern",
      company: "Syllabux",
      period: "2024 - 2025",
      type: "Internship",
      description: [
        "Assisted in development of front-end components using HTML, CSS, JavaScript, and jQuery",
        "Gained hands-on experience with React.js and contributed to building user interfaces",
        "Supported back-end team by writing basic API endpoints and performing database operations",
        "Participated in Agile sprints, daily stand-ups, and team code reviews"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-company">
                  <strong>{exp.company}</strong>
                  <span className="job-type">{exp.type}</span>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;