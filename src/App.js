import React , { useState } from 'react';
import ShoeList from './ShoeList';
import Cart from './Cart';
import Payment from './Payment';
import Header from './Header';
import { Routes, Route } from "react-router-dom";
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
  return (
      <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="products-container">
              <ShoeList shoes={initialShoes} />
              <Cart />
            </div>
          }
        />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
