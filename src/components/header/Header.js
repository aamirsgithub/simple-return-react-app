// import React from "react";
// import "./Header.css";
// import NavbarComponent from "../navbar/NavbarComponent";
// import image from "./../../assets/boxes-floating-1.png";
// import { Container } from "react-bootstrap";

// const Header = () => {
//   return (
//     <>
//       <Container fluid>
//         <header>
//           <div className="text-body">
//             {/* <NavbarComponent />  */}

//             <div className="container-fluid py-5">
//               <div className="row text-white px-5">
//                 <p className="h1 font-weight-bold">
//                   Return Your Product <br /> Without Leaving <br />{" "}
//                   <span className="text-cyan">Your Home</span>
//                 </p>
//               </div>

//               <div className="row text-white font-10 ps-5 mt-3">
//                 <p>
//                   We pick up returns purchased from any online retailer.
//                   <br />
//                   No more printing labels, packaging, or trips to the post
//                   office
//                 </p>
//               </div>

//               <div className="d-flex ps-5 mt-3 small">
//                 <div>
//                   <a className="btn btn-lg btn-cyan px-5" href="#">
//                     Get Started
//                   </a>
//                 </div>

//                 <div>
//                   <a
//                     className="btn btn-lg btn-white text-cyan px-5 ms-3"
//                     href="#"
//                   >
//                     Our Pricing
//                   </a>
//                 </div>
//               </div>

//               <div className="row ps-5 mt-3">
//                 <div className="col-4">
//                   <input
//                     className="form-control"
//                     type="text"
//                     placeholder="Enter Zip Code"
//                   />{" "}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </Container>
//     </>
//   );
// };
// export default Header;

import React from "react";
import "./Header.css";
import NavbarComponent from "../navbar/NavbarComponent";
import image from "./../../assets/boxes-floating-1.png";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Container fluid className="p-0">
      <header>
        <div className="text-body py-5">
          {/* <NavbarComponent />  */}

          <Row className="px-5">
            <Col>
              <div className="h1 font-weight-bold">
                Return Your Product <br /> Without Leaving <br />{" "}
                <span className="text-cyan">Your Home</span>
              </div>
            </Col>
          </Row>

          <Row className="px-5 mt-3">
            <Col>
              <div className="text-white font-10">
                <p>
                  We pick up returns purchased from any online retailer.
                  <br />
                  No more printing labels, packaging, or trips to the post office
                </p>
              </div>
            </Col>
          </Row>

          <Row className="px-5 mt-3">
            <Col sm={12} md={6} lg={6}>
              <div>
                <a className="btn btn-lg btn-cyan px-5" href="#">
                  Get Started
                </a>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6} className="mt-3 mt-md-0">
              <div>
                <a
                  className="btn btn-lg btn-white text-cyan px-5"
                  href="#"
                >
                  Our Pricing
                </a>
              </div>
            </Col>
          </Row>

          <Row className="px-5 mt-3">
            <Col sm={12} md={6} lg={4}>
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Zip Code"
                />
              </div>
            </Col>
          </Row>
        </div>
      </header>
    </Container>
  );
};

export default Header;


