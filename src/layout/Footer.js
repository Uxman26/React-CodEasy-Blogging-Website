import React from "react";
import { Col, Container, Image, NavLink, Row } from "react-bootstrap";

function Footer(props) {
  return (
    <div id="footer" className="bg-body-tertiary text-center pt-5 pb-2">
      <Container>
        <Row>
          <Col md={4}>
            <h3>LATEST</h3>
          </Col>
          <Col md={4}>
            <h3>LINKS</h3>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/">About</NavLink>
            <NavLink href="/">Privacy Policy</NavLink>
            <NavLink href="/">Contact Me</NavLink>
          </Col>
          <Col md={4}>
            <h3>HIRE ME</h3>
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <div>© 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
             CodEasy.com
          </a>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
