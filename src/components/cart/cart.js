
import React, { useState, useEffect } from 'react';
import { Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';
import axios from 'axios';

const Cart = ({ onCloseCart }) => {
  const { cartState } = useCart();
  const [cartItems, setCartItems] = useState([]);

  // Replace 'prasadyash123gmailcom' with the actual user's email (without @ and dot).
  const userEmail = 'hasantestcom';

  // useEffect(() => {
  //   // Fetch cart items from the CRUD CRUD API.
  //   fetch(`https://crudcrud.com/api/d202460c6a4f4ec48d21f6b7fe7f9546/cart${userEmail}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Assuming the API returns an array of cart items.
  //       if (data && data.cart) {
  //         setCartItems(data.cart);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching cart items:', error);
  //     });
  // }, [cartState]); // Run this effect only once when the component mounts.

  useEffect(() => {
    axios.get(`https://crudcrud.com/api/d202460c6a4f4ec48d21f6b7fe7f9546/cart/${userEmail}`)
      .then((response) => {
        // if (response.data && response.data.cart) {
        //   setCartItems(response.data.cart);
        // }
        setCartItems(response.data.cart);
      })
      .catch((error) => {
        console.error('Error fetching cart items:', error);
      });
  }, [cartState]);

  return (
    <div className="cart-modal">
      <Container className="d-flex justify-content-center">
        <div className="cart">
          <Button variant="secondary justify-content-center" onClick={onCloseCart}>
            Close
          </Button>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
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

