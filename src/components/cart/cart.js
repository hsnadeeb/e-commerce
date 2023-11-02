import React from 'react';
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';

const Cart = ({ onCloseCart }) => {
  // , isLoggedIn
  const { cartState, isLoggedIn } = useCart();

  return (
    <div className="cart-modal">
      <Container className="d-flex justify-content-center">
        <div className="cart">
          <Button variant="secondary justify-content-center" onClick={onCloseCart}>
            Close
          </Button>
          <h2>Your Cart</h2>
          {isLoggedIn ? (
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
          ) : (
            <p>Please log in to see your cart items.</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Cart;

