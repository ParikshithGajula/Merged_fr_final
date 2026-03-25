import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiLightningBolt, HiCube, HiChip, HiGlobe } from 'react-icons/hi';
import './About.css';

const capabilities = [
  {
    icon: <HiCube />,
    title: 'Quantum Optimization Models',
    desc: 'Leverage quantum annealing and gate-based algorithms to discover globally optimal solutions for NP-hard combinatorial problems.',
    color: '#00f0ff',
  },
  {
    icon: <HiLightningBolt />,
    title: 'QUBO Formulation Engines',
    desc: 'Automatically convert real-world business constraints into Quadratic Unconstrained Binary Optimization formulations.',
    color: '#8b5cf6',
  },
  {
    icon: <HiChip />,
    title: 'Agentic AI Orchestration',
    desc: 'Autonomous AI agents that decompose complex problems, allocate quantum resources, and synthesize hybrid solutions.',
    color: '#00b4ff',
  },
  {
    icon: <HiGlobe />,
    title: 'Classical-Quantum Hybrid Engine',
    desc: 'Seamlessly blend classical solvers with quantum processors, dynamically routing sub-problems for optimal performance.',
    color: '#a855f7',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__glow" />
      <div className="container">
        <motion.div
          className="about__header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">About Quantix</span>
          <h2 className="section-title">
            Hybrid Quantum-Classical{' '}
            <span className="gradient-text">Optimization Platform</span>
          </h2>
          <p className="section-subtitle">
            Quantix Systems develops next-generation optimization platforms that transform 
            decision-making for logistics fleets, supply chains, and financial markets — 
            combining the power of quantum computing with intelligent AI orchestration.
          </p>
        </motion.div>

        <div className="about__grid">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              className="about__card glass-card"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
            >
              <div
                className="about__card-icon"
                style={{
                  background: `${cap.color}12`,
                  color: cap.color,
                  boxShadow: `0 0 20px ${cap.color}15`,
                }}
              >
                {cap.icon}
              </div>
              <h3 className="about__card-title">{cap.title}</h3>
              <p className="about__card-desc">{cap.desc}</p>
              <div
                className="about__card-glow"
                style={{ background: `radial-gradient(circle, ${cap.color}08 0%, transparent 70%)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
