import React, { useRef } from "react";
import { Form, Button } from 'react-bootstrap';

function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;

    const userData = {
      name: name,
      email: email,
      phone: phone,
    };

    fetch("https://e-com-react-b03fb-default-rtdb.firebaseio.com/contacts.json", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Failed to submit data");
        }
      })
      .then((data) => {
        console.log("Data submitted successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // Clear input fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };

  return (
    <div>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={nameRef} placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" ref={phoneRef} placeholder="Enter phone number" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
