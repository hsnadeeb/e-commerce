import React, { useState } from 'react';
import { Navbar, Nav, Badge, Button } from 'react-bootstrap';
import Cart from '../cart/cart';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartcontext'; // Import useCart

const Header = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartState } = useCart(); // Get the cartState from the context

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/store">Store</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="secondary" onClick={toggleCart}>
          <i className="bi bi-cart-fill"></i> Cart{' '}
          <Badge pill bg="success">
            {cartState.cart.length}
          </Badge>
        </Button>
      </Navbar>
      {isCartOpen && <Cart onCloseCart={toggleCart} />}
    </div>
  );
};

export default Header;
