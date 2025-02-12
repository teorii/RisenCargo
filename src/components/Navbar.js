import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaretDownIcon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import RisenCargoLogoES from "../assets/RisenCargoLogoES_3nomargins.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src={RisenCargoLogoES} 
          alt="Navbar Risen Cargo Logo"
          className="navbar-logo"
        />
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <HamburgerMenuIcon />
        </button>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li className="nav-item">
          <Link to="/services">Services <CaretDownIcon className="desktop-only" /></Link>
          <div className="dropdown">
            <Link to="/services/ftlcartage" className="dropdown-item">FTL Cartage</Link>
            <Link to="/services/ltlcartage" className="dropdown-item">LTL Cartage</Link>
            <Link to="/services/warehousing&logistics" className="dropdown-item">Warehousing & Logistics</Link>
          </div>
        </li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Link to="/contact" className="contact-button">Get a Quote</Link>
    </nav>
  );
}

export default Navbar;