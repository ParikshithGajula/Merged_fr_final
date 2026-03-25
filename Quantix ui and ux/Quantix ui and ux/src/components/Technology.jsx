import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiDatabase, HiCode, HiCog, HiCloud, HiShieldCheck, HiTerminal } from 'react-icons/hi';
import './Technology.css';

const techStack = [
  {
    icon: <HiCode />,
    title: 'QUBO Compiler',
    desc: 'Translates high-level optimization objectives into quantum-ready formulations in real time.',
    tag: 'Core',
    color: '#00f0ff',
  },
  {
    icon: <HiDatabase />,
    title: 'Quantum Solvers',
    desc: 'Interfaces with D-Wave, IBM Quantum, IonQ, and proprietary simulators for maximum hardware flexibility.',
    tag: 'Quantum',
    color: '#8b5cf6',
  },
  {
    icon: <HiCog />,
    title: 'Agentic Orchestrator',
    desc: 'Multi-agent AI system that decomposes problems, manages quantum resources, and adapts strategies autonomously.',
    tag: 'AI',
    color: '#00b4ff',
  },
  {
    icon: <HiCloud />,
    title: 'Cloud-Native Platform',
    desc: 'Kubernetes-native deployment with auto-scaling, multi-region availability, and enterprise SLAs.',
    tag: 'Platform',
    color: '#a855f7',
  },
  {
    icon: <HiShieldCheck />,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II compliant. End-to-end encryption, RBAC, and audit logging for regulated industries.',
    tag: 'Security',
    color: '#6366f1',
  },
  {
    icon: <HiTerminal />,
    title: 'REST & SDK APIs',
    desc: 'Python, Java, and REST APIs for seamless integration with existing enterprise systems and workflows.',
    tag: 'Developer',
    color: '#00f0ff',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Technology = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="technology" id="technology" ref={ref}>
      <div className="technology__bg-line technology__bg-line--1" />
      <div className="technology__bg-line technology__bg-line--2" />

      <div className="container">
        <motion.div
          className="technology__header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">Technology Stack</span>
          <h2 className="section-title">
            Built for the <span className="gradient-text">Quantum Era</span>
          </h2>
          <p className="section-subtitle">
            A modular, enterprise-grade technology stack that bridges quantum hardware, 
            AI agents, and classical infrastructure into a unified optimization platform.
          </p>
        </motion.div>

        <div className="technology__grid">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.title}
              className="technology__card glass-card"
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="technology__card-header">
                <div
                  className="technology__card-icon"
                  style={{ color: tech.color, background: `${tech.color}10` }}
                >
                  {tech.icon}
                </div>
                <span
                  className="technology__card-tag"
                  style={{ color: tech.color, borderColor: `${tech.color}30` }}
                >
                  {tech.tag}
                </span>
              </div>
              <h3 className="technology__card-title">{tech.title}</h3>
              <p className="technology__card-desc">{tech.desc}</p>
              <div className="technology__card-line" style={{ background: tech.color }} />
            </motion.div>
          ))}
        </div>

        {/* Architecture diagram preview */}
        <motion.div
          className="technology__arch glass-card"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={8}
        >
          <div className="technology__arch-inner">
            <div className="technology__arch-layer">
              <span className="technology__arch-label" style={{ color: '#00f0ff' }}>Data Input Layer</span>
              <div className="technology__arch-blocks">
                <div className="technology__arch-block" style={{ borderColor: '#00f0ff30' }}>ERP Systems</div>
                <div className="technology__arch-block" style={{ borderColor: '#00f0ff30' }}>IoT Feeds</div>
                <div className="technology__arch-block" style={{ borderColor: '#00f0ff30' }}>Market Data</div>
              </div>
            </div>
            <div className="technology__arch-arrow">↓</div>
            <div className="technology__arch-layer">
              <span className="technology__arch-label" style={{ color: '#8b5cf6' }}>Agentic AI Orchestrator</span>
              <div className="technology__arch-blocks">
                <div className="technology__arch-block" style={{ borderColor: '#8b5cf630' }}>Problem Decomposition</div>
                <div className="technology__arch-block" style={{ borderColor: '#8b5cf630' }}>Resource Allocation</div>
              </div>
            </div>
            <div className="technology__arch-arrow">↓</div>
            <div className="technology__arch-layer">
              <span className="technology__arch-label" style={{ color: '#a855f7' }}>Hybrid Solver Engine</span>
              <div className="technology__arch-blocks">
                <div className="technology__arch-block" style={{ borderColor: '#a855f730' }}>Quantum Processor</div>
                <div className="technology__arch-block" style={{ borderColor: '#a855f730' }}>Classical Solver</div>
                <div className="technology__arch-block" style={{ borderColor: '#a855f730' }}>QUBO Compiler</div>
              </div>
            </div>
            <div className="technology__arch-arrow">↓</div>
            <div className="technology__arch-layer">
              <span className="technology__arch-label" style={{ color: '#00b4ff' }}>Output & Integration</span>
              <div className="technology__arch-blocks">
                <div className="technology__arch-block" style={{ borderColor: '#00b4ff30' }}>Optimized Routes</div>
                <div className="technology__arch-block" style={{ borderColor: '#00b4ff30' }}>Portfolio Weights</div>
                <div className="technology__arch-block" style={{ borderColor: '#00b4ff30' }}>Supply Plans</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
