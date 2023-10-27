import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Check if the product is already in the cart
      const existingProductIndex = state.cart.findIndex(
        (product) => product.title === action.payload.title
      );

      if (existingProductIndex !== -1) {
        // If the product already exists, increase its quantity
        const updatedCart = [...state.cart];
        updatedCart[existingProductIndex].quantity += action.payload.quantity;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // If the product is not in the cart, add it
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};
