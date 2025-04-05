import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button, Form, Container } from "react-bootstrap";

const SignIn = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Simulate authentication (Replace with Firebase Auth)
    setUser({ email });
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <Container className="mt-5">
      <h2>Sign In</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </Container>
  );
};

export default SignIn;
