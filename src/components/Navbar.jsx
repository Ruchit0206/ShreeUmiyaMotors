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
            <Link to="/" className='nav-link'><li className="nav-item ">Home</li></Link>
            <Link to="/services" className='nav-link'><li className="nav-item">Services</li></Link>
           <Link to="/ourvehicles" className='nav-link'> <li className="nav-item">Pricing</li></Link>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Company
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" >News</Link></li>
                <li><Link className="dropdown-item" >Success Stories</Link></li>
                <li><Link className="dropdown-item" >About Us</Link></li>
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
