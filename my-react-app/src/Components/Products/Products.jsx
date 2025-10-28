import React, { useState, useEffect } from 'react';
import './Products.css';
import products from './productsData.js';
const Products = () => {
const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const initialIndexes = {};
    products.forEach(product => {
      initialIndexes[product.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);
  return (
    <div className="myntra-slider-container">
      <div className="products-grid">
        {products.map(product => (
          <div 
            key={product.id}
            className="product-card">
            <div className="product-image-container">
              <div className="image-slider">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} - View ${index + 1}`}
                    className={`product-image ${currentImageIndex[product.id] === index ? 'active' : ''}`}
                  />
                ))}
              </div>    
            </div>       
            <div className="product-details">
              <div className="brand-name">{product.brand}</div>
              <div className="product-name">{product.name}</div>
              <div className="price-container">
                <span className="current-price">₹{product.price}</span>
                <span className="original-price">₹{Math.round(product.price / (1 - product.discount/100))}</span>
                <span className="discount">{product.discount}% off</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;