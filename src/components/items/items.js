import React, { useEffect } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';
import { Link } from 'react-router-dom';
import axios from 'axios';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl:
      'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1,
  },
];

const Items = () => {
  const { cartDispatch } = useCart();
  

  const userEmail = 'hasantestcom';

  const addToCart = (product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  // useEffect(() => {
  //   // Extract the cart items from cartState.
  //   const cartItems = cartDispatch.cart;
  //   console.log(cartItems);
  //   // Make a POST request to store cart items on CRUD CRUD API.
  //   fetch(`https://crudcrud.com/api/d202460c6a4f4ec48d21f6b7fe7f9546/cart${userEmail}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
      
  //     body: JSON.stringify({ cart: cartItems }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Handle the response if needed.
  //     })
  //     .catch((error) => {
  //       console.error('Error storing cart items:', error);
  //     });
  // }, [cartDispatch.cart]);

  useEffect(() => {
    const cartItems = cartDispatch.cart;
    console.log(cartItems);

    // Use Axios to make a POST request
     axios.post(`https://crudcrud.com/api/d202460c6a4f4ec48d21f6b7fe7f9546/cart${userEmail}`, {
      cart:cartItems,
    })
      .then((response) => {
        // Handle the response if needed.
      })
      .catch((error) => {
        console.error('Error storing cart items:', error);
      });
  }, [cartDispatch]);

  return (
    <Container className="items">
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} sm={4} md={4} lg={4} xl={4} className="mb-3">
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>
                  <Link to={`/product/${product.title}`}>{product.title}</Link>
                </Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Items;


// title: cartItems.title,
//       price: cartItems.price,
//       imageUrl: cartItems.imageUrl,
//       quantity: cartItems.quantity
// cart: cartItems,