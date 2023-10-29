import React, { useState } from 'react';
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';

const Cart = ({ onCloseCart }) => {
  const { cartState } = useCart();

  return (
    <div className="cart-modal">
      <Container className="d-flex justify-content-center">
        <div className="cart">
          <Button variant="secondary justify-content-center" onClick={onCloseCart}>
            Close
          </Button>
          <h2>Your Cart</h2>
          <ul>
            {cartState.cart.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
