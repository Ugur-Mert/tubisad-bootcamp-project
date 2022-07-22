import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { resetEmail } from "../../firebase";

export default function ForgotPassword() {
  const [resetPasswordEmail, setResetPasswordEmail] = useState("");

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    const userMail = await resetEmail(resetPasswordEmail);
    if (userMail) {
      console.log(userMail);
      setResetPasswordEmail("");
      return true;
    }
  };

  return (
    <Container>
      <Row
        style={{
          display: "grid",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Col className="col-6 mx-auto rounded mt-5 p-5">
          <Form onSubmit={handleResetSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={resetPasswordEmail}
                onChange={(e) => setResetPasswordEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                The email may have landed in the spam folder. Please check.
              </Form.Text>
            </Form.Group>
            <Col className="text-center">
              <Button
                disabled={!resetPasswordEmail}
                variant="outline-dark"
                type="submit"
              >
                Send
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
