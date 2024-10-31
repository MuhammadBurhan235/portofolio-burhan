import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { supabase } from "../../supabaseClient";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

export const SigninForm: React.FC<{ switchToSignup: () => void }> = ({
  switchToSignup,
}) => {
  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Signin successful!");
      navigate("http://localhost:5173/portofolio-burhan/tridiporto"); // Redirect after sign-in
    }
  };

  return (
    <Form onSubmit={handleSignin}>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        Sign In
      </Button>

      <p className="mt-3">
        Don't have an account?{" "}
        <span
          onClick={switchToSignup}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </Form>
  );
};
