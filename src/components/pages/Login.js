import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cartcontext';
import { Form, Button, Spinner } from 'react-bootstrap';

const Login = (props) => {
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
            props.setIsLoggedIn(true);
            cartDispatch({ type: 'LOGIN', payload: token });
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
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" ref={emailInputRef} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" ref={passwordInputRef} required />
        </Form.Group>
        {isLoading ? (
          <Button variant="primary" disabled>
            <Spinner animation="border" size="sm" /> Loading...
          </Button>
        ) : (
          <Button type="submit" variant="primary">
            Login
          </Button>
        )}
      </Form>
    </section>
  );
};

export default Login;
