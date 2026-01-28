import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80
      }
    }
  };

  const experiences = [
    {
      date: "09/2024 - 09/2024",
      title: "Frontend Developer",
      company: "Full Charge",
      description: [
        "Managed development projects from initial design through completion, optimizing all cross-browser and multi-platform compatibility.",
        "Work closely with programmers and clients to meet project requirements, goals, and desired functionality.",
        "Provide site-wide promotions by programming HTML5 canvases to animate particles on web backgrounds."
      ]
    }
  ];

  const education = [
    {
      date: "Present",
      institution: "SAGE University, Bhopal",
      degree: "B.tech, Full Stack Development",
      score: "8.5",
      scoreLabel: "CGPA"
    },
    {
      date: "2020",
      institution: "N.H College, Bramhapuri",
      degree: "12th, Computer Science",
      score: "65",
      scoreLabel: "Percentage"
    },
    {
      date: "2018",
      institution: "L.M.B Public School, Bramhapuri",
      degree: "10th, SSC",
      score: "80",
      scoreLabel: "Percentage"
    }
  ];

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="experience-subtitle">Journey & Credentials</div>
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="experience-content">
          {/* Experience Section */}
          <motion.div
            className="experience-section"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="section-heading">
              <span className="heading-icon">🏁</span>
              Work Experience
            </h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  variants={itemVariants}
                >
                  <div className="timeline-date">{exp.date}</div>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-subtitle">{exp.company}</div>
                  <div className="timeline-description">
                    <ul>
                      {exp.description.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            className="education-section"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="section-heading">
              <span className="heading-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item education-item"
                  variants={itemVariants}
                >
                  <div className="education-details">
                    <div className="timeline-date">{edu.date}</div>
                    <h4 className="timeline-title">{edu.institution}</h4>
                    <div className="timeline-subtitle">{edu.degree}</div>
                  </div>
                  <div className="education-score">
                    <span className="odometer">{edu.score}</span>
                    <span className="education-score-label">{edu.scoreLabel}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
