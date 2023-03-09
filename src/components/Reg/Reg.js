import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { NavLink } from "react-router-dom";
import "./Reg.css";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import FacebookSignUp from "../FacebookSignUp/FacebookSignUp";
import GithubSignUp from "../GithubSignUp/GithubSignUp";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const messageDiv = document.getElementById("message-div");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (error) {
    messageDiv.innerHTML = error;
  }
  if (loading) {
    messageDiv.innerHTML = "Loading...";
  }
  if (user) {
    messageDiv.innerHTML = "User Registered";
  }

  return (
    <section className="reg-area py-5">
      <Container>
        <h2 className="text-center py-5">Registration Here</h2>
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div id="message-div"></div>
            <p>
              Already Have An Account?
              <NavLink to="/signin" className="reg-link">
                Sign In Here!
              </NavLink>
            </p>
            <Button
              onClick={() => createUserWithEmailAndPassword(email, password)}
              variant="primary"
              type="submit"
              className="w-100"
            >
              Submit
            </Button>
            <span className="or-style">Or</span>
            <GoogleSignUp />
            <FacebookSignUp />
            <GithubSignUp />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reg;
