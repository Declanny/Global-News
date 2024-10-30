// src/App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/header/Navbar';
import TechTrend from './components/pages/TechTrend'; // Import TechTrend component
import GlobalTrend from './components/pages/GlobalTrend'; // Import GlobalTrend component

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Route for Home */}
          <Route path="/tech-trends" element={<TechTrend />} /> {/* Route for Tech Trends */}
          <Route path="/global-trend" element={<GlobalTrend />} /> {/* Route for Global Trends */}

          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
