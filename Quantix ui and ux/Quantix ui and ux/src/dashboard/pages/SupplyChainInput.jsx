import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AIInsights } from '../components/SharedComponents'
import './SupplyChain.css'

const networkNodes = [
  { label: 'Raw Suppliers', value: '24 active' },
  { label: 'Tier-1 MFG', value: '8 plants' },
  { label: 'Warehouses', value: '12 locations' },
  { label: 'Distribution', value: '6 hubs' },
  { label: 'Retail', value: '340 stores' },
]

const insights = [
  { icon: '🔄', text: '<strong>Network optimization</strong> suggests consolidating 2 warehouses for 14% cost reduction.' },
  { icon: '📦', text: '<strong>Inventory buffer</strong> calculation recommends increasing safety stock in Region 3.' },
]

export default function SupplyChainInput() {
  const [objectiveType, setObjectiveType] = useState('cost')

  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>🔗 Supply Chain — Input Configuration</h1>
        <p>Configure your supply network, demand parameters, and optimization objectives.</p>
      </div>

      <div className="sc-config stagger">
        {/* Network Visualization */}
        <div className="glass-panel full-width">
          <div className="panel-title">🌐 Supply Network Overview</div>
          <div className="flow-diagram">
            {networkNodes.map((node, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="flow-node">
                  <div className="flow-node-icon">
                    {['🏭', '⚙️', '📦', '🚚', '🏪'][i]}
                  </div>
                  <div className="flow-node-label">{node.label}</div>
                  <div className="flow-node-value">{node.value}</div>
                </div>
                {i < networkNodes.length - 1 && <div className="flow-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Demand Parameters */}
        <div className="glass-panel">
          <div className="panel-title">📊 Demand Parameters</div>
          <div className="form-group">
            <label className="form-label">Forecast Horizon</label>
            <select className="form-select">
              <option>30 days</option>
              <option>60 days</option>
              <option>90 days</option>
              <option>180 days</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Demand Variability</label>
            <input className="form-input" type="range" min="1" max="10" defaultValue="5" style={{ padding: '6px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--dash-text-tertiary)' }}>
              <span>Low</span><span>Medium</span><span>High</span>
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Seasonality Factor</label>
            <select className="form-select">
              <option>None</option>
              <option>Quarterly</option>
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          </div>
        </div>

        {/* Objective */}
        <div className="glass-panel">
          <div className="panel-title">🎯 Optimization Objective</div>
          <div className="dash-tabs" style={{ marginBottom: 16 }}>
            {['cost', 'service', 'balanced'].map((t) => (
              <button
                key={t}
                className={`dash-tab ${objectiveType === t ? 'active' : ''}`}
                onClick={() => setObjectiveType(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 13, color: 'var(--dash-text-secondary)', lineHeight: 1.6 }}>
            {objectiveType === 'cost' && 'Minimize total supply chain cost including procurement, inventory holding, transportation, and distribution.'}
            {objectiveType === 'service' && 'Maximize service level and fill rate while maintaining acceptable cost levels.'}
            {objectiveType === 'balanced' && 'Balance cost optimization with service level targets using a weighted multi-objective function.'}
          </div>
          <div className="form-group" style={{ marginTop: 16 }}>
            <label className="form-label">Service Level Target</label>
            <input className="form-input" type="text" defaultValue="95%" />
          </div>
        </div>

        <div className="full-width">
          <AIInsights insights={insights} />
        </div>
      </div>

      <div className="run-section">
        <div className="run-info">
          <strong>Ready to optimize</strong> — 24 suppliers, 12 warehouses, Cost objective
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/dashboard/supply-chain/output" className="dash-btn dash-btn-primary">
            ▶ Run Optimization
          </Link>
          <button className="dash-btn dash-btn-secondary">Save Config</button>
        </div>
      </div>
    </div>
  )
}
