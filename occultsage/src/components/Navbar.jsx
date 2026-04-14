import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTwitter, FaChevronDown } from 'react-icons/fa';
import "./Navbar.css";
import logo from "../assets/safiii.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="logo-link">
              <div className="logo-text-group">
                <span className="logo-main">Occult<span className="accent">sage</span></span>
                <p className="logo-tagline">Simple Wisdom for Happy Living</p>
              </div>
            </NavLink>
          </div>

          <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setMenuOpen(false)}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")} onClick={() => setMenuOpen(false)}>
                ABOUT US
              </NavLink>
            </li>

           
            <li className="dropdown">
              <span className="dropdown-trigger">
                COURSES <FaChevronDown className="arrow-icon" />
              </span>
              <ul className="dropdown-menu">
                
                <li><NavLink to="/astrology" onClick={() => setMenuOpen(false)}>Astrology</NavLink></li>
                
                <li><NavLink to="/course/astrologyvastucombo" onClick={() => setMenuOpen(false)}>Astro + Vastu Combo</NavLink></li>
                <li><NavLink to="/course/astrologyvedic" onClick={() => setMenuOpen(false)}>Vedic Astrology</NavLink></li>
                <li><NavLink to="/course/numerology" onClick={() => setMenuOpen(false)}>Numerology</NavLink></li>
                <li><NavLink to="/course/tarotcard" onClick={() => setMenuOpen(false)}>Tarot Card</NavLink></li>
                <li><NavLink to="/course/palmistry" onClick={() => setMenuOpen(false)}>Palmistry</NavLink></li>
                <li><NavLink to="/course/facereading" onClick={() => setMenuOpen(false)}>Face Reading</NavLink></li>
                <li><NavLink to="/course/watchreading" onClick={() => setMenuOpen(false)}>Watch Reading</NavLink></li>
                <li><NavLink to="/course/motionreading" onClick={() => setMenuOpen(false)}>Motion Reading</NavLink></li>
              </ul>
            </li>

            <li><NavLink to="/blog" onClick={() => setMenuOpen(false)}>BLOG</NavLink></li>
            <li><NavLink to="/Vedeos" onClick={() => setMenuOpen(false)}>VIDEOS</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT US</NavLink></li>
            <li><NavLink to="/login" className="login-link" onClick={() => setMenuOpen(false)}>LOGIN</NavLink></li>
          </ul>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;