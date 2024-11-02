import { Button, Form } from "react-bootstrap";
import { supabase } from "../../supabaseClient";
import React, { useState } from "react";

export const SigninForm: React.FC<{ switchToSignup: () => void }> = ({
  switchToSignup,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (data?.user) {
      const { data: roleData, error: roleError } = await supabase
        .from("user_roles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (roleError || !roleData) {
        setErrorMessage("Failed to retrieve user role.");
        return;
      }

      if (roleData.role === "admin") {
        setSuccessMessage("Signin successful!");
        window.location.replace("/portofolio-burhan/dashboardadmin");
      } else {
        setSuccessMessage("Signin successful!");
        window.location.replace("/portofolio-burhan/dbcustomer");
      }
    } else if (error) {
      setErrorMessage(error.message);
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
