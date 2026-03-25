import './SharedComponents.css'

export function KPICard({ icon, value, label, trend, trendDir, color = 'blue' }) {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <div className={`kpi-icon ${color}`}>{icon}</div>
        {trend && (
          <div className={`kpi-trend ${trendDir || 'up'}`}>
            {trendDir === 'down' ? '↓' : '↑'} {trend}
          </div>
        )}
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-label">{label}</div>
    </div>
  )
}

export function AIInsights({ insights }) {
  return (
    <div className="ai-insights-panel">
      <div className="ai-header">
        <div className="ai-badge">
          <span className="ai-badge-dot"></span>
          AI Insights
        </div>
        <span className="ai-title">Quantum Analysis</span>
      </div>
      {insights.map((insight, i) => (
        <div className="ai-insight-item" key={i}>
          <div className="ai-insight-icon">{insight.icon}</div>
          <div className="ai-insight-text" dangerouslySetInnerHTML={{ __html: insight.text }} />
        </div>
      ))}
    </div>
  )
}

export function LoadingState({ text = 'Processing quantum optimization' }) {
  return (
    <div className="loading-container">
      <div className="quantum-spinner">
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-core"></div>
      </div>
      <div className="loading-text">{text}...</div>
    </div>
  )
}
