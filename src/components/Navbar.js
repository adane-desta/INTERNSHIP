// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';
import '../styles/global.css';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      <header>
        <div className="container header-container">
          <Link to="/" className="logo">
          <img src="/images/logo.png" alt="EthioNest Logo" className="logo-img" />
          </Link>

          {/* Main Nav */}
          <nav className="desktop-menu">
            <ul className="sidebar-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/properties">Properties</Link></li>
              <li><Link to="/companies">Companies</Link></li>
              <li><Link to="/saved">Saved</Link></li>
            </ul>
          </nav>

          {/* Sidebar (hidden on desktop) */}
          <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>&times;</button>
            <nav>
              <ul className="sidebar-menu">
                <li><Link to="/" onClick={toggleSidebar}>Home</Link></li>
                <li><Link to="/properties" onClick={toggleSidebar}>Properties</Link></li>
                <li><Link to="/companies" onClick={toggleSidebar}>Companies</Link></li>
                <li><Link to="/saved" onClick={toggleSidebar}>Saved</Link></li>
              </ul>
            </nav>
          </div>

          {/* Right-side icons */}
          <div className="user-actions">
            <Link to="/notifications" aria-label="Notifications">
              <FontAwesomeIcon icon={faBell} />
            </Link>
            <div className="user-avatar">
              <Link to="/welcome">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>

            {/* Hamburger */}
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
