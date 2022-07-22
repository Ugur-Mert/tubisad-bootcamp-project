import React, { useState } from "react";

import "./LoginRegister.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { register } from "../firebase";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    toast.success("Hesabınız oluşturuldu giriş yapabilirsiniz!");
  };

  return (
    <section className="section-register p-5">
      <Container className="p-5  ">
        <Row
          style={{
            display: "grid",
            alignItems: "center",
            minHeight: "50vh",
          }}
          className="mx-auto opacity-75 "
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control
                  className="mt-3"
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>

              <Col className="text-center">
                <Button
                  disabled={
                    !email ||
                    !password ||
                    !confirmPassword ||
                    password !== confirmPassword
                  }
                  variant="outline-light"
                  type="submit"
                >
                  Register
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
