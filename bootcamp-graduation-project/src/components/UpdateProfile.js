import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import { update, auth, resetPassword } from "../firebase";

import { useDispatch, useSelector } from "react-redux";

import { login } from "../store/auth";

export default function UpdateProfile() {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const [displayName, setDisplayName] = useState(user.displayName || "");
  const [avatar, setAvatar] = useState(user.photoURL || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update({
      displayName,
      photoURL: avatar,
    });
    dispatch(
      login({
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        uid: auth.currentUser.uid,
      })
    );
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    await resetPassword(password);
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section>
      <Container className="p-5 mt-5  ">
        <Row
          style={{
            display: "grid",
            alignItems: "center",
            minHeight: "50vh",
          }}
          className="mx-auto  col-12 "
        >
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="col-12 mx-auto bg-light text-black rounded-top p-5"
          >
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Name - Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ryan Taylor"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
                <Col className="mt-3 text-center">
                  <Button
                    disabled={!displayName}
                    variant="outline-dark"
                    type="submit"
                  >
                    Change Name
                  </Button>
                </Col>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="URL"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
                <Col className="mt-3 text-center">
                  <Button variant="outline-dark" type="submit">
                    Change Avatar
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={6}
            className="col-12 mx-auto bg-light text-black rounded-bottom p-5"
          >
            <Form onSubmit={handleResetSubmit}>
              <Form.Group className="mb-3" controlId="formBasicPasswords">
                <Form.Label>Change Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  autoComplete="on"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control
                  className="mt-3"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  autoComplete="on"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Col className="mt-3 text-center">
                  <Button
                    disabled={
                      !password ||
                      !confirmPassword ||
                      password !== confirmPassword
                    }
                    variant="outline-dark"
                    type="submit"
                  >
                    Change Password
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
