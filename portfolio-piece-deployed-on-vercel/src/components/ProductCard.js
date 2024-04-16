import React from 'react';
import '../styles/ProductCard.css';

function ProductCard() {
    return (
        <div className="product">
            <img className="product-image" src='/images/chair1.jpg' alt="Classic Adirondack Chair"/>
            <h3>Classic Adirondack Chair</h3>
            <p>$299.99</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
}

export default ProductCard;