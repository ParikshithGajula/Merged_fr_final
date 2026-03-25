import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AIInsights } from '../components/SharedComponents'
import './Logistics.css'

const constraints = [
  { label: 'Time Windows', desc: 'Respect delivery time constraints', active: true },
  { label: 'Vehicle Capacity', desc: 'Max load per vehicle', active: true },
  { label: 'Driver Hours', desc: 'HOS compliance', active: false },
  { label: 'Priority Deliveries', desc: 'VIP customer routing', active: true },
]

const algorithms = [
  { id: 'qaoa', icon: '⚛️', name: 'QAOA', desc: 'Quantum Approximate Optimization' },
  { id: 'vqe', icon: '🌀', name: 'VQE', desc: 'Variational Quantum Eigensolver' },
  { id: 'hybrid', icon: '🔄', name: 'Hybrid', desc: 'Classical + Quantum Solver' },
]

const insights = [
  { icon: '💡', text: '<strong>Recommended:</strong> Use Hybrid solver for datasets with 50+ nodes for optimal runtime.' },
  { icon: '📊', text: '<strong>Dataset check:</strong> Your last upload had 127 nodes — quantum annealing is well-suited.' },
]

export default function LogisticsInput() {
  const [selectedAlgo, setSelectedAlgo] = useState('hybrid')
  const [toggles, setToggles] = useState(constraints.map((c) => c.active))

  const handleToggle = (i) => {
    setToggles((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>🚛 Logistics — Input Configuration</h1>
        <p>Upload your fleet data, set constraints, and select an optimization algorithm.</p>
      </div>

      <div className="logistics-config stagger">
        {/* File Upload */}
        <div className="glass-panel">
          <div className="panel-title">📁 Data Upload</div>
          <div className="file-upload-zone">
            <div className="upload-icon">📤</div>
            <div className="upload-text">
              Drag & drop your fleet data or <strong>browse files</strong>
            </div>
            <div className="upload-hint">Supports CSV, JSON, XLSX — Max 50MB</div>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <span className="status-badge info">📄 fleet_routes_q1.csv</span>
            <span className="status-badge success">✓ 127 nodes parsed</span>
          </div>
        </div>

        {/* Constraints */}
        <div className="glass-panel">
          <div className="panel-title">⚙️ Constraints Panel</div>
          <div className="constraint-list">
            {constraints.map((c, i) => (
              <div className="constraint-item" key={i}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--dash-text-primary)' }}>{c.label}</div>
                  <div style={{ fontSize: 11, color: 'var(--dash-text-tertiary)', marginTop: 2 }}>{c.desc}</div>
                </div>
                <button
                  className={`constraint-toggle ${toggles[i] ? 'active' : ''}`}
                  onClick={() => handleToggle(i)}
                ></button>
              </div>
            ))}
          </div>
        </div>

        {/* Algorithm Selector */}
        <div className="glass-panel full-width">
          <div className="panel-title">🧬 Algorithm Selector</div>
          <div className="algo-cards">
            {algorithms.map((algo) => (
              <div
                key={algo.id}
                className={`algo-card ${selectedAlgo === algo.id ? 'selected' : ''}`}
                onClick={() => setSelectedAlgo(algo.id)}
              >
                <div className="algo-card-icon">{algo.icon}</div>
                <div className="algo-card-name">{algo.name}</div>
                <div className="algo-card-desc">{algo.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights */}
        <div className="full-width">
          <AIInsights insights={insights} />
        </div>
      </div>

      {/* Run Button */}
      <div className="run-section">
        <div className="run-info">
          <strong>Ready to optimize</strong> — 127 nodes, 14 vehicles, Hybrid solver
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/dashboard/logistics/output" className="dash-btn dash-btn-primary">
            ▶ Run Optimization
          </Link>
          <button className="dash-btn dash-btn-secondary">Save Config</button>
        </div>
      </div>
    </div>
  )
}
