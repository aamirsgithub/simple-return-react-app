import React from "react";
import "./HomeInfo.css";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
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
import ShippingTruck from "./../../assets/shipping-truck.png";
import Pickup from "./../../assets/pickup.png";
import Shipment from "./../../assets/shipment.png";
import Support from "./../../assets/support.png";
import DeliveryBoxes from "./../../assets/delivery-box.png";
import SittingMan from "./../../assets/sitting-man2.png";

const HomeInfo = () => {
  return (
    <>
      {/* We've handled customers returns from a variety of brands. */}
      <Container fluid>
        <Row className="d-flex align-items-center justify-content-center">
          <Col>
            <div className="bg-white text-center mt-5">
              <h3>We've handled customers returns from a variety of brands.</h3>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white">
              <img
                src={Brands0}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white">
              <img
                src={Brands1}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white mt-3">
              <img
                src={Brands2}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white">
              <img
                src={Brands3}
                alt="Brands"
                className="img-fluid mb-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white">
              <img
                src={Brands4}
                alt="Brands"
                className="img-fluid mt-4s"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </Col>
          <Col xs={6} sm={4} md={2} className="text-center ">
            <div className="bg-white">
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
      {/* Here is what our customers experienced + How it Works */}
      <Container fluid>
        <Row className="bg-black">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs={12}
            md={6}
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
              <p className="text-two">
                {" "}
                <span className="font-weight-bold">Monica H.</span> Beloved
                Customer
              </p>
            </div>
          </Col>
          <Col
            className="d-flex align-items-center justify-content-center"
            xs={12}
            md={6}
          >
            <div className="customers ">
              <img src={CustomersImage} alt="Customers" className="img-fluid" />
            </div>
          </Col>
        </Row>

        <Container fluid>
          <Row>
            <Col className="d-flex align-items-center justify-content-center text-center">
              <div className="py-4">
                <h1>
                  How <span className="text-cyan">it works</span>
                </h1>
                <p>send back returns in minutes</p>
              </div>
            </Col>
          </Row>

          <Row>
            {/* CARD#1 */}
            <Col className="d-flex align-items-center justify-content-center text-center">
              <Card
                className="custom-card-radius"
                style={{ width: "18rem", height: "15rem" }}
              >
                <Card.Img
                  className="custom-card-img1 ms-2 mt-5"
                  variant="top"
                  src={ClockMini}
                />
                <Card.Text
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <h4>01</h4>
                </Card.Text>
                <Card.Body>
                  <Card.Title className="custom-card-font font-14">
                    Schedule your pickup
                  </Card.Title>
                  <Card.Text>
                    Enter your pickup information and upload your return label
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* CARD#2 */}
            <Col className="d-flex align-items-center justify-content-center text-center">
              <Card
                className="custom-card-radius"
                style={{ width: "18rem", height: "15rem" }}
              >
                <Card.Img
                  className="custom-card-img2 ms-2 mt-4"
                  variant="top"
                  src={HandMini}
                />
                <Card.Text
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <h4>02</h4>
                </Card.Text>
                <Card.Body>
                  <Card.Title className="custom-card-font font-14">
                    Select your pickup method
                  </Card.Title>
                  <Card.Text>
                    Leave your package on the doorstep or choose direct handoff
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* CARD#3 */}
            <Col className="d-flex align-items-center justify-content-center text-center">
              <Card
                className="custom-card-radius"
                style={{ width: "18rem", height: "15rem" }}
              >
                <Card.Img
                  className="custom-card-img3 ms-2 mt-4"
                  variant="top"
                  src={Clock}
                />
                <Card.Text
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  <h4>03</h4>
                </Card.Text>
                <Card.Body>
                  <Card.Title className="custom-card-font font-14">
                    Get real-time updates
                  </Card.Title>
                  <Card.Text>
                    You receive a text when it’s been shipped
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
      {/* We'll pick up & ship almost everything */}
      <Container fluid className="py-5">
        <Row className="">
          <Col>
            <div>
              <img
                className="img-fluid shipping-truc py-5 mt-5 "
                width={783.64}
                src={ShippingTruck}
                alt="Shipping Truck Image"
              />
            </div>
          </Col>

          <Col>
            <div className="ms-3">
              <h3>
                We'll pick up & ship <br /> almost{" "}
                <span className="text-cyan">everything</span>
              </h3>
            </div>
            <div className="mt-4">
              <ListGroup as="ol" style={{ width: "30rem" }}>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center justify-content-center"
                  style={{ border: "none", marginBottom: "40px" }}
                >
                  <img src={Pickup} alt="placeholder" className="mr-3" />
                  <div className="ms-3">
                    <h5 style={{ marginBottom: "0" }}>Pickup</h5>
                    <p style={{ marginBottom: "0" }}>
                      We’ll pick your returnable product from your doorstep
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center justify-content-center"
                  style={{ border: "none", marginBottom: "40px" }}
                >
                  <img src={Shipment} alt="placeholder" className="mr-3" />
                  <div className="ms-3">
                    <h5 style={{ marginBottom: "0" }}>Shipment</h5>
                    <p style={{ marginBottom: "0" }}>
                      Then your returnable product shipped to desired place
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center justify-content-center"
                  style={{ border: "none", marginBottom: "40px" }}
                >
                  <img src={Support} alt="placeholder" className="mr-3" />
                  <div className="ms-3">
                    <h5 style={{ marginBottom: "0" }}>Support</h5>
                    <p style={{ marginBottom: "0" }}>
                      From pickup to end process we’ll provide customer support
                    </p>
                  </div>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex align-items-center justify-content-auto"
                  style={{ border: "none", marginBottom: "40px" }}
                >
                  <div className="ms-3">
                    <a
                      className="btn btn-learn-more"
                      style={{ marginBottom: "0" }}
                      href="#"
                    >
                      Learn More
                    </a>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="delivery-boxes-background">
        <Row>
          <Col>
            <img
              className="delivery-boxes"
              src={DeliveryBoxes}
              alt="placeholder"
            />
          </Col>
        </Row>
      </Container>

      <Container className="">
        <Row className=" ">
          <div className="sitting-man-background d-flex align-items-end">
            <Col>
              <div className="ms-3 mt-5">
                <h3 className="">
                  No driving. No lines. <br />
                  <span className="text-cyan">No worries.</span>
                </h3>
                <p>
                  A Returnsimple will pick up your online returns right
                  <br />
                  from your doorstep.
                </p>
                <a
                  className="btn btn-schedule-pickup"
                  style={{ marginTop: "5px", position: "relative" }}
                  href="#"
                >
                  schedule a pickup
                </a>
              </div>
            </Col>
            <Col>
              <img
                src={SittingMan}
                alt="Relaxed Sitting Person"
                style={{ width: "484px", position: "relative", bottom: "0" }}
              />
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default HomeInfo;
