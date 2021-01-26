import React from "react";

import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
} from "react-bootstrap/";
import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import authenticationIllustration from "./authentication.svg";

import "./Login.css";

const Login = () => {
  return (
    <Container fluid>
      <Row className="row__main">
        <Col className="wrapper__form" xs={6}>
          <Container>
            <Row>
              <Col className="form__header">
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup className="form__input">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <AiOutlineUser size="1.2rem" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control placeholder="username" aria-label="username" />
                </InputGroup>

                <InputGroup className="form__input">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <AiOutlineKey size="1.2rem" />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control placeholder="password" aria-label="password" />
                </InputGroup>

                <Button className="form__button">Sign In</Button>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="wrapper__illustration" xs={6}>
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
