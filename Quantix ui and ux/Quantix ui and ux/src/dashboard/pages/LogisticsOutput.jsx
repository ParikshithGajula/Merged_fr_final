import { KPICard, AIInsights } from '../components/SharedComponents'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts'
import './Logistics.css'

const routeData = [
  { route: 'R-01', stops: 12, distance: '87 km', time: '4.2h', cost: '$312', status: 'optimal' },
  { route: 'R-02', stops: 9, distance: '64 km', time: '3.1h', cost: '$241', status: 'optimal' },
  { route: 'R-03', stops: 15, distance: '112 km', time: '5.8h', cost: '$428', status: 'suboptimal' },
  { route: 'R-04', stops: 8, distance: '52 km', time: '2.6h', cost: '$198', status: 'optimal' },
  { route: 'R-05', stops: 11, distance: '78 km', time: '3.9h', cost: '$287', status: 'optimal' },
]

const efficiencyData = [
  { name: 'R-01', before: 72, after: 94 },
  { name: 'R-02', before: 68, after: 91 },
  { name: 'R-03', before: 55, after: 78 },
  { name: 'R-04', before: 80, after: 96 },
  { name: 'R-05', before: 65, after: 89 },
]

const costTrend = [
  { day: 'Mon', cost: 4200 },
  { day: 'Tue', cost: 3800 },
  { day: 'Wed', cost: 3500 },
  { day: 'Thu', cost: 3100 },
  { day: 'Fri', cost: 2800 },
  { day: 'Sat', cost: 2400 },
  { day: 'Sun', cost: 2200 },
]

const insights = [
  { icon: '🗺️', text: '<strong>Route R-03</strong> has 18% excess mileage — consider splitting into 2 sub-routes.' },
  { icon: '⏰', text: '<strong>Time window violations</strong> reduced by 42% compared to previous iteration.' },
  { icon: '🔋', text: '<strong>Fuel consumption</strong> estimated to drop by $1,200/week with optimized routing.' },
]

export default function LogisticsOutput() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <h1>🚛 Logistics — Optimization Results</h1>
        <p>Run #47 completed — Hybrid Solver, 127 nodes, 14 vehicles</p>
      </div>

      {/* KPIs */}
      <div className="grid-4 stagger" style={{ marginBottom: 24 }}>
        <KPICard icon="📍" value="5" label="Optimized Routes" trend="+2" color="blue" />
        <KPICard icon="📏" value="393 km" label="Total Distance" trend="-18%" color="green" />
        <KPICard icon="💰" value="$1,466" label="Total Cost" trend="-22%" color="purple" />
        <KPICard icon="⚡" value="89%" label="Avg Efficiency" trend="+15%" color="yellow" />
      </div>

      <div className="logistics-output-grid stagger">
        {/* Map */}
        <div className="glass-panel full-width">
          <div className="panel-title">🗺️ Route Map Visualization</div>
          <div className="map-placeholder">
            <div className="map-icon">🗺️</div>
            <div className="map-text">Interactive map with optimized routes</div>
            <div style={{ display: 'flex', gap: 8, position: 'relative', zIndex: 1 }}>
              <span className="status-badge info">5 routes</span>
              <span className="status-badge success">127 stops</span>
              <span className="status-badge warning">14 vehicles</span>
            </div>
          </div>
        </div>

        {/* Route Efficiency Chart */}
        <div className="glass-panel">
          <div className="panel-title">📊 Route Efficiency — Before vs After</div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <YAxis tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 10,
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="before" fill="#c7d2fe" radius={[4, 4, 0, 0]} name="Before" />
                <Bar dataKey="after" fill="#6366f1" radius={[4, 4, 0, 0]} name="After" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost Trend */}
        <div className="glass-panel">
          <div className="panel-title">💰 Cost Trend (Weekly)</div>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={costTrend}>
                <defs>
                  <linearGradient id="costGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={0.2} />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <YAxis tick={{ fontSize: 12, fill: '#5a5f7a' }} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: 10,
                    fontSize: 13,
                  }}
                />
                <Area type="monotone" dataKey="cost" stroke="#6366f1" fill="url(#costGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Route Table */}
        <div className="glass-panel full-width">
          <div className="panel-title">📋 Route Details</div>
          <table className="dash-table">
            <thead>
              <tr>
                <th>Route ID</th>
                <th>Stops</th>
                <th>Distance</th>
                <th>Est. Time</th>
                <th>Cost</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {routeData.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 600 }}>{r.route}</td>
                  <td>{r.stops}</td>
                  <td>{r.distance}</td>
                  <td>{r.time}</td>
                  <td>{r.cost}</td>
                  <td>
                    <span className={`route-badge ${r.status}`}>
                      {r.status === 'optimal' ? '✓' : '⚠'} {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Insights */}
        <div className="full-width">
          <AIInsights insights={insights} />
        </div>
      </div>
    </div>
  )
}
