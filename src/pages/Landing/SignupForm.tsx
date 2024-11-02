import { Button, Form } from "react-bootstrap";
import { supabase } from "../../supabaseClient";
import React, { useState } from "react";

export const SignupForm: React.FC<{ switchToLogin: () => void }> = ({
  switchToLogin,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
        emailRedirectTo: "/portofolio-burhan/dbcustomer", // Redirect after email confirmation if needed
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
      setSuccessMessage("Check your email for the confirmation link!");
      switchToLogin(); // Automatically switch to login after signup
    }
  };

  return (
    <Form onSubmit={handleSignup} style={{ maxHeight: "380px" }}>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}

      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

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
        Sign Up
      </Button>

      <p className="mt-3">
        Already have an account?{" "}
        <span
          onClick={switchToLogin}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Login
        </span>
      </p>
    </Form>
  );
};
