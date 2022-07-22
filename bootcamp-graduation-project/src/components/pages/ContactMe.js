import React from "react";
import "./ContactMe.css";

import { useFormik } from "formik";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import toast from "react-hot-toast";

export default function ContactMe() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      contactMessage: "",
    },
    onSubmit: (values) => {
      if (formik.values.contactMessage !== "" && formik.values.email !== "") {
        addDoc(collection(db, "messages"), {
          values,
        });
        toast.success(
          "I have received your message, I will reply as soon as possible."
        );
        console.log(values);
      } else {
        toast.error("lütfen mesajınızı ve mail adresinizi giriniz");
      }
    },
  });

  return (
    <main className="contact-container  p-5">
      <Container>
        <Row className="text-center  ">
          <p className="m-3 fs-1">CONTACT ME</p>
        </Row>
        <Col sm={12} md={12} lg={6} className="mx-auto ">
          <Row className="mx-auto">
            <Row
              style={{
                display: "grid",
                alignItems: "center",
                minHeight: "50vh",
              }}
              className="mx-auto"
            >
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Row className="mb-3 mt-5">
                    <Col>
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        name="surname"
                        type="text"
                        placeholder="Surname"
                        value={formik.values.surname}
                        onChange={formik.handleChange}
                      />
                    </Col>
                  </Row>
                  <Row className="mb-3">
                    <Col className="col-8">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                      />
                    </Col>
                    <Col className="col-4">
                      <Form.Control
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone Number"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                      />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    name="contactMessage"
                    rows={3}
                    placeholder="Your Message"
                    value={formik.values.contactMessage}
                    onChange={formik.handleChange}
                  />
                  <Row className="mx-auto mt-5 col-6 ">
                    <Col className=" text-center">
                      <Button
                        //disabled={!contactMessage || !email}
                        variant="outline-success"
                        className="mb-5"
                        type="submit"
                      >
                        Send
                      </Button>
                    </Col>
                    <Col className=" text-center">
                      <Button
                        //disabled={!contactMessage || !email}
                        variant="outline-danger"
                        className="mb-5"
                        type="reset"
                        onClick={(e) => formik.resetForm()}
                      >
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Row>
          </Row>
        </Col>
      </Container>
    </main>
  );
}
