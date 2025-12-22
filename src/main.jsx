import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.jsx'
import { RootLayout } from './components/layouts'
import { NotFound } from './pages'
import { ThemeProvider } from './store/themeStore.jsx'
import Dashboard from './pages/Dashboard.jsx'
import VendorsPage from './pages/VendorsPage.jsx'
import OrdersPage from './pages/OrdersPage.jsx'
import InventoryPage from './pages/InventoryPage.jsx'
import ShipmentsPage from './pages/ShipmentsPage.jsx'
import PurchasesPage from './pages/PurchasesPage.jsx'
import AnalyticsPage from './pages/AnalyticsPage.jsx'
import SettingsPage from './pages/SettingsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="shipments" element={<ShipmentsPage />} />
            <Route path="purchases" element={<PurchasesPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
