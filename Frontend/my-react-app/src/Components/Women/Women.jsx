import React from "react";
import "./Women.css";

const Women = ({isOpened}) => {
  return (
    <div className="dropdown-menu">
      
      <div className="dropdown-column">
        <h4>Indian & Fusion Wear</h4>
        <ul>
          <li>Kurtas & Suits</li>
          <li>Kurtis, Tunics & Tops</li>
          <li>Sarees</li>
          <li>Ethnic Wear</li>
          <li>Leggings, Salwars & Churidars</li>
          <li>Skirts & Palazzos</li>
          <li>Dress Materials</li>
          <li>Lehenga Cholis</li>
          <li>Dupattas & Shawls</li>
          <li>Jackets</li>
        </ul>
        <h5>Belts, Scarves & More</h5>
        <h5>Watches & Wearables</h5>
      </div>

      
      <div className="dropdown-column">
        <h4>Western Wear</h4>
        <ul>
          <li>Dresses</li>
          <li>Tops</li>
          <li>Tshirts</li>
          <li>Jeans</li>
          <li>Trousers & Capris</li>
          <li>Shorts & Skirts</li>
          <li>Co-ords</li>
          <li>Jumpsuits</li>
          <li>Shrugs</li>
          <li>Jackets & Coats</li>
          <li>Blazers & Waistcoats</li>
        </ul>
        <h5>Plus Size</h5>
      </div>

    
      <div className="dropdown-column">
        <h4>Maternity</h4>
        <h4>Sunglasses & Frames</h4>
        <h4>Footwear</h4>
        <ul>
          <li>Flats</li>
          <li>Casual Shoes</li>
          <li>Heels</li>
          <li>Boots</li>
          <li>Sports Shoes & Floaters</li>
        </ul>
        <h4>Sports & Active Wear</h4>
        <ul>
          <li>Clothing</li>
          <li>Footwear</li>
          <li>Sports Accessories</li>
          <li>Sports Equipment</li>
        </ul>
      </div>

      
      <div className="dropdown-column">
        <h4>Lingerie & Sleepwear</h4>
        <ul>
          <li>Bra</li>
          <li>Briefs</li>
          <li>Shapewear</li>
          <li>Sleepwear & Loungewear</li>
          <li>Swimwear</li>
          <li>Camisoles & Thermals</li>
        </ul>
        <h4>Beauty & Personal Care</h4>
        <ul>
          <li>Makeup</li>
          <li>Skincare</li>
          <li>Premium Beauty</li>
          <li>Lipsticks</li>
          <li>Fragrances</li>
        </ul>
      </div>

      
      <div className="dropdown-column">
        <h4>Gadgets</h4>
        <ul>
          <li>Smart Wearables</li>
          <li>Fitness Gadgets</li>
          <li>Headphones</li>
          <li>Speakers</li>
        </ul>
        <h4>Jewellery</h4>
        <ul>
          <li>Fashion Jewellery</li>
          <li>Fine Jewellery</li>
          <li>Earrings</li>
        </ul>
        <h4>Backpacks</h4>
        <h4>Handbags, Bags & Wallets</h4>
        <h4>Luggages & Trolleys</h4>
      </div>
    </div>
  );
};

export default Women;
