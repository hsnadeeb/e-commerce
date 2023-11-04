import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';
import { Link } from 'react-router-dom';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity: 1,
  },
];

const Items = () => {
  const { cartState, cartDispatch } = useCart();
  const cleanMail = 'hasantestcom';
  const addToCart = async (product) => {
    const existingCartItem = cartState.cart.find(
      (item) => item.title === product.title
    );

    if (existingCartItem) {
     
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + product.quantity,
      };
      const id= updatedCartItem._id;
      console.log(id)

    
      try {
        const apiUrl = `https://crudcrud.com/api/e616e777b9294108bdeea53d5f0fc506/testCart${cleanMail}/${id}`;

        const response = await fetch(apiUrl, {
          method: 'PUT',
          body: JSON.stringify({
            imageUrl: updatedCartItem.imageUrl,
            price: updatedCartItem.price,
            quantity: updatedCartItem.quantity,
            title: updatedCartItem.title,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          console.log('Quantity updated successfully:', data);
        } else {
          throw new Error('Failed to update quantity');
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
      }

 
      const updatedCart = cartState.cart.map((item) =>
        item.title === product.title ? updatedCartItem : item
      );

      cartDispatch({ type: 'SET_CART', payload: updatedCart });
    } else {

      cartDispatch({ type: 'ADD_TO_CART', payload: product });

  
      
      const apiUrl = `https://crudcrud.com/api/e616e777b9294108bdeea53d5f0fc506/testCart${cleanMail}`;

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          body: JSON.stringify({
            _id: product._id,
            imageUrl: product.imageUrl,
            price: product.price,
            quantity: product.quantity,
            title: product.title,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Data submitted successfully:', data);
        } else {
          throw new Error('Failed to submit data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

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


