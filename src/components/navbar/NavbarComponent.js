import React from "react";
import "./NavbarComponent.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BrandLogo from "./../../assets/simple-return-logo.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Container fluid className="p-0">
        <div className="d-flex justify-content-center bg-cyan pt-3">
          <div className="logo-on-small">
            <a>
              <img src={BrandLogo} alt="Brand Logo" />
            </a>
          </div>
        </div>

        <Navbar expand="lg" className="bg-cyan pb-4">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <Link to="/home" className="Link me-5 my-1">
                  Home
                </Link>
                <Link to="/about" className="Link me-5 my-1">
                  About
                </Link>
                {/* <NavDropdown
                  title="About"
                  id="basic-nav-dropdown"
                  className="me-2"
                >
                  <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                </NavDropdown> */}
                <Link to="/Pricing" className="Link me-5 my-1">
                  Pricing
                </Link>
                <Link to="/how-it-works" className="Link my-1">
                  How it works
                </Link>
              </Nav>

              <Nav className=" ms-5 logo-custom-margin">
                <Navbar.Brand>
                  <div className="d-flex justify-content-center logo-bg">
                    <a>
                      <img src={BrandLogo} alt="Brand Logo" />
                    </a>
                  </div>
                </Navbar.Brand>
              </Nav>

              <Nav className="">
                <Link to="/sign-in" className="Link me-5 my-1 ">
                  Sign in
                </Link>
              </Nav>
              <Nav className="">
                <Link
                  to="/schedule-pickup"
                  className="d-flex justify-content-center Link btn btn-nav-white"
                >
                  Schedule a pickup
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};
export default NavbarComponent;
