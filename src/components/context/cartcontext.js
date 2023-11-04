import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const CartContext = createContext(
  {
    cartState: { cart: [] },
    cartDispatch: () => {},
    isLoggedIn: false,
  }
);

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
     
      const existingProductIndex = state.cart.findIndex(
        (product) => product.title === action.payload.title
      );

      if (existingProductIndex !== -1) {
     
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += 1;
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
    
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

      case 'REMOVE_FROM_CART':
        const updatedCart = state.cart.filter(
          (product) => product._id !== action.payload._id
        );
        return {
          ...state,
          cart: updatedCart,
        };

      case 'SET_CART':
        return {
    ...state,
    cart: action.payload,
       };

    default:
      return state;
  }
};

export const CartProvider = ({ children, isLoggedIn }) => {
  const cleanMail = 'hasantestcom';
    const apiUrl = `https://crudcrud.com/api/e616e777b9294108bdeea53d5f0fc506/testCart${cleanMail}`;
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl); 
        console.log(response);
        
        // const cartItems = response.data.map(({ _id, ...item }) => item); 
        const cartItems = response.data.map((item) => item); 
        console.log(cartItems);
        cartDispatch({ type: 'SET_CART', payload: cartItems });
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch, isLoggedIn }}>
      {children}
    </CartContext.Provider>
  );
};
