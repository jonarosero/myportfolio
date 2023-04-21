import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Newslatter } from "../cards";
import logo from "../../assets/img/image 33.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Newslatter />
          <Col size={12} sm={6}>
            <img src={logo} alt="" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/jonathan-andres-rosero-soto-804128113/"><img src={navIcon1} alt=""/></a>
              <a href="https://www.facebook.com/jonathan.rosero.186/"><img src={navIcon2} alt=""/></a>
              <a href="https://www.instagram.com/jars9605/?hl=es"><img src={navIcon3} alt=""/></a>
            </div>
            <p>Copyright 2023. Create with React</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;