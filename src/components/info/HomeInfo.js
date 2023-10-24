import React from 'react';
import { Container, Row, Col, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import BrandNames from './../../assets/brands.png';
import StarsImage from './../../assets/StarsImage.png';
import './HomeInfo.css'; 

const HomeInfo = () => {
  return (
    <Container fluid='sm'>
    <Row>
      <Col>            
        <div className="brandNames my-5">
            <img
                src={BrandNames}
                alt="Brands"
              />
        </div>
      </Col>
    </Row>


    <Row className='bg-black'>
      <Col>
         <div>
            <p className='text-one ps-5 py-5'>Here’s what our customer<br/> 
            experienced after testing<br/> “ReturnSimple”</p>
            <hr className='line px-3 '/>
          </div>
          <div className='ps-5'>
          <img
                src={StarsImage}
                alt="Brands"
              />
          </div>
          <div>
            <p className='text-two pl-5'>
            “They have thought of everything. The team is super friendly<br/>
             and efficient, making returning things simple and easy.”</p>
          </div>
          <div>
            <p className='text-two'>Monica H.  Beloved Customer</p>
          </div>
      </Col>

      <Col>

      </Col>
    </Row>
  </Container>
  )
};

export default HomeInfo;
