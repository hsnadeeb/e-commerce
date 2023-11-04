import React from 'react';
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';
import axios from 'axios';

const Cart = ({ onCloseCart }) => {
  const { cartState, cartDispatch, isLoggedIn } = useCart();
  
  const cleanMail='hasantestcom';

  const removeFromCart = async (item) => {
    const apiUrl = `https://crudcrud.com/api/e616e777b9294108bdeea53d5f0fc506/testCart${cleanMail}`;
    try {
      
      await axios.delete(`${apiUrl}/${item._id}`);
      
      cartDispatch({ type: 'REMOVE_FROM_CART', payload: item });
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

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
                    <Button variant="danger" onClick={() => removeFromCart(item)}>
                  Remove
                </Button>
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

