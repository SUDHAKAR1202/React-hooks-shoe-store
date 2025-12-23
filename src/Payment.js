import { useCart } from "./context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();

  return (
    <div className="payment-page">
      <div className="payment-card">
        <h2>Payment Details</h2>

        <div className="cart-summary">
          {cart.map(item => (
            <div className="cart-row" key={item.id}>
              <span>{item.name} x {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
          <hr />
          <div className="cart-total">
            <strong>Total</strong>
            <strong>${total}</strong>
          </div>
        </div>

        <form className="payment-form">
          <input type="text" placeholder="Card Number" required />
          <div className="row">
            <input type="text" placeholder="MM/YY" required />
            <input type="password" placeholder="CVV" required />
          </div>
          <button type="submit" className="pay-btn">
            Pay Now
          </button>
        </form>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← Back to Cart
        </button>
      </div>
    </div>
  );
};

export default Payment;
