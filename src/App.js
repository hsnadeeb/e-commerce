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

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Hero />
        <Container>
          <Routes> {/* Use Routes to define your routes */}
            <Route path="/store" element={<Items />} />
            <Route path="/about" element={<About />} /> {/* Define the About route */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
