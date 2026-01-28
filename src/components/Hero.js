import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        stiffness: 100,
        damping: 12
      }
    }
  };

  const titleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section id="home" className="hero section">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-subtitle">
          Full Stack Developer
        </motion.div>

        <motion.h1 variants={titleVariants} className="hero-title">
          Milind Randive
        </motion.h1>

        <motion.div variants={itemVariants} className="hero-role">
          Engineering Performance & Innovation
        </motion.div>

        <motion.p variants={itemVariants} className="hero-description">
          Crafting high-performance web applications with the precision of automotive engineering.
          Specialized in React, Node.js, and full-stack architecture that accelerates from 0 to deployment.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-cta">
          <a href="#projects">
            <motion.button
              className="cta-button primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </a>
          <a href="#contact">
            <motion.button
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Month Experience (internship)</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8.5</span>
            <span className="stat-label">Academic CGPA</span>
          </div>
          <div className="stat-item">
            <span className="stat-number"></span>
            <span className="stat-label"></span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
