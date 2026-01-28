import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15
      }
    }
  };

  const projects = [
    {
      title: "Banking System",
      description: "Full-stack banking system application where users can create accounts, credit money, withdraw money, and manage transactions. Also includes user account control features.",
      tech: ["React", "TailwindCSS", "MongoDB", "Node.js"],
      icon: "💳",
      github: "https://github.com/Milind0616/Banking-app",
      demo: "https://github.com/Milind0616/Banking-app",
      stats: { speed: "Fast", complexity: "High" }
    },
    {
      title: "Schedule App",
      description: "Service provider application for both clients and providers. Enables seamless scheduling and appointment management between service providers and their clients.",
      tech: ["React", "TailwindCSS", "MongoDB", "Node.js"],
      icon: "📅",
      github: "https://github.com/Milind0616/schedule-app",
      demo: "https://github.com/Milind0616/schedule-app",
      stats: { speed: "Fast", complexity: "Medium" }
    },
    {
      title: "Portfolio Site",
      description: "Personal portfolio website showcasing projects with animations and engaging user experience. Features BMW-themed design with automotive luxury aesthetics.",
      tech: ["React", "Framer Motion", "CSS3"],
      icon: "🚗",
      github: "https://www.linkedin.com/in/mlind-randive-2a393289",
      demo: "https://www.nullclass.com/",
      stats: { speed: "Blazing", complexity: "Medium" }
    }
  ];

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="projects-subtitle">Featured Work</div>
          <h2 className="section-title">Projects Showroom</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="speed-lines">
                <div className="speed-line"></div>
                <div className="speed-line"></div>
                <div className="speed-line"></div>
                <div className="speed-line"></div>
              </div>

              <div className="project-header">
                <div className="project-icon">{project.icon}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="GitHub"
                    >
                      ⚡
                    </motion.button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      title="Live Demo"
                    >
                      🔗
                    </motion.button>
                  </a>
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-stats">
                <div className="project-stat">
                  <span className="project-stat-value">{project.stats.speed}</span>
                  <span className="project-stat-label">Performance</span>
                </div>
                <div className="project-stat">
                  <span className="project-stat-value">{project.stats.complexity}</span>
                  <span className="project-stat-label">Complexity</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
