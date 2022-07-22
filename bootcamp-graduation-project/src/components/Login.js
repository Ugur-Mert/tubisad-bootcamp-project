import React, { useState } from "react";

import "./LoginRegister.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { login } from "../firebase";

import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      console.log(user);
      navigate("/", {
        replace: true,
      });
    }
  };

  return (
    <section className="section-login p-5">
      <Container className="p-5   ">
        <Row
          style={{
            display: "grid",
            alignItems: "center",
            minHeight: "50vh",
          }}
          className="mx-auto opacity-75"
        >
          <Col
            sm={12}
            md={12}
            lg={6}
            className=" mx-auto bg-dark text-white rounded p-5"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Col className="text-center">
                <Button
                  disabled={!email || !password}
                  variant="outline-light"
                  type="submit"
                >
                  Login
                </Button>
              </Col>
              <Col className="text-center mt-3">
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="/resetpassword"
                >
                  <p style={{ cursor: "pointer" }}>Forgot your password ?</p>
                </Link>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
