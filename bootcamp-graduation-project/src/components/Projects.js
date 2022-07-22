import React from "react";

import data from "./data.json";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col } from "react-bootstrap";

export default function Projects() {
  return (
    <>
      <br />
      {data.map((data) => {
        return (
          <Col key={data.id} sm={12} md={6} lg={3} className="mb-3">
            <a href={data.projectURL} target="_blank" rel="noreferrer">
              <Card
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className="h-100"
              >
                <Card.Img variant="top" src={data.imageURL} />

                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>{data.description}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        );
      })}
    </>
  );
}
