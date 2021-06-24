import React from "react";
import { Navbar, Col, Image } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar bg="dark" variant="light" sticky="bottom">
      <Col xs={2}>
        <Image src="../dosvasos.png" className="w-25" />
      </Col>
      <h6>Todos los derechos reservados</h6>
    </Navbar>
  );
};

export default Footer;
