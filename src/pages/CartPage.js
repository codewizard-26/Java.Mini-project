import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className="container mt-4">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <div>
          <ul className="list-group">
            {cartItems.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong>
                  <br />
                  <small>${item.price.toFixed(2)} x {item.quantity}</small>
                </div>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <h4 className="mt-3">Total: ${totalPrice.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default CartPage;