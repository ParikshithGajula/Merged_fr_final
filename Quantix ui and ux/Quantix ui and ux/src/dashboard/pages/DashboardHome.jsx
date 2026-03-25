import { Link } from 'react-router-dom'
import { KPICard, AIInsights } from '../components/SharedComponents'
import './DashboardHome.css'

const modules = [
  {
    id: 'logistics',
    title: 'Logistics Optimization',
    desc: 'Optimize fleet routing, delivery windows, and vehicle assignment using hybrid quantum-classical algorithms.',
    icon: '🚛',
    status: 'Active',
    link: '/dashboard/logistics/input',
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Optimization',
    desc: 'End-to-end supply chain flow analysis with demand forecasting, inventory allocation, and network design.',
    icon: '🔗',
    status: 'Active',
    link: '/dashboard/supply-chain/input',
  },
  {
    id: 'portfolio',
    title: 'Portfolio Optimization',
    desc: 'Quantum-enhanced portfolio construction with efficient frontier mapping, risk parity, and factor analysis.',
    icon: '💼',
    status: 'Active',
    link: '/dashboard/portfolio/input',
  },
]

const insights = [
  { icon: '⚡', text: '<strong>Fleet routing efficiency</strong> can be improved by 12% with quantum annealing on your current dataset.' },
  { icon: '📈', text: '<strong>Supply chain demand</strong> forecast accuracy increased to 94.2% after last calibration.' },
  { icon: '🎯', text: '<strong>Portfolio Sharpe ratio</strong> can reach 2.31 using quantum-optimized allocation.' },
  { icon: '🔄', text: '<strong>3 optimization jobs</strong> completed in the last 24 hours with no errors.' },
]

const activities = [
  { color: 'blue', text: '<strong>Logistics Run #47</strong> completed — 18% cost reduction', time: '12 min ago' },
  { color: 'green', text: '<strong>Supply Chain</strong> demand forecast recalibrated', time: '1 hour ago' },
  { color: 'purple', text: '<strong>Portfolio</strong> efficient frontier updated with 12 assets', time: '3 hours ago' },
  { color: 'blue', text: '<strong>New dataset</strong> uploaded for logistics module', time: '5 hours ago' },
]

export default function DashboardHome() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <div className="dash-home-hero">
        <h1>Welcome back to <span style={{ color: 'var(--dash-accent)' }}>Quantix</span></h1>
        <p>Your quantum optimization platform is ready. Select a module below to configure and run optimizations.</p>
      </div>

      {/* KPI Row */}
      <div className="grid-4 stagger" style={{ marginBottom: 28 }}>
        <KPICard icon="🚀" value="47" label="Total Optimizations" trend="+12%" color="purple" />
        <KPICard icon="💰" value="$2.4M" label="Cost Savings" trend="+8.3%" color="green" />
        <KPICard icon="⏱️" value="99.8%" label="System Uptime" trend="+0.2%" color="blue" />
        <KPICard icon="📊" value="94.2%" label="Forecast Accuracy" trend="+3.1%" color="yellow" />
      </div>

      {/* Module Cards */}
      <div className="module-cards-grid stagger">
        {modules.map((mod) => (
          <Link key={mod.id} to={mod.link} className={`module-card ${mod.id}`}>
            <div className="module-card-icon">{mod.icon}</div>
            <h3>{mod.title}</h3>
            <p>{mod.desc}</p>
            <div className="module-card-footer">
              <div className="module-status">
                <span className="module-status-dot"></span>
                {mod.status}
              </div>
              <span className="module-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Grid */}
      <div className="dash-home-bottom">
        <div className="glass-panel">
          <div className="panel-title">📋 Recent Activity</div>
          {activities.map((act, i) => (
            <div className="activity-item" key={i}>
              <div className={`activity-dot ${act.color}`}></div>
              <div>
                <div className="activity-text" dangerouslySetInnerHTML={{ __html: act.text }} />
                <div className="activity-time">{act.time}</div>
              </div>
            </div>
          ))}
        </div>
        <AIInsights insights={insights} />
      </div>
    </div>
  )
}
