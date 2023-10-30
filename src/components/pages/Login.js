import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';

const Login = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const { cartState, cartDispatch } = useCart(); 

  const [isLoading, setIsLoading] = useState(false);
  const isLogin = true;

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);

    if (isLogin) {
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMFknIshqKWhedl-4WC-kcmTGUEBDXS-Y`, {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            res.json().then((data) => {
              let errorMessage = 'Authentication Failed';
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
              alert(errorMessage);
            });
          }
        })
        .then((data) => {
          if (data) {
            const token = data.idToken;
            localStorage.setItem('token', token);
            console.log('JWT (idToken):', token);
            cartDispatch({ type: 'LOGIN', payload: token }); // Use cartDispatch
            navigate('/store');
          }
        });
    } else {
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCMFknIshqKWhedl-4WC-kcmTGUEBDXS-Y', {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // Handle successful registration
        } else {
          res.json().then((data) => {
            let errorMessage = 'Registration Failed';
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            alert(errorMessage);
          });
        }
      });
    }

    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';
  };

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" ref={passwordInputRef} required />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit">Login</button>
        )}
      </form>
    </section>
  );
};

export default Login;
