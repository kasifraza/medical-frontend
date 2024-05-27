import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminLayout from './Layout/AdminLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Collections from './pages/admin/Collections';
import IdleTimerContainer from './components/IdleTimerContainer';

const App = () => {
  return (
    <Router>
      <IdleTimerContainer>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/admin/collections" element={<Collections />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </IdleTimerContainer>
    </Router>
  )
}

export default App