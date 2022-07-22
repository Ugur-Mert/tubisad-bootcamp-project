import React from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { GoVerified } from "react-icons/go";

import { useSelector } from "react-redux";
import { sendVerify } from "../firebase";

export default function UserInformation() {
  const { user } = useSelector((state) => state.auth);

  const handleVerify = async () => {
    await sendVerify();
    console.log(user);
  };

  if (user) {
    return (
      <section>
        <Container>
          <Row
            style={{
              display: "grid",
              alignItems: "center",
              minHeight: "80vh",
            }}
            className="mb-5 mt-5 p-5 col-12 mx-auto text-center"
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              className="mx-auto text-black rounded mb-4 p-5 bg-light"
            >
              <Row className="align-items-center  mx-auto text-center">
                <Col className="align-items-center ">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      className="rounded-circle img-fluid"
                      alt="avatar"
                      style={{ width: "4rem" }}
                    />
                  )}
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={12} sm={12} md={12} lg={6}>
                  Email <br /> {user.email}
                  <hr className="mt-3" />
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}>
                  Name - Surname <br />
                  {user.displayName}
                  <hr className="mt-3" />
                </Col>
              </Row>
              <Row className="text-center mt-3">
                <Col>
                  {user.emailVerified ? (
                    <p className="text-success">
                      Verified.{" "}
                      <span>
                        <GoVerified className="fs-4" />
                      </span>
                    </p>
                  ) : (
                    <Button onClick={handleVerify} variant="outline-success">
                      Verify your Account
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
