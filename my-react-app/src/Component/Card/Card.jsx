import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Adidas from '../Images/Adidas.jpg';
import BearHouse from '../Images/BearHouse.jpg';
import Glitchez from '../Images/Glitchez.jpg';
import Max from '../Images/Max.jpg';
const Card = () => {
  return (
    <div className='product'>
       <ProductCard
         image={Adidas}
         name="Adidas"
         disc_price="Rs.499"
         price="Rs.899"
         discription="Round Neck T-shirt"
       />
       <ProductCard
         image={BearHouse}
         name="The BearHouse"
         disc_price="Rs.799"
         price="Rs.1899"
         discription="Men's Purple Drop Shoulder Relaxed Fit Polo Neck T-Shirt"
       />
       <ProductCard
         image={Glitchez}
         name="Glitchez"
         disc_price="Rs.599"
         price="Rs.1999"
         discription="Solid Drop-Shoulder Sleeves Round Neck Oversized T-shirt"
       />
       <ProductCard
         image={Max}
         name="Maxx"
         disc_price="Rs.999"
         price="Rs.2499"
         discription="Men Cotton Textured Long Sleeve Lounge Regular Fit T-Shirt"
       />
    </div>
  )
}

export default Card;

