// src/ShoeList.js
import React from 'react';
import { useCart } from './context/CartContext';
import './ShoeList.css';

const ShoeList = ({ shoes }) => {
  const { addToCart } = useCart();
  return (
    <div className='shoe-list-container'>
    <div className="shoe-list">
      {shoes.map(shoe => (
        <div key={shoe.id} className="shoe-item">
          <img src={shoe.image} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>${shoe.price}</p>
          <button onClick={() => addToCart(shoe)}>Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ShoeList;
