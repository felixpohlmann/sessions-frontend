import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap/";

import "./Login.css";

const Login = () => {
  return (
    <Container fluid>
      <Row className="row__main">
        <Col className="wrapper__form">Login-Form</Col>
        <Col className="wrapper__illustration">Illustration</Col>
      </Row>
    </Container>
  );
};

export default Login;
