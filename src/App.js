import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Items from './components/items/items';
import Footer from './components/footer/footer';
import { CartProvider } from './components/context/cartcontext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import ProductDetails from './components/pages/ProductDetails';
import Login from './components/pages/Login';
// import AutoLogin from './components/pages/AutoLogin';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        'https://prasadyash2411.github.io/ecom-website/img/Album%3.png',
      quantity: 1,
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl:
        'https://prasadyash2411.github.io/ecom-website/img/Album%4.png',
      quantity: 1,
    },
  ];

  return (
    <CartProvider>
      <Router>
        <Header />
        <Hero />
        <Container>
          {/* <AutoLogin /> */}
          <Routes>

            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store" element={< Items/>} />
            <Route
              path="/product/:productId"
              element={<ProductDetails productsArr={productsArr} />}
            />
         



            {/* <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            {isLoggedIn ? (
              <Route path="/login" element={<Navigate to="/products" />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}
            {isLoggedIn ? (
              <Route path="/products" element={<Items />} />
            ) : (
              <Route path="/products" element={<Navigate to="/login" />} />
            )}
            <Route
              path="/product/:productId"
              element={<ProductDetails productsArr={productsArr} />}
            /> */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
