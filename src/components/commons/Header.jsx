import React from "react";
import { Navbar, Nav, Image, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <div className="container ml-auto">
        <NavLink exact={true} to="/" className="nav-link">
        <Col xs={2}>
      <Image src="../taza-corazon.png" className="w-25"/>
      </Col>
            
          
        </NavLink>
        <Nav className="mr-auto">
          <NavLink exact={true} to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink exact={true} to="/productos/agregar" className="nav-link">
            Adm
          </NavLink>
          <NavLink exact={true} to="/productos" className="nav-link">
            Productos
          </NavLink>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
