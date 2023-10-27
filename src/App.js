import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Items from './components/items/items';
import Footer from './components/footer/footer';
import { CartProvider } from './components/context/cartcontext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import About from './components/pages/About';
import Home from './components/pages/Home';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Hero />
        <Container>
          <Routes> 
            <Route path="/store" element={<Items />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} /> 
          </Routes>
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
