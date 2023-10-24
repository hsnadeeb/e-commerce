// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Items from './components/items/items';
import Footer from './components/footer/footer';
import { CartProvider } from './components/context/cartcontext';

const App = () => {
  return (
    <CartProvider>
        <Header />
        <Container>
        <Hero />
        <Items />
        </Container>
        <Footer />
    </CartProvider>
  );
};

export default App;
