import React, { Component } from "react";

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

class Login extends Component {
  state = {
    inputUsername: null,
    inputPassword: null,
    showLoginError: false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleLogin = async () => {
    const { inputPassword, inputUsername } = this.state;
    const response = await authService.login(inputUsername, inputPassword);
    if (response) {
      // NOT NICE
      this.props.history.push("/");
    } else {
      this.setState({ showLoginError: true });
    }
  };

  handleLogout = () => {
    authService.logout();
  };

  render() {
    const { handleChange, handleLogin, handleLogout } = this;
    const { showLoginError } = this.state;
    return (
      <Container fluid>
        <Row className="row__main">
          <Col className="wrapper__form" xs={6}>
            <Container>
              <Alert variant="danger" show={showLoginError}>
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
