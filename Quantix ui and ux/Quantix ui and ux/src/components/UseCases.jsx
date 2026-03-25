import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiTruck, HiCurrencyDollar, HiCube, HiOfficeBuilding } from 'react-icons/hi';
import './UseCases.css';

const useCases = [
  {
    icon: <HiTruck />,
    title: 'Logistics & Fleet Optimization',
    desc: 'Optimize delivery routes, fleet allocation, and last-mile logistics across thousands of vehicles in real time. Reduce fuel costs by 30% and improve on-time delivery rates.',
    metrics: [
      { value: '30%', label: 'Cost Reduction' },
      { value: '2.5x', label: 'Faster Routing' },
      { value: '99.2%', label: 'On-Time Rate' },
    ],
    features: ['Vehicle Routing Problem (VRP)', 'Dynamic re-routing', 'Multi-depot optimization', 'Time-window constraints'],
    color: '#00f0ff',
    gradient: 'linear-gradient(135deg, #00f0ff15 0%, #00b4ff08 100%)',
  },
  {
    icon: <HiCube />,
    title: 'Supply Chain Orchestration',
    desc: 'End-to-end supply chain optimization from procurement to distribution. Balance inventory levels, reduce waste, and respond to disruptions in real time.',
    metrics: [
      { value: '40%', label: 'Less Waste' },
      { value: '22%', label: 'Lower Inventory' },
      { value: '10x', label: 'Faster Planning' },
    ],
    features: ['Demand forecasting', 'Inventory optimization', 'Supplier selection', 'Network design'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf615 0%, #6366f108 100%)',
  },
  {
    icon: <HiCurrencyDollar />,
    title: 'Financial Portfolio Optimization',
    desc: 'Quantum-enhanced portfolio construction, risk management, and derivatives pricing. Find optimal asset allocations across thousands of instruments.',
    metrics: [
      { value: '15%', label: 'Better Sharpe' },
      { value: '50ms', label: 'Pricing Speed' },
      { value: '10K+', label: 'Instruments' },
    ],
    features: ['Mean-variance optimization', 'CVaR constraints', 'Transaction cost modeling', 'Multi-period rebalancing'],
    color: '#00b4ff',
    gradient: 'linear-gradient(135deg, #00b4ff15 0%, #0088cc08 100%)',
  },
  {
    icon: <HiOfficeBuilding />,
    title: 'Energy & Resource Management',
    desc: 'Optimize energy grid dispatch, renewable integration, and resource allocation for utilities and industrial operations.',
    metrics: [
      { value: '25%', label: 'Energy Savings' },
      { value: '98%', label: 'Grid Stability' },
      { value: '3x', label: 'Faster Dispatch' },
    ],
    features: ['Unit commitment', 'Load balancing', 'Renewable scheduling', 'Carbon optimization'],
    color: '#a855f7',
    gradient: 'linear-gradient(135deg, #a855f715 0%, #7c3aed08 100%)',
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

const UseCases = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="usecases" id="usecases" ref={ref}>
      <div className="container">
        <motion.div
          className="usecases__header"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp}
          custom={0}
        >
          <span className="section-label">Use Cases</span>
          <h2 className="section-title">
            Solving the World's Hardest{' '}
            <span className="gradient-text">Optimization Problems</span>
          </h2>
          <p className="section-subtitle">
            From routing thousands of delivery vehicles to optimizing billion-dollar portfolios — 
            our quantum-classical platform handles complexity at scale.
          </p>
        </motion.div>

        <div className="usecases__layout">
          <motion.div
            className="usecases__tabs"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeUp}
            custom={1}
          >
            {useCases.map((uc, i) => (
              <button
                key={uc.title}
                className={`usecases__tab ${activeCase === i ? 'usecases__tab--active' : ''}`}
                onClick={() => setActiveCase(i)}
                style={activeCase === i ? { borderColor: uc.color, background: uc.gradient } : {}}
              >
                <div className="usecases__tab-icon" style={{ color: uc.color }}>
                  {uc.icon}
                </div>
                <span className="usecases__tab-title">{uc.title}</span>
              </button>
            ))}
          </motion.div>

          <motion.div
            className="usecases__detail glass-card"
            key={activeCase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="usecases__detail-header">
              <div
                className="usecases__detail-icon"
                style={{ color: useCases[activeCase].color, background: `${useCases[activeCase].color}12` }}
              >
                {useCases[activeCase].icon}
              </div>
              <h3 className="usecases__detail-title">{useCases[activeCase].title}</h3>
            </div>

            <p className="usecases__detail-desc">{useCases[activeCase].desc}</p>

            <div className="usecases__detail-metrics">
              {useCases[activeCase].metrics.map((m) => (
                <div key={m.label} className="usecases__metric">
                  <span className="usecases__metric-value" style={{ color: useCases[activeCase].color }}>{m.value}</span>
                  <span className="usecases__metric-label">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="usecases__detail-features">
              <h4 className="usecases__features-title">Key Capabilities</h4>
              <div className="usecases__features-list">
                {useCases[activeCase].features.map((f) => (
                  <div key={f} className="usecases__feature" style={{ borderColor: `${useCases[activeCase].color}25` }}>
                    <span className="usecases__feature-dot" style={{ background: useCases[activeCase].color }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
