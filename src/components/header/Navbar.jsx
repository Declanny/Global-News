import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai'; // Importing the search icon
import { FaGlobe, FaLaptopCode } from 'react-icons/fa'; // Importing globe and tech icons
import './Navbar.css'; // Import your CSS file for styling

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
          <FaGlobe className="navbar-icon" />
          Global News
        </li>
        <li className="navbar-item">
          <FaLaptopCode className="navbar-icon" />
          Tech Trend
        </li>
        <li className="navbar-item">
          <FaGlobe className="navbar-icon" />
          Global Trend
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
