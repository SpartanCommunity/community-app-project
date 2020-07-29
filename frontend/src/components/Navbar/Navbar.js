import React, { Component } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <div className="navbar-header">
            <div className="empty-space"></div>
            <h1>Community Project</h1>
            <Link to="/">
              <FaHandsHelping size={35} className="nav-icon" />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
