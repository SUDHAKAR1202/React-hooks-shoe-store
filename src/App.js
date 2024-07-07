import React , { useState } from 'react';
import ShoeList from './ShoeList';
import Cart from './Cart';
import Header from './Header';
import './App.css';

const initialShoes = [
  { id: 1, name: 'Adidas', price: 50, image: 'shoe1.jpg' },
  { id: 2, name: 'Levis', price: 70, image: 'shoe2.jpg' },
  { id: 3, name: 'Reebok', price: 100, image: 'shoe3.jpg' },
  { id: 4, name: 'Puma', price: 80, image: 'shoe4.jpg' },
  { id: 5, name: 'Woodland', price: 120, image: 'shoe5.jpg' },
  { id: 6, name: 'Crocs', price: 140, image: 'shoe6.jpg' },
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

  const incrementQuantity = (shoe) => {
    setCart(cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item ))
  }

  const decrementQuantity = (shoe) => {
    const existingShoe = cart.find(item => item.id === shoe.id);
    if (existingShoe.quantity === 1) {
      setCart(cart.filter(item => item.id !== shoe.id));
    } else {
      setCart(cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  return (
    <div className="App">
      <Header />
     <div className='content'>
     <div className="products-container">
      <ShoeList shoes={initialShoes} addToCart={addToCart} />
      <div className='cart-container'>
      <Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
      </div>
      </div>

     </div>
      
    </div>
  );
}

export default App;
