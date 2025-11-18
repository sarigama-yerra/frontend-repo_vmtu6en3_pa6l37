import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Test from './Test'
import PressureCertification from './pages/PressureCertification'
import RentalTerms from './pages/RentalTerms'
import EmergencyServices from './pages/EmergencyServices'
import Contact from './pages/Contact'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/pressure-certification" element={<PressureCertification />} />
        <Route path="/rentals/terms" element={<RentalTerms />} />
        <Route path="/emergency-services" element={<EmergencyServices />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
