// Import
import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Halaman
import BerandaSection from './pages/Beranda'

// Dev
import Dev_Api from './components/dev/DevApi'
import PageNotFound from './components/dev/Dev404'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<BerandaSection />} />
          <Route path='/Dev404' element={<PageNotFound />} />
          <Route path='*' element={<Navigate to='/Dev404' replace />} />
        </Routes>
      </Router>
    )
  }
}