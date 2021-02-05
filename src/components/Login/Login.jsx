import React, { Component } from "react";
import axios from "axios";

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

  handleSubmit = async () => {
    const { inputPassword, inputUsername } = this.state;
    const response = await axios.post(
      "http://localhost:5000/api/auth/signin",

      {
        username: inputUsername,
        password: inputPassword,
      }
    );
    console.log(response.headers);
  };

  getSecretData = async () => {
    const response = await axios.get("http://localhost:5000/api/posts");
    console.log(response);
  };

  render() {
    const { handleChange, handleSubmit, getSecretData } = this;

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

                  <Button className="form__button" onClick={handleSubmit}>
                    Sign In
                  </Button>
                  <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={getSecretData}
                  >
                    GET SECRET DATA
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
