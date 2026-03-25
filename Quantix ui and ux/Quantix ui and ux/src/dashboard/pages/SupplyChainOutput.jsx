import { KPICard, AIInsights } from '../components/SharedComponents'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'
import './SupplyChain.css'

const flowNodes = [
  { icon: '🏭', label: 'Suppliers', value: '98.2%' },
  { icon: '⚙️', label: 'Manufacturing', value: '94.7%' },
  { icon: '📦', label: 'Inventory', value: '91.3%' },
  { icon: '🚚', label: 'Distribution', value: '96.1%' },
  { icon: '🏪', label: 'Retail', value: '97.5%' },
]

const demandData = [
  { month: 'Jan', demand: 4200, supply: 4500 },
  { month: 'Feb', demand: 3800, supply: 4100 },
  { month: 'Mar', demand: 4800, supply: 4600 },
  { month: 'Apr', demand: 5200, supply: 5100 },
  { month: 'May', demand: 4900, supply: 5000 },
  { month: 'Jun', demand: 5500, supply: 5400 },
]

const heatmapData = Array.from({ length: 28 }, () => Math.floor(Math.random() * 6))

const inventoryItems = [
  { icon: '📦', label: 'Raw Materials', value: '94% fill rate', bg: 'var(--dash-info-bg)' },
  { icon: '⚙️', label: 'WIP Inventory', value: '2.3 days avg', bg: 'var(--dash-warning-bg)' },
  { icon: '🏪', label: 'Finished Goods', value: '12,400 units', bg: 'var(--dash-success-bg)' },
  { icon: '🔄', label: 'Safety Stock', value: '18 days coverage', bg: 'var(--dash-accent-bg)' },
]

const insights = [
  { icon: '📊', text: '<strong>Demand-supply gap</strong> detected in March — consider 8% procurement increase.' },
  { icon: '🏭', text: '<strong>Manufacturing bottleneck</strong> in Plant 3 affecting throughput by 12%.' },
  { icon: '💡', text: '<strong>Quantum optimization</strong> identified $340K annual savings through warehouse consolidation.' },
]

export default function SupplyChainOutput() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>🔗 Supply Chain — Optimization Results</h1>
        <p>Network optimization complete — Cost objective, 95% service target</p>
      </div>

      <div className="grid-4 stagger" style={{ marginBottom: 24 }}>
        <KPICard icon="💰" value="$340K" label="Annual Savings" trend="+14%" color="green" />
        <KPICard icon="📦" value="95.2%" label="Service Level" trend="+2.1%" color="blue" />
        <KPICard icon="🔄" value="18 days" label="Avg Lead Time" trend="-3 days" trendDir="down" color="purple" />
        <KPICard icon="📈" value="12.4x" label="Inventory Turns" trend="+1.8x" color="yellow" />
      </div>

      <div className="sc-output-grid stagger">
        {/* Flow Diagram */}
        <div className="glass-panel full-width">
          <div className="panel-title">🌐 Optimized Supply Network Flow</div>
          <div className="flow-diagram">
            {flowNodes.map((node, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <div className="flow-node">
                  <div className="flow-node-icon">{node.icon}</div>
                  <div className="flow-node-label">{node.label}</div>
                  <div className="flow-node-value" style={{ color: 'var(--dash-success)', fontWeight: 600 }}>{node.value}</div>
                </div>
                {i < flowNodes.length - 1 && <div className="flow-arrow">→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Demand vs Supply Chart */}
        <div className="glass-panel">
          <div className="panel-title">📊 Demand vs Supply</div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={demandData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <YAxis tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 10, fontSize: 13 }} />
                <Bar dataKey="demand" fill="#818cf8" radius={[4, 4, 0, 0]} name="Demand" />
                <Bar dataKey="supply" fill="#10b981" radius={[4, 4, 0, 0]} name="Supply" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Heatmap */}
        <div className="glass-panel">
          <div className="panel-title">🌡️ Demand Heatmap (4 Weeks × 7 Days)</div>
          <div className="heatmap-grid">
            {heatmapData.map((level, i) => (
              <div key={i} className={`heatmap-cell level-${level}`}>
                {level > 0 ? level : ''}
              </div>
            ))}
          </div>
          <div className="heatmap-legend">
            <span>Less</span>
            {[0, 1, 2, 3, 4, 5].map((l) => (
              <div key={l} className={`heatmap-legend-cell heatmap-cell level-${l}`}></div>
            ))}
            <span>More</span>
          </div>
        </div>

        {/* Inventory Insights */}
        <div className="glass-panel full-width">
          <div className="panel-title">📦 Inventory Insights</div>
          <div className="inventory-grid">
            {inventoryItems.map((item, i) => (
              <div className="inventory-card" key={i}>
                <div className="inventory-icon" style={{ background: item.bg }}>{item.icon}</div>
                <div className="inventory-info">
                  <h4>{item.label}</h4>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="full-width">
          <AIInsights insights={insights} />
        </div>
      </div>
    </div>
  )
}
