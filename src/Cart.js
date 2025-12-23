import React from "react";
import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const Cart = () => {
const { cart, incrementQuantity, decrementQuantity, total } = useCart();
const navigate = useNavigate();
   

    return (
     <div className="cart">
        <h2>Shopping Cart</h2>

            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>${item.price} x {item.quantity}</p>
                    <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => incrementQuantity(item)}>+</button>
                        </div>
                    <button onClick={() =>  decrementQuantity(item)}>Remove</button>
                    </div>
            ))}
            <h3>Total: ${total}</h3>
            {cart.length > 0 && (
                <button onClick={() => navigate("/payment")}>
                    Proceed to Payment
                </button>
            )}

     </div>
    )
}
export default Cart;