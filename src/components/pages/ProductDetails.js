import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const ProductDetails = ({ productsArr }) => {
  const { productId } = useParams();
  const product = productsArr.find((p) => p.title === productId);

  if (!product) {
    return <div>Product not found.</div>;
  }

  
  const reviews = [
    { id: 1, text: 'Great product! Loved it.' },
    { id: 2, text: 'The quality is amazing.' },
    { id: 3, text: 'Highly recommended.' },
  ];

  return (
    <div>
    <Container>
      <Row>
        <Col sm={12} md={6} lg={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src={product.imageUrl} />
          </Card>
        </Col>
        <Col sm={12} md={6} lg={8} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Card.Text>Quantity: {product.quantity}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.text}</li>
        ))}
      </ul>
    </Container>
  </div>
  );
};

export default ProductDetails;
