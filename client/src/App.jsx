import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.scss';

const App = () => {
  const isAuthenticated = true; // Esto debería ser reemplazado por tu lógica de autenticación real

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/*" 
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;