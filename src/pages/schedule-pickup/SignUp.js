import React, { useState } from "react";
import { Container, Row, Col, FormControl, InputGroup } from "react-bootstrap";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SigningUp = async () => {
    let item = { name, email, password };
    console.log(item);
    try {
      let result = await fetch("http://127.0.0.1:8000/api/Register", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (!result.ok) {
        throw new Error("Network response was not ok");
      }

      result = await result.json();
      console.log(result); // or do something with the result
    } catch (error) {
      console.error(
        "There was a problem with the fetch api operation: ",
        error
      );
    }
  };

  return (
    <Container className="p-0">
      <Row>
        <Col sm={6} md={12} className="offset-sm-4">
          <h1>SIGN UP PAGE</h1>
          <input
            className="formControl mb-3"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="formControl mb-3"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="formControl mb-3"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={SigningUp} className="btn btn-primary" type="button">
            Sign Up
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
