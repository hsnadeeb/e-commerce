import React, { useState } from 'react';
import { Button, Badge } from 'react-bootstrap';

const Cart = () => {
  const [cartElements, setCartElements] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const removeItem = (itemIndex) => {
    const updatedCart = cartElements.filter((_, index) => index !== itemIndex);
    setCartElements(updatedCart);
  };

  return (
    <div className="cart">
      <Button variant="secondary" onClick={toggleCart}>
        Cart <Badge variant="light">{cartElements.length}</Badge>
      </Button>
      {isOpen && (
        <div className="cart-content">
          {cartElements.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div>
                <p>{item.title}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <Button variant="danger" onClick={() => removeItem(index)}>
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;