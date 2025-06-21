import React from 'react';
import './Navbar.css';
import logo from "../logo.jpg";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const closeMobileMenu = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="/">
          <img src={logo} alt="logo" />
        </a>

        {/* Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">

            <li className="nav-item">
              <Link to="/" className='nav-link' onClick={closeMobileMenu}>Home</Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className='nav-link' onClick={closeMobileMenu}>Services</Link>
            </li>

            <li className="nav-item">
              <Link to="/ourvehicles" className='nav-link' onClick={closeMobileMenu}>Vehicles</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Company
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/underdevelopment" className="dropdown-item" onClick={closeMobileMenu}>News</Link></li>
                <li><Link to="/success" className="dropdown-item" onClick={closeMobileMenu}>Success Stories</Link></li>
                <li><Link to="/underdevelopment" className="dropdown-item" onClick={closeMobileMenu}> Team</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>About Us</Link>
            </li>

            <li className="nav-item">
              <Link to ="/contactus">
              <button className="btn btn-outline-primary btn-sm ms-2" onClick={closeMobileMenu}>Contact Us</button>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
