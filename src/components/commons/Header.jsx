import React from "react";
import { Navbar, Nav, Image, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faUserCog, faListOl } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <Navbar bg="light" variant="dark" sticky="top">
      <div className="container ml-auto">
        <NavLink exact={true} to="/" className="nav-link">
        <Col xs={2}>
      <Image src={process.env.PUBLIC_URL + "../better.png"} className="w-50 "/>
      </Col>
            
          
        </NavLink>
        <Nav className="mr-auto">
          <NavLink exact={true} to="/" className="nav-link mx-2 ">
            <FontAwesomeIcon icon={faMugHot} className="text-primary" size="lg" />
          </NavLink>
          <NavLink exact={true} to="/productos/agregar" className="nav-link mx-2 ">
          <FontAwesomeIcon icon={faUserCog} className="text-primary" size="lg"/>
          </NavLink>
          <NavLink exact={true} to="/productos" className="nav-link mx-2"  >
          <FontAwesomeIcon icon={faListOl} className="text-primary" size="lg"/>
          </NavLink>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
