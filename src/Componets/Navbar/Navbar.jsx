import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">AnimeMangaToon</div>
      {/* Desktop Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Featured</li>
        <li>What to Watch</li>
        <li>Latest News and Reviews</li>
        <li>
          <input type="text" placeholder="Search..." className="search-input" />
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
        <span className={`bar ${isOpen ? "open" : ""}`}></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <input type="text" placeholder="Search..." className="search-input" />
          <li>Featured</li>
          <li>What to Watch</li>
          <li>Latest News and Reviews</li>

          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Fact Checking Policy</li>
          <li>Corrections Policy</li>
          <li>Ethics Policy</li>
          <li>DMCA Take Down Policy</li>
          <li>Editorial Policy</li>
          <li>Ownership Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
