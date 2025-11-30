import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import products from "../Components/Products/productsData";
import "../Components/Products/Products.css";

const Beauty = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  
  // Filter products by Beauty category
  const beautyProducts = products.filter(product => product.category === "Beauty");

  useEffect(() => {
    const initialIndexes = {};
    beautyProducts.forEach((product) => {
      initialIndexes[product.id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, []);

  const navigateToCart = (product) => {
    navigate('/cartPage', {
      state: { product: product }
    });
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div className="myntra-slider-container">
          <div style={{ padding: "20px" }}>
            <h2 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold" }}>
              Beauty & Personal Care
            </h2>
          </div>
          <div className="products-grid">
            {beautyProducts.map((product) => (
              <div key={product.id} className="product-card" onClick={() => navigateToCart(product)}>
                <div className="product-image-container">
                  <div className="image-slider">
                    {product.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className={`product-image ${
                          currentImageIndex[product.id] === index ? "active" : ""
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="product-details">
                  <div className="brand-name">{product.brand}</div>
                  <div className="product-name">{product.name}</div>
                  <div className="price-container">
                    <span className="current-price">₹{product.price}</span>
                    <span className="original-price">
                      ₹{Math.round(product.price / (1 - product.discount / 100))}
                    </span>
                    <span className="discount">{product.discount}% off</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Beauty;

