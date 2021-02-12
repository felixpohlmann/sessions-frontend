import React, { Component } from "react";
import axios from "axios";

//services
import authService from "../../services/auth.service";

//components
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

//axios configuration
axios.defaults.withCredentials = true;

class Login extends Component {
  state = {
    inputUsername: null,
    inputPassword: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  //login
  handleLogin = async () => {
    const { inputPassword, inputUsername } = this.state;
    authService.login(inputUsername, inputPassword);
  };

  //logout
  handleLogout = async () => {
    authService.logout();
  };

  //temporary calls

  render() {
    const { handleChange, handleLogin, handleLogout } = this;
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
                        <AiOutlineUser />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      placeholder="Username"
                      aria-label="Username"
                      onChange={(e) => handleChange(e)}
                      name="inputUsername"
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
                      onChange={(e) => handleChange(e)}
                      name="inputPassword"
                    />
                  </InputGroup>

                  <Button className="form__button" onClick={handleLogin}>
                    Sign In
                  </Button>

                  <Button style={{ marginLeft: "1rem" }} onClick={handleLogout}>
                    Sign out
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
  }
}

export default Login;
