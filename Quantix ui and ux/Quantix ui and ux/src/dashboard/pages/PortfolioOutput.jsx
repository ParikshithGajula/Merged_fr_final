import { KPICard, AIInsights } from '../components/SharedComponents'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis } from 'recharts'
import './Portfolio.css'

const frontierData = [
  { risk: 4, return: 6.2 },
  { risk: 5.5, return: 8.4 },
  { risk: 7, return: 10.1 },
  { risk: 8.5, return: 11.8 },
  { risk: 10, return: 13.2 },
  { risk: 12, return: 14.5 },
  { risk: 14, return: 15.1 },
  { risk: 16, return: 15.6 },
  { risk: 18, return: 16.0 },
  { risk: 20, return: 16.3 },
]

const COLORS = ['#6366f1', '#8b5cf6', '#a78bfa', '#3b82f6', '#10b981', '#f59e0b']

const allocationData = [
  { name: 'Technology', value: 32, color: '#6366f1' },
  { name: 'Healthcare', value: 18, color: '#8b5cf6' },
  { name: 'Financials', value: 22, color: '#3b82f6' },
  { name: 'Consumer', value: 14, color: '#10b981' },
  { name: 'Energy', value: 8, color: '#f59e0b' },
  { name: 'Other', value: 6, color: '#a78bfa' },
]

const assetTable = [
  { ticker: 'NVDA', weight: '14.2%', expReturn: '18.3%', risk: '28.1%', sharpe: '0.65' },
  { ticker: 'AAPL', weight: '12.1%', expReturn: '14.2%', risk: '21.4%', sharpe: '0.66' },
  { ticker: 'MSFT', weight: '10.8%', expReturn: '13.1%', risk: '19.8%', sharpe: '0.66' },
  { ticker: 'JPM', weight: '11.3%', expReturn: '11.5%', risk: '18.2%', sharpe: '0.63' },
  { ticker: 'JNJ', weight: '9.8%', expReturn: '8.4%', risk: '12.1%', sharpe: '0.69' },
  { ticker: 'GOOGL', weight: '8.7%', expReturn: '15.6%', risk: '24.3%', sharpe: '0.64' },
]

const insights = [
  { icon: '🎯', text: '<strong>Optimal portfolio</strong> found at risk level 10.1% — Sharpe ratio 2.31 (quantum-enhanced).' },
  { icon: '⚖️', text: '<strong>Sector concentration</strong> in Technology (32%) — consider adding Real Estate for diversification.' },
  { icon: '📊', text: '<strong>Monte Carlo simulation</strong> (10,000 paths): 95% VaR is $42,300 for a $1M portfolio.' },
]

export default function PortfolioOutput() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>💼 Portfolio — Optimization Results</h1>
        <p>Quantum-enhanced optimization complete — 6 assets, Moderate risk profile</p>
      </div>

      <div className="grid-4 stagger" style={{ marginBottom: 24 }}>
        <KPICard icon="📈" value="14.5%" label="Expected Return" trend="+2.3%" color="green" />
        <KPICard icon="📉" value="10.1%" label="Portfolio Risk" trend="-1.8%" trendDir="down" color="blue" />
        <KPICard icon="⚡" value="2.31" label="Sharpe Ratio" trend="+0.45" color="purple" />
        <KPICard icon="🛡️" value="$42.3K" label="95% VaR (1M)" trend="-$8K" trendDir="down" color="yellow" />
      </div>

      <div className="portfolio-output-grid stagger">
        {/* Efficient Frontier */}
        <div className="glass-panel">
          <div className="panel-title">📈 Efficient Frontier</div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis
                  dataKey="risk"
                  name="Risk (%)"
                  tick={{ fontSize: 12, fill: '#5a5f7a' }}
                  label={{ value: 'Risk (%)', position: 'bottom', fontSize: 12, fill: '#5a5f7a' }}
                />
                <YAxis
                  dataKey="return"
                  name="Return (%)"
                  tick={{ fontSize: 12, fill: '#5a5f7a' }}
                  label={{ value: 'Return (%)', angle: -90, position: 'insideLeft', fontSize: 12, fill: '#5a5f7a' }}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, fontSize: 13 }}
                />
                <Scatter data={frontierData} fill="#6366f1" line={{ stroke: '#6366f1', strokeWidth: 2 }} />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Pie */}
        <div className="glass-panel">
          <div className="panel-title">🥧 Sector Allocation</div>
          <div className="chart-container" style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {allocationData.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, fontSize: 13 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="pie-legend">
            {allocationData.map((item, i) => (
              <div className="pie-legend-item" key={i}>
                <div className="pie-legend-dot" style={{ background: item.color }}></div>
                <span className="pie-legend-label">{item.name}</span>
                <span className="pie-legend-value">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Asset Table */}
        <div className="glass-panel full-width">
          <div className="panel-title">📋 Asset Allocation Details</div>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Ticker</th>
                <th>Weight</th>
                <th>Exp. Return</th>
                <th>Risk (σ)</th>
                <th>Sharpe</th>
              </tr>
            </thead>
            <tbody>
              {assetTable.map((a, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 700, fontFamily: 'var(--dash-font-mono)' }}>{a.ticker}</td>
                  <td>{a.weight}</td>
                  <td style={{ color: 'var(--dash-success)' }}>{a.expReturn}</td>
                  <td>{a.risk}</td>
                  <td>{a.sharpe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="full-width">
          <AIInsights insights={insights} />
        </div>
      </div>
    </div>
  )
}
