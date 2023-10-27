// import React from "react";
// import "./NavbarComponent.css";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import BrandLogo from "./../../assets/simple-return-logo.png";

// const NavbarComponent = () => {
//   return (
//     <Navbar expand="lg" className="bg-cyan">
//       <Container fluid>
//         <div>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               <Nav.Link href="#home" className="me-2">
//                 Home
//               </Nav.Link>
//               <NavDropdown
//                 title="About"
//                 id="basic-nav-dropdown"
//                 className="me-2"
//               >
//                 <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">Item 2</NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.3">Item 3</NavDropdown.Item>
//               </NavDropdown>
//               <Nav.Link href="#pricing" className="me-2">
//                 Pricing
//               </Nav.Link>
//               <Nav.Link href="#how-it-works" className="me-2">
//                 How it works
//               </Nav.Link>
//             </Nav>
//             <Nav className="d-flex flex-column flex-lg-row align-items-center mx-lg-auto">
//               <div className="logo-bg mb-2 mb-lg-0 me-lg-5">
//                 <Navbar.Brand href="#brand-logo">
//                   <img
//                     src={BrandLogo}
//                     width="221px"
//                     height="33px"
//                     style={{ flexShrink: 0 }}
//                     alt="Brand Logo"
//                   />
//                 </Navbar.Brand>
//               </div>
//               <Nav.Link href="#sign-in" className="btn me-3 py-3">
//                 Sign in
//               </Nav.Link>
//               <Nav.Link
//                 href="#schedule-pickup"
//                 className="btn btn-nav-white py-3 px-4"
//               >
//                 Schedule a pickup
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </div>
//       </Container>
//     </Navbar>
//   );
// };
// export default NavbarComponent;

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
                <Nav.Link href="#sign-in" className="btn me-3 py-3">
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

// import "./NavbarComponent.css";
// import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import SimpleReturnLogo from "../../assets/simple-return-logo.png";

// const NavbarComponent = () => {
//   return (
//     <>
//       <Navbar expand='lg' className="bg-body-tertiary mb-3" >
//         <Container fluid>
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-center flex-grow-1 pe-3">
//                 <Nav.Link href="#action1">Home</Nav.Link>
//                 <NavDropdown title="About" id={`offcanvasNavbarDropdown-expand-lg`}>
//                   <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                   <NavDropdown.Item href="#action4">Action 2</NavDropdown.Item>
//                   <NavDropdown.Item href="#action5">Action 3</NavDropdown.Item>
//                 </NavDropdown>
//                 <Nav.Link href="#action1">Pricing</Nav.Link>
//                 <Nav.Link href="#action1">How it works</Nav.Link>
//                 <Navbar.Brand href="#">
//                   <div className="logo-bg px-5 py-2">
//                     <img
//                      src={SimpleReturnLogo}
//                      alt="Brand Logo"
//                     />
//                    </div>
//                 </Navbar.Brand>
//                 <Nav.Link href="#action2">Sign in</Nav.Link>
//                 <Nav.Link href="#action2">Schedule a pickup</Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//   </>
//   );
// };

// export default NavbarComponent;
