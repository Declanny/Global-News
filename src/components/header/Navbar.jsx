// src/components/header/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { AiOutlineSearch } from 'react-icons/ai'; // Search icon
import { FaGlobe, FaLaptopCode } from 'react-icons/fa'; // Globe and tech icons
import './Navbar.css';

const Navbar = () => {
  const [filterText, setFilterText] = useState('');

  const handleSearchChange = (e) => {
    setFilterText(e.target.value);
    // Add your filtering logic here based on filterText
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">News</div>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            <FaGlobe className="navbar-icon" />
            Global News
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/tech-trends" className="navbar-link">
            <FaLaptopCode className="navbar-icon" />
            Tech Trend
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/global-trend" className="navbar-link">
            <FaGlobe className="navbar-icon" />
            Global Trend
          </Link>
        </li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={handleSearchChange}
          className="search-input"
        />
        <AiOutlineSearch className="search-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
