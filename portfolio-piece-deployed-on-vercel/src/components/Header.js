import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'

function Header() {
  return (
    <header className="Header">
      <h1 className="logo">Doug's Adirondack Chairs</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/our-craftsmanship" className="nav-link">Our Craftsmanship</Link>
        <Link to="/reviews" className="nav-link">Reviews</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
