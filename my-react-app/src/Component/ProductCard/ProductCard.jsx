import React from 'react';
import './ProductCard.css';

import Image from '../Images/Adidas.jpg';
const productCard = (props) => {
  return (
    <div className='product_box'>
       <img src={props.image} alt="" />
       <div className="product_name">
        <h2>{props.name}</h2>
        <h4 className='price'> {props.disc_price}<span>{props.price}</span></h4>
        <p>{props.discription}</p>
        </div>
       
    </div>
  )
}

export default productCard;