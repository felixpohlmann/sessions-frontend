import React from "react";

import { Container, Row, Col, Form } from "react-bootstrap/";
import authenticationIllustration from "./authentication.svg";

import "./Login.css";

const Login = () => {
  return (
    <Container fluid>
      <Row className="row__main">
        <Col className="wrapper__form" xs={6}>
          Login-Form
        </Col>
        <Col className="wrapper__illustration" xs={6} >
          <img
            className="illustration"
            src={authenticationIllustration}
            alt="Authenticate"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
