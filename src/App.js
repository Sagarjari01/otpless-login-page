import React from 'react'

import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import TwoFactorAuthStepByStep from './components/TwoFactorAuthStepByStep'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<TwoFactorAuthStepByStep />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App