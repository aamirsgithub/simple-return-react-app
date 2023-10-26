import React from "react";
import "./HomeInfo.css";
import ExpandableTextBox from "./FAQ";
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
import iPhone15 from "./../../assets/phone-14pro2.png";

import Rectangle1 from "./../../assets/Rectangle-1.png";
import Rectangle2 from "./../../assets/Rectangle-2.png";
import Rectangle3 from "./../../assets/Rectangle-3.png";
import Rectangle4 from "./../../assets/Rectangle-4.png";
import Rectangle5 from "./../../assets/Rectangle-5.png";

import FedEx from "./../../assets/brand-fedex.png";
import BrandUPS from "./../../assets/brand-ups.png";
import BrandUSPS from "./../../assets/brand-usps.png";
import BrandAmazon from "./../../assets/brand-amazon.png";
import PersonIcon from "./../../assets/person-icon.png";

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
        <Row className="d-flex align-items-center justify-content-center">
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

      {/* Display none when screen is small */}
      <Container fluid className="delivery-boxes-background">
        <Row >
          <Col sm={12} className="d-none d-sm-block" >
            <img
              className="delivery-boxes"
              src={DeliveryBoxes}
              alt="placeholder"
            />
          </Col>
        </Row>
      </Container>
      {/* No Driving. No Lines */}
      <Container fluid className="">
        <Row className="d-flex align-items-center justify-content-center">
          <div className="sitting-man-background d-flex align-items-end">
            <Col>
              <div className="ms-3 my-5">
                <h3 className="">
                  No driving. No lines. <br />
                  <span className="text-cyan">No worries.</span>
                </h3>
                <p className="fw-bold">
                  A Returnsimple will pick up your online returns right
                  <br />
                  from your doorstep.
                </p>
                <a
                  className="btn btn-schedule-pickup"
                  style={{ marginTop: "5px" }}
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
      {/* We’ll handle the stress of packaging your returns */}
      <Container fluid className="">
        <Row className="ms-5 my-5 d-flex align-items-center justify-content-center">
          <Col className="d-flex align-items-center justify-content-center">
            <img className="iPhone-image" src={iPhone15} alt="Phone Image" />
          </Col>
          <Col>
            <div className="font-weight-bold">
              <h2>
                <span className="text-cyan">We’ll handle </span>the
                <br />
                stress of packaging
                <br /> your returns
              </h2>
            </div>
            <div className="">
              <ExpandableTextBox
                text="Don't have a printer?"
                expandedText="Some expanded text"
              />
            </div>
            <div>
              <ExpandableTextBox
                text="Don't have a box?"
                expandedText="Some expanded text"
              />
            </div>
            <div>
              <ExpandableTextBox
                text="Who has a roll of tape lying around?"
                expandedText="Some expanded text"
              />
            </div>
            <div className="pt-4">
              <a className="btn btn-FAQs" style={{ marginTop: "5px" }} href="#">
                FAQ's
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
            <div className="ms-3 my-5">
              <h1>
                <span className="text-cyan">We accept </span>returns
                <br />
                purchased from
                <br />
                any online retailer
              </h1>
              <p>We’ll drop off your package at FedEx, UPS, USPS or Amazon</p>
              <a
                className="btn btn-schedule-pickup"
                style={{ marginTop: "5px", position: "relative" }}
                href="#"
              >
                schedule a pickup
              </a>
            </div>
          </Col>
          {/* Rectangle Images small screen display none*/}
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <img
                src={Rectangle2}
                alt="image1"
                style={{
                  width: "",
                  position: "absolute",
                  top: "130px",
                  left: "-6px",
                }}
              />
              <img
                src={Rectangle1}
                alt="image2"
                style={{
                  width: "",
                  position: "absolute",
                  top: "-55px",
                  left: "260px",
                }}
              />
              <img
                src={Rectangle3}
                alt="image3"
                style={{
                  width: "",
                  position: "absolute",
                  top: "365px",
                  left: "295px",
                }}
              />
              <img
                src={Rectangle4}
                alt="image4"
                style={{
                  width: "",
                  position: "absolute",
                  top: "493px",
                  left: "-30px",
                }}
              />
              <img
                src={Rectangle5}
                alt="image5"
                style={{
                  width: "",
                  position: "absolute",
                  top: "690px",
                  left: "250px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/>
<br/>
<br/>    
<br/><br/><br/><br/><br/><br/>
<br/>
<br/>
<br/>   
      <Container fluid>
        <Row className="">
          <Col className="d-flex justify-content-center">
            <div
              style={{
                position: "relative",
              }}
            >
              <img
                src={FedEx}
                alt="image1"
                style={{
                  width: "",
                }}
              />
              <img
                src={BrandUPS}
                alt="image2"
                style={{
                  width: "",
                }}
              />
              <img
                src={BrandUSPS}
                alt="image3"
                style={{
                  width: "",
                }}
              />
              <img
                src={BrandAmazon}
                alt="image4"
                style={{
                  width: "",
                }}
              />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Container fluid className="border py-5 bg-light">
        <Row className="">
          <div className="d-flex align-items-center justify-content-center"> 
          Reviews
          </div>
          <div className="fw-bold fs-3 d-flex align-items-center justify-content-center">
          Read what our clients are saying
          </div>
          <div className="fw-bold fs-3 d-flex align-items-center justify-content-center">
          ..........
          </div>
          
        </Row>
      </Container>

      <Container fluid className="border py-4 bg-light d-flex justify-content-center">
        <Row className="w-75">
          <Col xs={1} className="d-flex align-items-center">
          <img
              className="w-100 shadow rounded-circle"
              src={PersonIcon}
              alt="placeholder"
            />

          </Col>
          <Col xs={2} className="ps-5 pt-1">
          <div className=" font-14 fw-bold"> 
          Udhai G.
          </div>
          <div className=" fw-bold font-14"> 
          CEO Agency: Techolo
          </div>
          </Col>
          <Col xs={9} className="ps-5 font-14">
          <div className="d-flex fw-bold"> 
          Revolutionizing online shopping
          </div>
          <div className="d-flex"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet convallis nec tincidunt lacus. Sed id mattis erat. Morbi lectus mi, interdum sed mauris eu, dignissim interdum augue.
          </div>
          </Col>
          
        </Row>
      </Container>

      <Container fluid className="border py-4 bg-light d-flex justify-content-center">
        <Row className="w-75">
          <Col xs={1} className="d-flex align-items-center">
          <img
              className="w-100 shadow rounded-circle"
              src={PersonIcon}
              alt="placeholder"
            />

          </Col>
          <Col xs={2} className="ps-5 pt-1">
          <div className=" font-14 fw-bold"> 
          Udhai G.
          </div>
          <div className=" fw-bold font-14"> 
          CEO Agency: Techolo
          </div>
          </Col>
          <Col xs={9} className="ps-5 font-14">
          <div className="d-flex fw-bold"> 
          Revolutionizing online shopping
          </div>
          <div className="d-flex"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet convallis nec tincidunt lacus. Sed id mattis erat. Morbi lectus mi, interdum sed mauris eu, dignissim interdum augue.
          </div>
          </Col>
          
        </Row>
      </Container>

      <Container fluid className="border py-4 bg-light d-flex justify-content-center">
        <Row className="w-75">
          <Col xs={1} className="d-flex align-items-center">
          <img
              className="w-100 shadow rounded-circle"
              src={PersonIcon}
              alt="placeholder"
            />

          </Col>
          <Col xs={2} className="ps-5 pt-1">
          <div className=" font-14 fw-bold"> 
          Udhai G.
          </div>
          <div className=" fw-bold font-14"> 
          CEO Agency: Techolo
          </div>
          </Col>
          <Col xs={9} className="ps-5 font-14">
          <div className="d-flex fw-bold"> 
          Revolutionizing online shopping
          </div>
          <div className="d-flex"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet, consectetur adipiscing elit. Nulla at velit vel massa imperdiet convallis nec tincidunt lacus. Sed id mattis erat. Morbi lectus mi, interdum sed mauris eu, dignissim interdum augue.
          </div>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default HomeInfo;
