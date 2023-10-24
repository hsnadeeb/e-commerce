// Footer.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>The Generics</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="https://www.youtube.com">Youtube</Nav.Link>
        <Nav.Link href="https://www.spotify.com">Spotify</Nav.Link>
        <Nav.Link href="https://www.facebook.com">Facebook</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
