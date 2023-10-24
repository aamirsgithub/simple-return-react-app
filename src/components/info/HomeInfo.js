import React from "react";
import "./HomeInfo.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import StarsImage from "./../../assets/StarsImage.png";
import CustomersImage from "./../../assets/customers.png";
import ClockMini from "./../../assets/clock-mini.png";
import HandMini from "./../../assets/hand-mini.png";
import Clock from "./../../assets/clock.png";
import Brands0 from "./../../assets/brands/bestbuy.png";
import Brands1 from "./../../assets/brands/walmart.png";
import Brands2 from "./../../assets/brands/amazon.png";
import Brands3 from "./../../assets/brands/zara.png";
import Brands4 from "./../../assets/brands/zappos.png";
import Brands5 from "./../../assets/brands/poshmark.png";



const HomeInfo = () => {
  return (
    <>
      <Container fluid>

        <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <div className="brandNames text-center">
              <p>We've handles customers returns from a variety of brands.</p>
            </div>
          </Col>
        </Row>
        </Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames">
              <img
                src={Brands0}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames">
              <img
                src={Brands1}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames mt-3">
              <img
                src={Brands2}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames">
              <img
                src={Brands3}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames">
              <img
                src={Brands4}
                alt="Brands"
                className="img-fluid mt-4s"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="brandNames">
              <img
                src={Brands5}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row className="bg-black">
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            {/* ps-md-5 text-center */}
            <div className="">
              <p className="text-one py-5">
                Here’s what our customer
                <br />
                experienced after testing
                <br /> “ReturnSimple”
              </p>
              <hr className="line" />
              <img src={StarsImage} alt="Stars" className="img-fluid" />
              <p className="text-two mt-3">
                “They have thought of everything. The team is super friendly
                <br />
                and efficient, making returning things simple and easy.”
              </p>
              <p className="text-two"> <span className="font-weight-bold">Monica H.</span> Beloved Customer</p>
            </div>
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="customers">
              <img src={CustomersImage} alt="Customers" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex ">
            <div>
              <p className="">How it works</p>
            </div>
            <div>
              <p className="">Send back returns in minutes</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="custom-card-radius" style={{ width: "18rem" }}>
              <Card.Img
                className="custom-card-img ms-2 mt-5"
                variant="top"
                src={ClockMini}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <div>
                    <Card.Title className="custom-card-font font-14">
                      Schedule your pickup
                    </Card.Title>
                  </div>
                  <div>
                    <p>01</p>
                  </div>
                </div>
                <Card.Text>
                  Enter your pickup information and upload your return label
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeInfo;
