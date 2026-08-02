import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import './Projects.css';

const ProjectCardContent = ({ project }) => (
  <>
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
  </>
);

const ProjectCard = ({ project, variants, className }) => (
  <motion.div
    className={`project-card ${className || ''}`.trim()}
    variants={variants}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 80, damping: 15 }}
  >
    <ProjectCardContent project={project} />
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // ---------- Internship Slider Logic ----------
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);
  const dragStart = useRef({ x: 0, left: 0 });

  const updateArrows = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows]);

  const scrollSlider = (direction) => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.querySelector('.slider-card');
    const cardWidth = card ? card.offsetWidth + 32 : 400;
    el.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  const startDrag = (e) => {
    draggingRef.current = true;
    dragStart.current = { x: e.pageX, left: sliderRef.current.scrollLeft };
    setDragging(true);
  };

  const onDrag = (e) => {
    if (!draggingRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - dragStart.current.x) * 1.5;
    sliderRef.current.scrollLeft = dragStart.current.left - walk;
  };

  const endDrag = () => {
    draggingRef.current = false;
    setDragging(false);
  };

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

  // ---------- My Projects (First 3) ----------
  const personalProjects = [
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

  // ---------- Internship Projects (Done During Internship) ----------
  const internshipProjects = [
    {
      title: "Food Delivery Website",
      description: "Modern food delivery website with a sleek design and seamless user experience. Features BMW-themed design with automotive luxury aesthetics.",
      tech: ["React", "Framer Motion", "CSS3"],
      icon: "🍔",
      github: "https://www.linkedin.com/in/mlind-randive-2a393289",
      demo: "https://www.nullclass.com/",
      stats: { speed: "Blazing", complexity: "Medium" }
    },
    {
      title: "Graphura Portfolio Website",
      description: "A portfolio website for Graphura, showcasing their projects and services with a modern design and interactive elements.",
      tech: ["React", "Framer Motion", "CSS3"],
      icon: "🎨",
      github: "https://www.linkedin.com/in/mlind-randive-2a393289",
      demo: "https://www.nullclass.com/",
      stats: { speed: "Blazing", complexity: "Medium" }
    },
    {
      title: "Graphura Task Management System",
      description: "A task management system for Graphura, enabling efficient project tracking and collaboration.",
      tech: ["React", "Framer Motion", "CSS3"],
      icon: "📋",
      github: "https://www.linkedin.com/in/mlind-randive-2a393289",
      demo: "https://www.nullclass.com/",
      stats: { speed: "Blazing", complexity: "Medium" }
    },
    {
      title: "Flutter flirt Business Document Verification Portal",
      description: "A business document verification portal built with Flutter, providing a secure and efficient way to verify business documents.",
      tech: ["React", "Framer Motion", "CSS3"],
      icon: "📄",
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
          <h2 className="section-title">Projects Showroom</h2>
          <div className="projects-subtitle">Personal Projects</div>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {personalProjects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={itemVariants} />
          ))}
        </motion.div>

        {/* ============ Internship Projects Slider Section ============ */}
        <div className="internship-section">
          <motion.div
            className="internship-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="projects-subtitle-internship">Internship Projects</div>
              <h3 className="internship-heading">Projects Built During Internship</h3>
            </div>
            <div className="slider-arrows">
              <motion.button
                className={`slider-arrow${canScrollLeft ? '' : ' slider-arrow-disabled'}`}
                onClick={() => scrollSlider(-1)}
                whileHover={{ scale: canScrollLeft ? 1.1 : 1 }}
                whileTap={{ scale: canScrollLeft ? 0.9 : 1 }}
                disabled={!canScrollLeft}
                title="Previous Projects"
                aria-label="Previous Projects"
              >
                ‹
              </motion.button>
              <motion.button
                className={`slider-arrow${canScrollRight ? '' : ' slider-arrow-disabled'}`}
                onClick={() => scrollSlider(1)}
                whileHover={{ scale: canScrollRight ? 1.1 : 1 }}
                whileTap={{ scale: canScrollRight ? 0.9 : 1 }}
                disabled={!canScrollRight}
                title="Next Projects"
                aria-label="Next Projects"
              >
                ›
              </motion.button>
            </div>
          </motion.div>

          <div
            className={`projects-slider${dragging ? ' dragging' : ''}`}
            ref={sliderRef}
            onScroll={updateArrows}
            onMouseDown={startDrag}
            onMouseMove={onDrag}
            onMouseUp={endDrag}
            onMouseLeave={endDrag}
          >
            {internshipProjects.map((project, index) => (
              <ProjectCard key={index} project={project} className="slider-card" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

