import React from "react";
import {Container, Navbar} from "react-bootstrap";

const Footer = () => {
  return (
    
       <Navbar bg="light" variant="dark" sticky="bottom">
         <Container className="d-flex justify-content-center">
      <h1>©</h1>
      <h4>Todos los derechos reservados</h4>
      </Container>
    </Navbar>
   
   
  );
};

export default Footer;
