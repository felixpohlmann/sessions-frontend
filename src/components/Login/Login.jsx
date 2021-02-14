import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//services
import authService from "../../services/auth.service";

//components
import {
  Alert,
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
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginError, setLoginError] = useState(false);

  const history = useHistory();

  const handleLogin = async () => {
    const response = await authService.login(username, password);
    if (response) {
      // NOT NICE
      history.push("/");
    } else {
      setLoginError(true);
    }
  };

  return (
    <Container fluid>
      <Row className="row__main">
        <Col className="wrapper__form" xs={6}>
          <Container>
            <Alert variant="danger" show={loginError}>
              Invalid credentials!
            </Alert>
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
                      <AiOutlineUser />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    name="username"
                  />
                </InputGroup>

                <InputGroup className="form__input">
                  <InputGroup.Prepend>
                    <InputGroup.Text>
                      <AiOutlineKey />
                    </InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    name="password"
                  />
                </InputGroup>
                
                <Button className="form__button" onClick={handleLogin}>
                  Sign In
                </Button>   
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
