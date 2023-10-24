import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import Items from './components/items/items';
import Footer from './components/footer/footer';
import { CartProvider } from './components/context/cartcontext';
const App = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartProvider>
    <div>
      <Header toggleCart={toggleCart} />
      <Container>
        <Hero />
        <Items />
      </Container>
      <Footer />
      {isCartOpen && <Cart toggleCart={toggleCart} />}
    </div>
  </CartProvider>
  );
};

export default App;