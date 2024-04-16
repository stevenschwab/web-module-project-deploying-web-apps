import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header className="header">
      <h1 className="logo">Doug's Adirondack Chairs</h1>
      <button className="hamburger" onClick={toggleNav}>
        {/* Hamburger Icon */}
        <span>☰</span>
      </button>
      <nav className={isNavVisible ? "nav-visible" : ""}>
        <Link to="/" className="nav-link" onClick={toggleNav}>Home</Link>
        <Link to="/about-us" className="nav-link" onClick={toggleNav}>About Us</Link>
        <Link to="/our-craftsmanship" className="nav-link" onClick={toggleNav}>Our Craftsmanship</Link>
        <Link to="/reviews" className="nav-link" onClick={toggleNav}>Reviews</Link>
        <Link to="/contact" className="nav-link" onClick={toggleNav}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
