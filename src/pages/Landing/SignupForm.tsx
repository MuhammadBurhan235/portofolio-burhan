import { Button, Form } from "react-bootstrap";
import { supabase } from "../../supabaseClient";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export const SignupForm: React.FC<{ switchToLogin: () => void }> = ({
  switchToLogin,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username },
      },
    });

    if (data?.user) {
      // Setelah signup berhasil, masukkan role customer ke tabel user_roles
      await supabase
        .from("user_roles")
        .insert({ id: data.user.id, role: "customer" });
      setSuccessMessage("Registration successful! Redirecting...");
      navigate("/portofolio-burhan/dbcustomer");
    } else if (error) {
      setErrorMessage(error.message);
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
