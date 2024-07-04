import React , { useState } from 'react';
import ShoeList from './ShoeList';
import Cart from './Cart';
import './App.css';

const initialShoes = [
  { id: 1, name: 'Shoe 1', price: 50, image: 'shoe1.jpg' },
  { id: 2, name: 'Shoe 2', price: 70, image: 'shoe2.jpg' },
  { id: 3, name: 'Shoe 3', price: 100, image: 'shoe3.jpg' },
  { id: 4, name: 'Shoe 4', price: 110, image: 'shoe4.jpg' },
  { id: 5, name: 'Shoe 5', price: 120, image: 'shoe5.jpg' },
  { id: 6, name: 'Shoe 6', price: 140, image: 'shoe6.jpg' },
];

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existingShoe = cart.find(item => item.id === shoe.id);
    if(existingShoe) {
      setCart(cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item ))
    } else {
      setCart([...cart, { ...shoe, quantity: 1}]);
    }
  }

  const removeFromCart = (shoe) => {
    const existingShoe = cart.find(item => item.id === shoe.id);
    if (existingShoe.quantity === 1) {
      setCart(cart.filter(item => item.id !== shoe.id));
    } else {
      setCart(cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  return (
    <div className="App">
     <div className='content'>
      <ShoeList shoes={initialShoes} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />

     </div>
      
    </div>
  );
}

export default App;
