import React from "react";
import "./Header.css";
import NavbarComponent from "../navbar/NavbarComponent";
import image from "./../../assets/boxes-floating-1.png";
import { Container, Row, Col, FormControl, InputGroup } from "react-bootstrap";
import CustomLocationIcon from "./../../assets/location-icon.png";
import CustomComponent from "./CustomInputField";

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

          <Row className="ps-3 ps-md-5 mt-3">
            <Row>
              <Col xs={12} lg={6}>
                <div className="d-flex flex-row flex-wrap justify-content-center justify-content-lg-start">
                  <a
                    className="btn btn-lg btn-cyan me-2 mb-2 mb-md-0 px-4 px-md-5"
                    href="#"
                  >
                    Get Started
                  </a>
                  <a
                    className="btn btn-lg btn-white text-cyan px-4 px-md-5"
                    href="#"
                  >
                    Our Pricing
                  </a>
                </div>
              </Col>
              <Col xs={12} lg={6} className=""></Col>
            </Row>
          </Row>

          <Row className="px-5 mt-3">
            <Col
              lg={5}
              className="d-flex flex-row flex-wrap justify-content-center justify-content-lg-start"
            >
              <CustomComponent />
            </Col>
          </Row>
        </Container>
      </header>
    </Container>
  );
};

export default Header;
