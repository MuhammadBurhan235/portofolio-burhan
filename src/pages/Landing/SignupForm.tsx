import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

export const SignupForm: React.FC<{ switchToLogin: () => void }> = ({
  switchToLogin,
}) => {
  return (
    <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
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
