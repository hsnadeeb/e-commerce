import React, { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';

const Cart = () => {
  const { cartState } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="cart">
      <Button variant="secondary" onClick={toggleCart}>
        Cart <Badge variant="light">{cartState.cart.length}</Badge>
      </Button>
      {isOpen && (
        <div className="cart-content">
          {cartState.cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
