import React from 'react';
import { Navbar, Nav, Badge } from 'react-bootstrap';
import Cart from '../cart/cart';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/store">Store</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Cart />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;