import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurCraftsmanship from './components/OurCraftsmanship';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/our-craftsmanship" element={<OurCraftsmanship />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}