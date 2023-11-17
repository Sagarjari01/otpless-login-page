import React from 'react'

import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App