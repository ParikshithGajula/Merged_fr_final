import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AIInsights } from '../components/SharedComponents'
import './Portfolio.css'

const assets = [
  { ticker: 'AAPL', name: 'Apple Inc.', sector: 'Technology' },
  { ticker: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology' },
  { ticker: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology' },
  { ticker: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer' },
  { ticker: 'JPM', name: 'JPMorgan Chase', sector: 'Financials' },
  { ticker: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare' },
  { ticker: 'XOM', name: 'Exxon Mobil Corp.', sector: 'Energy' },
  { ticker: 'BRK.B', name: 'Berkshire Hathaway', sector: 'Financials' },
  { ticker: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology' },
  { ticker: 'V', name: 'Visa Inc.', sector: 'Financials' },
  { ticker: 'PG', name: 'Procter & Gamble', sector: 'Consumer' },
  { ticker: 'UNH', name: 'UnitedHealth Group', sector: 'Healthcare' },
]

const insights = [
  { icon: '🎯', text: '<strong>Quantum solver</strong> can explore 2^12 portfolio combinations for your 12-asset universe.' },
  { icon: '⚖️', text: '<strong>Risk parity</strong> mode suggested — equal risk contribution across all assets for balanced exposure.' },
]

export default function PortfolioInput() {
  const [selected, setSelected] = useState(['AAPL', 'GOOGL', 'MSFT', 'JPM', 'JNJ', 'NVDA'])
  const [risk, setRisk] = useState(5)

  const toggleAsset = (ticker) => {
    setSelected((prev) =>
      prev.includes(ticker) ? prev.filter((t) => t !== ticker) : [...prev, ticker]
    )
  }

  const riskLabels = ['Conservative', 'Moderate', 'Aggressive']

  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>💼 Portfolio — Input Configuration</h1>
        <p>Select assets, set risk parameters, and configure optimization constraints.</p>
      </div>

      <div className="portfolio-config stagger">
        {/* Asset Selection */}
        <div className="glass-panel">
          <div className="panel-title">📈 Asset Universe ({selected.length} selected)</div>
          <div className="asset-list">
            {assets.map((a) => (
              <div
                key={a.ticker}
                className={`asset-item ${selected.includes(a.ticker) ? 'selected' : ''}`}
                onClick={() => toggleAsset(a.ticker)}
              >
                <div className="asset-left">
                  <div>
                    <div className="asset-ticker">{a.ticker}</div>
                    <div className="asset-name">{a.name}</div>
                  </div>
                </div>
                <div className="asset-check">{selected.includes(a.ticker) ? '✓' : ''}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Risk Tolerance */}
          <div className="glass-panel">
            <div className="panel-title">⚖️ Risk Tolerance</div>
            <div className="risk-slider-container">
              <input
                type="range"
                min="1"
                max="10"
                value={risk}
                onChange={(e) => setRisk(Number(e.target.value))}
                className="risk-slider-input"
              />
              <div className="risk-labels">
                {riskLabels.map((rl, i) => (
                  <div key={i} className={`risk-label ${Math.ceil(risk / 3.3) === i + 1 ? 'active' : ''}`}>
                    {rl}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Constraints */}
          <div className="glass-panel">
            <div className="panel-title">🔧 Constraints</div>
            <div className="form-group">
              <label className="form-label">Max Single Position</label>
              <input className="form-input" type="text" defaultValue="25%" />
            </div>
            <div className="form-group">
              <label className="form-label">Max Sector Exposure</label>
              <input className="form-input" type="text" defaultValue="40%" />
            </div>
            <div className="form-group">
              <label className="form-label">Min Diversification</label>
              <input className="form-input" type="text" defaultValue="5 assets" />
            </div>
            <div className="form-group">
              <label className="form-label">Rebalancing Frequency</label>
              <select className="form-select">
                <option>Monthly</option>
                <option>Quarterly</option>
                <option>Semi-Annual</option>
              </select>
            </div>
          </div>

          <AIInsights insights={insights} />
        </div>
      </div>

      <div className="run-section">
        <div className="run-info">
          <strong>Ready to optimize</strong> — {selected.length} assets, Risk level {risk}/10, Monthly rebalancing
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <Link to="/dashboard/portfolio/output" className="dash-btn dash-btn-primary">
            ▶ Run Optimization
          </Link>
          <button className="dash-btn dash-btn-secondary">Save Config</button>
        </div>
      </div>
    </div>
  )
}
