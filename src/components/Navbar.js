import React from 'react';
import './Navbar.css';

const Navbar = ({ darkMode, onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-brand">
          Milind Randive
        </a>
        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#projects" className="navbar-link">Projects</a>
          <a href="#experience" className="navbar-link">Experience</a>
          <a href="#contact" className="navbar-link">Contact</a>
        </div>

        <div className="navbar-actions">
          <a
            href="/Milind_Randive_Resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark and light mode"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
