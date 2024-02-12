import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CartPage.css';


const CartPage = ({ cart, onUpdateCart, onRemoveFromCart }) => {
  const navigate = useNavigate(); 

  const handleFinalizePurchase = () => {
    navigate('/account'); 
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-list">
        {cart.map((item, index) => (
          <div key={index} className="cart-item d-flex align-items-center">
            <img
              src={item.image}
              alt={item.name}
              className="item-image"
            />
            <div className="item-details flex-grow-1">
              {item.name} - ${item.price} x 
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
                className="item-quantity"
              />
              <button className="remove-btn" onClick={() => onRemoveFromCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="finalize-purchase mt-3">
        <button className="finalize-btn" onClick={handleFinalizePurchase}>Finalize Purchase</button>
        
      </div>
    </div>
  );
};

export default CartPage;
