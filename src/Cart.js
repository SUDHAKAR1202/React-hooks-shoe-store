import React from "react";
import './Cart.css';

const Cart = ({ cart, removeFromCart}) => {
    const getTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    return (
     <div className="cart">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
          <div>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                    <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
            ))}
            <h3>Total: ${getTotal()}</h3>
            </div>
        )}

     </div>
    )
}

export default Cart;