import React from 'react';
import ProductCard from './ProductCard';
import '../styles/Home.css';

function Home() {
  return (
    <div>
      <div className="banner">
        <div className="banner-text">
          <h2>Experience Comfort & Craftsmanship</h2>
          <p>Our handcrafted chairs are made in America, designed for durability and comfort.</p>
        </div>
      </div>
      <div className="products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;