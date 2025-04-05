import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      navigate("/"); // Redirect back to login
    } catch (error) {
      alert("Error signing up: " + error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h2>Sign Up</h2>
      <Form onSubmit={handleSignUp}>
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
          Sign Up
        </Button>

        {/* Back to Login Button */}
        <Button variant="link" onClick={() => navigate("/")}>
          Already have an account? Login
        </Button>
      </Form>
    </Container>
  );
};

export default SignUp;
