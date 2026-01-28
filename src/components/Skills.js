import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  const skillGears = [
    {
      title: "Frontend Engine",
      description: "Building high-performance user interfaces with modern frameworks",
      skills: ["React", "JavaScript ES6", "HTML5", "CSS3", "Hooks", "Context API"]
    },
    {
      title: "Backend Transmission",
      description: "Powering applications with robust server-side architecture",
      skills: ["Node.js", "Express", "REST APIs", "MicroServices"]
    },
    {
      title: "Development Tools",
      description: "Optimizing workflow with cutting-edge development practices",
      skills: ["DOM Manipulation", "Git", "MicroFrontend", "Team Management"]
    }
  ];

  const performanceMetrics = [
    "Frontend Development",
    "Backend Development",
    "MERN Stack",
    "API Integration",
    "Team Collaboration"
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-subtitle">Technical Arsenal</div>
          <h2 className="section-title">Skills & Gears</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillGears.map((gear, index) => (
            <motion.div
              key={index}
              className="skill-gear"
              variants={itemVariants}
            >
              <div className="skill-gear-icon">
                <svg className="gear-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L14.5 7L20 8L16 12L17 18L12 15L7 18L8 12L4 8L9.5 7L12 2Z"/>
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 8.5L12.5 10L14 10.5L12.5 11L12 12.5L11.5 11L10 10.5L11.5 10L12 8.5Z"/>
                </svg>
              </div>
              <h3 className="skill-gear-title">{gear.title}</h3>
              <p className="skill-gear-description">{gear.description}</p>
              <div className="skill-tags">
                {gear.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="performance-meter"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="performance-meter-title">Performance Metrics</h3>
          <div className="performance-list">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="performance-item"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {metric}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
