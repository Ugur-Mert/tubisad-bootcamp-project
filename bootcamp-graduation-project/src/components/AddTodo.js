import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { addTodo } from "../firebase";
import { useSelector } from "react-redux";

import { AiOutlinePlusCircle } from "react-icons/ai";

export default function AddTodo() {
  const { user } = useSelector((state) => state.auth);

  const [todo, setTodo] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    await addTodo({
      todo,
      uid: user.uid,
    });
    setTodo("");
  };

  return (
    <Form onSubmit={submitHandle}>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="add todos.."
          value={todo}
        />
        <Button
          variant="outline-primary"
          size="sm"
          className="mt-2"
          type="submit"
          disabled={!todo}
        >
          <AiOutlinePlusCircle />
        </Button>
      </Form.Group>
    </Form>
  );
}
