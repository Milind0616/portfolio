import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b67012ed-b28a-427b-a4d0-2f81b39a6f0d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      setResult("Error sending message. Please try again.");
      console.error("Error", data);
    }
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80
      }
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'randivemilind1@gmail.com',
      link: 'mailto:ranvdivemilind@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '7219887125',
      link: 'tel:7219887125'
    },
    {
      icon: '🔗',
      label: 'LinkedIn',
      value: 'www.linkedin.com/in/milind-randive-2a3932299',
      link: 'https://www.linkedin.com/in/milind-randive-2a3932299'
    },
    {
      icon: '🌐',
      label: 'Website',
      value: 'www.github.com',
      link: 'https://www.github.com/milind0616'
    }
  ];

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-subtitle">Let's Connect</div>
          <h2 className="section-title">Contact & Finish Line</h2>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="contact-text">
              Ready to accelerate your project? Let's collaborate and build something extraordinary together.
              Feel free to reach out through any of the channels below.
            </motion.p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                >
                  <div className="contact-item">
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-item-details">
                      <div className="contact-item-label">{info.label}</div>
                      <div className="contact-item-value">{info.value}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  required
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="form-submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {result === "Sending...." ? result : "Send Message"}
              </motion.button>
              
              {result && result !== "Sending...." && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`form-result ${result.includes('Success') ? 'success' : 'error'}`}
                >
                  {result}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/milind-randive-2a3932299"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            💼
          </motion.a>
          <motion.a
            href="https://github.com/milind0616"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            💻
          </motion.a>
          <motion.a
            href="mailto:randivemilind1@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ✉️
          </motion.a>
          {/* <motion.a
            href="https://www.milind0616.github/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            🌐
          </motion.a> */}
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="footer-text">
            Engineered with <span>passion</span> by Milind Randive © 2026
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
