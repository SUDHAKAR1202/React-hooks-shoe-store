import React, { createContext, useContext, useState} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (shoe) => {
        const existing = cart.find(item => item.id === shoe.id);
        if (existing) {
            setCart(
                cart.map(item => item.id === shoe.id
                    ? { ...item, quantity: item.quantity + 1}
                    : item
                )
            );
        } else {
            setCart([...cart, {...shoe, quantity: 1}]);
        }
    }
  const incrementQuantity = (shoe) => {
    setCart(
        cart.map(item => item.id === shoe.id 
            ? {...item, quantity: item.quantity + 1}
            : item
        )
    )
  }

  const decrementQuantity = (shoe) => {
    const existing = cart.find(item => item.id === shoe.id);
    if (existing.quantity === 1) {
        setCart(cart.filter(item => item.id !== shoe.id))
    } else {
        setCart(
        cart.map(item => item.id === shoe.id ? { ...item, quantity: item.quantity - 1}
            : item
        )
    );
    }
  }

  const total = cart.reduce((sum,item)=> sum + item.price * item.quantity, 0)

  return (
     <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decrementQuantity, total }}
    >
        {children}
        </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);