import React from "react";
import "./NavbarComponent.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BrandLogo from "./../../assets/simple-return-logo.png";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Navbar expand="lg" className="bg-cyan">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/home" className="Link me-3">
                  Home
                </Link>
                <Link to="/about" className="Link me-3">
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
                <Link to="/Pricing" className="Link me-3">
                  Pricing
                </Link>
                <Link to="/how-it-works" className="Link">
                  How it works
                </Link>
              </Nav>
              <Nav className="logo-bg mx-auto my-2">
                <Navbar.Brand href="#brand-logo">
                  <div className="logo-bg px-4 py-0">
                    <a href="#home">
                      <img
                        src={BrandLogo}
                        width="221px"
                        height="33px"
                        style={{ flexShrink: 0 }}
                        alt="Brand Logo"
                      />
                    </a>
                  </div>
                </Navbar.Brand>
              </Nav>
              <Nav>
              <Link to="/sign-in" className="Link me-2 mt-3">
                  Sign in
                </Link>

                <Link to="/schedule-pickup" className="Link btn btn-nav-white py-3 px-3">
                Schedule a pickup
                </Link>
                {/* <Nav.Link
                  href="#schedule-pickup"
                  className="btn btn-nav-white py-3 px-3"
                >
                  Schedule a pickup
                </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};
export default NavbarComponent;
