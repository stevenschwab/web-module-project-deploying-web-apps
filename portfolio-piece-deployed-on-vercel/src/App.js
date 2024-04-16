import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Craftsmanship from './components/Craftsmanship';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/our-craftsmanship" element={<Craftsmanship />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}