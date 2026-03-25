import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technology from './components/Technology'
import UseCases from './components/UseCases'
import DashboardLayout from './dashboard/DashboardLayout'
import DashboardHome from './dashboard/pages/DashboardHome'
import LogisticsInput from './dashboard/pages/LogisticsInput'
import LogisticsOutput from './dashboard/pages/LogisticsOutput'
import SupplyChainInput from './dashboard/pages/SupplyChainInput'
import SupplyChainOutput from './dashboard/pages/SupplyChainOutput'
import PortfolioInput from './dashboard/pages/PortfolioInput'
import PortfolioOutput from './dashboard/pages/PortfolioOutput'

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Technology />
      <UseCases />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="logistics/input" element={<LogisticsInput />} />
          <Route path="logistics/output" element={<LogisticsOutput />} />
          <Route path="supply-chain/input" element={<SupplyChainInput />} />
          <Route path="supply-chain/output" element={<SupplyChainOutput />} />
          <Route path="portfolio/input" element={<PortfolioInput />} />
          <Route path="portfolio/output" element={<PortfolioOutput />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
