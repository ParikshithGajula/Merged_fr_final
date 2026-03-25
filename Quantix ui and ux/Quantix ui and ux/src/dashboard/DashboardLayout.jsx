import { useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './DashboardLayout.css'

const navItems = [
  {
    label: 'Dashboard',
    icon: '📊',
    path: '/dashboard',
    exact: true,
  },
  {
    label: 'Logistics',
    icon: '🚛',
    children: [
      { label: 'Input Config', path: '/dashboard/logistics/input' },
      { label: 'Output Results', path: '/dashboard/logistics/output' },
    ],
  },
  {
    label: 'Supply Chain',
    icon: '🔗',
    children: [
      { label: 'Input Config', path: '/dashboard/supply-chain/input' },
      { label: 'Output Results', path: '/dashboard/supply-chain/output' },
    ],
  },
  {
    label: 'Portfolio',
    icon: '💼',
    children: [
      { label: 'Input Config', path: '/dashboard/portfolio/input' },
      { label: 'Output Results', path: '/dashboard/portfolio/output' },
    ],
  },
]

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const [expandedSections, setExpandedSections] = useState({})
  const [theme, setTheme] = useState('light')
  const location = useLocation()

  const toggleSection = (label) => {
    setExpandedSections((prev) => ({ ...prev, [label]: !prev[label] }))
  }

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const getBreadcrumb = () => {
    const path = location.pathname
    if (path === '/dashboard') return ['Dashboard']
    const segments = path.replace('/dashboard/', '').split('/')
    return ['Dashboard', ...segments.map((s) => s.charAt(0).toUpperCase() + s.slice(1).replace('-', ' '))]
  }

  const breadcrumb = getBreadcrumb()

  return (
    <div className={`dashboard-shell theme-${theme}`}>
      {/* Sidebar */}
      <aside className={`dash-sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">Q</div>
          <span className="brand-text">Quantix</span>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">Main Menu</div>

          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <div
                  className={`nav-item ${item.children.some((c) => location.pathname === c.path) ? 'active' : ''}`}
                  onClick={() => toggleSection(item.label)}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </div>
                {expandedSections[item.label] && (
                  <div className="nav-sub">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                      >
                        <span className="nav-icon">•</span>
                        <span className="nav-label">{child.label}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.exact}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </NavLink>
            )
          )}

          <div className="nav-section-label" style={{ marginTop: 20 }}>Settings</div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-label">Preferences</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">❓</span>
            <span className="nav-label">Help & Docs</span>
          </div>
        </nav>

        <div className="sidebar-toggle">
          <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? '→' : '←'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className={`dash-main ${collapsed ? 'sidebar-collapsed' : ''}`}>
        {/* Header */}
        <header className="dash-header">
          <div className="header-left">
            <div className="header-breadcrumb">
              {breadcrumb.map((item, i) => (
                <span key={i}>
                  {i > 0 && <span style={{ margin: '0 4px', color: 'var(--dash-text-tertiary)' }}>/</span>}
                  {i === breadcrumb.length - 1 ? <strong>{item}</strong> : item}
                </span>
              ))}
            </div>
          </div>
          <div className="header-right">
            <div className="header-search">
              <span className="header-search-icon">🔍</span>
              <input type="text" placeholder="Search modules..." />
            </div>
            <button className="header-icon-btn" title="Toggle Theme" onClick={toggleTheme}>
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
            <button className="header-icon-btn" title="Notifications">
              🔔
              <span className="notif-badge"></span>
            </button>
            <div className="header-avatar">QU</div>
          </div>
        </header>

        {/* Page Content */}
        <div className="dash-content">
          <div className="page-enter" key={location.pathname}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
