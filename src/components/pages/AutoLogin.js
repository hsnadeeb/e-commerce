// AutoLogin.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';

const AutoLogin = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (token) {
      
      cartDispatch({ type: 'LOGIN', payload: token });
      navigate('/store');
    }
  }, [cartDispatch, navigate]);

  return null; 
};

export default AutoLogin;
