import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './BMWBackground.css';

const BMWBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bmw-background">
      {/* BMW Car Silhouette */}
      <motion.div
        className="bmw-car"
        animate={{
          left: `${-20 + (scrollY * 0.05)}%`,
          opacity: Math.max(0.15 - (scrollY * 0.0001), 0.05)
        }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* BMW Car Silhouette - Sleek Sports Car */}
          <path
            d="M50 200 L100 150 L150 120 L250 110 L400 110 L500 120 L600 150 L700 180 L750 200 L750 220 L700 230 L650 240 L600 245 L200 245 L150 240 L100 230 L50 220 Z"
            fill="url(#carGradient)"
            stroke="var(--color-metallic-silver)"
            strokeWidth="2"
          />
          {/* Windshield */}
          <path
            d="M250 120 L300 130 L350 130 L380 120"
            stroke="var(--color-accent-blue)"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
          />
          {/* Front Wheel */}
          <circle cx="250" cy="235" r="30" fill="var(--color-darker-bg)" stroke="var(--color-metallic-silver)" strokeWidth="3"/>
          <circle cx="250" cy="235" r="15" fill="var(--color-sharp-red)" opacity="0.3"/>
          {/* Rear Wheel */}
          <circle cx="600" cy="235" r="30" fill="var(--color-darker-bg)" stroke="var(--color-metallic-silver)" strokeWidth="3"/>
          <circle cx="600" cy="235" r="15" fill="var(--color-sharp-red)" opacity="0.3"/>
          {/* Headlight */}
          <ellipse cx="680" cy="170" rx="15" ry="8" fill="var(--color-accent-blue)" opacity="0.8">
            <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
          </ellipse>
          
          <defs>
            <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-deep-blue)" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="var(--color-metallic-silver)" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="var(--color-deep-blue)" stopOpacity="0.6"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Light Beam */}
      <div className="light-beam"></div>

      {/* Speedometer */}
      <div className="speedometer">
        <div className="speedometer-needle"></div>
      </div>

      {/* Road Lines */}
      <div className="road-line"></div>
      <div className="road-line" style={{ bottom: '25%', animationDelay: '-1.5s' }}></div>
    </div>
  );
};

export default BMWBackground;
