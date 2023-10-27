import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../context/cartcontext';

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

  const addToCart = (product) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <Container className="items">
      <Row>
        {productsArr.map((product, index) => (
          <Col key={index} sm={4} md={4} lg={4} xl={4} className="mb-3">
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
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
