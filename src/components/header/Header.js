import React from "react";
import "./Header.css";
import NavbarComponent from "../navbar/NavbarComponent";
import image from "./../../assets/boxes-floating-1.png";
import { Container, Row, Col, FormControl, InputGroup } from "react-bootstrap";
import CustomLocationIcon from "./../../assets/location-icon.png";

const Header = () => {
  return (
    <Container fluid className="p-0">
      <header>
        <Container fluid className="py-5 px-5">
          <Row className="px-5">
            <Col>
              <div className="Header-title-font">
                Return Your Product <br /> Without Leaving <br />{" "}
                <span className="text-cyan">Your Home</span>
              </div>

              <div className="text-white font-10 mt-3">
                <p>
                  We pick up returns purchased from any online retailer.
                  <br />
                  No more printing labels, packaging, or trips to the post
                  office
                </p>
              </div>
            </Col>
          </Row>

          <Row className="px-5 mt-3">
            <Col sm={4} lg={4}>
              <div className="d-flex justify-content-start">
                <a className="btn btn-lg btn-cyan me-2 px-5" href="#">
                  Get Started
                </a>

              </div>
            </Col>
            <Col sm={4} lg={4} className="" >
            <a className="btn btn-lg btn-white text-cyan px-5" href="#">
                  Our Pricing
                </a>
            </Col>
          </Row>

          <Row className="px-5 mt-3">
            <Col lg={4}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <img
                    src={CustomLocationIcon}
                    alt="Location Icon"
                    style={{
                      width: "28px",
                    }}
                  />
                </InputGroup.Text>
                <FormControl
                  placeholder="Enter Zip Code"
                  aria-label="Zip Code"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </header>
    </Container>
  );
};

export default Header;

