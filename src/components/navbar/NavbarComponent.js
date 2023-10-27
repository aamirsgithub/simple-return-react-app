import React from "react";
import "./NavbarComponent.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import BrandLogo from "./../../assets/simple-return-logo.png";

const NavbarComponent = () => {
  return (
    <>
      <Container fluid className="p-0">
        <Navbar expand="lg" className="bg-cyan">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="me-2">
                  Home
                </Nav.Link>
                <NavDropdown
                  title="About"
                  id="basic-nav-dropdown"
                  className="me-2"
                >
                  <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#pricing" className="me-2">
                  Pricing
                </Nav.Link>
                <Nav.Link href="#how-it-works" className="">
                  How it works
                </Nav.Link>
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
                <Nav.Link href="#sign-in" className=" me-3 py-3">
                  Sign in
                </Nav.Link>
                <Nav.Link
                  href="#schedule-pickup"
                  className="btn btn-nav-white py-3 px-3"
                >
                  Schedule a pickup
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};
export default NavbarComponent;