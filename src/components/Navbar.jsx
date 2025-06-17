import React from 'react';
import './Navbar.css'; // optional
import logo from "../logo.jpg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 border-bottom shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Logo aligned to the left */}
        <a className="navbar-brand fw-bold" href="/">
          <img src={logo} alt="logo" />
        </a>

        {/* Toggle button for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right side menu */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <Link to="/services"><li className="nav-item"><a className="nav-link" href="/">Services</a></li></Link>
           <Link to="/ourvehicles"> <li className="nav-item"><a className="nav-link" href="/">Pricing</a></li></Link>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Company
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">News</a></li>
                <li><a className="dropdown-item" href="/">Success Stories</a></li>
                <li><a className="dropdown-item" href="/">About Us</a></li>
              </ul>
            </li>

            <li className="nav-item"><a className="nav-link" href="/">Appointment</a></li>
          

            {/* Contact info and name */}
           
            <li className="nav-item">
              <button className="btn btn-outline-primary btn-sm ms-2">Contact Us</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
