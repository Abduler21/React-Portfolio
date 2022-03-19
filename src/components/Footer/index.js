import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer className="footer">
      <Row>
        <Col size={12} lg={12} md={12} sm={12}>
          <p>&copy; Abdulmelik Ersoy</p>
        </Col>
      </Row>
      <Row>
        <Col size={12} lg={12} md={12} sm={12}>
          <a href="#about">
            <i class="fas fa-angle-up"></i>
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
