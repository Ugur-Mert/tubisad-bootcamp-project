import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Col, Row, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

import { Link } from "react-router-dom";

import { GiCrossedAxes } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FaRegClock } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";
import { AiOutlineDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";
import { useNavigate } from "react-router-dom";
import AddTodo from "./AddTodo";

const BootstrapNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/", {
      replace: true,
    });
  };

  const [show, setShow] = useState(false);

  if (show) {
    var currentDate = new Date();
    var currentHour = String(currentDate.getHours()).padStart(2, "0"); //currentDate.getHours();
    var currentMinute = String(currentDate.getMinutes()).padStart(2, "0"); //currentDate.getMinutes();
    console.log(Date().toLocaleString());
  }

  const { todos } = useSelector((state) => state.todos);

  const handleDelete = async (id) => {
    await deleteTodo(id);
  };

  return (
    <Navbar className="opacity-75 fixed-top fs-5" bg="dark" expand="lg">
      <Container>
        <p className="text-light me-3 ">
          <GiCrossedAxes />
        </p>
        <Navbar.Toggle aria-controls="navbarScroll " />
        <Navbar.Collapse id="navbarScroll" className=" text-center mx-auto ">
          <Nav
            className=" me-auto my-2 text-center  my-lg-0"
            style={{
              maxHeight: "100px",
            }}
            navbarScroll
          >
            <Col className="me-3  ">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="/"
                >
                  Home
                </Link>
              </p>
            </Col>
            <Col className="me-3 col-lg-5 text-center text-light ">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="about"
                >
                  About Me
                </Link>
              </p>
            </Col>

            <Col className="me-3 text-center text-light">
              <p>
                <Link
                  style={{
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  to="contact"
                >
                  Contact
                </Link>
              </p>
            </Col>
            <Col className="me-3 text-center text-light">
              <p style={{ cursor: "pointer" }}>
                <FaRegClock onClick={() => setShow(!show)} />
              </p>
            </Col>
            <Col lg={5} className="me-3 text-center text-light ">
              {show ? (
                <p>
                  {currentHour.toLocaleString()}: {currentMinute}
                </p>
              ) : (
                ""
              )}
            </Col>
          </Nav>

          <Row>
            <Col>
              {!user ? (
                ""
              ) : (
                <Dropdown className="d-inline mx-2 " autoClose="outside">
                  <Dropdown.Toggle
                    variant="outline-light"
                    id="dropdown-autoclose-outside"
                  >
                    <FcTodoList className=" fs-4" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      maxHeight: "100vh",
                      overflowY: "auto",
                    }}
                  >
                    <Col>
                      <Row className="mx-auto text-center">
                        <AddTodo />
                      </Row>

                      <Row>
                        {todos.map((todo) => (
                          <Col
                            key={todo.id}
                            className="col-12 mx-auto text-center"
                          >
                            <p>{todo.todo}</p>

                            <Button
                              size="sm"
                              onClick={() => handleDelete(todo.id)}
                              variant="outline-danger"
                            >
                              <AiOutlineDelete />
                            </Button>
                            <hr />
                          </Col>
                        ))}
                      </Row>
                    </Col>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Col>
            <Col>
              <Dropdown className="d-inline mx-2" autoClose="outside">
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdown-autoclose-outside"
                >
                  <CgProfile className=" fs-4" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {!user ? (
                    <Row className="mx-auto text-center">
                      <Link
                        style={{
                          color: "black",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                        to="login"
                      >
                        Log In
                      </Link>
                    </Row>
                  ) : (
                    <Row className="mx-auto text-center">
                      <Col>
                        <Link
                          style={{
                            color: "black",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                          to="myaccount"
                        >
                          {user.photoURL && (
                            <Col>
                              <img
                                src={user.photoURL}
                                className="rounded-circle img-fluid img-thumbnail"
                                alt="avatar"
                                style={{ width: "3rem" }}
                              />
                            </Col>
                          )}
                          {user.displayName ? (
                            <p>{user.displayName}</p>
                          ) : (
                            <p>My Account</p>
                          )}
                        </Link>
                      </Col>
                    </Row>
                  )}

                  {!user ? (
                    <Row className="mx-auto text-center">
                      <Link
                        style={{
                          color: "black",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                        to="register"
                      >
                        Register
                      </Link>
                    </Row>
                  ) : (
                    <Row className="mx-auto text-center mt-2">
                      <Col>
                        <Button onClick={handleLogout} variant="outline-danger">
                          Log out
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNavbar;
