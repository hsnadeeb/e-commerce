// AutoLogin.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';

const AutoLogin = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from local storage

    if (token) {
      // If a token is found, automatically log the user in
      cartDispatch({ type: 'LOGIN', payload: token });
      navigate('/store');
    }
  }, [cartDispatch, navigate]);

  return null; // This component doesn't render anything, it's just for automatic login
};

export default AutoLogin;
