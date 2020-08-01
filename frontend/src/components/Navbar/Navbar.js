import React, { Component } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends Component {
  state = {
    isOpen: false,
  };

  navLinks = () => {
    const navLinks = document.querySelectorAll('.navbar-links li');
    const navbarBtn = document.querySelector('.navbar-btn');

    navbarBtn.addEventListener('click', function () {
      navLinks.forEach((item, index) => {
        item.style.animation = `navLinks 0.5s ease forwards ${index / 7 + 6}s`;
        console.log('test');
      });
    });
  };

  handleToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-center">
          <div
            className={
              this.state.isOpen ? 'transition-div nav-active' : 'transition-div'
            }
          ></div>
          <div
            className={
              this.state.isOpen
                ? 'navbar-header nav-header-active'
                : 'navbar-header'
            }
          >
            <h1>Community Project</h1>

            <ul
              className={
                this.state.isOpen ? 'navbar-links nav-active' : 'navbar-links'
              }
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/my-orgs">My Orgs </Link>
              </li>
              <li>
                <Link to="/events">Events </Link>
              </li>
              <li className="login-btn">
                <Link to="/login">Sign up </Link>
              </li>
            </ul>
            <button
              type="button"
              onClick={this.handleToggle}
              // onClick={this.navLinks}
              className="navbar-btn"
            >
              <FaHandsHelping size={35} className="nav-icon" />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
