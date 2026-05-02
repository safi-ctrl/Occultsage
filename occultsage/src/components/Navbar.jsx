import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTwitter, FaChevronDown } from 'react-icons/fa';
import "./Navbar.css";
import logo from "../assets/safiii.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); 

  const handleLinkClick = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="site-header">
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="contact-info">
            Reach us : 9871990719 | connect@occultsage.com
          </div>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterestP /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@VastuShikhar" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="navbar-left">
            <NavLink to="/" onClick={handleLinkClick} className="logo-link">
              <div className="logo-text-group">
                <span className="logo-main">Occult<span className="accent">sage</span></span>
                <p className="logo-tagline">Simple Wisdom for Happy Living</p>
              </div>
            </NavLink>
          </div>

          {/* Menu logic */}
          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li><NavLink to="/" onClick={handleLinkClick}>HOME</NavLink></li>
            <li><NavLink to="/about" onClick={handleLinkClick}>ABOUT US</NavLink></li>

            {/* Courses Dropdown - Sirf yahi band/khulega toggle par */}
            <li className={`dropdown ${dropdownOpen ? "mobile-open" : ""}`}>
              <span className="dropdown-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
                COURSES <FaChevronDown className={`arrow-icon ${dropdownOpen ? "rotate" : ""}`} />
              </span>
              <ul className="dropdown-menu">
                <li><NavLink to="/astrology" onClick={handleLinkClick}>Astrology</NavLink></li>
                <li><NavLink to="/course/astrologyvastucombo" onClick={handleLinkClick}>Astro + Vastu Combo</NavLink></li>
                <li><NavLink to="/course/astrologyvedic" onClick={handleLinkClick}>Vedic Astrology</NavLink></li>
                <li><NavLink to="/course/numerology" onClick={handleLinkClick}>Numerology</NavLink></li>
                <li><NavLink to="/course/tarotcard" onClick={handleLinkClick}>Tarot Card</NavLink></li>
                <li><NavLink to="/course/palmistry" onClick={handleLinkClick}>Palmistry</NavLink></li>
                <li><NavLink to="/course/facereading" onClick={handleLinkClick}>Face Reading</NavLink></li>
                <li><NavLink to="/course/watchreading" onClick={handleLinkClick}>Watch Reading</NavLink></li>
                <li><NavLink to="/course/motionreading" onClick={handleLinkClick}>Motion Reading</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/blog" onClick={handleLinkClick}>BLOG</NavLink></li>
            <li><NavLink to="/Vedeos" onClick={handleLinkClick}>VIDEOS</NavLink></li>
            <li><NavLink to="/contact" onClick={handleLinkClick}>CONTACT US</NavLink></li>
          </ul>

          {/* Hamburger Icon Wapas Set Kiya */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;