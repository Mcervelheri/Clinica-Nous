import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NousLandingPage from './NousLandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NousLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
