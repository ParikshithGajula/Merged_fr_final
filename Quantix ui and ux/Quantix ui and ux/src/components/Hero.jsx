import { motion } from 'framer-motion';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      {/* Abstract quantum circuit decoration */}
      <div className="hero__decoration">
        <div className="hero__ring hero__ring--1" />
        <div className="hero__ring hero__ring--2" />
        <div className="hero__ring hero__ring--3" />
        <div className="hero__orbit-dot hero__orbit-dot--1" />
        <div className="hero__orbit-dot hero__orbit-dot--2" />
        <div className="hero__orbit-dot hero__orbit-dot--3" />
      </div>

      <div className="hero__glow hero__glow--left" />
      <div className="hero__glow hero__glow--right" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="hero__badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="hero__badge-dot" />
            <span>Quantum-Powered Optimization</span>
          </motion.div>

          <h1 className="hero__title">
            Optimization at{' '}
            <span className="hero__title-gradient">Quantum Scale</span>
          </h1>

          <p className="hero__subtitle">
            Quantix Systems combines <strong>Quantum Algorithms</strong> and{' '}
            <strong>Agentic AI</strong> to solve the world's hardest logistics,
            supply chain, and financial optimization problems.
          </p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary hero__btn">
              Request Demo
              <HiArrowRight />
            </a>
            <a href="#technology" className="btn btn-secondary hero__btn">
              Explore Technology
            </a>
          </motion.div>

          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="hero__stat">
              <span className="hero__stat-value">100x</span>
              <span className="hero__stat-label">Faster Optimization</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">$2.4B+</span>
              <span className="hero__stat-label">Costs Optimized</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">99.7%</span>
              <span className="hero__stat-label">Solution Accuracy</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__visual-inner">
            {/* Quantum circuit visualization */}
            <svg className="hero__circuit" viewBox="0 0 400 400" fill="none">
              {/* Central quantum node */}
              <circle cx="200" cy="200" r="8" fill="#00f0ff" className="hero__circuit-pulse" />
              <circle cx="200" cy="200" r="30" stroke="#00b4ff" strokeWidth="0.5" opacity="0.3" className="hero__circuit-ring" />
              <circle cx="200" cy="200" r="60" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" />
              <circle cx="200" cy="200" r="100" stroke="#00f0ff" strokeWidth="0.3" opacity="0.15" />
              <circle cx="200" cy="200" r="150" stroke="#6366f1" strokeWidth="0.3" opacity="0.1" />

              {/* Connection lines */}
              <line x1="200" y1="200" x2="100" y2="100" stroke="url(#line-grad)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="300" y2="100" stroke="url(#line-grad)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="100" y2="300" stroke="url(#line-grad-2)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="300" y2="300" stroke="url(#line-grad-2)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="200" y2="60" stroke="url(#line-grad)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="340" y2="200" stroke="url(#line-grad-2)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="200" y2="340" stroke="url(#line-grad)" strokeWidth="1" opacity="0.4" />
              <line x1="200" y1="200" x2="60" y2="200" stroke="url(#line-grad-2)" strokeWidth="1" opacity="0.4" />

              {/* Outer nodes */}
              <circle cx="100" cy="100" r="5" fill="#8b5cf6" className="hero__node" />
              <circle cx="300" cy="100" r="5" fill="#00b4ff" className="hero__node" />
              <circle cx="100" cy="300" r="4" fill="#00f0ff" className="hero__node" />
              <circle cx="300" cy="300" r="5" fill="#a855f7" className="hero__node" />
              <circle cx="200" cy="60" r="4" fill="#6366f1" className="hero__node" />
              <circle cx="340" cy="200" r="4" fill="#00f0ff" className="hero__node" />
              <circle cx="200" cy="340" r="4" fill="#8b5cf6" className="hero__node" />
              <circle cx="60" cy="200" r="4" fill="#00b4ff" className="hero__node" />

              {/* Secondary connections */}
              <line x1="100" y1="100" x2="300" y2="100" stroke="#00b4ff" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
              <line x1="100" y1="300" x2="300" y2="300" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
              <line x1="100" y1="100" x2="100" y2="300" stroke="#00f0ff" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
              <line x1="300" y1="100" x2="300" y2="300" stroke="#a855f7" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />

              {/* Data flow particles (animated via CSS) */}
              <circle r="2" fill="#00f0ff" className="hero__data-particle hero__data-particle--1">
                <animateMotion dur="3s" repeatCount="indefinite" path="M200,200 L100,100" />
              </circle>
              <circle r="2" fill="#8b5cf6" className="hero__data-particle hero__data-particle--2">
                <animateMotion dur="4s" repeatCount="indefinite" path="M200,200 L300,300" />
              </circle>
              <circle r="2" fill="#00b4ff" className="hero__data-particle hero__data-particle--3">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M200,200 L340,200" />
              </circle>

              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00b4ff" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="line-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#00f0ff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Floating labels */}
            <div className="hero__float-label hero__float-label--1">Quantum</div>
            <div className="hero__float-label hero__float-label--2">AI Agent</div>
            <div className="hero__float-label hero__float-label--3">Optimizer</div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll to explore</span>
        <HiChevronDown className="hero__scroll-arrow" />
      </motion.a>
    </section>
  );
};

export default Hero;
